window.onload = function () {
var output = document.getElementById("output");
var operator = document.getElementsByClassName("operator");
var numbers = document.getElementsByClassName("numbers");
var equals = document.getElementById("equals");
var clear = document.getElementById("clear");
var split;
var a;
var b;


function test() {
  if(event.target.value==0 && output.innerText==="") {
      output.innerHTML ==="";
  }
  else{
    output.innerHTML += parseInt(event.target.value);

}
}

function operation() {

    if(output.innerText!=="" && parseInt(output.innerText[(output.innerText.length-1)])) {
      output.innerText+= " " + event.target.value + " ";
    }
    if(!parseInt(output.innerText[(output.innerText.length-1)])){
        output.innerText[(output.innerText.length-1)] = event.target.value;
    }

    console.log(output.innerText[(output.innerText.length-1)]);
}


function sum() {
    for (var i=0; i<split.length; i++) {
      console.log(i);

      if (split[i]==="x") {
          var math= split[i-1]*split[i+1];
          split.splice((i-1), (3), math);
          i=0;
          console.log(split);

        }


       if (split[i]==="÷") {
            var math= split[i-1]/split[i+1];
            split.splice((i-1), (i+2), math);
            i=0;
          }
        if (split[i]==="+" && !split.join("").match("x") && !split.join("").match("÷")) {
              var math= split[i-1]+split[i+1];
              split.splice((i-1), (i+2), math);
              i=0;
            }
         if (split[i]==="-" && !split.join("").match("x") && !split.join("").match("÷")) {
                var math= split[i-1]-split[i+1];
                split.splice((i-1), (i+2), math);
                i=0;
              }

      }
      console.log(split);

      return output.innerText=math;
}


function log() {
    split = (output.innerText).split(" ");
    for (var j=0; j<=split.length; j+=2) {
        split[j]=parseInt(split[j]);
    }
    console.log(split);
    return sum();


}

function empty() {
    output.innerText = "";
    split = "";
}


//Numbers and operators evenlisteners

clear.addEventListener("click", empty);

for (var k=0; k<numbers.length; k++){
numbers[k].addEventListener("click", test)
}

for (var l=0; l<operator.length; l++){
operator[l].addEventListener("click", operation)
}

equals.addEventListener("click", log)

}
