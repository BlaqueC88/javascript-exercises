const sumAll = function(a, b) {
  if (a<0 || b<0 || typeof(b) !== 'number' || typeof(a) !== 'number'){
    return 'ERROR'
    }else {
    if(a<b){
    a1 = a
    a2 = b 
    }else{
        a1 = b
        a2 = a
    }
    return (a1+a2)*(a2/2)}
};

// Do not edit below this line
module.exports = sumAll;
