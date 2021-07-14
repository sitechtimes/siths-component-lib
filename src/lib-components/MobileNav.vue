<template>
    <!-- <font-awesome-icon class="mobile-nav-icon" :icon="['fas', 'bars']" />
  <FooterNav class="mobile-nav"/> -->
<div class="mobile-nav-box" :style="backgroundColor">
    <div id="nav-icon4" :class="spanClass" v-on:click="navFunction()">
        <span></span>
        <span></span>
        <span></span>
    </div>

<div class="mobile-nav" v-show="show">
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

 .mobile-nav {
   width: 100vw;
   height: 100vh;
   background-color: var(--primary-color);
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
 }
 .mobile-nav li {
   list-style: none;
   font-size: 3rem;
   margin: 5vh;
   color: var(--white);
 }
/* Icon 4 */

#nav-icon4 {
  z-index: 1;
  width: 3.5rem;
  height: 2.5rem;
  position: relative;
  margin: 5rem auto;
  margin-left: 90vw;
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
  height: .4rem;
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
  top: 0;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 1rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 2rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open span:nth-child(1) {
  background: var(--black);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  left: .8rem;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  background: var(--black);
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 2.5rem;
  left: .8rem;
}

</style>