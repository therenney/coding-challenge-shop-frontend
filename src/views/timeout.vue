<template>
    <div>
        <h1 :class="title">The page timed out while loading</h1>
    </div>
</template>

<script>
export default {
    page: {
        title: 'Page timeout',
        meta: [{ name: 'description', content: 'The page timed out while loading.' }],
    },
};
</script>

<style lang="less" module>
.title {
    text-align: center;
}
</style>
