<template>
  <div class="Destination">
    <div class="place-focus"><!-- 头部 -->
      <a href="#" class="show-info-top">
        <div class="show-info-top">
          <div class="info-left">
            <p>Don't fear the unknown</p>
            <div class="ilDiv">
              <input type="search" placeholder="我想去">
              <a href="#">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
            <ul>
              <li><a href="#">成都</a></li>
              <li><a href="#">婺源</a></li>
              <li><a href="#">厦门</a></li>
              <li><a href="#">青岛</a></li>
              <li><a href="#">巴厘岛</a></li>
            </ul>
          </div>
          <div class="info-right">
            <a href="#" class="irTitle">
              <h2>神仙海岛的三款热门玩法，去普吉一定不能错过</h2>
            </a>
            <p>{{infoData}}</p>
            <a href="#" class="readAll">阅读全文</a>
          </div>
        </div>
      </a>
	  <a href="#" class="show-info-bottom">
		  <div class="show-info-bottom">

		  </div>
	  </a>
	  <div class="">

	  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Destination',
  data(){
    return{
      infoData:'关于泰国普吉岛，这个多面风情的岛屿，常年位于境外旅游热搜榜前列，第一次去的人，容易被它的热带海岛风情和高性价比吸引到想再二刷；第N次去的人，更是因为每次都能发现普吉的新玩法，让人想再多宠幸一遍。'
    }
  }
}
</script>

<style scoped>
  @import url(../css/Destination.css);
  @import url(../css/font-awesome-4.7.0/css/font-awesome.css);
</style>
