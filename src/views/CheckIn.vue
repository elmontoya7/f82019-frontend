<template lang="pug">
  .login-container
    b-container
      b-row.justify-content-center
        b-col(md="5", xl="4", style="text-align:center;")
          h3 How are you feeling today?
          .help-text.mb-4 Select the emoji that best represents you
          b-row
            b-col.emoji(cols="3", v-for="(emoji, index) in emojis", :key="index") {{ emoji }}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      emojis: ['😩', '😟', '😄', '😡']
    }
  },
  methods: {
    ...mapActions(['auth/authenticate']),
    authenticate (provider) {
      let self = this

      this['auth/authenticate']({
        provider: provider,
        callback: res => {
          console.log(res);
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    min-height: 0;
    border-top: 2px solid #0e5ccf;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 60px;
    height: 60px;
    object-fit: scale-down;
  }

  .emoji {
    font-size: 50px;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
      border-radius: 50px;
    }
  }
</style>
