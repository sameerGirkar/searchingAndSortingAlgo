// Insertion Sort 
function InsertionSort(arr){
  let n = arr.length;
  for(let i =1; i < n; i++){
    let temp = arr[i],
      j = i-1;
    while(j >=0 && arr[j] > temp){
      arr[j+1] = arr[j];
      arr[j] = temp;
      j--;
      console.log('in',arr);
    }
    
  }
  return arr;
}
InsertionSort([20,10,40,3,6]);

/**
 * Time Complexity O(n^2)
 */

/**
 * Can also be written as below.
 */

function InsertionSort2(a) {
  for(var i=0; i < a.length-1; i++){
    var j = i+1;
    while(j > 0 && a[j] < a[j-1]){
       [a[j], a[j-1]] = [a[j-1], a[j]];
      j--;
    }
  }

  // Reference: https://www.youtube.com/watch?v=gbJzL6IJig0&list=PLjuNEWpkTZauDAstircLx0B-tsERPsjtT&index=3
  return a;
}
InsertionSort2([20,10,40,3,6]);
