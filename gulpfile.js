import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import del from "del";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
// import sourcemaps from "gulp-sourcemaps";
import autoPrefixer from "gulp-autoprefixer";
import imagein from "gulp-imagemin";
import htmlmin from "gulp-htmlmin";
import gulpSize from "gulp-size";
import newer from "gulp-newer";
import name from "browser-sync";
import webpack from "webpack-stream";
import fileinclude from "gulp-file-include";
import webp from "gulp-webp";
import gcmq from "gulp-group-css-media-queries";
import sourcemaps from "gulp-sourcemaps";
const browserSync = name.create();
const sass = gulpSass(dartSass);

const paths = {
  pagesHtml: {
    src: "src/*.html",
    dest: "docs/",
  },
  componentsHtml: {
    src: "src/html/**/*",
    allSrc: "src/html/**/*",
    dest: "docs/html",
  },
  styles: {
    src: `src/styles/**/*`,
    dest: "docs/styles/",
  },
  scripts: {
    src: `src/scripts/**/*.js`,
    dest: "docs/scripts/",
  },
  images: {
    src: "src/img/**/*",
    dest: "docs/img/",
  },
  fonts: {
    src: "src/fonts/*",
    dest: "docs/fonts/",
  },
};

function clean() {
  // return del(["docs/*", "!docs/src/img", "!docs/src/fonts"]);
  return del(["dcs/*", "!docs/src/img", "!docs/src/fonts"]);
}

function pagesHtml() {
  return gulp
    .src(paths.pagesHtml.src)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      htmlmin({
        includeAutoGeneratedTags: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      })
    )
    .pipe(gulpSize({ showFiles: true }))
    .pipe(gulp.dest(paths.pagesHtml.dest))
    .pipe(browserSync.stream());
}

function componentsHtml() {
  return gulp
    .src(paths.componentsHtml.src)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      htmlmin({
        includeAutoGeneratedTags: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortClassName: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      })
    )
    .pipe(gulpSize({ showFiles: true }))
    .pipe(gulp.dest(paths.componentsHtml.dest))
    .pipe(browserSync.stream());
}

function styles() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      // .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(
        autoPrefixer({
          cascade: false,
        })
      )
      // .pipe(gcmq())
      .pipe(cleanCss({ level: 2 }))
      .pipe(
        rename({
          basename: "main",
          suffix: ".min",
        })
      )
      .pipe(sourcemaps.write())
      .pipe(gulpSize({ showFiles: true }))
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream())
  );
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulpSize({ showFiles: true }))
    .pipe(uglify())
    .pipe(
      webpack({
        devtool: "source-map",
      })
    )
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: "docs/",
  });
  gulp.watch(paths.componentsHtml.src, gulp.series(componentsHtml, pagesHtml));
  gulp.watch(paths.pagesHtml.src, pagesHtml);

  gulp.watch(paths.componentsHtml.dest).on("change", browserSync.reload);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.fonts.src, fonts);
  gulp.watch(paths.images.src, img);
}

function fonts() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}

function img() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagein())
    .pipe(webp())
    .pipe(gulp.dest(paths.images.dest));
}

const build = gulp.series(
  clean,
  gulp.parallel(pagesHtml, componentsHtml, styles, scripts, img, fonts),
  watch
);

export { clean };
export { styles };
export { watch };
export { build };
export { scripts };
export { img };
export { componentsHtml };
export default build;
