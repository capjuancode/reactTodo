var nconf = require('nconf');
var path = require('path');

if (process.env.NODE_ENV == null ) {
  throw new Error('process.env.NODE_ENV not set. Set it before running the build');
}

nconf
.argv()
.env()
.file('app', path.join(__dirname, process.env.NODE_ENV + '/' + 'app.json'))
.file('app-base', path.join(__dirname, 'app.json'))
.file('template', path.join(__dirname, process.env.NODE_ENV + '/' + 'template.json'))
.file('template-base', path.join(__dirname, 'template.json'));

module.exports = nconf;
