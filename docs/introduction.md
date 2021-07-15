<!-- Placeholder for now -->
Welcome to the Documentation for the SITHS Component Library!

The SITHS Component Library is made with Nuxt for usage in a Newspaper style website to be hosted in coordination with a backend CMS. The components reflect this and are designed with usage in a newspaper or magazine website in mind - and are designed so they can recieve API calls so they can dynamically reflect articles. Thus a Newspaper or Magazine website is ideal to use the components to their full potential as designed. 

It should also be noted that most of our components are variations of an article link or button, typically including a formula of a Author and Date, a Category, Title, and an Image (as you will see below). This is the most ideal for our project to make use of the database we have already designed, whose API documentation also shows what information is returned with each API call if needed.

 We also have themes with primary and secondary colors for all buttons - which can be changed by altering the containers class and will trickle down to the entire page (which uses variables to choose colors), they are saved in a global.scss file where all the variables used in the project are stored, the general css for the entire page is stored, and the font (Josephin Sans) is stored.

Additionally Media Queries are stored inside in each individual component, and allow the components to be more dynamic when trying to appear on different screens.