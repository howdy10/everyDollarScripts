// this script allows you to see your total sum (with cents) from the EveryDollar budgeting app (everydollar.com)
// just paste it in the console after you login and it capture the categories/sub categories, and total spent for the selected month
// it has only been tested in Chrome on full, non-mobile layout

var lines = [];
var sum = 0;

document.querySelectorAll(".Budget-budgetGroup--draggable").forEach((node) => {
  const rows = node.getElementsByClassName("BudgetItemRow");

  if (!rows) {
    return;
  }

  for (let i = 0, len = rows.length; i < len; ++i) {
    const rowNode = rows[i];
    const moneyNode = rowNode.getElementsByClassName("BudgetItem-secondColumn");
    const amountUnformated = moneyNode[0].getAttribute("data-text");

    amount = parseFloat(amountUnformated.replace("$", "").replace(",", ""));
    sum += amount;
  }
});

Math.round((sum + Number.EPSILON) * 100) / 100;
