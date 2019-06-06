<template>
    <div>
        <CoreHeader />
        <div>
            <main>
                <transition name="fade" mode="out-in">
                    <router-view :key="$route.fullPath" />
                </transition>
            </main>
        </div>
        <CoreFooter />
    </div>
</template>

<script>
import UIkit from 'uikit';
import UIkitIcons from '@src/styles/uikit/uikit-icons-theme';

UIkit.use(UIkitIcons);

export default {};
</script>

<style lang="less">
@import './styles/index.less';

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
