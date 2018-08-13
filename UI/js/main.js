

 questions = [{
    question: "what is the surface area of the moon ?"
},
{
    question: "what is the surface area of the moon ?"
},
{
    question: "what is the surface area of the moon ?"
}];


for(let i = 0; i < questions.length; i++){
    var node = document.createElement("li");
    var paranode = document.createElement("p");
    var titlenode = document.createElement("h3");




    var titletext = document.createTextNode(questions[i].question);
    var paratext = document.createTextNode("dnjdfe");

    titlenode.appendChild(titletext);
    paranode.appendChild(paratext);

    node.appendChild(titlenode)
    node.appendChild(paranode)

    document.querySelector(".questions ul").appendChild(node);
}

