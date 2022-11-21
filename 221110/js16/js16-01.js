// console.log("test")

// console.log("code runner 기능 = 콘솔에 실행")
// console.log('ctrl + alt + n = 실행')
// console.log('ctrl + alt + m = 종료')
// console.log('드래그 한 부분에만 실행도 가능함')

//어레이의 평균을 구하라
arr = [12,46,23,57,12,54,62];
const avg = arr.reduce((acc,cur,index,ar)=>{
    av = acc+cur
    if(index ==ar.length-1){
        return av/ar.length;
    }
    return av;
},0)
console.log(avg);