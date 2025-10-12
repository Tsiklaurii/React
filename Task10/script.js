// 1. User Login (Fake Login)
const logInForm = document.getElementById("log_in_form");
const userName = document.getElementById("username");
const result = document.getElementById("result");

logInForm.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("userName", userName.value);
    sessionStorage.setItem("isLoggedIn", "true");

    logInForm.classList.add("none");
    const getUserName = localStorage.getItem("userName");
    result.innerHTML = `Welcome back, ${getUserName}!`;
});


// 2. Theme Switcher (Light/Dark Mode)
const toggleBtn = document.getElementById("toggle_theme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});


// 3. Cookie Consent
const acceptBtn = document.getElementById("accept");
const banner = document.getElementById("banner");

const cookieExist = getCookie("cookieAccepted");

if (cookieExist) {
    banner.classList.add("none");
} else {
    acceptBtn.addEventListener("click", () => {
        const expires = new Date(Date.now() + 7 * 864e5).toUTCString();
        document.cookie = `cookieAccepted=true; expires=${expires}; path=/`

        banner.classList.add("none");
    })
}
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}


// 4. Logout Function
const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userName");
    sessionStorage.clear();
    location.reload();
})