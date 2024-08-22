let academicojson=[
    {
        "salon": "Sputnik",
        "estudiantes": [
            {
                "identificacion": 4024674357,
                "nombres": "Cristina",
                "apellidos": "Aguilera Moron",
                "direccion": "Calle 9 #10-210",
                "acudiente": "Ramon Aguilera Torrado",
                "nfijo": "601 5787492",
                "celular": "313 575 78 25",
                "estado": "Cursando",
                "trainer": "Pedro",
                "ruta": "Java",
                "inicio": "19-02-2024",
                "finalizacion": "14-04-2025",
                "EstadoPlataforma": "inactivo"
            }
        ]
    },
    {
        "salon": "Apolo",
        "estudiantes": [
            {
                "identificacion": 6536787532,
                "nombres": "Diego Leon",
                "apellidos": "Santana Conedo",
                "direccion": "Calle 11 #24-253",
                "acudiente": "Carlos Santana Guerrero",
                "nfijo": "601 5423546",
                "celular": "302 575 45 66",
                "estado": "Cursando",
                "trainer": "Stiven",
                "ruta": "NodeJS",
                "inicio": "19-02-2024",
                "finalizacion": "14-04-2024",
                "EstadoPlataforma": "inactivo"
            }
        ]
    },
    {
        "salon": "Artemis",
        "estudiantes": [
            {
                "identificacion": 56571854534,
                "nombres": "Moly Alejandra",
                "apellidos": "Castillo Arellano",
                "direccion": "Urbanizacion La Esmeralda",
                "acudiente": "Cristina Arellano Casas",
                "nfijo": "601 8255272",
                "celular": "313 527 35 52",
                "estado": "Cursando",
                "trainer": "Andres",
                "ruta": "NetCore",
                "inicio": "19-02-2024",
                "finalizacion": "14-04-2025",
                "EstadoPlataforma": "inactivo"
            }
        ]
    }
]

let trai= [
    {
        "trainer": [
            {   
                "nombre": "Pedro",
                "apellidot": "Gomez",
                "id": 12345,
                "contrasena": "pedro123"
            },
            {   
                "nombre": "Andres",
                "apellidot": "Jurado",
                "id": 67890,
                "contrasena": "andres456"
                
            }
        ]
    }
]

let rutica=[
    {
        "nombre": "Pedro",
        "ruta": "Java"
    },
    {
        "nombre": "Andres",
        "ruta": "NetCore"
    }
]

let coor =[
    {
        "coordinador": [
            {   
                "nombre": "Jesus",
                "id": 31972561,
                "contrasena": "jesus2006"
            }
        ]
    }
]

let inscritos=[
    {
        "inscritos": [
            {
                "identificacion": 1093296678,
                "nombres": "Mario",
                "apellidos": "Lopez Carrascal",
                "direccion": "Calle 53 #7-43",
                "acudiente": "Leslie Carrascal Sanchez",
                "nfijo": "601 3256738",
                "celular": "323 645 98 00",
                "estado": "Inscrito"
            },
            {
                "identificacion": 1654278539,
                "nombres": "Damian",
                "apellidos": "Smith Caro",
                "direccion": "Calle 23 #5-21",
                "acudiente": "Joshua Smith Villamizar",
                "nfijo": "601 2231456",
                "celular": "323 432 55 00",
                "estado": "Inscrito"
            },
            {
                "identificacion": 325672890,
                "nombres": "Zharik",
                "apellidos": "Perez Meza",
                "direccion": "Avenida Florez #98-03",
                "acudiente": "Nicol Meza Arteaga",
                "nfijo": "601 99633276",
                "celular": "323 987 98 43",
                "estado": "Inscrito"
            },
            {
                "identificacion": 1735479032,
                "nombres": "Mei",
                "apellidos": "Amane Toro",
                "direccion": "Calle 13 #3-18",
                "acudiente": "Valentina Toro Lizcano",
                "nfijo": "601 2317643",
                "celular": "323 321 06 44",
                "estado": "Inscrito"
            }
        ]
    }
]
/*function filtro(js){
    console.log(typeof academicojson);
    
    
    let nuevo = JSON.parse(js)
    console.log(typeof nuevo);
    
    let estudiantes = nuevo[2].estudiantes;

    estudiantes.push({"identificacion": 56571854534})
    return JSON.stringify(nuevo, null, 2);
}
academicojson = filtro(academicojson)
console.log(academicojson);*/
var aprobado=[]
console.log("------------------------------------------------");        
console.log("                 CAMPUSLAND                     ");
console.log("------------------------------------------------");        


