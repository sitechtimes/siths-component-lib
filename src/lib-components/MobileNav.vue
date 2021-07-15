<template>
    <!-- <font-awesome-icon class="mobile-nav-icon" :icon="['fas', 'bars']" />
  <FooterNav class="mobile-nav"/> -->
<div class="mobile-nav-box" :style="backgroundColor">
  
    <div id="nav-icon4" :class="spanClass" v-on:click="navFunction()">
        <span></span>
        <span></span>
        <span></span>
  </div>
<div class="mobile-nav" v-if="show">
        <ul class="mobile-nav-ul">
            <a href=""><li class="mobile-nav-li">News</li></a>
            <a href=""><li class="mobile-nav-li">Politics</li></a>
            <a href=""><li class="mobile-nav-li">Entertainment</li></a>
            <a href=""><li class="mobile-nav-li">Opinion</li></a>
            <a href=""><li class="mobile-nav-li">Science</li></a>
            <a href=""><li class="mobile-nav-li">Activities</li></a>
            <a href=""><li class="mobile-nav-li">Events</li></a>
        </ul>
</div>
</div>

</template>

<script>
export default {
    name: "MobileNav",
    data() {
        return {
            spanClass: "",
            show: false,
            bgColor: "",
        }
    },
    computed: {
      backgroundColor: function () {
      return "background-color: " + this.bgColor;
    },
    },
    methods: {
        changeMenu: function() {
            if (this.spanClass != "open") {
                this.spanClass = "open";
            } else {
                this.spanClass = "";
            }

        }, 
        openNav: function() {
          this.show = !this.show;
        },
        toggleBackground: function() {
          if (this.bgColor === "") {
            this.bgColor = "var(--primary-color)";
          } else {
            this.bgColor = "";
          }
        },
        navFunction: function() {
          this.toggleBackground();
          this.openNav();
          this.changeMenu();
        }
    }
}

</script>

<style lang="scss">

@import '../assets/variables';
.mobile-nav-box {
  display: none;
  padding-top: 5vh;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  z-index: 1;
  position: fixed;
  top: 0;
}
 .mobile-nav {
   width: 100vw;
   height: 95vh;
   background-color: var(--primary-color);
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
 }
 .mobile-nav-ul {
   margin-bottom: 10vh;
 }
 .mobile-nav li {
   list-style: none;
   font-size: 3.5rem;
   margin: 4vh;
   color: var(--white);
   transition: all .3s;
 }
 .mobile-nav li:focus {
   padding: 1.5rem;
   background-color: var(--black);
   border-radius: 5rem;
 }
/* Icon 4 */
#nav-icon4 {
  width: 5rem;
  height: 7vh;
  padding: 2rem;
  position: relative;
  margin-left: 87vw;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}
#nav-icon4 span {
  display: block;
  position: absolute;
  height: .5rem;
  width: 100%;
  background: var(--primary-color);
  border-radius: 1rem;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#nav-icon4 span:nth-child(1) {
  top: .5rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 2rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 3.5rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  background: var(--white);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  left: .8rem;
  top: 0;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  background: var(--white);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 3.5rem;
  left: .8rem;
}

    @media only screen and (max-width: $mid-screen) {
        .mobile-nav-box {
          display: block;
        }
    }
    @media only screen and (max-width: $x-small-screen) {
        #nav-icon4 span:nth-child(1) {
          top: 1.25rem;
        }
        #nav-icon4 span:nth-child(2) {
          top: 2.75rem;
        }
        #nav-icon4 span:nth-child(3) {
          top: 4.25rem;
        }
        #nav-icon4.open span:nth-child(1) {
          top: 1rem;
        }
        #nav-icon4.open span:nth-child(3) {
          top: 4.5rem;
        }
    }
    
</style>

<docs>
The mobile nav-bar is used for navigating the sections of the website while on a mobile device. Media queries are used to toggle which nav-bar (desktop or mobile) is displayed.
## Variables Used:
--primary-color, --white, --black

## Examples:

```jsx
<MobileNav />
```
</docs>