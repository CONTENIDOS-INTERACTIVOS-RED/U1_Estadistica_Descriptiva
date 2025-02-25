<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Medidas de tendencia central y de posición'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Ahora se abordarán las medidas de tendencia central y de posición, que son dos de los conceptos fundamentales en estadística. Veamos cada uno de ellos con mayor profundidad.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Concepto de tendencia central

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        p La idea central detrás del concepto de tendencia central, es capturar una medida que represente un valor "típico" o "promedio" de un conjunto de datos. Dicho de otra manera, una medida de tendencia central nos permite resumir, en un solo número, lo que es representativo de una serie de números.
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Existen varias formas de calcular la tendencia central de un conjunto de datos, siendo las más comunes la media, la mediana y la moda. Cada una de estas medidas enfatiza diferentes aspectos o características de la distribución de los datos.
        p(data-aos="fade-left") Según Proaño Rivera (2020), la elección de la medida apropiada de tendencia central, depende del tipo de datos (cuantitativos o cualitativos), de la forma de la distribución (simétrica o asimétrica), de la presencia de valores extremos o atípicos, y del nivel de medición de la variable (nominal, ordinal, intervalar o de razón). Por ejemplo:
    
    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/3.svg" alt="" style="width: 90px")
              h5.text-center La media
              p.mb-0.text-center Es apropiada para datos cuantitativos intervalares o de razón, con una distribución simétrica y sin valores extremos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/4.svg" alt="" style="width: 90px")
              h5.text-center La mediana
              p.mb-0.text-center Es adecuada cuando hay valores extremos que podrían distorsionar la media, o cuando los datos son ordinales.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/5.svg" alt="" style="width: 90px")
              h5.text-center La moda 
              p.mb-0.text-center Se usa principalmente para datos cualitativos nominales.

    p.mb-4 Veamos un ejemplo aplicado a la administración de empresas:

    .row.align-items-start.mb-5
      .col-lg-4mb-3.mb-lg-0.order-.order-lg-2
        figure
          img(src="@/assets/curso/tema3/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p Supongamos que una empresa de tecnología quiere conocer el salario promedio de sus ingenieros de software, para compararlo con el mercado laboral y ajustar su política de compensaciones. Para ello, recopila los salarios mensuales de sus 10 ingenieros:
            p $4,000 - $4,500 - $5,000 - $5,000 - $5,500 - $6,000 - $6,000 - $6,500 - $7,000 - $10,000
    
          .div(titulo="Segundo")
            p A primera vista, se observa que la distribución de los salarios es asimétrica hacia la derecha (salarios altos), y que hay un valor extremo ($10,000) que podría distorsionar el promedio. En este caso, sería más apropiado utilizar la mediana como medida de tendencia central, ya que es menos sensible a los valores extremos y representa el salario del ingeniero "típico" o "medio".
          .div(titulo="Tercero")
            p Para <b>calcular la mediana</b>, primero ordenamos los salarios de menor a mayor:
            p $4,000 - $4,500 - $5,000 - $5,000 - $5,500 - $6,000 - $6,000 - $6,500 - $7,000 - $10,000
          .div(titulo="Cuarto")
            p Como hay un número par de observaciones (10), la mediana se calcula promediando los dos valores centrales (posiciones 5 y 6):
            p Mediana = ($5,500 + $6,000) / 2 = $5,750
          .div(titulo="Quinto")
            p Entonces, el salario mediano de los ingenieros de software en esta empresa, es de $5,750 mensuales. Esta cifra representa mejor el salario "típico" que la media aritmética ($6,000), que estaría sesgada hacia arriba por el valor extremo de $10,000.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este ejemplo ilustra la importancia de elegir la medida de tendencia central adecuada según las características de los datos, para obtener un resumen representativo y no distorsionado de la distribución. 
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A continuación, profundizaremos en el cálculo e interpretación de las tres medidas de tendencia central más utilizadas: media, mediana y moda.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Cálculo e interpretación de la media, mediana y moda

    p.mb-4 La media, mediana y moda, son las tres medidas de tendencia central más comunes. Cada una se calcula de manera diferente y tiene una interpretación específica. Es importante entender sus propiedades y limitaciones para usar la medida apropiada en cada situación. 

    h2(data-aos="fade-left") Media aritmética

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p La media aritmética, o simplemente media, es la medida de tendencia central más conocida y utilizada. Se calcula sumando todos los valores de un conjunto de datos y dividiendo el resultado entre el número total de observaciones. 
        p Su fórmula es:
        figure.mb-3
          img(src="@/assets/curso/tema3/24.svg", data-aos="zoom-in")
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p La principal ventaja de la media es que toma en cuenta todos los valores de la distribución. Sin embargo, es muy sensible a los valores extremos o atípicos, que pueden sesgar o distorsionar el resultado.
        p <b>Interpretación:</b> la media representa el valor promedio de un conjunto de datos. En términos prácticos, si repartieran equitativamente la suma total de los valores entre todas las observaciones, cada una recibiría la cantidad de la media.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Ejemplo y ejercicio resuelto 1 
            p.mb-4(data-aos="fade-right") El cálculo de promedios es una técnica fundamental en estadística descriptiva, ya que permite resumir conjuntos de datos de manera sencilla y efectiva. En el PDF <b>Ejemplo y ejercicio resuelto 1</b>, se exploran casos prácticos que ilustran el proceso de cálculo e interpretación de la media aritmética en diferentes contextos empresariales. A través de ejemplos claros y ejercicios resueltos, se muestra cómo esta herramienta puede ser utilizada para analizar datos de ventas, edades y otras variables, facilitando la toma de decisiones informadas basadas en el comportamiento promedio de los datos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo y ejercicio resuelto 1.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/10.png', alt='')

    h2(data-aos="fade-left") Mediana
    p La mediana es el valor central de un conjunto de datos cuando estos se ordenan de menor a mayor. Si el número de observaciones es impar, la mediana es el valor que se encuentra exactamente en el medio. Si el número de observaciones es par, la mediana se calcula promediando los dos valores centrales.
    p.mb-5 Para calcular la mediana: 

    .row.mb-3
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 75px").mx-auto
                .col-lg
                  h5.mb-0 Primero
                  p.mb-0 Ordenar los datos de menor a mayor.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 75px").mx-auto
                .col-lg
                  h5.mb-0 Segundo
                  p.mb-0 Identificar el valor central:
        div.p-4.bg-color-7
          p Si el <b>número de observaciones es impar</b>, la mediana es el valor de la posición 
          figure.mb-3.mb-3.d-flex.justify-content-center
            img(src="@/assets/curso/tema3/25.svg", data-aos="zoom-in", style="max-width: 200px")
          p Si el <b>número de observaciones es par</b>, la mediana es el promedio de los valores en las posiciones 
          figure.mb-3.mb-3.d-flex.justify-content-center
            img(src="@/assets/curso/tema3/26.svg", data-aos="zoom-in", style="max-width: 200px")
          p.mb-0 <b>x</b> = lista ordenada de valores del conjunto de datos.
          p.mb-0 <b>n</b> = número de valores del conjunto de datos.

        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 La mediana es una medida robusta, dado que no se ve afectada por los valores extremos. Es preferible a la media cuando la distribución es muy asimétrica o hay valores atípicos.
    p.mb-5 <b>Interpretación:</b> la mediana divide un conjunto de datos en dos partes iguales, de modo que el 50 % de las observaciones son menores o iguales a la mediana, y el otro 50 % son mayores o iguales.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Ejemplo y ejercicio resuelto 2 
            p.mb-4(data-aos="fade-right") La identificación y delimitación de problemas de investigación es una etapa clave en el diseño de cualquier proyecto investigativo, ya que permite establecer un marco claro y específico para abordar cuestiones relevantes y factibles dentro de un contexto definido. En el PDF <b>Ejemplos prácticos</b> se presentan ejemplos prácticos que ilustran cómo transformar observaciones generales en problemas de investigación delimitados, considerando aspectos como el contexto, la población objetivo, el período de estudio y las variables específicas a analizar. Estos ejercicios buscan proporcionar herramientas metodológicas a investigadores, estudiantes y profesionales interesados en desarrollar investigaciones con enfoques precisos y objetivos claros. A través de ejemplos aplicados a diversos campos como la publicidad digital, la educación, el medio ambiente y la percepción social, se exploran estrategias para formular problemas de investigación que sean manejables y significativos, contribuyendo así al desarrollo de conocimiento riguroso y útil.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplo y ejercicio resuelto 2.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='')
    
    h2(data-aos="fade-left") Moda
    p.mb-5 La moda es el valor que ocurre con mayor frecuencia en un conjunto de datos. Una distribución puede tener una moda (unimodal), dos modas (bimodal), más de dos modas (multimodal) o ninguna moda (amodal).

    .row.mb-3
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-1
        p La moda se puede calcular para datos cualitativos y cuantitativos, y es la única medida de tendencia central aplicable a datos nominales.
        p Para identificar la moda:

        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 75px").mx-auto
                .col-lg
                  h5.mb-0 Primero
                  p.mb-0 Contar la frecuencia de cada valor.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 75px").mx-auto
                .col-lg
                  h5.mb-0 Segundo
                  p.mb-0 Identificar el valor o valores con la mayor frecuencia.
        
        p <b>Interpretación:</b> la moda representa el valor más común o típico en una distribución. Es útil para describir datos categóricos o para identificar el valor más popular.
        p Ejemplos:

        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-4.p-4.mb-3.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 75px").mx-auto
                .col-lg
                  p.mb-0 En una encuesta sobre marcas de teléfonos celulares, la moda sería la marca más mencionada por los participantes.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-4.p-4.mb-3.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/11.svg", style="max-width: 75px").mx-auto
                .col-lg
                  p.mb-0 En un estudio sobre el color favorito de los clientes, la moda sería el color preferido por la mayoría.
    
    div.bg-color-7.p-4
      .row
        .col-lg-6
          p Ejercicio resuelto:
          p Encontrar la moda de los siguientes números: 2, 5, 8, 2, 9, 5, 2, 5, 8, 5.
          p Solución:
          p 1. Contar la frecuencia de cada valor:
          p - 2 aparece 3 veces
          p - 5 aparece 4 veces 
          p - 8 aparece 2 veces
          p - 9 aparece 1 vez
        .col-lg-6
          p 2. Identificar el valor con la mayor frecuencia:
          p Moda = 5
          p.mb-5 <b>Interpretación:</b> el valor más frecuente en el conjunto de datos es 5.
          figure
            img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")

    .bg-color-5.p-4.mb-5(data-aos="fade-left")
      p.mb-0 En resumen, la media, mediana y moda son medidas que nos permiten resumir y representar un conjunto de datos. Cada una tiene sus propiedades, ventajas y limitaciones, por lo que es importante elegir la medida apropiada según el tipo de datos, la forma de la distribución y el propósito del análisis. En la práctica, es común reportar las tres medidas para tener una visión más completa de la tendencia central y la variabilidad de los datos.      

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Cuartiles, deciles y percentiles
    
    p.mb-4 Una vez que hemos visto las medidas de tendencia central, pasemos a las medidas de posición. Estas nos permiten ubicar un valor en relación con el resto de los datos, dividiendo la distribución en partes iguales. Las medidas de posición más comunes son los cuartiles, los deciles y los percentiles.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Cuartiles, deciles y percentiles 
            p.mb-4(data-aos="fade-right") Los cuartiles, deciles y percentiles son medidas de posición que permiten analizar la distribución de datos dividiéndolos en partes iguales, proporcionando información valiosa sobre su dispersión y comportamiento. En el PDF <b>Cuartiles, deciles y percentiles</b>, se explican los conceptos fundamentales y se presentan ejemplos prácticos para calcular e interpretar estas medidas en distintos contextos, como calificaciones, salarios o puntuaciones en pruebas. A través de ejercicios resueltos, se demuestra cómo estas herramientas pueden ayudar a identificar patrones, comparar grupos y tomar decisiones informadas basadas en la ubicación relativa de los datos en una distribución.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cuartiles, deciles y percentiles.
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/16.png', alt='')
    
    p.mb-5 Para recapitular, los cuartiles, deciles y percentiles, son herramientas poderosas para explorar y comprender la distribución de un conjunto de datos. Nos permiten dividir los datos en grupos iguales y ubicar valores específicos en relación con el resto de la distribución. 

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        h5.mb-5 Algunas ideas clave para recordar:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
              p.mb-0.text-center Los cuartiles dividen la distribución en 4 partes iguales, los deciles en 10 partes iguales, y los percentiles en 100 partes iguales.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
              p.mb-0.text-center El segundo cuartil (Q2), el quinto decil (D5) y el percentil 50 (P50) son equivalentes a la mediana.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
              p.mb-0.text-center Estos conceptos son aplicables a muchos campos, desde los negocios y la educación hasta la salud y las políticas públicas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/17.svg" alt="" style="width: 90px")
              p.mb-0.text-center Siempre es importante considerar el contexto y las unidades de medida al interpretar estas medidas de posición.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Aplicación práctica cuartiles, deciles y percentiles 
            p.mb-4(data-aos="fade-right") Las medidas de posición, como los cuartiles, deciles y percentiles, permiten un análisis más detallado de la distribución de datos, facilitando la toma de decisiones en diversos ámbitos. En el PDF <b>Aplicación práctica cuartiles, deciles y percentiles</b>, se presenta un caso empresarial en el que estas herramientas estadísticas son utilizadas para evaluar la estructura salarial de una organización. A través del análisis de la distribución de ingresos, se identifican patrones clave, brechas salariales y oportunidades de mejora en la equidad y competitividad del mercado laboral. Este documento ilustra cómo aplicar estas medidas para fundamentar decisiones estratégicas en la gestión de recursos humanos y otros procesos empresariales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicación práctica cuartiles, deciles y percentiles.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/18.png', alt='')
    
    p.mb-4 Para concluir esta unidad sobre datos estadísticos y medidas de tendencia central y de posición, revisemos algunos conceptos clave y reflexionemos sobre su aplicación en el contexto de la administración de empresas.

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p Hemos aprendido que la estadística descriptiva nos proporciona herramientas poderosas para resumir y comprender conjuntos de datos. Las medidas de tendencia central, como la media, mediana y moda, nos permiten capturar el valor "típico" o representativo de una distribución. Cada una tiene sus fortalezas y debilidades, y la elección de cuál usar depende del tipo de datos y del propósito del análisis.
    
          .div(titulo="Segundo")
            p Pero a menudo, una sola medida de tendencia central no es suficiente para obtener una imagen completa de cómo se distribuyen los datos. Aquí es donde entran en juego las medidas de posición, como los cuartiles, deciles y percentiles. Estas medidas nos permiten dividir una distribución en partes iguales y entender qué sucede en diferentes segmentos de los datos.
          .div(titulo="Tercero")
            p Los cuartiles nos dan una visión del 25 % inferior, el 50 % central y el 25 % superior de la distribución. Los deciles nos permiten ver cada 10 % de los datos. Los percentiles nos muestran la posición relativa de cada valor individual. Cada nivel de detalle ofrece una perspectiva única y valiosa.
          .div(titulo="Cuarto")
            p En el mundo empresarial, estas herramientas estadísticas son invaluables para la toma de decisiones basadas en datos. Permiten a los gerentes y líderes ir más allá de las generalizaciones y obtener una comprensión matizada de diversos aspectos del negocio.
          .div(titulo="Quinto")
            p Por ejemplo, el análisis de la distribución salarial usando cuartiles, deciles y percentiles, puede informar decisiones sobre la equidad y competitividad de la compensación. El análisis de las ventas por producto usando estas medidas puede ayudar a identificar oportunidades de crecimiento y optimización. El análisis de la satisfacción del cliente a través de este lente puede resaltar áreas de mejora en el servicio.
    
    p.mb-4 Pero quizás lo más importante es que estas herramientas nos permiten hacer preguntas más precisas y obtener respuestas más significativas de nuestros datos. En lugar de simplemente preguntar "¿cuál es el promedio?", podemos preguntar "¿cómo se compara este valor con el resto de la distribución?" o "¿cuánta variabilidad hay en el 50 % central de los datos?".

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tipo de preguntas conducen a un análisis más profundo, a insights más accionables y, en última instancia, a mejores decisiones. Ese es, después de todo, el objetivo principal de la estadística en el contexto empresarial: proporcionar una base sólida para la estrategia y la acción.
        p(data-aos="fade-left") A medida que avanzamos en nuestro estudio de la estadística descriptiva, seguiremos construyendo sobre estos conceptos fundamentales. En las próximas unidades, exploraremos medidas de variabilidad, distribuciones de probabilidad, técnicas de muestreo y más. Cada herramienta añadirá una nueva capa de comprensión y nos equipará mejor para enfrentar los desafíos del análisis de datos en el mundo real.
    
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
            p.mb-0 Se le invita a reflexionar sobre cómo podría aplicar lo que ha aprendido en el propio contexto. ¿Qué conjuntos de datos en la empresa podrían beneficiarse de un análisis usando cuartiles, deciles o percentiles? ¿Qué preguntas podría responder con estas herramientas que no podría responder con una simple media o mediana? ¿Cómo podrían estos insights influir en sus decisiones y estrategias?
        p(data-aos="fade-left") <b>Recuerde:</b> el verdadero poder de la estadística no radica en los cálculos en sí, sino en cómo usamos los resultados para entender mejor nuestro mundo y tomar decisiones más informadas. A medida que desarrolle las habilidades en este ámbito, empezará a ver datos no solo como números, sino como oportunidades para el descubrimiento, la innovación y la mejora continua.
        p(data-aos="fade-left") Así que siga adelante con curiosidad, genere preguntas, explore los datos desde múltiples ángulos y deje que las herramientas de la estadística descriptiva acompañen el proceso. El dominio de estos conceptos no solo hará un mejor analista de datos, sino también un mejor pensador crítico y solucionador de problemas. Esas son habilidades que servirán bien en cualquier aspecto de la vida y carrera profesional.
        
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ejercicios adicionales 
            p.mb-4(data-aos="fade-right") El análisis de datos no solo implica cálculos matemáticos, sino también la capacidad de interpretar los resultados y aplicarlos a la toma de decisiones. En el PDF Ejercicios adicionales, se presentan problemas prácticos que permiten aplicar conceptos clave de estadística descriptiva, como la media, la mediana, la moda, los cuartiles, los deciles y los percentiles. A través de escenarios empresariales y de servicio al cliente, estos ejercicios ayudarán a comprender cómo las medidas estadísticas pueden aportar valor en la evaluación del desempeño, la satisfacción laboral y la optimización de estrategias comerciales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejercicios adicionales.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/23.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://proyectodescartes.org/iCartesiLibri/materiales_didacticos/IntroduccionEstadisticaProbabilidad/4ESO/Estadistica/5MedidasCentralizacionPosicion.html" target="_blank" rel="noopener noreferrer") Proyecto Descartes. (s. f.). Medidas de centralización y posición. En Introducción a la estadística y probabilidad. Recuperado el 27 de enero de 2025, de 

            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/MP8ZWIUeOBs" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2020, 26 de julio). Medidas de tendencia central [Video]. YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/ZU_zsIEY0hs" target="_blank" rel="noopener noreferrer") Danstein. (2023, 14 de mayo). Cuartiles, deciles y percentiles para datos agrupados [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué estudia la estadística descriptiva?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La predicción de eventos futuros',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La recopilación, organización y presentación de datos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La relación entre variables económicas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La interpretación de datos cualitativos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La estadística descriptiva resume y organiza datos sin hacer inferencias sobre poblaciones más grandes.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes es un ejemplo de estadística descriptiva?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Predecir el clima para la próxima semana',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Encontrar la media de ingresos en una empresa',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la relación entre la educación y el salario',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Estimar el resultado de una elección',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La estadística descriptiva resume datos existentes sin hacer predicciones o inferencias.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué es un cuadro de frecuencias?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un listado de valores en una tabla sin agrupamiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Una tabla que organiza los datos según su frecuencia de aparición',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un diagrama que muestra relaciones entre variables',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Un cálculo matemático de promedios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un cuadro de frecuencias organiza datos en categorías y muestra cuántas veces ocurre cada valor.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué representa un histograma?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Datos categóricos en barras separadas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Frecuencias de datos numéricos en intervalos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Tendencias en series temporales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Datos cualitativos en un círculo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El histograma agrupa los datos en intervalos y muestra su frecuencia con barras juntas.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué mide la moda en un conjunto de datos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La dispersión',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El valor que más se repite',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El promedio',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La suma de los datos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La moda representa el valor con mayor frecuencia en un conjunto de datos.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
