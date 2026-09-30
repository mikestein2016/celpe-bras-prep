window.CB = window.CB || {};
CB.tasks = CB.tasks || [];
CB.tasks.push(
  {
    id: 'tarefa-1',
    name: 'Tarefa 1: vídeo',
    summary: 'Task 1 opens the written part. The whole room watches a short video twice, you take notes while it plays, and then you write one text that uses its information. The task takes about 30 minutes in total, including both playings.',
    howItWorks: [
      'The prompt is printed in your booklet. Read it before the video starts so you know your role, your reader, the genre and the purpose.',
      'The applicator plays the video for the whole room. You cannot pause it or replay it yourself.',
      'The video plays twice, usually with a short pause between the two playings.',
      'You may take notes while it plays, on the draft space of your booklet.',
      'After the second playing, you write your text on the answer sheet. Only the answer sheet is graded, not your notes or draft.',
      'The whole task takes about 30 minutes, both playings included, so writing time is usually around 20 minutes.'
    ],
    strategy: [
      'Before the video: underline your role, reader, genre and purpose in the prompt, and write them in two or three words at the top of your notes (*eu: dono de cafeteria / clientes / blog / apresentar o café*). This tells you what to listen for.',
      'First playing: write down what is hard to remember later. Names, places, numbers, dates, prices. Then the 3 or 4 main points, one line each. Use abbreviations and arrows, not sentences.',
      'Note who says what with an initial (N for narrator, P for producer, B for barista). You will present opinions as what producers or specialists say, so you need to know whose they are.',
      'You are not transcribing. If you try to write full sentences while the video plays, you will miss the next point. Keywords only.',
      'Between playings: reread your notes, put a question mark next to every gap, and cross out points that do not serve your purpose.',
      'Second playing: fill in the question marks, check every number and the spelling of names, and catch one or two concrete details (a flavor, a process, a place) that will make your text vivid.',
      'Before writing: number your notes in the order your text needs, which is often different from the order of the video. Plan the paragraphs in three lines.',
      'Writing: turn each note into your own sentence. The note *colheita à mão, só grão maduro → mais doce* becomes *A colheita é feita à mão, e só os grãos maduros são colhidos. Por isso, o café fica mais doce.* Never mention the video; state the facts directly.',
      'Last three minutes: reread for gender agreement, accents and verbs left in the infinitive.'
    ],
    notesExample: [
      'EU: dono cafeteria | BLOG | clientes | apresentar café novo + por que provar',
      'Sul de MG, peq. produtores → qualidade > quantidade',
      'sítio fam. Tavares, 1.100 m altitude',
      'colheita à mão, só grão maduro (vermelho) → + doce',
      'P (Sérgio): passa 3-4x no mesmo pé',
      'P: antes coop., preço mercado → hoje direto p/ cafeterias, ~2x por saca',
      'secagem sol, terreiro suspenso, até 3 sem.?',
      'nota > 80/100 = especial | lote deles: 86',
      'B (Camila): chocolate, caramelo, acidez leve, fruta amarela? → sem açúcar',
      'B: "prova puro" → ideia p/ final do post',
      'N: venda direta = preço justo | cliente sabe origem',
      '2ª vez: conferir semanas secagem, nome da barista'
    ],
    pitfalls: [
      'Transcribing. Writing full sentences while the video plays makes you miss the next point. Write keywords, numbers and names only.',
      'Mentioning the video (*No vídeo, o produtor diz...*). Your reader never saw it. State the fact, or refer to *uma reportagem recente*.',
      'Using only one or two facts. Graders check how much relevant information from the video you used. Aim for four or five facts, reworded.',
      'Copying the speakers\' spoken forms. The producer says *a gente* and *pra*; your text uses *nós* or *os produtores*, and *para*.',
      'Forgetting the role. A cafeteria owner writing for the blog is selling the coffee to customers. A neutral summary of the report misses the purpose.',
      'Rushing the end. Save three minutes to check agreement (*a colheita é feita*, *os grãos maduros*) and accents (*também, café, açúcar, várias*).'
    ],
    sample: {
      task: 1,
      source: {
        kind: 'video',
        title: 'Café especial: a aposta dos pequenos produtores do Sul de Minas',
        body: [
          'Narrador: No Sul de Minas, uma das regiões mais tradicionais do café no Brasil, pequenos produtores estão apostando em qualidade, e não em quantidade.',
          'Narrador: No sítio da família Tavares, a 1.100 metros de altitude, a colheita é feita à mão. Só os grãos maduros, bem vermelhos, vão para o cesto.',
          'Sérgio Tavares, produtor: A gente passa três, quatro vezes no mesmo pé. Dá mais trabalho, mas o café fica muito mais doce. Antes eu vendia tudo pra cooperativa, pelo preço do mercado. Hoje vendo direto pra cafeterias e ganho quase o dobro por saca.',
          'Narrador: Depois da colheita, os grãos secam ao sol em terreiros suspensos por até três semanas. Cada lote é provado e recebe uma nota. Acima de 80 pontos, numa escala de 100, o café é considerado especial.',
          'Sérgio Tavares, produtor: Esse ano o nosso lote tirou 86. É o melhor que a gente já fez.',
          'Narrador: Em São Paulo, a barista Camila Duarte serve o café do sítio numa cafeteria de bairro.',
          'Camila Duarte, barista: Ele tem notas de chocolate e de caramelo, com uma acidez leve, de fruta amarela. Muita gente se surpreende porque não precisa de açúcar. Eu sempre digo: prova primeiro puro, depois decide.',
          'Narrador: Para os produtores, a venda direta garante um preço mais justo. Para o consumidor, é a chance de saber de onde vem o café e quem o produziu.'
        ]
      },
      prompt: 'Você é dono(a) de uma pequena cafeteria e passou a servir um café especial produzido por uma família do Sul de Minas. Com base no vídeo, escreva um texto para o blog da sua cafeteria apresentando o novo café aos clientes. Explique de onde ele vem, o que o torna especial e por que vale a pena prová-lo.',
      answer: [
        '{{1|Novidade no balcão: o café do Sítio Tavares}}',
        '{{2|Olá, pessoal!}} {{3|Hoje apresentamos a grande novidade da casa. A partir desta semana, servimos o café do Sítio Tavares, uma pequena propriedade no Sul de Minas.}}',
        '{{4|O Sul de Minas é uma das regiões mais tradicionais do café no Brasil, e a família Tavares aposta na qualidade, e não na quantidade.}} No sítio, que fica a 1.100 metros de altitude, {{5|a colheita é feita à mão}}. {{6|Os produtores passam várias vezes pelo mesmo pé e colhem só os grãos maduros.}} {{7|Por isso,}} o café fica mais doce.',
        'Depois da colheita, os grãos secam ao sol por até três semanas. {{8|Cada lote recebe uma nota de provadores, e um café só é considerado especial acima de 80 pontos, numa escala de 100. O lote que chegou aqui recebeu 86.}}',
        '{{9|Como é o sabor?}} Ele tem notas de chocolate e caramelo, com uma acidez leve que lembra fruta amarela. Nossa sugestão é {{10|prová-lo}} puro, sem açúcar.',
        '{{11|Há}} ainda outro motivo para experimentar. {{7|Como}} compramos direto do sítio, a família recebe quase o dobro do preço de mercado. {{7|Além disso,}} você sabe de onde vem o café da sua xícara.',
        '{{12|Passe aqui para experimentar! O café do Sítio Tavares está disponível como expresso ou coado.}}',
        '{{12|Equipe do Ponto do Grão}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'A blog post needs a title that makes customers want to read. This one names the news (*novidade*) and the product.' },
        { n: 2, cat: 'registro', text: 'A cafeteria blog can greet readers warmly (*Olá, pessoal!*) and use *você*. It is still writing, so no *a gente*, *pra* or *tá*, even though the producer in the report speaks that way.' },
        { n: 3, cat: 'papel', text: 'The first lines set up the role. The owner (*nós*, *a casa*) speaks to customers, and the second sentence already does what the prompt asks, which is to present the new coffee.' },
        { n: 4, cat: 'fonte', text: 'Background from the narrator, reworded. The report is never mentioned; the facts are stated directly, because the blog reader never saw it.' },
        { n: 5, cat: 'lingua', text: '*A colheita é feita*: the participle agrees with *colheita* (feminine). *À mão* takes the crase, like *à vista* and *à noite*.' },
        { n: 6, cat: 'fonte', text: 'The producer said *a gente passa três, quatro vezes no mesmo pé*. The post turns his speech into written third person (*os produtores passam várias vezes*). Note the accent on *várias*.' },
        { n: 7, cat: 'coesao', text: '*Por isso*, *Como* (meaning "since" at the start of a sentence) and *Além disso* link facts to consequences and add reasons, so the post explains why the coffee is good instead of listing features.' },
        { n: 8, cat: 'fonte', text: 'Numbers are the details graders look for: the 80-point line and this lot\'s 86. They are exactly what you write down on the first playing and check on the second.' },
        { n: 9, cat: 'genero', text: 'A question used as a mini-heading is common in blogs. It speaks to the reader and breaks the post into parts.' },
        { n: 10, cat: 'lingua', text: '*Prová-lo*: after an infinitive, *o* becomes *lo*, the *r* drops and *-ar* verbs gain an accent (*provar* + *o* = *prová-lo*). It avoids repeating *o café*. It also turns the barista\'s spoken *prova primeiro puro* into written advice.' },
        { n: 11, cat: 'registro', text: '*Há* for "there is". *Tem outro motivo* is how people talk; *há* is the written form.' },
        { n: 12, cat: 'papel', text: 'The post ends with an invitation to come in and try the coffee, which is the purpose the prompt set. It is signed by the business, not by a person.' }
      ],
      why5: 'The post fits the role (a cafeteria owner), the reader (customers), the genre (a blog) and the purpose (present the coffee and convince people to try it). It uses most of the video\'s information (region, altitude, hand picking, drying, score, flavor notes, direct trade) without ever mentioning the video, and it turns the speakers\' spoken Portuguese into written sentences. Paragraphs move from origin to production to flavor to a final reason, with *por isso*, *como* and *além disso* showing cause and addition. The tone is friendly and direct, as a blog should be, while the grammar stays correct where it counts: agreement, crase, *há*, and the pronoun in *prová-lo*.',
      wordCount: 215
    },
    genre: 'blog'
  },

  {
    id: 'tarefa-2',
    name: 'Tarefa 2: áudio',
    summary: 'Task 2 works like Task 1 without images. The room hears an audio recording (often a radio segment or interview) twice, you take notes, and then you write one text that uses its information. About 30 minutes in total, audio included.',
    howItWorks: [
      'The prompt is printed in your booklet. Read it before the audio starts.',
      'The applicator plays the audio for the whole room through speakers. There are no images, so everything depends on what you hear.',
      'The audio plays twice. You cannot pause it or ask for a replay.',
      'You may take notes while it plays.',
      'After the second playing, you write your text on the answer sheet. Only the answer sheet is graded.',
      'The whole task takes about 30 minutes, both playings included.'
    ],
    strategy: [
      'Before the audio: write your role, reader, genre and purpose at the top of your notes (*eu: mãe/pai / direção / e-mail / pedir mudança*). The purpose tells you which points to listen for.',
      'First 20 seconds: the host usually introduces the guest by name and profession. Write both down at once. You may not use the name, but knowing the speaker is an expert lets you write *especialistas explicam*.',
      'First playing: note numbers, times and quantities (hours of sleep, class start time) and the 3 or 4 main points, one line each. Listen for signpost words such as *primeiro*, *além disso*, *o mais importante*, *por isso*; a main point usually follows them.',
      'Use symbols to keep up: an arrow for cause and effect, + and - for more and less, ? for anything you missed. You are not transcribing, so write keywords only.',
      'Between playings: mark the gaps and decide which points serve your purpose. For a request, you need the problem, its cause and the solutions the speaker suggests.',
      'Second playing: fill in the question marks, check every number, and catch any recommendation you missed. The speaker\'s recommendations often become your proposals.',
      'Before writing: plan three blocks (who you are and what you want; the problem, with facts; your request and closing). Turn each note into a full sentence of your own and attribute expert points to *especialistas*, never to the audio.',
      'Last three minutes: check verbs after *que* and *para* (subjunctive or personal infinitive), agreement and accents.'
    ],
    notesExample: [
      'EU: mãe/pai | e-mail | direção | pedir: aula + tarde ou outras medidas',
      'Manhã Aberta | Henrique Passos, médico, espec. sono',
      'não é preguiça → relógio biológico muda na adolesc.',
      'melatonina (hormônio do sono) + tarde → sono só ~23h/0h',
      'precisa 8 a 10 h/noite',
      'aula 7h → acorda 6h → máx. 6 h de sono',
      'celular/tela à noite → atrasa + o sono | desligar 1 h antes',
      'dorme pouco → sono na aula, concentr., memória, irritação → notas',
      'escola: aula às 8h (especialistas) | se não der: sem prova 1º horário + conversa c/ famílias',
      '2ª vez: conferir "8h", nome do programa?'
    ],
    pitfalls: [
      'Transcribing instead of listening. Write keywords and numbers; the second playing is for filling gaps.',
      'Missing the guest\'s profession. The host says it in the first seconds, and it is what lets you write *especialistas em sono explicam*.',
      'Mentioning the audio (*Ouvi no rádio que...*). Present the information as facts or as what specialists say.',
      'Writing a complaint instead of a request. The purpose is to ask the school to discuss changes. Suggest politely with *gostaria de*, *seria possível*, the conditional and the subjunctive.',
      'Leaving verbs in the infinitive after *que* or *para* (*para os alunos dormir*). Write *para que os alunos durmam* or *para os alunos dormirem*.',
      'Borrowing the radio\'s spoken register: *né*, *tá*, *a gente*, *tem* for *há*. Radio speech is informal; your e-mail is not.'
    ],
    sample: {
      task: 2,
      source: {
        kind: 'audio',
        title: 'Manhã Aberta: o sono dos adolescentes',
        body: [
          'Apresentadora: Bom dia, você está ouvindo o Manhã Aberta, da Rádio Cidade Aberta. Hoje o assunto é o sono dos adolescentes. Quem conversa com a gente é o médico Henrique Passos, especialista em sono. Doutor, por que é tão difícil tirar um adolescente da cama?',
          'Henrique Passos: Não é preguiça, como muitos pais pensam. Na adolescência, o relógio biológico muda. O corpo passa a liberar mais tarde a melatonina, o hormônio que dá sono. Então o adolescente só sente sono lá pelas onze, meia-noite.',
          'Apresentadora: E quantas horas ele precisa dormir?',
          'Henrique Passos: Entre oito e dez horas por noite. Agora faz a conta: se ele dorme à meia-noite e a aula começa às sete, precisa acordar às seis. São seis horas de sono, no máximo.',
          'Apresentadora: E o celular na cama piora tudo, né?',
          'Henrique Passos: Piora muito. A luz da tela e o estímulo das redes sociais atrasam ainda mais o sono. O ideal é desligar as telas pelo menos uma hora antes de deitar.',
          'Apresentadora: O que acontece com quem dorme pouco?',
          'Henrique Passos: Sono na sala de aula, dificuldade de concentração e de memória, mais irritação. E isso aparece nas notas.',
          'Apresentadora: E o que as escolas podem fazer?',
          'Henrique Passos: Muitos especialistas defendem que as aulas dos adolescentes comecem mais tarde, pelo menos às oito. Quando isso não é possível, a escola pode evitar provas nos primeiros horários e conversar com as famílias sobre o uso de telas à noite.'
        ]
      },
      prompt: 'Você é mãe ou pai de um aluno do 1º ano do ensino médio. As aulas da escola do seu filho começam às 7h, e ele tem chegado cansado e com sono. Com base no áudio, escreva um e-mail à direção da escola solicitando que ela discuta a possibilidade de atrasar o início das aulas ou de adotar outras medidas para ajudar os alunos.',
      answer: [
        '{{1|Assunto: Pedido de discussão sobre o horário de início das aulas}}',
        '{{2|Prezada Direção,}}',
        '{{3|Sou mãe de um aluno do 1º ano B do ensino médio.}} {{4|Escrevo para solicitar que a escola discuta a possibilidade de as aulas começarem mais tarde.}}',
        'Nos últimos meses, meu filho {{5|tem chegado à escola}} cansado e com sono. {{6|Especialistas em sono explicam}} que isso não é preguiça. Na adolescência, o relógio biológico muda, e o sono só chega por volta das 23h ou da meia-noite. {{7|Além disso,}} {{8|os adolescentes precisam de oito a dez horas de sono por noite. Como as aulas começam às 7h, muitos alunos dormem seis horas ou menos.}}',
        '{{7|Por isso,}} gostaria de sugerir duas medidas. A primeira seria transferir o início das aulas do ensino médio para as 8h, como recomendam muitos especialistas. {{9|Caso isso não seja possível}}, a escola poderia evitar provas nos primeiros horários e organizar uma conversa com as famílias sobre o uso de celulares à noite, que atrasa ainda mais o sono.',
        '{{10|Sei que mudar o horário não é simples, porque envolve o transporte e a rotina de professores e famílias. Fico à disposição para participar de uma reunião sobre o tema.}}',
        '{{11|Agradeço a atenção.}}',
        '{{12|Atenciosamente,}}',
        '{{12|Mãe de aluno do 1º ano B}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'An e-mail to an institution needs a subject line that states the request, so the direction knows what it is about before opening it.' },
        { n: 2, cat: 'registro', text: '*Prezada Direção* addresses the school\'s management as an institution. It is formal and avoids guessing the director\'s name.' },
        { n: 3, cat: 'papel', text: 'The writer says who she is and her link to the school before asking anything. A request from the parent of a current student carries more weight.' },
        { n: 4, cat: 'lingua', text: 'Two structures in one sentence: *solicitar que* + present subjunctive (*discuta*), and the personal infinitive after a preposition (*de as aulas começarem*). Compare the error *para as crianças passar*, fixed as *para as crianças passarem*. In careful writing, *de* does not contract with the subject of an infinitive, so *de as aulas*, not *das aulas*.' },
        { n: 5, cat: 'lingua', text: '*Tem chegado* is the present perfect for something repeated up to now. This *ter* + participle is correct in writing; only *tem* meaning "there is" should become *há*. *Chegar a* + *a escola* gives *à escola*.' },
        { n: 6, cat: 'fonte', text: 'The information from the radio is presented as what specialists say, with no mention of the audio. The direction never heard it.' },
        { n: 7, cat: 'coesao', text: '*Além disso* adds the second fact, and *Por isso* turns the facts into the request. The e-mail moves from problem to cause to proposal.' },
        { n: 8, cat: 'fonte', text: 'The key numbers from the audio (8 to 10 hours needed, classes at 7h, six hours of sleep) make the request convincing. These are the details to write down on the first playing.' },
        { n: 9, cat: 'lingua', text: '*Caso* + present subjunctive (*seja*). With *se*, it becomes *se isso não for possível*. Offering a second option is also good strategy, because it makes the request easier to accept.' },
        { n: 10, cat: 'papel', text: 'Recognizing the school\'s difficulty and offering to help keeps the tone cooperative. The purpose is to open a discussion, so the writer suggests instead of demanding.' },
        { n: 11, cat: 'lingua', text: '*Atenção* is feminine: *a atenção*, *pela atenção*. *Agradeço a atenção* and *Agradeço pela atenção* are both standard.' },
        { n: 12, cat: 'genero', text: '*Atenciosamente* is the standard closing for a formal e-mail. The signature gives the role, not a name.' }
      ],
      why5: 'The e-mail fits the prompt exactly. A parent writes to the school\'s direction to ask for a discussion, and the request is clear from the subject line and the first paragraph. The middle paragraph uses the audio\'s main points (the biological clock, 8 to 10 hours of sleep, the early start, screens at night) as evidence, attributed to specialists and never to the recording. The proposal offers a main option and an alternative, and the closing acknowledges the school\'s constraints, which keeps the tone respectful. Connectors move the text from problem to cause to request. The language models structures that appear in almost every *solicitação*: *solicitar que* + subjunctive, the personal infinitive, *caso* + subjunctive, the conditional (*gostaria, seria, poderia*), and correct agreement and crase.',
      wordCount: 206
    },
    genre: 'solicitacao'
  },

  {
    id: 'tarefa-3',
    name: 'Tarefa 3: leitura',
    summary: 'Tasks 3 and 4 are the reading tasks. Each gives you a printed text (a news report, an article, an ad, a notice) and a prompt, and you write one text based on it. After Task 2, the rest of the written part is yours to manage, so plan roughly 45 to 60 minutes for each of the two.',
    howItWorks: [
      'You receive the text and the prompt in your booklet. Nothing is played aloud; you read at your own pace.',
      'You can reread the text as many times as you like and write on it: underline, circle, make notes in the margin.',
      'You write your answer on the answer sheet. Only the answer sheet is graded.',
      'Tasks 3 and 4 work the same way. Both are reading-based, and they differ only in the source text and the genre you are asked to write. Everything on this page applies to Task 4 too.',
      'The time for Tasks 3 and 4 is shared and you manage it yourself. Plan about 45 to 60 minutes for each, and do not let the first one eat into the second.'
    ],
    strategy: [
      'Read the prompt first, before the text. Underline who you are, who you are writing to, the genre and the purpose. Then underline every action verb (*comente, apresente, sugira, convide*); each one is a point the grader will check.',
      'Turn those verbs into a short checklist at the top of your draft (*1. posição 2. problemas 3. sugestões*).',
      'Read the text once for the general idea, then a second time with the checklist in mind. Underline 3 or 4 facts you can use: numbers, names, places, causes, what people said.',
      'Write the checklist number next to each underlined fact. Facts that serve no item stay out, even if they are interesting.',
      'Plan the paragraphs in a few lines before writing. One paragraph per checklist item usually works.',
      'Write in your own sentences. Reword each fact; copying sentences from the text shows the grader nothing about your Portuguese.',
      'Proofread twice. First pass for agreement: every noun with its article and adjective, every subject with its verb. Second pass for accents, word by word (*também, através, prédio, há, vários*).',
      'Watch the clock. If you pass about 55 minutes, finish the paragraph you are on, close the text properly and move on to Task 4.'
    ],
    notesExample: [
      'EU: morador Jd. Esperança | jornal (editores + leitores) | carta do leitor',
      'Checklist: 1. posição 2. problemas 3. sugestões',
      '40 mil viagens em 3 meses → pop. quer pedalar (1)',
      '30 estações, quase todas no Centro → nenhuma no meu bairro (2)',
      'Av. das Mangueiras: ciclovia acaba no trânsito + carros na faixa (2)',
      'comerciantes: vagas | prefeitura: sem dados sobre queda (responder)',
      'meta 40 km: fora do checklist, não usar',
      'Plano: §1 quem sou + posição | §2 segurança + estações | §3 sugestões | §4 comerciantes + fecho'
    ],
    pitfalls: [
      'Reading the text before the prompt. You end up underlining what is interesting instead of what you need.',
      'Summarizing the text instead of doing what the prompt asks. A *carta do leitor* takes a position; a list of facts from the report is not a letter.',
      'Copying sentences from the text. Reword every fact, because the grader compares your text with the source.',
      'Answering only part of the prompt. If it says *comente os problemas e apresente sugestões*, both must be there.',
      'Running over time on Task 3 and rushing Task 4.',
      'Skipping the proofreading passes. Gender agreement and accents are where a lot of points are lost, and they are the easiest to fix.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Bicicletas compartilhadas chegam a Serra Clara, mas ciclovias ainda são poucas',
        body: [
          'Três meses depois da inauguração, o sistema de bicicletas compartilhadas de Serra Clara já soma cerca de 40 mil viagens. São 30 estações, quase todas no Centro e nos bairros próximos. Para usar, basta baixar o aplicativo e pagar uma taxa mensal de R$ 15.',
          'A prefeitura também entregou 12 km de ciclovias. O secretário de Mobilidade, Rogério Paiva, afirma que a meta é chegar a 40 km até o fim do próximo ano. "Queremos que a bicicleta seja uma opção real de transporte, e não só de lazer", disse.',
          'Os usuários aprovam, mas apontam problemas. A ciclovia da Avenida das Mangueiras termina de repente no meio do trânsito, e carros estacionam sobre a faixa em vários trechos. Moradores de bairros mais afastados, como o Jardim Esperança, reclamam que não há nenhuma estação perto de casa.',
          'Parte dos comerciantes do Centro também critica o projeto, porque as ciclovias ocuparam vagas de estacionamento. Segundo a associação comercial, o movimento nas lojas caiu. A prefeitura diz que ainda não há dados que confirmem essa queda.'
        ]
      },
      prompt: 'Você mora no bairro Jardim Esperança, em Serra Clara, e leu a reportagem abaixo no jornal Diário de Serra Clara. Escreva uma carta do leitor para o jornal, posicionando-se sobre o sistema de bicicletas compartilhadas e as ciclovias da cidade. Na carta, comente os problemas apontados na reportagem e apresente sugestões para melhorar o projeto.',
      answer: [
        '{{1|Serra Clara, 16 de setembro de 2026}}',
        '{{1|Prezados editores,}}',
        '{{2|Sou morador do Jardim Esperança e escrevo a respeito da reportagem sobre as bicicletas compartilhadas, publicada na edição de domingo.}}',
        '{{3|Considero o projeto positivo.}} {{4|Em apenas três meses, o sistema já soma cerca de 40 mil viagens}}, o que mostra que a população quer pedalar. {{5|No entanto,}} a cidade ainda não oferece condições para que a bicicleta seja um meio de transporte seguro.',
        '{{5|O primeiro problema}} é a segurança. A ciclovia da Avenida das Mangueiras termina de repente no meio do trânsito, e {{6|há}} carros estacionados sobre a faixa em vários trechos. {{5|O segundo}} é a distribuição das estações. Quase todas ficam no Centro, e no meu bairro não há nenhuma. Justamente quem mais precisa de um transporte barato continua dependendo de ônibus lotados.',
        '{{7|Por isso, sugiro que a prefeitura instale}} estações nos bairros mais afastados, {{7|conecte}} as ciclovias que já existem e {{7|multe}} os motoristas que param na faixa.',
        '{{8|Quanto aos comerciantes do Centro,}} entendo a {{9|preocupação com}} as vagas de estacionamento. {{4|Porém, a própria prefeitura afirma que ainda não há dados que confirmem a queda nas vendas.}}',
        '{{10|Uma cidade que investe em bicicletas precisa pensar em todos os bairros, e não apenas no Centro.}}',
        '{{11|Atenciosamente,}}',
        '{{11|Um leitor do Jardim Esperança}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'Place and date, then *Prezados editores*. This is the standard opening of a *carta do leitor*, which is addressed to the newspaper even though other readers will see it.' },
        { n: 2, cat: 'papel', text: 'The first sentence says who writes (a resident of a neighborhood the project left out) and what the letter responds to. A *carta do leitor* reacts to something the paper published, so naming that report is part of the genre. It does not count as mentioning the exam material, because the paper\'s readers saw the report too.' },
        { n: 3, cat: 'registro', text: 'The position comes early and is stated plainly. *Considero* sounds firmer and more written than *eu acho*.' },
        { n: 4, cat: 'fonte', text: 'Two facts from the report, reworded and put to work. The number of trips supports the position, and the city\'s own statement about the missing data answers the merchants.' },
        { n: 5, cat: 'coesao', text: '*No entanto*, *O primeiro problema* and *O segundo* organize the letter so the reader can follow the argument. Each paragraph has one job.' },
        { n: 6, cat: 'registro', text: '*Há carros estacionados*, not *tem carros*. For "there is" and "there are", writing uses *haver*. Note the accent: *há* is the verb; *a* without it is the article or the preposition.' },
        { n: 7, cat: 'lingua', text: '*Sugiro que* + present subjunctive, kept for each proposal: *instale, conecte, multe*. The verb is conjugated every time, never left in the infinitive.' },
        { n: 8, cat: 'lingua', text: '*Quanto a* + *os comerciantes* gives *quanto aos comerciantes*. The phrase introduces a new topic, which is a clean way to answer an opposing view.' },
        { n: 9, cat: 'lingua', text: '*Preocupação com*, not *preocupação sobre*. The same goes for the adjective: *preocupados com*.' },
        { n: 10, cat: 'genero', text: 'The letter ends with one sentence that sums up the position, so the reader leaves with the main point.' },
        { n: 11, cat: 'genero', text: 'A formal closing and a signature by role. On the exam, a role such as *Um leitor do Jardim Esperança* is the safe choice.' }
      ],
      why5: 'The letter does what the prompt asks. A resident of a neighborhood left out of the project takes a position, comments on the problems in the report and proposes solutions. It opens with the standard elements of a *carta do leitor* and states the position in its own short sentence. The report\'s facts (number of trips, the Avenida das Mangueiras, the station map, the missing data) are reworded and used as evidence, not copied. *No entanto*, *O primeiro problema*, *O segundo*, *Por isso* and *Quanto aos* give the argument a clear order, and the merchants\' view is answered instead of ignored. The language models *sugerir que* + subjunctive, *há* for "there is", *preocupação com* and *quanto a*, and every noun agrees with its article and adjective.',
      wordCount: 211
    },
    genre: 'carta-do-leitor'
  },

  {
    id: 'tarefa-4',
    name: 'Tarefa 4: leitura',
    summary: 'Task 4 is the second reading task and works exactly like Task 3: a printed text, a prompt, and one text to write. Only the source text and the genre change. It shares the remaining time with Task 3, so plan roughly 45 to 60 minutes.',
    howItWorks: [
      'Same format as Task 3. The text and the prompt are in your booklet, and you read at your own pace.',
      'You can reread and mark up the text as much as you like.',
      'You write your answer on the answer sheet. Only the answer sheet is graded.',
      'The difference from Task 3 is only the source text and the genre. The procedure below is the same one; practice it until it is automatic.',
      'This is the last task, so time is often tighter. Keep five minutes at the end for proofreading.'
    ],
    strategy: [
      'Read the prompt first. Underline your role, reader, genre and purpose, and every action verb (*defenda, responda, convide*). Make them a numbered checklist.',
      'Read the text for the general idea, then again with the checklist. Underline 3 or 4 usable facts and write the checklist number beside each one.',
      'For an opinion genre, look for two things in the text: the facts that support your position, and the strongest objection. A good opinion text names the objection and answers it.',
      'Plan in two or three minutes: thesis, two arguments, the objection and your answer, the closing.',
      'Write in your own sentences. Reword each fact and keep sentences short, one idea each.',
      'Proofread twice. First pass for agreement, second pass for accents. If time is short, do the agreement pass; it catches more errors.',
      'Stop writing about five minutes before the end, whatever happens. An unfinished closing costs less than an unproofread text.'
    ],
    notesExample: [
      'EU: morador bairro sem árvores | leitores do jornal | artigo de opinião',
      'Checklist: 1. defender o programa 2. responder críticas 3. convidar a aderir',
      'asfalto/concreto acumulam calor dia → liberam noite (ilha de calor) (1)',
      'árvores: sombra + umidade pelas folhas (1)',
      'prioridade: bairros c/ menos árvores = + quentes (1)',
      'críticas: folhas, raízes → calçada/encanamento (2)',
      'resposta: equipe escolhe espécie (calçada, fios) (2)',
      'como: pedir muda no app + regar primeiros meses (3)',
      'Plano: título | §1 experiência + tese | §2 argumentos | §3 "É verdade que... No entanto" | §4 convite'
    ],
    pitfalls: [
      'Treating it as a new kind of task. It is the same procedure as Task 3; use the same steps.',
      'Writing an opinion text with no opposing view. Name the objection from the text and answer it (*É verdade que... No entanto...*).',
      'Writing *eu acho* in every paragraph or starting sentences with *Mas*. State the argument directly and use *No entanto* or *Porém*.',
      'Leaving verbs in the infinitive after *que* (*defendo que os moradores participar*). Write *participem*.',
      'Agentless phrases such as *foi descoberto que*, which read less naturally than saying who found it: *especialistas explicam que*.',
      'Leaving no time to proofread because this is the last task.'
    ],
    sample: {
      task: 4,
      source: {
        kind: 'texto',
        title: 'Prefeitura lança programa para plantar árvores nos bairros mais quentes',
        body: [
          'A prefeitura lançou nesta semana o programa Rua com Sombra, que prevê o plantio de 20 mil árvores nas calçadas da cidade nos próximos quatro anos. A prioridade serão os bairros com menos árvores, que costumam registrar as temperaturas mais altas nos dias de calor.',
          'Especialistas explicam que áreas com muito asfalto e concreto e pouca vegetação acumulam calor durante o dia e o liberam à noite, fenômeno conhecido como ilha de calor. As árvores ajudam a reduzir a temperatura, porque fazem sombra e liberam umidade pelas folhas.',
          'Pelo programa, qualquer morador pode pedir uma muda para a frente de casa pelo aplicativo da prefeitura. A equipe técnica escolhe a espécie de acordo com a largura da calçada e a presença de fios, para evitar que as raízes quebrem o piso ou que os galhos atinjam a rede elétrica. O morador se compromete a regar a muda nos primeiros meses.',
          'Nem todos aprovam a ideia. Alguns moradores reclamam da sujeira das folhas e temem que as raízes danifiquem calçadas e encanamentos. Para a secretária de Meio Ambiente, Helena Prado, a escolha certa da espécie resolve a maior parte desses problemas.'
        ]
      },
      prompt: 'Você mora em um bairro com poucas árvores e costuma ler o jornal da sua cidade. Com base na reportagem, escreva um artigo de opinião para a seção de opinião do jornal, defendendo que os moradores participem do programa Rua com Sombra. Apresente argumentos a favor do plantio, responda às críticas de quem é contra e convide os leitores a aderir ao programa.',
      answer: [
        '{{1|Uma árvore na calçada vale mais do que parece}}',
        '{{2|Quem mora em um bairro sem árvores conhece bem o problema.}} Nos dias de calor, a rua parece um forno, e a casa continua quente mesmo depois que o sol se põe. {{3|Isso tem explicação: asfalto e concreto acumulam calor durante o dia e o liberam à noite.}} {{4|Por isso,}} o programa Rua com Sombra merece o apoio dos moradores.',
        '{{3|As árvores reduzem a temperatura de duas formas: fazem sombra e liberam umidade pelas folhas.}} {{4|Além disso,}} o programa dá prioridade aos bairros com menos árvores, que costumam ser os mais quentes. É uma forma de levar qualidade de vida {{5|a quem mais precisa}}.',
        '{{6|É verdade que}} alguns moradores reclamam das folhas e {{7|temem que as raízes quebrem}} calçadas e encanamentos. {{6|No entanto,}} esses problemas costumam ser causados pela espécie errada. No programa, a equipe técnica escolhe a árvore de acordo com a largura da calçada e a presença de fios. {{8|Folhas no chão se resolvem com uma vassoura; o calor, não.}}',
        'Participar é simples. Basta pedir uma muda pelo aplicativo da prefeitura e {{9|se comprometer a regá-la}} nos primeiros meses. {{10|Convido os leitores a fazer o pedido ainda esta semana.}} {{11|Daqui a alguns anos, quem passar pela sua calçada vai agradecer.}}',
        '{{12|Morador do Jardim Aroeira}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'An opinion article needs a title that hints at the thesis and makes people read. This one defends the tree without naming the program yet.' },
        { n: 2, cat: 'papel', text: 'The article opens with an experience the readers share. The writer speaks as a resident to other residents, which is the role in the prompt, and wins the reader before arguing.' },
        { n: 3, cat: 'fonte', text: 'The scientific explanation from the report (heat stored by asphalt and concrete, shade and moisture from leaves) is reworded in short sentences and used as the main argument.' },
        { n: 4, cat: 'coesao', text: '*Por isso* moves from the problem to the thesis, and *Além disso* adds a second argument. The reader always knows how a sentence relates to the one before.' },
        { n: 5, cat: 'lingua', text: '*Levar algo a alguém*: *a quem mais precisa*. The preposition comes from the verb. The same logic gives *entregar algo a alguém*, not *entregar com*.' },
        { n: 6, cat: 'genero', text: 'Concession and answer (*É verdade que... No entanto...*) is the signature move of an opinion article. It shows you know the other side and still hold your position, and the prompt asks for it directly.' },
        { n: 7, cat: 'lingua', text: '*Temer que* + present subjunctive (*quebrem*). Verbs of fear, wish and doubt take the subjunctive after *que*.' },
        { n: 8, cat: 'registro', text: 'A short, punchy sentence is welcome in an opinion article. It stays in written register: no slang, and the ellipsis in *o calor, não* is a normal written device.' },
        { n: 9, cat: 'lingua', text: '*Comprometer-se a fazer algo*, with *a* before the infinitive. *Regá-la* replaces *a muda*: after an infinitive, *a* becomes *la*, the *r* drops and the vowel takes an accent.' },
        { n: 10, cat: 'papel', text: 'The prompt asks you to invite readers to join, and this sentence does it directly. *Convidar alguém a fazer algo* keeps the preposition.' },
        { n: 11, cat: 'genero', text: 'The closing looks ahead and leaves a picture in the reader\'s mind. *Quem passar* uses the future subjunctive, the standard form after *quem* for an open future action.' },
        { n: 12, cat: 'genero', text: 'Signed with a role and an invented neighborhood, never a real name.' }
      ],
      why5: 'The article does the three things the prompt asks: it defends the program, answers the critics and invites readers to join. The writer speaks as a resident to other residents, opening with a shared experience before stating the thesis. Arguments come from the report (how heat builds up, how trees cool the street, the priority given to hotter neighborhoods), reworded and never attributed to "the text". The objection is stated fairly and answered with a fact from the source, which is the core of a strong opinion article. Connectors (*Por isso*, *Além disso*, *É verdade que... No entanto*) make the argument easy to follow. The language models *temer que* + subjunctive, *comprometer-se a*, *levar a quem*, pronouns after infinitives (*regá-la*) and the future subjunctive (*quem passar*).',
      wordCount: 215
    },
    genre: 'artigo-opiniao'
  }
);
