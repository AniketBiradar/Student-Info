function login() {
    let enteredUsername = document.getElementById("name").value;
    let enteredPassword = document.getElementById("pas1").value;

    let userData = JSON.parse(localStorage.getItem("userdetails"));
    
    if (userData && enteredUsername === userData.name && enteredPassword === userData.password) {
        window.open("home.html", "_self");
    } else {
        alert("INVALID CREDENTIALS");
    }
}