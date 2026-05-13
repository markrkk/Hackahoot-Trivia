"use strict";

const questions = [
    {
        q: "¿Qué etiqueta se usa para un título principal en HTML?",
        options: ["<p>", "<h1>", "<div>", "<span>"],
        answer: "<h1>"
    },
    {
        q: "¿Qué propiedad de CSS cambia el color del texto?",
        options: ["font-size", "background-color", "color", "margin"],
        answer: "color"
    },
    {
        q: "¿Qué método se usa para seleccionar un elemento por id?",
        options: ["querySelectorAll", "getElementById", "createElement", "innerHTML"],
        answer: "getElementById"
    }
];

let current = 0;
let score = 0;

const questionText = document.getElementById("pregunta");
const optionsBox = document.getElementById("respuestas");
const message = document.getElementById("mensaje");
const scoreText = document.getElementById("puntaje");

function showQuestion() {
    if (current >= questions.length) {
        questionText.textContent = "Juego terminado";
        optionsBox.innerHTML = "";
        message.textContent = "Puntaje final: " + score;
        return;
    }

    questionText.textContent = questions[current].q;
    optionsBox.innerHTML = "";
    message.textContent = "";

    questions[current].options.forEach(function(option) {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.addEventListener("click", function() {
            checkAnswer(option);
        });

        optionsBox.appendChild(button);
    });
}

function checkAnswer(option) {
    if (option === questions[current].answer) {
        message.textContent = "Correcto";
        score++;
    } else {
        message.textContent = "Incorrecto";
    }

    scoreText.textContent = "Puntaje: " + score;

    current++;

    setTimeout(function() {
        showQuestion();
    }, 1000);
}

showQuestion();