export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6d2387c4535be56bbe589c',
                  title: 'Sanity Studio',
                  name: 'harryisonline-studio',
                  apiId: 'f9938aa3-2432-4782-a6d4-2982d08540e1'
                },
                {
                  buildHookId: '5e6d2387281eb0f102a6cd63',
                  title: 'Landing pages Website',
                  name: 'harryisonline',
                  apiId: '01d6d805-6e2d-40a6-9616-37cc8ce19314'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harrystaniland/harryisonline',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://harryisonline.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
