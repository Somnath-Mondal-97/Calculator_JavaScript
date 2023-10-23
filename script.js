let string = '';
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            string = eval(string)
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else if(e.target.innerHTML === 'C'){
            string = '';
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else if(e.target.innerHTML === 'CE'){
            string = string.substring(0,string.length-1);
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else if(e.target.innerHTML === '1/x'){
            string = 1/string;
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else if(e.target.innerHTML === 'X²'){
            string = string*string;
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else if(e.target.innerHTML === '√x'){
            string = Math.sqrt(string);
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else if(e.target.innerHTML === '+/-'){
            string = string * (-1);
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
        else{
            string = string + e.target.innerHTML;
            var element = document.getElementById("content");
            element.innerHTML = string;
        }
     })
})