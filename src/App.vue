<template>
    <div id="app" class="wrapper">
        <MedHeader v-if="settings.theme === 'med'" />
        <ShkolaHeader v-else-if="settings.theme === 'shkola'" />

        <router-view :key="$route.path" />
    </div>
</template>

<script>
    import MedHeader from '@/components/partials/med/header.vue'
    import ShkolaHeader from '@/components/partials/shkola/header.vue'

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
                    if (this.settings.theme === 'med'){
                        require('@/../public/css/style-med.css');
                    } else if (this.settings.theme === 'shkola') {
                        require('@/../public/css/style-shkola.css');
                    }
                });
        },
        components: {
            MedHeader,
            ShkolaHeader
        }
    }
</script>

<style lang="css" scoped>
    @import '/css/bootstrap.min.css';
</style>