function range (start, end, step){
  if (start > end || step <= 0){
    return []}
  var array = [];
  var i = start;
    while (i <= end){
    array.push (i);
    i = i + step;
    return array;
    }
  }
  
  
console.log(range(-9, 2, 3));