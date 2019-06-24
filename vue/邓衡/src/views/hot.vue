<template>

    <div>

        <Head title="热点" show="true"></Head>
        <div class="content">
            <div class="page js-page on">
                <div class="photo">
                    <a href="http://cms-bucket.ws.126.net/2019/06/18/3c71447beb9f474ea3705e87b832371f.png">
                        <img alt="" src='http://cms-bucket.ws.126.net/2019/06/18/3c71447beb9f474ea3705e87b832371f.png' width="100%">
                        
                    </a>
                </div>
                <p>加拿大最大城市多伦多当地时间17日举行多伦多猛龙队历史上首次夺得北美全国篮球协会（NBA）总冠军的庆祝活动，吸引了大约100万到200万民众聚集到市中心参加。</p>
                <p>活动从上午10点开始，持续一天。下午4点左右，多伦多警察局通过社交媒体发布消息说，在市中心的贝街和艾伯特街附近，发生了一场枪击事件，有两人受伤送医，均无生命危险。警方迅速逮捕了两个人，并缴获了两支枪。原因目前仍在调查。
                </p>
                <p>多伦多警方更新消息称：枪击事件中，造成4人受伤，警方已经逮捕了3人。</p>
                <div class="photo">
                    <a href="http://cms-bucket.ws.126.net/2019/06/18/190171f68dcf470eb98ba21abdfcfea2.jpeg">
                    </a>
                </div>
                <div class="otitle_editor">
                    <p class="otitle">(原标题：多伦多猛龙队NBA夺冠庆功大会现场发生枪击案 四人受伤)</p>

                   
                </div>
            </div>
        </div>
    </div>
    </div>
</template>



<script>
    import { mapState, mapActions } from "vuex"
    export default {
        name: 'hot',
        computed: {
            ...mapState(['data'])
        },
        methods: {
            ...mapActions(['getHot'])
        },
        mounetd() {
              this.getHot({
                  url:''
              })
        }
    }
</script>
<style>
    .conent{
        width: 100%;
        height: 100%;
    }
    .conent img{
        width: 100%;
        
    }


</style>