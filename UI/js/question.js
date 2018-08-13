var button = document.getElementById("askQuestion");


button.addEventListener("click", function () {
    var input = document.querySelector("#inputField").value;
    var text = document.querySelector("textarea").value;
    var object = { question: input };
    questions.splice(0, 0, object);
})