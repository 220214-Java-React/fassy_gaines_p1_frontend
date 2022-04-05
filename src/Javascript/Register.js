const baseURL = "http://127.0.0.1:5500/src/"
const thisURL = window.location.href;
const url = "http://localhost:8080/UserServlet"

let registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", registerFunction, false);


async function registerFunction()
{
    let userObj =
    {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        role: document.getElementById("role").value
    }

    let nonNull = Object.values(userObj).every(value =>
    {
        if (!value)
            return false;
        else
            return true;
    })

    if (nonNull) {
        await fetch('http://localhost:8080/UserServlet',
            {
                method: 'POST',
                headers:{"Content-type":"application/json"},
                body: JSON.stringify(userObj)
            }
        );
    }
    else
    {
        alert("one or more fields are missing");
    }
}