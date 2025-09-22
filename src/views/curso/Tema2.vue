<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tabulación, cuadro de frecuencias y construcción de gráficos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La tabulación, los cuadros de frecuencias y los gráficos estadísticos, son herramientas esenciales en la estadística descriptiva, pues facilitan organizar, resumir y presentar datos de manera clara y comprensible, permitiendo su análisis y la toma de decisiones en el ámbito empresarial.
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tablas de frecuencias para datos agrupados y no agrupados

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-1
        p(data-aos="fade-left") Se continúa con el estudio de la tabulación de datos, donde una tabla de frecuencias se puede definir como una herramienta que permite organizar y resumir los datos de una variable, mostrando la cantidad de observaciones que corresponden a cada categoría o valor. Las tablas de frecuencias pueden ser para datos no agrupados, cuando la variable tiene pocos valores distintos, o para datos agrupados, cuando la variable tiene muchos valores y se requiere agruparlos en intervalos (Llinás Solano, 2017).
        p(data-aos="fade-left") Romero Ramos (2016) explica que:


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0
    
        AcordionA(tipo="b")
          .div(titulo="Una tabla de frecuencias para datos no agrupados")
            p Consta de dos columnas: la primera indica los valores o categorías de la variable, y la segunda muestra la frecuencia absoluta, es decir, la cantidad de observaciones para cada valor. Además, se pueden calcular la frecuencia relativa (proporción de observaciones de cada valor respecto al total) y la frecuencia acumulada (suma de las frecuencias hasta cada valor).
          .div(titulo="Una tabla de frecuencias para datos agrupados")
            p Presenta los intervalos de clase en la primera columna, y las frecuencias absolutas, relativas y acumuladas en las siguientes columnas.
          
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejemplo y ejercicios 
            p.mb-4(data-aos="fade-right") La construcción y análisis de tablas de frecuencias son herramientas esenciales en estadística descriptiva, ya que permiten organizar y visualizar datos de manera efectiva, facilitando la identificación de patrones y tendencias. En el PDF <b>Ejemplo y ejercicios</b>, se incluyen casos prácticos que ilustran el proceso de elaboración de tablas de frecuencias para datos agrupados y no agrupados, así como el cálculo de frecuencias absolutas y relativas. Además, se presentan ejercicios resueltos que aplican estas técnicas a situaciones empresariales reales, ofreciendo una guía para el análisis exploratorio y la interpretación de resultados.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo y ejercicios.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Gráficos estadísticos

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        p(data-aos="fade-left") Se puede decir que los gráficos estadísticos son representaciones visuales de los datos que permiten identificar patrones, tendencias y relaciones entre las variables, de manera rápida y efectiva. Existen diversos tipos de gráficos, cada uno adecuado para diferentes tipos de datos y propósitos. A continuación, se describen algunos de los gráficos más utilizados en la estadística descriptiva (Puente Viedma, 2018).
        p(data-aos="fade-left") Según Proaño Rivera (2020):
    
    .bg-full-width-2.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Gráficos de barras
              p Se utilizan para representar datos categóricos o discretos, y consisten en barras rectangulares cuya altura o longitud es proporcional a la frecuencia o valor de cada categoría.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Gráficos de sectores
              p También conocidos como gráficos de pastel o torta, se utilizan para representar la proporción o porcentaje que cada categoría representa respecto al total.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Histogramas
              p Se utilizan para representar la distribución de una variable continua, y consisten en barras adyacentes que representan la frecuencia de los datos en cada intervalo de clase.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Polígonos de frecuencia
              p Son similares a los histogramas, pero en lugar de barras, utilizan una línea que conecta los puntos medios de la parte superior de cada barra.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Diagramas de dispersión
              p Se utilizan para representar la relación entre dos variables numéricas, donde cada punto representa un par de valores (x, y) de las variables.
    
    p.mb-4 Por ejemplo, supongamos que una empresa de telecomunicaciones quiere analizar la satisfacción de sus clientes con el servicio de Internet. Para ello, realiza una encuesta a una muestra de 500 clientes, preguntando sobre su nivel de satisfacción en una escala del 1 al 5, donde 1 es muy insatisfecho y 5 es muy satisfecho. Los resultados se muestran en la siguiente tabla:

    .row.mb-5
      .col-lg-5
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Clasificación de la contabilidad

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-5 Nivel de satisfacción
                th.bg-color-5 Frecuencia
            tbody
              tr
                td 1
                td 30
              tr
                td 2
                td 50
              tr
                td 3
                td 120
              tr
                td 4
                td 200
              tr
                td 5
                td 100
              tr
                td Total
                td 500
      .col-lg-7
        div.p-5.bg-color-5
          h5 Para representar estos datos, se podrían utilizar diferentes tipos de gráficos:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 Un gráfico de barras mostraría la frecuencia de cada nivel de satisfacción, permitiendo identificar rápidamente que el nivel 4 es el más frecuente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 Un gráfico de sectores mostraría la proporción que representa cada nivel de satisfacción con respecto al total, permitiendo ver que el 40 % de los clientes están muy satisfechos (nivel 4), mientras que solo el 6% están muy insatisfechos (nivel 1).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 Un histograma mostraría la distribución de los niveles de satisfacción, permitiendo ver que la mayoría de los datos se concentran en los niveles 3 y 4, y que hay relativamente pocos clientes en los niveles extremos (1 y 5).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 Un polígono de frecuencia mostraría la forma de la distribución de los niveles de satisfacción, permitiendo ver que la distribución es asimétrica hacia la derecha (niveles altos de satisfacción).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, si se quisiera analizar la relación entre el nivel de satisfacción y otra variable, como la antigüedad del cliente o el plan contratado, se podría utilizar un diagrama de dispersión. Por ejemplo, se podría graficar el nivel de satisfacción en el eje Y, y la antigüedad en meses en el eje X, donde cada punto representaría a un cliente. Esto permitiría ver si existe una relación positiva (a mayor antigüedad, mayor satisfacción), negativa (a mayor antigüedad, menor satisfacción) o nula entre las variables.
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En resumen, los gráficos estadísticos son una herramienta poderosa para explorar, analizar y comunicar los datos de manera visual y efectiva. La elección del tipo de gráfico dependerá del tipo de variable, el propósito del análisis y el mensaje que se quiera transmitir a la audiencia.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Principios para la visualización efectiva de datos en la empresa

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
            p.mb-0 Se puede afirmar que la visualización de datos es un aspecto fundamental en la comunicación de los resultados del análisis estadístico en las empresas. Una visualización efectiva permite transmitir información compleja de manera clara, concisa y persuasiva, facilitando la toma de decisiones basada en evidencia. Sin embargo, para lograr una visualización efectiva, es necesario seguir algunos principios básicos (Romero Ramos, 2016).
        p(data-aos="fade-left") Según Llinás Solano (2017), algunos de los principios más importantes para la visualización efectiva de datos en las empresas son:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/14.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="4%" y="74.5%" numero="+")
                h5 01. Conocer a la audiencia
                p Antes de crear una visualización, es necesario entender quién es el público objetivo, cuáles son sus necesidades y expectativas, y qué nivel de conocimiento tienen sobre el tema. Esto permitirá adaptar el mensaje y el formato de la visualización a las características de la audiencia.
    
              .bg-color-white.box-shadow.p-3(x="4%" y="39%" numero="+")
                h5 02. Seleccionar el tipo de gráfico adecuado
                p Cada tipo de gráfico tiene un propósito específico y se adecua mejor a ciertos tipos de datos. Por ejemplo, los gráficos de barras son ideales para comparar categorías, mientras que los gráficos de líneas son mejores para mostrar tendencias a lo largo del tiempo. Es importante elegir el tipo de gráfico que mejor comunique el mensaje principal de los datos.
    
              .bg-color-white.box-shadow.p-3(x="16%" y="12%" numero="+")
                h5 03. Usar un diseño simple y claro
                p Una visualización efectiva debe ser fácil de entender a primera vista. Esto implica usar un diseño limpio, con pocos elementos distractores, y resaltar los aspectos más importantes de los datos. Se deben evitar los gráficos recargados, con demasiados colores o efectos visuales innecesarios.
    
              .bg-color-white.box-shadow.p-3(x="83%" y="12%" numero="+")
                h5 04. Incluir contexto y explicaciones
                p Los datos por sí solos no siempre son suficientes para transmitir un mensaje. Es necesario proporcionar contexto sobre la fuente de los datos, las unidades de medida, las limitaciones o supuestos del análisis, y cualquier otra información relevante para la interpretación de los resultados. Además, se deben incluir títulos, etiquetas y leyendas claras y descriptivas.
    
              .bg-color-white.box-shadow.p-3(x="95.5%" y="39%" numero="+")
                h5 05. Usar colores y formatos consistentes
                p El uso consistente de colores, fuentes y formatos en todas las visualizaciones de un informe o presentación ayuda a crear una identidad visual coherente y facilita la navegación y comprensión de la información. Se deben elegir colores que sean fácilmente distinguibles y que tengan un significado intuitivo (por ejemplo, rojo para valores negativos, verde para positivos).
              .bg-color-white.box-shadow.p-3(x="95.5%" y="75%" numero="+")
                h5 06. Permitir la interactividad cuando sea relevante
                p En algunos casos, las visualizaciones estáticas pueden ser suficientes para comunicar un mensaje. Sin embargo, en otros casos, permitir la interactividad puede enriquecer la experiencia del usuario y facilitar la exploración de los datos. Por ejemplo, se pueden usar filtros, zoom o selección de elementos para personalizar la visualización según los intereses del usuario.
    
    p.mb-4 Por ejemplo, supongamos que un analista de recursos humanos debe presentar un informe sobre la diversidad de género en la empresa a la junta directiva. Para crear una visualización efectiva, podría seguir los siguientes pasos:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0
    
        AcordionA(tipo="b")
          .div(titulo="Conocer a la audiencia")
            p La junta directiva está interesada en conocer el estado actual de la diversidad de género y las brechas existentes, para tomar decisiones estratégicas al respecto.
          .div(titulo="Seleccionar el tipo de gráfico adecuado")
            p Un gráfico de barras apiladas, podría ser adecuado para mostrar la proporción de hombres y mujeres en cada nivel jerárquico de la empresa.
          .div(titulo="Usar un diseño simple y claro")
            p El gráfico debe tener un título descriptivo (por ejemplo, "Distribución de género por nivel jerárquico"), etiquetas claras en los ejes X y Y, y una leyenda que identifique los colores utilizados para cada género.
          .div(titulo="Incluir contexto y explicaciones")
            p Se debe indicar la fuente de los datos (por ejemplo, sistema de nómina), la fecha de corte, y cualquier consideración relevante (por ejemplo, solo se incluyen empleados de tiempo completo). Además, se podría incluir una breve interpretación de los resultados (por ejemplo, "se observa una menor representación de mujeres en los niveles directivos").
          .div(titulo="Usar colores y formatos consistentes")
            p Se podrían usar los colores azul y rojo para representar a hombres y mujeres, respectivamente, y mantener el mismo formato (fuente, tamaño, estilo) en todo el informe.
          .div(titulo="Permitir la interactividad cuando sea relevante")
            p Se podría crear una versión interactiva del gráfico, que permita filtrar los datos por departamento o región, para que los directivos puedan explorar la diversidad de género en diferentes áreas de la empresa.

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En resumen, la visualización efectiva de datos es un aspecto clave para comunicar los resultados del análisis estadístico en las empresas. Al seguir principios básicos de diseño, selección de gráficos y contextualización, se pueden crear visualizaciones que transmitan mensajes claros y persuasivos, y que faciliten la toma de decisiones basada en evidencia.
    

    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Aplicación práctica 2 
            p.mb-4(data-aos="fade-right") El análisis de datos es una herramienta esencial para comprender el desempeño y las tendencias dentro de una organización. En el PDF <b>Aplicación práctica 2</b>, se presentan ejemplos detallados sobre cómo realizar un análisis estadístico de ventas y tendencias en una empresa de comercio electrónico. A través de la elaboración de tablas, gráficos y un informe ejecutivo, se demuestra cómo transformar datos en información estratégica, identificar patrones clave y proponer acciones basadas en evidencia para mejorar la toma de decisiones. Este documento ilustra la importancia de las herramientas estadísticas para optimizar el rendimiento comercial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicación práctica 2.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://openstax.org/books/introducci%C3%B3n-estad%C3%ADstica/pages/1-3-frecuencia-tablas-de-frecuencia-y-niveles-de-medicion" target="_blank" rel="noopener noreferrer") OpenStax. (s. f.). Frecuencia, tablas de frecuencia y niveles de medición. En Introducción a la estadística. Recuperado el 27 de enero de 2025, de
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.13042/Bordon.2022.94121" target="_blank" rel="noopener noreferrer") González Sánchez, D., Cox, F. T., Magreñán, Á. A., & Orcos, L. (2022). Enseñanza de estadística descriptiva mediante el uso de simuladores y laboratorios virtuales en la etapa universitaria. Bordón. Revista de Pedagogía, 74(4), 103-123. 

      

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/eFwNKbiDqOo" target="_blank" rel="noopener noreferrer") As Al. (2015, 3 de julio). Tabla de frecuencia con datos agrupados (cómo realizarlo) [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9G4HPNVA5w4?si=g7FXqTzdof4xLPne " target="_blank" rel="noopener noreferrer") Matemáticas profe A. (2021).  Tipos de gráficos estadísticos [Video]. YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
