document.getElementById("RegisterButton").addEventListener("click", registerFunction, false);

function registerFunction()
{
    window.location.href = "signUp.html";
}

let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginFunction, false);

async function loginFunction()
{
    let userObj =
    {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    let nonNull = Object.values(userObj).every(value =>
        {
            if (!value)
            {
                return false;
                alert("incorrect username or password.");
            }
            else
                return true;
        })
        if(nonNull)
        {
            await fetch('http://localhost:8080/LoginServlet',
            {
                method: 'POST',
                body: JSON.stringify(userObj)
            });
        }
    
}

