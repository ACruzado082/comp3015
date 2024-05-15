$.ajax({url: 'URL_API',
 // URL de la API
 method:'GET', // Método HTTP
 success: function(data) {
    console.log(data); // Manejar la respuesta exitosa
},error: 
     function(error) {console.log(error); // Manejar errores
    }});