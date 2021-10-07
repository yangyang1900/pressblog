module.exports = {
  title: "My Blog",
  description: "This is a blog.",
  base: '/pressblog/',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav: [
      {
        text: 'HTML/CSS',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'html', link: '/html/' },
          { text: 'css', link: '/css/' }
        ]
      },
      { text: 'JavaScript', link: '/JavaScript/' },
      { text: '数据结构与算法', link: '/Algorithms/JavaScript数据结构与算法-imooc新课程' }
    ],
    sidebar: 'auto',
  }, 
}

/*

const nav = require('./utils/nav.js')
const { webpackSidebar, vueAnalysisSidebar, vueNextAnalysisSidebar } = nav
module.exports = {
  title: '汪图南',
  description: '汪图南的个人博客',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/wangtunan/blog',
    repoLabel: 'Github',
    nav: [
      {
        text: '前端面试之道',
        link: '/interview/'
      },
      {
        text: '前端书籍',
        items: [
          {
            text: 'JavaScript书籍',
            items: [
              {
                text: '你不知道的JavaScript(上)',
                link: '/books/javascript/know-up'
              },
              {
                text: '你不知道的JavaScript(中下)',
                link: '/books/javascript/know-down'
              },
              {
                text: 'JavaScript高级程序设计',
                link: '/books/javascript/red-book'
              },
              {
                text: 'JavaScript数据结构和算法',
                link: '/books/javascript/algorithm'
              },
              {
                text: 'JavaScript设计模式与开发实践',
                link: '/designPattern/'
              },
              {
                text: '深入理解ES6',
                link: '/books/javascript/es6'
              }
            ]
          },
          {
            text: 'Git书籍',
            items: [
              {
                text: '精通Git',
                link: '/books/git/'
              }
            ]
          }
        ]
      },
      {
        text: 'Vue源码分析',
        link: '/vueAnalysis/introduction/'
      },
      {
        text: '自动化测试',
        items: [
          { text: 'Vue应用测试', link: '/test/vueTest' }
        ]
      },
      {
        text: '打包工具',
        items: [
          {
            text: 'Webpack',
            link: '/webpack/webpack/'
          },
          {
            text: 'Rollup',
            link: '/rollup/'
          }
        ]
      },
      {
        text: 'TypeScript',
        items: [
          {
            text: 'TypeScript基础',
            link: '/typescript/base'
          },
          {
            text: 'TypeScript类型挑战',
            link: '/typescript/challenge'
          }
        ]
      },
      {
        text: 'VuePress',
        link: '/vuepress/'
      }
    ],
    sidebar: {
      '/webpack/webpack/': [webpackSidebar],
      '/vueAnalysis/': vueAnalysisSidebar,
      '/vueNextAnalysis/': vueNextAnalysisSidebar
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@vuepress': '../images/vuepress',
        '@components': '../.vuepress/components'
      }
    }
  }
}

*/