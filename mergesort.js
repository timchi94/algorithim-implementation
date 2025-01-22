var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [64, 34, 25, 12, 22, 11, 90];
var arr2 = [38, 27, 43, 3, 9, 82, 10];
// C = output [length = n]
// A = 1st sorted array [n/2]
// B= 2bd sorted array [n/2]
// i = 1
// j = 1
// for k = 1 to n
//     if A(i) < B(j) 
//         C(k) = A(i)
//         i++
//     else [B(j) < A(i)]
//         C(k) = B(j)
//         j++
// end cases
var mergeAndSort = function (arr1, arr2) {
    var combinedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
    function merge(left, right) {
        var result = [];
        var i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            }
            else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    function mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }
        var mid = Math.floor(array.length / 2);
        var left = mergeSort(array.slice(0, mid));
        var right = mergeSort(array.slice(mid));
        return merge(left, right);
    }
    return mergeSort(combinedArray);
};

console.log(mergeAndSort(arr1,arr2))