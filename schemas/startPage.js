export default {
    // title is the display name for the type
    title: 'Start page',
    // name is the identifier for this document type used in the api's
    name: 'startPage',
    type: 'document',
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
        {
          name: 'order',
          title: 'Order',
          type: 'number',
        }
      ],
      orderings: [
        {
          title: 'Sort order',
          name: 'sortOrder',
          by: [
            {field: 'sortOrder', direction: 'desc'}
          ]
        },
      ]
  }
