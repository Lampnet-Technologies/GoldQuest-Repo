export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of blog article',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'blogImage',
      type: 'image',
      title: 'Blog Image',
    },

    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
