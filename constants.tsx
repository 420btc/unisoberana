
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'ius-101',
    title: 'Introducción al Iusnaturalismo',
    description: 'Fundamentos filosóficos de la Ley Natural frente a la Ley Positiva.',
    category: 'Derecho Natural',
    lessons: [
      { 
        id: 'l1', 
        title: '1. Historia y Orígenes del Pensamiento', 
        content: 'El Iusnaturalismo no es una invención moderna. Desde los estoicos (Zenón de Citio) que hablaban del "Lógos" universal, pasando por Cicerón en Roma ("Existe una ley verdadera, que es la recta razón..."), hasta la Escolástica de Tomás de Aquino y la Escuela de Salamanca (Francisco de Vitoria). Analizamos cómo la ley natural es anterior y superior a cualquier legislación estatal escrita.' 
      },
      { 
        id: 'l2', 
        title: '2. Participación en la Ley Eterna', 
        content: 'Según Tomás de Aquino, la ley natural es la "participación de la ley eterna en la criatura racional". El ser humano, mediante su razón, discierne el bien del mal. Esto implica que los derechos no son concedidos por el Estado (ley positiva), sino que son inherentes a la naturaleza humana por diseño divino o natural. Si una ley humana contradice la ley natural, no es ley, sino corrupción de ley.' 
      },
      { 
        id: 'l3', 
        title: '3. Lex Iniusta Non Est Lex', 
        content: 'La máxima agustiniana "La ley injusta no es ley" es el pilar de la desobediencia civil pacífica. Estudiaremos cómo identificar cuando un mandato estatal viola el orden natural (ej. mandatos que atentan contra la integridad corporal o la propiedad privada legítima) y la obligación moral del individuo soberano de no acatar tales mandatos.' 
      },
      { 
        id: 'l4', 
        title: '4. Derechos Negativos vs. Derechos Positivos', 
        content: 'La distinción crucial: Los derechos naturales son "negativos" (derecho a que no me maten, no me roben, no me agredan). Los "derechos" estatales modernos son "positivos" (derecho a una casa, a un sueldo), los cuales requieren robar a otros (impuestos) para ser financiados, violando así la ley natural. La soberanía implica rechazar la dependencia de derechos positivos.' 
      },
      {
        id: 'l5',
        title: '5. El Principio de No Agresión (PNA)',
        content: 'El axioma central del libertarismo y la ley natural: Es ilegítimo iniciar fuerza física o fraude contra otra persona o su propiedad. La defensa propia es el único uso legítimo de la fuerza. El Estado, por definición, viola el PNA al imponer impuestos (robo) y regulaciones (coerción) sin consentimiento explícito.'
      }
    ],
    quizzes: [
      { question: '¿Quién es el autor de la Summa Theologica?', options: ['John Locke', 'Tomás de Aquino', 'Hugo Grocio'], correctAnswer: 1 },
      { question: '¿Qué define a un derecho natural "negativo"?', options: ['Requiere que el estado te pague algo', 'Es un derecho a la no-interferencia de terceros', 'Es un derecho escrito en la constitución'], correctAnswer: 1 },
      { question: 'Según Agustín de Hipona, una ley injusta...', options: ['Debe ser obedecida por orden público', 'No es ley, sino violencia', 'Es válida si la vota la mayoría'], correctAnswer: 1 }
    ]
  },
  {
    id: 'sob-201',
    title: 'Soberanía Individual y Ficciones',
    description: 'Desmantelando la "Persona Jurídica" y el fraude del hombre de paja.',
    category: 'Soberanía',
    lessons: [
      { 
        id: 'l1', 
        title: '1. El Acta Cestui Que Vie (1666)', 
        content: 'Contexto histórico tras el Gran Incendio de Londres y la Peste. El estado declaró "muertos en el mar" a los ciudadanos para reclamar sus propiedades en fideicomiso. Analizamos cómo este concepto de "muerte civil" se aplica hoy mediante el Certificado de Nacimiento, creando un fideicomiso a nombre del estado donde el humano vivo es solo el beneficiario ignorante.' 
      },
      { 
        id: 'l2', 
        title: '2. Capitis Diminutio: El Nombre en Mayúsculas', 
        content: 'En el derecho romano, la "Capitis Diminutio Maxima" implicaba la pérdida de libertad y ciudadanía. Observa tus documentos oficiales (DNI, Pasaporte, Facturas): tu nombre aparece en MAYÚSCULAS (NOM GUERRE). Esto denota a la "Persona" (máscara teatral/ficción corporativa), no al ser humano de carne, hueso y espíritu. Aprende a distinguir entre TÚ (alma) y TU NOMBRE (empresa estatal).' 
      },
      { 
        id: 'l3', 
        title: '3. El Fraude del Certificado de Nacimiento', 
        content: 'El certificado no es un documento de identidad, es un Título Valor (Bond). Al registrarte, tus padres transfirieron la titularidad legal de tu "persona" al Estado. El Estado usa esa "persona" como colateral para su deuda nacional. Entender esto es el primer paso para dejar de actuar como "avalista" de la ficción jurídica.' 
      },
      { 
        id: 'l4', 
        title: '4. Jurisdicción: Tierra vs. Mar', 
        content: 'La Ley de la Tierra (Common Law) se basa en el sentido común, daño real y víctimas reales. La Ley del Mar (Almirantazgo/Marítima) se basa en comercio, contratos y estatutos. Los tribunales modernos operan bajo Almirantazgo, tratando a los ciudadanos como "barcos" o mercancía en el mar del comercio. Aprende a desafiar la jurisdicción cuando no hay contrato firmado.' 
      },
      {
        id: 'l5',
        title: '5. La Declaración de Estatus (Status Correction)',
        content: 'Proceso administrativo para notificar al Estado que has recuperado tu capacidad legal plena y que ya no actúas bajo la tutela del Estado. Implica reclamar la titularidad del Certificado de Nacimiento y notificar a las agencias pertinentes que eres un ser vivo "sui juris" y no una corporación muerta.'
      }
    ],
    quizzes: [
      { question: '¿Qué representa el nombre escrito totalmente en MAYÚSCULAS?', options: ['Respeto al ciudadano', 'La Capitis Diminutio (Ficción Jurídica)', 'Una regla ortográfica moderna'], correctAnswer: 1 },
      { question: '¿Cuál es el origen del Cestui Que Vie Act?', options: ['1666, tras desastres en Londres', '1789, Revolución Francesa', '1945, Segunda Guerra Mundial'], correctAnswer: 0 },
      { question: 'En la Ley del Almirantazgo, el humano es considerado:', options: ['Un alma libre', 'Mercancía o nave en comercio', 'Un rey soberano'], correctAnswer: 1 }
    ]
  },
  {
    id: 'tra-301',
    title: 'Tratados Internacionales',
    description: 'Herramientas de derecho internacional público para la autodeterminación.',
    category: 'Derecho Internacional',
    lessons: [
      { 
        id: 'l1', 
        title: '1. Convención de Montevideo (1933)', 
        content: 'El "Gold Standard" para definir un Estado. Artículo 1: El Estado como persona de Derecho Internacional debe reunir: I. Población permanente. II. Territorio determinado. III. Gobierno. IV. Capacidad de entrar en relaciones con los demás Estados. Esto demuestra que no necesitas "permiso" de otro país para ser soberano, solo cumplir los hechos fácticos.' 
      },
      { 
        id: 'l2', 
        title: '2. Pacto Internacional de Derechos Civiles y Políticos', 
        content: 'Artículo 1: "Todos los pueblos tienen el derecho de libre determinación". Este tratado, ratificado por casi todos los países, es ley suprema. Analizamos cómo invocar este artículo para formar comunidades intencionales o jurisdicciones privadas, rechazando la tutela estatal no consentida.' 
      },
      { 
        id: 'l3', 
        title: '3. Convención de Viena sobre Relaciones Diplomáticas', 
        content: 'Estudio de la inmunidad diplomática y la extraterritorialidad. Aunque diseñada para embajadores estatales, sus principios se basan en la cortesía entre soberanos. ¿Cómo puede un individuo soberano notificar su estatus diplomático no-estatal? (Aviso: Alto riesgo, requiere estudio profundo del derecho consuetudinario).' 
      },
      {
        id: 'l4',
        title: '4. Declaración Universal de Derechos Humanos (Artículo 20)',
        content: '“Nadie podrá ser obligado a pertenecer a una asociación”. El Estado es una asociación política forzosa. Bajo este artículo, tienes derecho a desvincularte de la asociación "ESTADO" si no consientes sus estatutos, manteniendo tus derechos humanos fundamentales.'
      }
    ],
    quizzes: [
      { question: 'Según Montevideo, ¿es necesario el reconocimiento de otros países para ser un Estado?', options: ['Sí, es constitutivo', 'No, la existencia política es independiente del reconocimiento', 'Solo si lo aprueba la ONU'], correctAnswer: 1 },
      { question: '¿Qué artículo del PIDCP garantiza la libre determinación?', options: ['Artículo 1', 'Artículo 50', 'Artículo 12'], correctAnswer: 0 }
    ]
  },
  {
    id: 'ucc-401',
    title: 'Derecho Marítimo y UCC',
    description: 'Navegando el Código Uniforme de Comercio para proteger activos.',
    category: 'Comercio',
    lessons: [
      { 
        id: 'l1', 
        title: '1. Origen: Bulas Papales', 
        content: 'Unam Sanctam (1302) reclamó todas las almas para la Iglesia. Aeterni Regis (1481) reclamó los cuerpos. Convenciones posteriores reclamaron las tierras. El sistema legal occidental se basa en estas reclamaciones espirituales de propiedad sobre el individuo. El UCC es la codificación moderna de este control comercial sobre la "propiedad" humana.' 
      },
      { 
        id: 'l2', 
        title: '2. UCC-1 Financing Statement', 
        content: 'El UCC-1 es un aviso público de gravamen. Algunos soberanos lo utilizan para "reclamar" su propia Persona Jurídica (el nombre en mayúsculas) como deudora del Ser Humano (acreedor garantizado). Esto teóricamente te pone en primera posición para reclamar los activos de tu ficción legal frente al Estado.' 
      },
      { 
        id: 'l3', 
        title: '3. Aceptación por Valor (A4V)', 
        content: 'Concepto avanzado: No pelear contra la deuda/multa, sino "aceptarla por valor" y retornarla. Basado en que el dinero fiduciario es deuda y el Estado está en bancarrota, tú usas tu exención prepagada. Advertencia: Requiere precisión técnica extrema bajo UCC 3-419 y UCC 3-603.' 
      },
      { 
        id: 'l4', 
        title: '4. Reserva de Derechos (UCC 1-308)', 
        content: '"All Rights Reserved" o "Without Prejudice". Firmar documentos con esta cláusula evita que renuncies a tus derechos del Common Law al entrar en un contrato comercial obligado (como una licencia de conducir). Significa: "El firmante no acepta la responsabilidad de ninguna norma oculta ni renuncia a ningún derecho inalienable".' 
      }
    ],
    quizzes: [
      { question: '¿Qué significa firmar "UCC 1-308" o "Without Prejudice"?', options: ['Que odias la ley', 'Que te reservas tus derechos del Common Law y no aceptas contratos ocultos', 'Que eres un juez'], correctAnswer: 1 },
      { question: 'El UCC regula principalmente:', options: ['Crímenes de sangre', 'Transacciones comerciales y contratos', 'Derecho de familia religioso'], correctAnswer: 1 }
    ]
  },
  {
    id: 'eco-601',
    title: 'Soberanía Económica: Bitcoin y Privacidad',
    description: 'Dinero inconfiscable y separación del dinero y el Estado en 2026.',
    category: 'Economía Soberana',
    lessons: [
      { 
        id: 'l1', 
        title: '1. El Dinero Fiat es Deuda', 
        content: 'El Euro y el Dólar no son dinero, son divisa (currency) basada en deuda y confianza coactiva. La inflación es un impuesto no legislado que roba tu tiempo y energía. Entender que usar dinero estatal es aceptar su jurisdicción y control sobre tu valor.' 
      },
      { 
        id: 'l2', 
        title: '2. Bitcoin: Propiedad Absoluta', 
        content: 'Bitcoin (estudiado no como especulación, sino como tecnología de libertad) es el primer activo digital escaso e incensurable. Si posees tus claves privadas (12/24 palabras), nadie, ni el juez más poderoso ni el ejército más grande, puede confiscarte tus fondos sin tu consentimiento (o tortura). "Not your keys, not your coins".' 
      },
      { 
        id: 'l3', 
        title: '3. Privacidad y KYC (Know Your Customer)', 
        content: 'El KYC es la vigilancia del panóptico financiero. Aprende a obtener Bitcoin sin KYC (HodlHodl, Bisq, Robosats, P2P en persona) para romper el vínculo entre tu identidad biológica y tu riqueza. Introducción a Monero y herramientas de ofuscación (CoinJoins) para recuperar privacidad transaccional.' 
      },
      { 
        id: 'l4', 
        title: '4. Agorismo y Economía Paralela', 
        content: 'Teoría de Samuel Edward Konkin III. La contra-economía: comerciar bienes y servicios directamente entre individuos sin intermediación ni permiso estatal. Uso de efectivo, trueque y cripto para "matar de hambre" al Leviatán estatal negándole recursos tributarios pacíficamente.' 
      }
    ],
    quizzes: [
      { question: '¿Cuál es la regla de oro de la soberanía en Bitcoin?', options: ['Comprar barato y vender caro', 'Not your keys, not your coins (Autocustodia)', 'Usar siempre un exchange regulado'], correctAnswer: 1 },
      { question: '¿Qué es el Agorismo?', options: ['Adoración a los mercados griegos', 'Acción revolucionaria mediante contra-economía y mercados negros/grises pacíficos', 'Un partido político'], correctAnswer: 1 }
    ]
  },
  {
    id: 'bio-701',
    title: 'Bioética y Autodeterminación Sanitaria',
    description: 'El cuerpo como propiedad privada última e inviolable.',
    category: 'Derecho Natural',
    lessons: [
      { 
        id: 'l1', 
        title: '1. El Código de Núremberg y Consentimiento', 
        content: 'Tras los horrores de la WWII, se estableció que el consentimiento voluntario del sujeto humano es absolutamente esencial. Ninguna emergencia, mandato o ley estatal puede forzar un tratamiento médico, inyección o intervención sobre tu cuerpo soberano. Violar esto es un crimen de lesa humanidad.' 
      },
      { 
        id: 'l2', 
        title: '2. Habeas Corpus Digital', 
        content: 'En la era del transhumanismo y la biometría 2026, la soberanía se extiende a tus datos biológicos. Tu ADN, iris y huella térmica son propiedad privada. Estrategias legales para rechazar pasaportes sanitarios y bases de datos biométricas estatales.' 
      },
      { 
        id: 'l3', 
        title: '3. Instrucciones Previas y Testamento Vital', 
        content: 'Cómo redactar documentos legales (Advance Directives) que prohíban explícitamente intervenciones médicas específicas si pierdes la consciencia, asegurando que tu voluntad soberana rija sobre protocolos hospitalarios estandarizados.' 
      }
    ],
    quizzes: [
      { question: 'El primer principio del Código de Núremberg establece:', options: ['El bien común supera al individual', 'El consentimiento voluntario es esencial', 'Los médicos tienen autoridad absoluta'], correctAnswer: 1 },
      { question: '¿A quién pertenece tu material genético según la Ley Natural?', options: ['A la OMS', 'Al Estado donde naces', 'Exclusivamente a ti mismo como propiedad privada'], correctAnswer: 2 }
    ]
  },
  {
    id: 'mic-501',
    title: 'Micronaciones y Comunidades',
    description: 'Creación práctica de estructuras políticas autónomas.',
    category: 'Aplicación Práctica',
    lessons: [
      { 
        id: 'l1', 
        title: '1. Estudios de Caso: Sealand y Liberland', 
        content: 'Análisis de Sealand (plataforma marítima) y Liberland (tierra de nadie entre Serbia y Croacia). Éxitos y fracasos en la búsqueda de reconocimiento. La importancia del control territorial efectivo y la capacidad de defensa.' 
      },
      { 
        id: 'l2', 
        title: '2. República Errante Menda Lerenda', 
        content: 'Caso español de 1999. Un precedente jurídico donde se argumentó que la soberanía reside en el individuo, no en el territorio. Emitieron pasaportes y documentos propios. Lección: El humor y la sátira como armas legales para deslegitimar la burocracia estatal.' 
      },
      { 
        id: 'l3', 
        title: '3. Comunidades Intencionales y PHM', 
        content: 'Asociaciones Privadas de Hombres y Mujeres (PMA/PHM). Estructuras jurídicas donde las interacciones ocurren en el ámbito privado, fuera de la jurisdicción pública comercial. Cómo operar un negocio o comunidad bajo reglas internas sin licencia estatal.' 
      }
    ],
    quizzes: [
      { question: '¿Cuál es el elemento más difícil para una micronación según la historia?', options: ['Diseñar la bandera', 'Escribir el himno', 'El reconocimiento internacional y control territorial'], correctAnswer: 2 }
    ]
  },
  {
    id: 'pra-801',
    title: 'Práctica de la Soberanía Diaria',
    description: 'Procedimientos reales para interactuar con agentes del sistema sin entregar jurisdicción.',
    category: 'Aplicación Práctica',
    lessons: [
      {
        id: 'l1',
        title: '1. La Parada de Tráfico (Policía)',
        content: 'Nunca bajes la ventanilla del todo. No entregues documentos, muéstralos contra el cristal si es necesario. Pregunta clave: "¿Estoy detenido o soy libre de irme?". Si dicen "detenido", invoca tu derecho a guardar silencio. Si dicen "libre", vete. Nunca consientas registros ("No consiento registros"). Mantén la calma y graba todo.'
      },
      {
        id: 'l2',
        title: '2. Rechazo de Cartas Certificadas',
        content: 'Si recibes una notificación del juzgado o hacienda a nombre de la FICCIÓN (todo mayúsculas), no la abras. Escribe "DEVUELTO AL REMITENTE - NO VIVE AQUÍ - SIN CONTRATO" en el sobre y devuélvelo al correo. Abrir la carta es aceptar la notificación y la jurisdicción.'
      },
      {
        id: 'l3',
        title: '3. Firmas con Reserva',
        content: 'En cualquier interacción obligatoria (banco, hospital), firma usando "V.C." (Vi Coactus - Bajo Coacción) o "All Rights Reserved" antes de tu firma. Esto deja constancia legal de que no estás actuando voluntariamente, lo que puede invalidar el contrato en un tribunal de Common Law.'
      },
      {
        id: 'l4',
        title: '4. El Affidavit de Verdad',
        content: 'Documento jurado donde expones tus hechos y reclamaciones. Si envías un Affidavit a una entidad y no lo rebutan punto por punto en un plazo (ej. 30 días), se convierte en la verdad aceptada en el comercio y juicio (UCC). Es una herramienta poderosa para establecer tu posición legal.'
      }
    ],
    quizzes: [
      { question: '¿Qué debes preguntar a un agente de policía si te para?', options: ['¿Cómo está usted?', '¿Estoy detenido o soy libre de irme?', '¿Puedo ayudarle?'], correctAnswer: 1 },
      { question: '¿Qué significa V.C. al firmar?', options: ['Vi Coactus (Bajo Coacción)', 'Victoria Cierta', 'Voluntad Completa'], correctAnswer: 0 }
    ]
  }
];

