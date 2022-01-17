<template>
    <div class="layout-admin">
      <div class="container-fluid layout-admin__container">
        <div class="row layout-admin__row">
          <div :class="{
            'layout-admin__sidebar-container': true,
            'col-md-3 col-lg-2': !open 
          }
          ">
            <sidebar-menu
              v-model="open"
              class="layout-admin__sidebar"
            />
          </div>
          <div :class="{
            'layout-admin__content': true,
            'col-sm-12 col-md-8 col-lg-9': !open 
          }">
            <div class="layout-admin__header-content">
              <h3 class="layout-admin__title --txt-strong">
                {{ title }}
              </h3>
            </div>
            <div class="layout-admin__content-wrapper">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu'

export default {
  name: 'LayoutAdmin',
  
  components: {
    SidebarMenu
  },

  data: () => ({
    open: false
  }),

  computed: {
    title () {
      return this.$route.meta.title
    }
  },

  methods: {
    openMenu () {
      this.open = !this.open
    }
  },
}
</script>

<style lang="scss">
.layout-admin {
  height: 100vh;
  width: 100%;

  &__container {
    height: 100%;
  }

  &__row {
    height: 100%;
  }

  &__sidebar-container {
    position: relative;
    width: 64px;
    height: 100%;
    padding: 0 !important;
  }

  & > &__content {
    width: calc(100% - 64px);
    padding: 0 15px;
  }

  &__sidebar {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &__header-content {
    padding: 15px 0;
  }
}
</style>