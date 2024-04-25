function LoginCheck()
{
    //takes username and password input and stores them
    let username = document.getElementById("textboxUsername").value;
    let password = document.getElementById("textboxPassword").value;
    let errorMsg = document.getElementById("errorMsg"); 

    fetch("./loggin.json")
    .then(responce => responce.json())
    .then(data =>
            {
                for(let i = 0; i < 5; i++)
                {

                    if (data.users[i].Username == username && data.users[i].Password == password)
                    {
                        if (data.users[i].Username == "xin")
                        {
                            window.open("stonkscreator.html", "_blank");
                        }
                        else
                        {
                            window.open("stonks.html", "_blank");
                        }
                        window.close(this)

                    }
                    else
                    {
                        errorMsg.innerHTML = "invalid username and/or password";
                    }
                }
            }
        )
}
function hidepassword()
{
    let password = document.getElementById("textboxPassword");
    let vispassword = document.getElementById("passwordbutton");
    if (password.type == "text")
    {
        password.type = "password";
        vispassword.style.color = "black"
        vispassword.style.backgroundColor = "white"
    }
    else
    {
        password.type = "text";
        vispassword.style.color = "white"
        vispassword.style.backgroundColor = "black"
    }
}