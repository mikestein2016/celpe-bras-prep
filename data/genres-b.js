window.CB = window.CB || {};
CB.genres = CB.genres || [];
CB.genres.push(
  {
    id: 'noticia',
    name: 'Notícia',
    english: 'News story',
    summary: 'A short report of a recent or upcoming event, written in the third person for a newspaper, news site or newsletter. Celpe-Bras often asks you to turn an announcement, interview or press release into a news item for a local outlet.',
    role: {
      enunciador: 'A reporter or contributor for a newspaper, news site or community newsletter.',
      interlocutor: 'The general readers of that outlet, who know nothing about the event yet.',
      proposito: 'Inform readers about what happened or will happen, who is involved, and often how they can take part.'
    },
    register: {
      level: 'Neutral',
      notes: 'Third person throughout. No *eu*, no *nós*, no *você*, and no opinion adjectives such as *incrível* or *maravilhoso*. Opinions enter the text only inside a quote attributed to someone by name and role. Avoid spoken forms such as *a gente*, *vai ter* and *tem* for *há*.'
    },
    mustHave: [
      'A title (*manchete*) in the present tense that states the main fact',
      'A lead paragraph (*lide*) that answers o quê, quem, quando, onde and por quê',
      'Third person only, with no *eu*, no *nós* and no personal opinion',
      'At least one quote attributed by name and role, with a verb such as *afirmou* or *explicou*',
      'Details from the source (dates, numbers, places) reworded, not copied',
      'A closing paragraph with practical information: how to take part, deadlines, cost, contact'
    ],
    skeleton: [
      { part: 'Título', what: 'A short headline in the present tense with the main fact. No period.', example: 'Associação reabre biblioteca comunitária com feira de livros' },
      { part: 'Lide', what: 'The first paragraph answers o quê, quem, quando, onde and por quê.', example: 'A Associação de Moradores do Jardim das Acácias reabre a biblioteca comunitária do bairro no sábado, 12 de outubro.' },
      { part: 'Desenvolvimento', what: 'Details in order of importance: background, numbers, program.', example: 'O espaço precisou fechar depois que uma infiltração danificou parte do acervo.' },
      { part: 'Citação', what: 'A quote from someone involved, attributed by name and role.', example: '"Queremos que as crianças voltem a frequentar o lugar", afirmou a presidente da associação.' },
      { part: 'Serviço', what: 'How readers can take part: deadline, place, cost, contact.', example: 'A entrada é gratuita. Doações podem ser entregues na sede da associação até o dia 10.' }
    ],
    wordChoices: [
      { use: 'há / haverá', avoid: 'tem / vai ter', why: 'For "there is" and "there will be", written Portuguese uses *haver*. *Tem* and *vai ter* in that sense belong to speech.' },
      { use: 'os moradores / a população', avoid: 'a gente', why: '*A gente* is spoken and first person. A news story talks about people; it does not speak for them.' },
      { use: 'afirmou, explicou, declarou', avoid: 'falou', why: 'Attribution verbs show who said what and keep the reporter neutral. *Falou* is vague and spoken.' },
      { use: 'de acordo com a associação', avoid: 'eu acho que', why: 'In a news story, facts come from sources, not from the writer.' },
      { use: 'gratuita', avoid: 'de graça', why: '*De graça* is fine in conversation; *gratuita* is the written form.' },
      { use: 'foi reformado / passou por reforma', avoid: 'foi passado por uma reforma', why: '*Foi passado* is a calque of the English passive. Portuguese uses *passar por* in the active or a different verb.' }
    ],
    pitfalls: [
      'Writing *eu* or *nós* (*nós vamos adorar a feira*). A news story has no narrator. If an opinion matters, put it in a quote from someone involved.',
      'Adding your own adjectives (*uma iniciativa incrível*). Replace them with facts: how many books, which day, who organizes.',
      'Burying the main fact. A reader who stops after the first paragraph should still know what, who, when, where and why.',
      'Quoting without saying who spoke. Always give name and role: *afirmou Lúcia Ramos, presidente da associação*.',
      'Copying whole sentences from the source. Reword them and cut what the reader does not need. The quote is the only place where exact words stay.',
      'Starting sentences with *Mas* and chaining clauses with *e... e... e*. Use *No entanto* or start a new sentence.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Nossa biblioteca vai reabrir!',
        body: [
          'Queridos vizinhos, temos uma ótima notícia: a biblioteca comunitária do Jardim das Acácias vai reabrir no sábado, 12 de outubro, às 9h. O espaço ficou fechado por dois anos, depois que uma infiltração no telhado estragou parte do acervo e o salão precisou de reforma.',
          'Com a ajuda de voluntários e de uma vaquinha feita no próprio bairro, conseguimos consertar o telhado, pintar as paredes e comprar estantes novas. Hoje o acervo tem cerca de 3 mil livros, quase todos doados por moradores.',
          'Para comemorar, vamos fazer uma feira de livros na praça em frente à biblioteca, na Rua das Palmeiras, 240, das 9h às 17h. Vai ter troca de livros usados, contação de histórias para as crianças e venda de livros a preço popular por pequenas editoras da região. A entrada é gratuita.',
          '"A biblioteca é o único espaço de leitura gratuito do bairro. Queremos que as crianças e os idosos voltem a frequentar o lugar", diz Lúcia Ramos, presidente da associação.',
          'Quem quiser ajudar pode doar livros em bom estado na sede da associação até o dia 10 ou se inscrever como voluntário pelo WhatsApp da associação.'
        ]
      },
      prompt: 'Você colabora com o site de notícias do seu bairro, o Acácias em Foco. Com base no comunicado da Associação de Moradores, escreva uma notícia para o site informando os leitores sobre a reabertura da biblioteca comunitária e a feira de livros. Apresente o fato, explique por que o espaço estava fechado e como foi recuperado, inclua a fala de uma pessoa envolvida e informe como os moradores podem participar.',
      answer: [
        '{{1|Biblioteca comunitária do Jardim das Acácias reabre com feira de livros}}',
        '{{2|A Associação de Moradores do Jardim das Acácias reabre a biblioteca comunitária do bairro no sábado, 12 de outubro,}} {{3|depois de dois anos fechada}} para reforma. Para comemorar, {{4|haverá}} uma feira de livros na praça em frente ao espaço, na Rua das Palmeiras, 240, das 9h às 17h.',
        '{{5|O espaço}} precisou fechar depois que uma infiltração no telhado {{6|danificou parte do acervo}}. Com a ajuda de voluntários e de {{7|uma arrecadação entre os próprios moradores}}, a associação consertou o telhado, pintou o salão e comprou estantes novas. Hoje o acervo reúne {{8|cerca de 3 mil livros}}, {{3|quase todos doados}} pela vizinhança.',
        '{{5|A feira}} terá troca de livros usados, contação de histórias para as crianças e venda de livros a preço popular por pequenas editoras da região.',
        '{{9|"A biblioteca é o único espaço de leitura gratuito do bairro. Queremos que as crianças e os idosos voltem a frequentar o lugar", afirmou Lúcia Ramos, presidente da associação.}}',
        '{{10|Os moradores que quiserem colaborar}} podem doar livros em bom estado na sede da associação até o dia 10. Também é possível fazer a inscrição como voluntário pelo WhatsApp da entidade. {{11|A entrada na feira é gratuita.}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'The title states the main fact in the present tense, the way real headlines do. It has a subject, a verb and the event, with no period and no opinion adjective.' },
        { n: 2, cat: 'genero', text: 'This is the *lide*. One sentence answers who (*a Associação*), what (*reabre a biblioteca*), when (*sábado, 12 de outubro*) and where (*Jardim das Acácias*). The why (*depois de dois anos fechada para reforma*) and the feira follow at once. A reader who stops here already has the story.' },
        { n: 3, cat: 'lingua', text: 'Agreement worth copying. *Fechada* agrees with *biblioteca* (feminine), and *doados* agrees with *livros* (masculine plural). Check every participle and adjective against its noun; this is the check that catches *o lei* or *celulares velhas*.' },
        { n: 4, cat: 'registro', text: 'The announcement says *vai ter uma feira*, which is how people speak. For "there is" or "there will be", writing uses *haver*: *há*, *haverá*. Later, *a feira terá* is correct because there *ter* has a real subject (the fair has activities).' },
        { n: 5, cat: 'coesao', text: '*O espaço* and *a feira* refer back to things already named. This reference chain moves the text forward without repeating *a biblioteca* in every sentence, and it keeps sentences short.' },
        { n: 6, cat: 'fonte', text: 'The source says the leak *estragou* the books; *danificou* is the written equivalent. The cause of the closure comes from the source because the prompt asks why the library was closed, and the reporter states it as a fact, without *nós*.' },
        { n: 7, cat: 'registro', text: 'The source says *vaquinha*, which is informal. *Uma arrecadação entre os moradores* says the same thing in news register.' },
        { n: 8, cat: 'fonte', text: 'Numbers from the source stay exact: *3 mil livros*, *Rua das Palmeiras, 240*, *das 9h às 17h*. Precise details are the clearest proof that you used the source.' },
        { n: 9, cat: 'papel', text: 'The only opinion in the story sits inside quotation marks, attributed by name and role with *afirmou*. A news story has no *eu* because the reporter is not part of the event, and readers of a news site expect facts, not the writer\'s feelings. Words like *incrível* or *nós adoramos* would turn it into an ad or an opinion piece. When someone involved has an opinion, quote that person. The quote is also the one place where the source\'s exact words may stay.' },
        { n: 10, cat: 'lingua', text: 'The future subjunctive (*quiserem*) is the standard form after *que* or *quem* when the action is open or in the future: *quem quiser ajudar*, *os moradores que quiserem colaborar*.' },
        { n: 11, cat: 'genero', text: 'The story closes with the *serviço*: how to donate, the deadline, how to volunteer, and that entry is free. The prompt asks for this last, and it is the practical part readers look for.' }
      ],
      why5: 'The text works as a news story for a neighborhood site. The reporter never appears: no *eu*, no *nós*, no words of praise, and the only opinion is attributed to the association\'s president. The *lide* answers the five questions in the first two sentences, and the closing gives readers what they need to take part. Every relevant piece of the source is used and reworded (closure, cause, repairs, collection size, program, address, deadline), while the chatty tone of the announcement (*temos uma ótima notícia*, *vai ter*, *vaquinha*) becomes news register. Paragraphs follow the order of importance, the reference chain (*o espaço*, *a feira*) avoids repetition, and sentences stay short. Agreement, accents and the future subjunctive are correct throughout.',
      wordCount: 203
    }
  },

  {
    id: 'aviso',
    name: 'Aviso / comunicado',
    english: 'Notice / official announcement',
    summary: 'A short, formal notice from an institution (a school, a building, a company) to a group of people about a situation and what they need to do. Celpe-Bras uses it when you speak for an institution and must turn a source text into clear instructions.',
    role: {
      enunciador: 'An institution or its management: a school\'s direction, a building\'s *síndico*, a company\'s HR department.',
      interlocutor: 'A group of people: parents, residents, employees, customers.',
      proposito: 'Inform readers about a situation and ask them to do (or stop doing) specific things, often by a deadline.'
    },
    register: {
      level: 'Formal',
      notes: 'Written in the name of the institution, so the speaker is plural (*informamos*, *solicitamos*), never *eu*. Readers are addressed as a group (*senhores pais e responsáveis*, *as famílias*) and instructions go in the plural imperative (*retirem, verifiquem*). Do not mix *vocês* and *os senhores*, and avoid spoken forms such as *a gente*, *pra* and *tem* for *há*.'
    },
    mustHave: [
      'A title such as *Comunicado* or *Aviso*, ideally with a subject line',
      'A clear addressee: *Senhores pais e responsáveis* or *Prezadas famílias*',
      'The reason for the notice in the first lines',
      'Instructions in the plural imperative (*retirem, mantenham*) or with *solicitamos que* + present subjunctive',
      'Facts from the source reworded as short, concrete actions',
      'A standard closing line and the institution as signer (*A Direção*), with place and date'
    ],
    skeleton: [
      { part: 'Título e assunto', what: 'The type of text and what it is about.', example: 'COMUNICADO / Assunto: prevenção da dengue' },
      { part: 'Destinatário', what: 'A formal address to the whole group.', example: 'Senhores pais e responsáveis,' },
      { part: 'Motivo', what: 'Why the institution is writing now.', example: 'Com a chegada do período de chuvas, alguns alunos faltaram às aulas por suspeita de dengue.' },
      { part: 'Orientações', what: 'What readers must do, one action per verb.', example: 'Solicitamos que as famílias verifiquem a casa e o quintal uma vez por semana.' },
      { part: 'Fechamento', what: 'A standard closing line.', example: 'Contamos com a colaboração de todos.' },
      { part: 'Assinatura, local e data', what: 'The role that signs, the institution, place and date.', example: 'A Direção / Escola Estadual Vila Serena / São Paulo, 9 de fevereiro de 2026' }
    ],
    wordChoices: [
      { use: 'solicitamos que as famílias verifiquem', avoid: 'pedimos pras famílias verificar', why: '*Solicitar que* takes the present subjunctive. *Pra* is spoken, and the bare infinitive leaves the verb unconjugated.' },
      { use: 'retirem, mantenham, procurem', avoid: 'retira, mantém, procura', why: 'The notice speaks to many readers, so the imperative is plural. The singular forms sound like an informal order to one person.' },
      { use: 'há', avoid: 'tem', why: '*Há casos de dengue no bairro* is the written form. *Tem casos* is spoken.' },
      { use: 'informamos que', avoid: 'queria avisar que', why: 'The institution speaks in the plural present. *Queria* sounds personal and hesitant.' },
      { use: 'evitem a automedicação', avoid: 'não tomem remédio por conta', why: '*Automedicação* is the standard written term in health notices.' },
      { use: 'caixas-d\'água', avoid: 'caixa dágua / caixas d água', why: 'The compound takes a hyphen and an apostrophe, and the plural goes on the first word.' }
    ],
    pitfalls: [
      'Signing as a person (*Eu, a diretora...*). The notice speaks for the school and is signed *A Direção*.',
      'Leaving verbs in the infinitive after *que* or *para* (*para as crianças passar*). Conjugate: *solicitamos que verifiquem*, *para que as crianças não se exponham*, or use the personal infinitive, *para as crianças passarem*.',
      'Mixing *vocês* and *os senhores*, or singular and plural imperatives, in the same notice.',
      'Copying the health text as a lecture. Turn each fact into an action families can take at home.',
      'Dropping accents on common words: *também, através, prédio, água, saúde, médico, vários*.',
      'Adding medical claims that are not in the source. Stick to what you were given.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Dengue: como evitar a doença',
        body: [
          'A dengue é uma doença transmitida pela picada do mosquito Aedes aegypti. O mosquito coloca seus ovos em água parada e limpa, e até uma tampinha de garrafa com água pode servir de criadouro. Por isso, a forma mais eficaz de prevenção é eliminar os locais onde ele se reproduz.',
          'Em casa, é importante retirar a água dos pratinhos de vasos de plantas, guardar pneus em local coberto, manter garrafas vazias com a boca para baixo, limpar as calhas e deixar as caixas-d\'água sempre bem tampadas. Uma verificação semanal da casa e do quintal ajuda a evitar novos focos.',
          'O repelente também é um aliado, principalmente durante o dia, período em que o mosquito costuma picar.',
          'Os sintomas mais comuns são febre alta, dores no corpo e dor de cabeça. Diante desses sinais, a pessoa deve procurar um serviço de saúde e evitar a automedicação, porque alguns remédios podem piorar o quadro.'
        ]
      },
      prompt: 'Você faz parte da direção da Escola Estadual Vila Serena. Com a chegada do período de chuvas, alguns alunos faltaram às aulas por suspeita de dengue. Com base no texto, escreva um comunicado aos pais e responsáveis, explicando a situação, orientando as famílias sobre como evitar a proliferação do mosquito em casa e informando o que fazer em caso de sintomas.',
      answer: [
        '{{1|COMUNICADO}}',
        '{{1|Assunto: prevenção da dengue}}',
        '{{2|Senhores pais e responsáveis,}}',
        '{{3|Com a chegada do período de chuvas, alguns alunos}} {{4|faltaram às aulas}} nas últimas semanas por suspeita de dengue. {{6|Por isso,}} a Direção reforça algumas orientações importantes.',
        '{{5|A dengue é transmitida pela picada do mosquito Aedes aegypti, que se reproduz em água parada e limpa.}} {{6|Assim,}} a medida mais eficaz é eliminar os locais onde o mosquito deposita seus ovos. {{7|Solicitamos que as famílias verifiquem}} a casa e o quintal uma vez por semana e {{7|sigam}} estas orientações.',
        '{{8|Esvaziem}} os pratinhos dos vasos de plantas, {{9|guardem os pneus em local coberto e deixem as garrafas vazias de boca para baixo}}. Limpem as calhas e mantenham as caixas-d\'água sempre bem tampadas. Recomendamos também o uso de repelente, principalmente durante o dia.',
        '{{10|Caso a criança apresente febre e dores no corpo}}, procurem um posto de saúde e {{11|evitem a automedicação}}. Nesses casos, pedimos que o aluno fique em casa e que a família comunique a ausência à secretaria.',
        '{{12|Contamos com a colaboração de todos.}}',
        '{{12|A Direção}}',
        'Escola Estadual Vila Serena',
        'São Paulo, 9 de fevereiro de 2026'
      ],
      notes: [
        { n: 1, cat: 'genero', text: '*COMUNICADO* and a subject line tell parents at once that this is an official notice and what it is about.' },
        { n: 2, cat: 'registro', text: '*Senhores pais e responsáveis* is the standard formal address in school notices. It also sets the plural for the rest of the text, so every instruction that follows is plural.' },
        { n: 3, cat: 'papel', text: 'The first sentence gives the reason for writing, taken from the prompt. The school speaks as an institution (*a Direção*, *solicitamos*), never as *eu*.' },
        { n: 4, cat: 'lingua', text: '*Faltar a* + *as aulas* gives *às aulas*. The crase is the preposition that *faltar* requires plus the feminine plural article. The same happens later in *à secretaria* (*comunicar algo a* + *a secretaria*).' },
        { n: 5, cat: 'fonte', text: 'The health text opens with how dengue spreads. The notice keeps that to one sentence so parents understand why the instructions matter, then moves on to what they should do.' },
        { n: 6, cat: 'coesao', text: '*Por isso* links the situation to the school\'s response, and *Assim* links the fact about the mosquito to the main measure. Each paragraph leads into the next.' },
        { n: 7, cat: 'lingua', text: '*Solicitamos que* takes the present subjunctive: *verifiquem*, *sigam*. Leaving the verb in the infinitive (*solicitamos que as famílias verificar*) is the error to avoid. After *para*, the fix is the personal infinitive: *para as crianças passarem*, not *para as crianças passar*.' },
        { n: 8, cat: 'lingua', text: 'The plural imperative speaks to a group of readers: *esvaziem, guardem, deixem, limpem, mantenham*. These are the third person plural forms of the present subjunctive. The singular (*esvazia, guarda*) would address one person informally.' },
        { n: 9, cat: 'fonte', text: 'Each item from the health text (*vasos, pneus, garrafas, calhas, caixas-d\'água*) becomes a concrete action with its own verb. That shows full use of the source without copying its sentences.' },
        { n: 10, cat: 'lingua', text: '*Caso* is always followed by the subjunctive: *caso a criança apresente*. With *se*, the form changes to the future subjunctive: *se a criança apresentar*.' },
        { n: 11, cat: 'registro', text: '*Evitem a automedicação* is the written expression health notices use. It replaces *não deem remédio por conta própria* and keeps the formal tone.' },
        { n: 12, cat: 'genero', text: 'The notice closes with a standard line (*Contamos com a colaboração de todos*) and is signed *A Direção*, with the school\'s name, place and date. No personal name appears.' }
      ],
      why5: 'The notice speaks for the school to all parents, and every choice follows from that: the plural address, *solicitamos*, plural imperatives and the signature *A Direção*. It opens with the reason for writing, gives one sentence of background from the source, then turns each prevention measure into an action families can take at home. Symptoms and what to do come last, with a request about absences that fits the school\'s role. *Por isso* and *Assim* tie the paragraphs together. The language shows the structures graders reward in this genre: *solicitar que* + subjunctive, *caso* + subjunctive, the crase in *faltaram às aulas* and *à secretaria*, and a formal register that never slips.',
      wordCount: 184
    }
  },

  {
    id: 'folheto',
    name: 'Folheto',
    english: 'Flyer / leaflet',
    summary: 'A short promotional or informational text meant to be read in seconds, with a catchy title, short blocks of information and a call to action. Celpe-Bras uses it for campaigns (health, environment, events) where you pick the key facts from a source and persuade a broad public.',
    role: {
      enunciador: 'An organization, campaign or group: a hospital, an NGO, a volunteer group, a city department.',
      interlocutor: 'The general public, often people passing by who have not decided to read yet.',
      proposito: 'Inform quickly and persuade the reader to act: donate, sign up, attend, change a habit.'
    },
    register: {
      level: 'Semi-formal',
      notes: 'Speaks directly to the reader as *você*, with the imperative forms that match it (*doe, venha, traga*). Friendly but written: no *a gente*, no *pra*, no slang. The organization may use *nós* for itself. Keep *você* to the end; do not switch to *o senhor* or to *tu* forms like *vem* and *traz*.'
    },
    mustHave: [
      'A short, catchy title that names the action',
      'A line that says who is behind the flyer',
      'Short blocks under headings or questions (*Quem pode doar?*, *Como se preparar?*)',
      'Only the key facts from the source, reworded as short items',
      'A direct appeal to the reader with *você* and the imperative',
      'A call to action with where, when and what to bring'
    ],
    skeleton: [
      { part: 'Título', what: 'A catchy line, often in the imperative.', example: 'Doe sangue. Alguém está esperando por você.' },
      { part: 'Quem assina', what: 'The organization behind the campaign.', example: 'Campanha do Grupo de Voluntários do Hospital Vale Verde' },
      { part: 'Por que agir', what: 'One or two facts that create the need.', example: 'Os estoques de sangue precisam de reposição todos os dias.' },
      { part: 'Blocos informativos', what: 'Short blocks under question headings.', example: 'Quem pode doar? Pessoas saudáveis de 16 a 69 anos.' },
      { part: 'Serviço', what: 'Date, time, address, what to bring.', example: 'Sábado, 18 de outubro, das 8h às 14h, na Rua dos Ipês, 450.' },
      { part: 'Chamada para ação', what: 'A final push to act, in the imperative.', example: 'Venha doar e traga um amigo.' }
    ],
    wordChoices: [
      { use: 'doe, venha, traga, evite', avoid: 'doa, vem, traz, evita', why: 'With *você*, the written imperative uses the present subjunctive forms. *Doa, vem, traz* are spoken *tu* forms and look careless in print.' },
      { use: 'pesar no mínimo 50 kg', avoid: 'ter 50 quilos', why: '*Pesar* is the precise verb; *ter 50 quilos* is spoken.' },
      { use: 'é preciso / é necessário', avoid: 'tem que', why: 'Both work, but *é preciso* reads cleaner in print and keeps *ter* out of the text.' },
      { use: 'não venha em jejum', avoid: 'não vem de barriga vazia', why: '*Em jejum* is the standard health term, and *venha* is the *você* imperative.' },
      { use: 'documento oficial com foto', avoid: 'RG ou qualquer documento', why: 'Requirements must be exact. Repeat what the source says, in your own sentence.' },
      { use: 'Participe! / Venha doar!', avoid: 'Participa aí!', why: 'A call to action can be warm without slang.' }
    ],
    pitfalls: [
      'Writing paragraphs. A flyer is scanned, not read: short blocks, one idea per line.',
      'Mixing *você* imperatives with *tu* forms (*doe* and then *vem*). Keep the *você* forms throughout.',
      'Adding requirements that are not in the source. Health rules must be exact; keep the facts and change only the wording.',
      'Forgetting the call to action. The reader must know where to go, when, and what to bring.',
      'Agreement in the requirements: *pessoas saudáveis*, *doadores descansados e alimentados*, *menores de 18 anos*.',
      'Dropping accents on short words that carry the message: *doação, saúde, mínimo, também, você*.'
    ],
    sample: {
      task: 4,
      source: {
        kind: 'texto',
        title: 'Doação de sangue: quem pode doar e como se preparar',
        body: [
          'A doação de sangue é um gesto simples e seguro, e os hospitais dependem dela todos os dias. O sangue não pode ser fabricado, e cada bolsa coletada ajuda pacientes em cirurgias, tratamentos e emergências. Em períodos de férias e feriados, as doações costumam cair, e os estoques ficam baixos.',
          'Para doar, é preciso ter entre 16 e 69 anos. Jovens de 16 e 17 anos só podem doar com a autorização do responsável legal. Também é necessário pesar no mínimo 50 kg e estar em boas condições de saúde.',
          'No dia da doação, o candidato deve estar descansado e alimentado. Não se deve doar em jejum, e é recomendado evitar alimentos gordurosos nas horas anteriores à coleta. Além disso, é obrigatório apresentar um documento oficial com foto.',
          'Antes da coleta, cada candidato passa por uma avaliação com a equipe de saúde, que garante a segurança de quem doa e de quem recebe o sangue.'
        ]
      },
      prompt: 'Você faz parte do grupo de voluntários do Hospital Vale Verde, que vai realizar uma campanha de doação de sangue no sábado, 18 de outubro, das 8h às 14h, no próprio hospital (Rua dos Ipês, 450). Com base no texto, escreva um folheto para ser distribuído no bairro, convidando os moradores a doar sangue e informando quem pode doar, como se preparar e o que levar.',
      answer: [
        '{{1|Doe sangue. Alguém está esperando por você.}}',
        '{{2|Campanha do Grupo de Voluntários do Hospital Vale Verde}}',
        '{{3|Os hospitais precisam de sangue todos os dias, e ele não pode ser fabricado. Em períodos de férias e feriados, as doações costumam cair.}} {{4|Por isso,}} {{5|a sua doação faz diferença.}}',
        '{{6|Quem pode doar?}}',
        '{{7|Pessoas saudáveis}} de 16 a 69 anos, com peso mínimo de 50 kg. Menores de 18 anos precisam da autorização do responsável legal.',
        '{{6|Como se preparar?}}',
        '{{8|Durma bem na noite anterior e não venha em jejum.}} {{9|Evite}} alimentos gordurosos antes da doação.',
        '{{6|O que levar?}}',
        'Um documento oficial com foto.',
        '{{6|Quando e onde?}}',
        'Sábado, 18 de outubro, {{10|das 8h às 14h}}, no Hospital Vale Verde, Rua dos Ipês, 450.',
        '{{11|Doar é simples e seguro. Antes da coleta, uma equipe de saúde faz uma avaliação para garantir a segurança de quem doa e de quem recebe.}}',
        '{{12|Venha doar e traga um amigo. Um gesto simples pode salvar vidas.}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'A short, catchy title in the imperative, followed by a line that speaks to the reader\'s feelings. On a flyer, the title has to stop people in two seconds.' },
        { n: 2, cat: 'papel', text: 'The second line says who is behind the campaign, which puts the prompt\'s role on the page. Readers trust a flyer more when a named group signs it.' },
        { n: 3, cat: 'fonte', text: 'Three facts from the source (constant need, blood cannot be made, fewer donations in holidays) are reworded into two short sentences. They give the reason to act before any rule appears.' },
        { n: 4, cat: 'coesao', text: '*Por isso* ties the need to the reader\'s action. Even in a text made of short blocks, one connector keeps the opening from reading like a list.' },
        { n: 5, cat: 'registro', text: 'The flyer talks to the reader as *você* (*a sua doação*) and keeps that choice to the end: *durma, venha, evite, traga*. It stays warm with no *a gente* and no *pra*.' },
        { n: 6, cat: 'genero', text: 'Headings as questions (*Quem pode doar? Como se preparar?*) break the text into blocks the reader can scan. This layout is what makes it a flyer instead of a letter.' },
        { n: 7, cat: 'lingua', text: '*Saudáveis* agrees with *pessoas* (feminine plural). Adjectives ending in *-el* form the plural in *-eis*, with an accent when the stress falls there: *saudável, saudáveis*; *possível, possíveis*.' },
        { n: 8, cat: 'fonte', text: 'The source says *descansado e alimentado* and *não se deve doar em jejum*. The flyer turns both into direct instructions. These are health rules, so the facts stay exactly as given and only the wording changes.' },
        { n: 9, cat: 'lingua', text: 'With *você*, the imperative uses the present subjunctive forms: *evite, durma, venha, traga, doe*. *Evita, vem, traz, doa* are spoken forms.' },
        { n: 10, cat: 'lingua', text: '*Das 8h às 14h*: *de* + *as* and *a* + *as*, because *horas* is feminine and understood. The same pattern gives *das 9h às 17h* and *à uma hora*.' },
        { n: 11, cat: 'fonte', text: 'The health screening from the source goes near the end as reassurance. Some people hesitate to donate because they are afraid, and this line answers that doubt without adding any fact the source does not give.' },
        { n: 12, cat: 'genero', text: 'The call to action closes the flyer with two imperatives and a short reason. The date, time and address above it tell the reader exactly where to go.' }
      ],
      why5: 'The flyer has everything the genre asks for. It opens with a title that catches the eye and a line naming the volunteer group, organizes the information in short blocks under question headings, and ends with a call to action. It uses every requirement in the source, reworded but factually exact, and adds only what the prompt gave (date, time, address). The reader is addressed as *você* throughout, with correct imperative forms (*durma, venha, evite, traga*). The opening gives a reason to act before listing rules, which is the persuasive move a campaign needs. Agreement (*pessoas saudáveis*), crase (*das 8h às 14h*) and accents are clean, and every sentence can be taken in at a glance.',
      wordCount: 157
    }
  },

  {
    id: 'convite',
    name: 'Convite',
    english: 'Invitation',
    summary: 'A text that invites a group or a person to an event and gives everything needed to attend. On Celpe-Bras it usually comes from an association, school or company inviting a community to take part, so it mixes information with persuasion.',
    role: {
      enunciador: 'An organizer: a neighborhood association, a school, a company, a group of friends.',
      interlocutor: 'The people invited: residents, parents, colleagues, friends.',
      proposito: 'Invite, explain what the event is and why it matters, and give the practical details (date, time, place, what to bring, how to sign up).'
    },
    register: {
      level: 'Semi-formal',
      notes: 'A community invitation usually addresses readers as *vocês* (plural imperative: *venham, tragam*) and the organizers speak as *nós*. Warm but written: no *a gente*, no *pra*, no *tá*. A formal invitation (a ceremony, a company event) moves to *os senhores* and *temos a honra de convidar*.'
    },
    mustHave: [
      'A title or opening that names the event',
      'Who is inviting and whom',
      'What, when and where: date, time and exact meeting point',
      'Why it matters, with one or two facts from the source',
      'How to take part: what to bring, what the organizers provide, how and by when to sign up',
      'A warm closing that repeats the invitation, and the organizer as signer'
    ],
    skeleton: [
      { part: 'Título', what: 'The event and the place.', example: 'Mutirão de limpeza no Parque do Ipê Amarelo' },
      { part: 'Vocativo', what: 'A warm but written greeting.', example: 'Caros vizinhos,' },
      { part: 'Convite', what: 'Who invites, whom, to what, when and where.', example: 'A Associação de Moradores convida todos os moradores a participar de um mutirão de limpeza.' },
      { part: 'Por que participar', what: 'The problem, with facts from the source.', example: 'Uma vistoria recente encontrou muito lixo acumulado no parque.' },
      { part: 'Como participar', what: 'What is provided, what to bring, how to sign up.', example: 'Para participar, basta enviar nome e endereço pelo WhatsApp da associação.' },
      { part: 'Fechamento e assinatura', what: 'A last reason, the invitation repeated, the organizer.', example: 'Contamos com a presença de vocês! / Diretoria da Associação de Moradores' }
    ],
    wordChoices: [
      { use: 'convidamos vocês a participar', avoid: 'convidamos vocês participar', why: '*Convidar alguém a* (or *para*) *fazer algo*. Dropping the preposition is the same regência error as *incentivar as crianças usar*.' },
      { use: 'há muito lixo', avoid: 'tem muito lixo', why: '*Há* is the written form for "there is".' },
      { use: 'venham, tragam', avoid: 'vem, traz', why: 'For *vocês*, the imperative is the third person plural of the present subjunctive.' },
      { use: 'a prefeitura vai fornecer', avoid: 'a prefeitura vai dar', why: '*Fornecer* is the precise written verb for supplies and equipment.' },
      { use: 'contamos com a presença de todos', avoid: 'espero todo mundo lá', why: 'A written closing in the organizers\' plural voice.' },
      { use: 'mutirão', avoid: 'evento de limpeza voluntário', why: '*Mutirão* is the Brazilian word for a community work day. The long phrase is a calque of "volunteer cleanup event".' }
    ],
    pitfalls: [
      'Leaving out practical details. Date, time, meeting point, what to bring and how to sign up must all be there.',
      'Dropping the preposition after *convidar*, *incentivar*, *ajudar* (*convidamos vocês participar*). Write *convidar alguém a* or *para fazer algo*.',
      'Only informing, never persuading. Give one or two concrete reasons from the source that show why the event matters.',
      'Agreement with the nouns of the event: *o lixo acumulado*, *as luvas*, *os sacos reforçados*, *crianças bem-vindas*.',
      'Starting sentences with *Mas* or *E*. Use *No entanto* or *Além disso*, or join the two sentences.',
      'Copying the city\'s official wording. Rewrite it for neighbors, in shorter sentences.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Situação do Parque do Ipê Amarelo',
        body: [
          'Prezada Associação de Moradores do Bairro Nova Aurora,',
          'A Secretaria Municipal de Meio Ambiente informa que realizou, na última semana, uma vistoria no Parque do Ipê Amarelo. A equipe encontrou grande quantidade de lixo acumulado, principalmente garrafas plásticas, latas e sacolas, além de entulho perto da trilha de caminhada. O córrego que atravessa o parque está com o leito obstruído em alguns pontos, o que aumenta o risco de alagamento em dias de chuva.',
          'O lixo acumulado atrai ratos e baratas e pode servir de criadouro para o mosquito da dengue.',
          'A Secretaria apoia mutirões organizados pela comunidade. Para ações desse tipo, podemos fornecer luvas, sacos de lixo reforçados e um caminhão para recolher o material ao final da atividade. O pedido deve ser feito com pelo menos dez dias de antecedência.',
          'Atenciosamente,',
          'Secretaria Municipal de Meio Ambiente'
        ]
      },
      prompt: 'Você faz parte da diretoria da Associação de Moradores do Bairro Nova Aurora. A associação decidiu organizar um mutirão de limpeza no Parque do Ipê Amarelo no domingo, 9 de novembro, das 8h ao meio-dia, e já solicitou o apoio da prefeitura. Com base na mensagem da Secretaria Municipal de Meio Ambiente, escreva um convite aos moradores do bairro, que será afixado nos prédios e publicado no grupo da associação. Explique por que o mutirão é importante, informe o que a prefeitura vai oferecer e diga como participar.',
      answer: [
        '{{1|Mutirão de limpeza no Parque do Ipê Amarelo}}',
        '{{2|Caros vizinhos,}}',
        '{{3|A Associação de Moradores do Bairro Nova Aurora}} {{4|convida todos os moradores a participar de}} um mutirão de limpeza no Parque do Ipê Amarelo. {{5|O encontro será no domingo, 9 de novembro, das 8h ao meio-dia, no portão principal do parque.}}',
        '{{6|Uma vistoria recente da prefeitura encontrou muito lixo acumulado no parque, principalmente garrafas plásticas, latas e sacolas.}} {{7|Além disso,}} o lixo bloqueia o córrego em alguns pontos, o que aumenta o risco de alagamento quando chove. {{7|Esse lixo}} também atrai ratos e baratas e pode se tornar criadouro do mosquito da dengue.',
        '{{8|A Secretaria Municipal de Meio Ambiente vai fornecer luvas, sacos de lixo reforçados e um caminhão para recolher o material no fim do mutirão.}} {{9|Pedimos que cada participante traga}} uma garrafa de água, boné e protetor solar, e {{9|que use}} calçado fechado.',
        '{{5|Para participar, basta enviar nome e endereço pelo WhatsApp da associação até sexta-feira, 7 de novembro.}} {{10|Crianças são bem-vindas, desde que acompanhadas por um adulto.}}',
        '{{11|O parque é de todos nós. Contamos com a presença de vocês!}}',
        '{{12|Diretoria da Associação de Moradores do Bairro Nova Aurora}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'The title names the event and the place, so anyone passing the notice board knows at once what it is about.' },
        { n: 2, cat: 'registro', text: '*Caros vizinhos* is warm but still written, which suits a notice posted in buildings and in a group chat. *Oi, galera* would be too casual, and *Prezados senhores* too stiff for neighbors.' },
        { n: 3, cat: 'papel', text: 'The first sentence says who invites (the association) and whom (the residents), so the role from the prompt is on the page from the first line.' },
        { n: 4, cat: 'lingua', text: 'Two cases of regência in one phrase: *convidar alguém a* (or *para*) *fazer algo*, and *participar de algo*. The same pattern gives *incentivar as crianças a usar* and *ajudar os moradores a separar o lixo*. The preposition before the infinitive is not optional.' },
        { n: 5, cat: 'genero', text: 'The practical details every invitation needs. When and where come in the first paragraph (*domingo, 9 de novembro, das 8h ao meio-dia, portão principal*), and how and by when to sign up come near the end.' },
        { n: 6, cat: 'fonte', text: 'The city\'s inspection is the main reason to join, so it comes right after the invitation. The official wording (*grande quantidade de lixo acumulado*) is simplified for neighbors, and the three types of waste stay.' },
        { n: 7, cat: 'coesao', text: '*Além disso* adds a second problem, and *esse lixo* points back to the waste already described. The paragraph builds the case for joining instead of listing disconnected facts.' },
        { n: 8, cat: 'fonte', text: 'The support offered in the source (gloves, bags, a truck) answers the reader\'s practical question about what they need to bring. It also shows the event is organized with the city.' },
        { n: 9, cat: 'lingua', text: '*Pedimos que* + present subjunctive: *traga*, *use*. After *pedir que*, *solicitar que* and *recomendar que*, the verb is conjugated, never left in the infinitive.' },
        { n: 10, cat: 'lingua', text: '*Bem-vindas* and *acompanhadas* agree with *crianças* (feminine plural). Participles used as adjectives must match their noun in gender and number.' },
        { n: 11, cat: 'papel', text: 'The closing gives one last reason (*o parque é de todos nós*) and repeats the invitation. The organizers speak as *nós* and address the readers as *vocês*, as in the rest of the text.' },
        { n: 12, cat: 'genero', text: 'The invitation is signed by the association\'s board, which is the role in the prompt. No personal name appears.' }
      ],
      why5: 'The invitation meets the prompt point by point. It says who invites whom, gives the date, time and meeting point in the first paragraph, explains why the park needs help with facts from the city\'s message, lists what the city provides and what volunteers should bring, and ends with how and when to sign up. The tone suits neighbors: warm, first person plural, no slang. *Além disso* and *esse lixo* keep the paragraph about the park\'s condition connected. The language shows regência (*convidar a*, *participar de*), *pedir que* + subjunctive, and agreement with a feminine plural noun (*bem-vindas*, *acompanhadas*), which are the structures that cost points when they go wrong.',
      wordCount: 191
    }
  },

  {
    id: 'resumo',
    name: 'Resumo',
    english: 'Summary',
    summary: 'A short, neutral text that presents the main ideas of another text to readers who have not read it. Celpe-Bras may ask for a summary for a newsletter, a report or colleagues, and it grades whether you keep only the essentials and stay neutral.',
    role: {
      enunciador: 'Someone who read the original and passes it on: an employee, a student, a member of a school\'s staff.',
      interlocutor: 'Colleagues or newsletter readers who need the main ideas without reading the original.',
      proposito: 'Present the main ideas of a text faithfully and briefly, without adding opinion.'
    },
    register: {
      level: 'Neutral',
      notes: 'Third person and present tense. The summary names its source and attributes ideas to it (*a reportagem afirma*, *segundo a reportagem*). No *eu acho*, no evaluation (*interessante, excelente*), and no advice unless the original gives it, and then as the author\'s advice.'
    },
    mustHave: [
      'An opening sentence that names the source (type of text, title, outlet) and its main idea',
      'Only the essential points, in the logical order of the original',
      'Varied attribution verbs: *afirma, explica, destaca, alerta, conclui*',
      'Third person and present tense throughout',
      'No personal opinion and no information that is not in the original',
      'Connectors that show how the ideas relate (*além disso, por isso, por outro lado*)'
    ],
    skeleton: [
      { part: 'Título', what: 'Labels the text as a summary and names the topic.', example: 'Resumo: IA e dever de casa' },
      { part: 'Abertura', what: 'Names the source and states its main idea.', example: 'A reportagem "O dever de casa na era da inteligência artificial" discute como os estudantes usam a IA.' },
      { part: 'Ideias principais', what: 'One sentence or two per main point, attributed.', example: 'Segundo a reportagem, muitos alunos já recorrem a essas ferramentas.' },
      { part: 'Ressalvas e soluções', what: 'Problems and responses the source presents.', example: 'A reportagem também alerta que a IA comete erros.' },
      { part: 'Conclusão do original', what: 'The author\'s conclusion, not yours.', example: 'A reportagem conclui que a questão principal é como os alunos vão usar a IA.' }
    ],
    wordChoices: [
      { use: 'segundo a reportagem / a reportagem afirma', avoid: 'eu li que / o texto fala que', why: 'Name the source with an attribution verb. *Fala que* is spoken and vague.' },
      { use: 'destaca, alerta, explica, conclui', avoid: 'diz, fala (repeated)', why: 'Varying the verb shows what the author is doing at each point: warning, explaining, concluding.' },
      { use: 'os estudantes', avoid: 'a gente / os nossos alunos', why: 'The summary reports the article, which speaks about students in general.' },
      { use: 'Além disso / Por outro lado', avoid: 'E também / Mas', why: 'Written connectors. Do not open a sentence with *Mas*.' },
      { use: 'a reportagem mostra que', avoid: 'foi descoberto que', why: '*Foi descoberto que* is a calque of "it was found that". Say who found or showed it.' },
      { use: 'preocupados com', avoid: 'preocupados sobre', why: 'The verb is *preocupar-se com*. *Sobre* is a calque of "worried about".' }
    ],
    pitfalls: [
      'Adding your own opinion at the end (*Na minha opinião, a IA é perigosa*). A summary ends with the author\'s conclusion.',
      'Retelling every example. Keep the main idea of each paragraph and drop the illustrations.',
      'Copying sentences from the original. Reword them with your own structures and keep the attributions.',
      'Repeating *o autor diz* in every sentence. Vary the verb and use connectors.',
      'English calques such as *foi descoberto que*. Name the agent: *a reportagem mostra que*, *os educadores constatam que*.',
      'Run-on sentences chained with *e*. A summary works best in short sentences with one idea each.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'O dever de casa na era da inteligência artificial',
        body: [
          'Basta uma pergunta digitada no celular para receber uma redação pronta ou a resolução de uma lista de exercícios. Ferramentas de inteligência artificial (IA) já fazem parte da rotina de muitos estudantes, e os professores ainda estão aprendendo a lidar com isso.',
          'O uso varia bastante. Alguns alunos pedem à ferramenta que explique um conteúdo de outra forma, que dê exemplos ou que corrija um texto que eles mesmos escreveram. Outros copiam a resposta sem ler. Nesse caso, a tarefa perde o sentido: o aluno entrega o trabalho, mas não aprende.',
          'Outro problema é que essas ferramentas erram. Elas podem inventar dados e apresentar informações falsas com total segurança, e quem não domina o assunto dificilmente percebe o erro.',
          'Proibir o uso parece pouco eficaz, segundo educadores ouvidos pela reportagem. Algumas escolas preferem mudar as atividades: mais produção em sala, apresentações orais e tarefas que peçam o rascunho e as etapas do trabalho. Outras ensinam os alunos a usar a IA como apoio, conferindo as informações em outras fontes e informando quando a ferramenta foi usada.',
          'Para os especialistas, a pergunta principal deixou de ser se os alunos vão usar a IA. Agora, a pergunta é como vão usá-la.'
        ]
      },
      prompt: 'Você trabalha na coordenação pedagógica do Colégio Novo Rumo. A escola publica um boletim mensal para os professores, e a coordenação vai discutir o uso da inteligência artificial nas tarefas de casa na próxima reunião pedagógica. Escreva, para o boletim, um resumo da reportagem "O dever de casa na era da inteligência artificial", publicada na revista Sala Aberta. Apresente as principais ideias do texto de forma objetiva, sem incluir sua opinião.',
      answer: [
        '{{1|Resumo: IA e dever de casa}}',
        '{{2|A reportagem "O dever de casa na era da inteligência artificial", publicada pela revista Sala Aberta, discute como os estudantes usam ferramentas de IA nas tarefas escolares e como as escolas podem reagir.}}',
        '{{3|Segundo a reportagem,}} muitos alunos já {{4|recorrem a}} essas ferramentas, mas de formas diferentes. {{5|Alguns pedem explicações, exemplos ou a correção de textos que eles mesmos escreveram. Outros apenas copiam as respostas prontas.}} {{6|Nesse caso,}} a tarefa perde o sentido, porque o aluno entrega o trabalho sem aprender.',
        'A reportagem também {{7|alerta}} que a IA comete erros e pode apresentar informações falsas como se fossem verdadeiras. {{6|Por isso,}} quem não domina o assunto dificilmente percebe o problema.',
        '{{8|Educadores ouvidos pela reportagem consideram}} que proibir o uso é pouco eficaz. {{9|Em vez de}} proibir, algumas escolas mudam as atividades, com mais produção em sala, apresentações orais e tarefas que exigem o rascunho e as etapas do trabalho. Outras {{10|ensinam os alunos a usar}} a IA como apoio, a conferir as informações em outras fontes e a informar quando usaram a ferramenta.',
        '{{11|A reportagem conclui que}} a questão principal já não é se os estudantes vão usar a IA, mas como vão usá-la.'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'A short title that labels the text as a summary and names the topic, so teachers see at once what they are reading.' },
        { n: 2, cat: 'papel', text: 'The opening sentence names the source (type of text, title, outlet) and its main idea. Teachers who never saw the article know what it is and what it covers before any detail.' },
        { n: 3, cat: 'genero', text: 'This is the exception to a rule you follow everywhere else. In other Celpe-Bras texts you never write *segundo o texto* or *o vídeo mostra*, because your reader never saw the exam material and your text has to stand on its own. A *resumo* is different because its whole purpose is to report another text. It must name that text and attribute ideas to it, so *segundo a reportagem* and *a reportagem afirma* are genre markers here. Leaving them out would make the article\'s ideas look like yours. Refer to the article by its title or as *a reportagem*, never as the text from the exam.' },
        { n: 4, cat: 'lingua', text: '*Recorrer a algo*: the verb takes *a*. Watch the same kind of choice with *preocupados com* (not *sobre*) and *entregar algo a alguém* (not *com*).' },
        { n: 5, cat: 'fonte', text: 'The article\'s examples are condensed into two short sentences that contrast two groups (*Alguns... Outros...*). A summary keeps the idea and drops the illustrations.' },
        { n: 6, cat: 'coesao', text: '*Nesse caso* and *Por isso* show cause and consequence between sentences. They replace chains of *e* and keep each sentence to one idea.' },
        { n: 7, cat: 'registro', text: 'Varied attribution verbs (*discute, alerta, consideram, conclui*) show what the source is doing at each point: warning, judging, concluding. Repeating *diz* or *fala* is the spoken default.' },
        { n: 8, cat: 'papel', text: 'The view that banning does not work belongs to the educators in the article, so it is attributed to them. The summary writer takes no side; *eu acho* or *concordo* would break the genre.' },
        { n: 9, cat: 'lingua', text: '*Em vez de* is the safest way to write "instead of". If you prefer *ao invés de*, it needs the accent on *invés*, and careful writers keep it for "the opposite of".' },
        { n: 10, cat: 'lingua', text: '*Ensinar alguém a fazer algo*. The preposition *a* repeats before each infinitive in the list: *a usar, a conferir, a informar*. Leaving it out (*ensinam os alunos usar*) is the same error as *incentivar as crianças usar*.' },
        { n: 11, cat: 'genero', text: 'The summary ends with the article\'s conclusion, marked with *a reportagem conclui que*. The writer adds no closing opinion or advice of their own.' }
      ],
      why5: 'The summary gives teachers what they need. It names the article and its main idea in the first sentence, then covers each essential point in the original order: how students use AI, the problem with copying, the tools\' errors, how schools respond, and the conclusion. Ideas are attributed to the source with varied verbs, which is correct in this genre even though it would be wrong in a letter or an opinion piece. The writer\'s opinion never appears. Connectors mark the logic between points, sentences are short, and the language models two regência patterns that often go wrong (*recorrer a*, *ensinar alguém a*) and the spelling of *em vez de*.',
      wordCount: 200
    }
  }
);
