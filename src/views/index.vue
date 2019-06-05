<template>
    <div class="uk-section">
        <div class="uk-container">
            <table class="uk-table uk-table-middle uk-table-divider">
                <thead>
                    <tr>
                        <th class="uk-width-small">Table Heading</th>
                        <th>Table Heading</th>
                        <th>Table Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="index in 10" :key="index">
                        <td>Table Data</td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </td>
                        <td><button class="uk-button uk-button-default" type="button">Button</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    components: {},

    data() {
        return {};
    },

    created() {
        // get streamlab profile
        // this.$store.dispatch(`STREAMLABS/fetchProfile`).then(() => {
        //     this.fetchAccount();
        // });
    },
};
</script>

<style lang="less" scoped></style>
