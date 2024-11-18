const messages = [
    "Послание из прошлого: я устал.",
    "Можно ли назвать эту страницу спонсированной OpenAI?",
    "Задумка подразумевала движение",
    "Но к сожалению(или нет), не срослось"
];

let messageIndex = 0; // Индекс текущего сообщения

// Функция добавления сообщения в контейнер
function addMessage() {
    if (messageIndex < messages.length) {
        // Создаём новый элемент для сообщения
        const messageElement = document.createElement("div");
        messageElement.className = "otzivi";
        messageElement.id = "otziv1";
        messageElement.textContent = messages[messageIndex];

        // Добавляем сообщение в контейнер
        const container = document.getElementById("messageContainer");
        container.appendChild(messageElement);

        // Увеличиваем индекс сообщения
        messageIndex++;

        // Если индекс выходит за пределы массива, сбрасываем его (цикличность)
    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

        // Удаляем сообщение после завершения анимации
        setTimeout(() => {
            container.removeChild(messageElement);
        }, 4500); // Время соответствует длительности анимации
    }
}

// Добавляем сообщение каждые 2 секунды
setInterval(addMessage, 5000);