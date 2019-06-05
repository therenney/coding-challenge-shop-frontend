<template functional>
    <div class="core-header-wrapper uk-container uk-container-expand uk-box-shadow-small" uk-sticky="bottom: #offset">
        <nav class="uk-navbar" data-uk-navbar="">
            <div class="uk-navbar-left">
                <div class="logo">
                    <a class="uk-navbar-item uk-logo" href="#"
                        ><img class="uk-preserve" src="@assets/logo.svg" width="122" height="32" uk-svg
                    /></a>
                </div>
            </div>

            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav uk-visible@m">
                    <li class="uk-active"><a href="#">Our Products</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style lang="less" scoped>
@import './../styles/variables.less';

.core-header-wrapper {
    background-color: @color-white;
}
</style>
