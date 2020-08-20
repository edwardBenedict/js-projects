const quotes = [
  {
    name: "Nelson Mandela",
    quote:
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
  },
  {
    name: "Walt Disney",
    quote: '"The way to get started is to quit talking and begin doing."',
  },
  {
    name: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    name: "Eleanor Roosevelt",
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    name: "Oprah Winfrey",
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    name: "James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    name: "John Lennon",
    quote: "Life is what happens when you're busy making other plans.",
  },
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

/*
const simpleQuotes = [
  {
    name: "author number 1",
    quote: "quote number 1",
  },
  {
    name: "author number 2",
    quote: "quote number 2",
  },
];
*/
