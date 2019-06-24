<template>
    <div class="home-page">
        <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
            @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
    </div>
</template>

<script>

    import areaList from '@/utils/areaList.js'

    import Toast from 'vant'

    export default {
        data() {
            return {
                areaList,
                searchResult: [],
            }
        },

        methods: {
            onSave(e) {
                let data = {};
                data.name = e.name;
                data.tel = e.tel;
                data.address = e.province + e.city + e.county + e.addressDetail + "";
                data.addressDetail = e.addressDetail;
                data.areaCodeL = e.areaCode;
                data.postalCode = e.postalCode;
                data.isDefault = e.isDefault;
                console.log(data);
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                console.log(val)
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            }
        }
    }
</script>

<style>
    .home-page {
        padding-top: 46px;
    }

    .home {
        width: 100%;

    }
</style>
