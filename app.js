let input = document.getElementById('num');
let displayResult = document.getElementById('rimski');

let numberArray = [];
function transform(y){
    switch(y){
        case '1':numberArray.push('I');
        break;
        case '2':numberArray.push('II');
        break;
        case '3':numberArray.push('III');
        break;
        case '4':numberArray.push('IV');
        break;
        case '5':numberArray.push('V');
        break;
        case '6':numberArray.push('VI');
        break;
        case '7':numberArray.push('VII');
        break;
        case '8':numberArray.push('VIII');
        break;
        case '9':numberArray.push('IX');
        break;
    }
}
function transform2(y){
    switch(y){
        case '1':numberArray.push('X');
        break;
        case '2':numberArray.push('XX');
        break;
        case '3':numberArray.push('XXX');
        break;
        case '4':numberArray.push('XL');
        break;
        case '5':numberArray.push('L');
        break;
        case '6':numberArray.push('LX');
        break;
        case '7':numberArray.push('LXX');
        break;
        case '8':numberArray.push('LXXX');
        break;
        case '9':numberArray.push('XC');
        break;
    }
}
function transform3(y){
    switch(y){
        case '1':numberArray.push('C');
        break;
        case '2':numberArray.push('CC');
        break;
        case '3':numberArray.push('CCC');
        break;
        case '4':numberArray.push('CD');
        break;
        case '5':numberArray.push('D');
        break;
        case '6':numberArray.push('DC');
        break;
        case '7':numberArray.push('DCC');
        break;
        case '8':numberArray.push('DCCC');
        break;
        case '9':numberArray.push('CM');
        break;
    }
}
function transform4(y){
    switch(y){
        case '1':numberArray.push('M');
        break;
        case '2':numberArray.push('MM');
        break;
        case '3':numberArray.push('MMM');
    }
}
function toRoman(){
    let x = input.value;
let string = x.toString().split('');
if(input.value >= 4000){
    alert("3999 is max!")
}
else if(!string.includes(".") && !string.includes("-")){
    switch(string.length){
        
        case 1: 
            numberArray = [];
            let one = transform(string[0])
            numberArray.push(one);   
            numberArray.pop();
            displayResult.textContent = (numberArray.toString());    
            break;
        case 2:
            numberArray = [];
            let two = transform2(string[0]);
            let three = transform(string[1]);
            numberArray.push(two, three);           
            displayResult.textContent = (numberArray.toString().replace(/,/g, ""));    
            break;
        case 3:
            numberArray = [];
            let four = transform3(string[0]);
            let five = transform2(string[1]);
            let six = transform(string[2]);
            numberArray.push(four, five, six); 
            displayResult.textContent = (numberArray.toString().replace(/,/g, ""));     
            break;
        case 4:
            numberArray = [];
            let seven = transform4(string[0]);
            let eight = transform3(string[1]);
            let nine = transform2(string[2]);
            let ten = transform(string[3]);
            numberArray.push(seven, eight, nine, ten);
            displayResult.textContent = (numberArray.toString().replace(/,/g, ""));  
    }    
}
else{
    alert("Input only whole positive intigers")
}    
}

