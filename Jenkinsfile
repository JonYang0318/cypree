pipeline{
    agent any

    parameters{
        string(name:'SPEC',defaultValue:'cypress/e2e/**/**',desciprtion: 'nothing')
        choice(name: 'BROWSER',choices['chrome','edeg'],desciprtion:'noting')

    }

    options{
        ansiColor('xterm')
    }

    stages{
        steps{
        stage('建置'){
        echo'建製應用'
        }
        }
    }
    stage('測試'){
        steps{
            bat 'npn i'
            bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'

        }
    }
    stages{
        steps{
         stage('部屬'){
         echo'建製html'
        }
        }
       
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypresss/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
       
}