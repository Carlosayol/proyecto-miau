var answer;
var score = 0;
var backgroundimages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    const prediction = predictImage();
    if (prediction == answer) {
        score++;
        if (score <= 6){
            backgroundimages.push(`url('images/background${score}.svg')`)
            document.body.style.backgroundImage = backgroundimages;
        } else {
            alert('Congrats!');
            score==0;
            backgroundimages = [];
            document.body.style.backgroundImage = backgroundimages;
        }
    }else{
        if (score != 0){score--;}
        alert('Mistakes were made');
        setTimeout(function () {
            backgroundimages.pop();
            document.body.style.backgroundImage = backgroundimages;
        }, 1000);
    }


}