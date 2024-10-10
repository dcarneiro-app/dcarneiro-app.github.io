document.addEventListener("DOMContentLoaded", function () {
    const exams = [
        { "name": "ECOCARDIOGRAMA TRANSTORÁCICO", "id": 1 },
        { "name": "ELETROCARDIOGRAMA", "id": 2 },
        { "name": "Articulação coxo-femural Ap+p", "id": 3 },
        { "name": "Articulação sacro-ilíacas Ao+obl.", "id": 4 },
        { "name": "Articulação tíbio-társica (Tornozelo) Ap+p", "id": 5 },
        { "name": "Bacia - 2 posições", "id": 6 },
        { "name": "Bacia Ap", "id": 7 },
        { "name": "Calcâneo Axial+p", "id": 8 },
        { "name": "Coxa ou Fêmur Ap+p", "id": 9 },
        { "name": "Escanometria", "id": 10 },
        { "name": "Joelho Ap+p+obl.+axiais e tangenciais", "id": 11 },
        { "name": "Joelho ou patela Ap+p", "id": 12 },
        { "name": "Joelho ou rótula Ap+p+axial", "id": 13 },
        { "name": "Panorâmica dos membros inferiores Ap+p", "id": 14 },
        { "name": "Pé ou dedos do pé Ap+obl.", "id": 15 },
        { "name": "Perna Ap+p", "id": 16 },
        { "name": "Coluna cervical Ap+p", "id": 17 },
        { "name": "Coluna cervical Ap+p+obl.", "id": 18 },
        { "name": "Coluna cervical Funcional/dinâmica Ap+p+f+e", "id": 19 },
        { "name": "Coluna dorsal Ap+p", "id": 20 },
        { "name": "Coluna dorsal Ap+p+obl.", "id": 21 },
        { "name": "Coluna dorso-lombar Dinâmica p/ escoliose", "id": 22 },
        { "name": "Coluna dorso-lombar p/ escoliose Ap+p ou TOTAL", "id": 23 },
        { "name": "Coluna lombo-sacra Ap+p", "id": 24 },
        { "name": "Coluna lombo-sacra Ap+p+obl.", "id": 25 },
        { "name": "Coluna lombo-sacra Funcional/Dinâmica", "id": 26 },
        { "name": "Coluna total p/ escoliose Panorâmica", "id": 27 },
        { "name": "Sacro-cóccix", "id": 28 },
        { "name": "Antebraço Ap+p", "id": 29 },
        { "name": "Articulação acrômio-clavicular Ap+p", "id": 30 },
        { "name": "Articulação escápulo-umeral Ap+p", "id": 31 },
        { "name": "Articulação esterno clavicular Ap+obl.", "id": 32 },
        { "name": "Braço ou úmero Ap+p", "id": 33 },
        { "name": "Clavícula Ap+Zanca", "id": 34 },
        { "name": "Costelas Ap+obl.", "id": 35 },
        { "name": "Cotovelo Ap+p", "id": 36 },
        { "name": "Esterno obl.+p", "id": 37 },
        { "name": "Mão ou dedos da mão Ap+obl.", "id": 38 },
        { "name": "Mãos para idade óssea Ap", "id": 39 },
        { "name": "Omoplata ou Ombro Ap+p+axilar", "id": 40 },
        { "name": "Punho Ap+p", "id": 41 },
        { "name": "Arcos zigomáticos Ap+obl.", "id": 42 },
        { "name": "Articulação Têmporo Mandibular bilateral", "id": 43 },
        { "name": "Cavum lateral Hirtz (BA+BF)", "id": 44 },
        { "name": "Cavum ou Adenoides lateral", "id": 45 },
        { "name": "Crânio Pa+p", "id": 46 },
        { "name": "Crânio Pa+p+obl. (Hirtz)", "id": 47 },
        { "name": "Crânio Pa+p+Towne", "id": 48 },
        { "name": "Maxilar Inferior Pa+obl.", "id": 49 },
        { "name": "Órbitas-bilateral", "id": 50 },
        { "name": "Orelha, Mastóides/Rochedos-bilateral", "id": 51 },
        { "name": "Ossos da face Mn+Fn+P+Hirtz", "id": 52 },
        { "name": "Seios da face Fm+mn+p", "id": 53 },
        { "name": "Seios da face Fm+mn+p+Hirtz", "id": 54 },
        { "name": "Sela têrcica Pa+p (Bretton)", "id": 55 },
        { "name": "Tórax Ap - ápico lordótico", "id": 56 },
        { "name": "Tórax Pa", "id": 57 },
        { "name": "Tórax Pa - Insp. e Exp.", "id": 58 },
        { "name": "Tórax Pa+p", "id": 59 },
        { "name": "Abdomem Aap+p ou Localizado", "id": 60 },
        { "name": "Abdomem Agudo Ap+pa+p", "id": 61 },
        { "name": "Abdomem Simples Ap", "id": 62 },
        { "name": "Doc. Dentária Básica com um traçado (pasta c fichas)", "id": 63 },
        { "name": "Doc. Dentária completa com gesso (pasta c fichas)", "id": 64 },
        { "name": "levantamento periapical", "id": 65 },
        { "name": "Panorâmico Dentário", "id": 66 },
        { "name": "periapical 1 dente", "id": 67 },
        { "name": "periapical 2 dentes", "id": 68 },
        { "name": "Tomo dentária atm boca aberta e fechada", "id": 69 },
        { "name": "Tomo dentária dois arcos ou maxila e mandíbula TOTAL", "id": 70 },
        { "name": "Tomo dentária um arco ou maxila ou mandíbula", "id": 71 },
        { "name": "Tomo dentária um elemento ou região específica", "id": 72 },
        { "name": "DOPPLER VENOSO OU ARTERIAL (BILATERAL)", "id": 73 },
        { "name": "DOPPLER VENOSO OU ARTERIAL (CADA)", "id": 74 },
        { "name": "DOPPLER VERTEBRAIS E COROTIDAS", "id": 75 },
        { "name": "TRANSLUCÊNCIA NUCAL", "id": 76 },
        { "name": "ULTRASSONOGRAFIA ABDOMEM SUPERIOR", "id": 77 },
        { "name": "ULTRASSONOGRAFIA ABDOMEM TOTAL", "id": 78 },
        { "name": "ULTRASSONOGRAFIA APARELHO URINÁRIO", "id": 79 },
        { "name": "ULTRASSONOGRAFIA BOLSA ECROTAL", "id": 80 },
        { "name": "ULTRASSONOGRAFIA CERVICAL", "id": 81 },
        { "name": "ULTRASSONOGRAFIA DE ARTICULAÇÃO", "id": 82 },
        { "name": "ULTRASSONOGRAFIA HIPOCONDRIO DIREITO", "id": 83 },
        { "name": "ULTRASSONOGRAFIA MAMÁRIA", "id": 84 },
        { "name": "ULTRASSONOGRAFIA OBSTÉTRICA NORMAL", "id": 85 },
        { "name": "ULTRASSONOGRAFIA OBSTETRICA NORMAL GEMELAR", "id": 86 },
        { "name": "ULTRASSONOGRAFIA ÓRGÃOS E ESTRUTURAS", "id": 87 },
        { "name": "ULTRASSONOGRAFIA PÉLVICA ABDOMINAL", "id": 88 },
        { "name": "ULTRASSONOGRAFIA PÉLVICA TRANSVAGINAL", "id": 89 },
        { "name": "ULTRASSONOGRAFIA PRÓSTATA VIA ABDOMINAL", "id": 90 }
    ]

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
            { name: exams.find(exam => exam.id == document.getElementById("exam1").value)?.name, id: document.getElementById("exam1").value },
            { name: exams.find(exam => exam.id == document.getElementById("exam2").value)?.name, id: document.getElementById("exam2").value },
            { name: exams.find(exam => exam.id == document.getElementById("exam3").value)?.name, id: document.getElementById("exam3").value }
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
            })
        }
    });

    function showAlert(message, type) {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        alertPlaceholder.innerHTML = '';
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible`;
        alert.role = 'alert';
        alert.innerHTML = message
        alertPlaceholder.appendChild(alert);
    }

    submitButton.disabled = true;
});