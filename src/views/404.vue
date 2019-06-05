<template>
    <div class="uk-container uk-padding">
        <div class="uk-position-center">
            <h1 class="uk-text-center">404 - Not Found</h1>
            <p class="uk-text-center">
                Sorry folks, looks like we cannot find what you are looking for.
                <br />
                <a @click="$router.go(-1)">Back</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>
