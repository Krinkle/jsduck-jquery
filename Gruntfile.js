module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),
		concat: {
			dist: {
				src: ['src/core.js', 'src/entries/*.js'],
				dest: 'dist/jsduck-jquery.js'
			}
		},
		jshint: {
			all: ['*.js', '{dist,src}/**/*.js']
		},
		watch: {
			files: ['<%= concat.dist %>', '<%= jshint.all %>', '.jshintrc'],
			tasks: ['test']
		}
	} );

	grunt.registerTask( 'build', ['concat'] );
	grunt.registerTask( 'test', ['build', 'jshint'] );
	grunt.registerTask( 'default', 'test' );
};
