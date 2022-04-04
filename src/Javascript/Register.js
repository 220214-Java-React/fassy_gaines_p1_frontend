

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
        let response = await fetch("${http://localhost:8080/UserServlet}",
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userObj)
            }
        );
    }
    else
    {
        alert("one or more fields are missing");
    }
}