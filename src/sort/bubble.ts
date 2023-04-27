/*
 * 冒泡排序
 */

import {swap} from '../until';

//基础版本
function bubbleSort1(array: Array<any>) {
    let n = array.length;
    for(let i=1;i<n;i++){
        for(let j=0;j<n-i;j++){
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
            }
        }
    }
}


const arr=[3,6,4,2,11,10,5];
bubbleSort1(arr);
console.log(arr);