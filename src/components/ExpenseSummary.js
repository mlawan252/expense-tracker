export default function ExpenseSummary({income, totalExpenses, balance}){
    //const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    

    return(
        <footer className="footer">
            <h4>Expense Summary</h4>
            <div className="summary">
                <p>Total Income: <strong>${income}</strong></p>
                <p>Total Expenses: <strong>${totalExpenses}</strong></p>
                <p>BALANCE: <strong>${balance}</strong></p>
            </div>
        </footer>
    )
}