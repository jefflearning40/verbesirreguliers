document.addEventListener("DOMContentLoaded", () => {
    const translationsQCM = {
        fr: {
            "titre-qcm": "Exercice QCM",
            "choix-niveau-label": "Choisissez un niveau :",
            "facile": "Facile",
            "moyen": "Moyen",
            "difficile": "Difficile",
            "valider": "Valider",
            "recommencer": "Recommencer",
            "score": "Score",
            "correction": "Correction",
            "container-qcm-title": "Testez vos verbes irréguliers !"
        },
        en: {
            "titre-qcm": "MCQ Exercise",
            "choix-niveau-label": "Choose a level:",
            "facile": "Easy",
            "moyen": "Medium",
            "difficile": "Hard",
            "valider": "Submit",
            "recommencer": "Restart",
            "score": "Score",
            "correction": "Correction",
            "container-qcm-title": "Test your irregular verbs!"
        }
    };

    const currentLang = localStorage.getItem("langue") || "fr";

    for (const [id, text] of Object.entries(translationsQCM[currentLang])) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
});
