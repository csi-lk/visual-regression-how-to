if (!process.env.HAPPO_API_KEY) require('dotenv').config()
const { RemoteBrowserTarget } = require('happo.io')
const happoPluginStorybook = require('happo-plugin-storybook')

const { HAPPO_API_KEY, HAPPO_API_SECRET } = process.env
const viewports = {
  desktop: '1024x768',
  mobile: '320x640',
}
const browsers = {
  desktop: ['firefox', 'chrome', 'internet explorer', 'edge', 'safari'],
  mobile: ['ios-safari'],
}
const targets = {}
Object.keys(browsers).forEach(browserType => {
  browsers[browserType].map(browser => {
    targets[browser] = new RemoteBrowserTarget(browser, {
      viewport: viewports[browserType],
    })
  })
})

module.exports = {
  apiKey: HAPPO_API_KEY,
  apiSecret: HAPPO_API_SECRET,
  targets,
  plugins: [happoPluginStorybook()],
}
