<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de estadística descriptiva'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para iniciar esta asignatura, es importante resaltar que la estadística descriptiva es una herramienta fundamental en la administración de empresas, dado que se encarga de hacer la recopilación, organización, análisis e interpretación de los datos, para apoyar la toma de decisiones informadas. Se abordarán los conceptos básicos de la estadística descriptiva, la importancia de su aplicación en la gestión empresarial, los tipos de datos y las fuentes de información, así como las etapas del análisis estadístico.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Conceptos básicos: estadística descriptiva vs. inferencial

    .row.mb-5
      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se puede definir la estadística como la ciencia que se encarga de recopilar, organizar, analizar e interpretar datos para tomar decisiones informadas.
        p(data-aos="fade-left") La estadística se divide en dos grandes ramas: la <b>estadística descriptiva</b> y la <b>estadística inferencial</b>. La estadística descriptiva se enfoca en describir y resumir los datos recopilados, mientras que la estadística inferencial se utiliza para hacer predicciones o generalizaciones sobre una población a partir de una muestra (Romero Ramos, 2016).

        p Según Llinás Solano (2017):


    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estadística descriptiva
                p.mb-0 Se encarga de la recolección, organización, presentación y descripción de los datos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estadística inferencial
                p.mb-0 Se enfoca en la toma de decisiones o realización de predicciones a partir de los datos analizados.

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
            p.mb-0 Es decir, la estadística descriptiva se centra en el análisis de los datos actuales, mientras que la inferencial busca extraer conclusiones sobre datos futuros o desconocidos.
        p(data-aos="fade-left") Por ejemplo, en una empresa de <em>retail</em>, la estadística descriptiva se utilizaría para analizar las ventas mensuales, los productos más vendidos, el perfil de los clientes, entre otros aspectos. A partir de estos análisis, se podrían tomar decisiones sobre el abastecimiento de productos, las estrategias de marketing o la segmentación de clientes. Por otro lado, la estadística inferencial se aplicaría para hacer predicciones sobre las ventas futuras o para determinar si una campaña publicitaria ha sido efectiva en la atracción de nuevos clientes.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Importancia de la estadística en la gestión empresarial     

    p.mb-4 Se puede afirmar que la estadística es una herramienta fundamental en la gestión empresarial, dado que permite tomar decisiones basadas en datos y no en intuiciones o suposiciones. La estadística proporciona métodos para recopilar, organizar, analizar e interpretar datos, lo que permite a los administradores de empresas, tener una visión más clara y objetiva de la realidad de su negocio (Proaño Rivera, 2020).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        div.p-4.bg-color-3.tarjeta.h-100(data-aos="fade-up")
          p.mb-0 Gamero Burón (2017), destaca que la estadística es esencial en áreas como el análisis de mercado, la gestión de la calidad, la optimización de procesos, la evaluación de riesgos y la planificación estratégica. Por ejemplo, a través de la estadística, se pueden identificar tendencias de consumo, medir la satisfacción del cliente, detectar cuellos de botella en la producción, evaluar la rentabilidad de los productos o servicios, entre otras aplicaciones.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-4.bg-color-1.tarjeta(data-aos="fade-down")
        div.p-4.h-100
          p.mb-4 En el caso de una empresa de servicios financieros, la estadística se podría utilizar para analizar el comportamiento crediticio de los clientes, identificar patrones de fraude, segmentar el mercado, optimizar la asignación de recursos, entre otros aspectos. 
          figure.mb-0.justify-content-end.d-flex
            img(src="@/assets/curso/tema1/8.svg", data-aos="zoom-in", style="max-width: 90px")
    
    p.mb-4 Esto permitiría a la empresa tomar decisiones más acertadas, minimizar riesgos y aprovechar oportunidades de negocio.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Tipos de datos: cualitativos y cuantitativos

    p.mb-4 Se pueden clasificar los datos en dos grandes categorías: datos cualitativos y datos cuantitativos. 

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Datos cualitativos")
            p Son aquellos que expresan cualidades o atributos, y se representan mediante palabras o categorías.
    
          .div(titulo="Datos cuantitativos")
            p Son aquellos que se pueden medir o contar, y se expresan mediante números (Puente Viedma, 2018).

    p.mb-4 Según Romero Ramos (2016), los datos cualitativos pueden ser nominales u ordinales:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Datos nominales
                p.mb-0 Son aquellos que se clasifican en categorías sin un orden específico, como el género, la nacionalidad o el color de ojos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Datos ordinales
                p.mb-0 Tienen un orden o jerarquía, como el nivel educativo o la escala de satisfacción del cliente.
      
      p.mb-4 Por su parte, los datos cuantitativos pueden ser discretos o continuos:

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Datos discretos" :icon="require('@/assets/bullets/1.svg')")
          .row.justify-content-center
            .col-lg-7.col-xl-6.mb-4.mb-md-0.order-2
              h4 Datos discretos
              p Son aquellos que toman valores enteros, como el número de empleados o la cantidad de ventas.
            .col-md-8.col-lg-5.col-xl-6.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/12.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Datos continuos" :icon="require('@/assets/bullets/1.svg')")
          .row.justify-content-center
            .col-lg-7.col-xl-6.mb-4.mb-md-0.order-2
              h4 Datos continuos
              p Pueden tomar cualquier valor dentro de un intervalo, como el peso, la estatura o el tiempo.
      
            .col-md-8.col-lg-5.col-xl-6.order-1.mb-3.mb-lg-0
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/13.png', alt='')
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Por ejemplo, en un estudio de mercado para una empresa de tecnología, los datos cualitativos podrían incluir la preferencia de marca, el sistema operativo utilizado o la percepción de la calidad del servicio al cliente. Por otro lado, los datos cuantitativos podrían abarcar la edad de los usuarios, el tiempo de uso diario del dispositivo o el precio que estarían dispuestos a pagar por un nuevo producto.
      
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Fuentes de datos en las empresas (primarias y secundarias)
    
    p.mb-4 Se puede obtener datos de diversas fuentes, tanto internas como externas a la empresa. Estas fuentes se clasifican en primarias y secundarias. 

    .bg-full-width-2.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 Fuentes primarias
              p Encuestas, entrevistas, experimentos o la observación directa.
              p Son aquellas que proporcionan datos originales o de primera mano, que se recopilan específicamente para un propósito determinado. Algunos ejemplos de fuentes primarias son las encuestas, las entrevistas, los experimentos o la observación directa.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 Fuentes secundarias
              p Bases de datos, informes gubernamentales, artículos científicos o publicaciones empresariales.
              p Son aquellas que contienen datos que ya han sido recopilados y procesados por otros, con un propósito diferente al de la investigación actual. Algunos ejemplos de fuentes secundarias son las bases de datos, los informes gubernamentales, los artículos científicos o las publicaciones empresariales (Llinás Solano, 2017).
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-4 Proaño Rivera (2020), señala que las empresas pueden utilizar tanto fuentes primarias como secundarias para obtener datos relevantes para su gestión. Por ejemplo:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 110px")
              h5.text-center Fuente primaria
              p.mb-0.text-center Una empresa de consumo masivo podría realizar encuestas a sus clientes, para conocer sus hábitos de compra y preferencias de productos.
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/18.svg" alt="" style="width: 110px")
              h5.text-center Fuente secundaria
              p.mb-0.text-center Al mismo tiempo, esta misma empresa, puede utilizar datos del censo poblacional para segmentar su mercado objetivo.
        

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-4.p-4.mb-5(data-aos="fade-left")
            p.mb-0 Es importante que las empresas evalúen la calidad y confiabilidad de las fuentes de datos utilizadas, así como su relevancia para el propósito de la investigación.
        p(data-aos="fade-left") En el caso de una empresa de turismo, algunas fuentes primarias de datos podrían ser las encuestas de satisfacción a los huéspedes, las entrevistas a los operadores turísticos o la observación directa del comportamiento de los visitantes en los destinos. Por otro lado, algunas fuentes secundarias podrían incluir los informes de la Organización Mundial del Turismo, las estadísticas de llegadas de turistas del gobierno local o los estudios de tendencias del sector realizados por consultoras especializadas.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Etapas del análisis estadístico
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-4 Se puede dividir el proceso de análisis estadístico, en cuatro etapas principales (Puente Viedma, 2018): 

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/20.svg" alt="" style="width: 90px")
              h5.text-center Recolección de datos
              p.mb-0.text-center En la etapa de recolección de datos, se define el propósito de la investigación, se seleccionan las fuentes de datos y se diseñan los instrumentos de recolección, como cuestionarios o formularios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/21.svg" alt="" style="width: 90px")
              h5.text-center Organización y presentación de datos
              p.mb-0.text-center En la etapa de organización y presentación de datos, se tabulan los datos, se calculan las medidas de tendencia central y dispersión, y se elaboran gráficos y tablas para visualizar la información.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/22.svg" alt="" style="width: 90px")
              h5.text-center Análisis de datos 
              p.mb-0.text-center En la etapa de análisis de datos, se aplican técnicas estadísticas para identificar patrones, tendencias o relaciones entre las variables.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/23.svg" alt="" style="width: 90px")
              h5.text-center Interpretación de resultados
              p.mb-0.text-center En la etapa de interpretación de resultados, se extraen conclusiones, se hacen recomendaciones y se comunican los hallazgos a los interesados.
    
    .row.mb-5
      .col-lg-4.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8.mb-3.mb-lg-0.order-2.order-lg-1
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
            p.mb-0 Gamero Burón (2017) enfatiza que el análisis estadístico es un proceso iterativo, en el que se pueden revisar y ajustar las etapas anteriores a medida que se obtienen datos recientes o se plantean nuevas preguntas de investigación. Además, destaca la importancia de la comunicación efectiva de los resultados, utilizando un lenguaje claro y accesible para los diferentes públicos, como directivos, empleados o clientes.
        p(data-aos="fade-left") Por ejemplo, en un análisis estadístico para evaluar la eficiencia de un proceso productivo en una empresa manufacturera, se podrían seguir las siguientes etapas:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/25.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0
    
        AcordionA(tipo="b")
          .div(titulo="Recolección de datos")
            p Se registran los tiempos de ciclo, la cantidad de unidades producidas y los defectos encontrados en un periodo determinado.
          .div(titulo="Organización y presentación de datos")
            p Se calculan medidas como el tiempo promedio de ciclo, la tasa de defectos y la productividad por turno, y se grafican series de tiempo para visualizar las tendencias.
          .div(titulo="Análisis de datos")
            p Se aplican pruebas estadísticas para determinar si hay diferencias significativas en la eficiencia entre los turnos o los operarios, y se identifican los factores que más influyen en la productividad.
          .div(titulo="Interpretación de resultados")
            p Se concluye si el proceso está bajo control estadístico, se identifican oportunidades de mejora y se proponen acciones correctivas o preventivas.
    
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Aplicación práctica 
            p.mb-4(data-aos="fade-right") La estadística descriptiva es una herramienta fundamental para analizar datos y extraer información valiosa que oriente la toma de decisiones en diversos contextos. En el PDF <b>Aplicación práctica</b>, se presentan casos ilustrativos sobre el uso de métodos estadísticos en situaciones empresariales reales. Estos ejemplos demuestran cómo aplicar técnicas de estadística descriptiva para identificar patrones de mercado, mejorar la productividad y evaluar la satisfacción del cliente, mediante la interpretación de datos y la construcción de gráficos representativos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicación práctica.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/26.png', alt='')







    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://rea.ceibal.edu.uy/rea/estadistica-descriptiva" target="_blank" rel="noopener noreferrer") Ceibal. (n.d.). Estadística descriptiva. REA Ceibal. Recuperado el 27 de enero de 2025, de
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://editorial.ucatolicaluisamigo.edu.co/index.php/editorial/catalog/book/31" target="_blank" rel="noopener noreferrer") Este texto soporta los conceptos generales de la estadística descriptiva, incluyendo temas como muestreo, ordenación de datos, representación gráfica y medidas de tendencia central, de posición, de dispersión y de forma. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://editorial.ucatolicaluisamigo.edu.co/index.php/editorial/catalog/book/31" target="_blank" rel="noopener noreferrer") Posada Hernández, G. J. (n.d.). Elementos básicos de estadística descriptiva para el análisis de datos. Editorial Católica Luis Amigó. Recuperado el 27 de enero de 2025, de
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://proyectodescartes.org/descartescms/matematicas/telesecundaria/item/2031-simulacion-experimentos-estadisticos" target="_blank" rel="noopener noreferrer") Proyecto Descartes. (s. f.). Simulación de experimentos estadísticos. Recuperado el 27 de enero de 2025, de 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/XR90LXvQKTw?si=w-4pdWZzBv2wiiOM" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2020, 9 de agosto). Estadística descriptiva [Video]. YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Z2TTBtZjNk0" target="_blank" rel="noopener noreferrer") Santiav2004. (2013, 11 de abril). Variables cuantitativas y cualitativas [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
