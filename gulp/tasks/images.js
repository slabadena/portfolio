import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

gulp.task('images', () => (
    gulp.src('./dist/static/*.{jpg,png,svg,JPG}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {
                    removeViewBox: false
                },
                {
                    cleanupIDs: {
                        remove: false,
                        minify: false
                    }
                }
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./dist/static'))
));
