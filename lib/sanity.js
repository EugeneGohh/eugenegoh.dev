import { createClient } from "next-sanity";

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-10-28",
  useCdn: false,
};

export const sanityClient = createClient(config);
