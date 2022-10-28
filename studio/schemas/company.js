export default {
  name: "company",
  type: "document",
  title: "Company",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Company Name",
    },
    {
      name: "image",
      type: "image",
      title: "Company Logo",
      option: {
        hotspot: true,
      },
    },
  ],
};
