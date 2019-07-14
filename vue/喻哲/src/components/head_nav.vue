
<template>
    <div>
        <div class="box">
            <div>
                <img src="../assets/logo/logo1.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo2.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo3.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo4.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo5.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo6.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo7.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo8.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo9.jpg" alt="">
                <span>无人超市</span>
            </div>
            <div>
                <img src="../assets/logo/logo10.jpg" alt="">
                <span>无人超市</span>
            </div>
            
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .box{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        >div{
            width: 20%;
            font-size: 0.27rem;
            display: flex;
            flex-direction:column;
            align-items: center;
            padding: .15rem 0; 
            >img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
            }
            >span{
                font-weight: bold;
            }
        }
    }
</style>

