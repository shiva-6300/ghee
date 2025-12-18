pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/shiva-6300/ghee.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                if exist C:\\deploy (
                    rmdir /S /Q C:\\deploy
                )
                mkdir C:\\deploy
                xcopy build C:\\deploy /E /I /Y
                '''
            }
        }
    }
}
