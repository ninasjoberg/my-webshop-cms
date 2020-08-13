export default {
  name: 'startPageContent',
  title: 'Startpage content',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            }
          ]
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent'
    },
  ]
}