var person = [
    {
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '05 - 02 - 2020',
        age: 20
    }, {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06 - 01 - 2020',
        age: 19
    }, {
        name: 'Nam',
        class: 'Nodemy02',
        dateJoin: '25 - 01 - 2020',
        age: 20
    }
]

// sắp xếp mảng theo tuổi 
function ageSort(arr) {
    arr.sort(
        function (item1, item2) {
            return item1.age > item2.age;
        }
    )
}

// sắp xếp mảng theo ngày tham gia 
function dateSort(arr) {
    arr.sort(
        function (item1, item2) {
            var d1 = item1.dateJoin.split("-");
            d1.reverse();
            var d2 = item2.dateJoin.split("-");
            d2.reverse();
            var date1 = new Date(d1);
            var date2 = new Date(d2);
            return date1 > date2;
        }
    )
}

// Tìm học viên tham gia trước tháng 2
function truocthang2(arr) {
    var newArr = arr.filter(
        function (item1) {
            var d1 = item1.dateJoin.split("-");
            d1.reverse();
            var date1 = new Date(d1);
            var date2 = new Date("2020-02-01");
            return date1 < date2;
        }
    )
    return newArr;
}

// viết hoa toàn bộ tên học viên
function viethoa(arr) {
    var newArr = [];
    arr.map(
        function (item) {
            item.name = item.name.toUpperCase();
            newArr.push(item);
        }
    )
    return newArr;
}

