//Rock,Paper,Scissor Game

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice; 

    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice :', botChoice);

    result = decidewinner(humanChoice, botChoice);
    console.log(result);

    message = finalMessage(result);
    console.log(message);
     
    rpsFrontEnd(yourChoice.id, botChoice , message);
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);//it takes number 0 , 1 , 2
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];//
}
function decidewinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}
    function finalMessage([yourScore,computerScore]) {
        if (yourScore === 0) {
            return { 'message':'you lost','color':'red' };
        }
        else if (yourScore === 0.5) {
            return { 'message':'you tied','color':'Yellow' };
        }
        else{
            return { 'message':'you win', 'color':'green' };
    }
}

function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }


    // Lets Remove all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImgChoice] + " 'height = 150 width =150 style ='box-shadow : 0px 10px 50px rgba(37, 50, 233, 1);'>" 
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + " fontSize :60px; padding : 30px ;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src ='" + imageDatabase[botImgChoice] + " 'height = 150 width =150 style = 'box-shadow : 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
