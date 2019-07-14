
<template>
    <div>
        <div class="ticket">
            <!-- 优惠券单元格 -->
            <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
            />

            <!-- 优惠券列表 -->
            <van-popup v-model="showList" position="bottom">
            <van-coupon-list
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
           
            />
            </van-popup>
        </div>
    </div>
</template>

<script>

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};

export default {
    data(){
        return {
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList:false,

        }
    }
}
</script>

<style lang="scss" scoped>
.ticket{
    margin-top: .2rem;
    border-radius: .2rem;
    overflow: hidden;
}
</style>
