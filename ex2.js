var arr = [1, 8, 5, 2, 7, 6, 9, 2, 6];

// Sắp xếp tăng dần
function tangdan(arr) {
    arr.sort(
        function (item1, item2) {
            return item1 > item2;
        }
    )
}

// Sắp xếp giảm dần
function gimadan(arr) {
    arr.sort(
        function (item1, item2) {
            return item1 < item2;
        }
    )
}
