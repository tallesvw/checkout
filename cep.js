
function preencherEndereco() {
    var cep = document.getElementById('cep').value;
    if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos

        // Faz a solicitação à API ViaCEP
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                // Preencha outros campos do endereço aqui, se necessário
            })
            .catch(error => console.error('Erro ao buscar o CEP: ' + error));
    }
}