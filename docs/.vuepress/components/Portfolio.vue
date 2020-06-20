<template>
  <div class="portfolio">
    <h4>你可以在这里找到我 🎫</h4>
    <ul class="list">
      <li class="social">
        <img width="16" src="https://simpleicons.org/icons/github.svg" />
        <span>github:</span>
        <a href="https://github.com/jiangweixian">@jiangweixian</a>
      </li>
      <li class="social">
        <svg width="16" fill="#1DA1F2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
        <span>twitter:</span>
        <a href="https://twitter.com/jiangweixian">@jiangweixian</a>
      </li>
      <li class="social">
        <img width="16" src="https://www.lgstatic.com/thumbnail_300x300/i/image2/M01/3E/2E/CgotOVzxFqCAedwfAAAtOxHRS_0737.png" />
        <span>jike:</span>
        <a href="https://web.okjike.com/u/94487aff-9d78-4e82-bd8a-179260283ce4">@蒋咸微</a>
      </li>
    </ul>
    <hr />
    <h4>你可通过以下方式联系我 📪</h4>
    <ul class="list">
      <li class="social">
        <span>📪</span>
        <a href="#">maggieeric520@gmail.com</a>
      </li>
    </ul>
    <hr />
    <h4>这是我做过的项目 👨🏻‍💻</h4>
    <ul class="repos list">
      <li
        v-for="repository in repositories"
        :key="repository.name"
        class="repository"
        @click="() => jump(repository.url)"
      >
        <h2 class="title">{{ repository.name }}</h2>
        <p class="content">{{ repository.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repositories: [
         {
          url: 'https://github.com/JiangWeixian/templates',
          name: 'templates',
          description: 'all templates you need in one',
        },
        {
          url: 'https://github.com/JiangWeixian/rematch-observable',
          name: 'rematch-observable',
          description: 'redux-observable in rematch',
        },
        {
          url: 'https://github.com/JiangWeixian/vscode-github-md-like-notion',
          name: 'vscode-github-md-like-notion',
          description: 'write github readme like notion',
        },
        {
          url: 'https://github.com/JiangWeixian/umi-advanced-routes-generator',
          name: 'umi-advanced-routes-generator',
          description: 'advanced generator for umi',
        },
        {
          url: 'https://github.com/JiangWeixian/gh-quick-command',
          name: 'gh-quick-command',
          description: 'command for github.com',
        },
      ]
    }
  },
  methods: {
    jump(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    margin 0px
    padding 0px
  @media (max-width: 719px)
    .repos
      flex-direction column
  
  .social
    display flex
    align-items center
    font-size 14px
    margin-bottom 8px
    *
      margin-right 8px
    img
      fill #fff
  .repository
    flex-basis 30%
    flex-grow 1
    list-style none
    cursor pointer
    padding 4px 8px 8px 8px
    border-radius 8px
    transition background-color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)
    &:hover
      background-color #f9f9f8

    .title
      border none
      font-size 18px
      color #3a5169
    
    .content
      color #4e6e8e
      margin-bottom 0px
</style>