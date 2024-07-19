export default function ExpenseItem({expense, onDeleteExpense}){
    return(
       
         <li>
                <p>{expense.description}</p>
                <p>${expense.amount}</p>
                <p>{expense.date}</p>
                <button onClick={()=>onDeleteExpense(expense)}>❌</button>
                
            </li>
    )
}