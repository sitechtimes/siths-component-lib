<template>
  <div class="opinion-section">
      <div class="scrolls">
      <text-below-article-preview width="" class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></text-below-article-preview>
        <text-below-article-preview class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Alston Chan" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="Rockets are so valid and chill" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></text-below-article-preview>
          <text-below-article-preview class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Charley Baluja" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="Rockets are cool" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></text-below-article-preview>
            </div>
      <!-- <div class="span-div">
                <span id="1" class="scrollbar" @click="hello"> </span>
                    <span id="2" class="scroll-circle" @click="hi"></span>
         </div> -->

 </div>
</template>

<script>

export default {
 name: "OpinionSlider",
methods: {
    // hello: function(){
    // const scrollbar = document.getElementById("1")
    // scrollbar.classList.toggle("scroll-circle")
    // console.log(scrollbar.classList)
    // },
    // hi: function(){
    // const scrollCircle = document.getElementById("2")
    // scrollCircle.classList.toggle("scrollbar")
    // scrollCircle.classList.remove("scroll-circle")
    // console.log(scrollCircle.classList);
    // }
}
}
</script>

<style>
.opinion-section{
    display: flex;
    flex-direction: column;
      margin-bottom: 3rem;
}
.span-div{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.scrolls{
    display: flex;
    flex-direction: row;
    width: 70vw;
    margin: 3rem auto;
    overflow-x: auto;
}
.opinion-card{
    margin-right: 1rem;
}
.scrolls::-webkit-scrollbar{
height: 1.5rem;
border-radius: 1.5rem; 
background-color: var(--accent-color);
width: 20rem;
}
.scrolls::-webkit-scrollbar-thumb{
  background-color: var(--primary-color);
  height: 1.5rem;
border-radius: 1.5rem; 
width: 10rem;
}
.scrollbar{
width: 70vw;
height: 1.5rem;
background-color: var(--accent-color);
border-radius: 1.5rem;
}
/* .scroll-circle{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    border-radius: 1.5rem;
    background-color: var(--accent-color);
} */
</style>
