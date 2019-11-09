<template>
  <div>
    <ul class="list">
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
          url: 'https://github.com/JiangWeixian/use-async-cache',
          name: 'use-async-cache',
          description: 'a simple react hooks implement for async cache store',
        },
        {
          url: 'https://github.com/JiangWeixian/use-heart-beat',
          name: 'use-heart-beat',
          description: 'polling request in react hooks',
        },
        {
          url: 'https://github.com/JiangWeixian/use-rematch-reducer',
          name: 'use-rematch-reducer',
          description: 'use rematch like reducer',
        },
        {
          url: 'https://github.com/JiangWeixian/webpack-eliminate-loader',
          name: 'webpack-eliminate-loader',
          description: 'speed-up your webpack build',
        },
        {
          
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
  @media (max-width: 719px)
    .list
      flex-direction column
  .list
    display flex
    padding 0px
    flex-wrap wrap
  .repository
    flex-basis 30%
    flex-grow 1
    list-style none
    cursor pointer
    padding 16px
    border-radius 4px
    transition background-color 0.15s cubic-bezier(0.645, 0.045, 0.355, 1)
    &:hover
      background-color #f9f9f8

  .title
    border none
    color #3a5169
    padding 0px
  
  .content
    color #4e6e8e
</style>