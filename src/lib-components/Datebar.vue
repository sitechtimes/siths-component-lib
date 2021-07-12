<template>
    <div class="datebar">
        <div class="datebar-container">
            <p class="datebar-date">
                <span id="date-text">{{date}} </span>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" class="calendar-icon svg-inline--fa fa-calendar fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path></svg>
            </p>
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
        height: 4rem;
        margin: 0;
        padding: 0;
    }
    .datebar-container {
        width: 120rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .datebar-date {
        font-size: 2.5rem;
        line-height: 4rem;
    }
    .calendar-icon {
        padding-top: 0.5rem;
    }
</style>

<docs>
Colored banner at the top of the page. Text updates dynamically to current date.
## Examples

Looks funky on the preview.

```jsx
<Datebar />
```

    
   
</docs>
