# -*- coding: utf-8 -*-
# Description : Ce script génère une arborescence d’un répertoire en listant les fichiers et dossiers,
#  et extrait les fonctions PHP définies dans les fichiers .php.
#  Le résultat est sauvegardé dans un fichier texte.
# Auteur : Touchet

import os
import re

EXCLUDED_DIRS = {"node_modules", ".git"}

def extract_php_functions(file_path):
    """
    Extrait les noms des fonctions PHP définies dans un fichier.
    """
    functions = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        matches = re.findall(r'(?:public|protected|private)?\s*function\s+([a-zA-Z0-9_]+)\s*\(', content)
        functions = [f"↳ function {match}()" for match in matches]
    except Exception as e:
        print(f"[Erreur lecture {file_path}]: {e}")
    return functions

def generate_tree(directory, prefix=""):
    """
    Génère récursivement une représentation en arbre d’un dossier,
    en y ajoutant les fonctions PHP détectées, en excluant certains dossiers.
    """
    tree_str = ""
    try:
        entries = sorted(os.listdir(directory))
    except Exception as e:
        print(f"[Erreur accès {directory}]: {e}")
        return tree_str

    for index, entry in enumerate(entries):
        path = os.path.join(directory, entry)

        if os.path.isdir(path) and entry in EXCLUDED_DIRS:
            continue  # Ignore les dossiers exclus

        connector = "└── " if index == len(entries) - 1 else "├── "
        tree_str += f"{prefix}{connector}{entry}\n"

        if os.path.isfile(path) and entry.endswith('.php'):
            functions = extract_php_functions(path)
            for func in functions:
                tree_str += f"{prefix}    {func}\n"

        if os.path.isdir(path):
            extension = "    " if index == len(entries) - 1 else "│   "
            tree_str += generate_tree(path, prefix + extension)
    return tree_str

if __name__ == "__main__":
    root_dir = "."
    tree_output = generate_tree(root_dir)

    with open("arborescence_projet.txt", "w", encoding="utf-8") as f:
        f.write(tree_output)

    print("Arborescence avec fonctions PHP générée dans 'arborescence_projet.txt'")