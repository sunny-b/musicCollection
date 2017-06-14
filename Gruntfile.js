module.exports = function(grunt) {
  grunt.initConfig({
    bower_concat: {
      all: {
        dest: "public/javascripts/vendor/all.js",
        dependencies: {
          "underscore": "jquery",
          "backbone": "underscore"
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          "public/javascripts/vendor/all.js": ["public/javascripts/vendor/all.js"]
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['bower_concat', 'uglify']);
};