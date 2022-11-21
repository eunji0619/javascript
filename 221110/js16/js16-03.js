// const idl = setTimeout(()=> 
//     console.log('5초 뒤에 실행됨'),5000);

// let count = 0;

// const id2 = setInterval(() => {
//     count ++; 
//     console.log(`${count}번째 : 1초마다 실행됨`);
//     },1000);

// setTimeout(()=>{
//     clearTimeout(id1);
//     clearInterval(id2);
// },8000)

/*예제1번 5~1까지 내려간후 그 이후는 펑!*/
// var id1;
// function press(){   
//     let num = 5;
//     id1 = setInterval(()=>{     //callback함수 = 함수를 매개변수로 갖는 함수
//         console.log(num--);
//         if(num < 1){
//             alert('펑');
//             clearInterval(id1);
//         }
//     },1000)
// }    
// function stop(){
//     clearInterval(id1);
// }

window.onload = function(){
    document.querySelector("h2").style.background = "red";
}

var state = false
function press() {  //선언적 함수
    //hoisting : 스크립트에 선언된 변수와 함수를 메모리에 먼저 로드 시키는 현상(선언적 함수여야지만 가능)
    //press = function() 익명함수는 hoisting이 불가 but 변수앞에 var가 붙어있을때 가능

    let count = 5
    let countDown = setInterval(function(){
        if(!state){
            if(count > 0)
                console.log(count--)
            else{
                console.log('펑!')
                clearInterval(countDown);
            }
        }
    },1000)
}
function stop(){
    state = !state
}

(()=>{
    press()
})()

// setTimeout(()=>{
//     console.log('1초뒤 실행');
//     location.href="https://www.naver.com"
// },1000)

/*예제2번 버튼을 누르면 0분 0초에서 1초씩 증가 , 스탑은 타이머 꺼짐*/
// let id1;
// function press(){
//     clearInterval(id1);
//     let num = 0;

//     id1 = setInterval(()=>{
//         num++;
//         num >= 60 ? console.log(`${parseInt(num/60)}분 ${num%60}초`) : console.log('0분 '+ num + '초');
//         // if(num >= 60){
//         //     console.log(`${parseInt(num/60)}분 ${num%60}초`);
//         // }
//         // else{
//         //     console.log('0분 '+ num + '초');
//         // }
//     },1000)
// }
// function stop(){
//     clearInterval(id1);
// }
