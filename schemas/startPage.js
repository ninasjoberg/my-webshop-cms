export default {
    name: 'startPage',
    title: 'Start page',
    type: 'document',
    fields: [
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                    {
                        title: 'Content',
                        name: 'content',
                        type: 'startPageContent'
                    }
            ]
        },
    ]
  }
