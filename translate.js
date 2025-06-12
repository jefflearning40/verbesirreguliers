document.addEventListener('DOMContentLoaded', function() {
    i18next.init({
        lng: 'fr', // Default language
        resources: {
            fr: {
                translation: {
                    "title": "QCM Verbes irréguliers",
                    "home": "Accueil",
                    "quiz": "QCM",
                    "translateButton": "Traduire en Anglais",
                    "welcome": "QCM sur les verbes irréguliers",
                    "quizContent": "Contenu du QCM ici...",
                    "exercises": "Exercices",
                    "register": "Inscription",
                    "login": "Connexion",
                    "verbsTable": "Tableau des verbes",
                    "startQuiz": "Commencer le QCM",
                    "name": "Nom",
                    "enterName": "Entrez votre nom",
                    "email": "Email",
                    "enterEmail": "Entrez votre email",
                    "address": "Adresse postale",
                    "enterAddress": "Entrez votre adresse postale",
                    "phone": "Téléphone",
                    "enterPhone": "Entrez votre numéro de téléphone",
                    "rgpdConsent": "J'accepte le traitement de mes données conformément au RGPD",
                    "registerButton": "S'inscrire",
                    "password": "Mot de passe",
                    "forgotPassword": "Mot de passe oublié ?",
                    "forgotPasswordContent": "Entrez votre email pour recevoir un lien de réinitialisation de mot de passe.",
                    "send": "Envoyer",
                    "message": "Message",
                    "messageContent": "Contenu du message...",
                    "copyright": " 2025 Mon Site. Tous droits réservés.",
                    "legalNotice": "Mentions légales",
                    "privacyPolicy": "Politique de confidentialité",
                    "contactUs": "Contactez-nous",
                    "about": "À propos",
                    "aboutContent": "Contenu de la section À propos...",
                    "close": "Fermer",
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
                    // Add other translations for questions here
                }
            },
            en: {
                translation: {
                    "title": "Irregular Verbs Quiz",
                    "home": "Home",
                    "quiz": "Quiz",
                    "translateButton": "Translate to French",
                    "welcome": "Irregular Verbs Quiz",
                    "quizContent": "Quiz content here...",
                    "exercises": "Exercises",
                    "register": "Register",
                    "login": "Login",
                    "verbsTable": "Verbs Table",
                    "startQuiz": "Start the Quiz",
                    "name": "Name",
                    "enterName": "Enter your name",
                    "email": "Email",
                    "enterEmail": "Enter your email",
                    "address": "Postal Address",
                    "enterAddress": "Enter your postal address",
                    "phone": "Phone",
                    "enterPhone": "Enter your phone number",
                    "rgpdConsent": "I accept the processing of my data in accordance with GDPR",
                    "registerButton": "Register",
                    "password": "Password",
                    "forgotPassword": "Forgot password?",
                    "forgotPasswordContent": "Enter your email to receive a password reset link.",
                    "send": "Send",
                    "message": "Message",
                    "messageContent": "Message content...",
                    "copyright": "&copy; 2025 My Site. All rights reserved.",
                    "legalNotice": "Legal Notice",
                    "privacyPolicy": "Privacy Policy",
                    "contactUs": "Contact Us",
                    "about": "About",
                    "aboutContent": "About section content...",
                    "close": "Close",
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
                    // Add other translations for questions here
                }
            }
        }
    }, function(err, t) {
        // Update the content of the page
        updateContent();
    });

    // Function to update the content of the page
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (element.placeholder) {
                element.placeholder = i18next.t(key);
            }
            if (element.textContent) {
                element.textContent = i18next.t(key);
            }
        });
    }

    // Event listener for the translation button
    document.getElementById('translateButton').addEventListener('click', function() {
        const currentLanguage = i18next.language;
        const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        i18next.changeLanguage(newLanguage, updateContent);
        // Update the button text
        this.textContent = newLanguage === 'fr' ? 'Translate to English' : 'Traduire en Français';
    });
});
