async function buscaEndereço(cep) {
    const mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";

    try{
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
    } catch (erro){
        mensagemErro.innerHTML = '<p class="formulario__erro erro__imagem erro__texto">CEP inválido, tente novamente.</p>'
        console.log(erro);
    }
}

var cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscaEndereço(cep.value));




// // Pegando o botão e tirando o evento padrão dele de mandar o resultado para um servidor.
// const btnFormulario = document.querySelector("#enviar");
// btnFormulario.addEventListener('click', event => event.preventDefault());

// // Capiturando os dados inserido pelo usuário
// const inputDoCEP = document.querySelector("#cep");
// const valorDoCEP = inputDoCEP.value;
// const url = `http://viacep.com.br/ws/${valorDoCEP}/json/`;

// // const consultaCEP = fetch("http://viacep.com.br/ws/08021151/json/");

// // Fazendo a requisição
// fecht(url)
//     .then(Response => Response.json())
//     .then(data => {
//         atribuirCampos(data);
//     })
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse CEP não existe.');
//         } else {
//             console.log(r);
//         }
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluído com sucesso!'));

