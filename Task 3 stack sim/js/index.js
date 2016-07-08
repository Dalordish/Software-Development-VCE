var stack = [0,0,0,0,0];
var current = -1

function addMoney(value,text) {
  
  if (current == 4) {
    
  }
  else {
    current = current +1;
    stack[current] = value;
    $("#" + current).html(text);
    
  }
  console.log(current);
  console.log(stack);
}

function calcTotal() {
  total = stack.reduce(add, 0);
  var temp = total.toString();
  $("#total").html("Total: " + total);
}

function add(a, b) {
    return a + b;
}

$(document).ready(function() {
  $("#5c").on("click", function(){
    addMoney(5,"5c");
    calcTotal();
  });
    $("#10c").on("click", function(){
    addMoney(10,"10c");
    calcTotal();
  });
    $("#20c").on("click", function(){
    addMoney(20,"20c");
    calcTotal();
  });
    $("#50c").on("click", function(){
      addMoney(50,"50c");
      calcTotal();
  });
    $("#1d").on("click", function(){
      addMoney(100,"$1");
      calcTotal();
    
  });
    $("#2d").on("click", function(){
      addMoney(200,"$2");
      calcTotal();
  });
    $("#remove").on("click", function(){
      if (current == -1 ){
        $("#" + 0).html("0");
        stack[0] = 0
        calcTotal();
        console.log(stack)
      }
      else {
        $("#" + current).html("0");
        stack[current] = 0
        calcTotal();
        current = current - 1
        console.log(stack);
        console.log(current);
      }
  });
 });