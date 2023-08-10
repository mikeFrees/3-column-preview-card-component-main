module.exports = function(grunt) {
    grunt.initConfig({
        autoprefixer: {
            compile: {
              files: {
                'assets/css/style.css': 'assets/css/style.css'
              },
            },
          },
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
};