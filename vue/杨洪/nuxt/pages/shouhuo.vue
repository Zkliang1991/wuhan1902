


<template>
    <div>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
            
    </div>
</template>



<script>
import { AddressEdit } from 'vant';
export default {
         data() {
            return {
            areaList:{},
            searchResult: []
            }
        },

        methods: {
            onSave() {
            console.log("123")
            Toast('save');
            },
            onDelete() {
            Toast('delete');
            console.log("123")
            },
            onChangeDetail(val) {
               
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
