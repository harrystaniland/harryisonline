export default {
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "string" },
    { name: "sectionImage", type: "image" },
    // { name: "content", type: "array", of: [{ type: "richBlock" }] },
    { name: "content", type: "richBlock" },
    { name: "gallery", type: "array", of: [{ type: "image" }] }
  ]
};
