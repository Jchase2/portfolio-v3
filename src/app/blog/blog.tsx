import fs from "fs";
import path from "path";
import matter from "gray-matter";

type PostMetaData = {
  title: string;
  date: string;
  category: string;
};

export function getSortedPostsData() {
  console.log("cwd is: ", process.cwd());

  const postsDirectory = path.join(process.cwd(), "src/app/blog/blogposts");
  console.log("POSTS DIRECTORY IS: ", postsDirectory);

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const postSlug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    console.log("fileContents: ", fileContents);

    return {
      postSlug,
      ...(matterResult.data as PostMetaData),
    };
  });

  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
