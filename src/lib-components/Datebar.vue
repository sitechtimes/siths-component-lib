<template>
    <div class="datebar">
        <div class="datebar-container">
            <h5 class="datebar-date">
                <span id="date-text">{{ new Date() | date('LLLL do, yyyy') }} </span>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar" class="calendar-icon svg-inline--fa fa-calendar fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path></svg>
            </h5>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Datebar', // vue component name
    data: function () {
        return {
            date: '',
        } 
    }
  }
</script>


<style lang="scss">
@import '../assets/variables';
.datebar {
  background-color: var(--accent-color);
  height: 4rem;
  margin: 0;
  padding: 0;
  width: 100%;
}
.datebar-container {
  width: 120rem;
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
  font-size: 2.5rem;
  line-height: auto;
}
.calendar-icon {
  padding-top: 0.5rem;
  width: 1.5rem;
  height: 2rem;
}
@media only screen and (max-width: $large-screen) {
    .datebar-date {
        font-size: 2.8rem;
        line-height: 3rem;
    }
    .datebar-container {
        width: 100rem;
    }
}
@media only screen and (max-width: $midlarge-screen) {
    .datebar-container {
        width: 80rem;
    }
}
@media only screen and (max-width: $mid-screen) {
    .datebar-container {
        justify-content: flex-start;
        margin-left: 2rem;
    }
    .datebar-date {
        font-size: 3.5rem;
        line-height: 3.2rem;
    }
    .calendar-icon {
    padding-top: 0.6rem;
    }
    .datebar-container {
        width: 60rem;
    }
}
@media only screen and (max-width: $small-screen) {
    .datebar-container {
        justify-content: flex-start;
        margin-left: 2rem;
    }
    .datebar-date {
        font-size: 3.5rem;
        line-height: 3.2rem;
    }
    .calendar-icon {
        padding-top: 0.6rem;
    }
}


</style>

<docs>
Colored banner at the top of the page. Text updates dynamically to current date. Uses moment.js library for the time. If the date doesn't show up, check if moment.js is installed.

## Variables Used:
--accent-color

## Examples

Looks funky on the preview.

```jsx
<Datebar />
```

    
   
</docs>
