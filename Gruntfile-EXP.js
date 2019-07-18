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
        concat: {
            js: {
                files: {
                    'dist/js/appcat.js': [
                        //'node_modules/jquery/dist/jquery.js',
                        'node_modules/popper.js/dist/umd/popper.js',
                        'node_modules/bootstrap/dist/bootstrap.js',
                        //'assets/plugins/appear.js',
                        'node_modules/jquery-easing/dist/jquery.easing.1.3.umd.js',
                        'node_modules/retina.js/src/retina.js',
                        'node_modules/jquery-countdown/dist/jquery.countdown.js',
                        'node_modules/imagesloaded/imagesloaded.pkgd.js',
                        'node_modules/isotope-layout/dist/isotope.pkgd.js',
                        'node_modules/jarallax/dist/jarallax.js',
                        'node_modules/jarallax/dist/jarallax-video.js',
                        'node_modules/jarallax/dist/jarallax-element.js',                        
                        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                        'node_modules/owl.carousel/dist/owl.carousel.js'
                        //'assets/js/functions.js'                        
                    ],
                },
            },
        },         
        uglify: {
            options: {  
                compress: true  
            },            
            dist: {
                files: {
                    'dist/js/app.min.js': [
                    'dist/js/appcat.js'
                    ]
                }
            }
        }                       
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-concat');    
    grunt.loadNpmTasks('grunt-contrib-uglify');    

    grunt.registerTask('default', ['sass','cssmin','concat','uglify']);

};