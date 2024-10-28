pipeline {
    agent any
    tools {
        maven 'maven_3_8_1'
    }
    stages {
        stage('Build backend') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Mellowzhong/testingdasjiod']])
                sh 'docker build -t mellow03/backend:latest .'
                withCredentials([string(credentialsId: 'dhpswid', variable: 'dhpsw')]) {
                    sh 'docker login -u mellow03 -p $dhpsw'  // Cambiado a $dhpsw
                }
                sh 'docker push mellow03/backend:latest'
            }
        }
    }
}