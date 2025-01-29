<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
    export default {
        props:{
            todoListCount,
        },
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    const newItem = {
                        id: todoListCount+1,
                        title: this.title,
                        completed: false
                    }
                    this.$emit('addItem', newItem)
                    this.title = ''
                }
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }
    input {
        width: 300px;
    }
</style>