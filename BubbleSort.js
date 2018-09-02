// BubbleSort
function BubbleSort(arr){
  let n = arr.length;
  for(let i=0; i < arr.length; i++) {
    for(let j=0; j < n-i-1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

BubbleSort([5, 4, 1, 2, 6, 9]);


/**
 * Time complexity for bubble sort is O(n^2)
 * (n-1)+(n-2)+(n-3)+ ...+1+0 = [n(n-1)/2]
 * O(n^2)
 */