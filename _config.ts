import lume from "lume/mod.ts";
// Plugins:
import robots from "lume/plugins/robots.ts";
import date from "lume/plugins/date.ts";
// import postcss from "lume/plugins/postcss.ts";
// import minifyHTML from "lume/plugins/minify_html.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import readInfo from "lume/plugins/reading_info.ts";
// import pagefind from "lume/plugins/pagefind.ts";

const site = lume({ src: "src/" });
site.copy("uploads").copy("styles.css").copy("_incldues/style", "style");

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
  .use(date())
  .use(codeHighlight())
  .use(readInfo());

export default site;
