<template>
    <div class="datebar">
        <div class="datebar-container">
            <p class="datebar-date">
                <span id="date-text">{{date}} </span>
                <font-awesome-icon :icon="['fas', 'calendar']" /></p>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
    name: 'Datebar', // vue component name
    data: function () {{
        return {
            date: '',
        } 
    }
    },
    methods: {
        getCurrentDate: function(){
            let today = new Date();
            let dd = String(today.getDate());
            let mm = String(today.getMonth() + 1); 
            let yyyy = today.getFullYear();
            
            today = mm + '/' + dd + '/' + yyyy;
            let todayFormatted = today;
            let month = moment(todayFormatted).format('MMMM');
            let day = moment(todayFormatted).format('D');
            let year = moment(todayFormatted).format('Y');
            let formattedDate = `${month} ${day}th, ${year}`;
            console.log(formattedDate);
            this.date = formattedDate;
        }
    },
    beforeMount() {
        this.getCurrentDate()
    },
    }
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
    }
    .datebar-date {
        margin: auto 0;
        padding: 0.3rem;
        align-content: center;
        align-items: center;
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
