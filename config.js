const port = process.env.PORT || 8080;
const dbusername = 'smartsupport';
const dbpassword = 'passwordSupport'

module.exports = {
  'port': port,
  'secret': '$upp0rt$m@rt@11y',
  'database': `mongodb://${dbusername}:${dbpassword}@ds139761.mlab.com:39761/smartsupport`
}
