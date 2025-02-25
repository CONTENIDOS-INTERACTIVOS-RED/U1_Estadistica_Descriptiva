export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Datos estadísticos y medidas de tendencia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de estadística descriptiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Conceptos básicos: estadística descriptiva vs. inferencial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia de la estadística en la gestión empresarial',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de datos: cualitativos y cuantitativos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Fuentes de datos en las empresas (primarias y secundarias)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Etapas del análisis estadístico',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tabulación, cuadro de frecuencias y construcción de gráficos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tablas de frecuencias para datos agrupados y no agrupados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Gráficos estadísticos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Principios para la visualización efectiva de datos en la empresa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medidas de tendencia central y de posición',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto de tendencia central',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cálculo e interpretación de la media, mediana y moda',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Cuartiles, deciles y percentiles',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gamero Burón, C. (2017). Estadística I: elementos de estadística descriptiva y de teoría de la probabilidad: ( ed.). Servicio de Publicaciones y Divulgación Científica de la Universidad de Málaga. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/60724?page=1',
    },
    {
      referencia:
        'Llinás Solano, H. (2017). Estadística descriptiva y distribuciones de probabilidad: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70059?page=1',
    },
    {
      referencia:
        'Puente Viedma, C. D. L. (2018). Estadística descriptiva e inferencial: ( ed.). Ediciones IDT. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/59931?page=1',
    },
    {
      referencia:
        'Romero Ramos, E. (2016). Estadística para todos: análisis de datos: estadística descriptiva, teoría de la probabilidad e inferencia: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/49136?page=1',
    },
    {
      referencia:
        'Proaño Rivera, W. B. (2020). Estadística descriptiva e inferencial: (1 ed.). Universidad del Azuay. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/233574?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Asimetría',
      significado:
        'Falta de simetría o correspondencia exacta en la distribución de los datos respecto a un punto central.',
    },
    {
      termino: 'Cuartiles',
      significado:
        'Valores que dividen un conjunto de datos ordenados en cuatro partes iguales, cada una conteniendo el 25% de las observaciones.',
    },
    {
      termino: 'Deciles',
      significado:
        'Valores que dividen un conjunto de datos ordenados en diez partes iguales, cada una conteniendo el 10% de las observaciones.',
    },
    {
      termino: 'Dispersión',
      significado:
        'Grado en que los datos se alejan o varían respecto a una medida de tendencia central, como la media o la mediana.',
    },
    {
      termino: 'Distribución',
      significado:
        'Forma en que se reparten o distribuyen los valores de una variable en un conjunto de datos.',
    },
    {
      termino: 'Estadística Descriptiva',
      significado:
        'Rama de la estadística que se encarga de la recolección, organización, presentación y descripción de los datos.',
    },
    {
      termino: 'Estadística Inferencial',
      significado:
        'Rama de la estadística que se enfoca en la toma de decisiones o realización de predicciones a partir de los datos analizados.',
    },
    {
      termino: 'Histograma',
      significado:
        'Gráfico de barras que representa la distribución de una variable continua, donde cada barra representa la frecuencia de los datos en un intervalo específico.',
    },
    {
      termino: '<em>Insigth</em>',
      significado:
        'Término en inglés que se refiere a una comprensión profunda sobre un tema, obtenida a través del análisis o la experiencia. En el contexto estadístico y empresarial, los <em>insights</em> son hallazgos o conclusiones significativas derivadas del análisis de datos, que pueden informar decisiones estratégicas o revelar oportunidades de mejora.',
    },
    {
      termino: 'Intervalos de clase',
      significado:
        'Rangos o segmentos en los que se divide el recorrido de una variable continua para agrupar los datos en una tabla de frecuencias.',
    },
    {
      termino: 'Media aritmética',
      significado:
        'Valor promedio de un grupo de datos, calculado como la suma de todos los valores dividida entre el número total de observaciones.',
    },
    {
      termino: 'Mediana',
      significado:
        'Valor central de un grupo de datos ordenados, que divide la distribución en dos partes iguales.',
    },
    {
      termino: 'Moda',
      significado:
        'Valor que ocurre con mayor frecuencia en un grupo de datos.',
    },
    {
      termino: 'Percentiles',
      significado:
        'Valores que dividen un conjunto de datos ordenados en 100 partes iguales, cada una conteniendo el 1% de las observaciones.',
    },
    {
      termino: 'Polígono de frecuencia',
      significado:
        'Gráfico que representa la distribución de una variable continua, uniendo los puntos medios de la parte superior de cada barra de un histograma.',
    },
    {
      termino: 'Rango',
      significado:
        'Diferencia entre el valor máximo y el valor mínimo de un conjunto de datos.',
    },
    {
      termino: 'Simetría',
      significado:
        'Correspondencia exacta en la distribución de los datos respecto a un punto central, de modo que cada mitad es una imagen especular de la otra.',
    },
    {
      termino: 'Tablas de frecuencia',
      significado:
        'Herramienta que permite organizar y resumir los datos de una variable, mostrando la cantidad de observaciones que corresponden a cada categoría o valor.',
    },
    {
      termino: 'Variabilidad',
      significado:
        'Grado de dispersión o variación de los datos respecto a una medida de tendencia central.',
    },
  ],
}
