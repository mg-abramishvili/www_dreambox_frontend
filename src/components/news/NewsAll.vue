<template>
    <div>
        <h2>Новости</h2>
        <ul>
            <li v-for="newItem in news" v-bind:key="newItem.id">
                <router-link :to="{name: 'NewsItem', params: {id: newItem.id}}">
                    {{newItem.title}}
                </router-link>
            </li>
        </ul>
        <router-link to="/">На главную</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news: [
                    {id: 1, title: 'Новость 01', text: 'Текст новости 01'},
                    {id: 2, title: 'Новость 02', text: 'Текст новости 02'},
                    {id: 3, title: 'Новость 03', text: 'Текст новости 03'},
                ]
            }
        },
        components: {
        }
    }
</script>
