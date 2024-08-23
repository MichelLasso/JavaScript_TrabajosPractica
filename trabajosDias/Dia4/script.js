let Datos = [
    {
        "informacion_personal": [
            {
                "nombre": "Juan Pérez",
                "edad": 30,
            
                "direccion": [
                    {
                        "calle": "Calle Principal",
                        "numero": 123,
                        "ciudad": "Ciudad Ejemplo"
                    }
                ],
                "contacto": [
                    {
                        "correo": "juan.perez@example.com",
                        "telefono": "+123456789"
                    }
                ]
            }
        ],
        "historial_educativo": [
            {
                "nivel": "Secundaria",
                "institucion": "Instituto Secundario",
                "anio_inicio": 2000,
                "anio_fin": 2005
            },
            {
                "nivel": "Universidad",
                "institucion": "Universidad Ejemplar",
                "titulo": "Licenciatura en Ciencias",
                "anio_inicio": 2006,
                "anio_fin": 2010
            }
        ],
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
                "periodo": "2016-actualidad",
                "responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
    }
]
console.log(Datos);

var opcion = prompt("--MANIPULACIÓN DE DATOS--\n1. Agregar nuevo empleado\n2. Editar Datos\n3. Eliminar datos\n4. Ver Información")

if (opcion == 1) {

    console.clear()

    console.log("--Agregar Nuevo Empleado--\n");
    console.log("\nInformación Personal\n");

    var nombre = prompt("Nombre: ");
    var edad = prompt("Edad: ");
    var dirección = prompt("Calle: ");
    var numero = prompt("Número de calle: ");
    var ciudad = prompt("Ciudad: ");
    var correo = prompt("Correo: ");
    var telefono = prompt("Número de teléfono: ");

    console.log("\nHistorial Educativo\n");

    var nivel = prompt("Nivel: ");
    var institucion = prompt("Institucion: ");
    var anio_inicio = prompt("Año de inicio: ");
    var anio_fin = prompt("Año de finalización: ");
    var titulo = prompt("Titulo: ");

    console.log("\nExperiencia Laboral\n");

    var puesto = prompt("Puesto: ");
    var empresa = prompt("Empresa: ");
    var periodo = prompt("Periodo: ");
    var responsabilidades = prompt("Responsabilidaes: ");

    var nuevoEmpleado = {

        "informacion_personal": [
            {
                "nombre": nombre,
                "edad": edad,
                "direccion": {
                    "calle": dirección,
                    "numero": numero,
                    "ciudad": ciudad
                },
                "contacto": {
                    "correo": correo,
                    "telefono": telefono
                }
            }
        ],
        "historial_educativo": [
            {
                "nivel": nivel,
                "institucion": institucion,
                "anio_inicio": anio_inicio,
                "anio_fin": anio_fin,
                "titulo": titulo
            },
        ],
        "experiencia_laboral": [
            {
                "puesto": puesto,
                "empresa": empresa,
                "periodo": periodo,
                "responsabilidades": responsabilidades
            }
        ]
    }
}

Datos.push(nuevoEmpleado)

console.log(Datos);

if (opcion == 2) {

    console.log("--Editar Datos--");

    
    for (const i of Datos){

        for (const x of i["informacion_personal"]){
            console.log("1. Nombre del empleado: ",x["nombre"]);
            console.log("2. Edad: ",x["edad"]);

        }
        var cambiarUsuario = Number(prompt("Ingrese el dato que deseas cambiar: "));

        if (cambiarUsuario===1){
            var cambiarDato= prompt("Ingresa el nuevo nombre :");

            i.informacion_personal.nombre=cambiarDato

            console.log("Nombre del empleado: ",i.informacion_personal.nombre);
        }
        if (cambiarUsuario===2){
            var cambiarDato2= prompt("Ingresa la nueva edad :");

            i.informacion_personal.edad=cambiarDato2

            console.log("Edad: ",i.informacion_personal.edad);
        }
    }
}


