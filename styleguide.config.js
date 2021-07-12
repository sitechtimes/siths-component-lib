module.exports = {
  // set your styleguidist configuration here
  title: "Siths Component Library Documentation",
  components: 'src/lib-components/**/[A-Z]*.vue',
  //defaultExample: true,
  //exampleMode: "expand",
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
     {
       name: 'UI Components',
       components: 'src/lib-components/**/[A-Z]*.vue'
     },
     {
       name: 'Credits',
       content: 'docs/credits.md'
     }
   ]
};
