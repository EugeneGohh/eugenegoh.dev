export default {
  name: "company",
  type: "document",
  title: "Company",
  fields: [
    {
      name: "companyName",
      type: "string",
      title: "Company Name",
    },
    {
      name: "companyLogo",
      type: "image",
      title: "Company Logo",
      option: {
        hotspot: true,
      },
    },
    {
      name: "companyDescription",
      type: "text",
      title: "Company Description",
    },
    {
      name: "companyUrl",
      type: "url",
      title: "Company Site",
    },
    {
      name: "positionName",
      type: "string",
      title: "Position Name",
    },
    {
      name: "positionType",
      type: "string",
      title: "Position Type",
    },
    {
      name: "startingDate",
      type: "date",
      title: "Starting date",
      options: {
        dateFormat: "YYYY-MM",
      },
    },
    {
      name: "endingDate",
      type: "date",
      title: "Ending date",
      options: {
        dateFormat: "YYYY-MM",
      },
    },
    {
      name: "workingExperience",
      type: "array",
      title: "Working experience",
      of: [{ type: "block" }],
    },
  ],
};
