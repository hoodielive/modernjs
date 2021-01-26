const secret = require('.secretdb')

module_exports = {
  DB_URI: 'mongodb://lucid-developer:${secret}@ds231199.mlab.com:31199/ng_project_setup'
  SECRET: secret
}
