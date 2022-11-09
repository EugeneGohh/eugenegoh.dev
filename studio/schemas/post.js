export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "blogTitle",
      type: "string",
      title: "Blog Title",
    },
    {
      name: "blogDescription",
      type: "text",
      title: "Blog Description",
    },
    {
      name: "typeOfContent",
      type: "string",
      title: "Type of Content",
    },
    {
      name: "blogContent",
      type: "array",
      title: "Blog Content",
      of: [{ type: "block" }],
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "blogUrl",
      type: "url",
      title: "Blog URL",
    },
    {
      name: "lastUpdatedAt",
      type: "date",
      title: "Last Updated At",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
  ],
};
