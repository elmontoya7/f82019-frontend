<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
@font-face {
  font-family: Cerebri;
  src: url('./assets/fonts/cerebri-sans-medium.ttf');
}

@font-face {
  font-family: "feather";
  src: url('./assets/fonts/feather.eot?t=1501834582692'); /* IE9*/
  src: url('./assets/fonts/feather.eot?t=1501834582692#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./assets/fonts/feather.woff?t=1501834582692') format('woff'), /* chrome, firefox */
  url('./assets/fonts/feather.ttf?t=1501834582692') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./assets/fonts/feather.svg?t=1501834582692#feather') format('svg'); /* iOS 4.1- */
}

html, body {
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  overflow-y: auto;
}

#app {
  min-width: 100vw;
  min-height: 100vh;
}
</style>
