---
title: "First Blog Post, Motivations, NextJS"
category: "Software Development"
date: "2024-02-19"
---

### Motivations for Blogging

I've always found that writing about what I'm learning helps cement my understanding. Over the years, I've taken notes in various places including Obsidian, GitHub READMEs, and handwritten journals, but I wanted something more structured and public. So, I decided to build my own blog to document my learning journey, share what I’ve been working on, and, hopefully, connect with like-minded developers.

First, I had to decide if I should write my own blogging software, or install something like [Ghost](https://ghost.org/) to manage my posts. Given that I'm a web devloper,
and my site is already written in NextJS, I figured it made the most sense to just write my own static blog.

Over the past 2 or so years, I've been using [Obsidian](https://obsidian.md/), which is a markdown based note taking app. I like markdown for this sort of thing due to its
widespread adoption and compatibility with different apps. I decided to adopt it as my preferred markup language for the blog as well. Currently,
at [https://notes.jamesdchase.com](https://notes.jamesdchase.com), I have a script I found on github which converts the markdown into a published notes section on my site.

In the future, I may move that into my Next app and handle the markdown myself similar to this blog. I also have [Nextcloud](https://nextcloud.com/) set up on my home server,
where the markdown files for Obsidian are stored. Ideally, in the future, I will have an automated build process set up to build and deploy new blog posts and Obsidian
notes to the site, stored on my nextcloud instance.

### Writing jamesdchase.com

I've had three different versions of my portfolio site so far. You can find all three versions on my github: [https://github.com/Jchase2](https://github.com/Jchase2).
The [first version](https://github.com/Jchase2/portfolio) was simply built with html, css, and some Javascript with bootstrap. The [second version](https://github.com/Jchase2/portfolio-v2) used create-react app, which has now been [sunsetted / abandoned](https://react.dev/blog/2025/02/14/sunsetting-create-react-app). The create-react-app team now recommends something like NextJS, which is why I'm in the process of converting this site, and at some point, [ServerHuD](https://github.com/Jchase2/serverHuD) (my server / app monitoring software) to Next.

In order to learn NextJS, I purchased Robin Wieruch's [Road to Next course](https://www.road-to-next.com/). I like to implement things on my own to cement my learning from courses,
so I've been slowly working through that course while building out my portfolio with the concepts I'm picking up from there. I've been learning a lot!

### Writing the Blog

Currently, the blog is pretty bare bones. I have a blog directory in my NextJS app directory, which contains a directory for markdown files, a blog.tsx, a page.tsx, and a
postslug directory which uses Next's [Dynamic Routes.](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

blog.tsx handles grabbing the markdown files and sorting them by date for page.tsx, which just lists all the blog posts.

```
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
```

page.tsx within the postslug directory handles displaying the post itself, which uses [remark](https://www.npmjs.com/package/remark) and [remark-html](https://www.npmjs.com/package/remark-html) to convert the markdown into html. In order to style the html without using tailwind on every post, I used a tailwind plugin called prose from [tailwind-typography](https://github.com/tailwindlabs/tailwindcss-typography).

```
<div className="mt-4">
{postData.content ? (
    <div
    className="prose prose-slate dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: postData.content }}
    />
) : (
    <p>No content available for this post.</p>
)}
</div>
```

### Publishing this Site.

In order to publish the site, I've got a Hetzner cloud server running debian with these specs:

![Hetzner cloud server](/blogpics/cpx21-hetzner.png)

Currently, I just push to github, pull the new updates in with git pull, npm run build and restart the server similar to this:

```
npm run build && pm2 stop jamesdchase.com && pm2 start "npm run start" --name "jamesdchase.com"
```

This works, but I'm going to work on a full build pipeline soon so I can just push to github and it'll automatically build and deploy changes.

I'm pretty happy with how it has turned out so far, although I'm sure I'll get the itch to expand the features or alter the styling in the future.
If you’re working on something similar or have insights to share, feel free to connect on [Linkedin!](https://www.linkedin.com/in/jameschase2/)
That's all I've got for now! I'll be posting new blog posts to my LinkedIn as they come.
