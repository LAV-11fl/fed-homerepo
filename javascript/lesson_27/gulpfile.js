const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");

function styles() {
  return src("src/style.css")
    .pipe(cleanCSS())
    .pipe(dest("dist"));
}

exports.styles = styles;
