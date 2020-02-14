var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cp = require('child_process');
var flatten = require('gulp-flatten');
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var source = require('vinyl-source-stream');
var concatjs = require('gulp-concat');
var browserSync = require('browser-sync').create();
let cleanCSS = require('gulp-clean-css');
const webp = require('gulp-webp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const criticalCss = require('gulp-critical-css');
var del = require('del');
const babel = require('gulp-babel');

var paths = {
  styles: {
    src: '_scss/**/*.scss',
    dest: '_site/css',
    destsecond: 'css'
  },
  scripts: {
    src: '_js/src/*.js',
    dest: '_site/js/dist/',
    destsecond: 'js/dist/',
    first: '_js/first/*.js'
  },
  img: {
    src: 'img/*',
    dest: 'img/',
    destwebP: 'img/webp'
  },
  html: {
    src: '_site/**/*.html',
    dest: '_site/'
  }
};



function jekyllBuild() {
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
}


function style() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'expanded',
      onError: browserSync.notify
    }))
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(paths.styles.destsecond));

}

function js() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/popper.js/dist/umd/popper.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    '_js/first/jquery.easing.js',
    '_js/first/waypoints.js',
    '_js/first/webp-check.js',
    '_js/first/back-to-top.js',
    paths.scripts.src
  ])
  .pipe(babel())
  .pipe(concatjs('app.bundle.js'))
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest(paths.scripts.destsecond));
}

gulp.task( 'htmlMin', function(done){
  return gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
    done();
});


function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: "_site"
    }
  })
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function webPCopy(done){
   gulp.src(paths.img.src)
        .pipe(webp())
        .pipe(gulp.dest(paths.img.destwebP));
        done();
}

function webPCopyPostImages(done){
   gulp.src('post-images/**/*')
        .pipe(webp())
        .pipe(gulp.dest('post-images/webp'));
        done();
}

function watch() {
  gulp.watch(paths.styles.src, style)
  gulp.watch(paths.scripts.src, js)
  gulp.watch('post-images/**/*',  gulp.series(webPCopyPostImages)) 
  gulp.watch(paths.img.src, gulp.series(webPCopy, jekyllBuild, browserSyncReload)) 
  gulp.watch(
    [
    '*.html',
    '_layouts/*.html',
    '_pages/*',
    '_posts/*',
    '_data/*',
    '_includes/*',
    'img/*',
    '_js/*',
    '_scss/*'
  ],
  gulp.series(jekyllBuild, browserSyncReload));
}



gulp.task('clean', function (done) {
  return del(['_public/**/*']);
  done();
});


gulp.task( 'public', function(done){
    gulp.src('_site/**/*')
        .pipe(gulp.dest('_public/'));
        done();
});



gulp.task('default', gulp.series(gulp.parallel(jekyllBuild, browserSyncServe, watch)));

gulp.task('prod', gulp.series('htmlMin', 'clean', 'public'));

gulp.task('prodlite', gulp.series('clean', 'public'));





