export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
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
      type: "datetime",
      title: "Last Updated At",
      options: {
        dateFormat: "YYYY-MM",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
    },
  ],
};
