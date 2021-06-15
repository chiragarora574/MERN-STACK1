
function display(val)
{
   document.getElementById("result").value+=val;
}
function clr()
{
  document.getElementById("result").value="";
}
function solve()
{
  var x=document.getElementById("result").value;
  var y=eval (x);
  document.getElementById("result").value=y;
}
 function back()
{
 var e= document.getElementById("result").value;
 document.getElementById("result").value = e.slice(0,-1);
}
