module.exports = {
  base: "/Blogs/",
  title: "JulCyan",
  description: "AI-first learning notes and developer blogs",
  themeConfig: {
    nav: [
      { text: "AI", link: "/ai/" },
      {
        text: "Develop",
        items: [
          { text: "Frontend", link: "/web/" },
          { text: "Backend", link: "/backend/" },
          { text: "Ops", link: "/ops/linux" }
        ]
      },
      { text: "Article", link: "/article/technologySelection" },
      { text: "Repositories", link: "/repositories/" }
    ],
    sidebar: {
      "/ai/": [
        {
          title: "AI",
          collapsable: true,
          children: [
            {
              title: "Overview",
              path: "/ai/"
            },
            {
              title: "OpenClaw",
              path: "/ai/openclaw"
            },
            {
              title: "Models",
              path: "/ai/models"
            },
            {
              title: "Telegram",
              path: "/ai/telegram"
            }
          ]
        }
      ],
      "/web/": [
        {
          title: "Frontend",
          collapsable: true,
          children: [
            { title: "HTML", path: "/web/basics/html/" },
            { title: "CSS", path: "/web/basics/css/" },
            { title: "C3", path: "/web/basics/css/High" },
            { title: "JS", path: "/web/basics/js/" },
            { title: "JQuery", path: "/web/basics/jq/" },
            { title: "Bootstrap", path: "/web/basics/jq/Bootstrap" },
            { title: "MarkDown", path: "/web/basics/markdown/" },
            { title: "Git", path: "/web/basics/git/" },
            { title: "Vue", path: "/web/vue/" },
            { title: "Vue Router", path: "/web/vue/VueRouter" },
            { title: "Element", path: "/web/vue/Element" },
            { title: "Vue CLI", path: "/web/vue/VueCLI" },
            { title: "Vue 开发问题", path: "/web/vue/Config" },
            { title: "Webpack", path: "/web/webpack/" },
            { title: "Node.js", path: "/web/node/" }
          ]
        }
      ],
      "/backend/": [
        {
          title: "Backend",
          collapsable: true,
          children: [
            {
              title: "Go",
              path: "/backend/"
            },
            {
              title: "Java",
              path: "/backend/Java"
            },
            {
              title: "SQL",
              path: "/backend/SQL"
            }
          ]
        }
      ],
      "/ops/": [
        {
          title: "Ops",
          collapsable: true,
          children: [
            {
              title: "Linux",
              path: "/ops/linux"
            },
            {
              title: "Docker",
              path: "/ops/docker"
            }
          ]
        }
      ],
      "/article/": [
        {
          title: "Article",
          collapsable: true,
          children: [
            {
              title: "移动端技术选型",
              path: "/article/technologySelection"
            },
            {
              title: "移动端适配",
              path: "/article/flexibleUIFramewrok"
            }
          ]
        }
      ]
    }
  },
  port: 8099,
  markdown: {
    lineNumbers: true
  },
  evergreen: true
};
