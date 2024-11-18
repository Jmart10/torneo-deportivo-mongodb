  // Modelo de Equipos
  const equipos = {
    _id: "123", // Identificador único del equipo
    nombre_equipo: "Inter Miami", // Nombre del equipo
    ciudad: "Miami", // Ciudad de origen
    pais: "EEUU", // País de origen
    entrenador: "James Johnson", // Referencia al entrenador
    deportistas: ["1"] // Lista de referencias a jugadores
  };

// Modelo de Deportistas
const deportistas = {
    _id: "1", // Identificador único del deportista
    nombre_completo: "Lionel Messi", // Nombre completo del deportista
    edad: "36", // Edad del deportista
    nacionalidad: "Argentina", // Nacionalidad
    equipo: "123", // Referencia al equipo
    posicion: "Delantero", // Posición en el campo (Portero, Defensa, etc.)
    goles_anotados: "12", // Número de goles anotados
    tarjetas_amarillas: "2", // Tarjetas amarillas recibidas
    tarjetas_rojas: "0" // Tarjetas rojas recibidas
  };
  
  // Modelo de Entrenadores
  const entrenadores = {
    _id: "114", // Identificador único del entrenador
    nombre_completo: "Carlo Ancelotti", // Nombre completo del entrenador
    edad: "78", // Edad
    nacionalidad: "Italiana", // Nacionalidad
    equipo: "111", // Referencia al equipo que entrena
    experiencia: "25", // Años de experiencia
    titulos_ganados: "8" // Cantidad de títulos ganados
  };
  
  // Modelo de Árbitros
  const arbitros = {
    _id: "4568", // Identificador único del árbitro
    nombre_completo: "Wilmar Roldan", // Nombre completo
    edad: "46", // Edad
    nacionalidad: "Colombiana", // Nacionalidad
    experiencia: "22", // Años como árbitro
    partidos_dirigidos: "632" // Total de partidos dirigidos
  };
  

  
  // Modelo de Encuentros Deportivos
  const encuentrosDeportivos = {
    _id: "65489", // Identificador único del encuentro
    equipo_local: "123", // Referencia al equipo local
    equipo_visitante: "654", // Referencia al equipo visitante
    fecha: "2024-06-12", // Fecha del encuentro
    hora: "07pm", // Hora del encuentro
    ubicacion: "Miami", // Ubicación (estadio o cancha)
    arbitro: "4568", // Referencia al árbitro del encuentro
    resultado: {
      goles_local: "3", // Goles anotados por el equipo local
      goles_visitante: "2" // Goles anotados por el equipo visitante
    }
  };
  
  // Modelo de Tabla de Posiciones
  const tablaDePosiciones = {
    _id: "123564", // Identificador único
    equipo: "123", // Referencia al equipo
    partidos_jugados: "9", // Total de partidos jugados
    partidos_ganados: "6", // Total de partidos ganados
    partidos_empatados: "2", // Total de partidos empatados
    partidos_perdidos: "1", // Total de partidos perdidos
    goles_a_favor: "22", // Total de goles a favor
    goles_en_contra: "8", // Total de goles en contra
    diferencia_goles: "14", // Diferencia de goles
    puntos: "20" // Puntos obtenidos
  };
  
