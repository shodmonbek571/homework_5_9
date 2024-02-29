import {createRow,validate } from "./function.js";

const tbody = document.querySelector("#tbody");

document.addEventListener('DOMContentLoaded', function () {
    let d;
    fetch("https://auth-rg69.onrender.com/api/products/all", {
        method: "GET"
    })
        .then(res => {
            if (res.status == 200) {
                return res.json()
            }

        })
        .then(data => {
            if (data.length) {
                data.forEach((phone, index) => {
                    let row = createRow(phone, index);
                    tbody.innerHTML += row;
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
})

const API = "https://auth-rg69.onrender.com/api/products";

document.addEventListener("DOMContentLoaded", function () {
    fetch(`${API}/all`, {
        method: "GET",
    })
        .then((res) => {
            if (res.status < 399) {
                return res.json();
            }
        })
        .then((data) => {
            if (data.length) {
                data.forEach((phone, index) => {
                    let row = createRow(phone, index + 1);
                    tbody.innerHTML += row;
                });

                const deleteButtons = document.querySelectorAll("i.fa-trash-can");

                if (deleteButtons.length) {
                    deleteButtons.forEach((del) => {
                        del.addEventListener("click", function () {
                            let isDelete = confirm("Are you gonna delete this information");
                            if (isDelete) {
                                let id = this.parentNode.getAttribute("data-id");
                                if (id) {
                                    fetch(`${API}/${id}`, {
                                        method: "DELETE",
                                    })
                                        .then((res) => res.json())
                                        .then((data) => {
                                            console.log(data);
                                            if (
                                                data.message == "Mahsulot muvaffaqiyatli o'chirildi"
                                            ) {
                                                window.location.reload();
                                            }
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                        });
                                }
                            }
                        });
                    });
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
