const spanOfWeekday = document.getElementById("weekday");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const date = new Date();
const dayNumber = date.getDay();
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

spanOfWeekday.textContent = daysOfWeek[dayNumber];

function randomQuote() {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            data.maxLength = 40;
            data.minLength = 10;
            quote.textContent = "- Quote: " + data.content;
            author.textContent = "- " + data.author;
        })
        .catch((err) => {
            throw new Error(err);
        });
}

randomQuote();
