var user = document.querySelector('.userchoice'),
 computer = document.querySelector('.computerchoice'),
 startbtn = document.querySelector('.startbtn'),
 result = document.querySelector('.result'),
 userchoice,
 winStates = ['Rock', 'Paper', 'Scissors'];


 startbtn.addEventListener('click', function(){
     this.disabled = true;
     result.innerHTML = '';
     user.className = "userchoice Rock count-in";
     computer.className = "computerchoice Rock count-in"
 });