const min = 1;
const max = 100;


let answer = Math.floor(Math.random() * (max - min + 1)) + min;

let tries = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const message = document.getElementById("message");
const triesText = document.getElementById("tries");


button.addEventListener("click", checkGuess);

function checkGuess() {

    let guess = Number(input.value);

    if (!guess) {
        message.textContent = "Lütfen bir sayı gir!";
        message.style.color = "red";
        return;
    }

    tries++;

    if (guess < answer) {
        message.textContent = "📉 Çok düşük!";
        message.style.color = "orange";
    }
    else if (guess > answer) {
        message.textContent = "📈 Çok yüksek!";
        message.style.color = "orange";
    }
    else {
        message.textContent = "🎉 Doğru bildin!";
        message.style.color = "green";

        input.disabled = true;
        button.disabled = true;
    }

    triesText.textContent = "Deneme sayısı: " + tries;

    input.value = "";
}

