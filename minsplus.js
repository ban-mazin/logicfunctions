function plusMinus( arr ){
  
  var posnum = 0;
  var negnum = 0;
  var zeronum = 0;

  for(num of arr){
    if(num > 0) {
      posnum +=1;
    } else if(num < 0){
      negnum +=1;
    } else {
      zeronum +=1;
    }
  }
  console.log(posnum/arr.length);
  console.log(negnum/arr.length);
  console.log(zeronum/arr.length);
  }
  plusMinus([1, 1, 0, -1, -1]);


    
