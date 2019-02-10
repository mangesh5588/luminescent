module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: "./"
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "app/css/main.css": "src/less/main.less",
          "app/css/cust.css": "src/less/cust.less"
        }
      },
      watch: {
        files: "*.less",
        tasks: ["less"]
      }
    },
    watch: {
      styles: {
        options: {
          livereload: true,
          spawn: false,
          event: ["added", "deleted", "changed"]
        },
        files: ["**/*.less"],
        tasks: ["less"]
      }
    },
    autoprefixer: {
      development: {
        browsers: ["last 2 version", "ie 9"],
        expand: true,
        flatten: true,
        src: "app/css/*.css",
        dest: "app/css"
      }
    },
    cssmin: {
      target: {
        src: ["app/css/main.css"],
        dest: "app/css/main.min.css"
      }
    },
    // uglify: {
    //   my_target: {
    //     files: {
    //       'app/js/output.min.js': ['app/src/js/ajax.js']
    //     }
    //   }
    // }
    // uglify: {
    //   build: {
    //     src: ["src/js/*.js"],
    //     dest: "app/js/ajax.min.js"
    //   }
    // }
    uglify: {
      dist: {
        files: {
          'app/js/ajax.min.js': 'src/js/ajax.js',
          'app/js/formValidatiom.min.js': 'src/js/formValidatiom.js'
        }, watch: {
          files: ['src/js/*.js'],
          tasks: ['uglify']
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.registerTask("default", ["connect:server", "watch"]);
  //grunt.registerTask("default", ["uglify"]);
  //grunt.registerTask("default", ["cssmin"]);

};
