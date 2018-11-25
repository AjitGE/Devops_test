pipeline {
    agent any
    stages {
        stage ('Integration Tests') {
            
            steps {
                echo "*****Build*****"
                script {
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
                    publishHTML([allowMissing: false,
                                alwaysLinkToLastBuild: true,
                                keepAll: false, 
                                reportDir: 'CucumberCraft/Results/', 
                                reportFiles: '**/report.html', 
                                reportName: 'Test Report', 
                                reportTitles: ''])
                   step([$class: 'CucumberReportPublisher', 
			     jsonReportDirectory: 'CucumberCraft/target/cucumber-report/Report', 
			      fileIncludePattern: '*.json'])
			cucumberSlackSend channel: 'apttesting',
				json: 'CucumberCraft/target/cucumber-report/Report/cucumber.json'
 
                    emailext attachLog: true,
                              attachmentsPattern: 'CucumberCraft/Results/*.zip',
                              body:''' ${JELLY_SCRIPT,template="html"}''', 
                              compressLog: true,
                              mimeType: 'text/html', 
                              replyTo:'ajitsinghyadav6@gmail.com',
                              subject: '$PROJECT_NAME-Build#$BUILD_NUMBER- $BUILD_STATUS', 
                              to: 'ajitsinghyadav6@gmail.com'
                    }
            }
        }


