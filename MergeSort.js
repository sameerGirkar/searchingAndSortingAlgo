/**
 * Merge sort 
 * Time Complexity O(n*log(n))
 */

function _merge(a, l, m, h) {
  let i = l,
    j = m+1,
    newArr= [];

    while(i <= m && j <= h) {
      if(a[i] <= a[j]){
        newArr.push(a[i]);
        i++;
      } else {
        newArr.push(a[j]);
        j++;
      }
    }
    for(;i <= m; i++ ){
      newArr.push(a[i]);
    } 
    for (; j <= h; j++) {
      newArr.push(a[j]);
    } 

    //Update the array with sorted part.
    j=0;
    for(i=l; i<=h; i++){
      a[i] = newArr[j];
      j++;
    }

    return a;
}

function _MergeSort(a, l, h){
  if(l !== h){
    let m = Math.floor((l+h)/2);
    _MergeSort(a, l, m);
    _MergeSort(a, m+1, h);
    _merge(a, l, m, h);
  }
  return a;
}

function MergeSort(arr){
  _MergeSort(arr, 0, arr.length-1);
  return arr;
}
var a = [10, 4, 12, 20, 1, 2, 10];
MergeSort(a);



