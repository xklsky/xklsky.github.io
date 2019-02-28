function getCheckVal(elt,data){
    //初始化 tagsinput 插件
    elt.tagsinput({
        confirmKeys: [13],  //13 回车确定
        delimiter:';'       //单词输入多个以 ; 分隔
    });

    let one_ajax = true;
    elt.tagsinput('input').parent().click(function(){ //从父容器处点击，效果更好
        var obj =$(this).parents('.J_getCheckWrap');
        var checkBox = obj.find('.J_check'); //复选框和百分比文本框的容器
        var yes = obj.find('.J_yes');   //确定
        var no = obj.find('.J_no');  //取消所有选择
        var wrap = obj.find('.J_wrap');
        var checkSet = new Set();   //输出文本框值的集合
        var checkValset = new Set();//所有复选框值的集合
        var noTxt = elt.attr('data-notxt') === "false" ? false : true;  //判断复选框相应的文本框是否显示,false不显示

        elt.siblings('.bootstrap-tagsinput').removeClass('warn');
        wrap.show();

        if(one_ajax){
            //ajax获取数据，创建表格
            $.ajax({
                url:data,
                type:'get',
                dataType:'json',
                async:false,
                success:function(result){
                    var li = '';
                    $.each(result["lists"],function(i,item){
                        name = item.name;
                        li += '<li>'+
                            '<input type="checkbox" value="'+name+'">'+
                            '<label>'+name+'</label>'+
                            '<input type="text" placeholder="百分比">'+
                            '</li>';
                    });
                    checkBox.append(li);
                }
            });
            one_ajax = false
        }

        //如果文本框中有选项中的值，勾选相应的复选框
        //文本框值的集合
        obj.find('[data-set=set]').map(function(){
            checkSet.add(this.innerText);
        });
        //console.log(getValSet)
        //复选框值的集合
        checkBox.find(':checkbox').map(function(){
            checkValset.add(this.value)
        });
        //console.log(checkValset)
        checkSet.forEach((value)=>{
            let a =value.split(',')[0];
            if(checkValset.has(a)){
                checkBox.find(':checkbox[value='+a+']').prop('checked',true);   //勾选复选框
                checkBox.find(':checkbox[value='+a+']').siblings().show();      //显示文本框
            }
        });

        //显示隐藏百分比文本框
        checkBox.find(':checkbox').click(function(){
            var _this = $(this);
            var isChecked = _this.prop('checked')
            if(noTxt){  //true 需要显示百分百
                if (isChecked){
                    _this.siblings('input[type=text]').css('display','block');
                }else{
                    _this.siblings('input[type=text]').css('display','none');
                }
            }
        });

        //取消所有勾选，隐藏文本框
        no.click(function(){
            checkBox.find(':checkbox').prop('checked',false);
            checkBox.find(':text').css('display','none');
            //wrap.hide();
        });

        //确定，赋值
        yes.off('click').click(function(){

            //先找到获取的值，放到集合
            /*obj.find('[data-set=set]').map(function(){
                checkSet.add(this.innerText)
            });*/

            //找到未勾选项,删除匹配的值
            obj.find(':checkbox:not(:checked)').each(function(){
                let notChecked = $(this).val();//未勾选的值
                //console.log("notChecked:"+notChecked);
                //console.log(checkSet);
                checkSet.forEach((value) => {
                    let a = value.split(',')[0];
                    if(a == notChecked){
                        elt.tagsinput('remove', value);
                        checkSet.delete(value);
                    }
                });
            });

            //找到勾选项,如果勾选且对应文本框不为空就赋值
            let hide = true;
            obj.find(':checkbox:checked').each(function(){
                let c = $(this);
                let t_val = c.siblings(':text').val();
                //判断勾选项相应的文本框是否为空
                if(noTxt && t_val == ''){
                    //alert(c.val()+' 的百分比未填写');
                    layer.msg(c.val()+' 的百分比未填写');
                    hide = false;
                    return false
                }
                let check;   //新值
                if(noTxt){
                    check = c.val()+','+t_val+'%';
                }else{
                    check = c.val();
                }

                //写入标签，放入集合
                elt.tagsinput('add', check);
                checkSet.add(check);
                //console.log(check);
                obj.find('.tag').each(function(){
                    let _this = $(this);
                    let str = _this.text();
                    if(str == check){
                        _this.find('span').removeAttr('data-role');//去除data-role=remove,去掉删除键
                        _this.attr('data-set','set');//写入自定义元素，方便获取
                        _this.removeClass('label-info').addClass('label-warning');
                    }
                });
            });
            if(hide) wrap.hide();
        });


        /*//如果文本框中有选项中的值，勾选相应的复选框
        //文本框值的集合
        var getValSet = new Set(obj.find('[data-set=set]').map(function(){
            return this.innerText;
        }).get());
        //console.log(getValSet)
        //复选框值的集合
        var checkValset = new Set(checkBox.find(':checkbox').map(function(){
            return this.value
        }).get());
        //console.log(checkValset)
        getValSet.forEach((value)=>{
            let a =value.split(',')[0]
            if(checkValset.has(a)){
                checkBox.find(':checkbox[value='+a+']').prop('checked',true)
            }
        });*/

    });
}


//必选项是否为空
function valIsNull(){
    $('[required]').each(function(){
        var $outV = $(this);
        if( $outV.val() == ''){
            $outV.siblings('.bootstrap-tagsinput').addClass('warn');
            layer.alert($outV.attr('title')+'未填写');
            return false;
        }
    });

}

//关联
/*
function  relevance(){
    var a = $('[relevance=A]');
    var a_1 = $('[relevance=A_1]');
    if(a.val() != '' && a_1.val() == ''){
        console.log('a='+a.val())
        console.log('a1='+a_1.val())
        a_1.siblings('.bootstrap-tagsinput').addClass('warn');
        layer.alert(a_1.attr('title')+'未填写');
        return false;
    }
}*/
