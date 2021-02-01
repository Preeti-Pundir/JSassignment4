last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  ​
  document.write(last([7, 9, 0, -3]));
  document.write(last([7, 9, 0, -2],3));
  document.write(last([7, 9, 0, -2],6));