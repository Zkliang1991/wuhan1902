<template>
    <div>

        <Head title="编辑地址"></Head>
        <div class="callList">
            <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList"
                disabled-text="以下地址超出配送范围" @add="onAdd" @edit="onEdit" />
            <van-popup v-model="showEdit" position="bottom">
                <!-- <van-contact-edit :contact-info="editingContact" :is-edit="isEdit" @save="onSave" @delete="onDelete" /> -->
                <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
                    :search-result="searchResult" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
            </van-popup>
        </div>

    </div>
</template>

<script>
    import { Area } from 'vant'
    import areaList from "@/utils/city"
    export default {
        name: 'callList',
        data() {
            return {
                chosenContactId: null,

                showList: false,
                showEdit: false,
                isEdit: false,

                chosenAddressId: 0,
                areaList: areaList,
                searchResult: [],
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },

                ],
                disabledList: [
                    {
                        id: '3',
                        name: '王五',
                        tel: '1320000000',
                        address: '浙江省杭州市滨江区江南大道 15 号'
                    }
                ]


            }


        },
        computed: {
            currentContact() {
                const id = this.chosenContactId;
                return id !== null ? this.list.filter(item => item.id === id)[0] : {};
            }
        },

        methods: {
            // 添加联系人
            onAdd() {
                this.editingContact = { id: this.list.length };
                this.isEdit = false;
                this.showEdit = true;
            },

            // 编辑联系人
            onEdit(item) {
                this.isEdit = true;
                this.showEdit = true;
                this.editingContact = item;
            },

            // 选中联系人
            onSelect() {
                this.showList = false;
            },

            // 保存联系人
            onSave(info) {
                this.showEdit = false;
                this.showList = false;

                if (this.isEdit) {
                    this.list = this.list.map(item => item.id === info.id ? info : item);
                } else {
                    this.list.push(info);
                }
                this.chosenContactId = info.id;
            },

            // 删除联系人
            onDelete(info) {
                this.showEdit = false;
                this.list = this.list.filter(item => item.id !== info.id);
                if (this.chosenContactId === info.id) {
                    this.chosenContactId = null;
                }
            },
            onChangeDetail(){
                
            }
        },

    };


</script>

<style scoped>
    .callList {
        margin-top: 1.6rem;
    }

    .van-address-list__add {
        z-index: 88;
    }
</style>