const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("prev").addEventListener("click", () => showSlide(index - 1));
document.getElementById("next").addEventListener("click", () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 10000);

const cursos = [
    { titulo: "Curso 1", descricao: "Descrição do curso 1", imagem: "imagens/estudando.webp", link:"#" },
    { titulo: "Curso 2", descricao: "Descrição do curso 2", imagem: "imagens/estudando.webp", link:"#" },
    { titulo: "Curso 3", descricao: "Descrição do curso 3", imagem: "imagens/estudando.webp", link:"#" },
    { titulo: "Curso 4", descricao: "Descrição do curso 4", imagem: "imagens/estudando.webp", link:"#" },
    { titulo: "Curso 5", descricao: "Descrição do curso 5", imagem: "imagens/estudando.webp", link:"#" },
    { titulo: "Curso 6", descricao: "Descrição do curso 6", imagem: "imagens/estudando.webp", link:"#" }
];

function renderizarCursos() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    cursos.forEach((curso, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${curso.imagem}" alt="Imagem do Curso">
            <h3>${curso.titulo}</h3>
            <p>${curso.descricao}</p>
            <div class="botoes">
                <a href="${curso.link}" target="_blank">
                    <button class="ver-curso">Ver Curso</button>
                </a>
                <button class="remover-curso" onclick="removerCurso(${index})">Excluir</button>
            </div>
        `;
        container.appendChild(card);
    });
    
    const addCard = document.createElement("div");
    addCard.classList.add("card", "add-card");
    addCard.innerHTML = `<img src="imagens/adicionar-curso.jpg" alt="Imagem de Adcionar Cusro">`;
    addCard.onclick = abrirModal;
    
    container.appendChild(addCard);
}

function removerCurso(index) {
    cursos.splice(index, 1);
    renderizarCursos();
}

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function salvarCurso() {
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;
    const imagem = document.getElementById("imagem").value;
    const link = document.getElementById("link").value;

    if (titulo && descricao && imagem && link) {
        
        cursos.push({ titulo, descricao, imagem, link });
        fecharModal();
        renderizarCursos();
    } else {
        
        alert("Preencha todos os campos!");
    }
}

renderizarCursos();

document.addEventListener("DOMContentLoaded", function () {
    const modalSub = document.getElementById("modal-sub");
    const closeModalSub = document.getElementById("close-modal");
    
    if (!localStorage.getItem("modalVisto")) {
        modalSub.style.display = "flex";
    }
    
    closeModalSub.addEventListener("click", function () {
        modalSub.style.display = "none";
        localStorage.setItem("modalVisto", "true");
    });
});

