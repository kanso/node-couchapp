#!/bin/bash
cd test/reupholster
kanso deletedb "$1"
kanso push "$1"
node test/simple.js "$1/_design/reupholster-sample/_rewrite/"
cd ../jhs_style
kanso deletedb "$1"
kanso push "$1"