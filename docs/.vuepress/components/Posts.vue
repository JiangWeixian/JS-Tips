<template>
  <div>
    <ol>
      <li
        v-for="page of filteredList"
        v-show="page.title"
        class="post"
        :key="page.key"
      >
        <router-link
          :to="page.path"
          class="link"
        >
          {{ page.title }}
        </router-link>
        <p class="content" v-if="page.frontmatter">
          {{ page.frontmatter && page.frontmatter.description }}
        </p>
        <div class="last-updated">
          <span class="prefix">Last Updated</span>
          <span class="time">{{ page.lastUpdated }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    filteredList() {
      // Order by publish date, desc
      return this.$site.pages
        .filter(item => item.path !== '/')
        .sort((a, b) => {
          return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
        })
    }
  },
}
</script>
<style lang="stylus" scope>
  .post
    width 100%
    display flex
    flex-direction column
    padding 16px
    list-style none
    height 100px
    margin-bottom 16px
    transition background-color ease 0.35s
    &:hover
      background-color #f9f9f8

  .link
    text-decoration none!important
    flex-grow 0
    flex-basis 0

  .content
    color #4e6e8e
    margin 0px
    line-height 1.5
    flex-grow 1
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; //作为弹性伸缩盒子模型显示。
    -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
    -webkit-line-clamp:2; //显示的行

  .last-updated
    width 100%
    display flex
    flex-grow 0
    flex-basis 0
    justify-content flex-end

  .prefix
    color #4e6e8e
    font-weight 500
    font-size 0.8em
  .time
    text-indent 8px
    color #4e6e8e
    font-size 0.8em
</style>