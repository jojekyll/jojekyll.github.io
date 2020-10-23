module.exports = {
    plugins: [
        postcss([ require('postcss-uncss') 
        {
            html: ['index.html', 'about.html', 'team/*.html'],
            ignore: ['.fade']
        }
        ])

    ]
  };
