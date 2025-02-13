import { getSortedPostsData } from "./blog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Blog = () => {
  const allPostsData = getSortedPostsData();

  return (
    <section>
      <header className="flex items-center justify-center">
        <h1>Yet another blog.</h1>
        <p>
          This is my blog, mainly focused on technical stuff, but potentially
          other topics as well.
        </p>
      </header>
      <h2 className="flex items-center justify-center">Posts</h2>
      <Separator className="bg-gray-500" />
      <section className="flex items-center justify-center">
        <ul>
          {allPostsData.map(({ postSlug, date, title }) => (
            <li key={postSlug}>
              <h3>
                <Link href={`/blog/${postSlug}`}>
                  {title}, {date}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Blog;
