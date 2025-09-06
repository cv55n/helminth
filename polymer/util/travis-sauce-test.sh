#!/usr/bin/env bash

set -x

node ./node_modules/.bin/polymer test --npm --module-resolution=node -s 'windows 10/microsoftedge@15' -s 'windows 10/microsoftedge@17' -s 'windows 8.1/internet explorer@11' -s 'macos 10.13/safari@11' -s 'macos 10.13/safari@12' -s 'macos 10.13/safari@13' -s 'Linux/chrome@41'