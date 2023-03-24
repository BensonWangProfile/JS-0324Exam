// function checkPhoneNumber(num) {
//   num = Array.from(num);
//   if (num[0] === "0" && num[1] === "8") {
//     return true;
//   }
//   return false;
// }
// console.log(checkPhoneNumber("0855717222"));
// console.log(checkPhoneNumber("331"));
// console.log(checkPhoneNumber("01839398"));
// console.log(checkPhoneNumber("0877121333"));

// 5
// input 輸入
// multiplication8(3)
// multiplication8(5)
// function multiplication8(num) {
//   let x = 8;
//   let str = "";
//   for (let i = 1; i <= num; i++) {
//     let ans = x * i;
//     str += `${x} x ${i} = ${ans}\n`;
//   }
//   return str;
// }

// console.log(multiplication8(3));
// console.log(multiplication8(5));

// 6
// const numAry = [1, 3, 4, 6, 8];

// function checkNum(num) {
//   let arr = numAry.filter((item) => {
//     return item < num;
//   });
//   return arr;
// }

// console.log(checkNum(0));
// console.log(checkNum(3));
// console.log(checkNum(6));
// console.log(checkNum(20));

// 題目七：選出從1到指定數字範圍裡面的奇數
// input 輸入
// function prime(num) {
//   let str = "1";
//   for (let i = 1; i <= num; i++) {
//     let isPrime = false;
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0) {
//         break;
//       }
//       isPrime = true;
//     }
//     if (isPrime) {
//       str += `,${i}`;
//     }
//   }
//   return str;
// }

// console.log(prime(7));
// console.log(prime(15));

// 題目八
// 請宣告一個 obj 函式，並 return 回傳 obj 的第一個參數

// function obj(num) {
//   return {
//     y: function () {
//       return num;
//     },
//   };
// }
// console.log(obj(2).y());
// console.log(obj(5).y());

// 🚩 題目九：兩個陣列尋找相同數字
// 請找出 a 陣列裡面，若有相同數值，則篩選出來成為一個陣列
// const a = [1,3,4,6,8];
// // input 輸入
// checkSame([3,4,9])
// checkSame([1,2,3,4,5,6,9])

// function checkSame(arr) {
//   const a = [1, 3, 4, 6, 8];
//   let ans = arr.filter((item) => {
//     return a.includes(item);
//   });
//   return ans;
// }

// console.log(checkSame([3, 4, 9]));
// console.log(checkSame([1, 2, 3, 4, 5, 6, 9]));

// 🚩 題目 10
// 彩球共 10 顆，分別是 1~10 號
// 新規則：執行 lotto 函式會隨機顯示 4 個號碼
// 🅰️
function lotto() {
  let arr = [];
  while (arr.length < 4) {
    let random = Math.floor(Math.random() * 10);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }
  return arr;
}

console.log(lotto());
