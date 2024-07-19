

export default function Header({onChange, income, totalExpenses}) {
  
  return (
    <header className="header">
      <h2>Expense Tracker</h2>
      <input
        type="text"
        placeholder="Total Income..."
        value={income}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={totalExpenses === income}
      />
    </header>
  );
}
