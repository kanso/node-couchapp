#!/bin/bash
cd test/reupholster
kanso push "$1"
node test/simple.js "$1/_design/reupholster-sample/_rewrite/"

