
// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.getElementById("toggleButton");
//     const credito = document.getElementById("credito");
   
//     // Inicialmente, o card está oculto
//     let cardVisible = true;

//     // Função para mostrar ou ocultar o card
//     function toggleCard() {
//         if (cardVisible) {
//             credito.style.display = "none";
//             toggleButton.textContent = "Credito";

//         } else {
//             credito.style.display = "block";
//             toggleButton.textContent = "Credito";
//         }
//         cardVisible = !cardVisible;
//     } 

//     // Adiciona um ouvinte de evento ao botão
//     toggleButton.addEventListener("click", toggleCard);
// });


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const credito = document.getElementById("credito");
    const debito = document.getElementById("debito");
   
    // Inicialmente, o card está oculto
    let cardVisible = true;

    // Função para mostrar ou ocultar o card
    function toggleCard() {
        if (cardVisible) {
            credito.style.display = "none";
            debito.style.display = "block";
            toggleButton.textContent = "Crédito";

        } else {
            credito.style.display = "block";
            debito.style.display = "none";
            toggleButton.textContent = "Débito";
        }
        cardVisible = !cardVisible;
    }

    // Adiciona um ouvinte de evento ao botão
    toggleButton.addEventListener("click", toggleCard);
});