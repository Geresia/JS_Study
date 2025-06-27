
class Lotto{

    constructor(){
        this.win_no = [];
    }

    getWinNo(){

        let count = 0;
        
        //배열지우기
        this.win_no=[];

        while(count<7){

            // 7개의 난수얻어온다(1~45)
            let no = Math.floor(Math.random()*45) + 1 ;

            //중복수 체크


            //배열에 추가
            this.win_no.push(no);
            //넣은갯수증가
            count++;

            if(count==6) this.win_no_sort();

        }
        return this.win_no;

    }//end:getWinNo()
    
    win_no_sort(){

        for(let i=0;i<this.win_no.length-1; i++){
            for(let k=i;k<this.win_no.length;k++){
                if(this.win_no[i]>this.win_no[k]){
                    let im = this.win_no[i];
                    this.win_no[i]=this.win_no[k];
                    this.win_no[k]=im;
                }
            }
        }
    }//end:win_no_sort()
 

}