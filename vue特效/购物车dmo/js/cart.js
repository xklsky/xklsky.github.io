


Vue.filter('money',function(value,type){
    return '￥'+value.toFixed(2)+type;
});

var vm = new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[],
        checkAllFlag:false,
        delFlag:false,
        curProduct:''
    },
    filters:{//局部过滤器
        formatMoney:function(value){
            return "￥"+ value.toFixed(2)
        }
    },
    mounted:function(){
        this.$nextTick(function () {
            // 代码保证 this.$el 在 document 中
            vm.cartView();
        });
        //this.cartView();
    },
    methods:{
        cartView:function(){    //通过ajax获取值
            //let _this = this;
            /*axios.get('data/cartData.json')
             .then(function (response) {
             var obj = eval("("+response.data+")");
             //console.log(obj.result.list);
             _this.productList = obj.result.list;
             _this.totalMoney = obj.result.totalMoney;
             })
             .catch(function (error) {
             console.log(error);
             });*/
            //es6
            axios.get('data/cartData.json')
                .then(response=> {
                    let obj = eval("("+response.data+")");
                    this.productList = obj.result.list;
                    //this.totalMoney = obj.result.totalMoney;
                });
        },
        changeMoney:function(product,way){  //数量加减
            if(way>0){
                product.productQuantity++;
            }else{
                product.productQuantity--;
                if(product.productQuantity<1){
                    product.productQuantity=1
                }
            }
            this.calcTotalPrice();
        },
        selectedProduct:function(item){ //选中/不选中
            if(typeof item.checked == 'undefined'){
                //用vue监听不存在的变量
                //Vue.set(item,'checked',true);
                //局部注册
                this.$set(item,'checked',true);
            }else{
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        checkedAll:function(flag){  //全选/取消全选
            this.checkAllFlag = flag; //通过改变checkAllFlag的布尔值，来来改变样式
            var _this = this;
            this.productList.forEach(function(item,index){
                //防止用户立马点全选，因checked没注册而无效
                if(typeof item.checked == 'undefined'){
                    _this.$set(item,'checked',_this.checkAllFlag);
                }else{
                    item.checked = _this.checkAllFlag; //改变布尔值，来改变所有复选框选中或不选中
                }
            });
            this.calcTotalPrice();
        },
        calcTotalPrice:function(){  //计算总金额
            var _this = this;
            _this.totalMoney = 0;
            this.productList.forEach((item,index)=>{
                //如果选中，数量*金额
                if(item.checked == true){
                    _this.totalMoney += item.productPrice * item.productQuantity;
                }
            });
        },
        delConfirm:function(item){
            this.delFlag = true;    //弹窗
            this.curProduct = item;
        },
        delProduct:function(){  //删除商品
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index,1);
            this.delFlag = false;
        }
    },
    computed:{

    }
});
