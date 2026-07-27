export const baseUrl = "https://drewtom.com/";

export default async function sitemap() {
  let routes = ["", "/photos", "/experience", "/projects", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return routes;
}
