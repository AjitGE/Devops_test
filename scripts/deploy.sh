#!/bin/sh

if [ $1 = ci ]
then
    api_endpoint="https://api.system.testepaas.qcorpaa.aa.com"
    pcf_space="APT-TEST"
    manifest_name="manifest-ci.yml"
    npm_command="build-ci"
fi
if [ $1 = sa ]
then
    api_endpoint="https://api.system.sepaas.aa.com"
    pcf_space="APT-QA"
    manifest_name="manifest-sa.yml"
    npm_command="build-sa"
fi

if [ $1 = st ]
then
    api_endpoint="https://api.system.sepaas.aa.com"
    pcf_space="APT-stage"
    manifest_name="manifest-st.yml"
    npm_command="build-stg"
fi

if [ $1 = prod ]
then
    api_endpoint="https://api.system.ppepaas.aa.com"
    pcf_space="APT-PROD"
    manifest_name="manifest-prod.yml"
    npm_command="build-prod"
fi



echo "**********************************************************"
echo "***************** Deploying Backend **********************"
echo "**********************************************************"
cd apt-services &&

mvn package
echo "$1"
echo "$2"
echo "$3"
cf login -a $api_endpoint -u $2 -p $3 -o Loyalty -s $pcf_space &&
cf push -f $manifest_name &&
echo "**********************************************************" &&
echo "***************** Deploying UI ***************************" &&
echo "**********************************************************" &&
# cd ui/ &&
# npm install @angular/cli@1.6.5 &&
# npm install &&
# npm run $npm_command &&
# cf login -a $api_endpoint -u $2 -p $3 -o Loyalty -s $pcf_space &&
# cf push -f manifests/$manifest_name
