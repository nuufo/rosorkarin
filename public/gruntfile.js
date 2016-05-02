module.exports = function(grunt) {
	//configure tasks

	  /*Man kan sätta up 2 enviroments 1 build 1 development, builden smäller ihop allting när jag är klar och skall lansera projectet. 
  Då skiriver jag grunt build i nodejs promten istället.
  Kör jag vanliga grunt commandet körs default sm jag ändrat om till min development task. 

	Så hur ser development task:sen ut? 
	Detta är när jag utvecklar men vill inte minifirea koden utan bara concatinera den
	Nedan ser du en build och en dev. 
  */



  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
    	build: {
    		src: 'src/js/*.js',
    		dest: 'js/script.min.js'
    	},
    	dev: {
    		options: {
    			//nedan följer ett par options man kunde sätta. Detta gör att jag inte minifierar koden  medans jag utvecklan. 
    			//beautify gör dessutom koden snyggare, LOL
    			beautify: true,
    			mangle: false,
    			compress: false,
    			preserveComments: 'all'
    		},
    		src: 'src/js/*.js',
    		dest: 'js/script.min.js'
    	}
    },
    sass: {
    	dev: {
    		options: {
    			//expanded = wont minified it, able to see issues if needed. 
    			outputStyle: 'expanded'
    		},
    		files: {
    			'css/styles.css' : 'src/scss/application.scss'
    		}
    	},
    	build: {
    		options: {
    			outputStyle: 'compressed'
    		},
    		files: {
    			'css/styles.css' : 'src/scss/application.scss'
    		}
    	}
    },
    /*Watch ligger och kollar ändringar. OM någonting ändras i files propertyn körs min uglify dev task. */
    watch: {
    	js: {
    		//when these files changes
    		files: ['src/js/*.js'],
    		//run this 
    		tasks: ['uglify:dev']
    	},
    	css: {
    		//when these files changes
    		files: ['src/scss/**/*.scss'],
    		//run this 
    		tasks: ['sass:dev']
    	}
    }
  });
  //load tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //register tasks

  grunt.registerTask('build', ['uglify:build', 'sass:build']);
  //default a.k.a min Development är ju den jag vill köra så ofta som möjligt. 
  grunt.registerTask('default', ['uglify:dev', 'sass:dev']);

};





