

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

