<template>
  <div class="custom-card">
    <el-card class="custom-card__container --bg-primary">
      <template slot="header">
        <div class="custom-card__title">
          <span class="--txt-strong">
            {{ title }}
          </span>
        </div>
        <div class="custom-card__sort">
          <el-select
            class="custom-card__select"
            v-model="sort"
          >
            <el-option value="basic"> {{ $t('customCard.basic') }} </el-option>
            <el-option value="a-z"> {{ $t('customCard.sortAZ') }} </el-option>
            <el-option value="z-a"> {{ $t('customCard.sortZA') }} </el-option>
          </el-select>
        </div>
      </template>
      <div class="custom-card__content-container">
        <ul class="custom-card__content list">
          <li
            v-for="(item, index) in data"
            :key="index"
            :class="{
              'custom-card__item-content': true,
              '--active': item === selected
            }"
            @click="handleClick(item)"
          >
            <span>
              {{ item }}
            </span>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  name: 'CustomCard',

  props: {
    title: {
      type: String,
      default: ''
    },

    data: {
      type: Array,
      default: () => ([])
    }
  },

  data: () => ({
    sort: 'basic',
    selected: ''
  }),

  methods: {
    handleClick (item) {
      this.selected = item
    }
  },
}
</script>

<style lang="scss">
.custom-card {
  width: 100%;
  height: 100%;

  & > &__container {
    box-shadow: none;  
  }

  &__select {
    padding: 5px;
    width: 100px;

    & input {
      padding: 0 15px;
    }

    & input, & .el-input__suffix, & .el-input__icon {
      height: 25px;
      line-height: 25px;
    }
  }

  &__title {
    padding: 7px 0;
  }

  &__sort {
    text-align: right;
    display: flex;
    justify-content: right
  }

  &__content-container {
    height: 100%;
    background-color: colors.$white-1;
  }

  &__content {
    background-color: colors.$white-1;
    border: 1px solid colors.$gray-1;
    border-radius: 5px;
    padding: 5px;

    overflow: hidden scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  &__item-content {
    padding: 10px 15px;
    cursor: pointer;

    &:hover, &.\--active {
      background-color: colors.$bg-primary-hover;
    }
  }

  & .el-card__body, & .el-card__header {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>