module.exports = function(grunt) {

    var buildNotes = grunt.option('buildNotes');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js']
        },

        titanium: {
            'dist': {
                options: {
                    platform: 'ios',
                    target: 'dist-adhoc',
                    iosVersion: '7.1',
                    deviceFamily: 'iphone',
                    ppUuid: '6d522ad4-1414-405d-bad5-00aa29cb6aba',
                    distributionName: 'Dotcms Services, LLC (9A4E22F7VB)',
                    outputDir: 'dist'
                }
            },
            'clean': {
                options: {
                    command: 'clean',
                    quiet: true
                }
            }
        },

        testflight: {
            options: {
                apiToken: 'a67ac5e5b81e1cc76da55fb630256dca_MjA4MDc4MzIwMTQtMDktMDMgMTA6MDY6MzYuMDc1MDU4',
                distributionLists: ['DotCMS iOS'],
                notes: buildNotes,
                notify: false,
                teamToken: '7f1b790e4331792b9f92203126a36175_NDI4NDI4MjAxNC0wOS0wMyAxMDoxNDo0NS4wMTQ3NDk',
            },
            iOS: {
                options: {
                    file: 'dist/Dotcms Starter.ipa'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-testflight');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-titanium');

    // Default task(s).
    grunt.registerTask('tf', ['titanium:dist', 'testflight', 'titanium:clean']);

};