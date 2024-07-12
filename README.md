  #JAMMMING
  ---------

Proyecto de ejemplo
Vista previa del proyecto Jammming. Un usuario busca el nombre de un artista y agrega canciones extraídas de la API de Spotify a una lista de reproducción en la aplicación Jammming.

# Requerimientos del proyecto
Crea una aplicación web usando React
Controle la versión de su aplicación con Git y aloje el repositorio en GitHub
Integrar con Spotify u otra API
Implementa tu aplicación
Escriba un README (usando Markdown) que documente su proyecto, incluyendo:

# El propósito de su proyecto
-----------------------------
En este proyecto, crearás una aplicación web React llamada Jammming. Utilizarás tus conocimientos sobre componentes React, paso de estado y solicitudes con la API de Spotify para crear un sitio web que permita a los usuarios buscar en la biblioteca de Spotify, crear una lista de reproducción personalizada y luego guardarla en su cuenta de Spotify.

# Tecnologías utilizadas
------------------------
HTML
CSS
JavaScript
Reaccionar
Solicitudes y respuestas HTTP
Autenticación
React


# Trabajo futuro
1. Crear componentes estáticos
--------------------------------
Crea componentes para tu aplicación Jammming. Puedes estructurar tus componentes como creas conveniente, pero debes tener un componente que represente cada uno de estos componentes principales de la interfaz:

Aplicación
Barra de búsqueda
Resultados de la búsqueda
Lista de reproducción
Lista de canciones
Pista
Además, asegúrese de que su interfaz tenga un Save To Spotifybotón y un Searchbotón.

Por ahora, estos componentes deben ser estáticos y pueden contener datos ficticios. En este punto, debes concentrarte en cómo interactuarán tus componentes con los datos en lugar de en cómo recuperarán datos de las API (eso se realizará en una tarea posterior). Recuerda crear componentes reutilizables y mantenerlos pequeños.

Desde el punto de vista organizativo, no olvides mantener tu proyecto ordenado creando una carpeta para cada componente y manteniendo tus estilos separados con un módulo CSS para cada componente.

También puedes utilizar cualquier biblioteca que te ayude a crear funciones.

2. Implementar la lista de pistas en el árbol de componentes
------------------------------------------------------------

Cuando un usuario solicita datos de Spotify, la respuesta JSON contendrá un conjunto de pistas de canciones. Tu aplicación web Jammming debería mostrar el nombre de la canción, el artista y el álbum de cada pista en la lista de resultados.

Implemente esto creando un flujo de datos unidireccional desde su componente raíz. El componente raíz debe pasar los resultados de búsqueda a un componente secundario que devolverá cada pista individual que se va a renderizar.

Dado que la API de Spotify no está configurada actualmente para ser llamada, puedes codificar de forma fija una matriz de objetos de pista que se transmitirán por ahora.

Cosas a tener en cuenta:

Cada matriz codificada de objetos de pista debe contener una propiedad name, artist, albumy id.
Considere usar el estado para almacenar información como su matriz de resultados de búsqueda, lo que le permitirá actualizar la matriz en respuesta a las entradas del usuario y otros eventos.
Utilice el método de JavaScript map()para iterar sobre matrices y representar múltiples componentes dinámicamente.
Al devolver la lista de pistas, asegúrese de establecer un keyatributo único para cada pista. Esto ayudará a que React actualice el DOM de manera eficiente cuando se produzcan cambios.

# Características:

Los usuarios pueden buscar canciones por título de la canción.
También puedes incluir funcionalidad para buscar por otros atributos como nombre del artista, género, etc.
Los usuarios pueden ver información sobre cada canción, como el título, el artista y el álbum de las canciones que consultaron.
También puedes incluir otra información: el diseño lo decides tú.
Los usuarios pueden exportar su lista de reproducción personalizada a su cuenta personal de Spotify

