var fs = require('fs')

var ddoc = module.exports = { 'views':{} }
fs.readdirSync(__dirname + '/views').forEach(function(file) {
  var match = file.match(/^(.+)\.js$/)
    , mod = match && match[1]

  if(mod)
    ddoc.views[mod] = require('./views/' + file)
})