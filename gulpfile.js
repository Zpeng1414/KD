var gulp=require("gulp");
var connect=require("gulp-connect");
var sass=require("gulp-sass");
var concat=require("gulp-concat");

gulp.task("copyhtml",function(){
	return gulp.src("src/html/*").pipe(gulp.dest("dist/html")).pipe(connect.reload());
})

gulp.task("copyjs",function(){
	return gulp.src("src/js/*").pipe(concat("all.js")).pipe(gulp.dest("dist/js")).pipe(connect.reload());
})

gulp.task("copycss",function(){
	return gulp.src("src/css/**/*").pipe(sass()).pipe(concat("all.css")).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})

gulp.task("mywatch",function(){
	gulp.watch("src/html/*.html",["copyhtml"]);
	gulp.watch("src/css/**/*",["copycss"]);
	gulp.watch("src/js/*.js",["copyjs"]);
})

gulp.task("server",function(){
	connect.server({
		port:8000,
		root:["dist"],
		livereload:true
	})
})

gulp.task("init",["copyhtml","copycss","copyjs"]);
gulp.task("default",["init","mywatch","server"]);























