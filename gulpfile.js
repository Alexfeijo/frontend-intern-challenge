var gulp = require('gulp');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

// Tarefa de minificação do Javascript
gulp.task('minify-js', function () {
    gulp.src('./project/assets/js/app.js')      // Arquivos que serão carregados, veja variável 'js' no início
    .pipe(concat('app.min.js'))      			// Arquivo único de saída
    .pipe(uglify())                     		// Transforma para formato ilegível
    .pipe(gulp.dest('./project/assets/js/'));   // pasta de destino do arquivo(s)
});

// Tarefa padrão quando executado o comando GULP
gulp.task('default',['minify-js']);
 
// Tarefa de monitoração caso algum arquivo seja modificado, deve ser executado e deixado aberto, comando "gulp watch".
gulp.task('watch', function() {
    gulp.watch(js, ['minify-js']);
});