function validarCamposObrigatorios() {
    var campos = [
        'nome', 'email', 'telefone', 'cpf', 'dataNascimento',
        'cep', 'rua', 'bairro', 'cidade', 'uf', 'numero', 'complemento'
    ];

    var camposPreenchidos = campos.filter(function (campo) {
        return document.getElementById(campo).value.trim() !== '';
    });

    habilitarCamposEndereco(camposPreenchidos.length >= 3);
}

function validarCamposObrigatoriosPagamento() {
    var camposPagamento = [
        'numeroCartao', 'nomeTitular', 'mesCartao', 'anoCartao', 'cvvCartao', 'cpfCartao'
    ];

    var camposPreenchidosPagamento = camposPagamento.filter(function (campo) {
        return document.getElementById(campo).value.trim() !== '';
    });

    habilitarCamposPagamento(camposPreenchidosPagamento.length >= 3);
}

function habilitarCamposEndereco(habilitar) {
    var camposEndereco = [
        'cep', 'rua', 'bairro', 'cidade', 'uf', 'numero', 'complemento'
    ];

    camposEndereco.forEach(function (campo) {
        document.getElementById(campo).disabled = !habilitar;
    });
}

function habilitarCamposPagamento(habilitar) {
    var camposPagamento = [
        'numeroCartao', 'nomeTitular', 'mesCartao', 'anoCartao', 'cvvCartao', 'cpfCartao'
    ];

    camposPagamento.forEach(function (campo) {
        document.getElementById(campo).disabled = !habilitar;
    });
}

document.addEventListener('input', validarCamposObrigatorios);
document.addEventListener('input', validarCamposObrigatoriosPagamento);