<template>
    <div class="type-7">
        <MedLoader v-if="loading" />

        <div v-else class="row">
            <div class="col-12">
                <div class="text">
                    <pdf :src="'http://localhost' + page.pdf"></pdf>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MedLoader from '@/components/partials/med/loader.vue'
    import pdf from 'vue-pdf'

    export default {
        data() {
            return {
                page: {},
                loading: true,
            }
        },
        created() {
            fetch(`http://localhost/api/front/page/${this.$route.params.id}`)
                .then(response => response.json())
                .then(json => {
                    this.page = json;
                    this.loading = false;
                });
        },
        components: {
            MedLoader,
            pdf
        }
    }
</script>