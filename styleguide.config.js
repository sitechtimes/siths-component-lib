module.exports = {
  // set your styleguidist configuration here
  title: "Siths Component Library Documentation",
  components: "src/lib-components/**/[A-Z]*.vue",
  // defaultExample: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
     {
       name: 'UI Components',
       components: 'src/lib-components/**/[A-Z]*.vue'
     }
   ]
};
