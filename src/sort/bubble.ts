/*
 * 冒泡排序
 */

import {swap} from '../until';

//基础版本
function bubbleSort1(array: Array<any>) {
    const newArray=[...array];
    let n = array.length;
    let m = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (newArray[j] > newArray[j + 1]) {
                swap(newArray, j, j + 1);
                m++;
            }
        }
    }
    console.log(`交换${m}次`);
    return newArray;
}


//优化方案1
function bubbleSort2(array: Array<any>) {
    const newArray=[...array];
    let n = array.length;
    let m = 0;
    for (let i = 1; i < n; i++) {
        let hasSort = true;
        for (let j = 0; j < n - i; j++) {
            if (newArray[j] > newArray[j + 1]) {
                swap(newArray, j, j + 1);
                hasSort = false;
                m++;
            }
        }
        if (hasSort) {
            break;
        }
    }
    console.log(`交换${m}次`);
    return newArray;
}

//优化方案2，大数下沉的策略
function bubbleSort3(array: Array<any>) {
    const newArray=[...array];
    let n = array.length, k = n - 1, swapPos = 0;
    let m = 0;
    for (let i = 1; i < n; i++) {
        let hasSort = true;
        for (let j = 0; j < k; j++) {
            if (newArray[j] < newArray[j + 1]) {
                swap(newArray, j, j + 1);
                hasSort = false;
                swapPos = k;
                m++;
            }
        }
        if (hasSort) {
            break;
        }
        k = swapPos;
    }
    console.log(`交换${m}次`);
    return newArray;
}


const arr1 = [3, 6, 4, 2, 11, 10, 5];
console.log('数组1', arr1);
console.log('方法1：');
bubbleSort1(arr1);
console.log('方法2：');
bubbleSort2(arr1)
console.log('方法3：');
bubbleSort3(arr1)

const arr2 = [1, 2, 3, 4, 5, 6];
console.log('数组2', arr2);
console.log('方法1：');
bubbleSort1(arr2);
console.log('方法2：');
bubbleSort2(arr2)
console.log('方法3：');
bubbleSort3(arr2)