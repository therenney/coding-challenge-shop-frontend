<template>
    <div class="uk-container uk-padding">
        <h1 class="uk-text-center">404 - Not Found</h1>
        <p class="uk-text-center">
            Sorry folks, looks like we cannot find what you are looking for.
            <br />
            <a @click="$router.go(-1)">Back</a>
        </p>
    </div>
</template>

<script>
export default {};
</script>
