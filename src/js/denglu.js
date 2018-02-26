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