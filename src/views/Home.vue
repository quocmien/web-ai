<template>
    <div class="home">
        <div class="row">
            <div class="col-sm-12 col-md-7 col-xl-6">
                <div class="home__card-container">
                    <custom-card
                        class="home__card-left"
                        :title="'Select a Camera Zone'"
                        :data="data"
                    />
                    <custom-card
                        class="home__card-right"
                        :title="'Select a Camera Zone'"
                        :data="data"
                    />

                    <custom-card
                        class="home__card-left"
                        :title="'Select a Camera Zone'"
                        :data="data"
                    />
                    <custom-card
                        class="home__card-right"
                        :title="'Select a Camera Zone'"
                        :data="data"
                    />
                </div>
            </div>
            <div class="col-sm-12 col-md-5 col-xl-6 home__right-container">
                <div class="home__right-header --bg-primary">
                    <div class="home__right-title">
                        {{ title }}
                    </div>
                    <div class="home__right-btn-show">
                        <span class="--txt">
                            {{ $t('dashboard.showRiskArea') }}
                        </span>
                        <el-switch
                            v-model="show"
                            active-color="#f57944"
                            inactive-color="#e6e6e6">
                        </el-switch>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomCard from '@/components/CustomCard'

export default {
    name: 'Home',

    components: {
        CustomCard
    },

    data: () => ({
        data: [
            'zoone',
            'zoone 2'
        ],
        show: false,
        title: ''
    })
}
</script>

<style lang="scss">
.home {
    &__card-container {
        display: flex;
        flex-wrap: wrap;
    }

    &__card-left {
        width: 50%;
        & .custom-card__container {
            border-top-right-radius: 0;
            border-right: none;
        }
    }

    &__card-right {
        width: 50%;

        & .custom-card__container {
            border-top-left-radius: 0;
            border-left: none;
        }
    }

    &__right-header {
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
    }

    &__right-container {
        padding: 0;
    }
}
</style>
