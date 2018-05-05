#!/usr/bin/env node

let waterview = require('../lib/index.js');
let args = process.argv;

if(!args[2])
  throw "ERROR: Missing command with Waterview!"

if(args[2] === "print")
  waterview.print(args.splice(0,2));

//waterview.print("Calling from the command line argument");
