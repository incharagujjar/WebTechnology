let m="world" ;
function cat(a){
  return function(b){
    return function(c){
      return a+b+c+m;
    }
  }
    
}

console.log("Output= ");
console.log(cat('h')('ell')('o '))


let r ;
function disp(){
    let msg = "inchara";
    r = msg;
    return function (){
        msg = msg+" "+"gujjar";
        return msg;
    }
    
}
console.log(r);
console.log(disp()());
console.log(r);