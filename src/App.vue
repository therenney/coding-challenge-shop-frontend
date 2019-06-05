<template>
    <div id="app">
        <div class="header-container">
            <header>
                <div class="logo">
                    <img class="uk-preserve" src="./assets/logo.svg" width="122" height="32" uk-svg />
                </div>
            </header>
        </div>

        <div id="mainWrapper" class="content-wrapper grid">
            <main>
                <transition name="fade" mode="out-in">
                    <Index />
                </transition>
            </main>
        </div>
    </div>
</template>

<script>
import UIkit from 'uikit';
import UIkitIcons from '@src/styles/uikit/uikit-icons-theme';
import Index from '@views/index';

UIkit.use(UIkitIcons);

export default {
    components: {
        Index,
    },
};
</script>

<style lang="less">
@import './styles/index.less';

html {
    background-color: @color-body-bg;
}

// Transitions
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: 0.2s opacity ease-out;
}
</style>
