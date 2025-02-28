const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("prev").addEventListener("click", () => showSlide(index - 1));
document.getElementById("next").addEventListener("click", () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 10000);

function renderizarCursos() {
    const container = document.getElementById("container");
    container.innerHTML = "";


    fetch('/app/controllers/CursoController.php?action=index')
        .then(response => response.json())
        .then(cursos => {
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
                        <button class="remover-curso" onclick="removerCurso(${curso.id})">Excluir</button>
                    </div>
                `;
                container.appendChild(card);
            });
            
            const addCard = document.createElement("div");
            addCard.classList.add("card", "add-card");
            addCard.innerHTML = `<img src="public/images/adicionar-curso.jpg" alt="Imagem de Adicionar Curso">`;
            addCard.onclick = abrirModal;
            
            container.appendChild(addCard);
        })
        .catch(error => console.error('Erro ao carregar cursos:', error));
}

function removerCurso(id) {
    fetch(`/app/controllers/CursoController.php?action=delete&id=${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        renderizarCursos();
    })
    .catch(error => {
        console.error('Erro ao excluir curso:', error);
    });
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
        const novoCurso = {
            titulo,
            descricao,
            imagem,
            link
        };

        fetch('/app/controllers/CursoController.php?action=store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoCurso)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fecharModal();
            renderizarCursos();
        })
        .catch(error => {
            console.error('Erro ao salvar curso:', error);
        });
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