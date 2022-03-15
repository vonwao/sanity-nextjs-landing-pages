export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62310cc2522dd42c1cf13d1d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-432iqmqw',
                  apiId: '10e8348f-e66b-4e78-9247-62c0489d59aa'
                },
                {
                  buildHookId: '62310cc3000b5e2ae621ab26',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nmyz7paw',
                  apiId: 'd1149b59-cfba-469a-8e58-d03d73748538'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vonwao/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nmyz7paw.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
