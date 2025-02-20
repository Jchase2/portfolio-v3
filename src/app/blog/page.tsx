import { getSortedPostsData } from "./blog";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const Blog = () => {
  const allPostsData = getSortedPostsData();

  return (
    <section className="flex flex-col items-center">
      <header>
        <h1 className="text-2xl mb-4">James Chase&apos;s Tech Blog</h1>
      </header>
      <section>
        <ul>
          {allPostsData.map(({ postSlug, date, title }) => (
            <li key={postSlug} className="mb-4">
              <div>
                <Link href={`/blog/${postSlug}`} legacyBehavior>
                  <a className="text-xl text-blue-600 dark:text-blue-400 hover:underline">
                    {title}
                  </a>
                </Link>
                <p>{format(new Date(parseISO(date)), "MMMM do, yyyy")}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Blog;
