const roster = require('./roster')

const sidebar = [
  {
    title: 'Home',
    children: [
      ['/', 'Welcome'],
      ['/about', 'About'],
      ['/contributing', 'Contributing']
    ]
  },
  {
    title: 'Roster',
    children: roster
  }
]

// :: ---

module.exports = {
  title: 'Freedom Wall',
  description: 'A live document of attendees to our workshops.',
  themeConfig: {
    sidebar,
    lastUpdated: true,
    repo: 'richardneililagan/git-freedom-wall',
    repoLabel: 'Github',
    smoothScrolling: true
  }
}
