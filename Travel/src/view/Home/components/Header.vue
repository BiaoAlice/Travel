<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe624;</div>
        </div>
        <div class="header-input">
           <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">{{city}}
                <span class="iconfont icon-choose">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>


<script>
    
    export default{
        name:'Header',
        data(){
            return{
            }
        },
        computed:{
            city(){
                return this.$store.state.city
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 0.86rem;
        line-height: 0.86rem;
        background-color: #00bcd4;
        color:white;
        display: flex;
    }
    .header-left{
        float: left;
        width:0.8rem;
    }
    .header-right{
        float: right;
        width:1rem;
        text-align: center;
        color:white;
    }
    .header-input{
        flex:1;
        height: 0.64rem;
        line-height: 0.64rem;
        background-color: #fff;
        border-radius: .1rem;
        color:#ccc;
        margin-top: 0.12rem;
        padding-left:.1rem;
    }
    .icon-back{
        text-align: center;
        font-size: .4rem;
    }
    .icon-choose{
        margin-left:-0.1rem;
        display: inline-block;
        font-size: .24rem;
    }
</style>
