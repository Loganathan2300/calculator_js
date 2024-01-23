

function display_number(num){
  document.getElementById("display").value += num;
}

function clearAll(){
  // document.getElementById("display").value = ' ';
  display.value = '';
  // document.getElementById("display").value = null;
}

function del(){
  document.getElementById("display").value = document.getElementById("display").value.slice(0,-1); 
  // display.value = display.value.slice(0,-1);
}

function calculateResult(){
  try{
    // document.getElementById("dispaly").value = eval(display.value);
    display.value = eval(display.value);
  }
  catch(error){
    alert('Invalid')
  } 
}























// function calculateResult(){
//     // document.getElementById("dispaly").value = eval(display.value);
//    let calculater = display.value = eval(display.value);
//    return calculater
// }






// let x=document.getElementById("Outputscreen").value = num;
// let y=math.evaluate(x);
// document.getElementById("Outputscreen").value = y 

// let display1 = document.getElementById(dispaly);
// console.log(display1);
// function appendCharacter(char) {
//   display1.value += char;
// }

// function clearDisplay() {
//   display1.value = '';
// }

// function calculateResult() {
//   try {
//     display1.value = eval(display1.value);
//   } catch (error) {
//     display1.value = 'Error';
//   }
// }
// function appendCharacter()
// var data =document.getElementById(display);
// console.log(data);
// var data =document.getElementById(one)
// console.log(data);

