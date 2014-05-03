#!/usr/bin/env node

var greet = require("../lib"),
    name  = process.argv[2],
    parseArgs = require('minimist');

// parameters 
var pars = parseArgs(process.argv)

console.log(greet(name,pars.drunk));
