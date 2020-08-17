var greeting = '  Welcome to Nodemy, Nodemy is stand for Nodejs Academy  ';

console.log( 'Chuoi tren co tat ca so ki tu la : ', greeting.length);
console.log('Vi tri cua chuoi nodemy nam o: ', greeting.indexOf());

var start = greeting.startsWith('Welcome');
if( start == true ) console.log('Chuoi co bat dau bang Welcome');
else console.log('Khong bat dau bang Welcome');


var tach = greeting.substring(greeting.length - 'Academy'.length, greeting.length );
console.log(tach);

var arrString = greeting.split(' ');
console.log(arrString);

var str = greeting.trim();
console.log(str);


var tontai = greeting.includes('Nodemy');
if(tontai == true) console.log('Chuoi co trong string');
else console.log('Chuoi khong ton tai trong string');


var newString = greeting.replace(/Nodemy/g, 'NODEMY');
console.log(newString);

var newstr = greeting.toLocaleUpperCase();
console.log(newstr);

var char = greeting.charAt(4);
console.log(char);
