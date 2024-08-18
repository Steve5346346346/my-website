function onInput(el) {
    const data = { value: el.value };

    // Відправка даних на сервер
    fetch('/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log('Успіх:', result);
    })
    .catch(error => {
        console.error('Помилка:', error);
    });
}
