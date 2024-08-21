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

console.log("------------------------------------------------");        
console.log("                 CAMPUSLAND                     ");
console.log("------------------------------------------------");        
        
console.log("1. Camper");
console.log("2. Trainer");
console.log("3. Coordinador");
        
var opcion= prompt(" Elige tu cargo para iniciar sesión")
        
    if (opcion=="camper"){
        
        var usuario= prompt("Ingrese su nombre de usuario")
        var contraseña= prompt("Ingrese su contraseña (ID)")

        for (const i of academicojson){
            for (const x of i["estudiantes"]){
                if (x["identificacion"]== contraseña){    
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
                    
                    
                    // ACTUALIZAR: Actualiza un ítem existente en el arreglo
                    function actualizarDato(index, nombre, edad, pais) {
                        if (index >= 0 && index < datos.length) {
                        datos[index] = { nombre, edad, pais };
                        console.log("Dato actualizado:", datos[index]);
                        } else {
                        console.log("Índice no válido");
                        }
                    }

                    // ELIMINAR: Elimina un ítem del arreglo
                    function eliminarDato(index) {
                        if (index >= 0 && index < datos.length) {
                        datos.splice(index, 1);
                        console.log("Dato eliminado");
                        } else {
                        console.log("Índice no válido");
                        }
                    }

                }
            }
        }
        
    }
    
    
    if (opcion=="trainer"){
        console.log(
            "------------------------------------------------\n"+
            "             BIENVENIDO TRAINER                 \n"+
            "------------------------------------------------\n"
        );
        var usuario= prompt("Número de Identificación: ")
        var contraseña= prompt("Contraseña: ")

        
    }

    if (opcion=="coordinador"){
        console.log(
            "------------------------------------------------\n"+
            "             BIENVENIDO COORDINADOR                 \n"+
            "------------------------------------------------\n"
        );
        var usuario= prompt("Número de Identificación: ")
        var contraseña= prompt("Contraseña: ")

        
    }

        
        
        
        