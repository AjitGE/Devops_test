pipeline {
    agent any
    stages {
        stage ('Integration Tests') {
            
            steps {
                echo "*****Build*****"
                script {
                   
                    
                    //echo "Launch Standalone Chrome Container"
                    //sh "docker run -d --rm -p 48410:4444 --name=\"docker_standalone_ly-apt_chrome\" -v /dev/shm:/dev/shm //nexusread.aa.com:18445/selenium/standalone-chrome-debug:3.14.0"   

                    echo "******************** Building Maven Project ******************"
                    withMaven(jdk: 'Java', maven: 'Maven', mavenLocalRepo: 'C:/Users/Ajit/.m2/repository') {
               echo "*********************Runing maven test command***********************"   
                    bat "cd CucumberCraft && mvn package"
}
                }
            }
			}
			}
            
            
            post{
                always{
                   //deleteDir()
                    //sh "docker stop docker_standalone_ly-apt_chrome"
                    publishHTML([allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: false, 
                                reportDir: 'CucumberCraft/Results/', 
                                reportFiles: '**/report.html', 
                                reportName: 'Test Report', 
                                reportTitles: ''])
                  cucumber fileIncludePattern: '**/*.json',
                           jsonReportDirectory: 'CucumberCraft/target/cucumber-report/Report'
			step([$class: 'CucumberReportPublisher', jsonReportDirectory: 'CucumberCraft/target/cucumber-report/Report', 
			      fileIncludePattern: '*.json'])
			cucumberSlackSend channel: 'apttesting',
				json: 'CucumberCraft/target/cucumber-report/Report/cucumber.json'
 
                    emailext attachLog: true,
                              attachmentsPattern: 'CucumberCraft/Results/*.zip',
                              body:''' ${JELLY_SCRIPT,template="html"}''', 
                              compressLog: true,
                              mimeType: 'text/html', 
                              replyTo: 'ajit.yadav@aa.com',
                              subject: '$PROJECT_NAME-Build#$BUILD_NUMBER- $BUILD_STATUS', 
                              to: 'ajit.yadav@aa.com' // ike.ahmed@aa.com, Jagadeesh.gunipati@aa.com, Rajesh.n@aa.com, Prabuddha.swayamisiddha@aa.com, Neelima.baswa@aa.com'
                    }
            }
        }


