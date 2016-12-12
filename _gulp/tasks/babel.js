import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

// configfile
let config = require('../config').babel;

gulp.task("babel", () => {

    return browserify(config.src)
        .transform("babelify")
        .bundle()
        .pipe(source(config.concatFilename))
        .pipe(gulp.dest(config.jekyllJsDest))
        .pipe(gulp.dest(config.jsDest));

});
