const localstorageform2 = document.getElementById('form2');

localstorageform2.addEventListener("submit", (e) => {
    e.preventDefault()
    let nomelivro = document.getElementById("nomelivro").value;
    let autor = document.getElementById("autor").value;
    let genero = document.getElementById("genero").value;
    let quantidade = document.getElementById("quantidade").value;

    let data = {
        nomelivro,
        autor,
        genero,
        quantidade,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('usuário', convertData);

    alert("Seu produto foi cadastrado com sucesso!");
    window.location = "index.html";

});