"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", e => {
        e.preventDefault();

        const formData = new FormData(form);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://60376bfd5435040017722533.mockapi.io/form");
        xhr.send(formData);

        const onError = () => {
            alert("Ошибочка");
        }

        xhr.onload = () => {
            if (xhr.status !== 201) {
                onError();
            } else {
                alert(JSON.parse(xhr.response).text);
            }
        }
        xhr.onerror = onError;
    })

})
