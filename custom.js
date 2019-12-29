const text=document.querySelector('h4');
const textContent= text.innerHTML;
let textSplit=textContent.split("");
text.innerHTML="";
let char=0;
for (var i = 0; i <textSplit.length; i++) {

	text.innerHTML+=`<span>${textSplit[i]}</span>`;
}
const func = () => {
  let textSpan= document.querySelectorAll('span')[char];
  textSpan.classList.add('added');
  console.log(textSpan)
  if(char==textSplit.length-1){
  	clearFunc();
  	return;
  }
  char++;
}

var interval = setInterval(func, 300);
const clearFunc = () =>{
	clearInterval(interval);
}



 


