// Modelo de Deportistas
const deportistas = {
    _id: "ObjectId", // Identificador único del deportista
    nombre_completo: "string", // Nombre completo del deportista
    edad: "number", // Edad del deportista
    nacionalidad: "string", // Nacionalidad
    equipo: "ObjectId", // Referencia al equipo
    posicion: "string", // Posición en el campo (Portero, Defensa, etc.)
    goles_anotados: "number", // Número de goles anotados
    tarjetas_amarillas: "number", // Tarjetas amarillas recibidas
    tarjetas_rojas: "number" // Tarjetas rojas recibidas
  };
  
  // Modelo de Entrenadores
  const entrenadores = {
    _id: "ObjectId", // Identificador único del entrenador
    nombre_completo: "string", // Nombre completo del entrenador
    edad: "number", // Edad
    nacionalidad: "string", // Nacionalidad
    equipo: "ObjectId", // Referencia al equipo que entrena
    experiencia: "string", // Años de experiencia
    titulos_ganados: "number" // Cantidad de títulos ganados
  };
  
  // Modelo de Árbitros
  const arbitros = {
    _id: "ObjectId", // Identificador único del árbitro
    nombre_completo: "string", // Nombre completo
    edad: "number", // Edad
    nacionalidad: "string", // Nacionalidad
    experiencia: "string", // Años como árbitro
    partidos_dirigidos: "number" // Total de partidos dirigidos
  };
  
  // Modelo de Equipos
  const equipos = {
    _id: "ObjectId", // Identificador único del equipo
    nombre_equipo: "string", // Nombre del equipo
    ciudad: "string", // Ciudad de origen
    pais: "string", // País de origen
    entrenador: "ObjectId", // Referencia al entrenador
    deportistas: ["ObjectId"] // Lista de referencias a jugadores
  };
  
  // Modelo de Encuentros Deportivos
  const encuentrosDeportivos = {
    _id: "ObjectId", // Identificador único del encuentro
    equipo_local: "ObjectId", // Referencia al equipo local
    equipo_visitante: "ObjectId", // Referencia al equipo visitante
    fecha: "date", // Fecha del encuentro
    hora: "string", // Hora del encuentro
    ubicacion: "string", // Ubicación (estadio o cancha)
    arbitro: "ObjectId", // Referencia al árbitro del encuentro
    resultado: {
      goles_local: "number", // Goles anotados por el equipo local
      goles_visitante: "number" // Goles anotados por el equipo visitante
    }
  };
  
  // Modelo de Tabla de Posiciones
  const tablaDePosiciones = {
    _id: "ObjectId", // Identificador único
    equipo: "ObjectId", // Referencia al equipo
    partidos_jugados: "number", // Total de partidos jugados
    partidos_ganados: "number", // Total de partidos ganados
    partidos_empatados: "number", // Total de partidos empatados
    partidos_perdidos: "number", // Total de partidos perdidos
    goles_a_favor: "number", // Total de goles a favor
    goles_en_contra: "number", // Total de goles en contra
    diferencia_goles: "number", // Diferencia de goles
    puntos: "number" // Puntos obtenidos
  };
  
  module.exports = {
    deportistas,
    entrenadores,
    arbitros,
    equipos,
    encuentrosDeportivos,
    tablaDePosiciones
  };
  