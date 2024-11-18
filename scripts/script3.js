function validate() {
    const input1 = document.getElementById("check1").value;
    const input2 = document.getElementById("check2").value;
    const input3 = document.getElementById("check3").value;
    const input4 = document.getElementById("check4").value;
    const input5 = document.getElementById("check5").value;

    // Проверяем, заполнены ли все поля
    if (input1 === "" || input2 === "" || input3 === "" || input4 === "" || input5 === "") {
        console.log("Заполните форму!");
    } else {
        console.log('Заказ отправлен!');
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", validate);
});