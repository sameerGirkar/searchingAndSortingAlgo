//Find Pivot index in rotated sorted array.
function _searchPivot(a, l, h){
  if(l>h){
    return -1; 
  }
  let mid = Math.floor((l+h)/2);
  if(mid < h && a[mid] > a[mid+1]){
    return mid;
  } else
  if(mid > l && a[mid-1] > a[mid]) {
    return mid-1;
  } else
  if(a[l] < a[mid]){
    return searchPivot(a, mid+1, h);
  } else {
    return searchPivot(a, l, mid-1);
  }
}
function searchPivot(a){
  return _searchPivot(a, 0, a.length -1);
}
searchPivot([4,5,1,2,3]);
//1