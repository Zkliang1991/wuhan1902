<template>
    <div>
        <van-address-edit
            :area-list="areaList"
            show-postal
            :addressInfo = "list"
            show-delete
            @save="onSave"
            @delete="onDelete"
            />
    </div>
</template>

<script>
import { AddressEdit } from 'vant';
import { Toast } from 'vant';
export default {
    name:'AddressEdit',
    props:['nickname'],
    data() {
        return {
            areaList:{                   
                province_list: {
                    110000: '湖北省',
                    120000: '湖南省',
                    130000: '北京省',
                    140000: '......'
                },
                city_list: {
                    110100: '武汉市',
                    110200: '宜昌',
                    120100: '恩施',
                    120200: '潜江'
                },
                county_list: {
                    110101: '黄陂区',
                    110102: '江夏区',
                    110105: '江岸区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                }

            },
            list:{
                name:'',
                tel:'',
                province:'湖北',
                city:'',
                county:'',
                addressDetail:'',
                postalCode:''
            }

            }
        },
        mounted(){
            this.$axios.post('/vue/address')
            .then(res=>{
                if(res.data.result.body){

                    var addressDetail = res.data.result.body.content
                    this.list.name = addressDetail.name;
                    this.list.tel = addressDetail.tel;
                    this.list.province = addressDetail.province;
                    this.list.city = addressDetail.city;
                    this.list.county = addressDetail.county
                    this.list.addressDetail = addressDetail.addressDetail
                    this.list.postalCode = addressDetail.areaCode
                    // console.log(addressDetail)
                }
            })
        },

        methods: {
            onSave(content) {
                // console.log(content)
            Toast({
                message:'跳转订单页面',
                duration:300
            });
            this.$axios.post('/vue/informations',{
                data:{
                    content
                }
            }).then(res=>{
                // console.log(res.data.result)
                this.$router.push({name:'order'})
            })
            },
            onDelete(content) {
                content.name = '',
                content.tel = '',
                content.city = '',
                content.province = '',
                content.county = '',
                content.addressDetail = '',
                content.areaCode = '',
                Toast({
                    message:'已清空，请重新输入...',
                    duration:500
                });
            },
        }
    }
</script>
