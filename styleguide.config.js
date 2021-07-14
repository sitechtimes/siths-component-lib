module.exports = {
  // set your styleguidist configuration here
  title: "Siths Component Library Documentation",
  components: 'src/lib-components/**/[A-Z]*.vue',
  defaultExample: true,
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
       name: 'Variables',
       sections: [
         {
           name: 'Colours',
           content: 'docs/color_variables.md'
         },
         {
          name: 'Font Variables',
          content: 'docs/font_variables.md'
        }, 
        {
          name: 'Media Query Variables',
          content: 'docs/media_query_variables.md'
        }
       ]
     },
     {
       name: 'Credits',
       content: 'docs/credits.md'
     }
   ]
};
