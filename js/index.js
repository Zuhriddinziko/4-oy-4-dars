// if masala 1
// let a = +prompt(" 1-sonni kiriting");
// let b = +prompt(" 2-sonni kiriting");
// let c = +prompt(" 3-sonni kiriting");
// let resul = "";
// if (a>b && b>c && c>0){
//      resul= ("shart bajarildi");
// } else {
//     resul = ('shart bajarilmadi');
// }
//     console.log(resul);


// if masala 2
// let a = prompt(" 1-satrni kiriting");
// let b = prompt(" 2-satrni kiriting");
// let n = "";
// if ((a.length>5 && a[1]=='a' ||a[2]=='a' || a[3]=='a' ||a[4]=='a' ||a[5]=='a' || a[6]=='a' || a[7]=='a') &&(b[0]=='b') ){
//     n=("shart bajarildi");
// }
// else{
//     n=("shart bajarilmadi");
// }
// console.log(n);

// if masala 3
// let a = +prompt(" 1-sonni kiriting");
// let b = +prompt(" 2-sonni kiriting");
// let c = +prompt(" 3-sonni kiriting");
// let d = +prompt(" 4-sonni kiriting");
// let n = 0;
// let result ="";
// n=a+b+c+d;
// if (n>50 && a>10|| b>10 || c>10 ||d>10){
//     result=("Yig'indi katta va hech bo'lmaganda biri katta")
// }
// console.log(result);

// if masala 4
// let a = +prompt(" 1-sonni kiriting");
// let b = +prompt(" 2-sonni kiriting");
// let n = "";
// let y = "";
// let result = "";
// n=a*b;
// y=a+b;
// if (n<100&& y>20&& a%2==0){
// result=("shart bajarildi");
// } else {
//     result=("shart bajarilmadi");
// }
// console.log(result);


// if masala 5
// let a = prompt(" 1-so`zni kiriting");
// let b = +prompt(" 2-sonni kiriting");
// let y = b/2;
// let n = "";
// if (a.length > y ||b > 50 && a.endsWith('z')=='z') {
//     n = ("shart bajarildi");
// } else {
//     n = ("shart bajarilmadi");
// }
// console.log(n);



// if masala 6
// let a = +prompt(" 1-sonni kiriting");
// let b = +prompt(" 2-sonni kiriting");
// let n;
// if(a%2==0&& b%2==0&& a%b==0 && b>0||b%5==0){
//     n = ("shart bajarildi");
// }else{
//     n=("shart bajarilmadi");
// }
// console.log(n);


// if masala 7
// let a = +prompt(" 1-sonni kiriting");
// let b = +prompt(" 2-sonni kiriting");
// let c = +prompt(" 3-sonni kiriting");
// let n;
// n=a*a;
// let y;
// if (a>0 && b>0 && c>0 && b<n || c%2==1){
//     y = ("shart bajarildi");
// }else{
//     y=("shart bajarilmadi");
// }
// console.log(y);




// if masala 8
// let a = prompt(" 1-so`zni kiriting");
// // let b = prompt(" 2-so`zni kiriting");                 !!!!!!
// // let c = +prompt(" 1-sonni kiriting");
// // if(a.length>c&&)
// console.log(a[0,1,2])



// if masala 9
// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// let n;
// let y;
// n=(a+b+c)/3;
// if (n>10 && a>b || c<15){
//     y=("shart bajarildi");
// } else {
//     y=("shart bajarilmadi");

// }
// console.log(y);

// if masala 10
// let a = prompt("1-so`zni kiriting");
// let b = prompt("2-so`zni kiriting");
// let y;
// if (a.length>8 && a.lastIndexOf("e")>-1 || b.length<5 && b.endsWith("y")=='y'){
//     y=("shart bajarildi");
// } else {
//     y=("shart bajarilmadi");

// }
// console.log(y);



// Ternary operatorlari
// masala 1
// let a = +prompt("bir sonni kiriting");
// let y = a>0 ? "musbat" : "manfiy";
// console.log(y);


