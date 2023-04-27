// 交换元素
export function swap(array: Array<any>, a: number, b: number) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}