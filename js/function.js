function createRow(phone, index) {
    return `
    <tr>
    <td>${index}</td>
    <td>${phone.name}</td>
    <td>${phone.prise}$</td>
    <td>${phone.status}</td>
    <td>${phone.desciription}</td>
    <td>${phone.createdAT}</td>
    <td>${phone.updateAT}</td>
    <td>
     <i class="fa-regular fa-pen-to-square"></i>
     <i class="fa-regular fa-trash-can"></i>
    </td>
</tr>
    `
}
export {createRow};