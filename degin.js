// Login/Register form toggle
document.addEventListener("DOMContentLoaded", function() {
    
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Agar login/register page pe ho to toggle kaam karega
    if(loginBtn && registerBtn){
        loginBtn.addEventListener("click", () => {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            loginBtn.classList.add("active");
            registerBtn.classList.remove("active");
        });

        registerBtn.addEventListener("click", () => {
            registerForm.style.display = "block";
            loginForm.style.display = "none";
            registerBtn.classList.add("active");
            loginBtn.classList.remove("active");
        });
    }

    // Home page ke 4 box pe click effect
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            alert("Coming Soon: " + box.querySelector("h3").innerText);
        });
    });

});