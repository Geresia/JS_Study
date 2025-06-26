
class MyMath{

    //class내에서 함수선언시 function은 작성하지 않는다
    static max(a,b){
        return (a>b) ? a : b;
    }

    static max3(a,b,c){

        //2수를 먼저비교
        let big = a>b ? a : b;
        //나머지 1개수 비교
        big = big>c ? big : c;

        return big;
    }

    static max33(a,b,c){

        let big = (a>b) ? (a>c ? a : c) : (b > c ? b : c);
        return big;
    }

    static min(a,b){

        return 0;
    }

    static min3(a,b,c){

        return 0;
    }

    static abs(a){
        return (a<0) ? -a : a;
    }

    
    static pow(a,b){

        let result = 1;
        for(let i=0; i<b; i++){
            result = result * a;
        }
        return result;
    }

    // 4! = 4 * 3 * 2 * 1
    // 0! = 1
    static factorial(n){

        let result = 1;
        for(let i=n ; i>=1 ; i--){ //i = 4 3 2 1
            result = result * i ;
        }

        return result;
    }
}

