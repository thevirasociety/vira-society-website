import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://thevirasociety.com",
      lastModified: new Date(),
    },
    {
      url: "https://thevirasociety.com/events/the-anasaon-sessions",
      lastModified: new Date(),
    },
  ];
}