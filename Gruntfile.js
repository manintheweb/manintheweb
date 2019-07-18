module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'assets/css/app.css': 'assets/css/scss/app.scss'
                }
            }
        },       
        cssmin: {
            dist: {
                files: {
                    'dist/css/app.min.css': ['assets/css/app.css']
                }
            }
        },         
        uglify: {
            options: {  
                compress: true  
            },            
            dist: {
                files: {
                    'dist/js/app.min.js': [
                    'assets/js/functions.js'
                    ]
                }
            }
        }                             
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');       
    grunt.loadNpmTasks('grunt-contrib-uglify');    

    grunt.registerTask('default', ['sass','cssmin','uglify']);

};