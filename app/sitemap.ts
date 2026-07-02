export default function sitemap() {
  const baseUrl = "https://adityarathi.vercel.app";
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/#about`, lastModified: new Date() },
    { url: `${baseUrl}/#projects`, lastModified: new Date() },
    { url: `${baseUrl}/#experience`, lastModified: new Date() },
    { url: `${baseUrl}/#contact`, lastModified: new Date() },
  ];
}