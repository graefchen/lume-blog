export const layout = "layouts/archive_result.vto";

export default function* ({ search, i18n }) {
  // Generate a page for each tag
  for (const tag of search.values("tags")) {
    yield {
      url: `/archive/${tag}/`,
      title: `${i18n.search.by_tag} “${tag}”`,
      type: "tag",
      search_query: `type=post '${tag}'`,
      tag,
    };
  }
}
