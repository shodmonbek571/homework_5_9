import {createRow} from "./function.js";
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
