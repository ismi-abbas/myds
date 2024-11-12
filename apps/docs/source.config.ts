import { remarkImage } from "fumadocs-core/mdx-plugins";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkImage,
        {
          publicDir: "https://d2391uizq0pg2.cloudfront.net",
          useImport: false,
        },
      ],
    ],
  },
});
