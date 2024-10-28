pipeline {
    agent any
    tools {
        maven 'maven_3_8_1'
    }
    stages {
        stage('Build backend') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Mellowzhong/testingdasjiod']])
                sh 'cd Backend && docker build -t mellow03/backend:latest .'
                withCredentials([string(credentialsId: 'dhpswid', variable: 'dhpsw')]) {
                    sh 'docker login -u mellow03 -p $dhpsw'
                }
                sh 'docker push mellow03/backend:latest'
            }
        }
    }
}