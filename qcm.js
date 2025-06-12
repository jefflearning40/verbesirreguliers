document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quizContainer');
    const progressContainer = document.getElementById('progressContainer');
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let timer;
    let timeLeft;

    // Mélanger les verbes et sélectionner les 100 premiers
    const shuffledVerbs = verbesIrreguliers.sort(() => 0.5 - Math.random()).slice(0, 100);

    // Types de questions possibles
    const questionTypes = [
        "preterit",
        "participePasse",
        "baseVerbale",
        "traduction"
    ];

    // Niveaux de difficulté
    const difficultyLevels = {
        easy: 20,    // 20 secondes
        medium: 10,  // 10 secondes
        hard: 5      // 5 secondes
    };

    // Chemins des vidéos de fond pour chaque niveau de difficulté
    const videoSources = {
        easy: "assets/images/video2.mp4",
        medium: "assets/images/video3.mp4",
        hard: "assets/images/video4.mp4"
    };

    // Sélectionner un niveau de difficulté (par défaut, facile)
    let difficulty = difficultyLevels.easy;

    // Fonction pour obtenir des options incorrectes aléatoires
    function getRandomOptions(currentVerbe, property) {
        const otherVerbs = shuffledVerbs.filter(verbe => verbe.infinitif !== currentVerbe.infinitif);
        const shuffled = otherVerbs.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2).map(verbe => verbe[property]);
    }

    // Fonction pour obtenir des traductions incorrectes aléatoires
    function getRandomTranslations(currentVerbe) {
        const otherVerbs = shuffledVerbs.filter(verbe => verbe.infinitif !== currentVerbe.infinitif);
        const shuffled = otherVerbs.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2).map(verbe => verbe.traduction);
    }

    // Fonction pour afficher le sélecteur de niveau de difficulté
    function displayDifficultySelector() {
        quizContainer.innerHTML = `
            <h3 data-i18n="difficultyLevel">Choisissez le niveau de difficulté</h3>
            <select id="difficultySelector" class="form-control">
                <option value="${difficultyLevels.easy}" data-i18n="easy">Facile (20 secondes)</option>
                <option value="${difficultyLevels.medium}" data-i18n="medium">Moyen (10 secondes)</option>
                <option value="${difficultyLevels.hard}" data-i18n="hard">Difficile (5 secondes)</option>
            </select>
            <button id="startButton" class="btn btn-primary" data-i18n="startQuiz">Commencer le QCM</button>
        `;

        // Ajouter un gestionnaire d'événements pour le bouton "Commencer le QCM"
        document.getElementById('startButton').addEventListener('click', function() {
            difficulty = parseInt(document.getElementById('difficultySelector').value);
            setBackgroundVideo(difficulty);
            displayQuestion(currentQuestionIndex);
        });
    }

    // Fonction pour définir la vidéo de fond en fonction du niveau de difficulté
    function setBackgroundVideo(difficulty) {
        const backgroundVideo = document.getElementById('backgroundVideo');
        if (difficulty === difficultyLevels.easy) {
            backgroundVideo.src = videoSources.easy;
        } else if (difficulty === difficultyLevels.medium) {
            backgroundVideo.src = videoSources.medium;
        } else if (difficulty === difficultyLevels.hard) {
            backgroundVideo.src = videoSources.hard;
        }
        backgroundVideo.load();
    }

    // Fonction pour afficher une question
    function displayQuestion(index) {
        clearTimeout(timer); // Efface le minuteur précédent

        quizContainer.innerHTML = ''; // Efface le contenu précédent

        const verbe = shuffledVerbs[index];
        const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
        let questionText, correctAnswer, options;

        switch (questionType) {
            case "preterit":
                questionText = `Quel est le prétérit du verbe "${verbe.infinitif}" ?`;
                correctAnswer = verbe.preterit;
                options = [verbe.infinitif, verbe.participePasse];
                break;
            case "participePasse":
                questionText = `Quel est le participe passé du verbe "${verbe.infinitif}" ?`;
                correctAnswer = verbe.participePasse;
                options = [verbe.infinitif, verbe.preterit];
                break;
            case "baseVerbale":
                questionText = `Quel est l'infinitif du verbe dont le prétérit est "${verbe.preterit}" ?`;
                correctAnswer = verbe.infinitif;
                options = [verbe.preterit, verbe.participePasse];
                break;
            case "traduction":
                questionText = `Quel est la traduction du verbe "${verbe.infinitif}" ?`;
                correctAnswer = verbe.traduction;
                options = getRandomTranslations(verbe);
                break;
        }

        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3 data-i18n="question${index + 1}">Question ${index + 1}: ${questionText}</h3>
            <ul>
                <li><input type="radio" name="q${index}" value="${correctAnswer}"> ${correctAnswer}</li>
                <li><input type="radio" name="q${index}" value="${options[0]}"> ${options[0]}</li>
                <li><input type="radio" name="q${index}" value="${options[1]}"> ${options[1]}</li>
            </ul>
            <button id="nextButton" class="btn btn-primary" data-i18n="next">Suivant</button>
            <button id="quitButton" class="btn btn-secondary" data-i18n="quit">Abandonner</button>
            <div id="timerDisplay" data-i18n="timeLeft">Temps restant: ${difficulty} secondes</div>
        `;
        quizContainer.appendChild(questionDiv);

        // Ajouter un gestionnaire d'événements pour le bouton "Suivant"
        document.getElementById('nextButton').addEventListener('click', function() {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption) {
                // Vérifier si l'option sélectionnée est égale à la bonne réponse
                if (selectedOption.value === correctAnswer) {
                    correctAnswers++;
                }
                if (currentQuestionIndex < shuffledVerbs.length - 1) {
                    currentQuestionIndex++;
                    displayQuestion(currentQuestionIndex);
                } else {
                    quizContainer.innerHTML = '<h3 data-i18n="endOfQuiz">Fin du QCM !</h3>';
                }
                updateProgress();
            } else {
                alert(i18next.t("pleaseSelectAnAnswer"));
            }
        });

        // Ajouter un gestionnaire d'événements pour le bouton "Abandonner"
        document.getElementById('quitButton').addEventListener('click', function() {
            Swal.fire({
                title: i18next.t("areYouSure"),
                text: i18next.t("youCannotGoBack"),
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: i18next.t("yesQuit")
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'qcm.php'; // Rediriger vers le menu initial du QCM
                }
            });
        });

        // Démarrer le minuteur
        timeLeft = difficulty;
        const timerDisplay = document.getElementById('timerDisplay');
        timer = setInterval(function() {
            timeLeft--;
            timerDisplay.textContent = `${i18next.t("timeLeft")}: ${timeLeft} ${i18next.t("seconds")}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                if (currentQuestionIndex < shuffledVerbs.length - 1) {
                    currentQuestionIndex++;
                    displayQuestion(currentQuestionIndex);
                } else {
                    quizContainer.innerHTML = '<h3 data-i18n="endOfQuiz">Fin du QCM !</h3>';
                }
                updateProgress();
            }
        }, 1000);
    }

    // Fonction pour mettre à jour les jauges de progression
    function updateProgress() {
        const totalQuestions = shuffledVerbs.length;
        const answeredQuestions = currentQuestionIndex + 1;
        const answeredPercentage = (answeredQuestions / totalQuestions) * 100;
        const correctPercentage = (correctAnswers / answeredQuestions) * 100;

        progressContainer.innerHTML = `
            <div class="progress" style="position: relative;">
                <div class="progress-bar bg-info" role="progressbar" style="width: ${answeredPercentage}%; position: relative;" aria-valuenow="${answeredPercentage}" aria-valuemin="0" aria-valuemax="100">
                    ${i18next.t("answeredQuestions")}: ${answeredQuestions}/${totalQuestions} (${answeredPercentage.toFixed(2)}%)
                    <div class="progress-taxi" style="left: ${answeredPercentage}%;"></div>
                </div>
            </div>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${correctPercentage}%" aria-valuenow="${correctPercentage}" aria-valuemin="0" aria-valuemax="100">
                    ${i18next.t("correctAnswers")}: ${correctAnswers}/${answeredQuestions} (${correctPercentage.toFixed(2)}%)
                </div>
            </div>
        `;
    }

    // Afficher le sélecteur de niveau de difficulté
    displayDifficultySelector();
});
