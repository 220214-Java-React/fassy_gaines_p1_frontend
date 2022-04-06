document.getElementById("registerButton").addEventListener("click", registerFunction, false);

function registerFunction() {
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
    let nonNull = Object.values(userObj).every(value => {
        if (!value) {
            return false;
            alert("one or more fields are empty.");
        }
        else
            return true;
    });
    if (nonNull) {
        await fetch('http://localhost:8080/LoginServlet',
            {
                method: 'POST',
                body: JSON.stringify(userObj)
            })
            .then(response => redirect(response))
    }

}

function redirect(response)
{
    if(response.status == 202)
                    {
                       window.location.href = "index.html";
                    }
                    else if(response.status == 200)
                    {
                        alert("either your username or password is incorrect.");
                    }
}

