function run() {
    var amount = $("#amount").val();
    var category = $("#category").val();
    var difficulty = $("#difficulty").val();
    var type = $("#type").val();
    var questionContainer = $("#question-box").val();


    $.ajax({
        url: 'https://opentdb.com/api.php?amount='+ amount + '&category=' + category + '&difficulty=' + difficulty + '&type='+ type,
        dataType: "json",
        success: process
    });

}

function process(data){
    console.log(data);
    var questionsOne = data;
    var questions = data.results;
    console.log(questions);
    questions.forEach(generateQuestion);

}
function generateQuestion(x,i){
    var questiontwo = $("<div class = 'question'id =" +i+">" + x.question+ "</div>");
    $("body").append(questiontwo);
    console.log(x.incorrect_answers);
    var correct = $("<button class =" + i+ "> " + x.correct_answer +"</button>");
    correct.addClass("correct");
    correct.attr("onclick","rightAnswer(this)");
    $("body").append(correct);

    x.incorrect_answers.forEach(function(ans,q) {
        var incorrect = $("<button class+"+i+"> " +ans+"</button>");
        incorrect.attr("onclick","wrongAnswer(this)");
        $("body").append(incorrect);
    });
    var correct = $("<button class ="+i+">" + x.question+"</button>");
}

function wrongAnswer(x){
    console.log(x.className);
    x.style.backgroundColor="red";
    var a=x.className
    $("."+a).attr("disabled",true);
    var b= a+" correct";
    console.log(b)
    document.getElementsByClassName(b)[0].style.backgroundColor="green";
}

function rightAnswer(x){
    x.style.backgroundColor="green";
    console.log(x.className);
    var b=x.className;
    var a=b.split(' ')[0]
    $("."+a).attr("disabled",true);
}
