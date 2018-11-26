new Vue({
    el:'#app',
    data:{
        limitNum:3,
        addressList:[],
        currentIndex:0,
        shoppingMethod:1,    //配送方式
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getAddressList();  //执行getAddressList函数
        })
    },
    methods:{
        getAddressList:function(){  //ajax出信息
            axios.get('data/address.json')
                .then(response=> {
                    //console.log(response.data)
                    let obj = eval("("+response.data+")");
                    this.addressList = obj.result;
                });
        },
        loadMore:function(){    //加载更多
            var _limitNum = 3;
            if(this.limitNum==_limitNum){
                this.limitNum = this.addressList.length;
            }else{
                this.limitNum = _limitNum;
            }

        },
        setDefault:function(addressId){  //设为默认
            this.addressList.forEach(function(address,index){
                if(address.addressId==addressId){
                    address.isDefault = true;
                }else{
                    address.isDefault = false;
                }
            })
        },
        delProduct:function(index){  //删除
            this.addressList.splice(index,1)
        },
        editProduct:function(item){ //编辑
            if(typeof item.edit == 'undefined'){
                this.$set(item,'edit',true);
            }else{
                item.edit = !item.edit;
            }
        }
    },
    computed:{
        filterAddress:function(){
            return this.addressList.slice(0,this.limitNum);
        }
    },
    filter:{

    }
});


