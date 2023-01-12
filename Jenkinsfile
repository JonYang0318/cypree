pipeline{
    agent any

    parameters
    {
        string(name: 'SPEC',defaultValue:'cypress/e2e/**/**',desciprtion:'nothing')
        choice(name: 'BROWSER',choices['chrome','edeg'],desciprtion:'noting')

    }

    options
    {
        ansiColor('xterm')
    }

    stages
    {
        stage('building')
        {
            steps
            {
                echo'建置'
            }
         }
            
    
    
        stage('testing')
    {
            steps
        {
            bat 'npn i'
            bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
        }
    }
        
    
       
    
    post{
        always
        {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypresss/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
       }   
}
