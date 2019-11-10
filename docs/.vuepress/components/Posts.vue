<template>
  <div class="container">
    <ul
      class="categories"
    >
      <li
        v-for="key in Object.keys(categories)"
        :key="key"
        :class="{ category__selected: key === selectedCategory, category: true }"
        @click="() => handleSelected(key)"
      >
        <p>{{ key }}</p>
        <span class="badge">{{ categories[key].length }}</span>
      </li>
    </ul>
    <ol class="posts">
      <li
        v-for="page of filtedPosts"
        v-show="page.title"
        class="post"
        :key="page.key"
        @click="() => jump(page.path)"
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
  data() {
    return {
      selectedCategory: ''
    }
  },
  computed: {
    posts() {
      // Order by publish date, desc
      return this.$site.pages
        .filter(item => item.path !== '/')
        .sort((a, b) => {
          return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
        })
    },
    filtedPosts() {
      if (this.selectedCategory) {
        return this.categories[this.selectedCategory]
      } else {
        return this.posts
      }
    },
    categories() {
      const result = {}
      this.posts
        .filter(v => !!v.relativePath)
        .forEach((post) => {
          const currentCategory = post.relativePath.split('/')[0]
          if (!currentCategory.endsWith('md')) {
            if (!result[currentCategory]) {
              result[currentCategory] = [post]
            } else {
              result[currentCategory].push(post)
            }
          }
        })
      return result
    },
  },
  methods: {
    jump(url) {
      this.$router.push(url)
    },
    handleSelected(category) {
      this.selectedCategory = category
    }
  }
}
</script>
<style lang="stylus" scope>
  .post
    display flex
    flex-direction column
    padding 16px
    list-style none
    height 100px
    margin-bottom 16px
    cursor pointer
    transition background-color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)
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

  @media (max-width: 1144px)
    .categories
      display none
  .categories
    width 300px
    height 100vh
    position fixed
    left 0px
    top 100px
    margin 0px
    padding 0px
    border-right 1px solid #f9f9f8
  .category
    list-style none
    display flex
    align-items center
    justify-content flex-start
    cursor pointer
    padding-left 16px
    height 32px
    border-left 4px solid white
    &__selected
      border-left-color #0540a9
      background-color #f9f9f8
      p
        color #0540a9
        font-weight 500
    p
      margin 0px
      padding 0px
    .badge
      margin 0 8px
      line-height 20px
      width 20px
      height 20px
      text-align right 
</style>