export const TESTIMONIALS = [
  { name: 'John Locke', quote: 'Todo hombre tiene una propiedad en su propia persona. A esto nadie tiene derecho más que él mismo.' },
  { name: 'Hugo Grocio', quote: 'Incluso si Dios no existiera, la ley natural seguiría teniendo validez eterna e inmutable.' },
  { name: 'Tomás de Aquino', quote: 'Si una ley escrita es injusta, no obliga en conciencia; más bien se debe obedecer a Dios antes que a los hombres.' },
  { name: 'Lysander Spooner', quote: 'La Constitución no tiene autoridad inherente o obligación. No tiene autoridad sobre nadie que no la haya firmado.' },
  { name: 'Frédéric Bastiat', quote: 'La ley se ha pervertido... La ley, digo, no solamente se ha desviado de su finalidad, sino que ha servido para perseguir la finalidad directamente contraria.' },
  { name: 'Satoshi Nakamoto', quote: 'Si no lo crees o no lo entiendes, no tengo tiempo para tratar de convencerte, lo siento.' }
];

export const GLOSSARY = [
  { term: 'Aceptación por Valor (A4V)', definition: 'Proceso del UCC para aceptar un instrumento de deuda (multa/impuesto) y descargarlo usando la exención del hombre de paja.' },
  { term: 'Capitis Diminutio', definition: 'Término romano para la disminución de derechos. "Maxima" implica estatus de esclavo. Se asocia al uso de nombres en TODAS MAYÚSCULAS en documentos legales.' },
  { term: 'Cestui Que Vie', definition: 'Fideicomiso (1666) que declara al ciudadano "muerto en el mar" o perdido, permitiendo al Estado administrar sus bienes.' },
  { term: 'Common Law', definition: 'Ley consuetudinaria basada en precedentes, sentido común y no agresión, opuesta a la ley estatutaria (Statute Law) de los códigos civiles.' },
  { term: 'Ficción Jurídica', definition: 'Una construcción artificial creada por la ley (como una corporación o la "persona" legal) distinta del ser humano natural.' },
  { term: 'Iusnaturalismo', definition: 'Doctrina que defiende que existen derechos universales inalienables anteriores a cualquier Estado.' },
  { term: 'Hombre de Paja (Strawman)', definition: 'La entidad legal artificial (NOMBRE EN MAYÚSCULAS) creada por el Estado para interactuar comercialmente, distinta del hombre vivo.' },
  { term: 'Soberanía', definition: 'Autoridad suprema sobre uno mismo, su cuerpo y propiedad, sin reconocer poder superior externo no consentido.' },
  { term: 'UCC (Uniform Commercial Code)', definition: 'La "biblia" del comercio mundial. Regula contratos y transacciones. Clave para entender cómo el sistema legal opera como comercio.' },
  { term: 'Ultra Vires', definition: 'Acto realizado más allá de la autoridad legal conferida. Muchas leyes estatales son ultra vires respecto a la Constitución o Ley Natural.' }
];

