// if(conditon){
    //해야할 일}
    //}



let x = 10
x == 10
x != 10
x === 10
x !== 10
x > 10
x >= 10
x < 10
x <= 10

10 == '10'
10 === '10'


const a = 600
if( a > 500){
    console.log('a는 500보다 큽니다.')
}else if (a < 20){
    console.log('a는 20보다 작습니다.')
} else {
    console.log('a와 100은 같습니다.')
}

const b = '2'
if(typeof b !== 'string' &&  b > 1){
    console.log('b는 문자열이고 1보다 크지 않습니다..')
}else if(typeof b == 'number' || b < 2 ){
    console.log('b는 숫자거나 2보다 작습니다.')
}else{
    console.log('타입을 알 수 없습니다.')}

const value = 1

if(typeof value === 'string'){
    console.log('문자열입니다.')
}else if(typeof value ==='number'){
    console.log('숫자형입니다.')
}else {
    console.log('타입을 알 수 없습니다.')
}