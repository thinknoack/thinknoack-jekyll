
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  concat: {
    options: {
      separator: ';'
    },
    dist: {
      src: [
      './src/js/rAF.js',
      './src/js/jquery-2x.min.js',
      './src/js/bootstrap.js',
      './src/js/util/**/*.js',
      './src/js/thinknoack/app.js'
      ],
      dest: './src/js/thinknoack-concat.js'
    }
  },
  less: {
    development: {
      options: {
        paths: ["css"],
        cleancss: true,
      },
      files: {
        "./dist/css/app.css": "./src/less/app.less",
      }
    },
  },
  uglify: {
    options: {
      beautify: true,
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
      files: {
        './dist/js/app.js': ['<%= concat.dist.dest %>']
      }
    }
  },

  clean: ["./dist", "./src/js/app.js"],

  watch: {
    files: ['./Gruntfile.js', './src/js/app.js'],
    less: {
      files: ['./src/less/*.less'],
      tasks: ['less'],
    },
  },
  copy: {
    main: {
      files: [
        {expand: true, flatten: false, cwd: './src/fonts/', src: ['**'], dest: './dist/fonts', filter: 'isFile'},
        {expand: true, flatten: true, src: ['./src/img/**'], dest: './dist/img', filter: 'isFile'},
      ],
    },
  },
});
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', [ 'clean', 'copy', 'concat', 'uglify', 'less', 'watch']);
};
