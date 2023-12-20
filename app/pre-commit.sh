#!/bin/sh

cd server/certificate
#rm -i !(*.gitkeep)
find . -type f -not -name '*.gitkeep' -delete
exit