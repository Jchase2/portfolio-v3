import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

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

  return {
    postSlug,
    content: matterResult.content,
    data: matterResult.data, // This should contain title, date, etc.
  };
}

export default async function BlogPost({
  params,
}: {
  params: { postslug: string };
}) {
  const postData = await getPostData(params.postslug);

  if (!postData) {
    return notFound();
  }

  return (
    <div>
      <h1>{postData.data.title}</h1>
      <p>{postData.data.date}</p>
      <article dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
}
