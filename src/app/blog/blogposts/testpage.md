---
title: "First Blog Post, Motivations, NextJS"
category: "Software Development"
date: "2024-02-19"
---

## Motivation and Learning NextJS

The motivation behind creating this blog is twofold: to market myself and to document my learning journey for anyone who might find it helpful. By making my development progress more public, it may end up opening the door to more opportunities. On top of that, it'll help cement my learning as I go.

This is my first blog post, and while the blog itself isn't fully implemented yet, I'm excited to share what I've been working on! Currently, I’m diving into learning NextJS, which has become essential for me due to [the sunsetting of create-react-app](https://react.dev/blog/2025/02/14/sunsetting-create-react-app). Last year, I spent quite a bit of time improving and adding features to [serverHuD](https://github.com/Jchase2/serverHuD), my server monitoring app, and my goal is to eventually port it to NextJS — definitely a challenge, but I’m looking forward to the process!

To get started with NextJS, I purchased Robin Wieruch's [Road to Next course](https://www.road-to-next.com/), and I’ve been working through it at my own pace. After completing the first half of the course, I decided to rebuild my portfolio site in Next, and since I was already making progress, I thought, “Why not add a blog?”. It’s been a bit of a slow journey, but I’m gaining momentum and learning so much along the way. For me, building something on my own outside of a course helps me understand concepts much more deeply.

## Some Technical Challenges on the Portfolio Project

I won't get too indepth here, because it's not the most interesting code of all time, but you can check out the code for this site here: [github.com/JChase2/portfolio-v3](https://github.com/Jchase2/portfolio-v3)

Some of the trickier aspects I've run into involved how I wanted to structure the blog, if I wanted to go with a static site generator or some pre-built open source blogging
platform, and how to get the routing right for some of my old projects in the public directory. I use Obsidian, which is a markdown based note taking app. I've been running a script on this server that generates a site based on the Obsidian markdown files and I've got that published at [notes.jamesdchase.com](https://notes.jamesdchase.com), so I figured it'd be best to implement my own blog with markdown and maybe port the obsidian notes inside of the next app at some point in the future as an alternative to the script.

Currently for the blog I'm using remark and remark-html to convert the markdown into html. I'm also using the tailwind prose plugin instead of a dedicated stylesheet for the
html. That way I don't really have to extend or reimplement the sites style for the blog. I also had to rewrite parts of the header to play well with the blog. At any rate, I'm pretty happy with how it has turned out so far. Won't be surprised if I get the itch to add more features down the line.

## Job Hunting

For the past few months, I’ve been working part-time as a tile contractor, which has been a good experience, but I’m eager to get back into tech. I know the job hunt can be tough, but I’m committed to continuing my learning and staying engaged with , even if it's just for the love of the game. I've been coding for over 10 years, and it's something I truly enjoy, so even if I don’t return to full-time development right away, I’ll keep at it.

While I'm exploring job opportunities in development, I’m also considering IT roles, as I have strong Linux and general IT experience — though only a bit in a company setting. I’m also thinking about programs like mthree, and while it may require relocating, it could be worth it. Additionally, with my recent AWS Certified Cloud Practitioner certification, I'm thinking about expanding my cloud knowledge. There may be opportunities there that align with my skills. I'll probably keep my job search journey updated on this blog as well.

Regardless of where I end up, I'm staying positive and keeping an open mind while trying to stay positive!
