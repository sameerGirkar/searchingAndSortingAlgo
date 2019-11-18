// Heap Sort 
//https://www.youtube.com/watch?v=HqPJF2L5h9U&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=33&t=0s
/**
 * Time complexity is O(nlog(n))
 * but if we do detail analysis its O(n) "https://www.youtube.com/watch?v=B7hVxCmfPtM"
 * Observations
 * 1. Node at level 1 take only O(1 c) as constant time - n/4 nodes at level 1
 * 2. Node at level 2 take only O(2 c) as constant time - n/8 nodes at level 2
 * level goes from 1 to log(n)
 * f(n) = n/4 * 1 + n/8 * 2 + n/16 * 3 + ... + 1 * log(n)
 * f(n) = n/4 ( 1 / 2^0 + 2 / 2^1 + 3 / 2^2 + ... + (k+1)/2^k)
 * f(n) = n/4 * (bounded by constatnt)
 * f(n) = O(n)
 */
/**
 * 
 * @param {Array} arr 
 * @param {Number} n heap size - considering heap starts with 1
 * @param {Number} i root node
 */

//Heapfiy is top down procedure.
function _heapify(arr, n, i) {
  let left = 2*i + 1,
    right = 2*i + 2,
    largestIndex = i;

  if(left < n && arr[left] > arr[largestIndex]) {
    largestIndex = left;
  }
  if (right < n && arr[right] > arr[largestIndex]) {
    largestIndex = right;
  }
  if(largestIndex !== i) {
    // swap 
    [arr[largestIndex], arr[i]] = [arr[i], arr[largestIndex]];
    _heapify(arr, n, largestIndex);
  }
}

function heapSort(arr) {debugger;
  let n = arr.length;
  //Create head, To create heap need to run heapify on all sub trees as root (n/2 - 1) to 0 nodes.                       
  // after this for loop arr[0] is largest element in array
  for(let i = Math.floor(n/2)- 1; i >= 0; i--) {
    _heapify(arr, n, i);
  }
  
  //Here Heap is created hence largest element is at the 0 index mence root node.                        
  for(let i= n-1; i >= 0; i--) {
    // i represents the heap size
    // heap size is n-1 because 1 element is already sorted by above for loop
    // swap a[0] with last element in heap
    [arr[0], arr[i]] = [arr[i], arr[0]];
    _heapify(arr, i, 0);
  }
  return arr;
}
let arr = [4, 10, 3, 5, 1];
heapSort(arr);
