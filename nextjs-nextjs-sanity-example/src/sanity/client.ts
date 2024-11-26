import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qyjv3nsu",
  dataset: "production",
  apiVersion: "2024-01-01",
});
