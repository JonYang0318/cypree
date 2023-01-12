pipeline{
    agent any

    parameters
    {
        string(name: 'SPEC', defaultValue:'cypress/e2e/**/**',description:'nothing')
        choice(name: 'BROWSER',choices:['chrome','edge'],description:'noting')

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
            bat 'npm i'
            bat 'npx cypress run --browser ${BROWSER} --spec ${SPEC}'
        }
    }
    
        
    
       
    
       }   
}
