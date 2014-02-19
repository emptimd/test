// Generated on 2014-02-19 using generator-wp 0.0.0
'use strict';

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // configurable paths
        yeoman: {
            app: 'app',
            normalize: 'bower_components/normalize-css/'
        },

        banner: '/*\nTheme Name: test\n' +
        'Author: <%= pkg.theme.author %>\n'+
        'Description: <%= pkg.description %>\n'+
        'Version: <%= pkg.version %>\n */',

        watch: {
            less: {
                files: ['<%= yeoman.app %>/less/**/*.less'],
                tasks: ['refresh_css'],
                options: {
                    debounceDelay: 250,
                    spawn: false
                }
            },
            js: {
                files: ['<%= concat.js.src %>'],
                tasks: ['refresh_js'],
                options: {
                    debounceDelay: 250,
                    spawn: false
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '<%= yeoman.app %>/less/{,*/}*.less',
                    '<%= yeoman.app %>/js/{,*/}*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9003,
                livereload: 1139,//35729 or 1137
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= yeoman.app %>',
                        '<%= yeoman.app %>/css'
                    ]
                }
            }
        },
        less: {
            dev: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "<%= yeoman.app %>/css/main.css": "<%= yeoman.app %>/less/main.less"
                }
            }
        },

        cssmin: {
            dist: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'wp-content/themes/test/style.css': [ "<%= yeoman.app %>/css/main.css" ]
                }
            }
        },


        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: '<%= yeoman.app %>/css/main.css',
                dest: '<%= yeoman.app %>/css/'
            }
        },
        concat: {
            js: {
                src: [
                '<%= yeoman.app %>/js/_functions.js',
                '<%= yeoman.app %>/js/main.js'
                ],
                dest: '<%= yeoman.app %>/js/common.js'
            }
        },

        uglify: {
            build: {
                src: '<%= yeoman.app %>/js/common.js',
                dest: '<%= yeoman.app %>/js/common.js'
            }
        },

        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'wp-content/themes/test/img/',
                        src: ['**/*.png'],
                        dest: 'wp-content/themes/test/img/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'wp-content/themes/test/img/',
                        src: ['**/*.jpg'],
                        dest: 'wp-content/themes/test/img/',
                        ext: '.jpg'
                    }
                ]
            }
        },

        removelogging: {
            dist: {
                src: "<%= yeoman.app %>/js/common.js" // Each file will be overwritten with the output!
            }
        },

        webshot: {
            // example
            homepage: {
                options: {
                    // url, file or html
                    siteType: 'url',
                    site: 'http://localhost:<%= connect.options.port %>/index.html',
                    savePath: 'wp-content/themes/test/screenshot.png',
                    windowSize: {
                        width: 1024,
                        height: 768
                    },
                    shotSize: {
                        width: 1024,//600 x 450 or 300 x 225
                        height: 768
                    }
                }
            }
        },

        image_resize: {
            resize: {
              options: {
                width: 880,
                height: 660,
                crop: true
              },
              files: {
                'wp-content/themes/test/screenshot.png': 'wp-content/themes/test/screenshot.png'
              }
            }
          },

        sprite:{
            all: {
                src: '<%= yeoman.app %>/img/sprites/footer/*.png',
                destImg: '<%= yeoman.app %>/img/sprite_footer.png',
                destCSS: '<%= yeoman.app %>/less/sprites/sprites.less',
                engine: 'pngsmith'
            }
        },

        newer: {
            options: {
            cache: 'cache'
            }
        }
    });

    grunt.registerTask('default', [], function () {
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks("grunt-remove-logging");
        grunt.loadNpmTasks('grunt-newer');

        grunt.task.run('concat', 'removelogging', 'uglify', 'less', 'autoprefixer');
    });

    grunt.registerTask('dev', [], function () {
        grunt.loadNpmTasks('grunt-webshot');
        // grunt.loadNpmTasks('grunt-image-resize');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-newer');

        grunt.task.run('connect', 'webshot'/*, 'image_resize'*/, 'watch');
    });


    grunt.registerTask('refresh_css', [
        'less',
        'autoprefixer'
        // 'cssmin'
        
    ]);
    grunt.registerTask('refresh_js', [
        'newer:concat:js',
        'uglify'
    ]);

    grunt.registerTask('images', [], function () {
        grunt.loadNpmTasks('grunt-contrib-imagemin');
        grunt.task.run('imagemin'/*, 'image_resize'*/);
    });

    grunt.registerTask('sprites', [], function () {
        grunt.loadNpmTasks('grunt-spritesmith');
        grunt.task.run('sprite');
    });

    grunt.registerTask('wp', [], function () {
        grunt.loadNpmTasks('grunt-image-resize');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.task.run('image_resize', 'cssmin');
    });
};
