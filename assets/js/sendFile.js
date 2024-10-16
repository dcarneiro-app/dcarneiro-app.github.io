document.querySelector('#uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('file');
    const codigoInput = document.getElementById('codigo').value;
    const file = fileInput.files[0];
    const responseMessage = document.getElementById('responseMessage');

    if (!file) {
        responseMessage.textContent = "Por favor, selecione um arquivo.";
        responseMessage.classList.add('text-danger');
        responseMessage.classList.remove('text-success');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`/upload?code=${encodeURIComponent(codigoInput)}`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            responseMessage.textContent = "Arquivo enviado com sucesso!";
            responseMessage.classList.remove('text-danger');
            responseMessage.classList.add('text-success');
        } else {
            responseMessage.textContent = "Erro ao enviar o arquivo.";
            responseMessage.classList.remove('text-success');
            responseMessage.classList.add('text-danger');
        }
    } catch (error) {
        console.error('Erro:', error);
        responseMessage.textContent = "Ocorreu um erro ao enviar o arquivo.";
        responseMessage.classList.remove('text-success');
        responseMessage.classList.add('text-danger');
    }
});