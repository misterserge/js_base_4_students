<template>
    <li>
        <span v-bind:class="{done: todoItem.completed}">
            <input type="checkbox" v-model="todoItem.completed"> <!--v-on:change="todoItem.completed =! todoItem.completed" -->
            <strong>{{ todoItem.id }}</strong>
            {{ todoItem.title }}
        </span>
        <button v-on:click="$emit('remove-item', todoItem.id)">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todoItem: {
            type: Object,
            required: true
        }
    }
};
</script>
<style>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    li button {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }
    .done {
        text-decoration: line-through;
    }
    input {
        margin-right: 1rem;
    }
</style>