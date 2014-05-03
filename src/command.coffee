greet = require("../lib")
name  = process.argv[2]
parseArgs = require('minimist')

# parameters 
pars = parseArgs(process.argv)

module.exports = () ->
  console.log(greet(name,pars.drunk))
