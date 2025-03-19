function check() {
    var checkBox = document.getElementById("checkbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked) {
            text1[i].style.display = "none"; // Скрываем 35ml
            text2[i].style.display = "block"; // Показываем 70ml
        } else {
            text1[i].style.display = "block"; // Показываем 35ml
            text2[i].style.display = "none"; // Скрываем 70ml
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    check();
});
  
  check();
