function foodown(id1,id2,class1,class2,class3,class4,biaoqian1,biaoqian2){
    var header = document.getElementById(id1);
    var headerBtn = header.getElementsByTagName(biaoqian1);
    var content = document.getElementById(id2);
    var contentDiv = content.getElementsByTagName(biaoqian2);

    for(var i=0;i<headerBtn.length;i++){

        //添加索引操作(添加唯一标识，一组去对应另一组)
        headerBtn[i].index = i;

        headerBtn[i].onmousedown = function(){
            for(var i=0;i<headerBtn.length;i++){
                headerBtn[i].className =class1;
                contentDiv[i].className = class2;
            }
            this.className = class3;
            contentDiv[this.index].className = class4;
        };
    }
}
foodown('denglu_main_div1_div1', 'denglu_main_div1_div2', 'l', '', 'active21 l', 'show21','div','div');


function foo(id1,id2,class1,class2,class3,class4,biaoqian1,biaoqian2){
    var header = document.getElementById(id1);
    var headerBtn = header.getElementsByTagName(biaoqian1);
    var content = document.getElementById(id2);
    var contentDiv = content.getElementsByTagName(biaoqian2);

    for(var i=0;i<headerBtn.length;i++){

        //添加索引操作(添加唯一标识，一组去对应另一组)
        headerBtn[i].index = i;

        headerBtn[i].onmouseover = function(){
            for(var i=0;i<headerBtn.length;i++){
                headerBtn[i].className =class1;
                contentDiv[i].className = class2;
            }
            this.className = class3;
            contentDiv[this.index].className = class4;
        };
    }
}

foo('wide_classify_right_button','wide_classify_right_content','l','' ,'active l','show','div','div');

/*var hpMbody2=document.getElementById('hp_mbody_12');
var hpMbody1=document.getElementById('hp_mbody_11');
hpMbody2.onmouseover = function() {
    var myfoo = 'active12  ';
    foo('hp_mbody_1', 'hp_mbody_2', 'active11', '', myfoo, 'show1');
}*/

foo('hp_mbody_1', 'hp_mbody_2', 'active11', '', 'active12', 'show1','div','div');
foo('in_last_f_1_1', 'in_last_f_1_2', 'active10', '', 'active9', 'show5','li','section');





/*多级选项卡*/
function fou(id1,id2,id3,class1,class2,class3,class4,class5,biaoqian1,biaoqian2,biaoqian3,bei){
    var header = document.getElementById(id1);
    var headerBtn = header.getElementsByTagName(biaoqian1);
    var content = document.getElementById(id2);
    var contentDiv = content.getElementsByTagName(biaoqian2);
    var content1 = document.getElementById(id3);
    var contentDiv1 = content1.getElementsByTagName(biaoqian3);
    var li1 = document.getElementById('index_shop_gaikuo_1');
    var li2 = document.getElementById('index_shop_gaikuo_li2');
    var a;
    var b=0;
    var onfoo=true;

    for(var i=0;i<headerBtn.length;i++){
        headerBtn[i].index = i;
        //添加索引操作(添加唯一标识，一组去对应另一组)
        headerBtn[i].onmouseover = function(){

            for(var i=0;i<headerBtn.length;i++){
                headerBtn[i].className =class1;
                contentDiv1[i].className =class1;
            }
            for(var i=0;i<contentDiv.length;i++){
                contentDiv[i].className = class2;
            }
            headerBtn[this.index].className =class3;
            contentDiv1[this.index].className=class5;

            b=this.index;
            if(onfoo){
                a=bei*b;
                contentDiv[a].className = class4;
            }
            else{
                a=bei*b+1;
                contentDiv[a].className = class4;
            }

           return b;
        };
        b=b;

        if(onfoo){
            a=bei*b;
            contentDiv[a].className = class4;
        }
        else{
            a=bei*b+1;
            contentDiv[a].className = class4;
        }
        li1.onmouseover=function(){
            li2.className="active6";
            li1.className="active8";
            onfoo=true;
            a=bei*b;
            contentDiv[a].className = class4;
        };
        li2.onmouseover=function(){
            li1.className="active5";
            li2.className="active7";
            onfoo=false;
            a=bei*b+1;
            contentDiv[a-1].className='';
            contentDiv[a].className = class4;
        };

    }
}
fou('index_shop_mendian', 'index_shop_xiangqing', 'index_shop_jianjie','', '', 'active3', 'show4','show3','li','li','li','2');

/*2张精灵图*/
function fuu(id1,id2,class1,class2,class3,class4,biaoqian1,biaoqian2){
    var header = document.getElementById(id1);
    var headerBtn = header.getElementsByTagName(biaoqian1);
    var content = document.getElementById(id2);
    var contentDiv = content.getElementsByTagName(biaoqian2);

    for(var i=0;i<headerBtn.length;i++){

        //添加索引操作(添加唯一标识，一组去对应另一组)
        headerBtn[i].index = i;

        headerBtn[i].onmouseover = function() {
            if (this.index == 1) {
                for (var i = 0; i < headerBtn.length; i++) {
                    headerBtn[i].className = class1;
                    contentDiv[i].className = class2;
                }
                contentDiv[this.index].className = class4;
            }
            else{
                for (var i = 0; i < headerBtn.length; i++) {
                    headerBtn[i].className = class3;
                    contentDiv[i].className = class2;
                }
                contentDiv[this.index].className = class4;
            };



        }
    }
}
fuu('in_last_f_4_2', 'in_last_f_4_1', 'active14', '', 'active13', 'show6','li','img');


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
            Id3.className=beijing+num;


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

