export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }],
    },
    {
      name: 'createdAt',
      title: 'Date Created',
      type: 'datetime',
      readOnly: true,
    },
  ],


  initialValue: () => ({
    createdAt: new Date().toISOString(),
  }),
}
