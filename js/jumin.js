
// ClassName은 Pascal표기법(Upper Camel) 사용
// class: 설계서

class Jumin {

    //let jumin_no; <- 이거랑 동일
    //내부에 생성자함수
    constructor(jumin_no) {
        this.jumin_no = jumin_no
    }

    //부가정보를 얻어오는 함수 정의

    //함수(변수)명의 표기법 : lower camel
    //출생년도 구하기        Get + Year : getYear()
    //                  01234567890123 <-index
    // this.jumin_no = "991212-1234567"
    /*          내국인  외국인
                남 여   남 여
       1900     1  2    5  6     
       2000     3  4    7  8
       1800     9  0
   */


    getYear() {

        let year = parseInt(this.jumin_no.substring(0, 2)); // 99 + 1900 ->991900

        let birth_year = parseInt(this.jumin_no.charAt(7));

        switch (birth_year) {
            case 1: year += 1900; break;
            case 2: year += 1900; break;
            case 5: year += 1900; break;
            case 6: year += 1900; break;
            case 3: year += 2000; break;
            case 4: year += 2000; break;
            case 7: year += 2000; break;
            case 8: year += 2000; break;
            default: year = year + 1800;
        }

        return year;
    }

    getAge() {

        //출생년도: 내가소유한 함수 getyear()호출
        let year = this.getYear();
        //현재년도
        let today = new Date(); //현재 시스템날짜구하기 (년월일시분초요일) 
        let current_year = today.getFullYear();
        return current_year - year;
    }

    getGender() {
        let birth_year = parseInt(this.jumin_no.charAt(7));
        switch (birth_year) {
            case 0: birth_year = "여자"; break;
            case 1: birth_year = "남자"; break;
            case 2: birth_year = "여자"; break;
            case 5: birth_year = "남자"; break;
            case 6: birth_year = "여자"; break;
            case 3: birth_year = "남자"; break;
            case 4: birth_year = "여자"; break;
            case 7: birth_year = "남자"; break;
            case 8: birth_year = "여자"; break;
            default: birth_year = "남자";
        }
        return birth_year;
    }

    //12지
    // 4  5  6 7  8  9 10 11 0 1  2  3   출생년도()%12()
    // 자 축 인 묘 진 사 오 미 신 유 술 해

    getTti() {

        switch (this.getYear() % 12) {
            case 0: return "원숭이(띠)";
            case 1: return "닭(띠)";
            case 2: return "개(띠)";
            case 3: return "돼지(띠)";
            case 4: return "쥐(띠)";
            case 5: return "소(띠)";
            case 6: return "범(띠)";
            case 7: return "토끼(띠)";
            case 8: return "용(띠)";
            case 9: return "뱀(띠)";
            case 10: return "말(띠)";
        }


        return "양(띠)";
    }

    getLocal() {
        return "제주";
    }

    getSeason() {
        
        const month = parseInt(this.jumin_no.substring(2, 4));
        let seasonName;

        
        if (month >= 3 && month <= 5) {
            seasonName = "봄";
        } else if (month >= 6 && month <= 8) {
            seasonName = "여름";
        } else if (month >= 9 && month <= 11) {
            seasonName = "가을";
        } else {
            seasonName = "겨울";
        }

        return seasonName;
    }
}
