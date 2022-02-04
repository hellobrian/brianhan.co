import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { gql } from "graphql-request";
import { marked } from "marked";

import { getSanityContent } from "~/utils/getSanityContent";

import styles from "~/styles/blog-slug.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

type Page = { title: string; content: string };
type AllPage = { allPage: Page[] };

export let loader: LoaderFunction = async ({ params }) => {
  const query = gql`
    query PageBySlug($slug: String!) {
      allPage(where: { slug: { current: { eq: $slug } } }) {
        title
        content
      }
    }
  `;

  const { allPage }: AllPage = await getSanityContent(query, {
    slug: params.slug,
  });

  const { title, content } = allPage[0];

  return { title, content };
};

export default function BlogSlug() {
  const blog = useLoaderData();
  return (
    <div className="BlogSlug">
      <h1 className="BlogSlug__title">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(blog.content) }} />
    </div>
  );
}