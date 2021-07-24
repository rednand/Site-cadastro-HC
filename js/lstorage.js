const localstorageform = document.getElementById('form1');

localstorageform.addEventListener("submit", (e) => {
    e.preventDefault()
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let cep = document.getElementById("cep").value;
    let data = {
        nome,
        email,
        cpf,
        telefone,
        endereco,
        cep,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('usuário', convertData);

    alert(`Obrigado ${nome}. Seu cadastro já foi feito na Bookstore. Você será redirecionado para cadastro de produtos`);
    window.location = "produto.html";

});