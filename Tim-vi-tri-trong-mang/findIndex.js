function findIndex(number, array) {
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == number) {
            flag = true;
            return `${number} nằm tại vị trí ${i}.`;
        } 
    }
    if (flag == false) {
        return `${number} không tồn tại trong mảng.`;
    }
}

let arr = [-2, 3, 5, 6, 7, 9, 14, 15, 17, 18];

console.log(findIndex(7, arr));