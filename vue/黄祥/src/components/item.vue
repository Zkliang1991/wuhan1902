<template>
  <div class="item-move">
    <router-link :to="{name:'bookInt',params:{bookid:m._id},query:{name:m.title}}" class="item">
      <img :src="m.cover" alt class="img">
      <div class="intro">
        <p class="tit"><b>{{m.title}}</b></p>
        <p class="typeaut">{{m.minorCate}}|{{m.author}}</p>
        <p class="short">{{m.shortIntro}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "item",
  props:["m"]
};
</script>

<style lang="scss" scoped>
.item-move{
    animation: fadeInRightBig .8s;
    overflow: hidden;
    padding: 10px 15px;
}
.img{
  width: 25%;
  float: left;
}
.intro{
  width: 65%;
  float: left;
  margin-left: 20px;
  text-align: left;
}
.tit,.typeaut{
  padding: 4px;
}
.tit{
  color: #000;
}
.typeaut{
  color: #333;
  font-size: 14px;
}
.short{
  margin: 5px;
  -webkit-line-clamp:3;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  overflow:hidden; 
  text-overflow: ellipsis;
  color: #666;
  font-size: 14px;
}
</style>

