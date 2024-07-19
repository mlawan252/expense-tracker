import ExpenseItem from "./ExpenseItem";
export default function ExpensesList({ expensesList, onDeleteExpense }) {
  return (
    <ul>
      {expensesList.map((expense, index) => (
        <ExpenseItem
          key={index}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
      
    </ul>
  );
}
