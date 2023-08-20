const quotes = [
  {
    quote: "You can have it all. Just not all at once.",
    author: "Oprah Winfrey",
  },
  {
    quote: "Train your mind to see the good in every situation.",
    author: "Unknown",
  },
  {
    quote: "The most wasted of days is one without laughter.",
    author: "E. E. Cummings",
  },
  {
    quote:
      "Just for the record darling, not all positive change feels positive in the beginning.",
    author: "S. C. Lourie",
  },
  {
    quote:
      "Convince yourself every day that you are worthy of a good life. Let go of stress, breathe. Stay positive, all is well.",
    author: "Germany Kent",
  },
  {
    quote:
      "When the negative thoughts come—and they will; they come to all of us—it’s not enough to just not dwell on it. … You’ve got to replace it with a positive thought.",
    author: "Joel Osteen",
  },
  {
    quote: "The only disability in life is a bad attitude.",
    author: "Dale Carnegie",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `by ${todaysQuote.author}`;
