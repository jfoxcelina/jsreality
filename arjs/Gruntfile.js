module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      files: ['**'],
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
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('server', ['express', 'watch']);
};
