import { useState } from "react";

export default function Form({ onAddExpenses, balance }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !amount || !date) return;
    const expense = { description, amount, date };
    onAddExpenses(expense);

    setAmount("");
    setDate("");
    setDescription("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Amount</label>
      <input
        type="number"
        onChange={(e) =>
          setAmount(Number(e.target.value) > balance  ? amount : Number(e.target.value))
        }
        value={amount}
      />

      <label>Date</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <button>Add Expense</button>
    </form>
  );
}
