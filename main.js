


let leyenda = ["<h2 class='your-number'>" + "You guessed it!!! 😎" + "</h2>", "<h2 class='green'>" + "To Low" + "</h2>", "<h2 class='red'>" + "To high" + "</h2>"]

function gamePila2(num1) {
  number = 3506;
  
  num1 = parseInt(prompt("Write a Number from 0 to 9999."));
  

  document.write("<h2 class='second'>" + "You have chosen this number:" + "</h2>")

  document.write("<h2 class='number'>" + num1 + "</h2>");

  
  
  if (num1  == number) {
    return leyenda[0];

    // To Low//
  } else if (num1 > number) {
    return leyenda[2];

   // To High//
    }else (num1 < number); {
      return leyenda[1];
    }
}



document.write(gamePila2());


//Press Enter and Refresh the Page//
document.addEventListener('keyup', function(e){
  if(e.keyCode == 13)
    window.location.reload();
})