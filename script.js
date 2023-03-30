function testjs() {
        

    if (document.getElementById("Help").innerHTML=="Good morning!")
    
     {
        document.getElementById("button").innerHTML= "CLICK HERE!";
        document.getElementById("Help").innerHTML= "Good night!";
        document.getElementById("day").innerHTML= "<span style='color: black;'>Have a great night!</span>";
        
    }
    else {
        document.getElementById("Help").innerHTML= "Good morning!"; 
        document.getElementById("button").innerHTML= "CLICK HERE.. AGAIN!";
        document.getElementById("day").innerHTML= "<span style='color: orange;'>Have a great day!</span>";
    } 

    }

function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const operator = document.getElementById("operator").value;
    const number2 = parseFloat(document.getElementById("number2").value);
    let result 
  
  
    switch(operator) {
      case "sum":
        result = number1 + number2;
        break;
      case "subtraction":
        result = number1 - number2;
        break;
      case "multiplication":
        result = number1 * number2;
        break;
      case "division":
        result = number1 / number2;
        break;
    }
  
    document.getElementById("result").value = result;
  }

function clearResult() {
    const number1 = document.getElementById("number1"); 
    const number2 = document.getElementById("number2");  
    const result = document.getElementById("result");
    number1.value = "";
    number2.value = "";
    result.value = "";
  }
