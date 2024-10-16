document.addEventListener("DOMContentLoaded", async function () {
    async function fetchExams() {
        try {
            const response = await fetch("https://get/exames");
            return await response.json(); 
        } catch (error) {
            console.error("Erro ao carregar exames:", error);
            return [];
        }
    }

    const exams = await fetchExams(); 

    const examCount = exams.length;
    document.getElementById('examCount').setAttribute('data-purecounter-end', examCount);
    new PureCounter();

    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function () {
        let phone = phoneInput.value;
        phone = phone.replace(/\D/g, "");
        if (phone.length > 11) {
            phone = phone.substring(0, 11);
        }
        phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2");
        phone = phone.replace(/(\d{5})(\d{4})$/, "$1-$2");

        phoneInput.value = phone;
    });

    function populateSelect(id, options) {
        const select = document.getElementById(id);
        select.innerHTML = ""; 
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.id;
            opt.textContent = option.name;
            select.appendChild(opt);
        });
    }

    populateSelect("exam1", exams);
    populateSelect("exam2", exams);
    populateSelect("exam3", exams);

    const form = document.getElementById("appointment-form");
    const submitButton = form.querySelector('button[type="submit"]');

    function validateForm() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const exam1 = document.getElementById("exam1").value;
        const exam2 = document.getElementById("exam2").value;
        const exam3 = document.getElementById("exam3").value;

        const isNameFilled = name.length > 0;
        const isEmailFilled = email.length > 0;
        const isPhoneFilled = phone.length > 0;
        const isAnySelectFilled = exam1 || exam2 || exam3;
        submitButton.disabled = !(isNameFilled && isEmailFilled && isPhoneFilled && isAnySelectFilled);
    }

    document.getElementById("name").addEventListener("input", validateForm);
    document.getElementById("email").addEventListener("input", validateForm);
    document.getElementById("phone").addEventListener("input", validateForm);
    document.getElementById("exam1").addEventListener("change", validateForm);
    document.getElementById("exam2").addEventListener("change", validateForm);
    document.getElementById("exam3").addEventListener("change", validateForm);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedExams = [
            {
                name: exams.find(exam => exam.id == document.getElementById("exam1").value)?.name,
                price: exams.find(exam => exam.id == document.getElementById("exam1").value)?.price,
                id: document.getElementById("exam1").value
            },
            {
                name: exams.find(exam => exam.id == document.getElementById("exam2").value)?.name,
                price: exams.find(exam => exam.id == document.getElementById("exam2").value)?.price,
                id: document.getElementById("exam2").value
            },
            {
                name: exams.find(exam => exam.id == document.getElementById("exam3").value)?.name,
                price: exams.find(exam => exam.id == document.getElementById("exam3").value)?.price,
                id: document.getElementById("exam3").value
            }
        ].filter(exam => exam.id);

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value.replace(/\D/g, ''),
            message: document.querySelector("textarea[name='message']").value,
            exams: selectedExams
        };

        if (!submitButton.disabled) {
            fetch("https://dcarneiro.free.beeceptor.com/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            }).then(response => {
                if (response.status === 200) {
                    console.log("Sucesso:", response);
                    showAlert("Formulário enviado com sucesso!", "success");
                } else {
                    showAlert("Ocorreu um erro ao enviar o formulário.", "danger");
                }
            });
        }
    });

    function showAlert(message, type) {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        alertPlaceholder.innerHTML = '';
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible`;
        alert.role = 'alert';
        alert.innerHTML = message;
        alertPlaceholder.appendChild(alert);
    }

    submitButton.disabled = true;
});
