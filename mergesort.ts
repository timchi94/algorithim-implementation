const arr1 = [64, 34, 25, 12, 22, 11, 90]
const arr2 = [38, 27, 43, 3, 9, 82, 10]

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

const mergeAndSort = (arr1: number[], arr2: number[]): number[] => {
    const combinedArray = [...arr1, ...arr2];

    function merge(left: number[], right: number[]): number[] {
        const result: number[] = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    function mergeSort(array: number[]): number[] {
        if (array.length <= 1) {
            return array;
        }

        const mid = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, mid));
        const right = mergeSort(array.slice(mid));

        return merge(left, right);
    }

    return mergeSort(combinedArray);
};


