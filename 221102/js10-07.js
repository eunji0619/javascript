let num = 0;
        function updn(x){
            num=num+x;
            
            x>0? x=x:x=-x   //삼항연산자
            document.write(`<div>${num}</div>
                <button onclick="updn(${x})">증가</button>
                <button onclick="updn(${-x})">감소</button>`);
            document.close();
        }