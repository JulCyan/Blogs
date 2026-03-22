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
      "/web/basics/": [
        {
          title: "HTML",
          collapsable: true,
          children: [{ title: "Basics", path: "/web/basics/html/" }]
        },
        {
          title: "CSS",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/css/" },
            { title: "C3", path: "/web/basics/css/High" }
          ]
        },
        {
          title: "JavaScript",
          collapsable: true,
          children: [{ title: "Basics", path: "/web/basics/js/" }]
        },
        {
          title: "JQuery",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/jq/" },
            { title: "Bootstrap", path: "/web/basics/jq/Bootstrap" }
          ]
        },
        {
          title: "MarkDown",
          collapsable: true,
          children: [{ title: "Basics", path: "/web/basics/markdown/" }]
        },
        {
          title: "Git",
          collapsable: true,
          children: [{ title: "Basics", path: "/web/basics/git/" }]
        }
      ],
      "/web/vue/": [
        {
          title: "Vue",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/vue/" },
            { title: "VueRouter", path: "/web/vue/VueRouter" },
            { title: "Element", path: "/web/vue/Element" },
            { title: "VueCLI", path: "/web/vue/VueCLI" },
            { title: "开发问题", path: "/web/vue/Config" }
          ]
        }
      ],
      "/web/webpack/": [
        {
          title: "Webpack",
          collapsable: true,
          children: [{ title: "Basics", path: "/web/webpack/" }]
        }
      ],
      "/web/node/": [
        {
          title: "Node.js",
          collapsable: true,
          children: [{ title: "Basics", path: "/web/node/" }]
        }
      ],
      "/web/": [
        {
          title: "Frontend",
          collapsable: true,
          children: [{ title: "Overview", path: "/web/" }]
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
