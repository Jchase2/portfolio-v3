import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { format, parseISO } from "date-fns";
async function getPostData(postSlug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/blogposts",
    `${postSlug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    postSlug,
    content: contentHtml, // Html constructed from markdown
    data: matterResult.data, // Metadata in md file
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ postslug: string }>;
}) {
  const parameters = await params;
  const postData = await getPostData(parameters.postslug);

  if (!postData) {
    return notFound();
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl text-center">{postData.data.title}</h1>
      <p className="text-sm text-center">
        {format(new Date(parseISO(postData.data.date)), "MMMM do, yyyy")}
      </p>

      <div className="mt-4">
        {postData.content ? (
          <div
            className="prose prose-slate dark:prose-invert mx-auto w-full break-words"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        ) : (
          <p className="text-center">No content available for this post.</p>
        )}
      </div>
    </div>
  );
}
