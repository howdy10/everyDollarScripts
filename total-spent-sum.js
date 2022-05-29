// this script allows you to see your total sum (with cents) from the EveryDollar budgeting app (everydollar.com)
// Need to have selected spent on the nav on the right. This will show the spent amounts on the DOM to allow the script to pull
// just paste it in the console after you login and it capture the categories/sub categories, and total spent for the selected month
// it has only been tested in Chrome on full, non-mobile layout
// TO-DO: Can pull from the catefory list so tab doesn't need to be selected, but this works for now

var lines = [];
var sum = 0;

document.querySelectorAll(".BudgetOverviewList-value").forEach((node) => {
  const amountUnformated = node.getAttribute("data-text");

  amount = parseFloat(amountUnformated.replace("$", "").replace(",", ""));
  sum += amount;
});
console.log(Math.round((sum + Number.EPSILON) * 100) / 100);
