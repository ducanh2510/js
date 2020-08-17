var phucBirthday = '26-11-1992'
var cuongBirthday= '27-11-1994'

var arrBirth1 = phucBirthday.split('-');
arrBirth1.reverse();
phucBirthday = arrBirth1.join('-');

var arrBirth2 = cuongBirthday.split('-');
arrBirth2.reverse();
cuongBirthday = arrBirth2.join('-');


var phuc = new Date(phucBirthday);
var cuong = new Date(cuongBirthday);

var sosanh = phuc - cuong;
if( sosanh > 0 ) console.log('Phuc nho hon Cuong');
else console.log('Phuc lon hon Cuong');


