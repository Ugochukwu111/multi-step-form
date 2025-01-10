const array = [];


function hey(message) {
  if(one === 1){
    array.push(message)
  }else{
    array.splice(array.indexOf(message),1)
  }
  console.log(array[array.length - 1])
}


function hi(message) {
  if(one === 1){
    array.push(message)
  }else{
    array.splice(array.indexOf(message),1)
  }
  console.log(array[array.length - 1])
}



let one = 1;

hey('hola')
hi('happy christmas')
console.log(array)