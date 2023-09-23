//Para obtener los datos de la API 
fetch('https://dummyjson.com/users?limit=100')
  .then(response => response.json())
  .then(data  => {
    const users = data.users;
    
//Funcion map
    const edades = users.map(persona => persona.age);
    const sumaEdades = edades.reduce((total, edad) => total + edad, 0);
    const promedioEdades = sumaEdades / edades.length;

//Filtro para mayores de 18
    const personasMayores = users.filter(persona => persona.age >= 18);
    const personasMenores = users.filter(persona => persona.age < 18);

//Filtro para genero masculino
    const cantidadMasculino = users.filter(persona => persona.gender === 'male').length;

//Filtro para genero femenino
    const cantidadFemenino = users.filter(persona => persona.gender === 'female').length;

    console.log(`La cantidad de personas mayores de 18 años es de: ${personasMayores.length}`);
    console.log(`La cantidad de personas menores de 18 años es de: ${personasMenores.length}`);
    console.log(`El promedio de las edades es de: ${promedioEdades}`);
    console.log(`Personas de género masculino: ${cantidadMasculino}`);
    console.log(`Personas de género femenino: ${cantidadFemenino}`);
    console.log(`La cantidad de usuarios encuestados es de: ${users.length}`);

//Funcion forEach
users.forEach(persona => {
    console.log(`Nombre completo: ${persona.firstName} ${persona.lastName}`);
    console.log(`Edad: ${persona.age} años`);
    console.log(`Género: ${persona.gender}`);
    console.log(`Email: ${persona.email}`);
    console.log(`Teléfono: ${persona.phone}`);
    console.log('---'); // Separacion de usuarios
})
  })
//Para manejar errores que puedan ocurrir al pedir datos a traves de la API
  .catch(error => console.error('Hubo un error al obtener los datos:', error));

