<template>
    <div class="datebar">
        <div class="datebar-container">
            <p class="datebar-date">JULY 8TH, 2021 <font-awesome-icon :icon="['fas', 'calendar']" /></p>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Datebar', // vue component name
    };
</script>


<style lang="scss">
    .datebar {
        background-color: var(--accent-color);
        height: 2.5rem;
        margin: 0;
        padding: 0;
    }
    .datebar-container {
        width: 65rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-content: flex-end;
        align-items: flex-end;
    }
    .datebar-date {
        margin: auto 0;
    }
</style>

<docs>
This is my test button
## Examples

Test Button

```jsx
<Button>Sample Secondary </Button>
```

    
   
</docs>
