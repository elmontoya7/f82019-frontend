<template lang="pug">
  .login-container
    b-container
      b-row.justify-content-center
        b-col(md="5", xl="4", style="text-align:center;")
          img.logo.mb-4(src="/logo.png")
          h3 Login with Facebook
          .help-text.mb-4 We don't post anything to Facebook
          b-button(variant="primary")
            v-icon.mr-2(name="brands/facebook-square", scale="1.5")
            span Continue with Facebook
</template>

<script>
export default {
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
</style>
