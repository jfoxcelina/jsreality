module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            files: ['**'],
            less: {
                    files: ['./less/*.less'],
                    tasks: ['less:dev']
            }
        },
        less: {
            dev: {
            options: {
                paths: ["./less/"]
            },
            files: {
                "./css/app.css": "./less/*.less"
            }
        }

        },
        express: {
            all: {
                options: {
                    port: 3001,
                    hostname: 'localhost',
                    bases: ['./'],
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('server', ['express', 'less', 'watch']);
};
