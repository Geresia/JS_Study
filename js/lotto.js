class Lotto {

    constructor() {
        this.win_no = [];
        this.user_no = [];
    }

    getWinNo() {

        let count = 0;

        //배열지우기
        this.win_no = [];

        while (count < 7) {

            // 7개의 난수얻어온다(1~45)
            let no = Math.floor(Math.random() * 45) + 1;

            let bSame = false; //동일수냐?
            for (let i = 0; i < count; i++) {
                if (this.win_no[i] == no) {
                    bSame = true;
                    break;
                }
            }

            //중복수 체크
            if (bSame == false) {
                //배열에 추가
                this.win_no.push(no);
                //넣은갯수증가
                count++;

                if (count == 6) this.win_no_sort();
            }
            

        } // ← while 블록 닫기

        return this.win_no;


        

    }//end:getWinNo()
    checkRank(){
    let rank  = 0;
    let count = 0;
    let bonus = 0;
    
    for(let i=0; i<6; i++)
        for(let k=0; k<6; k++)
        {
            if(this.user_no[i]==this.win_no[k]){
                count++;
                break;
            }
        }

    if(count==6) rank = 1;
    else if(count==5) rank = 3;
    else if(count==4) rank = 4;
    else if(count==3) rank  =5;

    if(count==5){
        for(let i=0;i<6;i++){
            if(this.win_no[6]==this.user_no[i]){
                rank = 2;
                bonus=this.win_no[6];
                }
        }
    }
    return {
      "rank":  rank,
      "count": count,
      "bonus": bonus
    };
}

    win_no_sort() {

        for (let i = 0; i < this.win_no.length - 1; i++) {
            for (let k = i; k < this.win_no.length; k++) {
                if (this.win_no[i] > this.win_no[k]) {
                    let im = this.win_no[i];
                    this.win_no[i] = this.win_no[k];
                    this.win_no[k] = im;
                }
            }
        }
    }//end:win_no_sort()

}
