// Variáveis para os itens arrastáveis e as áreas de soltar
const draggables = document.querySelectorAll('.draggable');
const droppables = document.querySelectorAll('.droppable');

// Adicionar eventos de arrastar
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Adicionar eventos de soltar
droppables.forEach(droppable => {
    droppable.addEventListener('dragover', e => {
        e.preventDefault();
        droppable.classList.add('over');
    });

    droppable.addEventListener('dragleave', () => {
        droppable.classList.remove('over');
    });

    droppable.addEventListener('drop', () => {
        const dragging = document.querySelector('.dragging');
        droppable.appendChild(dragging);
        droppable.classList.remove('over');
    });
});

// Função para checar as respostas
function checkAnswers() {
    const feedback = document.getElementById('feedback');
    const def1 = document.getElementById('def1').textContent.trim();
    const def2 = document.getElementById('def2').textContent.trim();
    const def3 = document.getElementById('def3').textContent.trim();
    const def4 = document.getElementById('def4').textContent.trim();

    if (document.getElementById('word1').parentNode.id === 'def3' &&
        document.getElementById('word2').parentNode.id === 'def1' &&
        document.getElementById('word3').parentNode.id === 'def4' &&
        document.getElementById('word4').parentNode.id === 'def2') {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect! Try again.";
        feedback.style.color = "red";
    }
}
