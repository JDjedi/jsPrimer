const account = {
  name: "Thor",
  ledger: [],
  expenses: [],
  income: [],
  balance: []
};

const expenseToAdd = function(accountToAdd, expenseDescription, amountToAdd) {
  accountToAdd.expenses.push(amountToAdd);
  accountToAdd.ledger.push({
    description: expenseDescription,
    amount: amountToAdd
  });
};

const incomeToAdd = function(accountToAdd, incomeDescription, amountToAdd) {
  accountToAdd.income.push(amountToAdd);
  accountToAdd.ledger.push({
    description: incomeDescription,
    amount: amountToAdd
  });
};

const balanceFinder = function(accountToBalance) {
  let expenseSum = 0;
  let incomeSum = 0;

  accountToBalance.income.forEach(function(index) {
    incomeSum = incomeSum + index;
  });

  accountToBalance.expenses.forEach(function(index) {
    expenseSum = expenseSum + index;
  });

  accountToBalance.balance = incomeSum - expenseSum;
};

const getAccountSummary = function(accountToDisplay) {
  return `${accountToDisplay.name} has an account balance of $${
    accountToDisplay.balance
  }.`;
};

expenseToAdd(account, "Ramen Tatsuya", 23);
expenseToAdd(account, "Gas", 45);
expenseToAdd(account, "Bed, Bath, and Beyond", 34);
expenseToAdd(account, "Sway", 118);
incomeToAdd(account, "First Freelance Gig", 1400);
incomeToAdd(account, "Part-time, Costco", 1100);
balanceFinder(account);
getAccountSummary(account);
console.log("\n");
console.log(account);
