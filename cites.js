function fel()
{
  var x =  document.getElementById('input1').value;
  var y =  document.getElementById('input2').value;
  var z =  document.getElementById('input3').value;
  var v =  document.getElementById('input4').value;
  x="First Name="+x+"<br>";
  y="Last Name="+y+"<br>";
  z="Student ID="+z+"<br>";
  v="Email Address="+v+"<br>";
 b="<input type = 'button' value = 'True' onclick = 'f1()'>";
  c="<input type = 'button' value = 'false' onclick =   'f2()'>";
  document.getElementById('output').innerHTML ="<hr><br><h2>Your info</h2><br><hr><br>"+x+y+z+v+"<br><hr><br";
}
function f2()
{
 alert("If you dont submit the right info soon you are a furry");
}
function f1()
{
 alert("Scammed Nerd");
}
