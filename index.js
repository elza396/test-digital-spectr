"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    form.addEventListener("submit", async e => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("http://60376bfd5435040017722533.mockapi.io/form", {
                method: "POST",
                body: formData,
            })

            if (response.status !== 201) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const obj = await response.json();
            alert(obj.text);
        } catch (e) {
            console.error(e);
            alert("Ошибочка!");
        }
    })

})
