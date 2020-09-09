let button=document.getElementById('guessButton');
let message=document.getElementById('message');
let past=document.getElementById('past');
let count=0;
button.addEventListener('click',handleClick)
function handleClick(){
    
    let left=10-count;
    
    let numbIn=parseInt(document.getElementById('number').value);
    if(numbIn===5){
        message.textContent='okay you win'
        message.style.backgroundColor='yellow';
        count=0;
    }else if(numbIn<5){
        message.textContent=`lol u too short,you have ${left} guessLeft`
        message.style.backgroundColor='red';
        count++;
    }else{

        message.textContent=`Lower pls,you have ${left} guessLeft`
        message.style.backgroundColor='red';
        count++;
    }
    if(left===0){
        alert('you dead')
        count=0;
    }
    past.textContent=`Past guess:${numbIn}`
}