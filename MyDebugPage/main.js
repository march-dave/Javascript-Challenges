// var obj = {};

// obj.FirstName = "John";

// function People(firstName) {

//   this.FirstName = firstName;

// }


function People() {

  // this.FirstName = firstName;

}

var p = new People();

debugger;

// var p = new People("John");
// var p = new People("John");

// People.prototype.Phone = "4161231234";

// p.constructor.Color = "Blue Color";

// console.log(p.Phone);

// console.log(p.Phone);
// console.log(p.Color);


// /*
//  * Complete the function below.
//  */
// function decoder(key, code) {
  
//     var str = "";
//     code.map(function(c) {

//         str += key.charAt(parseInt(c));

//     });

//     console.log("str: " + str);
// }

// var code = [2, 14, 3, 8, 13, 6];
// console.log(decoder('ABCDEFGHIJKLMNOPQRSUTVWXYZ', code));

// /*
//  * Complete the function below.
//  */
// function compressor(s) {


// var alphabets = s.split('');
// var count = 1;
// var array = [];

// for(var i = 0; i < alphabets.length; i++) { 

   
//    if (alphabets[i] === alphabets[i + 1]) {

//       count++;

//    } 
//    else {
//       array.push(alphabets[i]);

//       if (count === 1) {

//       } else {
//           array.push(count);

//       }

      

//       count = 1;
//    }
//   }


//   console.log(array.join(''));  

// }

// console.log(compressor('aaaaabbbbbbbbbccccpqrstuv'));


// // aaaaabbbbbbbbbccccpqrstuv
// // a5b9c4pqrstuv



// // /*
// //  * Complete the function below.
// //  */
// // function decoder(key, code) {

// //   var num = 0;
// //   var array = key.split("");

// //   var arrayDecoder = [];

// //   array.map(function(k) {

// //       code.map(function(c) {

// //           if (num === parseInt(c)) {

// //              console.log("num: " + num);
// //              console.log("c: " + c);

// //              arrayDecoder.push(k); 
// //           }

// //       });

// //       num++;
                      
// //       // console.log("num:" + num);

// //      }
// //   );

// //   console.log(arrayDecoder.join(""));

// // }

// // var code = [2, 14, 3, 8, 13, 6];
// // console.log(decoder('ABCDEFGHIJKLMNOPQRSUTVWXYZ', code));


// // key: “ABCDEFGHIJKLMNOPQRSUTVWXYZ”
// // code: [2, 14, 3, 8, 13, 6]

// // CODING







// // function createArrayFromAtoB(a, b) {
    
// //     var i = a;
// //     var j = b;
// //     var array = [];

// //     for (i ; i <= j; i++) {

// //         array.push(i);
        
// //         // console.log(i);
// //     }

// //     for (var k=0; k < array.length; k++) {

// //         console.log(array[k]);

// //     }
    
// // }

// // console.log(createArrayFromAtoB(2, 5));


// // // file:///Users/ysangy/Javascript-Challenges/MyDebugPage/index.html


// //  for (var k=0; k < array.length; k++) {

// //         console.log(array[k]);

// //     }