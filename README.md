# Proyecto eCommerce para CoderHouse - curso React.JS
## Nivelación & Instalación y configuración del entorno
***
Se presento desafio por instalacion de React con CLI
***

## JSX & transpiling & Components I
***
Dentro src se creo una carpeta llamada "components", que contiene a NavBar.js, con el objetivo de crear una barra de navegacion simple (brand + menu clickeable)

Se incorpora [Semantic UI v2.0.3](https://react.semantic-ui.com/)
***

Se crea un component CartWidget.js con un icono y se lo ubica en navbar. Luego se crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra un mensaje dentro del contenedor. 
***

## Components II & Promises, asincronía y MAP
***
Para ordenar el proyecto, a medida que se tienen nuevos desafios, se hace una reestructuracion del proyecto.
1. El ItemListContainer con la prop greeting se reemplaza por un componente Greeting.js que si bien esta dentro del directorio /Header, se importa debajo del componente NavBar.js en App.js
2. ItemListContainer se deja solo para mostrar el listado de productos.
3. El listado de productos se levanta dentro del componente ItemList.js
4. Los productos se muestran con el componente Item.js, adoptando los estilos provistos por el componente Card propio de Semantic UI.

Para el desafío de **CONTADOR CON BOTON** se deja el mismo dentro del directorio Hooks/Counter/StockCounter.js y se pasa una prop de 5 productos inStock para condicional de agregar productos y una condicion para no decrementar productos negativos. 

Para el desafío **CATÁLOGO CON MAPS Y PROMISE** se arma una API con productos simulados, subidos a [MockIo](https://mocki.io/) para obtener el endpoint y hacer el llamado por promise y fetch. Se establece una carga diferida de 2s para emular retrasos en carga. 

[API testing](https://mocki.io/v1/9352f289-882b-4ee8-bbb4-38f7f0cdfd3a)

***
