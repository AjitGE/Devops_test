@Library('SharedLibrary') _

pipeline {
    agent { label 'Builder' }
    
    ///environment {
        //APPLICATION_NAME = ""
        //APPLICATION_VERSION = ""
        //GROUP_ID = "" 
        //SCM_URL = ""
        //NOTIFYUSERS = ''
        //NEWRELIC_APP_ID = ""
        //SLACK_CHANNEL = ''
        //MESSAGE_DETAILS = "BUILD DETAILS: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${BUILD_URL} "
        //JOB_CAUSES = edtUtil.getCauses()
        //SONARQUBE_API_KEY = credentials('SonarQubeAPIKey')
        //NEWRELIC_API_KEY = credentials('NewRelicAPIKey')
        //DYNATRACE_API_KEY = credentials('DynatraceAPIKey')
        //SLACK_TOKEN = credentials('SlackToken')
        //NEXUS_ID = credentials('Nexus3upload')
        //GIT = credentials('407ad40a-dfa6-442a-b50f-cac690049da7')
    //}

    tools {
        maven 'Maven339'
    }

    options {
        timestamps()
        timeout(time: 1, unit: 'HOURS')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
    }

    stages {
        stage ('Integration Tests') {
            agent { label 'dockerinside' }
            steps {
                echo "*****Build*****"
                script {
                    //load the .settings.xml to build with nexus 3 dependencies
                    //loadSettingsXml("$NEXUS_ID_USR","$NEXUS_ID_PSW")
                    //APPLICATION_VERSION = APPLICATION_VERSION.replace("-SNAPSHOT", "-${env.BRANCH_NAME}-${env.BUILD_NUMBER}")
                    
                    echo "Launch Standalone Chrome Container"
                    sh "docker run -d --rm -p 48410:4444 --name=\"docker_standalone_ly-apt_chrome\" -v /dev/shm:/dev/shm nexusread.aa.com:18445/selenium/standalone-chrome-debug:3.14.0"   

                    echo "******************** Building Maven Project ******************"
                    sh "cd CucumberCraft && mvn package"
                }
           step([$class: 'CucumberReportPublisher', jsonReportDirectory: 'CucumberCraft/target/cucumber-report/Report', fileIncludePattern: '**/*.json'])
           cucumberSendSlack:a channel: 'apttesting', json: 'target/test-results.json
            }
            
            
            post{
                always{
                   //deleteDir()
                    sh "docker stop docker_standalone_ly-apt_chrome"
                    publishHTML([allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: false, 
                                reportDir: 'CucumberCraft/Results/', 
                                reportFiles: '**/report.html', 
                                reportName: 'Test Report', 
                                reportTitles: ''])
                                cucumber fileIncludePattern: '**/*.json',
                                jsonReportDirectory: 'CucumberCraft/target/cucumber-report/Report',
                                parallelTesting: true
                    emailext attachLog: true,
                    attachmentsPattern: 'CucumberCraft/Results/*.zip',
                    body:''' ${JELLY_SCRIPT,template="html"}''', 
                    compressLog: true,
                    mimeType: 'text/html', 
                    replyTo: 'ajit.yadav@aa.com',
                    subject: '$PROJECT_NAME-Build#$BUILD_NUMBER- $BUILD_STATUS', 
                    to: 'ajit.yadav@aa.com'
                    
                    
                }
            }
        }
    }
    post {
        always {
            deleteDir()
            /*script {
                notifyMe {
                    mode="slackAndEmail"
                    emailTo=this.NOTIFYUSERS
                    subj="BUILD REPORT FOR " + this.APPLICATION_NAME
                    slackChannel=this.SLACK_CHANNEL
                    Message=this.MESSAGE_DETAILS + this.JOB_CAUSES
                    statusColor=""
                    token=this.SLACK_TOKEN
                    extendedEmail='false'
                }
            }*/
        }
    }
}
