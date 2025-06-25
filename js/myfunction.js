
function minus(a, b){
    

    return a-b;
}

// ~n까지의 합을 구하는 함수 
function hap(n){ // <- n까지의 숫자의 합을 구해라
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum = sum + i;
    }

    return sum;
}

// n까지의 짝수의 합
function hap_even(n){
     let sum = 0;
    for(let i=0; i<=n; i++){
        if (i % 2 == 0)
        sum += i;
    }

    return sum;
}
//n까지의 홀수의 합
function hap_odd(n){
     let sum = 0;
    for(let i=0; i<=n; i++){
        if (i % 2 == 1)
        sum += i;
    }

    return sum;
}
//n까지의 m의 배수의 합
function hap_baesu(n, m){
        let sum = 0;
    for(let i=0; i<=n; i++){
        if (i % m == 0)
        sum += i;
    }

    return sum;
}

function even_list(n){
    let list = [];
    for(let i=0; i<=n; i++){
        //짝수면 배열에다 추가해라
        if(i%2==0){
            list.push(i);
        }
    }//end: for

    return list;
}
// n까지의 솟수를 구하기
// 솟수: 자신의 값 외에 나눌수 없는수
function prime_list(n){
    let prime_list = [];
    for(let n=2; i<=n ; i++){
    if(i==2 || i==3){
        list.push(i);
        continue;
    }

    let bPrime = true; //솟수냐?
    for(let k=2; k < i ; k++){
        if(i%k==0){
            bPrime=false;
            break;//솟수체크하는 for문
        }
    }

    return prime_list;
    }
}