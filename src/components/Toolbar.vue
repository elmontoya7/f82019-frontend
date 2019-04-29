<template lang="pug">
  b-navbar.light-bar.bb-1(toggleable="lg")
    b-container
      b-navbar-toggle.mr-auto.burger-menu(target="navbar-collapse")
        menu-icon
      b-navbar-brand.mr-auto(:to="{name: 'root'}") Mental Health
      b-navbar-nav.d-none.d-lg-block
        b-nav-item(:to="{name: 'logout'}") Logout
      b-navbar-nav.d-lg-none.invisible
        b-nav-text HH
      b-collapse.mr-auto.order-lg-first(id="navbar-collapse", is-nav, style="flex-grow: inherit;")
        b-navbar-nav
          b-nav-item.d-lg-none.mt-2(:to="{name: 'logout'}") Logout
</template>

<script>
export default {
  mounted () {
    // FOCUS SEARCH INPUT ON CTRL (CMD) + F
    // window.addEventListener("keydown",function (e) {
    //   if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
    //     e.preventDefault();
    //     document.getElementById('toolbarSearch').focus()
    //   }
    // })
  }
}
</script>

<style lang="css" scoped>
  .light-bar {
    background: white;
    padding: 13px 16px;
  }

  .navbar-collapse:before {
    content: "";
    display: block;
    border-top-width: 1px;
    border-top-style: solid;
    margin: .75rem -1rem;
    border-top-color: #e3ebf6;
  }

  .burger-menu {
    border: transparent;
    outline: none !important;
    padding: 0;
  }

  .toolbar-logo {
    width: auto;
    height: 30px;
    object-fit: scale-down;
  }

  .toolbar-search {
    width: 100% !important;
  }

  @media (min-width: 992px) {
    .toolbar-search {
      width: 100px !important;
    }

    .navbar-collapse:before {
      display: none;
    }
  }
</style>
