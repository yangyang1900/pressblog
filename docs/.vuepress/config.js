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
          { text: 'html', link: '/html' },
          { text: 'css', link: '/css' }
        ]
      },
      { text: 'JavaScript', link: '/JavaScript' }
    ]
  }, 
}