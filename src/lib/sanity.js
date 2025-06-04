import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "h2si1syw",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Add this:
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
