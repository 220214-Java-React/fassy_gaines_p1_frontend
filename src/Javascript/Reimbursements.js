

let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitFunction, false);

async function submitFunction()
{
    let reimburseObj =
    {
        name: document.getElementById("employeeName").value,
        expenses: document.getElementById("expenseType").value,
        money: document.getElementById("amountSpent").value
    }

    let nonNull = Object.values(reimburseObj).every(value =>
        {
            if (!value)
            {
                return false;
                alert("Invalid Values...");
            }
            else
                return true;
        })

        
        if(nonNull)
        {
            await fetch('http://localhost:8080/ReimbursementServlet',
            {
                method: 'POST',
                body: JSON.stringify(reimburseObj)
            });
        }
}