export const TREATY_TEXTS = {
  montevideo: `CONVENCIÓN SOBRE DERECHOS Y DEBERES DE LOS ESTADOS (MONTEVIDEO, 1933)

ARTÍCULO 1
El Estado como persona de Derecho Internacional debe reunir los siguientes requisitos:
I. Población permanente.
II. Territorio determinado.
III. Gobierno.
IV. Capacidad de entrar en relaciones con los demás Estados.

ARTÍCULO 2
El Estado federal constituye una sola persona ante el Derecho Internacional.

ARTÍCULO 3
La existencia política del Estado es independiente de su reconocimiento por los demás Estados. Aun antes de reconocido el Estado tiene el derecho de defender su integridad e independencia, proveer a su conservación y prosperidad y, por consiguiente, de organizarse como mejor lo entienda, legislar sobre sus intereses, administrar sus servicios y determinar la jurisdicción y competencia de sus tribunales. El ejercicio de estos derechos no tiene otros límites que el ejercicio de los derechos de otros Estados conforme al Derecho Internacional.

ARTÍCULO 4
Los Estados son jurídicamente iguales, disfrutan de iguales derechos y tienen igual capacidad para ejercitarlos. Los derechos de cada uno no dependen del poder de que disponga para asegurar su ejercicio, sino del simple hecho de su existencia como persona de Derecho Internacional.

ARTÍCULO 5
Los derechos fundamentales de los Estados no son susceptibles de ser afectados en forma alguna.

ARTÍCULO 6
El reconocimiento de un Estado meramente significa que el que lo reconoce acepta la personalidad del otro con todos los derechos y deberes determinados por el Derecho Internacional. El reconocimiento es incondicional e irrevocable.

ARTÍCULO 7
El reconocimiento del Estado puede ser expreso o tácito. Este último resulta de todo acto que implique la intención de reconocer al nuevo Estado.

ARTÍCULO 8
Ningún Estado tiene derecho de intervenir en los asuntos internos o externos de otro.

ARTÍCULO 9
La jurisdicción de los Estados en los límites del territorio nacional se aplica a todos los habitantes. Los nacionales y los extranjeros gozan de la misma protección de la ley y de las autoridades nacionales y los extranjeros no podrán pretender derechos diferentes ni más extensos que los de los nacionales.

ARTÍCULO 10
El interés primordial de los Estados es la conservación de la paz. Las diferencias de cualquier naturaleza que surjan entre ellos deben resolverse por los medios pacíficos reconocidos.

ARTÍCULO 11
Los Estados contratantes consagran en definitiva como norma de su conducta, la obligación precisa de no reconocer las adquisiciones territoriales o de ventajas especiales que se realicen por la fuerza, ya sea que ésta consista en el empleo de armas, en representaciones diplomáticas conminatorias o en cualquier otro medio de coacción efectiva. El territorio de los Estados es inviolable y no puede ser objeto de ocupaciones militares ni de otras medidas de fuerza impuestas por otro Estado, ni directa ni indirectamente, ni por motivo alguno, ni aun de manera temporal.
`
};
