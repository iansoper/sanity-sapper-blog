export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5fa35df2f87ad35da834dd0a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-jym5wdqd',
                  apiId: '11f68aaf-8b48-4b5e-90b2-0941d4ce557e'
                },
                {
                  buildHookId: '5fa35df20b265759845b840b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-derr4u4c',
                  apiId: '3243f705-9142-4d82-a0cb-a0b18ab0d073'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iansoper/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-derr4u4c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
