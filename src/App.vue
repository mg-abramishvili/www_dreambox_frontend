<template>
    <div id="app" class="wrapper">
        <MedHeader />
        <router-view :key="$route.path" />
    </div>
</template>

<script>
    import MedHeader from '@/components/partials/med/header.vue'

    export default {
        data() {
            return {
                settings: {}
            }
        },
        created() {
            fetch(`http://localhost/api/front/settings/`)
                .then(response => response.json())
                .then(json => {
                    this.settings = json;
                });
        },
        components: {
            MedHeader
        }
    }
</script>

<style lang="css" scoped>
@import '/css/bootstrap.min.css';
@import '/css/style-med.css';
</style>