/**
 * Created by Administrator on 2018/2/5.
 */

function lunbo(Id,innerId1,innerId2,width,active,time1){
    var fuck = document.getElementById(Id);
    var lunbo = document.getElementById(innerId1);
    var lunbo_btn = document.getElementById(innerId2);
    var lunbo_btnLi = lunbo_btn.getElementsByTagName('li');
    var num = 0;
    var timer;

    for(var i=0;i<lunbo_btnLi.length;i++){

        lunbo_btnLi[i].index = i;

        lunbo_btnLi[i].onmouseover = function(){
            for(var i=0;i<lunbo_btnLi.length;i++){
                lunbo_btnLi[i].className = '';
            }
            this.className = active;
            lunbo.style.left = - this.index * width + 'px';
            num = this.index;
        };
    }

    fuck.onmouseover = function(){
        clearInterval(timer);
    };
    fuck.onmouseout = function(){
        timer = setInterval(run,time1);
    };

    timer = setInterval(run,time1);

    function run(){
        for(var i=0;i<lunbo_btnLi.length;i++){
            lunbo_btnLi[i].className = '';
        }
        if(num == lunbo_btnLi.length-1){
            num = 0;
        }
        else{
            num++;
        }
        lunbo_btnLi[num].className = active;
        lunbo.style.left = - num * width + 'px';
    }
}


/*f1*/
lunbo('wide_f1_lun1','wide_f1_ul1','wide_f1_ul2','210','active_wide_f_lun1_2','3000');
lunbo('wide_f1_lun2','wide_f1_ul3','wide_f1_ul4','490','wide_f_tit3_lun_2__content','3000')
/*f2*/
lunbo('wide_f2_lun1','wide_f2_ul1','wide_f2_ul2','210','active_wide_f_lun1_2','3000');
lunbo('wide_f2_lun2','wide_f2_ul3','wide_f2_ul4','490','wide_f_tit3_lun_2__content','3000')
/*f3*/
lunbo('wide_f3_lun1','wide_f3_ul1','wide_f3_ul2','210','active_wide_f_lun1_2','3000');
lunbo('wide_f3_lun2','wide_f3_ul3','wide_f3_ul4','490','wide_f_tit3_lun_2__content','3000')
/*f4*/
lunbo('wide_f4_lun1','wide_f4_ul1','wide_f4_ul2','710','active_wide_f_lun1_2','3000');
/*f5*/
lunbo('wide_f5_lun1','wide_f5_ul1','wide_f5_ul2','710','active_wide_f_lun1_2','3000');

/*改背景色*/
function lunbo1(Id,innerId1,innerId2,width,active,time1,Id3,beijing){
    var fuck = document.getElementById(Id);
    var lunbo = document.getElementById(innerId1);
    var lunbo_btn = document.getElementById(innerId2);
    var lunbo_btnLi = lunbo_btn.getElementsByTagName('li');
    var Id3 = document.getElementById(Id3);

    var num = 0;
    var timer;

    for(var i=0;i<lunbo_btnLi.length;i++){

        lunbo_btnLi[i].index = i;

        lunbo_btnLi[i].onmouseover = function(){
            for(var i=0;i<lunbo_btnLi.length;i++){
                lunbo_btnLi[i].className = '';
            }
            this.className = active;
            lunbo.style.left = - this.index * width + 'px';
            num = this.index;
            console.log(beijing+num);


        };
    }

    fuck.onmouseover = function(){
        clearInterval(timer);
    };
    fuck.onmouseout = function(){
        timer = setInterval(run,time1);
    };

    timer = setInterval(run,time1);

    function run(){
        for(var i=0;i<lunbo_btnLi.length;i++){
            lunbo_btnLi[i].className = '';
        }
        if(num == lunbo_btnLi.length-1){
            num = 0;
        }
        else{
            num++;
        }
        lunbo_btnLi[num].className = active;
        lunbo.style.left = - num * width + 'px';
        Id3.className=beijing+num;

    }
}

/*同步导航*/
lunbo1('lunbo_ul2','lunbo_ul2_ol','lunbo_ul2_ul','760','active1','3000','lunbo','lunbo beijing');

