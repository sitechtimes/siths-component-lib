<template>
  <div class="big">
      <div class="scrolls">
      <text-below-article-preview width="" class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Daniel Briskman" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="I hate rockets, and this is why you should too" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></text-below-article-preview>
        <text-below-article-preview class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Alston Chan" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="Rockets are so valid and chill" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></text-below-article-preview>
          <text-below-article-preview class="opinion-card" articleUrl="https://theconversation.com/us/topics/rocket-science-195" author="Charley Baluja" published="Jan 31, 2020" category="opinion" imageAlt="Space X Rocket" title="Rockets are cool" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"></text-below-article-preview>
            </div>
            <div class="hhh">
                <span class="scroll-bar"></span>
                <span class="scroll-circle"></span>
            </div>

 </div>
</template>

<script>

export default {
 name: "OpinionSlider"

}
</script>

<style>
.big{
    display: flex;
    flex-direction: column;
}
.big span {
    margin: auto;
}
.scrolls{
    display: flex;
    flex-direction: row;
    width: 80vw;
margin: 3rem auto;
overflow-x: auto;
-ms-overflow-style: none;
   scrollbar-width: none;
}
.opinion-card{
    margin-right: 1rem;
}
::-webkit-scrollbar{
   display: none;
}
.scroll-bar{
width: 5rem;
height: 1.5rem;
background-color: var(--primary-color);
border-radius: 1.5rem;
}
.scroll-circle{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    border-radius: 1.5rem;
    background-color: var(--accent-color);
}

.hhh {
    margin: 0px;
}
</style>
