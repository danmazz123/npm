//NPM
    //el node-modules se descarga asi : npm i
    //te dejo una "plantilla" con todo esto incluido en github


//SASS
    //lo de package.json esta en la clase 158-159,  como se hace y para que sirve ya uwu, eso son    para poder usar sass y tal

    //npm install sass --save-dev asi se hace para  las dependencias desarollo

    //el nmp_modules se puede eliminar, el  pack-lock si nunca, el npm se puede eliminar     pq es facil volverlo a descargar, solo tienes   que poner en la terminal npm i o npm install

    //como lo mas principal de sass esta en las     cases 158-160 
    //habilita el --watch 
    //se llama igual que la segunda manera de gulp

//GULP
    //inicia en la clase 161 termina en la 164
    //se descarga en la terminal escribiendo: npm i -D gulp
    //necesita un archivo llamado gulpfile.js
    //sirve para automatizar tareas(funciones de javascrpt)

    //en gulp toca ponerle como un done/cb/callback que seria para que la consola considere la funcion/tarea terminada pq o si no siempre dara un error o como advertencia diciendo que no se termino la tarea

    //para llamarlos es, en la terminal o npx gulp*nombreTarea* o adjuntandolo en scripts en package.json de la manera que se ve y en consola llamandola asi: npm run *nombreTarea*

    //COMPILACION SASS Y GULP
    //en consola ponemos npm --save-dev gulp-sass, asi descargamos la dependecia y no c q// es la clase 164

    //SIEMPRE RECUERDA
    //npx gulp *nombre tarea*
    //npm run *nombre tarea*

    //SCSS
    //el archivo principal en scss(el q esta dentro de src) es el que este afuera, los demas metelos en carpetas, o mas bien organizalos, si pones 2 archivos afuera se crean dos hojas de estilos, si necesitas que este afuera pone un _ antes del nombre(asi como se va a ver ahi), asi le decimos que eso va dentro de una hoja de esctilos y no se toma como un principal

    //como integrar normalize a scss    
        //solo tienes que pegarlo en un archivo scss lol, ya lo admite asi sea css

//IMAGENES WEBP CON GULP
    // primero tenemos que descargar una dependencia, en terminal ponemos:
    // npm install --save-dev gulp-webp


//INSTALACION DE VERSIONES EN ESPECIFICO
    //hay cosas que tienes q descargar una version en especifico, como gulp para hacerlo escribes

    //npm i -D gulp@4.0.1

    //con el arroba escojes la version



//CSS NANO MEJORAR CSS
        //es una vaina que compila el css para que quede mejor y mas organizado, se hace al final y se descarga como los demas 

        //instala cssnano, autoprefixer, postcss y gulp-postcss a la hora de instalarlo se hace con espacio entre las dos


//SOURCEMAP
        //esto es para saber encontrar donde esta una linea que modifica algo en caso que queramos modificarlo
            //se descarga como los demas al nombre de: gulp-sourcemaps

            //una vez ya ejecutado sourcemap en google nos mostrara el archivo y linea y sera mucho mas facil encontrarlo
            //SIRVE TMB PARA jS


//MEJORAR JS TERSER-JS
    //descargamos la dependencia de terser que viene llamada:
    //gulp-terser-js
        //seguimos en gulpfile




//DEPLOYMENT
    //a la hora de hacer el deployment, en realidad solo tienes que subir el build, los html y los archivos de videos y asi 







    //PARTE DE LO DE GULP ESTA EN EL INDEX DE FESTIVAL MUSICA, MIRA AHI UWU