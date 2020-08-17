var arr = [ 1, 5, 7, 8, 9, 15 ];

// 1.1. In ra các số chẵn trong mảng 
function sochan(arr) {
    arr.forEach(
        function(item) {
            if( item % 2 === 0 ) console.log(item);
        }
    )    
}

// 1.2 In ra các số lẻ trong mảng 
function sole(arr) {
    arr.forEach(
        function(item) {
            if( item % 2 !== 0 ) console.log(item);
        }
    )    
}

// 1.3 In ra các số lớn hơn hoặc bằng 5
function Lonhon5(arr) {
    arr.forEach(
        function(item) {
            if( item >= 5 ) console.log(item);
        }
    )
}

// 1.4 In ra các số chia hết cho 5 
function chiahet5(arr) {
    arr.forEach(
        function(item) {
            if(item % 5 === 0) console.log(item);
        }
    )
}

// 1.5 Tìm các số lớn hơn 5 trong mảng và tăng lên 1 đơn vị
function cong1(arr) {
    var newArr = [];
    arr.forEach(
        function(item) {
            if(item > 5) newArr.push(item + 1);
        }
    )
    return newArr;
}

// 1.6 Dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
function copyArr(arr) {
    var newArr = arr.slice(3);
    return newArr;
}

// 1.7 Dùng splice để xóa một phần tử trong mảng 
function  deleteItem(arr, index){
    arr.splice(index, 1);
    return arr;
}

// 1.8 Dùng push để thêm một phần tử vào cuối cùng 
function add(arr, value) {
    arr.push(value);
    return arr;
}


