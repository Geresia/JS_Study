
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