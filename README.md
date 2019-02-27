# BoreamCampus Player

En esta ocasión vamos a utilizar las APIs de HTML5 como la de video o localStorage, para tratar
de crear un reproductor de video. 

Contaremos con una lista de videos que podrán ser reproducidos y añadidos a una lista 
de favoritos, la cual debe almacenarse en el local o sesión storage.

Como siempre, ayudate del código base y de las búsquedas que necesites para lograr
completar todas las iteraciones posibles!


#Iteración 1

En primer lugar, observa el código base para ver como esta estructurado. 
Como puedes ver, tenemos una lista con los nombres de los videos que utilizara el reproductor.

Dicha lista, se recorre para crear los elementos del DOM necesarios para representar
las listas de reproducción y el video actual. 

En esta primera iteración debés asignar el valor a las variables localStorage y sessionStorage
declaradas al principio del fichero. Facil y rapido!

#Iteración 2

En esta iteración debemos hacer que el video actual pueda ser reproducido y pausado mediante
los botones creados para ello. Debes enlazar el evento click de cada botón con 
las funciones playVideo y pauseVideo y realizar la acción descrita en cada una de ellas.
 
#Iteración 3

Para esta iteración debemos hacer funcionar el botón de Añadir a Favoritos. Dicho botón 
debe llamar a la función addToFavorites la cual realiza las siguientes tareas:
 - Trae los favoritos almacenados en local/sesion storage y los guarda en la variable favorites.
 - Añade el video del actualId al array favorites.
 - Sobreescribe la key favorites de sesion/local storage con el nuevo valor del array
 favorites.
 - Llama a la función que crea los elementos del DOM necesarios para representar el nuevo Favorito.
  
#Iteración 4

Por último, cambia la manera de almacenar los favoritos. Si los has almacenado en localStorage, almacenalos en sessionStorage y 
viceversa. Observa los cambios de comportamiento entre utilizar uno y otro!

#Bonus

Crea un botón "Reproducir Todos" que llame a una nueva función que se encargue de reproducir 
todos los vídeos seguidos, además cuando el último video finalice debe emitir un alert advirtiendo al usuario
de que la lista de reproducción acabó.

#Bonus 2

Modifica los estilos y forma de crear los elementos dinámicos de manera que personalices 
a tu gusto el reproductor!


Mucho ánimo y mucha suerte!
