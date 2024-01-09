function registration() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("pas1").value;
    let password2 = document.getElementById("pas2").value;
    let phno = document.getElementById("phno").value;

    if (!name || !email || !password1 || !password2 || !phno) {
        alert("Please fill in all the fields.");
        return;
    }

    if (password1 === password2) {
        let userData = { name, email, password1, phno };
        localStorage.setItem("userdetails", JSON.stringify(userData));
        alert('REGISTERED SUCCESSFULLY');
        window.open("index.html", "_self");
    } else {
        alert("Passwords do not match. Please try again.");
    }
}
