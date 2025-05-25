document.addEventListener('DOMContentLoaded', function() {
    i18next.init({
        lng: 'fr', // Langue par défaut
        resources: {
            fr: {
                translation: {
                    "title": "QCM Verbes irréguliers",
                    "home": "Accueil",
                    "quiz": "QCM",
                    "translateButton": "Traduire en Anglais",
                    "welcome": "QCM sur les verbes irréguliers",
                    "difficultyLevel": "Choisissez le niveau de difficulté",
                    "easy": "Facile (20 secondes)",
                    "medium": "Moyen (10 secondes)",
                    "hard": "Difficile (5 secondes)",
                    "startQuiz": "Commencer le QCM",
                    "copyright": "&copy; 2025 Mon Site. Tous droits réservés.",
                    "legalNotice": "Mentions légales",
                    "privacyPolicy": "Politique de confidentialité",
                    "contactUs": "Contactez-nous",
                    "about": "À propos",
                    "aboutContent": "Contenu de la section À propos...",
                    "close": "Fermer",
                    "forgotPassword": "Mot de passe oublié ?",
                    "forgotPasswordContent": "Entrez votre email pour recevoir un lien de réinitialisation de mot de passe.",
                    "send": "Envoyer",
                    "message": "Message",
                    "messageContent": "Contenu du message...",
                    "next": "Suivant",
                    "quit": "Abandonner",
                    "timeLeft": "Temps restant",
                    "seconds": "secondes",
                    "endOfQuiz": "Fin du QCM !",
                    "answeredQuestions": "Questions répondues",
                    "correctAnswers": "Bonnes réponses",
                    "pleaseSelectAnAnswer": "Veuillez sélectionner une réponse.",
                    "areYouSure": "Êtes-vous sûr ?",
                    "youCannotGoBack": "Vous ne pourrez pas revenir en arrière !",
                    "yesQuit": "Oui, abandonner !",
                    "question1": "Question 1: Quel est le prétérit du verbe 'aller' ?",
                    "question2": "Question 2: Quel est le participe passé du verbe 'know' ?",
                    // Ajoutez d'autres traductions pour les questions ici
                }
            },
            en: {
                translation: {
                    "title": "Irregular Verbs Quiz",
                    "home": "Home",
                    "quiz": "Quiz",
                    "translateButton": "Translate to French",
                    "welcome": "Irregular Verbs Quiz",
                    "difficultyLevel": "Choose the difficulty level",
                    "easy": "Easy (20 seconds)",
                    "medium": "Medium (10 seconds)",
                    "hard": "Hard (5 seconds)",
                    "startQuiz": "Start the Quiz",
                    "copyright": "&copy; 2025 My Site. All rights reserved.",
                    "legalNotice": "Legal Notice",
                    "privacyPolicy": "Privacy Policy",
                    "contactUs": "Contact Us",
                    "about": "About",
                    "aboutContent": "About section content...",
                    "close": "Close",
                    "forgotPassword": "Forgot password?",
                    "forgotPasswordContent": "Enter your email to receive a password reset link.",
                    "send": "Send",
                    "message": "Message",
                    "messageContent": "Message content...",
                    "next": "Next",
                    "quit": "Quit",
                    "timeLeft": "Time left",
                    "seconds": "seconds",
                    "endOfQuiz": "End of the Quiz!",
                    "answeredQuestions": "Answered questions",
                    "correctAnswers": "Correct answers",
                    "pleaseSelectAnAnswer": "Please select an answer.",
                    "areYouSure": "Are you sure?",
                    "youCannotGoBack": "You cannot go back!",
                    "yesQuit": "Yes, quit!",
                    "question1": "Question 1: What is the past form of the verb 'to go'?",
                    "question2": "Question 2: What is the past participle of the verb 'know'?",
                    // Ajoutez d'autres traductions pour les questions ici
                }
            }
        }
    }, function(err, t) {
        // Mettre à jour le contenu de la page
        updateContent();
    });

    // Fonction pour mettre à jour le contenu de la page
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18next.t(key);
        });
    }

    // Écouteur d'événement pour le bouton de traduction
    document.getElementById('translateButton').addEventListener('click', function() {
        const currentLanguage = i18next.language;
        const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        i18next.changeLanguage(newLanguage, updateContent);
    });
});
