#!/bin/sh

echo "**********************************************************" &&
echo "***************** Running UI Build ***********************" &&
echo "**********************************************************" &&

cd apt-ui/ &&
npm install @angular/cli@6.1.2 &&
npm install &&
# To AutoFix run npm run lint -- --fix
npm run lint &&

cd .. &&


echo "**********************************************************" &&
echo "***************** Running Java Builds ********************" &&
echo "**********************************************************" &&
cd apt-services &&
mvn package
