// function tarea(done){
//     console.log('mi primer tarea');

//     done();
// }

// exports.tarea = tarea;// asi se llama una función(esto es node), se llama en la consola/terminal a traves de npx gulp *nombreTarea* per o también se puede desde el package.json con npm

//CSS
    const{src, dest, watch, parallel} = require("gulp");//extraer la funcionalidad de gulp lo de dentro de{} es lo que se llama de gulp
    //compilar viene de las dependencias
    //src/source identificar archivo
    //dest/ destino guardarlo
    //watch es lo q ya habíamos visto
    //parallel es para ejecutar mas de una funcion al tiempo
    const sass = require("gulp-sass")(require('sass'));//llama el sass y llama también al "conectar" entre gulp y sass, toca llamarlo si o si asi
    const plumber = require("gulp-plumber");
    const autoprefixer = require('autoprefixer');//asgurar que funcione en mas nav
    const cssnano = require('cssnano');//comprimir css
    const postcss = require('gulp-postcss');//transformaciones atravez de los dos de arriba
    const sourcemaps = require('gulp-sourcemaps');//sourcemaps, se pone en dos lados, al inicio y al final de function css(busca) y en cada una con un . diferente, esto TMB SIRVE PARA JS(busca en js como se pone y tal)
    
    //IMAGENES
const cache = require("gulp-cache");//lit cache 
const imagemin = require('gulp-imagemin');//para poder usar las imagenes webp
const webp = require('gulp-webp');//convertor webp 
const avif = require('gulp-avif');//otro formato como webp

//JAVASCRIPT
const terser = require('gulp-terser-js');//mejorar js(se pone de segundas en function js(busca))

function css(done){
    //Almacenarla en el disco duro
    src('src/scss/**/*.scss')//identificar
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())//compilarlo
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"));//Almacenarla en el disco duro

    //el pipe es como la accion que se ejecuta después de que se identifica, pueden haber varios pero se ejecutan en orden


    done();
}
//aca inicia lo del convertor de imagenes
function imagenes(done){
    const opciones = {
        optimizationlevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))//cache de las imagenes
        .pipe(dest('build/img'))


    done();
}

function versionWebp(done){
    const opciones ={
        quality: 50
    };


    src('src/img/**/*.{png,jpg}')//asi se pone para mas de un formato
    .pipe(webp(opciones))
    .pipe(dest('build/img'))

    done();
}
function versionAvif(done){
    const opciones ={
        quality: 50
    };


    src('src/img/**/*.{png,jpg}')//asi se pone para mas de un formato
    .pipe(avif(opciones))
    .pipe(dest('build/img'))

    done();
}
//aca termina sin tomar en cuenta los exports y lo de varios export a la vez

function javascript(done){
    src('src/js/**/*js')
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));

    done();
}


function dev(done){
    watch("src/scss/**/*.scss", css);//asi se pondría un watch a uno que se llame con npx
    watch("src/js/**/*.js", javascript);//lo mismo q lo de arriba pero con js
    
    
    //lee en app.scss por que puse **
    
    done();
}
exports.css = css;//todo eso es lo mismo casi a que si pusiéramos lo de "css": "gulp css" en scrips de package, solo que se correría escribiendo npm run css
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;//volver las imagenes webp
exports.versionAvif = versionAvif;//volver las imagenes avif
exports.js = javascript;
exports.dev = dev = parallel(imagenes,versionWebp,versionAvif,javascript,dev);//basicamente si lo del watch cambia llama a css y se cambia todo(css la función), hay que llamarla con npx en la terminal y asi inicia a mirar, se cancela o para con ctrl+c, si hay un error en el archivo que se esta mirando se va a dejar de mirar y tienes que volverlo a activar
//lo de parallel es para que cuando ejecutemos eso tmb se ejecute lo que metamos entre los parentesis