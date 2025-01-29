<template>
    <div>
        <ul>
            <TodoItem 
                v-for="todoItem of todoList"
                v-bind:todoItem="todoItem"
                v-on:remove-item="removeItem"
            />
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
export default {
    props: ['todoList'],
    components: {
        TodoItem
    },
    methods: {
        removeItem(id){
            this.$emit('removeItemListData', id)
        }
    }
};
</script>
<style scoped>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>