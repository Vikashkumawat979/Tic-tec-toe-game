var player1_input_name = document.getElementById('name1');
var player2_input_name = document.getElementById('name2');
var player1_name = document.getElementById('player1-name');
var player2_name = document.getElementById('player2-name');

function setName(default_name) {

    if(default_name)
    {
        if (player1_input_name.value != "" && player1_input_name.value != "") {
            name1 = player1_input_name.value;
            name2 = player2_input_name.value;
            hideShow();
            player1_name.innerText = name1;
            player2_name.innerText = name2; 
        }
        else
        {
            alert("Please fill the required fields !!");
        }
    }
    else
    {
        hideShow();
    }
}

var flag=true;
var states=[1,0,1,0,1,0,0,1,0];
var player1=0,player2=0;
var winnerdiv=document.querySelector("#winner");
document.querySelector(".game").addEventListener('click',function(e){
    if(e.target.id)
        console.log(e.target.id);
    setVal(e.target);
    
})
var winIndexes=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function setVal(curDiv){
    id=curDiv.id;
    if(flag){
        if(states[id]==1 || states[id]==0){
            curDiv.innerHTML='X';
            states[id]='X';
            flag=!flag;
            checkWinner(!flag);
        }
    }
    else{
        if(states[id]==1 || states[id]==0){
            curDiv.innerHTML='O';
            states[id]='O';
            flag=!flag;
            checkWinner(!flag);
        }
    }
}

function setDisable(){
    for(let i=0; i<states.length; i++){
        if(states[i]==0 || states[i]==1){
            states[i]=null;
        }
    }
}

function setWinner(index){
    for(let i=0; i<index.length; i++){
        document.getElementById(index[i]).style.backgroundColor="lightgreen";
    }
}
function checkWinner(type) {
    let winnerFound = false;
    for (let x = 0; x < winIndexes.length; x++) {
        let [a, b, c] = winIndexes[x];
        if (states[a] == states[b] && states[b] == states[c]) {
            winner.innerHTML = type ? name1 + " ~ Winner!!!! " : name2 + " ~ Winner!!!! ";
            winner.style.display = "block";
            setWinner(winIndexes[x]);
            setCount(type);
            displayScore();
            setDisable(); 
            winnerFound = true;
            break;
        }
    }
    if (winnerFound) {
        return;
    }
    var x = 9;
    for (var i = 0; i < states.length; i++) {
        if (states[i] != 1 && states[i] != 0) {
            x--;
        }
    }
    if (x == 0) {
        winner.innerText = "It's Draw !!"; 
        winner.style.display = "block";
        for (var i = 0; i < states.length; i++) {
            document.getElementById(i).style.backgroundColor = "yellowgreen";
            document.getElementById(i).style.color = "red";
        }
        setDisable(); 
    }
}
var name1 = "X";
var name2 = "O";
var winCount1 = 0;
var winCount2 = 0;


function displayScore() {
    if (winCount1 > 0 || winCount2 > 0) {
        document.querySelector('#p1-score').innerText = winCount1;
        document.querySelector('#p2-score').innerText = winCount2;
    }
}
function setCount(type) {
    if (type) {
        winCount1++; 
    } else {
        winCount2++;
    }
}

function reset(){
    for(let i=0;i<states.length;i++){
        document.getElementById(i).innerHTML="";
        document.getElementById(i).style.color = "rgb(50, 25, 25)";
        document.getElementById([i]).style.backgroundColor="rgb(255, 255, 103)";
    }  
    flag=true;
    states=[1,0,1,0,1,0,0,1,0]; 
    winner.innerHTML="";
}

function restart() {
    location.reload();
}
function hideShow() {
    // setName();
    document.getElementById('formdiv').style.display = "none";
    document.getElementById('gamediv').style.display = "block";

}