module.exports = {
  base: "/Blogs/",
  title: "JulCyan",
  description: "Full Stack Developer' Blogs",
  themeConfig: {
    nav: [
      {
        text: "Web",
        items: [
          { text: '基础', link: "/web/basics/html/" },
          { text: 'Vue', link: "/web/vue/" },
          { text: 'Webpack', link: "/web/webpack/" },
          { text: 'Node.js', link: "/web/node/" }
        ]
      },
      { text: "Java", link: "/java/" },
      { text: "其他", link: "/others/" }
    ],
    sidebar: {
      "/web/basics/": [
        {
          title: "HTML",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/html/" }
          ]
        },
        {
          title: "CSS",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/css/" },
            { title: "C3", path: "/web/basics/css/High" },
          ]
        },
        {
          title: "JavaScript",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/js/" }
          ]
        },
        {
          title: "JQuery",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/jq/" },
            { title: "Bootstrap", path: "/web/basics/jq/Bootstrap" },
          ]
        },
        {
          title: "MarkDown",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/markdown/" }
          ]
        },
        {
          title: "Git",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/basics/git/" }
          ]
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
            { title: "开发问题", path: "/web/vue/Config" },
          ]
        },
      ],
      "/web/webpack/": [
        {
          title: "Webpack",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/webpack/" }
          ]
        },
      ],
      "/web/node/": [
        {
          title: "Node.js",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/node/" }
          ]
        },
      ]
    }
  },
  port: 8099,
  // markdown
  markdown: {
    lineNumbers: true
  },
  evergreen: true
};
