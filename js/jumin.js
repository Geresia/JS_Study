
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
        // ① 뒷자리 2~3번째 자리: 등록지 코드(00~95)
        const code = parseInt(this.jumin_no.substring(8, 10));

        // ② 코드별 행정구역 매핑
        if (code >= 0 && code <= 8) return "서울특별시";
        if (code >= 9 && code <= 12) return "부산광역시";
        if (code >= 13 && code <= 15) return "인천광역시";
        if (code >= 16 && code <= 25) return "경기도";
        if (code >= 26 && code <= 34) return "강원특별자치도";
        if (code >= 35 && code <= 39) return "충청북도";
        if (code >= 40 && code <= 41) return "대전광역시";
        if (code >= 42 && code <= 47) return "충청남도";
        if (code === 44 || code === 96) return "세종특별자치시";
        if (code >= 48 && code <= 54) return "전라북도";
        if (code >= 55 && code <= 66) {
            if ((code >= 55 && code <= 56) || (code >= 65 && code <= 66)) {
                return "광주광역시";
            }
            return "전라남도";
        }
        if ((code >= 67 && code <= 69) || code === 76) return "대구광역시";
        if ((code >= 70 && code <= 75) || (code >= 77 && code <= 81)) return "경상북도";
        if ((code >= 82 && code <= 84) || (code >= 86 && code <= 89) || (code >= 90 && code <= 92)) return "경상남도";
        if (code === 85 || code === 90) return "울산광역시";
        if (code >= 93 && code <= 95) return "제주특별자치도";

        return "간첩이다!";
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
    getGanji() {
        const gan = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
        const ji = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
        const y = this.getYear();
        const ganIndex = (y - 4) % 10;
        const jiIndex = (y - 4) % 12;
        const ganji = gan[(ganIndex + 10) % 10] + ji[(jiIndex + 12) % 12] + "년";
        return ganji;
    }
    //                  01234567890123 < - index
    // this.jumin_no = "991212-1234567"
    // 234567 892345
    // isXXXX : 맞냐?
    isValid2() {
        let sum = 0;

        sum = sum + parseInt(this.jumin_no.charAt(0)) * 2;
        sum = sum + parseInt(this.jumin_no.charAt(1)) * 3;
        sum = sum + parseInt(this.jumin_no.charAt(2)) * 4;
        sum = sum + parseInt(this.jumin_no.charAt(3)) * 5;
        sum = sum + parseInt(this.jumin_no.charAt(4)) * 6;
        sum = sum + parseInt(this.jumin_no.charAt(5)) * 7;

        sum = sum + parseInt(this.jumin_no.charAt(7)) * 8;
        sum = sum + parseInt(this.jumin_no.charAt(8)) * 9;
        sum = sum + parseInt(this.jumin_no.charAt(9)) * 2;
        sum = sum + parseInt(this.jumin_no.charAt(10)) * 3;
        sum = sum + parseInt(this.jumin_no.charAt(11)) * 4;
        sum = sum + parseInt(this.jumin_no.charAt(12)) * 5;

        // checksum 1
        // sum = sum%11;
        // sum = 11-sum;
        // let checksum = sum%10;


        //checksum 2
        let checksum = (11 - (sum % 11) % 10);

        console.log("checksum", checksum);

        //주민번호의 마지막값
        let last_no = parseInt(this.jumin_no.charAt(12))

        return checksum == last_no;
    }//end:isValid()
    isValid() {
        // 1) 앞 12자리 숫자에 대한 가중치 곱셈 합 구하기
        const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
        let sum = 0;
        let idx = 0;
        for (let i = 0; i <= 12; i++) {
            if (i === 6) continue;                  
            sum += parseInt(this.jumin_no.charAt(i)) * numbers[idx++];
            if (idx === 12) break;                   
        }

        
        const checksum = (11 - (sum % 11)) % 10;

        const lastNo = parseInt(this.jumin_no.charAt(13));

        return checksum === lastNo;
    }
    //                  01234567890123 < - index
    // this.jumin_no = "991212-1234567"
    //                  2345670892345   
    // isValid3(){
    //     const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    //     let sum = 0;
        
    //     let su_array = [2345670892,3,4,5]
    //     for (let i = 0; i < this.jumin_no.length; i++) {
    //         if (i === 6) continue;                  
    //         sum += parseInt(this.jumin_no.charAt(i)) * numbers[idx++];
    //         if (idx === 12) break;                   
    //     }

        
    //     const checksum = (11 - (sum % 11)) % 10;

    //     const lastNo = parseInt(this.jumin_no.charAt(13));

    //     return checksum === lastNo;
    // }


}