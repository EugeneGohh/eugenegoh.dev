export default {
  name: "workExperience",
  type: "document",
  title: "Work Experience",
  fields: [
    {
      name: "companyName",
      type: "string",
      title: "Company Name",
    },
    {
      name: "roleName",
      type: "string",
      title: "Role Name",
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
      title: "Block editor",
      name: "blockEditor",
      type: "array",
      of: [{ type: "block", lists: [{ title: "Bullet", value: "bullet" }] }],
    },
  ],
};
