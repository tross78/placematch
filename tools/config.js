var argv = require('yargs');
var fs = require('fs');
var resolve = require.resolve;
var CWD = process.cwd();
var pkg = JSON.parse(fs.readFileSync(CWD + "/package.json", 'utf8'));
var ENV = argv['env'] || process.env.profile || 'dev';
process.env.profile = ENV;
exports.PORT = argv['port'] || 5555;
exports.LIVE_RELOAD_PORT = argv['reload-port'] || 4002;
exports.APP_BASE = argv['base'] || '/';
exports.APP_VERSION = pkg.version;
var CLIENT_SRC_BASE = 'client';
var CLIENT_DEST_BASE = 'dist';
var ANGULAR_BUNDLES = './node_modules/angular2/bundles';
exports.PATH = {
    cwd: CWD,
    jslint: [
        (CLIENT_SRC_BASE + "/**/*.ts"),
        (CWD + "/server/**/*.ts"),
        "tools/**/*.ts",
        "!tools/typings/**",
        (CWD + "/gulpfile.ts")
    ],
    src: {
        base: CLIENT_SRC_BASE,
        jslib_inject: [
            resolve('es6-shim/es6-shim.min.js'),
            resolve('es6-shim/es6-shim.map'),
            resolve('systemjs/dist/system.js'),
            (CLIENT_SRC_BASE + "/system.config.js"),
            (ANGULAR_BUNDLES + "/angular2.min.js"),
            (ANGULAR_BUNDLES + "/router.dev.js"),
            (ANGULAR_BUNDLES + "/http.min.js")
        ],
        jslib_copy_only: [
            resolve('systemjs/dist/system-polyfills.js'),
            resolve('systemjs/dist/system-polyfills.js.map')
        ],
        csslib: [
            resolve('bootstrap/dist/css/bootstrap.min.css'),
            resolve('bootstrap/dist/css/bootstrap.css.map')
        ],
        font: [
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.eot'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.svg'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.woff'),
            resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.woff2')
        ],
        index: CLIENT_SRC_BASE + "/index.html",
        images: CLIENT_SRC_BASE + "/images/**",
        favicons: CLIENT_SRC_BASE + "/favicon.ico",
        tpl: [
            (CLIENT_SRC_BASE + "/components/**/*.html"),
        ],
        css: [
            (CLIENT_SRC_BASE + "/components/**/*.css"),
        ],
        ts: [(CLIENT_SRC_BASE + "/**/*.ts"), ("!" + CLIENT_SRC_BASE + "/**/*_spec.ts")]
    },
    dest: {
        app: {
            base: CLIENT_DEST_BASE,
            lib: CLIENT_DEST_BASE + "/lib",
            css: CLIENT_DEST_BASE + "/css",
            font: CLIENT_DEST_BASE + "/fonts",
            images: CLIENT_DEST_BASE + "/images",
            favicons: CLIENT_DEST_BASE + "/",
            component: CLIENT_DEST_BASE + "/components"
        },
        test: 'test',
        tmp: '.tmp'
    }
};
