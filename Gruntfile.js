module.exports = function(grunt) {
  'use strict';

  var sourceFiles = [
    'github-user.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sync: {
      all: {
        options: {
          sync: ['author', 'name', 'version', 'main',
            'private', 'license', 'keywords', 'homepage'],
        }
      }
    },

    'gh-pages': {
      options: {
        base: '.'
      },
      src: [
        'index.html',
        'README.md',
        'github-user.js'
      ]
    }
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['nice-package', 'deps-ok', 'sync']);
};
