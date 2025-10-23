<script lang="ts">
    const storage = localStorage.getItem('todolist');
    let todolist: Array<string> = [];
    let popupOpen: boolean = false;
    let popupValue: string;
    let editedTaskIndex: number;
    if (typeof storage === 'string' && storage != '') {
        todolist = JSON.parse(localStorage.getItem('todolist') as string) as Array<string>;
    }
    let fieldValue: string; 
    function handleClick() {
        todolist.push(fieldValue);
        todolist = todolist;
        fieldValue = '';
    }
    function deleteTask(i: number) {
        todolist.splice(i, 1);
        todolist = todolist;
    }
    function editTask(i: number) {
        if (!popupOpen) {
            togglePopup();
        }
        popupValue = todolist[i];
        editedTaskIndex = i;
    }
    function saveEditedTask(i: number) {
        if (popupValue) {
            todolist[i] = popupValue;
        }
        if (popupOpen) {
            togglePopup();
        }
    }
    function togglePopup() {
        popupOpen = !popupOpen;
    }
    $:localStorage.setItem('todolist', JSON.stringify(todolist));
</script>

<div>
    <input type="text" bind:value={fieldValue}>
    <button on:click={handleClick}>Add task</button>
</div>

{#if popupOpen}
    <div class="popup">
        <input type="text" bind:value={popupValue}>
        <button on:click={togglePopup}>Cancel</button>
        <button on:click={saveEditedTask(editedTaskIndex)}>Save</button>
    </div>
{/if}

<div class="list">
    {#each todolist as task, i}
        <div class="task">
            <div>{i+1} {task}</div>
            <div>
                <button on:click={() => editTask(i)}>Edit</button>
                <button on:click={() => deleteTask(i)}>X</button>
            </div>
        </div>
    {/each}
</div>

<style>
    .task {
        display: flex;
        font-display: row;
        justify-content: space-between;
    }
    .list {
        margin-top: 16px;
    }
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(94, 94, 94);
        border: 1px solid #ccc;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        z-index: 999;
        border-radius: 16px;
    }
</style>
  