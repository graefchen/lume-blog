import lumeCMS from "lume/cms.ts";

const cms = lumeCMS();

cms.storage("my_files", "uploads");

// The Blog Posts
cms.collection("Posts: Blog Posts", "src:posts/*.md", [
  "title: text",
  "data: date",
  {
    name: "draft",
    label: "Draft",
    type: "checkbox",
    description: "If checked, the post will not be published.",
  },
  {
    name: "tags",
    type: "list",
    label: "Tags",
    // deno-lint-ignore no-explicit-any
    init(field: any) {
      const { data } = field.cmsContent;
      field.options = data.site?.search.values("tags");
    },
  },
  {
    name: "excerpt",
    type: "text",
    attributes: {
      required: true,
      maxlength: 400,
    },
  },
  {
    name: "content",
    type: "markdown",
    label: "Content",
  },
]);

// The Updates
cms.upload("uploads: Uploaded files", "src:uploads");

export default cms;
