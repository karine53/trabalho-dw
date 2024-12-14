document.getElementById('saibaMais').addEventListener('click', function () {
    alert('Mais informações disponíveis em breve!');
});

document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
});
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário (para testes)

    // Exibe a mensagem de sucesso
    document.getElementById('mensagem-sucesso').style.display = 'block';

    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
});
