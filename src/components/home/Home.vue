<template>
    <div>
        <div v-if="settings.theme === 'med'">
            <div v-if="settings.orientation === 'horizontal'">
                <MedHomeHorizontal/>
            </div>
            <div v-else-if="settings.orientation === 'vertical'">
                <MedHomeVertical/>
            </div>
            <div v-else-if="settings.orientation === 'square'">
                <MedHomeSquare/>
            </div>
        </div>

        <div v-if="settings.theme === 'shkola'">
            <div v-if="settings.orientation === 'horizontal'">
                <ShkolaHomeHorizontal/>
            </div>
            <div v-else-if="settings.orientation === 'vertical'">
                <ShkolaHomeVertical/>
            </div>
            <div v-else-if="settings.orientation === 'square'">
                <ShkolaHomeSquare/>
            </div>
        </div>
    </div>
</template>

<script>
    import MedHomeHorizontal from '@/components/home/med/horizontal'
    import MedHomeVertical from '@/components/home/med/vertical'
    import MedHomeSquare from '@/components/home/med/square'
    import ShkolaHomeHorizontal from '@/components/home/shkola/horizontal'
    import ShkolaHomeVertical from '@/components/home/shkola/vertical'
    import ShkolaHomeSquare from '@/components/home/shkola/square'

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
            MedHomeHorizontal,
            MedHomeVertical,
            MedHomeSquare,
            ShkolaHomeHorizontal,
            ShkolaHomeVertical,
            ShkolaHomeSquare,
        }
    }
</script>