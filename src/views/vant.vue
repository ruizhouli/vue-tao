<template>
    <div class="sy">
        <div class="header">
            <img src="../assets/banner4.png" alt="">
        </div>
        <div class="content">
                <div class="content_cent">
                    <img src="../assets/che.jpg" alt="">
                    <div class="content_cent_top">
                        山西联网售票签约合作平台
                    </div>
                    <div class="content_cent_center">
                       <div @click="cx">出发地</div>
                    </div>
                    <div class="content_cent_footer">
                       <van-button type="info" class="mt">查询</van-button>
                       <div class="mt">最近查询</div>
                    </div>
                </div>
        </div>
        <footer>
           <ul>
               <li v-for="item in footData"><i :class="item.c"></i><div>{{item.name}}</div></li>
           </ul>
        </footer>
         <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" round @cancel="onClose" @select="onSelect" />
    </div>
</template>

<script>
import '../plugins/vant'
    export default {
        data() {
            return {
                footData: [
                    {
                        name:"首页",
                        c:"iconfont iruizhouyemianin"
                    },
                    {
                        name:"汽车站查询",
                        c:"iconfont iruizhouchaxun"
                    },
                    {
                        name:"帮助中心",
                        c:"iconfont iruizhoubangzhuzhongxin"
                    },
                    {
                        name:"我的",
                        c:"iconfont iruizhouwode-copy-copy"
                    }

                ],
                show: false,
                actions: [
                {
                    name: '选项',
                },
                {
                    name: '选项',
                },
                {
                    name: '选项',
                    subname: '副文本',
                    openType: 'share',
                },
                ],
            }
        },
        methods:{
            cx(){
                this.show=true
            },
            onClose() {
                
            },

            onSelect(event) {
                console.log(event.value);
            },
        }
    }
</script>

<style  scoped>
    .sy{
        height: 100%;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .content{
        flex:1;
        padding: 0 20px;
    }
    .header{
        width:100%;
        height:20%;
        /* height:20%; */
        /* border: 1px solid gray; */
    }
     .header img{
         width:100%;
         height:100%;
     }
    footer{
        /* height:20%; */
        width:100%;
        height:10%;
        /* height: ; */
        /* border: 1px solid gray; */
    }
    footer ul{
        height:100%;
        width:100%;
        display: flex;
        justify-content: space-around;
    }
    footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:#aaa
    }
    .content_cent{
        position: absolute;
        left:50%;
        top:10%;
        transform: translateX(-1.395rem);
    }
    .content_cent img{
        height:1.23rem;
        width:2.79rem;
    }
    .content_cent_top,.content_cent_center{
        margin-top:10px;
        border:1px solid rgb(1, 245, 38);
    }
    .content_cent_top{
        height:30px;
        line-height: 30px !important;
        font-size: 14px;
    }
    .content_cent_center{
        height: 30px;
    }
    .content_cent_footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .van-button{
        width:1.50rem;
        border-radius: 22px 22px 22px 22px; 
    }
    .mt{
        margin-top:10px
    }
</style>