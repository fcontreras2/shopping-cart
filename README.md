Prueba de Carro de compra utilizando las tecnologías de desarrollo ReactJs y Redux.

*Puede ver Demo ingresando en el siguiente link: https://shopping-cart-fcontreras.herokuapp.com*

_Nota: Este servidor es de prueba y la primera carga tardara un poco._

## Contenido

- [Introducción](#introducción)
    - [Observaciones](#observaciones)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [ReactJs - Dependencias](#reactjs-dependencias)
- [Store](#store)
- [Datos de prueba](#datos-de-prueba)

## Introducción

El proyecto implementa la funcionalidades básicas de un carro de compra. Con fines realizar esta prueba se presenta como sistema ficticia *Photos Cart* donde su principal objetivo es la venta de fotografías e imágenes.
El sistema permitirá lo siguiente:
 - Realizar busqueda de productos por nombres.
 - Filtrado de productos por categorías.
 - Agregar o eliminar productos al carro de compra.
 - Agregar varios productos de un mismo tipo al carro de compras.
 - Visualizar los productos agregados al carro de compra.
 - Las busqueda se realiza por nombres del producto y el filtrado por la categoría del productos.

#### Observaciones
  - El enfoque del la prueba es mostrar la funcionalidad utilizando reactjs y redux, por esta razón se tiene un diseño básico.
  - La información a mostrar se recibe de un servidor de prueba.
  - No se cuenta con una sesion de usuario, pero se puede recordar los productos agregados al carro de compra.
  - Actualmente no se realiza el proceso de pago, solo se visualiza el precio total de la compra.

## Instalación
Para poder ejecutar el siguiente proyecto debe tener instalado: 
  - [GIT](https://git-scm.com/)
  - [NPM](https://www.npmjs.com/)

Luego debe ejecutar los siguientes comandos en la terminal:
 - `git clone git@github.com:fcontreras2/shopping-cart.git`
 - `cd shopping-cart`
 - `npm install`
 - `npm run start`

## Estructura del proyecto
```
  shopping-cart/
   public/...
   src/
    entries/
      cart/
        components/ ...
        containers/ ...
        layouts/ ...
      product/ ...
      search/ ...
      App.js
    shared/
      ...
    store/
      ...
    styles/
      ...
```

- entries: Contiene las vistas o entradas principales del sistema y el archivo App.js
    - cart: Vista carro de compra
        - components: Componentes funcionales utilizando únicamente en esta vista
        - containers: Componentes contenedores dentro de la vista
        - layouts: Componentes que solo son estructuras 
    - product: Vista de la información del productos
    - search: Vista principal donde se realizan las busquedas
    - App.js: Contenedor principal, donde se definen las rutas del sistema.
 - shared: Componentes que son reutilizados en el sistema.
 - store: Archivo y definición del store del sistema.
 - styles: Donde se definen configuraciones de estilos (fuentes, css-in-js compartidos, colores, etc)


## ReactJs - Dependencias

A continuación se muestras los dependencias utilizadas:

 - [create-react-app](https://github.com/facebook/create-react-app): Base del proyecto
 - [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom): Manejo de rutas.
 - [react-redux](https://github.com/reduxjs/react-redux): Implementacion de redux en React.
 - [react-jss](https://github.com/cssinjs/react-jss): Css en JavaScript.
 - [redux-thunk](https://github.com/reduxjs/redux-thunk): Permite realizar dispatch de manera asíncrona.
 - [react-lazyload](https://github.com/jasonslyvia/react-lazyload): Carga lazyload de las imágenes.
 - [react-helmet](https://github.com/nfl/react-helmet): Permite agregar meta description 
 Otros:
 - [normalizr](https://github.com/paularmstrong/normalizr): Normalizacion de datos.
 - [bootstrap](https://getbootstrap.com/): Utilizando para el manejo de grid.
 - [font-awesome](https://fontawesome.com/): Iconos del sistema.
 - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension): Inspeccionar el comportamiento del store


## Store
  El store cuenta con 4 secciones principales, donde cada una tiene una funcionalidad:

  - cart: Encargado del manejo de la información agregado al carro de compra.
  - filters: Filtros del sistema y la busqueda.
  - nav: Manejo del menú lateral en la versión responsive.
  - products: Manejo de la información de los productos y las categorías.

## Datos de prueba
  Para realizar utilizar datos de prueba se utilizo el siguiente repositorio: https://github.com/fcontreras2/shopping-cart-data como simulación de la conexión con el backend del sistema, basado en [json-server](https://github.com/typicode/json-server). Este servidor también se encuentra desplegado en un versión prueba de Heroku.

  El modelado de datos se realizo de la manera mas simple. El sistema cuenta con categorías, donde cada categoría tiene un listado de productos con sus descripciones. [Ver archivo](https://github.com/fcontreras2/shopping-cart-data/blob/master/db.json).

  Adicionalmente se debió realizar un ruta adicional `/search` permitiendo realizar las busquedas y los filtrados por categorías [Ver archivo](https://github.com/fcontreras2/shopping-cart-data/blob/master/server.js).