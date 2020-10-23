var uncss = require('uncss')
var glob = require('glob')
var fs = require('fs')

var sourceStylesheetLocation = 'css/'
var stylesheetLocation = '_site/css/'
var stylesheetName = 'dojekyll.min.css'

var jekyllUncss = function() {
  var css = fs.readFileSync(stylesheetLocation + stylesheetName, 'utf8')

  glob('_site/**/*.html', function(err, files) {
    if (err) {
      console.log(err)
    }

    uncss(files, {
      raw: css,
      ignore       : ['@import url("https://fonts.googleapis.com/css2?family=Anton&family=Source+Sans+Pro&display=swap");'],
      ignoreSheets:[/\/css\//]
    }, function(err, output) {
      if (err) {
        console.log(err)
      }

      fs.writeFileSync(sourceStylesheetLocation + 'un.' + stylesheetName, output)
    })
  })
}

jekyllUncss()