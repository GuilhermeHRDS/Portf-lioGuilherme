// ==================== TEMA ====================
(function () {
    const btn = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const saved = localStorage.getItem("theme");

    if (saved === "dark") root.setAttribute("data-theme", "dark");

    if (btn) {
        btn.addEventListener("click", () => {
            if (root.getAttribute("data-theme") === "dark") {
                root.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            } else {
                root.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
})();

// ==================== EMAIL + VALIDAÇÃO ====================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // 🔴 Validação obrigatória
        if (!name || !email || !message) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        // 🔴 Validação simples de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Informe um e-mail válido.");
            return;
        }

        // ✅ Envio do e-mail
        emailjs.sendForm(
            "service_jj4y9ot",
            "template_k2jf53u",
            form
        )
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        })
        .catch(() => {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        });
    });
});
