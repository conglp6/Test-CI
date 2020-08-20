var x = merge2String("abc", "xyz");
document.getElementById('bai2').innerHTML = x;
var y = merge2String("abc", "xyzt");
document.getElementById('bai22').innerHTML = y;

function merge2String(a,b){
  var c = "";
  a = Array.from(a);
  b = Array.from(b);
  while(a.length > 0 || b.length > 0){
    if(a.length > 0)
      c += a.splice(0,1);
    if(b.length > 0)
      c += b.splice(0,1);
  }
  return c;
}
var test = merge2String("abc","def");
console.log(test);