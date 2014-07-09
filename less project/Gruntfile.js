module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['src/js/jquery.js', 'src/js/intro.js', 'src/js/main.js', 'src/js/outro.js'],
                dest: 'dist/build.js',
            }
        },
        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "css/main.css": "less/main.less"
                }
            },
            prod: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    // target.css file: source.less file
                    "css/main_prod.css": "less/main.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less:dev'],
                options: {
                    nospawn: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/build.min.js': ['dist/build.js']
                }
            }
        },
        cssmin: {
            css: {
                src: 'combined.css',
                dest: 'combined.min.css'
            }
        },
        jshint: {
            myFiles: ['Gruntfile.js', 'js/*.js', 'zrq/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile', ['less:dev', 'jshint']);
    grunt.registerTask('build', ['less:prod', 'uglify', 'cssmin']);
    // grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};
