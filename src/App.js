import { useState } from "react";
import "./App.css";
import ExpensesList from "./components/ExpensesList";
import ExpenseSummary from "./components/ExpenseSummary";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense(expense) {
    setExpenses((expenses) => [...expenses, expense]);
  }

  function deleteExpense(exp) {
    setExpenses(expenses.filter((expense) => expense !== exp));
  }

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const balance = income - totalExpenses;
  return (
    <div className="app">
      <Header
        onChange={setIncome}
        income={income}
        totalExpenses={totalExpenses}
      />
      <div className="form-expense-list">
        <Form onAddExpenses={addExpense} income={income} balance={balance} />
        <ExpensesList expensesList={expenses} onDeleteExpense={deleteExpense} />
      </div>
      <ExpenseSummary
        income={income}
        totalExpenses={totalExpenses}
        balance={balance}
      />
    </div>
  );
}

export default App;
