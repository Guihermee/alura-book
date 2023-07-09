async function buscaEndereço(cep) {
    const mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";

    try {
        const consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro) {
            throw Error("CEP INVÁLIDO")
        }

        const endereco = document.querySelector("#endereco");
        const complemento = document.querySelector("#complemento");
        const bairro = document.querySelector("#bairro");
        const cidade = document.querySelector("#cidade");
        const estado = document.querySelector("#estado");

        endereco.value = consultaCEPConvertida.logradouro;
        complemento.value = consultaCEPConvertida.complemento;
        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = '<p class="formulario__erro erro__imagem erro__texto">CEP inválido, tente novamente.</p>'
        console.log(erro);
    }
}

var cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereço(cep.value));
