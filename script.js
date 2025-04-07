// Alterar o texto na página quando o botão for clicado
document.getElementById("alterarTextoBtn").addEventListener("click", function() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Você clicou no botão, o texto foi alterado!";
    mensagem.style.color = "#4CAF50"; // Mudando a cor do texto
});

// Exibir uma imagem quando o botão for clicado
document.getElementById("mostrarImagemBtn").addEventListener("click", function() {
    const container = document.getElementById("imagemContainer");
    
    // Verifica se já existe uma imagem no container
    if (container.innerHTML === "") {
        const img = document.createElement("img");
        img.src = "https://www.example.com/sua-imagem.jpg"; // Coloque o URL de sua imagem
        img.alt = "Imagem Exemplo";
        container.appendChild(img);
    }
});


  
