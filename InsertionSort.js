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