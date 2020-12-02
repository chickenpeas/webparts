const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');

const paths = {
  'sassSrc':      './www/assets/src/scss/**/*.scss',
  'jsSrc':       './www/assets/src/js/**/*.js',
  'imgSrc':       './www/assets/src/img',
  'cssDest':      './www/assets/css',
  'jsDest':      './www/assets/js',
  'imgDest':      './www/assets/img'
}

gulp.task('sass', () => {
  return gulp.src(paths.sassSrc)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      indentType: 'tab',
      indentWidth: 2,
    }))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.cssDest))  // 非圧縮cssを出力
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(paths.cssDest));  // 圧縮cssを出力
});

gulp.task('images', () => {
  return gulp.src(paths.imgSrc + '/**/*')
    // .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(paths.imgDest));
});

gulp.task('js', () => {
  return gulp.src(paths.jsSrc)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(paths.jsDest));
});

gulp.task('default', () => {
  gulp.watch(paths.sassSrc, gulp.task('sass'));
  gulp.watch([paths.imgSrc + '/**/*.png', paths.imgSrc + '/**/*.jpg', paths.imgSrc + '/**/*.jpeg', paths.imgSrc + '/**/*.gif', paths.imgSrc + '/**/*.svg'], gulp.task('images'));
  gulp.watch(paths.jsSrc, gulp.task('js'));
});