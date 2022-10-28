export default {
  name: "position",
  type: "document",
  title: "Position",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Position Name",
    },
    {
      name: "startingDate",
      type: "date",
      title: "Starting date",
      options: { dateFormat: "YYYY-MM" },
    },
    {
      name: "endingDate",
      type: "date",
      title: "Ending date",
      options: { dateFormat: "YYYY-MM" },
    },
    {
      name: "workingExperience",
      type: "array",
      title: "Working experience",
      of: [{ type: "block" }],
    },
  ],
};
