const display = document.getElementById('display')

function appendToDiplay(input){
    display.value += input
}

function clearAll(){
    display.value = ''
}

console.log(display.lang)