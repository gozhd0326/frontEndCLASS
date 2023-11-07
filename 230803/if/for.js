// console.log('for문 연결')

// for(let c = 2 ;c < 10;a*b){
//     console.log(c)
//     console.log(c)
//     console.log(c)
//     console.log(c)
//     console.log(c)
//     console.log(c)
//     console.log(c)
//     console.log(c)
//     console.log(c)}
// for(let a = 1; a < 10;a++){
//     // 1부터 9까지의 숫자를 얻어낸다.
//     for(let b = 1; b < 10;b++){ 
//         // a: 1~9까지의 순서대로 들어온다.
//         // a: 1~9까지의 순서대로 들어온다.
//         console.log(a + 'x' + b + '=' + a*b)
//     }
// }

// for(let c = 100;a<1000000;a++){
//     for(let d = 5; d < 6;d){
//         console.log(c +'/'+ d + '='+ c/d)
//     }
// }
// let star = ''
// for (let i = 0; i < 5; i++) {
//     star += '*'
//     console.log(star)

// }

let star = ''
for(let i = 0; i < 5; i++){
    if(i === 0 || i > 1){
        star +="*";
    }else{
        star +="o";
    }
    console.log(star)

}
