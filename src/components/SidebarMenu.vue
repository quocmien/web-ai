<template>
<div class="sidebar-menu">
  <el-menu
    class="el-menu-vertical sidebar-menu__container"
    @open="handleOpen"
    @close="handleClose"
    :collapse="value"
  >
    <div class="sidebar-menu__main">
      <el-menu-item
        v-for="(item, index) in menu"
        :key="index"
        :index="index + 1"
        :title="item.name"
        :class="{
          'is-active': item.link === linkActive
        }"
        :route="item.link"
      >
        <i
          v-if="item.icon"
          :class="item.icon"
        />
        <span slot="title">
          {{ item.name }}
        </span>
      </el-menu-item>
    </div>
    <el-menu-item
      @click="handleClose"
      index="4"
      class="--txt-center sidebar-menu__close --none-border"
    >
      <i class="el-icon-setting"></i>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SidebarMenu',

  props: {
      value: {
        type: Boolean,
        default: false
      }
  },

  computed: {
    ...mapState(['menu']),

    linkActive () {
      return this.$route.path
    }
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      this.$emit('input', !this.value)
    }
  },

  created () {  }
}
</script>

<style lang="scss">
.sidebar-menu {
  &__container {
    height: 100%;
  }

  &__main {
    height: calc(100% - 40px);
  }

  & > &__close {
    background-color: colors.$bg-close-sidebar;
  }

  & .el-menu-item {
    height: 40px;
    line-height: 40px;
    border-left: 3px solid transparent;

    &.is-active, &:hover {
      border-color: colors.$yellow-3;
      background-color: colors.$bg-primary;
    }

    &.\--none-border {
      border-color: transparent;
    }
  }
}
</style>