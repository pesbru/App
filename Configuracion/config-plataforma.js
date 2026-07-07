// --- 1) CONFIGURACIÓN DE LAS CUATRO VARIABLES DE RUTA BASE ---
const CONFIG_RUTAS = {
    Ruta1: "https://pesbru.github.io/App/",
    Ruta2: "", // Libre para uso futuro (Ej: "Lectura/")
    Ruta3: "", // Libre para uso futuro (Ej: "HTML COMPLEJO/")
    Ruta4: ""  // Libre para uso futuro
};

// --- 2) ESTRUCTURA DEL MENÚ (HASTA 3 NIVELES) ---
// Nota: Si un elemento usa una ruta base, pon el nombre de la variable en 'rutaBase' (ej: "Ruta1").
// Si el enlace es relativo normal o externo, deja 'rutaBase' vacío o no lo pongas.
const MENU_DATA = [

// LECTURA

   {titulo: "Lectura",
       submenus: [
           {titulo: "Lectura de texto",
                     url: "Lectura/Velocidad_Lectura.html", 
                    //rutaBase: "Ruta1"
           },

           {titulo: "Lectura de palabras",
                     url: "Lectura/Palabras_Sueltas.html", 
                    rutaBase: "Ruta1"
           },

           {titulo: "Comprensión",
                     url: "Lectura/Comprension.html", 
                    rutaBase: "Ruta1"
           },

       ]           


   },


//MATES

{
    titulo: "Matemáticas",
    submenus: [
        {
            titulo: "Fracciones",
            url: "Matematicas/Fracciones.html", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Problemas",
            url: "HTML/Test_Ayuda.html?config=M_Problemas&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Identificar cifras",
            // CORREGIDO: Apunta al ejecutable correcto, le pasa la lista de Mates y le dice dónde está el grupo
            url: "HTML/Test_Ayuda.html?config=M_Matematicas&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "La hora",
            url: "HTML/T_Imagenes.html?config=IM_Hora&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Redondeo",
            url: "Matematicas/XX.html", // CORREGIDO: "Matematicas" con ortografía uniforme
            rutaBase: "Ruta1"
        }
    ]
},

//LENGUA ESPAÑOLA

{
    titulo: "Lengua Española",
    submenus: [
        {
            titulo: "Adjetivos",
            url: "HTML/Test_Ayuda.html?config=L_Adjetivos&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },

        {
            titulo: "Análisis morfológico",
            url: "HTML/Test_Ayuda.html?config=L_AnalisisMorfologico&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Clasifica: análisis morfológico",
            url: "HTML/Clasifica.html?config=CL_L_AnalisisMorfologico&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        }
    ]
},



//INGLÉS

{
    titulo: "Inglés",
    submenus: [
        {
            titulo: "Partículas: On, In, At",
            url: "HTML/Test_Ayuda.html?config=I_Ingles&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Clasifica: Do, Go, Play",
            url: "HTML/Clasifica.html?config=CL_I_Ingles&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "La hora",
            url: "HTML/T_Imagenes.html?config=IM_I_Hora&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Vocabulario",
            url: "HTML/T_Imagenes.html?config=IM_I_Vocabulario&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        }
    ]
},



//FRANCÉS

{
    titulo: "Francés",
    submenus: [
        {
            titulo: "La hora",
            url: "HTML/T_Imagenes.html?config=IM_F_Hora&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        },
        {
            titulo: "Vocabulario",
            url: "HTML/T_Imagenes.html?config=IM_F_Vocabulario&rutaConfig=Grupos_Baterias", 
            rutaBase: "Ruta1"
        }
    ]
}





];