// masala 2
// let a = +prompt("bir sonni kiriting");
// let b = +prompt("ikkinchi sonni kiriting");
// let y = a>b ? "birinchi son katta" : "Ikkinchi son katta";
// console.log(y);


// masala 3
// let a = prompt("bir so`zni kiriting");
// let y = a.length>5 ? "Uzun string" : "Qisqa string";
// console.log(y);


// masala 4
// let a = +prompt("bir sonni kiriting");
// let y = a%2==0 ? "Juft son" : "Toq son";
// console.log(y);


// masala 5
// let a = +prompt("bir sonni kiriting");
// let y = a>0 ? "Musbat son" : "0 yoki manfiy son";
// console.log(y);


// Switch case bilan ishlansin

// masala 1
// let a = +prompt("1 dan 7 gacha bo`lgan raqamni kiriting");
// switch (a) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;

//     default:
//         console.log("bunday hafta kuni yo`q");
//         break;
// }

// masala 2
// let a = +prompt("1dan 12 gacha bo`lgan sonni kiriting");
// switch (a) {
//     case 1:
//         console.log("Yanvar");
//         break;
//     case 2:
//         console.log("Fevral");
//         break;
//     case 3:
//         console.log("Mart");
//         break;
//     case 4:
//         console.log("Aprel");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("Iyun");
//         break;
//     case 7:
//         console.log("Iyul");
//         break;
//     case 8:
//         console.log("Avgust");
//         break;
//     case 9:
//         console.log("Sentabr");
//         break;
//     case 10:
//         console.log("Oktabr");
//         break;
//     case 11:
//         console.log("Noyabr");
//         break;
//     case 12:
//         console.log("Dekabr");
//         break;

//     default:
//         console.log("bunday raqamda oy yo`q")
//         break;
// }


// masala 3
// let u = +prompt("Baho raqamini kiriting");
// switch (u) {
//     case 1:
//         console.log("A'lo");
//         break;
//     case 2:
//         console.log("Yaxshi");
//         break;
//     case 3:
//         console.log("O`rtacha");
//         break;
//     case 4:
//         console.log("Yomon");
//         break;
//     case 5:
//         console.log("Juda yomon");
//         break;
//     default:
//         console.log("Bunday baho belgisi yo`q");
//         break;
// }


// masala 4
// let a = +prompt("oy raqamini kiriting")
// switch (a) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;

//     default:
//         console.log("bunday oy raqami yo`q")
//         break;
// }


// masala 5
// let a = +prompt("son kiriting");
// switch (a) {
//     case 1:
//         console.log("Birinchi");
//         break;
//     case 2:
//         console.log("Ikkinchi");
//         break;
//     case 3:
//         console.log("Uchinchi");
//         break;
//     case 4:
//         console.log("To`rtinchi");
//         break;
//     case 5:
//         console.log("Beshinchi");
//         break;
//     case 6:
//         console.log("Oltinchi");
//         break;
//     case 7:
//         console.log("Yettinchi");
//         break;
//     case 8:
//         console.log("Sakkizinchi");
//         break;
//     case 9:
//         console.log("To`qqizinchi");
//         break;
//     case 10:
//         console.log("O`ninchi");
//         break;
//     case 11:
//         console.log("O`n birinchi");
//         break;
//     case 12:
//         console.log("O`n ikkinchi");
//         break;
//     case 13:
//         console.log("O`n uchinchi");
//         break;
//     case 14:
//         console.log("O`n to`rtinchi");
//         break;
//     default:
//         console.log("Noma'lum qiymat")
//         break;
// }



// for bilan ishlansin

// masala 1
// for(let i =1; i<=10; i++){
//     console.log(i**2)
// }


// masala 2
// for(let i =10; i>=1; i--){
//     console.log(i)
// }


// masala 3
// for(let i =10; i>=1; i--){
//     console.log(i)                                    11111111111111
// }

// masala 4
for(let i =2; i<=20; i+2){
    console.log(i)
}



// masala 5
// masala 6
// masala 7


