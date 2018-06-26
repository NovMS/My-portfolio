module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
		
	grunt.initConfig({
		
		less: {
			style: {
				files: {
					"build/css/style.css": "less/style.less"
				}
			}
		},
		
		postcss: {
			style: {
				options: {
					processors: [
						require("autoprefixer")({browsers: [
							"last 1 version",
							"last 2 Chrome versions",
							"last 2 Firefox versions",
							"last 2 Opera versions",
							"last 2 Edge versions"
						]}),
						require("css-mqpacker")({
							sort: true
						})
					]
				},
				src: "build/css/*.css"
			}
		},
		
		watch: {
			html: {
				files: ["*.html"],
				tasks: ["copy:html"]
			},
			style: {
				files: ["less/**/*.less"],
				tasks: ["less", "postcss", "csso"]
			},
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat']
			}
		},
		
		browserSync: {
			server: {
				bsFiles: {
					src: ["build/*.html", "build/css/*.css", "build/js/*.js"]
				},
				options: {
					server: "build",
					watchTask: true
				}
			}
		},
		
		csso: {
			style: {
				options: {
					report: "gzip"
				},
				files: {
					"build/css/style.min.css": ["build/css/style.css"]
				}
			}
		},
		
		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["build/img/**/*.{png,jpg,gif}"]
				}]
			}
		},
		
		svgstore: {
			options: {
				svg: {
					style: "display: none",
					xmlns: "http://www.w3.org/2000/svg",
					'xmlns:xlink': "http://www.w3.org/1999/xlink"
				}
			},
			symbols: {
				files: {
					"build/img/symbols.svg": ["img/icons/*.svg"]
				}
			}
		},
		
		svgmin: {
			symbols: {
				files: [{
					expand: true,
					src: ["build/img/icons/*.svg"]
				}]
			}
		},
		
		copy: {
			build: {
				files: [{
					expand: true,
					src: [
						"fonts/**/*.{woff,woff2}",
						"img/**",
						"*.html",
						"css/*.css",
						"js/libs/*.js"
					],
					dest: "build"
				}]
			},
			html: {
				files: [{
					expand: true,
					src: ["*.html"],
					dest: "build"
				}]
			}
		},
		
		clean: {
			build: ["build"]
		},
	 
		concat: {  //описываем работу плагина конкатенации
			dist: {
				src: ['js/*.js'],  // какие файлы конкатенировать
				dest: 'build/js/build.js'  // куда класть файл, который получиться после процесса конкатенации 
			}
		},

		uglify: {  //описываем работу плагина минификации js - uglify.
			options: {
				stripBanners: true
			},

			build: {
				src: 'build/js/build.js',  // какой файл минифицировать
				dest: 'build/js/build.js' // куда класть файл, который получиться после процесса минификации
			}
		},
		removelogging: { //описываем работу плагина удаления логов
			dist: {
				src: "build/js/build.js", // файл который надо отчистить от console.log
				dest: "build/js/build.js" // выходной файл, который получим после очистки
			}
		}
	}),
		
	grunt.registerTask("serve", ["browserSync", "watch"]);
	grunt.registerTask("symbols", ["svgmin", "svgstore"]);
	grunt.registerTask("build", [
		"clean",
		"copy",
		"less",
		"postcss",
		"csso",
		"symbols",
		"imagemin",
		"concat"
	]);
	
};