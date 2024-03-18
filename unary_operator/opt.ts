// Unary operators:
//  for increament 1 (++) | for decreament 1 (--) |
 let we : number = 10;
 let you : number = 5;

 ++we   // we = 10 but after applying ++we now 10 + 1 =11
 ++we   //  11 + 1 = 12
 --we   // 12 - 1 = 11

 console.log(we); //11.

 let result = we + you + ++we + 135 - ++we - --we + ++you - --you + 10 - 43 ;

       //   11  +   5  +   12  + 135 - 13  - 12   +    6  -    5  +  10 - 43;
           //28 + 135 = 138 + 6 =139 + 10 = 149 -43 = 106;
           console.log(result);