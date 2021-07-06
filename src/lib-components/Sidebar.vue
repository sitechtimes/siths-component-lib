<template>
  <div class="sidebar-article">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <img src="../assets/temp image.jpg" alt="" class="sidebar-img">
<div class="sidebar-article-details">
    <p class="sidebar-article-details-category" id="sidebar-article-category">OPINION</p>
    <div class="sidebar-article-details-author-date">
       <span class="sidebar-icon material-icons">account_circle</span>
        <p id="sidebar-article-details-author">Charley Baluja</p>
        <span class="sidebar-icon material-icons ">query_builder</span>
        <p id="sidebar-article-details-date">Jan 31, 2020</p>
    </div>
    <p id="sidebar-article-details-title">Hello this is Dr. Death Defying: MCR ain't dead yet</p>
</div>
  </div>
</template>

<script>
export default {
name: 'Sidebar'
}
</script>

<style lang='css'>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://www.w3schools.com/w3css/4/w3.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

*, html,
body {
    box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 62.5%;

  font-family: 'Josefin Sans', sans-serif;

}

p {
    font-size: 1.6rem;
}

.sidebar-article  {
    height: 10rem;
    width: 35rem;
display: flex;
border: 1px solid black;

float: right;
}

.sidebar-img {
    height: 100%;
    width: auto;
    border: 1px solid black;
}

.sidebar-article-details {
    padding-left: 1rem;
    display: flex;
flex-direction: column;
}
#sidebar-article-category {
text-transform: uppercase;

    width: max-content;
    background-color: #6638E9;
    color: white;
    font-size: 1rem;
    font-weight: 500;

    padding: 0.4rem 0.6rem;
    border-radius: 6px;

    margin-bottom: 0.6rem;
}

.sidebar-article-details-author-date {
    display: flex;

}
.sidebar-article-details-author-date > p{
    font-size: 1rem;
text-transform: uppercase;
margin-right: 1.5rem;
}
.sidebar-icon {
    font-size: 1.4rem;

    padding-right: 4px;
}

#sidebar-article-details-title {
    font-weight: bold;
}

</style>