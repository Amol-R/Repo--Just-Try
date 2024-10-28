// pipeline {
//     agent any

//     tools {nodejs "nodejs21"}

//     stages {
//         stage('Dependencies') {
            
//             steps {
//                 sh 'npm i'
//             }
//         }
//         stage('e2e Tests') {
            
//             steps {
//                 sh 'npm run e2e'
//             }
//         }
//     }
// }


pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                `sh 'npm install'`
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run e2e'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying...'
        //         // Place deployment commands here
        //     }
        // }
    }
}
