/*
 * 冒泡排序
 */

import {swap} from '../until';

//基础版本
function bubbleSort1(array: Array<any>) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}


//优化方案1
function bubbleSort2(array: Array<any>) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let hasSort = true;
        for (let j = 0; j < n - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                hasSort = false;
            }
        }
        if (hasSort) {
            break;
        }
    }
}

//优化方案2，大数下沉的策略
function bubbleSort3(array: Array<any>) {
    let n = array.length, k = n - 1, swapPos = 0;
    for (let i = 1; i < n; i++) {
        let hasSort = true;
        for (let j = 0; j < k; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                hasSort = false;
                swapPos = k;
            }
        }
        if (hasSort) {
            break;
        }
        k = swapPos;
    }
}

//鸡尾酒排序
function cocktailSort(array:Array<any>){
    let left,right,index,i;
    left=0;
    right=array.length-1;
    index=left;

    while(right>left){
        let isSorted=false;
        for(i=left;i<right;i++){
            if(array[i]>array[i+1]){
                swap(array,i,i+1);
                index=1;
                isSorted=true;
            }
        }
        right=index;
        for(i=right;i>left;i--){
            if(array[i]<array[i-1]){
                swap(array,i,i-1);
                index=i;
                isSorted=true;
            }
        }
        left=index;
        if(!isSorted){
            break;
        }
    }
}


// 类似于数组的洗牌方法，把生成的数据进行打乱
function shuffle(a: Array<any>) {
    let len = a.length;
    for (let i = 0; i < len - 1; i++) {
        let index = parseInt(String(Math.random() * (len - i)));
        let temp = a[index];
        a[index] = a[len - i - 1];
        a[len - i - 1] = temp;
    }
}

function test(sortFn: Function) {
    let array = [];
    for (let i = 0; i < 10000; i++) {
        if (i <= 1000) {
            array[i] = 1000 - i;
        } else {
            array[i] = i;
        }
    }
    console.log('========');
    let start = Date.now();
    sortFn(array);
    console.log('部分有序的情况', sortFn.name, Date.now() - start);
    shuffle(array);
    start = Date.now();
    sortFn(array);
    console.log('完全乱序的情况', sortFn.name, Date.now() - start);
}


test(bubbleSort1);
test(bubbleSort2);
test(bubbleSort3);
test(cocktailSort);


