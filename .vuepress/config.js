module.exports = {
  title: 'myopenHAB',
  description: 'myopenHAB is an instance of the openHAB Cloud service, which is hosted by the openHAB Foundation e.V.',
  dest: 'vuepress',
  host: 'localhost',
  ga: 'UA-89041046-2',
  head: [
    ['link', { rel: 'stylesheet', href: `/fonts/fonts.css` }],
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'shortcut icon', href: `/favicon.ico` }],
    ['link', { rel: 'apple-touch-icon', href: `/apple-icon.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://www.openhab.org/og-image.png' }],
    ['meta', { property: 'og:title', content: 'openHAB Foundation e.V.' }],
    ['meta', { property: 'og:description', content: 'myopenHAB is an instance of the openHAB Cloud service, which is hosted by the openHAB Foundation e.V.' }],
  ],
  serviceWorker: false,
  themeConfig: {
    logo: `/logo.png`,
    editLinks: false,
    search: false,
    nav: [
      { text: 'Register | Login ➜',
        link: 'https://myopenhab.org/login'
      },
      {
        text: 'openHAB.org',
        link: 'https://www.openhab.org/'
      }
    ]
  }
}
