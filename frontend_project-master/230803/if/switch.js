// console.log('연결')

const food = '떡볶이';

switch (food) {
    case "짬뽕":
        console.log('웬일이냐 짬뽕이라니')
        break;
    case "생선구이":
        console.log('너 생선싫다며')
        break;
    case "김치찌개":
        console.log("김치찌개라니 너 정신차렸구나")
        break;
    case "떡볶이":
        console.log('또 떡볶이냐.그만 좀 해라')
        break;
    default:
        console.log('막내 휴가라 다행이다')
        break;
}

// break와 return은 빠져나오는 역할이므로 밑에 작성할 경우 회색으로 표시되며 아무런 값이 도출되지 않음.

const weather = '여름';
switch (weather) {
    case "봄":
        console.log('꽃은 예쁘지만...')
        break;
    case "여름":
        console.log('더워서 녹아버릴 것 같아...')
        break;
    case "가을":
        console.log('하늘은 높고 말이 아니라 내가 찌네...'
        )
    case "겨울":
        console.log('나랑 눈사람 만들래??')
        break;
}
