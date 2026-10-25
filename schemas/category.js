export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'titleForGoogleSearch',
      title: 'Title for google search',
      type: 'string',
      description:
        'Title shown in google search results, e.g. "Handgjorda silverörhängen". " | NJS 925" is added automatically. Leave empty to use a default title.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description:
        'Shown on the category page and in google search results, about 150 characters.',
    },
  ]
}
