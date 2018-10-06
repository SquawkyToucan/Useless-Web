function generateQuote() {
  var quotePartOne = ["My code is structurally oppressing me ", "I'm going to commit first ", "I would argue for authoritarianism ", "We should listen to what the government says ", "GitHub is bullying me ", "I like communism, ", "We should wear Hamilton shirts ", "GitHub is structurally oppressing us "];
  var quotePartTwo = ["because we should listen to what the government says.", "because it's structurally oppresing me.", "like the time I beat up on a Bishop's kid.", "so I can do whatever the government tells me to.", "so I don't get errors and you do ha", "because it's beautiful.", "because I am communist.", "because I'm wearing a Hamilton shirt."];
  var finishedQuote = "";
  finishedQuote = quotePartOne[randomNumber(0, 7)] + quotePartTwo[randomNumber(0, 7)];
  return finishedQuote;
}

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
