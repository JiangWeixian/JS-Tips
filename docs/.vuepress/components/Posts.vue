<template>
  <div class=".list">
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
        {{ page.description }}
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
  .list
    height 100vh
    width 50%
    overflow-y scroll
    margin 0 auto
  
  .post
    width 100%
    padding 8px
    list-style none
    max-height 100px
    margin-bottom 16px
    transition background-color ease 0.35s
    &:hover
      background-color #f9f9f8

  .link
    text-decoration none!important

  .last-updated
    width 100%
    display flex
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