if (opcion==3){

    console.log("\n--Eliminar datos\n");
    console.clear()
    var verOpcionb= prompt(
        "1. Eliminar información Personal\n"+
        "2. Eliminar historial educativo\n"+
        "3. Eliminar Experiencia laboral\n"
    )

    if (verOpcionb==1){
        console.clear()
        console.log("\n--Información Personal--\n");
        var verOpcionbPers= prompt(
            "1. Eliminar Información personal\n"+
            "2. Eliminar Dirección\n"+
            "3. Eliminar Contacto\n"
        )

        if(verOpcionbPers==1){
            for(const i of Datos[0]["informacion_personal"]){
                console.log(cont);

                console.log("Nombre del empleado: ",i["nombre"]);
                console.log("Edad: ",i["edad"]);
            }
            var elidato0= prompt("Digite el número del dato que deseas borrar ")
            Datos[0]["informacion_personal"].splice(elidato0-1,1)
            console.log(Datos[0]["informacion_personal"]);
        }
        if(verOpcionbPers==2){
            for(const i of Datos[0]["informacion_personal"]){

                for(const x of i["direccion"]){

                    console.log("calle", x["calle"]);
                    console.log("numero",x["numero"]);
                    console.log("ciudad",x["ciudad"]);
                    
                }
                var elidato1= prompt("Digite el número del dato que deseas borrar ")
                Datos[0]["informacion_personal"][0]["direccion"].splice(elidato1-1,1)
                console.log(Datos[0]["informacion_personal"][0]["direccion"]);
            }
        }
        if(verOpcionbPers==3){
            for(const i of Datos[0]["informacion_personal"]){

                for(const x of i["contacto"]){

                    console.log("Correo", x["correo"]);
                    console.log("Telefono",x["telefono"]);                    
                }
                var elidato1= prompt("Digite el número del dato que deseas borrar ")
                Datos[0]["informacion_personal"][0]["contacto"].splice(elidato1-1,1)
                console.log(Datos[0]["informacion_personal"][0]["contacto"]);
            }3
        }
    }
    if(verOpcionb==2){
        console.clear()
        console.log("\n--Historial Educativo--\n");

        let cont=1

        for(const i of Datos[0]["historial_educativo"]){
            console.log(cont);
            
            console.log("Nivel Academico: ", i["nivel"]);
            console.log("Institución", i ["institucion"]);
            console.log("Año de inicio", i["anio_inicio"]);
            console.log("Año de finalización", i["anio_fin"]);
            console.log("Titulo", i["titulo"]);   
            cont=cont+1      
        }
        var elidato= prompt("Digite el número del dato que deseas borrar ")
        Datos[0]["historial_educativo"].splice(elidato-1,1)
        console.log(Datos[0]["historial_educativo"]);
        
        
    }
    if (verOpcionb==3){
        console.clear()
        console.log("\n--Experiencia Laboral--\n");
        
        let cont=1

        for(const i of Datos[0]["experiencia_laboral"]){
            
            console.log(cont);
            
            console.log("Puesto: ", i["puesto"]);
            console.log("Empresa", i ["empresa"]);
            console.log("Periodo", i["periodo"]);
            console.log("Responsabilidades", i["responsabilidades"]);
            console.log("Titulo", i["titulo"]);   
            cont=cont+1      
        }
        var elidato2= prompt("Digite el número del dato que deseas borrar ")
        Datos[0]["experiencia_laboral"].splice(elidato2-1,1)
        console.log(Datos[0]["experiencia_laboral"]);
    }
    
}
if (opcion==4){
    console.clear()
    console.log("--Mostrar Datos--");
    var verOpcion= prompt(
        "1. Ver información Personal\n"+
        "2. Ver historial educativo\n"+
        "3. Ver Experiencia laboral\n"
    )

    if (verOpcion==1){
        console.clear()
        console.log("\n--Información Personal--\n");
        
        for (const i of Datos){
            for (const x of i["informacion_personal"]){
                console.log("Nombre del empleado: ",x["nombre"]);
                console.log("Edad: ",x["edad"]);

                for (const b of x["direccion"]){
                    console.log("Calle: ",b["calle"]);
                    console.log("Numero de Calle: ",b["numero"]);
                    console.log("Ciudad: ",b["ciudad"]);
                }
                
                for (const c of x["contacto"]){
                    console.log("Correo: ",c["correo"]);
                    console.log("telefono: ",c["telefono"]);
                }
            }
        }
    }
    if(verOpcion==2){
        console.clear()
        console.log("\n--Historial Educattivo--\n");
        
        for (const i of Datos){
            for(const x of i["historial_educativo"]){
                console.log("Nivel academico: ",x["nivel"]);
                console.log("Institución: ",x["institucion"]);
                console.log("Inicio de año: ",x["anio_inicio"]);
                console.log("Finalización de año: ",x["anio_fin"]);
                console.log("Titulo: ",x["titulo"]);
            }
        }
    }
    if (verOpcion==3){
        console.clear()
        console.log("\n--Experiencia Laboral--\n");
        
        for (const i of Datos){
            for (const x of i["experiencia_laboral"]){
                console.log("Puesto: ",x["puesto"]);
                console.log("Empresa: ",x["empresa"]);
                console.log("Periodo: ",x["periodo"]);
                console.log("Responsabilidades: ",x["responsabilidades"]);
            }
        }
    }
}

