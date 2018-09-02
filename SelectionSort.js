// Selection Sort

function SelectionSort(arr){
  let n = arr.length;
  for(let i=0; i < n; i++){
    let smallIndex = i;
    for(let j=i; j < n; j++){
      if(arr[j] < arr[smallIndex]){
        smallIndex = j;
      }
    }
    [arr[smallIndex] , arr[i]] = [arr[i], arr[smallIndex]];
  }
  return arr;
}
SelectionSort([4,2,5,1,50,20]);

/**
 * Time Complexity O(n^2)
 * (n)+(n-1)+(n-2)+...+1+0 = [n(n-1)/2]
 * O(n^2)
 * 
 * Select the smallest element from (i to n-1) and replace with index i, where i change from 0 to (n-1)
 */