console.log("1. Camper");
console.log("2. Trainer");
console.log("3. Coordinador");
        
var opcion= prompt(" Elige tu cargo para iniciar sesión")
        
    if (opcion=="camper"){
        
        console.clear();
        var usuario= prompt("Ingrese su nombre de usuario")
        var contraseña= prompt("Ingrese su contraseña (ID)")

        for (const i of academicojson){
            for (const x of i["estudiantes"]){
                if (x["identificacion"]== contraseña){    
                    console.clear();
                    console.log("------------------------------------------------");
                    console.log("  DATOS: ", x["nombres"], x["apellidos"]);
                    console.log("------------------------------------------------");
                    
                    console.log("Dirección: ", x["direccion"])
                    console.log("Acudiente: ",x["acudiente"])
                    console.log("Teléfono fijo: ",x["nfijo"])
                    console.log("Celular: ",x["celular"])
                    console.log("Estado: ",x["estado"])
                    console.log("Trainer: ",x["trainer"])
                    console.log("Ruta: ",x["ruta"])
                    console.log("Fecha de inicio: ",x["inicio"])
                    console.log("Fecha de finalización: ",x["finalizacion"])

                    var fechasesion = new Date()
                    var now= fechasesion.toLocaleString();
                    console.log(now);
                    
                    const actividad = "Revision de sus datos personales"
                    const estadoplat = "Activo"
                    
                    var entrada={
                        "id": contraseña,
                        "fecha": now
                    }                    
                    entrada.actividad= actividad;
                    entrada.estadoplat= estadoplat;

                    var pregunta=prompt("\n¿Desea continuar viendo sus datos? Si no, se volverá al menú principal. (si/no)\n")
                    
                    if (pregunta = "no"){
                        const estadoplat= "finalizado"
                        entrada.estadoplat=estadoplat
                    }
                    
                    
                    /*ACTUALIZAR: Actualiza un ítem existente en el arreglo
                    function actualizarDato(index, nombre, edad, pais) {
                        if (index >= 0 && index < datos.length) {
                        datos[index] = { nombre, edad, pais };
                        console.log("Dato actualizado:", datos[index]);
                        } else {
                        console.log("Índice no válido");
                        }
                    }/*

                    // ELIMINAR: Elimina un ítem del arreglo
                    function eliminarDato(index) {
                        if (index >= 0 && index < datos.length) {
                        datos.splice(index, 1);
                        console.log("Dato eliminado");
                        } else {
                        console.log("Índice no válido");
                        }
                    }*/

                }
            }
        }
        
    }
    
    
    if (opcion=="trainer"){

        console.clear()
        console.log(
            "------------------------------------------------\n"+
            "             BIENVENIDO TRAINER                 \n"+
            "------------------------------------------------\n"
        );
        var usuario= prompt("Número de Identificación: ")
        var contraseña= prompt("Contraseña: ")

        for (const i of  trai){
            for(const x of i["trainer"]){
                if (x["id"]==usuario){
                    if (x["contrasena"]==contraseña){
                        console.clear()
                        console.log("Ingreso válido Trainer", x["nombre"]);
                        var opcionmenut= prompt ("\n---------------TRAINER--------------\n1. Información Personal\n2. Cerrar Sesión\n")
                    
                        if (opcionmenut==1){
                            console.clear()
                            console.log("------------------------------------------------");
                            console.log("                     DATOS                      ");
                            console.log("------------------------------------------------\n");

                            for (const i of trai){
                                for(const a of i["trainer"]){
                                    if (a["nombre"]== x["nombre"]){

                                        console.log("Nombre: ", x["nombre"], x["apellidot"]);
                                        console.log("Identificación: ",x["id"]);
                                        console.log("Contraseña: ",x["contrasena"]);

                                        for(const b of rutica){
                                            if (b["nombre"]== x["nombre"]){
                                                x["ruta"]== b["ruta"]
                                                console.log("Ruta asignada: ",x["ruta"]);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if (opcionmenut==2){
                            console.clear()
                            console.log("------------------------------------------------");
                            console.log("                 CERRAR SESION                  ");
                            console.log("------------------------------------------------\n");

                            var sino=prompt("Desea cerrar sesión? \n1.Si\n2.No\n")

                            if (sino==1){
                                console.clear()
                                console.log("Cerrando sesión...");
                                setTimeout(() => {
                                    console.clear();
                                }, 3000); // 3000 milisegundos = 3 segundos
                                
                            }
                        }
                    }
                }
            }
        }
            
    }

    if (opcion=="coordinador"){
        console.clear()
        console.log(
            "------------------------------------------------\n"+
            "             BIENVENIDO COORDINADOR                 \n"+
            "------------------------------------------------\n"
        );
        var usuario= prompt("Número de Identificación: ")
        var contraseña= prompt("Contraseña: ")
        console.clear()
        for (const i of coor){
            for (const x of i["coordinador"]){
                if(x["id"]==usuario){

                    if(x["contrasena"]==contraseña){
                        console.log("Ingreso exitoso Coordinador", x["nombre"]);
                        var respuestaUsuario= prompt("Elije una opción\n\n1. Inscribir campers\n2. Registrar notas\n3. Crear nuevas rutas\n4. Módulo de matrículas\n5. Módulo de reportes\n6. Cerrar sesión\n\n")
                        
                        if (respuestaUsuario==1){
                            console.log(
                                "--------------------------------------------------------\n"+
                                "             Inscripción de estudiantes                 \n"+
                                "--------------------------------------------------------\n"
                            );

                            identificacion = prompt("Identificación\n")
                            nombres = prompt("Nombres\n")
                            apellidos = prompt("Apellidos\n")
                            direccion = prompt("Dirección\n")
                            acudiente = prompt("Nombres y apellidos de acudiente\n")
                            nfijo = prompt("Número fijo\n")
                            celular = prompt("Número celular\n")
                            estado = prompt("Estado (inscrito)\n")
                        }

                        var inscritosnew={
                            "identificacion": identificacion,
                            "nombres": nombres,
                            "apellidos": apellidos,
                            "direccion": direccion,
                            "acudiente": acudiente,
                            "nfijo": nfijo,
                            "celular": celular,
                            "estado": estado
                        }

                        inscritos.inscritosnew= inscritosnew

                    }
                }

                if (respuestaUsuario==2){
                    console.clear()
                    console.log(
                        "------------------------------------------------\n"+
                        "                INGRESAR NOTAS                  \n"+
                        "------------------------------------------------\n"
                    );
                    console.log(
                        "------------------------------------------------\n"+
                        "             1. Prueba inicial\n             2. Módulo      \n"+
                        "------------------------------------------------\n"
                    );

                    var nota= prompt("")

                    if (nota==1){
                        var contador=1

                        for (const i of inscritos){
                            for (const x of i["inscritos"]){
                                console.log(contador, x["nombres"] ,x["apellidos"]);
                                contador = contador +1 
                                
                                estudiante = prompt("Ingrese el nombre del estudiante que desea revisar\n")
                                apellido = prompt("Ingrese el apellido del estudiante que desea revisar\n")

                                for (const i of inscritos){
                                    for (const x of i["inscritos"]){
                                        if (x["nombres"]==estudiante){
                                            if (x["apellidos"]==apellido){
                                                console.clear()
                                                console.log(
                                                    "------------------------------------------------\n"+
                                                    "  DATOS:", x["nombres"], x["apellidos"],"\n"+
                                                    "------------------------------------------------\n"
                                                );
                                                console.log("Identificación: ",x["identificacion"])
                                                console.log("Dirección: ", x["direccion"])
                                                console.log("Acudiente: ",x["acudiente"])
                                                console.log("Número fijo: ",x["nfijo"])
                                                console.log("Celular: ",x["celular"])
                                                console.log("Estado: ",x["estado"])

                                                console.log("Ingrese las notas de la prueba inicial \n");
                                                var PorcentajeMayor = prompt("Nota práctica 70% :\n")
                                                var PorcentajeMenor = prompt("Nota teórica 30% :\n")

                                                if (100>= PorcentajeMayor && PorcentajeMenor >=1){
                                                    var resultado= ((PorcentajeMayor * 0.7)+ (PorcentajeMenor * 0.30))

                                                    if (resultado >=60){
                                                        x["estado"]= si
                                                        aprobado += [x]
                                                        
                                                        console.log(x["nombres", x["apellido"]]);
                                                        console.log(si);
                                                        var salon = prompt("Elija el área de entrenamiento del alumno\n\n1.Sputnik\n2.Apolo\n3.Artemis\n\n")

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
