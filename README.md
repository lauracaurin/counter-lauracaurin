# Contador React App

Este proyecto es una aplicación simple de contador hecha con React. El contador permite incrementar, decrementar y reiniciar el valor, con un límite superior de 10 y un límite inferior de 0. También incluye mensajes de advertencia cuando se alcanza el límite.

## Requisitos previos

- Node.js
- npm (Node Package Manager)

## Instrucciones para levantar la aplicación

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <nombre_del_directorio>

2. **Instalar dependencias**:
    ```bash
    npm install

3. **Levantar el servidor de desarrollo**:
    ```bash
    npm start

Esto abrirá la aplicación en tu navegador por defecto en http://localhost:3000.

## Estructura del Proyecto

- **src/**: Contiene todos los archivos de componentes de React.
- **styles/**: Contiene los archivos SCSS para los estilos de la aplicación.

## Estructura del Código

El proyecto está organizado en diferentes componentes:

- **App.js**: Componente principal que renderiza el encabezado y el contador.
- **Header.js**: Componente de encabezado de la página.
- **Counter.js**: Componente que maneja la lógica del contador y la visualización de los botones.
- **Message.js**: Componente que maneja la visualización de los mensajes de advertencia.
- **Buttons.js**: Componente que renderiza los botones (Incrementar, Decrementar, Reiniciar).
- **CounterDisplay.js**: Componente que muestra el contador en forma de círculo.

## Estilos

La aplicación utiliza **SASS** para los estilos y está estructurada siguiendo el enfoque de diseño **Mobile-First**. Los estilos están organizados en diferentes archivos SCSS que se importan en el archivo principal `App.scss`.

### Estructura SCSS:

- **Variables**: Define los colores, fuentes y otros valores constantes.
- **Mixins**: Reglas reutilizables como `tablet` o `desktop` para facilitar la adaptación a diferentes tamaños de pantalla.
- **Componentes**: Cada componente tiene su propio conjunto de reglas de estilo, como `header`, `counter`, `buttons`, etc.

## Mejoras Sugeridas

1. **Manejo de Errores**: El manejo de errores en los botones es básico. Se podría mejorar con validaciones más específicas y retroalimentación visual más destacada, como usar iconos o colores más visibles en los mensajes de error.

2. **Responsividad**: Aunque se sigue un enfoque mobile-first, es necesario realizar más pruebas en diferentes dispositivos para garantizar una experiencia óptima en tablets y móviles. Usar unidades relativas como `rem` o `em` puede mejorar la adaptabilidad.

3. **Estilos**: Se podría organizar mejor el uso de variables SCSS para facilitar la reutilización. Además, se pueden crear mixins para funcionalidades comunes, reduciendo la repetición de código.

4. **Accesibilidad**: Es recomendable agregar atributos `aria-label` en los botones y mejorar los estilos de enfoque (`focus`) para facilitar la navegación a los usuarios con discapacidades.

5. **Uso de Librerías de Componentes (Material UI o Bootstrap)**: Considerar la integración de librerías como **Material UI** o **Bootstrap** para optimizar el desarrollo y mejorar la consistencia visual.

## Tecnologías Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **SASS**: Preprocesador CSS para mejorar la organización de los estilos.
- **npm**: Gestor de paquetes para instalar las dependencias.

## Autor

Laura Caurín
