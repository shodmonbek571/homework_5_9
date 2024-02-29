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
function validate(name, price) {
    if (name.value.trim().length <= 3) {
      alert("name is not a number");
      name.focus();
      return false;
    }
  
    if (!price.value) {
      alert("price is not a string");
      price.focus();
      return false;
    }
  
    if (price.value < 0) {
      alert("0 dan katta bolishi kerak");
      price.focus();
      return false;
    }
  
    return true;
  }
  
  export { createRow, validate };
  

