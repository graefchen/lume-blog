import lume from "lume/mod.ts";
// Plugins:
import robots from "lume/plugins/robots.ts";
import date from "lume/plugins/date.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume({ src: "src/" });
site.copy("uploads").copy("styles.css").copy("_includes/style", "style");

// Website configuration:
site
  .use(
    robots({
      allow: ["Googlebot", "Bingbot"],
      disallow: "*",
      rules: [
        {
          userAgent: "*",
          disallow: "/admin",
        },
      ],
    })
  )
  .use(minifyHTML())
  .use(date())
  .use(codeHighlight());

export default site;
