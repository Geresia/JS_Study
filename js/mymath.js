
class MyMath {
    //class내에서 함수선언시 function제거
    static max(a, b) {
        return (a > b) ? a : b
}
}
class M_1{
    static max3(a, b, c) {
        let big = a > b ? a :b;
        big = big < c ? c : big;


        return big
    }
    static min(a,b){

        return (a < b) ? a : b;
    }
    static min3(a,b,c){
        let min = a < b ? a : b;
        min = min > c ? c : min;
        return min;
    }
    static abs(a){
        return a < 0 ? -a : a;
    }

    static pow(a,b){
        return 0;
    }

    // 4! = 4 * 3 * 2 * 1
    // 0! = 1
    static factorial(n){
        for (let i = n; i <= 90; i++){

        }
    }

}
