window.CB = window.CB || {};
CB.genres = CB.genres || [];
CB.genres.push(

  // 1. Carta do leitor
  {
    id: 'carta-do-leitor',
    name: 'Carta do leitor',
    english: 'Letter to the editor',
    summary: 'A short letter a reader sends to a newspaper or magazine to react to something it published. Celpe-Bras uses it to see whether you can take a position on a report, back it with your own experience and write to a public you do not know.',
    role: {
      enunciador: 'A reader of the publication, usually someone the topic affects: a resident, a parent, a worker.',
      interlocutor: 'The editors, and through them the other readers of the paper. They know the report exists but you still need to say which one you are answering.',
      proposito: 'Comment on a report, agree or disagree with it, tell your own experience, criticize a situation, suggest a solution or ask an authority to act.'
    },
    register: {
      level: 'Formal',
      notes: 'First person singular (*eu*), with *nós* only when you speak for your family or neighborhood. Address the paper as *Prezados editores* or *Prezada redação*, never *vocês*. Avoid *a gente*, *tem* in place of *há*, and sentences that open with *Mas*. The tone is firm and polite, not angry.'
    },
    mustHave: [
      'Local e data at the top, then a vocativo such as *Prezados editores,*',
      'An opening line that names the report you are reacting to, by title or topic',
      'Your position in one clear sentence early in the letter',
      'Your own experience as evidence, told in the first person',
      'At least two pieces of information from the report, reworded, never copied whole',
      'A concrete suggestion or demand when the prompt asks for one (*a prefeitura deve...*)',
      'A formal closing (*Atenciosamente,*) and a role signature, never a real name'
    ],
    skeleton: [
      { part: 'Local e data', what: 'City and full date on their own line.', example: 'São José dos Campos, 20 de outubro de 2026.' },
      { part: 'Vocativo', what: 'A formal greeting to the paper.', example: 'Prezados editores,' },
      { part: 'Referência à matéria', what: 'Name the report and say why you are writing.', example: 'Li a reportagem "Interior ganha novos moradores com o trabalho remoto" e gostaria de comentar o assunto.' },
      { part: 'Posição e experiência', what: 'Say what you think and back it with your own case.', example: 'Moro em São José dos Campos e trabalho de casa há três anos.' },
      { part: 'Contraponto', what: 'Acknowledge the other side that the report raised.', example: 'No entanto, no meu bairro o aluguel subiu bastante.' },
      { part: 'Proposta', what: 'What the authority should do, in two or three steps.', example: 'Em primeiro lugar, é preciso investir em moradia acessível.' },
      { part: 'Fecho e assinatura', what: 'One sentence that sums up, then the closing and a role signature.', example: 'Atenciosamente, / Um leitor de São José dos Campos' }
    ],
    wordChoices: [
      { use: 'Moro aqui há três anos.', avoid: 'Tem três anos que moro aqui.', why: '*Há* for elapsed time is the written norm. *Tem* in this sense belongs to speech.' },
      { use: 'No entanto, / Porém,', avoid: 'Mas, (opening a sentence)', why: 'A sentence or paragraph that opens with *Mas* reads as speech. *No entanto* and *Porém* do the same job in formal writing.' },
      { use: 'a prefeitura deve investir', avoid: 'a prefeitura tem que investir', why: '*Deve* and *é preciso* sound measured. *Tem que* is normal in conversation but sounds pushy in a letter to a paper.' },
      { use: 'nós enfrentamos', avoid: 'a gente enfrenta', why: '*A gente* is spoken Portuguese. In a formal letter use *nós* with the *-mos* verb form.' },
      { use: 'a reportagem / a matéria', avoid: 'o artigo que vocês publicaram', why: 'Refer to the text by its genre and title. Calling the editors *vocês* drops the register.' },
      { use: 'os moradores antigos', avoid: 'as pessoas que moravam aqui antes', why: 'A compact noun phrase keeps the sentence short and sounds written.' }
    ],
    pitfalls: [
      'Writing about the topic in general and forgetting that you are answering a specific report. Name it in the first paragraph.',
      'Copying sentences from the report. Take the facts and rewrite them: *urbanistas* can become *especialistas*, and rising rents can become *o aluguel subiu bastante*.',
      'Writing *segundo o texto*. In this genre the source is the paper\'s own report, so you call it *a reportagem* or give its title. The words *texto*, *prova* and *enunciado* never appear.',
      'Gender slips on the nouns this topic uses: *a lei*, *a prefeitura*, *a moradia*, *a proibição*, *o aluguel*, *o bairro*. Check every article and adjective against its noun.',
      'One long sentence chained with *e* and commas. Break it at each new idea.',
      'Signing with your own name. Sign with a role: *Um leitor de Sorocaba*, *Uma moradora do Centro*.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Interior ganha novos moradores com o trabalho remoto',
        body: [
          'Desde que o trabalho remoto se tornou comum, um número crescente de famílias tem trocado a capital paulista por cidades do interior, como São José dos Campos, Sorocaba e Ribeirão Preto. Os novos moradores dizem que buscam aluguel mais barato, menos trânsito e mais tempo com os filhos.',
          '"Em São Paulo, eu passava duas horas por dia no carro. Hoje levo meus filhos a pé para a escola", conta a designer Renata Lopes, que se mudou para Sorocaba no ano passado.',
          'A mudança, porém, tem outro lado. Nos bairros mais procurados, os aluguéis subiram, e moradores antigos relatam dificuldade para continuar vivendo onde sempre viveram. "Meu aluguel aumentou muito em dois anos. Vários vizinhos já foram embora", afirma o aposentado Sérgio Almeida, de Ribeirão Preto.',
          'Para urbanistas ouvidos pela reportagem, as prefeituras precisam se preparar para esse crescimento. Eles defendem investimentos em transporte público, internet de qualidade em todos os bairros e programas de moradia acessível, para que a chegada de novos moradores não expulse quem já vive nessas cidades.'
        ]
      },
      prompt: 'Você mora em uma cidade do interior e trabalha de casa. No jornal Gazeta Regional, você leu a reportagem "Interior ganha novos moradores com o trabalho remoto". Escreva uma carta do leitor para o jornal, comentando a reportagem, relatando a sua experiência e dizendo o que a prefeitura da sua cidade deve fazer diante dessa situação.',
      answer: [
        '{{1|São José dos Campos, 20 de outubro de 2026.}}',
        '{{1|Prezados editores,}}',
        '{{2|Li a reportagem "Interior ganha novos moradores com o trabalho remoto" e gostaria de comentar o assunto}} a partir da minha experiência.',
        '{{3|Moro em São José dos Campos e trabalho de casa}} {{6|há três anos}}. Para a minha família, a mudança foi muito positiva. Hoje {{4|enfrentamos menos trânsito, passamos mais tempo juntos e gastamos menos com aluguel}} do que na capital.',
        '{{5|No entanto,}} concordo com {{4|os moradores antigos}} citados na matéria. No meu bairro, {{4|o aluguel subiu bastante}}, e alguns vizinhos tiveram que se mudar para mais longe. {{7|Não é justo que a chegada de novas pessoas prejudique}} quem sempre viveu aqui.',
        '{{9|Por isso,}} acredito que a prefeitura {{8|deve ouvir os especialistas}} e planejar melhor o crescimento da cidade. {{9|Em primeiro lugar,}} é preciso investir em {{10|moradia acessível}}. {{9|Além disso,}} {{10|o transporte público e a internet de qualidade}} {{11|precisam chegar a todos os bairros}}, e não apenas aos mais ricos.',
        'O interior pode receber bem quem chega, {{7|desde que ninguém fique para trás}}.',
        '{{12|Atenciosamente,}}',
        '{{12|Um leitor de São José dos Campos}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'Local e data and the vocativo each sit on their own line. *Prezados editores* is the safe formal greeting for a newspaper. *Olá* or *Oi* would signal the wrong genre.' },
        { n: 2, cat: 'papel', text: 'The first sentence tells the editors which report you are answering and that you are writing to comment on it. That covers the purpose of the letter before any argument starts.' },
        { n: 3, cat: 'papel', text: 'Takes on the role the prompt assigned (interior resident who works from home) in one plain sentence. Graders check that you wrote as that person, so say it early.' },
        { n: 4, cat: 'fonte', text: 'Facts from the report reworded as personal experience: less traffic, more family time, lower rent. Later, *os moradores antigos* and *o aluguel subiu bastante* bring in the other side of the report without copying its sentences.' },
        { n: 5, cat: 'coesao', text: '*No entanto* opens the paragraph that turns to the problem. Starting it with *Mas* would read as speech. *No entanto* or *Porém* is the written choice.' },
        { n: 6, cat: 'registro', text: '*Há três anos* is the written way to express elapsed time. *Tem três anos que...* is spoken Portuguese and costs register points in a formal letter.' },
        { n: 7, cat: 'lingua', text: 'Judgment expressions (*não é justo que*) and conditions (*desde que*) take the subjunctive: *prejudique*, *fique*. The same goes for *é importante que*, *é preciso que*, *para que*.' },
        { n: 8, cat: 'registro', text: '*Deve* is firm and polite. *Tem que* is common in speech but sounds like an order shouted at the city.' },
        { n: 9, cat: 'coesao', text: 'A chain of connectors orders the argument. *Por isso* draws the conclusion from the two previous paragraphs, and *Em primeiro lugar* and *Além disso* list the proposals. The reader follows the steps without any long sentences.' },
        { n: 10, cat: 'fonte', text: 'The urban planners\' proposals from the report turned into the writer\'s own demands. The source said *programas de moradia acessível* and *internet de qualidade em todos os bairros*; the letter applies them to its own city.' },
        { n: 11, cat: 'lingua', text: '*O transporte público e a internet* is a compound subject, so the verb goes to the plural: *precisam*. There is no crase in *chegar a todos os bairros* because *bairros* is masculine.' },
        { n: 12, cat: 'genero', text: '*Atenciosamente* is the standard formal closing. The signature gives a role, not a name, which is enough for a letter to the editor.' }
      ],
      why5: 'The letter fits the context in every line. The writer is the interior resident who works from home, the reader is the editor of the Gazeta Regional, and the three purposes the prompt set (comment, tell the experience, say what the prefeitura should do) are covered in that order. It uses the report on both sides, the gains for newcomers and the rising rents for long-time residents, and it turns the planners\' proposals into concrete demands, all reworded. Each paragraph has one job, and connectors (*No entanto*, *Por isso*, *Em primeiro lugar*, *Além disso*) carry the reader through. The language is simple and correct, with the subjunctive where it is needed and a formal register from greeting to signature.',
      wordCount: 182
    }
  },

  // 2. Reclamação
  {
    id: 'reclamacao',
    name: 'Reclamação',
    english: 'Complaint',
    summary: 'A formal letter or e-mail to a company or public office that reports a problem and demands a fix. Celpe-Bras uses it to check that you can describe facts precisely, state your losses and make a firm demand while staying polite.',
    role: {
      enunciador: 'A customer, user or resident with a problem the reader is responsible for.',
      interlocutor: 'A company department (atendimento, ouvidoria, gerência) or a public office. A stranger with the power to fix the problem.',
      proposito: 'Report the problem, describe what it has cost you, demand a specific solution with a deadline and say what you will do if nothing changes.'
    },
    register: {
      level: 'Formal',
      notes: 'First person singular. Greet with *Prezados senhores* and refer to the company in the third person (*a empresa*, *a NetVale*), not as *vocês*. Firm and factual, never rude. No exclamation marks, no sarcasm, no *vocês têm que*.'
    },
    mustHave: [
      'An *Assunto* line that names the problem and identifies your account (contract, order, address)',
      'Who you are and how long you have been a customer, in the first paragraph',
      'Dates and facts: when the problem started, how often it happens, what you already tried',
      'The concrete losses the problem caused you',
      'A specific demand with a deadline (*em até cinco dias úteis*)',
      'The next step if nothing is solved, stated calmly',
      'A formal closing and a signature that identifies the account, not a real name'
    ],
    skeleton: [
      { part: 'Destinatário', what: 'The department the complaint goes to.', example: 'À Ouvidoria da NetVale' },
      { part: 'Assunto', what: 'The problem plus your account number.', example: 'Assunto: quedas frequentes de internet (contrato nº 48213)' },
      { part: 'Vocativo', what: 'Formal greeting.', example: 'Prezados senhores,' },
      { part: 'Identificação e objetivo', what: 'Who you are and why you are writing.', example: 'Sou cliente da NetVale há dois anos e escrevo para registrar uma reclamação formal.' },
      { part: 'Fatos', what: 'Dates, frequency and what you already did.', example: 'Desde o dia 2 de setembro, a internet cai quase todos os dias.' },
      { part: 'Prejuízos', what: 'What the problem cost you.', example: 'Perdi duas reuniões on-line.' },
      { part: 'Pedido', what: 'What you want, and by when.', example: 'Solicito o conserto definitivo da conexão em até cinco dias úteis.' },
      { part: 'Próximo passo e despedida', what: 'What happens otherwise, then the closing.', example: 'Caso o problema não seja resolvido, registrarei uma queixa na Anatel. / Atenciosamente,' }
    ],
    wordChoices: [
      { use: 'solicito / peço', avoid: 'quero', why: '*Quero* sounds like a demand made at a counter. *Solicito* is firm and formal.' },
      { use: 'Caso o problema não seja resolvido', avoid: 'Se vocês não resolverem', why: 'The passive keeps the focus on the problem instead of blaming people, and it avoids *vocês*.' },
      { use: 'há duas semanas', avoid: 'tem duas semanas', why: '*Há* for elapsed time is the written form.' },
      { use: 'a empresa / a NetVale', avoid: 'vocês', why: 'The third person keeps the distance a formal complaint needs.' },
      { use: 'quedas constantes / frequentes', avoid: 'cai toda hora', why: '*Toda hora* is spoken and vague. *Constantes* plus dates is precise.' },
      { use: 'o serviço contratado', avoid: 'o que eu pago', why: 'The formal phrase names what the company owes you under the contract.' },
      { use: 'prejuízo', avoid: 'problema (for the loss)', why: '*Prejuízo* names the damage the failure caused, which is what the ouvidoria needs to assess.' }
    ],
    pitfalls: [
      'Being vague (*a internet cai muito*). Give dates, frequency and protocol numbers, because the reader needs facts to act.',
      'Forgetting the demand. Many answers describe the problem well and never say what they want. End with a specific request and a deadline.',
      'Sounding angry. Capital letters, exclamation marks and *um absurdo* lower the register score. Firm and polite scores higher.',
      'Dropping the accent on *têm* when the subject is plural (*as falhas têm causado*), and on *já*, *até*, *também*, *através*.',
      'Copying the source\'s list of rights word for word. Pick the ones that fit your case (protocol, discount, next step) and apply them to your situation.',
      'Opening a sentence with *Mas* to change direction. Use *No entanto* or *Porém*.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Internet caiu? Saiba o que você pode exigir da operadora',
        body: [
          'Para quem trabalha ou estuda em casa, ficar sem internet significa perder tempo e dinheiro. Especialistas em direito do consumidor lembram que o cliente não precisa aceitar falhas frequentes sem reagir.',
          'O primeiro passo é registrar a reclamação no atendimento da operadora e anotar o número de protocolo, que a empresa é obrigada a fornecer. Esse número é a prova de que o problema foi comunicado.',
          'Quando o serviço fica interrompido, o consumidor tem direito a um desconto na fatura, proporcional ao tempo sem conexão. Muitas vezes, porém, é preciso pedir o abatimento, porque ele não aparece automaticamente na conta.',
          'Se o atendimento comum não resolver, o próximo passo é procurar a ouvidoria da empresa. Nesse contato, vale informar as datas das falhas e os protocolos anteriores e dizer claramente o que se espera, como o conserto definitivo e o desconto.',
          'Caso a ouvidoria também não dê uma resposta, o cliente pode registrar uma queixa na Anatel, a agência que regula as telecomunicações no Brasil, ou procurar o Procon da sua cidade.'
        ]
      },
      prompt: 'Você trabalha de casa, e a sua internet, fornecida pela empresa NetVale, tem caído com frequência nas últimas semanas. Você já ligou para o atendimento várias vezes, mas o problema continua. Com base nas informações do texto, escreva uma reclamação à ouvidoria da NetVale, relatando o problema e os prejuízos que ele tem causado e exigindo uma solução.',
      answer: [
        '{{2|À Ouvidoria da NetVale}}',
        '{{1|Assunto: quedas frequentes de internet (contrato nº 48213)}}',
        '{{1|Prezados senhores,}}',
        '{{3|Sou cliente da NetVale há dois anos e trabalho de casa como tradutor.}} {{4|Escrevo para registrar uma reclamação formal}} sobre as quedas constantes da minha conexão.',
        'Desde o dia 2 de setembro, a internet cai quase todos os dias, às vezes por mais de três horas. {{5|Liguei para o atendimento quatro vezes e anotei todos os números de protocolo}}, mas a visita técnica prometida nunca aconteceu.',
        'Essas falhas {{6|têm causado}} prejuízos sérios ao meu trabalho. Perdi duas reuniões on-line e {{7|precisei entregar uma tradução a uma editora}} com dois dias de atraso. {{8|Além disso,}} paguei a fatura de setembro integralmente, mesmo sem receber o serviço contratado.',
        '{{8|Diante disso,}} {{9|solicito}} o conserto definitivo da conexão em até cinco dias úteis e {{10|um desconto na próxima fatura, proporcional ao tempo sem serviço}}. {{9|Peço}} também uma resposta por escrito.',
        '{{11|Caso o problema não seja resolvido nesse prazo, registrarei}} uma queixa na {{10|Anatel e no Procon}}.',
        '{{1|Atenciosamente,}}',
        '{{1|Cliente NetVale, contrato nº 48213}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'A complaint opens with an *Assunto* line that states the problem and identifies the account, so the ouvidoria can find your case from the subject alone. It closes with *Atenciosamente* and a signature that identifies the contract instead of a name.' },
        { n: 2, cat: 'lingua', text: 'Crase in *À Ouvidoria*: the preposition *a* ("to") meets the article *a* of the feminine *ouvidoria*. With a masculine noun there is no crase: *ao atendimento*.' },
        { n: 3, cat: 'papel', text: 'Who you are (customer for two years, works from home) in the first sentence. This sets up why the outages cost you money, which the prompt asks you to show.' },
        { n: 4, cat: 'papel', text: 'Names the genre and the purpose outright. From the first paragraph the reader knows this is a formal complaint, not a question for customer service.' },
        { n: 5, cat: 'fonte', text: 'The source says the protocol number is the proof that you reported the problem. Mentioning it shows you already took the first step, which makes the ouvidoria the right next step.' },
        { n: 6, cat: 'lingua', text: '*Têm* with a circumflex is the plural of *tem*: *a falha tem*, *as falhas têm*. Leaving off the accent is an agreement error, not only a spelling slip.' },
        { n: 7, cat: 'lingua', text: 'Regência: *entregar algo a alguém*. The preposition is *a*, and it contracts with an article: *ao cliente*, *à editora*. *Entregar com* is not standard.' },
        { n: 8, cat: 'coesao', text: '*Além disso* adds a second loss, and *Diante disso* moves from the facts to the demands. Each paragraph does one job: facts, losses, demands, next step.' },
        { n: 9, cat: 'registro', text: '*Solicito* and *peço* are firm and polite. *Quero* or *vocês têm que* would make the complaint sound angry and informal, which lowers the register score.' },
        { n: 10, cat: 'fonte', text: 'The proportional discount and the escalation path (Anatel, Procon) come from the source, reworded and applied to this case. The writer asks for the discount explicitly because it often does not appear on the bill by itself.' },
        { n: 11, cat: 'lingua', text: '*Caso* + subjunctive (*seja resolvido*), then the simple future (*registrarei*). This is the written way to state a consequence. *Se não resolverem, eu vou reclamar* is the spoken version.' }
      ],
      why5: 'The text does what the prompt asked, in the right genre and to the right reader. It goes to the NetVale ouvidoria, from a customer who works from home, and it reports the problem, the losses and a clear demand. It uses the source well: the protocol numbers, the proportional discount and the next step to Anatel and Procon all appear, reworded and tied to this case. The paragraphs follow the logic of a complaint (who, facts, losses, demand, consequence), linked by *Além disso* and *Diante disso*. The language is formal and correct, with *têm* agreeing with its plural subject, the crase in *À Ouvidoria* and *caso* with the subjunctive. The tone stays firm without turning rude.',
      wordCount: 172
    }
  },

  // 3. Solicitação
  {
    id: 'solicitacao',
    name: 'Solicitação',
    english: 'Formal request',
    summary: 'A formal letter or e-mail asking a public office, company or institution to do something. Celpe-Bras uses it to test whether you can describe a situation, justify a request with reasons and ask politely.',
    role: {
      enunciador: 'A resident, parent, student or employee who needs something from an institution.',
      interlocutor: 'An office with authority over the matter: a city department, a school principal, a company manager.',
      proposito: 'Request a service, a change or a permission, describe the need, justify it and offer information or help.'
    },
    register: {
      level: 'Formal',
      notes: 'First person singular. Greet with *Prezados senhores* or *Prezado senhor* and refer to the office in the third person (*a Secretaria*). Use polite formulas (*venho solicitar*, *gostaria de pedir*) instead of *quero*. Unlike a complaint, the tone is cooperative, because you want the reader on your side.'
    },
    mustHave: [
      'An *Assunto* line that states the request',
      'Who you are and your link to the place (resident, parent, employee)',
      'The request itself in the first paragraph, clearly worded',
      'A description of the situation with concrete details: where, when, what happens',
      'Reasons that justify the request, including information from the source',
      'A polite closing that thanks the reader and offers help or contact'
    ],
    skeleton: [
      { part: 'Assunto', what: 'What you are asking for, and where.', example: 'Assunto: pedido de faixa de pedestres e lombada na Rua das Palmeiras' },
      { part: 'Vocativo', what: 'Formal greeting.', example: 'Prezados senhores,' },
      { part: 'Identificação e pedido', what: 'Who you are and what you request.', example: 'Sou morador da Rua das Palmeiras e venho solicitar a instalação de uma faixa de pedestres.' },
      { part: 'Descrição da situação', what: 'The concrete problem, with times and places.', example: 'Nos horários de entrada e saída, a rua fica cheia de carros em fila dupla.' },
      { part: 'Justificativa', what: 'Why the request makes sense, with support from the source.', example: 'Especialistas alertam que crianças pequenas não conseguem avaliar bem a velocidade dos carros.' },
      { part: 'Detalhamento do pedido', what: 'How the measure would solve the problem.', example: 'Uma lombada obrigaria os motoristas a reduzir a velocidade.' },
      { part: 'Agradecimento e despedida', what: 'Thanks, an offer of help, closing, role signature.', example: 'Agradeço a atenção e fico à disposição. / Atenciosamente,' }
    ],
    wordChoices: [
      { use: 'venho solicitar', avoid: 'quero pedir', why: '*Venho solicitar* is the standard opening formula for a formal request. *Quero* sounds abrupt.' },
      { use: 'solicito que a Secretaria instale', avoid: 'peço para vocês colocar', why: '*Solicitar que* takes the subjunctive, and it keeps the office in the third person.' },
      { use: 'para as crianças atravessarem', avoid: 'para as crianças atravessar', why: 'When the infinitive has its own subject, it takes the personal ending: *atravessarem*, *passarem*.' },
      { use: 'Há poucos dias', avoid: 'Tem poucos dias', why: '*Há* for elapsed time is the written form.' },
      { use: 'incentivar as crianças a usar', avoid: 'incentivar as crianças usar', why: 'Verbs like *incentivar*, *obrigar*, *ajudar* need *a* before the infinitive.' },
      { use: 'Agradeço a atenção.', avoid: 'Obrigado!', why: 'The formula fits a letter to an authority. *Atenção* is feminine, like every *-ção* noun: *a atenção*, *pela atenção*.' }
    ],
    pitfalls: [
      'Hiding the request at the end. The reader should know what you want after the first paragraph.',
      'Leaving the infinitive bare after a subject: *para as crianças passar*. When the infinitive has its own subject, add the ending: *para as crianças passarem*, *para os motoristas reduzirem*.',
      'Regência with verbs of causing: *incentivar as crianças a usar*, *obrigar os carros a parar*. The *a* before the infinitive is required.',
      'Missing accents on common words in this topic: *prédio*, *portões*, *semáforo*, *também*, *através*, *vários*, *veículos*.',
      'Complaining instead of requesting. Keep the tone cooperative and save the threats for a *reclamação*.',
      'Copying the source\'s list of measures. Choose the ones that match the prompt and explain how they solve your problem.'
    ],
    sample: {
      task: 4,
      source: {
        kind: 'texto',
        title: 'Trânsito perto das escolas exige atenção redobrada',
        body: [
          'Os horários de entrada e saída das escolas estão entre os momentos mais perigosos do trânsito nas cidades. Carros em fila dupla, motoristas apressados e crianças atravessando fora da faixa formam uma combinação de risco.',
          'Especialistas em segurança viária explicam que crianças pequenas têm mais dificuldade para calcular a velocidade de um carro e, por serem baixas, muitas vezes não são vistas pelos motoristas. Por isso, a região em volta das escolas precisa de cuidados especiais.',
          'Entre as medidas recomendadas estão a faixa de pedestres bem sinalizada em frente ao portão, a lombada ou outro redutor de velocidade, placas que indiquem a área escolar e, nos horários de pico, a presença de agentes de trânsito.',
          'Os especialistas lembram ainda que os moradores podem pedir essas melhorias diretamente à prefeitura. Pedidos que descrevem o local com precisão e relatam situações de perigo costumam ter mais chance de serem atendidos.'
        ]
      },
      prompt: 'Você mora na Rua das Palmeiras, em frente à Escola Municipal Vila Esperança, e todos os dias vê crianças atravessando a rua com dificuldade nos horários de entrada e saída. Escreva um e-mail à Secretaria Municipal de Mobilidade solicitando a instalação de uma faixa de pedestres e de uma lombada em frente à escola. Descreva a situação e justifique o seu pedido.',
      answer: [
        '{{1|Assunto: pedido de faixa de pedestres e lombada na Rua das Palmeiras}}',
        '{{1|Prezados senhores,}}',
        '{{2|Sou morador da Rua das Palmeiras,}} {{4|em frente à Escola Municipal Vila Esperança,}} e {{3|venho solicitar}} a instalação de uma faixa de pedestres e de uma lombada diante do portão da escola.',
        '{{5|Todos os dias, nos horários de entrada e saída, a rua fica cheia de carros em fila dupla.}} Muitos motoristas passam em alta velocidade, e as crianças atravessam entre os veículos parados. {{6|Há poucos dias}}, um menino quase foi atropelado perto do portão.',
        '{{7|Especialistas em segurança no trânsito alertam que crianças pequenas não conseguem avaliar bem a velocidade dos carros.}} Além disso, por causa da altura, muitas vezes os motoristas não {{8|as}} enxergam. {{8|Por esse motivo,}} a área em volta das escolas merece atenção especial.',
        '{{9|Uma faixa bem sinalizada e uma lombada}} {{10|obrigariam os motoristas a reduzir}} a velocidade e dariam mais segurança {{11|para as crianças atravessarem}} a rua. Se possível, solicito também {{9|a instalação de placas de área escolar}}.',
        '{{12|Agradeço a atenção e fico}} {{4|à disposição}} {{12|para mostrar o local a um técnico da Secretaria.}}',
        '{{1|Atenciosamente,}}',
        '{{1|Um morador da Rua das Palmeiras}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'The formal e-mail frame: an *Assunto* that states the request and the place, *Prezados senhores*, *Atenciosamente* and a role signature. The subject line alone tells the Secretaria what the message is about.' },
        { n: 2, cat: 'papel', text: 'The writer identifies as the resident the prompt describes and gives the exact location. The source notes that precise requests are more likely to be answered.' },
        { n: 3, cat: 'registro', text: '*Venho solicitar* is the standard formula for opening a formal request. It is polite and direct. *Quero pedir* would sound abrupt to a public office.' },
        { n: 4, cat: 'lingua', text: 'Crase before feminine words after a preposition *a*: *em frente à escola*, *fico à disposição*. With a masculine word it becomes *ao*: *em frente ao portão*.' },
        { n: 5, cat: 'papel', text: 'The prompt asks you to describe the situation, so this paragraph gives a concrete scene: the time of day, the double-parked cars, the speeding, a near accident. Details like these persuade an office more than adjectives do.' },
        { n: 6, cat: 'registro', text: '*Há poucos dias* uses *haver* for elapsed time. *Tem poucos dias* is spoken and would lower the register.' },
        { n: 7, cat: 'fonte', text: 'The expert warning from the source, reworded. *Têm mais dificuldade para calcular* became *não conseguem avaliar bem*, and the point about height became a new sentence. The reader never saw the article, so the fact is attributed to *especialistas*.' },
        { n: 8, cat: 'coesao', text: 'The pronoun *as* refers back to *crianças*, so the noun is not repeated. *Por esse motivo* then draws the conclusion. Reference chains like this keep sentences short without losing the thread.' },
        { n: 9, cat: 'fonte', text: 'Two of the measures the source recommends, the signposted crosswalk and the school-zone signs, used to support the request. The writer picks only the measures that fit the prompt.' },
        { n: 10, cat: 'lingua', text: 'Regência: *obrigar alguém a fazer algo*. The same pattern applies to *incentivar as crianças a usar* and *ajudar os pais a entender*. The *a* before the infinitive is required.' },
        { n: 11, cat: 'lingua', text: 'Personal infinitive. *As crianças* is the subject of *atravessar*, so the infinitive takes the plural ending: *para as crianças atravessarem*. *Para as crianças atravessar* is a common error.' },
        { n: 12, cat: 'genero', text: 'A request closes by thanking the reader and offering help. *Atenção* is feminine like every *-ção* noun: *a atenção*, *pela atenção*, never *pelo atenção*.' }
      ],
      why5: 'The e-mail is written by the resident the prompt describes, to the right office, and it does the three things asked: request the crosswalk and speed bump, describe the situation and justify the request. The request comes in the first paragraph, so the reader knows the purpose at once. The justification uses the source (the expert warning and the recommended measures) in new words and credits it to specialists. Cohesion comes from short paragraphs with one job each, a pronoun that refers back to *crianças* and connectors such as *Além disso* and *Por esse motivo*. The language models exactly the points the learner tends to miss: the personal infinitive, *obrigar a*, crase and the feminine *atenção*. The register stays formal and cooperative throughout.',
      wordCount: 189
    }
  },

  // 4. E-mail pessoal
  {
    id: 'email-pessoal',
    name: 'E-mail pessoal',
    english: 'Personal e-mail',
    summary: 'An informal e-mail to a friend or relative. Celpe-Bras uses it to check that you can switch to a relaxed register while still passing on the source information clearly and completely.',
    role: {
      enunciador: 'A friend, relative or colleague, writing as yourself.',
      interlocutor: 'Someone you know well, often a foreigner or someone new to the topic.',
      proposito: 'Invite, recommend, explain, give news, give advice or tell about an experience.'
    },
    register: {
      level: 'Informal',
      notes: 'Use *você*, first names and exclamations. Speech forms that are fine here: *a gente*, *pra*, *tá*, *vai ter*, *tem* for "there is", a sentence that opens with *Mas* or *E*, and *te* as an object (*eu te ensino*). Spelling, accents and agreement still count. None of these speech forms belong in the formal genres, where they read as a failure to recognize the reader.'
    },
    mustHave: [
      'A greeting with the friend\'s name (*Oi, Tom!*, *Querida Ana,*)',
      'An opening that picks up the relationship or the friend\'s news',
      'The purpose stated early (the invitation, the advice, the news)',
      'The information the prompt asks for, taken from the source and explained in your own words',
      'Practical details: date, place, what to bring or wear',
      'An informal closing (*Um abraço*, *Beijos*) and a first name'
    ],
    skeleton: [
      { part: 'Assunto', what: 'Short and friendly.', example: 'Assunto: seu programa de junho' },
      { part: 'Saudação', what: 'Greeting with the friend\'s name.', example: 'Oi, Tom!' },
      { part: 'Abertura e propósito', what: 'React to the news, then give the invitation.', example: 'Que notícia boa saber que você vem para o Brasil em junho!' },
      { part: 'Informações', what: 'What the friend will find, explained for someone who has never seen it.', example: 'Você também vai ver a quadrilha, uma dança em grupo.' },
      { part: 'Detalhes práticos', what: 'What to wear, what to bring, a next plan.', example: 'Posso te emprestar um chapéu de palha.' },
      { part: 'Pedido de resposta', what: 'Ask the friend to reply or confirm.', example: 'Me avisa as datas certinhas, tá?' },
      { part: 'Despedida', what: 'Informal closing and first name.', example: 'Um abraço, / Rafa' }
    ],
    wordChoices: [
      { use: 'Oi, Tom!', avoid: 'Prezado Tom,', why: 'A formal greeting to a close friend sounds cold and misses the register. In a formal genre the reverse applies.' },
      { use: 'a gente pode ir', avoid: '(only in formal genres) nós poderemos ir', why: '*A gente* is natural with a friend. In a letter, complaint or article it costs register points, and only *nós* works there.' },
      { use: 'vai ter a festa', avoid: 'haverá a festa', why: '*Haverá* sounds stiff in a personal e-mail. In the formal genres it is the other way around: *vai ter* and *tem* for "there is" are marked as spoken.' },
      { use: 'Um abraço,', avoid: 'Atenciosamente,', why: '*Atenciosamente* to a friend is a register error, and *Um abraço* would be one in a complaint.' },
      { use: 'ir a Campina Grande', avoid: 'ir em Campina Grande', why: '*Ir em* is common in speech, but graders still mark it. *Ir a* or *ir para* is correct in any register.' },
      { use: 'pra eu organizar', avoid: 'pra mim organizar', why: 'When the pronoun is the subject of the infinitive, it is *eu*. This holds even in informal writing.' }
    ],
    pitfalls: [
      'Carrying this register into a formal genre. *A gente*, *pra*, *tá*, *vai ter* and a sentence opening with *Mas* in a carta do leitor or a reclamação cost register points, because the grader reads them as not recognizing the reader.',
      'Going too casual. Informal still means full sentences, accents and agreement: no *vc*, *tb*, *q*, no emoji, no *kkk*.',
      'Forgetting the source. A personal e-mail still has to pass on the information the prompt asks for (foods, dance, clothes), explained so a foreigner understands it.',
      'Gender agreement on describing words: *camisa xadrez*, *roupas típicas*, *bandeirinhas coloridas*, *comidas típicas*, *celulares velhos*, *TVs velhas*.',
      'Mixing possessives. *Te* with *você* is normal in informal Brazilian writing, but the possessive stays *seu*: *seu chapéu*, not *teu chapéu*.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Festas juninas: bandeirinhas, fogueira e muito milho',
        body: [
          'As festas juninas acontecem em todo o Brasil durante o mês de junho e homenageiam santos populares, como Santo Antônio, São João e São Pedro. Elas são organizadas em escolas, igrejas, clubes e praças, e muitas vezes na própria rua, com bandeirinhas coloridas e fogueira.',
          'A comida é uma das atrações principais. Não podem faltar pamonha, canjica, milho cozido, pé de moleque, paçoca, pipoca e quentão. Muitos pratos levam milho, ingrediente típico da época.',
          'Outro destaque é a quadrilha, uma dança em grupo que imita um casamento na roça. Os participantes usam roupas de estilo caipira, como vestidos floridos, camisas xadrez e chapéus de palha, e seguem os comandos de um "marcador".',
          'No Nordeste, as festas ganham proporções enormes. Cidades como Caruaru, em Pernambuco, e Campina Grande, na Paraíba, recebem milhares de turistas durante o São João, com shows de forró que vão até a madrugada.'
        ]
      },
      prompt: 'Um amigo seu que mora no exterior vai passar o mês de junho no Brasil e nunca foi a uma festa junina. Escreva um e-mail para ele, convidando-o para uma festa junina na sua cidade e explicando o que ele vai encontrar lá: as comidas, a quadrilha e as roupas típicas.',
      answer: [
        '{{1|Assunto: seu programa de junho}}',
        '{{1|Oi, Tom!}}',
        '{{2|Que notícia boa saber que você vem para o Brasil em junho!}} Já tenho um programa {{3|pra gente}}: no dia 20 {{3|vai ter}} a festa junina da minha rua, e {{4|você está convidado}}.',
        'A festa junina é uma tradição brasileira do mês de junho. A rua fica toda enfeitada com {{8|bandeirinhas coloridas}}, {{3|tem}} fogueira e muita música. {{10|E o melhor é a comida!}} {{5|Quase tudo é feito de milho: pamonha, canjica, milho cozido e pipoca.}} {{7|Pra}} beber, tem {{5|quentão, uma bebida quente com cachaça e gengibre}}.',
        'Você também vai ver a {{6|quadrilha, uma dança em grupo que imita um casamento na roça}}. Todo mundo dança junto, então não precisa ter vergonha. {{7|Eu te ensino os passos!}}',
        '{{10|Ah, e}} todo mundo vai com roupa típica: {{8|vestido florido}} {{7|pras}} meninas e {{8|camisa xadrez}} {{7|pros}} meninos. Posso te emprestar um chapéu de palha.',
        '{{10|Mas}} se você gostar mesmo de festa, o São João do Nordeste é ainda maior. {{3|A gente}} pode {{9|ir a Campina Grande}} no fim de semana seguinte.',
        '{{7|Me avisa}} as datas certinhas {{9|pra eu organizar}} tudo, {{7|tá?}}',
        '{{11|Um abraço,}}',
        '{{11|Rafa}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'An informal e-mail opens with a short, friendly subject and *Oi* plus the friend\'s first name. *Prezado Tom* would be a register error here.' },
        { n: 2, cat: 'papel', text: 'The first line reacts to the friend\'s news, which sets up the relationship before the invitation. The reader is a friend, so warmth counts as much as information.' },
        { n: 3, cat: 'registro', text: '*A gente*, *vai ter* and *tem* for "there is" are natural in an e-mail to a friend. In a carta do leitor, reclamação or artigo the same words would lose register points: write *nós*, *haverá* or *vai haver*, and *há*. The grader checks that your register matches the reader, and these forms mark speech.' },
        { n: 4, cat: 'lingua', text: 'Agreement with the reader. The friend is a man, so *convidado*. For a woman it would be *você está convidada*.' },
        { n: 5, cat: 'fonte', text: 'The source listed seven foods. The e-mail picks the ones built on corn and explains *quentão*, the one a foreigner would not guess. Choosing and explaining counts as using the source. Copying the list would not.' },
        { n: 6, cat: 'fonte', text: 'The quadrilha explained in plain words for someone who has never seen it. The detail about the *marcador* was left out because the friend does not need it.' },
        { n: 7, cat: 'registro', text: 'Speech contractions and habits (*pra*, *pras*, *pros*, *tá*, opening with *Me avisa*, *te* with *você*) are fine with a friend. In a formal genre each of them reads as careless: write *para*, *para as*, *está*, *Peço que me avise*.' },
        { n: 8, cat: 'lingua', text: 'Adjectives agree with their nouns even in casual writing: *bandeirinhas coloridas*, *vestido florido*. *Xadrez* is invariable: *camisa xadrez*, *camisas xadrez*.' },
        { n: 9, cat: 'lingua', text: 'Two points that hold in every register. *Ir a Campina Grande* (not *ir em*), and *pra eu organizar* (not *pra mim organizar*), because *eu* is the subject of *organizar*.' },
        { n: 10, cat: 'coesao', text: 'Informal connectors (*E o melhor é*, *Ah, e*, a sentence that opens with *Mas*) keep the e-mail conversational. In a formal genre use *Além disso*, *Também* and *No entanto* instead.' },
        { n: 11, cat: 'genero', text: '*Um abraço* and a first name close a personal e-mail. *Atenciosamente* here would sound like a bank writing to your friend.' }
      ],
      why5: 'The e-mail fits its context: a Brazilian friend writing to a foreign friend, inviting him to a festa junina and explaining what he will find, as the prompt asked. It covers all three points the prompt named (foods, quadrilha, clothes) with information from the source, selected and explained for a newcomer instead of copied. It adds practical care (the date, the offer of a hat, the plan for Campina Grande) that shows the writer is thinking of the reader. The register is informal and consistent, from *Oi, Tom!* to *Um abraço*, and it still keeps accents, agreement and regência correct. That combination of a relaxed tone with clean writing is what separates a 5 from a 3 in this genre.',
      wordCount: 187
    }
  },

  // 5. Artigo de opinião
  {
    id: 'artigo-opiniao',
    name: 'Artigo de opinião',
    english: 'Opinion article',
    summary: 'A signed text in a newspaper, magazine or website that defends a position on a current issue. Celpe-Bras uses it to test argument: a clear thesis, reasons, a counter-argument handled and a conclusion.',
    role: {
      enunciador: 'A columnist, specialist or guest writer for a publication, often with a stated profession.',
      interlocutor: 'The readers of that publication. Match their interests: a business magazine reader cares about productivity, costs and hiring.',
      proposito: 'Take a position, defend it with arguments, answer the other side and persuade.'
    },
    register: {
      level: 'Formal',
      notes: 'Mostly third person and general statements, with the first person only for the thesis (*acredito que*, *defendo que*). Write for readers in general, not to *você*. No *a gente*, no *tem* for *há*, no sentences opening with *Mas*, no *eu acho*.'
    },
    mustHave: [
      'A title that signals the position',
      'A thesis in the first paragraph, in one sentence',
      'Two arguments, one per paragraph, each opened with a connector',
      'Facts from the source, reworded and used as evidence',
      'One counter-argument presented fairly and then answered',
      'A conclusion that restates the thesis in new words'
    ],
    skeleton: [
      { part: 'Título', what: 'Short, and it hints at your position.', example: 'Semana de quatro dias: menos horas, mais resultado' },
      { part: 'Introdução e tese', what: 'Context in one or two sentences, then your position.', example: 'Acredito que a mudança vale a pena, desde que seja bem planejada.' },
      { part: 'Argumento 1', what: 'First reason, with evidence from the source.', example: 'Em primeiro lugar, funcionários descansados produzem mais.' },
      { part: 'Argumento 2', what: 'Second reason, which can come from your own knowledge.', example: 'Além disso, o modelo ajuda as empresas a atrair bons profissionais.' },
      { part: 'Contra-argumento', what: 'The strongest objection, stated fairly, then answered.', example: 'É verdade que o modelo não serve para todos os setores. No entanto...' },
      { part: 'Conclusão', what: 'Restate the thesis and close.', example: 'Em suma, vale a pena testá-la com planejamento e sem pressa.' }
    ],
    wordChoices: [
      { use: 'Houve testes', avoid: 'Teve testes', why: '*Haver* is the written verb for "there was / there were". *Teve* in this sense is spoken.' },
      { use: 'Acredito que / Defendo que', avoid: 'Eu acho que', why: '*Acho* is conversational and sounds unsure. An opinion article needs a committed thesis.' },
      { use: 'É verdade que... No entanto,', avoid: 'Mas tem gente que diz...', why: 'The formal pair concedes the point and then answers it, and it avoids both *Mas* at the start and *tem gente*.' },
      { use: 'Em suma, / Portanto,', avoid: 'Então,', why: '*Então* as a conclusion marker belongs to speech.' },
      { use: 'a lei foi aprovada', avoid: 'a lei foi passada', why: '*Passar uma lei* is a calque of English "to pass a law". In Portuguese a law is *aprovada* by the legislature and *sancionada* by the executive.' },
      { use: 'descobriu-se que / pesquisas mostram que', avoid: 'foi descoberto que', why: '*Foi descoberto que* copies the English "it was discovered that". The *se* construction or an active subject is the natural Portuguese form.' },
      { use: 'lixo eletrônico', avoid: 'e-waste', why: 'Use the Portuguese term whenever one exists. English words in a formal article read as a gap in vocabulary.' }
    ],
    pitfalls: [
      'Summarizing the source instead of arguing. The source gives both sides; your job is to choose one and use the facts as evidence.',
      'Ignoring the other side. The prompt usually asks you to consider a counter-argument. Present it with *É verdade que* or *Alguns afirmam que*, then answer it.',
      'English calques in formal writing: *foi passado* for a law (write *foi aprovada*), *foi descoberto que* (write *descobriu-se que*), English words like *e-waste* (write *lixo eletrônico*).',
      'Run-on sentences. Keep one idea per sentence and let the connectors do the linking.',
      'Inventing statistics. Without a number from the source, write *muitas empresas* or *a maioria dos participantes*, never a made-up percentage.',
      'Forgetting the title. In this genre it is a scored genre marker.'
    ],
    sample: {
      task: 4,
      source: {
        kind: 'texto',
        title: 'Semana de quatro dias: o futuro do trabalho?',
        body: [
          'A ideia de trabalhar quatro dias por semana, sem redução de salário, deixou de ser apenas um sonho. Países como o Reino Unido, Portugal e a Islândia já realizaram programas-piloto para testar o modelo. No Brasil, algumas empresas também começaram a experimentar a proposta.',
          'Os defensores afirmam que, com um dia livre a mais, os funcionários descansam melhor, ficam menos estressados e faltam menos. Muitas empresas participantes relataram que a produtividade se manteve e decidiram continuar com o modelo depois do teste.',
          'Os críticos, por outro lado, lembram que o modelo não funciona da mesma forma em todos os setores. Hospitais, comércio e serviços que atendem o público todos os dias precisariam contratar mais pessoas, o que aumentaria os custos. Há também o risco de que os funcionários tenham de fazer em quatro dias o trabalho de cinco, com jornadas mais longas e cansativas.',
          'Para especialistas em gestão, a semana de quatro dias exige mudanças na organização do trabalho, como menos reuniões e metas mais claras, e não apenas a retirada de um dia do calendário.'
        ]
      },
      prompt: 'Você é colunista da revista de negócios Mercado em Foco e foi convidado a escrever sobre a semana de trabalho de quatro dias. Escreva um artigo de opinião para a revista, posicionando-se sobre o tema. Apresente argumentos que sustentem a sua posição e considere pelo menos um argumento contrário.',
      answer: [
        '{{1|Semana de quatro dias: menos horas, mais resultado}}',
        'A semana de trabalho de quatro dias já não é uma ideia distante. {{12|Houve testes}} {{2|no Reino Unido, em Portugal e na Islândia}}, e algumas empresas brasileiras também começaram a experimentar o modelo. {{3|Acredito que a mudança vale a pena, desde que seja bem planejada.}}',
        '{{4|Em primeiro lugar,}} {{5|funcionários descansados produzem mais}}. Com um dia livre a mais, as pessoas cuidam da saúde, resolvem assuntos pessoais e voltam ao trabalho com mais energia. {{6|Nos testes realizados até agora, muitas empresas mantiveram a produtividade e decidiram continuar com o modelo.}}',
        '{{4|Além disso,}} a semana de quatro dias {{7|ajuda as empresas a atrair}} e manter {{5|bons profissionais}}. Em um mercado competitivo, um benefício como esse pode valer mais do que um pequeno aumento de salário.',
        '{{8|É verdade que}} o modelo não serve para todos os setores. {{9|Hospitais e lojas funcionam todos os dias e precisariam contratar mais funcionários.}} {{8|No entanto,}} esses setores podem adotar escalas com folgas alternadas. {{9|O maior risco é exigir em quatro dias o trabalho de cinco.}} Por isso, {{10|é essencial que as empresas reduzam reuniões e definam metas claras}}.',
        '{{11|Em suma,}} a semana de quatro dias não resolve todos os problemas, mas pode trazer ganhos para funcionários e empresas. {{3|Vale a pena testá-la com planejamento e sem pressa.}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'An opinion article needs a title, and a good one signals the position. *Menos horas, mais resultado* tells the reader which side the columnist is on before the first paragraph.' },
        { n: 2, cat: 'lingua', text: 'Country names carry gender, and the preposition shows it: *o Reino Unido* gives *no Reino Unido*, *a Islândia* gives *na Islândia*, and *Portugal* takes no article, so *em Portugal*. The same logic gives *do Brasil*, *da França*, *de Portugal*.' },
        { n: 3, cat: 'papel', text: 'The thesis sits in the first paragraph, in one sentence, with a condition (*desde que* + subjunctive *seja*). The conclusion restates it in new words, so the reader never loses track of the position.' },
        { n: 4, cat: 'coesao', text: '*Em primeiro lugar* and *Além disso* signpost the two arguments, one per paragraph. A grader can find the structure at a glance.' },
        { n: 5, cat: 'papel', text: 'The arguments are framed for a business magazine: productivity and keeping good staff. The same topic for a health blog would lead with stress and rest. Choosing arguments for the reader is part of the context score.' },
        { n: 6, cat: 'fonte', text: 'The pilot results from the source used as evidence, reworded and with no invented numbers. *Muitas empresas* is as precise as the source allows.' },
        { n: 7, cat: 'lingua', text: 'Regência: *ajudar alguém a fazer algo*. The *a* before the infinitive is required, as in *incentivar as crianças a usar* and *obrigar os motoristas a parar*.' },
        { n: 8, cat: 'coesao', text: 'The counter-argument pattern. *É verdade que* grants the objection fairly, and *No entanto* answers it. This is how the text considers the other side without weakening the thesis.' },
        { n: 9, cat: 'fonte', text: 'The critics\' points from the source (sectors that open every day, the risk of cramming five days into four) restated in the columnist\'s words and answered in the same paragraph.' },
        { n: 10, cat: 'lingua', text: '*É essencial que* takes the subjunctive: *reduzam*, *definam*. The same goes for *é importante que*, *é necessário que*, *é fundamental que*.' },
        { n: 11, cat: 'coesao', text: '*Em suma* signals the conclusion in formal writing. *Então* would do the same job in speech but reads as informal on the page.' },
        { n: 12, cat: 'registro', text: '*Houve* (from *haver*) is the written way to say that something existed or took place. *Teve testes* is spoken, and it is one of the register slips graders look for first.' }
      ],
      why5: 'The article answers the prompt as a columnist for a business magazine would: a title with a position, a thesis in the first paragraph, two arguments chosen for business readers, a counter-argument granted and answered, and a conclusion. It uses the source as evidence on both sides (the pilot results for the thesis, the critics\' points for the counter-argument) without copying sentences or inventing numbers. The connectors *Em primeiro lugar*, *Além disso*, *É verdade que*, *No entanto* and *Em suma* make the structure visible. The language is formal and correct, with the subjunctive after *desde que* and *é essencial que*, the right prepositions with country names and *houve* in place of *teve*. Sentences are short enough to write by hand in the time allowed.',
      wordCount: 218
    }
  },

  // 6. Blog
  {
    id: 'blog',
    name: 'Post de blog',
    english: 'Blog post',
    summary: 'A text for a blog, often a community, school or topic blog, that informs or advises readers in a friendly tone. Celpe-Bras uses it to check that you can turn source information into practical content for a general reader.',
    role: {
      enunciador: 'A blogger: a resident, student, specialist or member of a group writing for its community.',
      interlocutor: 'The blog\'s readers, addressed directly as *você* or *vocês*.',
      proposito: 'Inform, give tips, raise awareness, share an experience and invite comments.'
    },
    register: {
      level: 'Semi-formal',
      notes: 'Speak to the reader as *você*, use questions and imperatives and keep the tone warm. Stay in written standard Portuguese: no *pra*, *tá* or *a gente*, and use the written imperative (*feche*, *use*, *tome*), not the spoken one (*fecha*, *usa*, *toma*).'
    },
    mustHave: [
      'A title that tells readers what they will get',
      'An opening that speaks to the reader and says why the topic matters now',
      'Information from the source, reworded for neighbors instead of officials',
      'Practical tips, each opening with an imperative verb',
      'A closing that motivates and invites participation (*Conte nos comentários*)'
    ],
    skeleton: [
      { part: 'Título', what: 'Topic plus what the reader gains.', example: 'Seca no Vale: cinco jeitos de economizar água em casa' },
      { part: 'Abertura', what: 'A question or remark to the reader, then the context.', example: 'Você já reparou que não chove de verdade há meses?' },
      { part: 'Contexto', what: 'Why it matters now, taken from the source.', example: 'Os reservatórios da nossa região estão abaixo do normal.' },
      { part: 'Dicas', what: 'A short list, each item an imperative plus a detail.', example: 'Feche a torneira enquanto escova os dentes.' },
      { part: 'Fecho', what: 'Motivation and a call to comment.', example: 'E você, tem outra dica? Conte nos comentários!' }
    ],
    wordChoices: [
      { use: 'Feche a torneira.', avoid: 'Fecha a torneira.', why: 'With *você*, the written imperative uses the subjunctive form: *feche*, *tome*, *use*. *Fecha* is the spoken form.' },
      { use: 'há água escapando', avoid: 'tem água escapando', why: '*Há* for existence is the written form. *Tem* is correct only for possession: *você tem outra dica?*' },
      { use: 'quando ela estiver cheia', avoid: 'quando ela está cheia', why: 'A future condition after *quando* or *se* takes the future subjunctive: *estiver*, *fizer*, *continuarem*.' },
      { use: 'até as chuvas voltarem', avoid: 'até as chuvas voltar', why: 'The infinitive has its own subject (*as chuvas*), so it takes the personal ending.' },
      { use: 'você', avoid: 'a gente', why: 'A blog speaks to the reader directly with *você*. *A gente* pulls the text toward speech.' },
      { use: 'para', avoid: 'pra', why: 'The friendly tone comes from *você*, questions and short sentences, not from speech contractions.' }
    ],
    pitfalls: [
      'Copying the utility notice in its official tone (*a companhia orienta que...*). Rewrite for neighbors: *Esqueça a mangueira*.',
      'Mixing imperative forms: *Feche a torneira e toma banho rápido*. With *você*, every imperative uses the subjunctive form: *feche*, *tome*, *use*.',
      'Leaving the infinitive bare after a subject: *até as chuvas voltar*. Write *até as chuvas voltarem*.',
      'Tips without a reason or a detail. One short explanation per tip makes the post useful and shows you understood the source.',
      'Forgetting the title or the call to comment. Both are genre markers.'
    ],
    sample: {
      task: 3,
      source: {
        kind: 'texto',
        title: 'Águas do Vale pede economia de água durante a estiagem',
        body: [
          'A Águas do Vale informa que, por causa da falta de chuvas nos últimos meses, os reservatórios que abastecem a região estão abaixo do nível normal. Para evitar o rodízio no abastecimento, a companhia pede que todos os moradores reduzam o consumo de água.',
          'Algumas atitudes simples fazem diferença. Banhos de no máximo cinco minutos, torneira fechada ao escovar os dentes ou ensaboar a louça e máquina de lavar usada apenas com a carga completa estão entre as principais recomendações.',
          'A companhia também orienta que a calçada e o carro não sejam lavados com mangueira. O ideal é usar balde e, sempre que possível, reaproveitar a água da máquina de lavar para limpar o quintal ou o banheiro.',
          'Vazamentos são outra causa importante de desperdício. Para descobrir se há um vazamento escondido, basta fechar todas as torneiras e observar o hidrômetro. Se os números continuarem mudando, é sinal de que há água escapando. Nesse caso, o morador deve chamar um encanador o quanto antes.'
        ]
      },
      prompt: 'Você escreve para o Vizinhança Viva, o blog do seu bairro. Por causa da estiagem, a Águas do Vale, empresa que abastece a cidade, divulgou o comunicado acima. Escreva um post para o blog explicando aos seus vizinhos por que é importante economizar água neste momento e dando dicas práticas para economizar em casa.',
      answer: [
        '{{1|Seca no Vale: cinco jeitos de economizar água em casa}}',
        '{{2|Você já reparou que não chove de verdade há meses?}} {{3|Os reservatórios da nossa região estão abaixo do normal}}, e a Águas do Vale {{4|pede a todos que economizem}} para evitar o rodízio. A boa notícia é que pequenas mudanças em casa fazem diferença. {{5|Veja cinco dicas:}}',
        '1. {{6|Tome}} banhos de no máximo cinco minutos. Uma música curta pode servir de cronômetro.',
        '2. {{6|Feche}} a torneira enquanto escova os dentes ou ensaboa a louça.',
        '3. Só ligue a máquina de lavar {{7|quando ela estiver cheia}} e {{3|reaproveite a água do enxágue para lavar o quintal}}.',
        '4. {{12|Esqueça a mangueira.}} Para lavar a calçada ou o carro, {{6|use}} um balde.',
        '5. {{8|Procure vazamentos. Feche todas as torneiras e observe o hidrômetro.}} {{7|Se os números continuarem mudando}}, {{9|há água escapando}}, e é hora de chamar um encanador.',
        'Parece pouco, mas, {{7|se cada família do bairro fizer a sua parte}}, a água vai durar {{10|até as chuvas voltarem}}.',
        '{{11|E você,}} {{9|tem outra dica}} {{11|para economizar água? Conte nos comentários!}}'
      ],
      notes: [
        { n: 1, cat: 'genero', text: 'A blog post needs a title, and a good one names the topic and promises something useful. *Cinco jeitos* tells the reader the post is practical and short.' },
        { n: 2, cat: 'papel', text: 'The opening question speaks straight to the neighbor as *você* and ties the topic to something every reader has noticed. That sets the relationship of blogger to neighbors in one line.' },
        { n: 3, cat: 'fonte', text: 'Facts from the utility\'s notice reworded for neighbors: the low reservoirs, the reason to save, the reuse of washing-machine water. The official tone of the notice is gone, but the information is all there.' },
        { n: 4, cat: 'lingua', text: 'Regência: *pedir a alguém que* + subjunctive (*pede a todos que economizem*). The person you ask takes *a*, and the request goes into the subjunctive.' },
        { n: 5, cat: 'coesao', text: '*Veja cinco dicas* introduces the list, and each tip opens with a verb in the same form. Parallel structure lets the reader scan the post quickly.' },
        { n: 6, cat: 'lingua', text: 'With *você*, the written imperative uses the subjunctive form: *tome*, *feche*, *use*. *Toma*, *fecha* and *usa* are the spoken forms and would mix registers.' },
        { n: 7, cat: 'lingua', text: 'A future condition after *quando* or *se* takes the future subjunctive: *estiver*, *continuarem*, *fizer*. *Quando ela está cheia* would describe a habit, not a condition.' },
        { n: 8, cat: 'fonte', text: 'The leak test from the notice, turned into two short steps the reader can follow right away.' },
        { n: 9, cat: 'registro', text: '*Há água escapando* uses *haver* for existence, the written form. At the end, *você tem outra dica?* uses *ter* correctly, because there it means possession. The rule is *há* for "there is" and *tem* for "has".' },
        { n: 10, cat: 'lingua', text: 'Personal infinitive. *As chuvas* is the subject of *voltar*, so the infinitive takes the plural ending: *até as chuvas voltarem*. Compare *para as crianças atravessarem*.' },
        { n: 11, cat: 'genero', text: 'A blog post often ends by inviting comments. The question back to *você* keeps the conversation going, which is what a community blog is for.' },
        { n: 12, cat: 'registro', text: 'Semi-formal in practice: *Esqueça a mangueira* is friendly and direct but still written Portuguese. The warmth comes from *você* and short sentences, not from *pra*, *tá* or *a gente*.' }
      ],
      why5: 'The post fits the context the prompt set: a neighborhood blogger writing to neighbors, explaining why to save water now and giving practical tips. It has the genre markers (title, opening that speaks to the reader, list, call to comment). Nearly every piece of information comes from the utility\'s notice, but reworded from official language into friendly advice, and never credited to *o texto*. Cohesion comes from the list itself, with parallel imperatives, and from the short framing paragraphs around it. The language is correct and within reach: written imperatives, the future subjunctive after *quando* and *se*, the personal infinitive in *até as chuvas voltarem* and *há* versus *tem* used correctly in the same text.',
      wordCount: 176
    }
  }
);
