module.exports = {
  base: "/Blogs/",
  title: "JulCyan",
  description: "Full Stack Developer' Blogs",
  themeConfig: {
    nav: [
      {
        text: "Web",
        text: "Web",
        items: [
          { text: "HTML", link: "/web/html/Basics" },
          { text: "CSS", link: "/web/css/Basics" },
          { text: "JS", link: "/web/js/Basics" }
        ]
      },
      { text: "Java", link: "/java/" },
      { text: "其他", link: "/others/" }
    ],
    sidebar: {
      "/web/html/": [
        {
          title: "HTML",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/html/Basics" }
          ]
        }
      ],
      "/web/css/": [
        {
          title: "JavaScript",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/css/Basics" }
          ]
        }
      ],
      "/web/js/": [
        {
          title: "JavaScript",
          collapsable: true,
          children: [
            { title: "Basics", path: "/web/js/Basics" }
          ]
        }
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
