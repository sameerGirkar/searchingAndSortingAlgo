function partition(a, l, h){
  let i = l, //l i extra element at left because a[l] is pivot and we will start compare from l+1
    j= h + 1, //as we are using do while need extra element at both side. hence startng with h+1
    pivot = a[l];

    while(i<j){
      do {
        i++;
      } while(pivot >= a[i]); // current element should be less than or equal to pivot

      do {
        j--;
      } while(pivot < a[j]); // current element should be greater than pivot

      if(i < j) {
        [a[i], a[j]] = [a[j], a[i]]; // swap a[i] with a[j]
      }
    }
    
    [a[l], a[j]] = [a[j], a[l]]; // swap pivot with a[j] which is partitioning position.
    return j; // j is partitioning position
}

function _QuickSort(a, l, h) { //Time Complexity T(n)= n + 2 T(n/2) => O(n log(n))
  if(l < h){
    let p = partition(a, l, h); // a[p] element is sorted in array. // Time Complexity 'n'
    _QuickSort(a, l, p-1); // Sort Left elements of array from partitioning position. // T(n/2) 
    _QuickSort(a, p + 1, h); // Sort right elements of array from partitioning position. // T(n/2)
  }
  return a;
}

function QuickSort(a){
  return _QuickSort(a, 0, a.length-1);
}

let a = [10,16,8,12,15,6,3,9,5];
QuickSort(a);
console.log('sorted a = ', a);
