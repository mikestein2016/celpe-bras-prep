window.CB = window.CB || {};
CB.lessons = CB.lessons || [];
CB.lessons.push(

  // ---------------------------------------------------------------- 14
  {
    id: 'l08-adicao-contraste',
    n: 14,
    unit: 4,
    title: 'Além disso, porém, no entanto',
    en: 'Add a point and set up a contrast with the connectors graders expect, including *embora* + subjunctive.',
    minutes: 12,
    steps: [
      {
        type: 'teach',
        title: 'Adding a point',
        body: [
          'Graders score *coesão*: how your ideas connect. A text built only on *e* and *mas* reads like speech. Written Portuguese has a small set of connectors that do the same jobs more clearly.',
          'To add a point, open the next sentence with *Além disso,* or use *também* inside the sentence. For two points in one sentence, use *não só... mas também*.',
          'In formal genres, do not open a sentence with *E* or *Mas*. Use *Além disso,* and *No entanto,* instead.'
        ],
        examples: [
          { pt: 'O novo horário do posto de saúde ajuda quem trabalha. Além disso, reduz as filas da manhã.', en: '*Além disso,* opens the second point, followed by a comma.' },
          { pt: 'A feira vende frutas orgânicas e também aceita pagamento por aplicativo.', en: '*Também* adds a point inside the sentence.' },
          { pt: 'O programa não só oferece aulas gratuitas, mas também empresta os instrumentos.', en: '*Não só... mas também* joins two points in one sentence.' }
        ],
        table: [
          { use: 'Além disso, a medida reduz custos.', avoid: 'E também a medida reduz custos.', why: 'A new sentence that opens with *E* sounds spoken.' },
          { use: 'No entanto, o preço subiu.', avoid: 'Mas o preço subiu.', why: 'Formal genres avoid opening a sentence with *Mas*.' }
        ]
      },
      {
        type: 'teach',
        title: 'Contrast: porém, no entanto, embora, apesar de',
        body: [
          '*Porém* and *no entanto* open the second of two full sentences and take a comma: *O curso é bom. No entanto, custa caro.* *Mas* is fine in the middle of a sentence, after a comma.',
          '*Embora* makes a concession and always takes the subjunctive: *Embora o curso seja caro, vale a pena.* Never *embora é*.',
          '*Apesar de* takes a noun or an infinitive, never a conjugated verb: *apesar do preço*, *apesar de ser caro*.'
        ],
        examples: [
          { pt: 'Embora a academia seja nova, dois aparelhos já quebraram.', en: '*Embora* + *seja* (subjunctive).' },
          { pt: 'Apesar da chuva, o show começou no horário.', en: '*Apesar de* + *a chuva* becomes *apesar da chuva*.' },
          { pt: 'Apesar de ser gratuito, o curso teve poucas inscrições.', en: '*Apesar de* + infinitive.' },
          { pt: 'O aplicativo é prático; porém, não funciona sem internet.', en: '*Porém* after a semicolon, followed by a comma.' }
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which connector fits?',
            text: 'O novo horário da clínica agrada aos pacientes. ___, reduz as filas na recepção.',
            options: ['Além disso', 'No entanto', 'Embora'],
            answer: 'Além disso',
            why: 'Both sentences praise the new schedule, so the second adds a point. *No entanto* would signal a contrast that is not there.'
          },
          {
            type: 'choice',
            q: 'Which connector fits?',
            text: 'O aplicativo do banco é prático. ___, muitos clientes idosos ainda preferem ir à agência.',
            options: ['No entanto', 'Além disso', 'Por isso'],
            answer: 'No entanto',
            why: 'The second sentence goes against the first, so it needs a contrast. *Além disso* would add a point in the same direction.'
          },
          {
            type: 'choice',
            q: 'Which verb form fits?',
            text: 'Embora o ingresso ___ caro, o festival vale a pena.',
            options: ['seja', 'é', 'ser'],
            answer: 'seja',
            why: '*Embora* always takes the subjunctive: *seja*. Writing *é* after *embora* is the most common slip.'
          },
          {
            type: 'choice',
            q: 'Which one fits?',
            text: '___ chuva forte, a corrida de rua começou no horário.',
            options: ['Apesar da', 'Embora a', 'No entanto, a'],
            answer: 'Apesar da',
            why: '*Apesar de* takes a noun: *apesar da chuva*. *Embora* would need a verb in the subjunctive (*Embora chovesse*).'
          },
          {
            type: 'choice',
            q: 'Which sentence is correct?',
            options: [
              'Embora o plano seja barato, a cobertura é pequena.',
              'Embora o plano é barato, a cobertura é pequena.',
              'Apesar do plano é barato, a cobertura é pequena.'
            ],
            answer: 'Embora o plano seja barato, a cobertura é pequena.',
            why: '*Embora* needs the subjunctive (*seja*), and *apesar de* cannot be followed by a conjugated verb.'
          },
          {
            type: 'choice',
            q: 'Which sentence fits a carta do leitor?',
            options: ['No entanto, o problema continua.', 'Mas o problema continua.'],
            answer: 'No entanto, o problema continua.',
            why: 'Formal genres avoid opening a sentence with *Mas*. *No entanto,* does the same job in written register.'
          }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 5 mistakes in this letter to the editor.',
        text: 'Prezados editores,\nLi com interesse a reportagem sobre o horário noturno da Clínica da Família Vila Serena. A mudança ajuda quem trabalha o dia todo. Além disso, reduz {{o fila|a fila|*Fila* is feminine.}} da manhã. {{Embora a clínica funciona|Embora a clínica funcione|*Embora* takes the subjunctive: *funcione*.}} até as 22h, ainda faltam médicos. {{Tem|Há|Formal writing uses *há* for "there are".}} pacientes que esperam três horas. {{Mas|No entanto,|A formal letter does not open a sentence with *Mas*.}} a solução não é reduzir o horário, e sim contratar mais profissionais. Espero que a prefeitura {{tambem|também|*Também* carries an acute accent.}} ouça os moradores.\nAtenciosamente,\nUma leitora de Vila Serena'
      },
      {
        type: 'order',
        q: 'Put this paragraph from a news blog in order.',
        items: [
          'O Centro Cultural Vila Aurora passou a oferecer aulas gratuitas de violão.',
          'As turmas funcionam à noite, depois do horário comercial.',
          'Além disso, os alunos podem pegar instrumentos emprestados.',
          'No entanto, as vagas acabaram em menos de um dia.'
        ],
        why: 'The news first, then one advantage, *além disso* for a second one, and *no entanto* for the catch.'
      },
      {
        type: 'write',
        q: 'Join the two facts twice: once with *embora*, once with *apesar de*. Two sentences.',
        text: 'O curso de fotografia da biblioteca é gratuito. Poucas pessoas se inscreveram.',
        model: [
          'Embora o curso de fotografia seja gratuito, poucas pessoas se inscreveram.',
          'Apesar de ser gratuito, o curso de fotografia teve poucas inscrições.'
        ],
        check: [
          'After *embora* you wrote *seja*, not *é*.',
          'After *apesar de* you used an infinitive (*ser*) or a noun, not a conjugated verb.',
          'A comma separates the two parts of each sentence.',
          '*Gratuito* agrees with *curso*: masculine.'
        ]
      },
      { type: 'drills', modes: ['conectivo'], tags: ['adição', 'contraste'], n: 6 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  // ---------------------------------------------------------------- 15
  {
    id: 'l09-causa-conclusao',
    n: 15,
    unit: 4,
    title: 'Porque, por isso, portanto',
    en: 'Say why, say what follows and what for, and close an argument with *portanto*.',
    minutes: 13,
    steps: [
      {
        type: 'teach',
        title: 'Cause and consequence',
        body: [
          'A cause answers *why*. Inside a sentence, use *porque* or *pois*: *A feira mudou de dia porque a rua vai passar por obras.* When the cause opens the sentence, *Como* reads best: *Como a rua vai passar por obras, a feira mudou de dia.*',
          'Before a noun, use *por causa de* or *devido a*: *por causa do calor*, *devido ao calor*. *Por causa que* does not exist in writing.',
          'A consequence opens the next sentence with *Por isso,* or *Por esse motivo,*. In formal genres, avoid *Então* for this job.'
        ],
        table: [
          { use: 'por causa do trânsito', avoid: 'por causa que tinha trânsito', why: '*Por causa de* takes a noun. *Por causa que* is spoken and wrong in writing.' },
          { use: 'devido ao aumento', avoid: 'devido o aumento', why: '*Devido a* keeps its *a*, and *a + o* becomes *ao*.' },
          { use: 'Por isso, a loja fechou.', avoid: 'Então a loja fechou.', why: '*Então* at the start of a sentence sounds spoken.' }
        ]
      },
      {
        type: 'teach',
        title: 'Purpose and conclusion',
        body: [
          'Purpose answers *what for*. With the same subject, use *para* + infinitive: *Saí cedo para pegar o trem.* With a new subject, use *para* + subject + personal infinitive, or *para que* + subjunctive: *para os pacientes chegarem*, *para que os pacientes cheguem*.',
          'Never leave the verb bare after a plural subject. *Para os pacientes chegar* is one of your most common slips.',
          'To close an argument, open the last paragraph with *Portanto,* or *Em suma,*. The conclusion restates your point; it does not add a new one.'
        ],
        examples: [
          { pt: 'A clínica abre aos sábados para atender quem trabalha durante a semana.', en: 'Same subject: *para* + infinitive.' },
          { pt: 'A empresa criou um auxílio para os funcionários fazerem cursos de idiomas.', en: 'New subject: personal infinitive (*fazerem*).' },
          { pt: 'A empresa criou um auxílio para que os funcionários façam cursos de idiomas.', en: 'Same meaning with *para que* + subjunctive (*façam*).' },
          { pt: 'Portanto, o auxílio beneficia a empresa e os funcionários.', en: '*Portanto* opens the conclusion.' }
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which connector fits?',
            text: 'O restaurante popular passou a abrir mais cedo ___ muitos trabalhadores entram no serviço às 7h.',
            options: ['porque', 'portanto', 'para que'],
            answer: 'porque',
            why: 'The second part explains why it opens early, so it is a cause. *Portanto* would present it as a result.'
          },
          {
            type: 'choice',
            q: 'Which connector fits?',
            text: 'As passagens de avião ficaram mais caras. ___, muitas famílias vão viajar de carro nas férias.',
            options: ['Por isso', 'Embora', 'Já que'],
            answer: 'Por isso',
            why: 'Traveling by car is the result of higher fares, so the sentence opens with *Por isso*.'
          },
          {
            type: 'choice',
            q: 'Which verb form fits?',
            text: 'A academia abriu turmas à noite para que os alunos ___ depois do trabalho.',
            options: ['possam treinar', 'podem treinar', 'poder treinar'],
            answer: 'possam treinar',
            why: '*Para que* takes the subjunctive: *possam*. *Podem* is the indicative.'
          },
          {
            type: 'choice',
            q: 'Which verb form fits?',
            text: 'A prefeitura criou a feira para os agricultores ___ direto aos consumidores.',
            options: ['venderem', 'vendem', 'vendam'],
            answer: 'venderem',
            why: 'After *para* + a subject, use the personal infinitive: *para os agricultores venderem*. *Vendam* would need *para que*.'
          },
          {
            type: 'choice',
            q: 'Which sentence is correct in formal writing?',
            options: [
              'Devido ao calor, o jogo foi adiado.',
              'Por causa que fez calor, o jogo foi adiado.',
              'Devido o calor, o jogo foi adiado.'
            ],
            answer: 'Devido ao calor, o jogo foi adiado.',
            why: '*Devido a* + *o calor* becomes *devido ao calor*. *Por causa que* is spoken and wrong in writing.'
          },
          {
            type: 'choice',
            q: 'Which line opens the last paragraph of an opinion article?',
            options: [
              'Portanto, a mudança merece apoio.',
              'Além disso, a mudança merece apoio.',
              'Porque a mudança merece apoio.'
            ],
            answer: 'Portanto, a mudança merece apoio.',
            why: '*Portanto* signals the conclusion. *Além disso* would add one more argument.'
          }
        ]
      },
      {
        type: 'order',
        q: 'Put this paragraph from an opinion article in order.',
        items: [
          'O Festival de Inverno de Serra Clara ficou mais caro este ano.',
          'O aumento aconteceu porque os custos com segurança dobraram.',
          'Por isso, muitas famílias da região deixaram de ir.',
          'Para que o evento continue popular, a organização precisa criar ingressos com desconto.',
          'Portanto, é possível manter o festival acessível para todos.'
        ],
        why: 'The fact, its cause, its consequence, a proposal with *para que*, and *Portanto* to close.'
      },
      {
        type: 'pick',
        n: 1,
        from: [
          {
            type: 'fix',
            title: 'Find the 4 mistakes in this request to the HR manager.',
            text: 'Prezada Sra. Lúcia Ramos,\nTrabalho no setor de vendas há quatro anos e venho solicitar uma mudança no meu horário de entrada. Como meu filho mudou de creche, preciso levá-lo às 9h. {{Então|Por isso,|*Então* sounds spoken; *Por isso* marks the consequence in writing.}} peço para entrar às 10h e sair às 19h. Assim, cumpro {{o mesma jornada|a mesma jornada|*Jornada* is feminine.}} sem prejuízo para a equipe. Fico à disposição {{para nós conversar|para conversarmos|With its own subject, the infinitive takes the personal ending: *conversarmos*.}} e agradeço a {{atençao|atenção|The *-ção* ending needs its tilde.}}.'
          },
          {
            type: 'fix',
            title: 'Find the 4 mistakes in this news story.',
            text: 'A 5ª Corrida da Primavera reuniu cerca de 2 mil participantes no domingo, no Parque Serra Azul. A largada foi às 6h30 {{para os corredores evitar|para os corredores evitarem|With its own subject, the infinitive after *para* takes the plural ending.}} o calor. A organização distribuiu água em cinco pontos do percurso, {{por isso|porque|The heat forecast is the reason, so the connector is *porque*.}} a previsão era de 34 graus. Segundo a organizadora, Paula Reis, {{o próxima edição|a próxima edição|*Edição* ends in *-ção*, so it is feminine.}} será em setembro. {{Alem disso|Além disso|*Além* carries an acute accent.}}, haverá uma prova infantil.'
          },
          {
            type: 'fix',
            title: 'Find the 4 mistakes in this blog post.',
            text: 'Você já foi à nova feira orgânica de Vale Claro? Os preços são um pouco mais altos, {{portanto|pois|This part gives the reason, so it needs a cause word.}} a produção sem agrotóxicos dá mais trabalho. Mesmo assim, vale a pena: as verduras duram mais, e o dinheiro vai direto para {{as agricultores|os agricultores|*Agricultor* is masculine: *os agricultores*.}} da região. Chegue cedo, porque {{tem|há|A blog post stays in written Portuguese: *há*, not *tem*.}} fila a partir das 7h. Leve sacolas {{para que a feira produz|para que a feira produza|*Para que* takes the subjunctive.}} menos resíduos.'
          }
        ]
      },
      {
        type: 'write',
        q: 'Write two sentences for a request to the city sports department: one with a cause (*como* or *porque*) and one with a purpose (*para que* + subjunctive).',
        text: 'Situação: a piscina pública do Centro Esportivo Vila Rica fecha às 18h, mas muitos moradores trabalham até as 18h. Você quer que ela funcione até as 21h.',
        model: [
          'Como muitos moradores trabalham até as 18h, não conseguem usar a piscina durante a semana.',
          'Por isso, solicito que o horário seja ampliado até as 21h, para que os trabalhadores também possam nadar.'
        ],
        check: [
          'The cause comes with *Como* at the start or *porque* in the middle.',
          'After *para que* you used the subjunctive (*possam*, not *podem*).',
          'You wrote *solicito* or *gostaria de pedir*, not *quero*.',
          'No *tem* for *há* and no *a gente*.'
        ]
      },
      { type: 'drills', modes: ['conectivo'], tags: ['causa', 'consequência', 'finalidade', 'conclusão'], n: 6 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  // ---------------------------------------------------------------- 16
  {
    id: 'l10-referencia',
    n: 16,
    unit: 4,
    title: 'Não repetir: pronomes e sinônimos',
    en: 'Point back to an idea without repeating the noun, and keep its gender right along the chain.',
    minutes: 12,
    steps: [
      {
        type: 'teach',
        title: 'Name it once, then point back',
        body: [
          'Graders notice when the same noun comes back in every sentence. Name the thing once in full. After that, point back to it with a synonym, with *esse* or *essa* + a noun, or with a pronoun.',
          'Every link in the chain must agree with the noun it points to. *A lei* is followed by *ela*, *essa lei*, *aprovada*. This is where your gender slips cost the most, because one wrong *ele* makes the reader lose track.',
          'When a synonym changes the gender, the next link follows the synonym: *o projeto* → *essa proposta* → *ela*.'
        ],
        examples: [
          { pt: 'A Câmara aprovou a tarifa social de água. Essa medida começa a valer em março. Ela vai beneficiar famílias de baixa renda.', en: '*a tarifa* → *essa medida* → *ela*: feminine all the way.' },
          { pt: 'O Hospital Vale Verde abriu um ambulatório noturno. O serviço atende sem agendamento.', en: 'Synonym: *um ambulatório* → *o serviço*.' },
          { pt: 'O prefeito apresentou o projeto do novo parque. A proposta agradou aos moradores, mas ela ainda precisa de verba.', en: '*o projeto* → *a proposta* → *ela*: the pronoun follows the synonym.' }
        ]
      },
      {
        type: 'teach',
        title: 'Esse, este, isso and o qual',
        body: [
          '*Esse* and *essa* point back to something you already wrote. In a text they are the default: *essa decisão*, *esse problema*.',
          '*Este* and *esta* point to the text you are writing or to what comes next: *nesta carta*, *neste e-mail*. *Isso* sums up a whole idea, not one noun: *Os aluguéis subiram muito. Isso afasta os jovens do centro.*',
          'After a preposition, *o qual* and *a qual* agree with the noun they replace: *a lei, segundo a qual...*, *o projeto do qual participo*.'
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which word fits?',
            text: 'A cidade aprovou uma nova lei sobre barulho. ___ proíbe som alto depois das 22h.',
            options: ['Ela', 'Ele', 'Isso'],
            answer: 'Ela',
            why: '*Lei* is feminine, so the pronoun is *ela*. *Isso* sums up an idea; it does not point to one noun.'
          },
          {
            type: 'choice',
            q: 'Which word fits?',
            text: 'O museu lançou um programa de visitas noturnas. ___ iniciativa atraiu muitos jovens.',
            options: ['Essa', 'Esse', 'Isso'],
            answer: 'Essa',
            why: '*Iniciativa* is feminine, and it points back to the sentence before, so *essa*. *Isso* never goes before a noun.'
          },
          {
            type: 'choice',
            q: 'Which word fits?',
            text: 'Muitos pacientes esperam meses por uma consulta com especialista. ___ mostra que faltam médicos na rede pública.',
            options: ['Isso', 'Esse', 'Ela'],
            answer: 'Isso',
            why: '*Isso* sums up the whole situation. *Esse* and *ela* need a specific noun to point to.'
          },
          {
            type: 'choice',
            q: 'Which one fits?',
            text: 'O projeto ___ participo ensina idosos a usar a internet.',
            options: ['do qual', 'da qual', 'que'],
            answer: 'do qual',
            why: '*Participar* takes *de*, and *projeto* is masculine: *do qual*. Plain *que* drops the preposition.'
          },
          {
            type: 'choice',
            q: 'Which fits without repeating *o aplicativo*?',
            text: 'O aplicativo do metrô mostra os horários em tempo real. ___ também avisa sobre atrasos.',
            options: ['A ferramenta', 'O ferramenta', 'Essa aplicativo'],
            answer: 'A ferramenta',
            why: '*Ferramenta* is feminine, so *a ferramenta*. A synonym brings its own gender.'
          },
          {
            type: 'choice',
            q: 'Why *nesta* and not *nessa*?',
            text: 'Nesta carta, gostaria de comentar a reportagem sobre o novo mercado municipal.',
            options: [
              '*Esta* points to the text you are writing.',
              '*Esta* points back to something already mentioned.',
              '*Carta* is masculine.'
            ],
            answer: '*Esta* points to the text you are writing.',
            why: '*Este* and *esta* point to your own text: *nesta carta*. *Nessa carta* would point back to a letter mentioned earlier.'
          }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 4 places where the reference chain breaks.',
        text: 'A Câmara Municipal de Serratinga aprovou na terça-feira uma lei que proíbe construções a menos de 50 metros das nascentes da cidade. {{O novo lei|A nova lei|*Lei* is feminine, so its article and adjective are too.}} entra em vigor em janeiro. Segundo o vereador Paulo Mendes, autor da proposta, {{ele|ela|The pronoun points back to *a lei*, not to the council member.}} vai proteger a água de cerca de 40 mil moradores. {{Esse medida|Essa medida|*Medida* is feminine.}} também prevê multas para quem desmatar as margens dos rios. Ambientalistas da região comemoraram {{o decisão|a decisão|*-são* nouns are feminine: *a decisão*.}}.'
      },
      {
        type: 'order',
        q: 'Put this blog paragraph in order. Follow the chain of references.',
        items: [
          'A Biblioteca Pública de Serratinga lançou um serviço de empréstimo de livros digitais.',
          'Esse serviço é gratuito para quem tem a carteirinha da biblioteca.',
          'Para usá-lo, basta baixar um aplicativo e fazer o cadastro.',
          'Isso leva menos de cinco minutos.',
          'Depois, você pode ler no celular ou no computador.'
        ],
        why: 'Each sentence points back to the one before: *um serviço* → *esse serviço* → *usá-lo* → *isso*.'
      },
      {
        type: 'write',
        q: 'Rewrite the three sentences so that *a feira* appears only once. Use a synonym, *essa* + noun, or a pronoun.',
        text: 'A feira de adoção de animais acontece no sábado. A feira reúne seis ONGs da cidade. A feira também oferece vacinação gratuita.',
        model: [
          'A feira de adoção de animais acontece no sábado.',
          'O evento reúne seis ONGs da cidade.',
          'Essa ação também oferece vacinação gratuita.'
        ],
        check: [
          '*A feira* appears only once.',
          'Each link has the right gender: *o evento*, *essa ação*, *ela*.',
          'Each sentence still makes sense on its own.'
        ]
      },
      { type: 'drills', modes: ['contracao'], tags: ['em', 'de'], n: 5 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  // ---------------------------------------------------------------- 17
  {
    id: 'l11-paragrafos',
    n: 17,
    unit: 4,
    title: 'Um parágrafo, uma ideia',
    en: 'Plan a 150 to 200 word text in three or four paragraphs, each with one idea and a topic sentence.',
    minutes: 15,
    steps: [
      {
        type: 'teach',
        title: 'The shape of 150 to 220 words',
        body: [
          'A text of 150 to 220 words fits in three or four paragraphs. The first gives the context and why you are writing. The middle one or two each carry one idea, with facts from the source. The last asks for the action: the request, the proposal, the invitation or the conclusion.',
          'Open each paragraph with a topic sentence that says what it is about. The sentences after it support that one idea. When a new idea starts, start a new paragraph.',
          'A rough budget: 30 to 40 words to open, 50 to 60 for each middle paragraph, about 30 to close.'
        ],
        examples: [
          { pt: 'Li a reportagem sobre o fechamento do ginásio municipal e discordo da decisão.', en: 'Opening: the context and your position.' },
          { pt: 'Em primeiro lugar, o ginásio é o único espaço público de esporte da região.', en: 'Topic sentence of the first middle paragraph.' },
          { pt: 'Por isso, peço que a prefeitura mantenha o ginásio aberto.', en: 'Closing: the action you want.' }
        ]
      },
      {
        type: 'pick',
        n: 2,
        from: [
          {
            type: 'choice',
            q: 'Which is the best topic sentence for a paragraph about the costs of a project?',
            options: [
              'O principal problema do projeto é o custo.',
              'Moro na cidade há dez anos.',
              'Portanto, peço uma resposta rápida.'
            ],
            answer: 'O principal problema do projeto é o custo.',
            why: 'A topic sentence names the one idea of its paragraph. The other two belong to the opening and the closing.'
          },
          {
            type: 'choice',
            q: 'You are writing a 180-word complaint. How many paragraphs?',
            options: ['Three or four', 'One', 'Seven or eight'],
            answer: 'Three or four',
            why: 'Three or four paragraphs of one idea each. One block hides your structure, and seven or eight leave each idea without support.'
          },
          {
            type: 'choice',
            q: 'In a solicitação, where does the request first appear?',
            options: ['In the first paragraph', 'Only in the last paragraph', 'Only in the subject line'],
            answer: 'In the first paragraph',
            why: 'State the request early so the reader knows what you want, then detail it near the end.'
          },
          {
            type: 'choice',
            q: 'What should the writer do with this paragraph?',
            text: 'O novo parque tem trilhas bem sinalizadas e áreas de piquenique. O estacionamento, porém, cobra R$ 20 por hora, e a lanchonete tem preços altos.',
            options: [
              'Split it: one paragraph for what works, one for the costs.',
              'Keep it as it is.',
              'Delete the second sentence.'
            ],
            answer: 'Split it: one paragraph for what works, one for the costs.',
            why: 'It holds two ideas, the good points and the costs. Each deserves its own paragraph and topic sentence.'
          },
          {
            type: 'choice',
            q: 'Which sentence closes an opinion article?',
            options: [
              'Em suma, a semana de quatro dias merece um teste bem planejado.',
              'Em primeiro lugar, funcionários descansados produzem mais.',
              'Li uma reportagem sobre o assunto.'
            ],
            answer: 'Em suma, a semana de quatro dias merece um teste bem planejado.',
            why: '*Em suma* restates the thesis in new words. *Em primeiro lugar* opens an argument.'
          }
        ]
      },
      {
        type: 'pick',
        n: 1,
        from: [
          {
            type: 'order',
            q: 'Put this carta do leitor in order.',
            items: [
              'Prezados editores,',
              'Li a reportagem sobre a alta dos aluguéis em Porto Claro e gostaria de comentar o assunto.',
              'Moro de aluguel há seis anos, e o valor do meu apartamento subiu 40% nesse período.',
              'É verdade que os proprietários também têm custos. No entanto, muitas famílias já não conseguem pagar.',
              'Por isso, a prefeitura deve ampliar os programas de moradia popular.',
              'Atenciosamente, / Uma leitora de Porto Claro'
            ],
            why: 'Greeting, the report, your experience, the counter-argument answered, the proposal, the sign-off.'
          },
          {
            type: 'order',
            q: 'Put this notícia in order.',
            items: [
              'Festa do Milho volta a Vale Claro em junho',
              'A Festa do Milho de Vale Claro volta a acontecer de 12 a 15 de junho, depois de dois anos sem edições.',
              'O evento foi suspenso por falta de patrocínio, mas a prefeitura fechou uma parceria com comerciantes locais.',
              '"A festa movimenta o comércio da cidade inteira", afirmou a secretária de Cultura, Marta Leal.',
              'A entrada é gratuita, e a programação completa estará no site da prefeitura.'
            ],
            free: [[3, 4]],
            why: 'Title, a lead with the main facts, then the background. The quote and the practical information can close in either order.'
          },
          {
            type: 'order',
            q: 'Put this opinion article in order.',
            items: [
              'Trabalho remoto: uma opção que deve continuar',
              'Muitas empresas voltaram ao escritório, mas defendo que o trabalho remoto continue como opção.',
              'Em primeiro lugar, quem trabalha de casa economiza horas de deslocamento.',
              'Além disso, o modelo permite contratar profissionais de outras cidades.',
              'É verdade que nem toda função pode ser remota. No entanto, onde isso é possível, todos ganham.',
              'Em suma, o trabalho remoto deve ser uma escolha, e não um privilégio.'
            ],
            why: 'Title, thesis, two arguments in order, the counter-argument answered, and *Em suma* to close.'
          }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 5 mistakes in this paragraph of an opinion article.',
        text: 'Em primeiro lugar, o sono é {{um questão|uma questão|*Questão* is feminine.}} de saúde pública. Especialistas recomendam de sete a nove horas por noite para adultos. No entanto, muitos trabalhadores {{dormir|dormem|A verb with a subject is conjugated: *eles dormem*.}} menos de seis, por causa das longas jornadas e do trânsito. {{A gente precisa|É preciso|*A gente* is spoken; write *É preciso* or *Precisamos*.}} mudar {{o cultura|a cultura|*Cultura* is feminine.}} das horas extras, que {{tambem|também|*Também* carries an acute accent.}} prejudica a produtividade.'
      },
      {
        type: 'write',
        q: 'Plan a four-paragraph carta do leitor. Write only the first sentence of each paragraph.',
        text: 'Uma reportagem informa que a Prefeitura de Vale Claro vai cobrar entrada no Jardim Botânico da cidade, que hoje é gratuito. Você discorda da medida.',
        model: [
          'Parágrafo 1: Li a reportagem sobre a cobrança de entrada no Jardim Botânico e discordo da medida.',
          'Parágrafo 2: Em primeiro lugar, o jardim é uma das poucas áreas verdes gratuitas da cidade.',
          'Parágrafo 3: Além disso, a cobrança vai afastar as famílias de baixa renda e as escolas públicas.',
          'Parágrafo 4: Por isso, peço que a prefeitura mantenha a entrada gratuita e busque outras fontes de recursos.'
        ],
        check: [
          'Paragraph 1 names the report and your position.',
          'Paragraphs 2 and 3 each open with a connector and carry one idea.',
          'Paragraph 4 asks for a concrete action.',
          '*A medida*, *a cobrança* and *a entrada* keep feminine articles.'
        ]
      },
      { type: 'drills', modes: ['conectivo'], n: 6 },
      { type: 'drills', modes: ['genero'], n: 3 },
      { type: 'prompt', id: 'q-bike-trabalho', note: 'A full Tarefa 3 opinion article. Before writing, plan one line per paragraph: thesis, two arguments, the counter-argument, the conclusion.' }
    ]
  },

  // ---------------------------------------------------------------- 18
  {
    id: 'l18-duas-passagens',
    n: 18,
    unit: 5,
    title: 'Revisão em duas passagens',
    en: 'Proofread any text in two fast passes that catch the errors you make most.',
    minutes: 14,
    steps: [
      {
        type: 'teach',
        title: 'Leave time for two passes',
        body: [
          'You write fast, and on the exam the spare time is worth points. Most of your errors are ones you catch as soon as you look for them.',
          'One reading that looks for everything misses things. Two quick readings, each with one target, catch more.',
          'Budget 5 to 8 minutes at the end of every task. In Tarefas 1 and 2, stop writing with about 5 minutes left. In Tarefas 3 and 4, stop with 8. Spend half the time on each pass.'
        ]
      },
      {
        type: 'teach',
        title: 'Pass 1: agreement',
        body: [
          'Read only for agreement. Stop at every noun and check its article, its adjectives and any pronoun that points back to it. *-ção, -são, -dade, -gem, -tude* are feminine, with rare exceptions (*o coração*; *personagem* takes either). Greek *-ma* words (*o problema, o sistema, o tema*) are masculine, but *a cama* and *a forma* are feminine.',
          'Then stop at every verb. Does it have a subject, and does it match? *As crianças passam*, not *passar*. *Os moradores reclamam*, not *reclama*.',
          'Traps worth checking twice: *a lei, a mão, a foto, o dia, o mapa*.'
        ],
        examples: [
          { pt: 'A proibição foi aprovada. Ela vale a partir de maio.', en: '*Proibição*, *aprovada*, *ela*: all feminine.' },
          { pt: 'Os celulares velhos e as TVs velhas vão para a coleta.', en: 'Each adjective follows its own noun.' },
          { pt: 'Para as crianças passarem com segurança, os motoristas precisam reduzir a velocidade.', en: 'Every subject gets a conjugated verb or a personal infinitive.' }
        ]
      },
      {
        type: 'teach',
        title: 'Pass 2: accents, crase, regência',
        body: [
          'Read again, now for small marks. Short words first: *não, também, você, é, está, há, já, só, até*. Then *têm* and *vêm* with a plural subject, *através, invés, após, além, porém*, and plurals in *-ões*.',
          'Crase: *à* appears when a word that takes *a* meets a feminine noun: *vou à farmácia*, *entreguei à gerente*, *às 16h*. Never before a masculine noun or a verb.',
          'Regência: check the preposition after the words you often get wrong. *Preocupado com*, *sonhar com*, *interessado em*, *entregar a* or *para*, *ir a*.'
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'fix',
            title: 'Two passes: find the 4 mistakes in this complaint.',
            text: 'Prezados senhores,\nSou cliente da Academia Corpo Livre há dois anos e escrevo para registrar uma reclamação. Em agosto, cancelei {{o assinatura|a assinatura|*Assinatura* is feminine.}}, mas a cobrança continua no meu cartão. Os atendentes {{dizer|dizem|A verb with a subject is conjugated: *os atendentes dizem*.}} que o sistema não foi atualizado. Estou {{preocupado sobre|preocupado com|*Preocupado* takes *com*.}} novas cobranças e solicito o estorno dos valores {{ate|até|*Até* carries an acute accent.}} o dia 15.\nAtenciosamente,\nCliente do contrato nº 20.417'
          },
          {
            type: 'fix',
            title: 'Two passes: find the 4 mistakes in this news story.',
            text: 'Um grupo de estudantes da Universidade de Vale Claro encontrou uma nova espécie de sapo {{atraves|através|*Através* carries an acute accent.}} de gravações noturnas na Serra do Cedro. {{O descoberta|A descoberta|*Descoberta* is feminine.}} foi publicada em uma revista científica. "Os moradores sempre ouviram esse canto, mas ninguém o tinha registrado", afirmou a bióloga Ana Serpa. Os pesquisadores {{pretende|pretendem|The subject is plural, so the verb is too.}} voltar {{a serra|à serra|*Voltar a* + *a serra* gives *à serra*.}} em dezembro.'
          },
          {
            type: 'fix',
            title: 'Two passes: find the 4 mistakes in this e-mail to a friend.',
            text: 'Oi, Júlia!\nQue bom que você vem para Salvador em janeiro! {{O viagem|A viagem|*-gem* nouns are feminine: *a viagem*.}} de barco até o Morro de São Paulo leva cerca de duas horas, então leve remédio para enjoo. As praias {{tem|têm|Plural subject: *têm*, with a circumflex.}} muita gente no verão, por isso chegue cedo. E não deixe de ir {{no Pelourinho|ao Pelourinho|In writing, *ir* takes *a*: *ao Pelourinho*.}}. Já estou {{sonhando em|sonhando com|*Sonhar* takes *com*.}} as nossas férias!\nBeijos,\nCarol'
          },
          {
            type: 'fix',
            title: 'Two passes: find the 4 mistakes in this notice to employees.',
            text: 'Prezados colaboradores,\nInformamos que a campanha de vacinação contra a gripe acontecerá na próxima semana, na sala de reuniões do 2º andar. {{O vacinação|A vacinação|*-ção* nouns are feminine.}} é gratuita e será realizada das 9h {{as 16h|às 16h|Clock times take crase: *das 9h às 16h*.}}. {{Nao|Não|*Não* carries a tilde.}} é preciso agendar. Solicitamos que todos {{traz|tragam|*Solicitamos que* takes the subjunctive: *tragam*.}} o crachá. Contamos com a participação de todos.\nDepartamento de Recursos Humanos'
          },
          {
            type: 'fix',
            title: 'Two passes: find the 4 mistakes in this blog post.',
            text: 'Você sabia que {{as legumes|os legumes|*Legume* is masculine: *os legumes*.}} da estação custam menos? Na safra, eles são colhidos em maior quantidade e ficam mais baratos. Faça uma lista antes de ir {{a feira|à feira|*Ir a* + *a feira* gives *à feira*.}} e compare os preços de pelo menos {{tres|três|*Três* carries a circumflex.}} barracas. Assim, você {{economizar|economiza|A verb with a subject is conjugated: *você economiza*.}} sem comer pior.'
          },
          {
            type: 'fix',
            title: 'Two passes: find the 4 mistakes in this flyer.',
            text: 'Venha correr com o Grupo Passo Firme! Os treinos de corrida são gratuitos e acontecem {{aos sabados|aos sábados|*Sábado* carries an acute accent.}}, às 7h, no Parque Lagoa Serena. Há turmas para todas {{os idades|as idades|*-dade* nouns are feminine: *as idades*.}}. Os iniciantes {{tem|têm|Plural subject: *têm*, with a circumflex.}} acompanhamento de um professor. Traga água e {{vem|venha|With *você*, the imperative is *venha*, not *vem*.}} com roupa leve.'
          }
        ]
      },
      {
        type: 'choice',
        q: 'You finish Tarefa 3 with 8 minutes left. What now?',
        options: [
          'Pass 1 for agreement, then pass 2 for accents, crase and regência.',
          'Copy the whole text again more neatly.',
          'Add a fifth paragraph.'
        ],
        answer: 'Pass 1 for agreement, then pass 2 for accents, crase and regência.',
        why: 'Two short passes with one target each catch the most errors. Recopying uses up the time without checking anything.'
      },
      {
        type: 'write',
        q: 'Correct this sentence from a daycare notice. Type it back with every error fixed.',
        text: 'As familias que tem filhos na creche devem entregar os documentos com a secretaria ate o dia 10.',
        model: [
          'As famílias que têm filhos na creche devem entregar os documentos à secretaria até o dia 10.'
        ],
        check: [
          '*Famílias* has an acute accent.',
          '*Têm* has a circumflex, because the subject is plural.',
          '*Entregar* takes *a* or *para*: *à secretaria* or *para a secretaria*.',
          '*Até* has an acute accent.'
        ]
      },
      { type: 'drills', modes: ['genero', 'acento', 'regencia'], n: 8 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  // ---------------------------------------------------------------- 19
  {
    id: 'l19-simulado-1',
    n: 19,
    unit: 5,
    title: 'Simulado: Tarefas 1 e 2',
    en: 'Sit Tasks 1 and 2 under exam timing, from notes to two proofreading passes.',
    minutes: 65,
    steps: [
      {
        type: 'teach',
        title: 'Tarefas 1 and 2 in 30 minutes',
        body: [
          'Read the prompt before it plays. Write the role, reader, genre and purpose at the top of your notes, and circle every action verb.',
          'First playing: names, numbers, dates and the 3 or 4 main points, as keywords. Second playing: fill the gaps and check the numbers. Then 2 minutes to plan, about 15 to write and 5 for your two passes.',
          'Here the video and the audio come as transcripts. Follow the note on each prompt, then cover the transcript and work only from your notes. Never mention the video or the audio in your text.'
        ]
      },
      {
        type: 'choice',
        q: 'During the first playing, what do you write down?',
        options: [
          'Names, numbers and the 3 or 4 main points, as keywords',
          'Full sentences you can copy into your text',
          'Nothing; you only listen the first time'
        ],
        answer: 'Names, numbers and the 3 or 4 main points, as keywords',
        why: 'Keywords let you keep up. Full sentences make you miss the next point, and waiting for the second playing wastes half your listening.'
      },
      {
        type: 'choice',
        q: 'Which sentence can go in your text?',
        options: [
          'De acordo com especialistas, dormir bem melhora a memória.',
          'No áudio, o psicólogo fala que dormir bem melhora a memória.',
          'Segundo o texto, dormir bem melhora a memória.'
        ],
        answer: 'De acordo com especialistas, dormir bem melhora a memória.',
        why: 'Your reader never heard the audio. Attribute the point to *especialistas* or state it as a fact.'
      },
      { type: 'prompt', id: 's-telemedicina', note: 'Tarefa 1, a folheto for patients of a health post: *você* and the imperative. Set 30 minutes, keep notes as keywords only, and stop writing with 5 minutes left for the two passes.' },
      { type: 'prompt', id: 'p-ansiedade-provas', note: 'Tarefa 2, a personal e-mail to your niece. Informal is right here, but accents, agreement and verbs still count. Same 30 minutes, same two passes.' }
    ]
  },

  // ---------------------------------------------------------------- 20
  {
    id: 'l20-simulado-2',
    n: 20,
    unit: 5,
    title: 'Simulado: Tarefas 3 e 4',
    en: 'Sit Tasks 3 and 4 under exam timing, managing your own clock.',
    minutes: 95,
    steps: [
      {
        type: 'teach',
        title: 'Tarefas 3 and 4 on your own clock',
        body: [
          'Nobody times these tasks for you. Read the prompt first (2 minutes). Read the text and underline the 3 or 4 facts you will use (8 minutes). Plan the checklist of action verbs, the genre markers and one line per paragraph (5 minutes).',
          'Write for 25 to 30 minutes, then stop. Use the last 5 to 10 minutes for your two passes: agreement first, then accents, crase and regência.',
          'Reword every fact. A carta do leitor names the report it answers. A notícia stays in the third person and puts opinions only inside quotes.'
        ]
      },
      {
        type: 'choice',
        q: 'In a notícia, where does an opinion go?',
        options: [
          'Only inside a quote attributed to someone by name and role',
          'In the last paragraph, in your own voice',
          'In the title'
        ],
        answer: 'Only inside a quote attributed to someone by name and role',
        why: 'A notícia stays in the third person. Opinions enter only through quotes, with a verb such as *afirmou*.'
      },
      {
        type: 'choice',
        q: 'Which line opens a carta do leitor?',
        options: [
          'Li a reportagem sobre o aumento das tarifas de energia e gostaria de comentar o assunto.',
          'Olá, jornal! Quero falar da matéria que vocês publicaram.',
          'Segundo o texto da prova, as tarifas de energia vão subir.'
        ],
        answer: 'Li a reportagem sobre o aumento das tarifas de energia e gostaria de comentar o assunto.',
        why: 'The letter names the report it answers, in formal register. *Olá* and *vocês* are too informal, and the reader never saw the exam text.'
      },
      { type: 'prompt', id: 'y-patinetes', note: 'Tarefa 3, a carta do leitor. Set 45 minutes: 15 to read and plan, 25 to write, 5 or more for the two passes. Sign with a role, not a name.' },
      { type: 'prompt', id: 'r-museu-gratuito', note: 'Tarefa 4, a notícia. A title in the present tense, a lead that answers *o quê, quem, quando, onde*, and one quote with *afirmou* or *explicou*.' }
    ]
  },

  // ---------------------------------------------------------------- 21
  {
    id: 'l21-vespera',
    n: 21,
    unit: 5,
    title: 'Véspera',
    en: 'Pack for the exam, review the essentials lightly and rest.',
    minutes: 12,
    steps: [
      {
        type: 'teach',
        title: 'Tonight and tomorrow',
        body: [
          'Pack tonight: your original photo ID and two or three black ballpoint pens. Check your registration for the address and start time of your exam site and for what you may bring into the room, and plan to arrive early.',
          'In the room, read each prompt before you write. In the margin, note the role, the reader, the genre, the purpose and every action verb, and tick them off as you go.',
          'Watch the clock. Tarefas 1 and 2 take about 30 minutes each, and 3 and 4 share the rest. Stop each task with 5 to 8 minutes left for your two passes.'
        ],
        examples: [
          { pt: 'EU: morador | Secretaria de Obras | solicitação | pedir + descrever + sugerir', en: 'A margin note: role, reader, genre and the three action verbs.' }
        ]
      },
      {
        type: 'pick',
        n: 4,
        from: [
          {
            type: 'choice',
            q: 'Who is writing, and to whom?',
            text: 'Você trabalha no setor de eventos da Prefeitura de Vale Claro. Escreva um aviso para os moradores informando as mudanças no trânsito durante a Maratona de Primavera.',
            options: ['The city events office, to residents', 'A resident, to the city hall', 'A runner, to a friend'],
            answer: 'The city events office, to residents',
            why: 'The prompt makes you the events office. The notice speaks for the institution (*informamos*) to the residents.'
          },
          {
            type: 'choice',
            q: 'The prompt asks for a *notícia*. Which of these must it have?',
            options: [
              'A title and a lead that says what, who, when and where',
              'A greeting such as Prezados editores',
              'Tips in the imperative'
            ],
            answer: 'A title and a lead that says what, who, when and where',
            why: 'The title and the lead are the genre markers of a notícia. A greeting belongs to letters, and tips belong to a blog or a flyer.'
          },
          {
            type: 'choice',
            q: 'Which sentence fits a formal complaint?',
            options: [
              'O produto apresenta defeito há três semanas.',
              'Tem três semanas que o produto tá com defeito.',
              'Faz três semanas que a gente espera o conserto.'
            ],
            answer: 'O produto apresenta defeito há três semanas.',
            why: 'Formal writing uses *há* for time, not *tem*, and has no *tá* or *a gente*.'
          },
          {
            type: 'choice',
            q: 'In which text is *a gente* acceptable?',
            options: ['A personal e-mail to a friend', 'A letter to the editor', 'A news story'],
            answer: 'A personal e-mail to a friend',
            why: 'Speech forms like *a gente* and *pra* are fine only in the personal e-mail. The other genres use *nós* or the third person.'
          },
          {
            type: 'choice',
            q: 'Which sentence uses the source correctly?',
            options: [
              'Uma pesquisa recente mostra que os jovens estão tomando menos café.',
              'No texto da prova, está escrito que os jovens tomam menos café.',
              'O vídeo mostra que os jovens tomam menos café.'
            ],
            answer: 'Uma pesquisa recente mostra que os jovens estão tomando menos café.',
            why: 'Your reader never saw the exam material. Refer to *uma pesquisa recente* or state the fact directly.'
          },
          {
            type: 'choice',
            q: 'Which sentence uses this fact in your own words?',
            text: 'Fonte: "O número de ciclistas na cidade dobrou em dois anos."',
            options: [
              'Em apenas dois anos, a cidade passou a ter o dobro de ciclistas.',
              'O número de ciclistas na cidade dobrou em dois anos.',
              'Há muitos ciclistas.'
            ],
            answer: 'Em apenas dois anos, a cidade passou a ter o dobro de ciclistas.',
            why: 'The first keeps the fact and changes the words. The second copies the source, and the third loses the information.'
          }
        ]
      },
      {
        type: 'fix',
        title: 'One last fix: find the 5 mistakes in this request.',
        text: 'Prezados senhores,\nSou moradora do Jardim Primavera e venho solicitar a ampliação do horário da biblioteca municipal. Hoje, {{o biblioteca|a biblioteca|*Biblioteca* is feminine.}} fecha às 17h, e muitos estudantes {{trabalhar|trabalham|A verb with a subject is conjugated: *os estudantes trabalham*.}} durante o dia. {{Tem|Há|Formal writing uses *há* for "there are".}} dezenas de jovens {{interessados sobre|interessados em|*Interessado* takes *em*.}} usar o espaço à noite. Solicito que o horário seja estendido até as 21h. Agradeço a {{atençao|atenção|The *-ção* ending needs its tilde.}}.\nAtenciosamente,\nUma moradora do Jardim Primavera'
      },
      {
        type: 'write',
        q: 'Read the enunciado and write your margin notes: role, reader, genre, purpose and every action verb.',
        text: 'Você é voluntário em uma ONG que resgata animais. Escreva um folheto para os moradores da cidade convidando-os para uma feira de adoção, explicando os cuidados que um animal exige e informando como adotar.',
        model: [
          'Eu: voluntário da ONG',
          'Leitor: moradores da cidade',
          'Gênero: folheto (você, imperativo)',
          'Propósito: convidar + explicar os cuidados + informar como adotar'
        ],
        check: [
          'You named the role and the reader.',
          'You listed all three action verbs: *convidar, explicar, informar*.',
          'You noted the register: *você* and the imperative (*venha, adote*).'
        ]
      },
      { type: 'drills', modes: ['genero', 'acento', 'contracao', 'regencia', 'conjugacao', 'abertura', 'conectivo', 'registro'], n: 8 },
      { type: 'drills', modes: ['genero'], n: 3 },
      {
        type: 'teach',
        title: 'Before you sleep',
        body: [
          'You have worked through the whole path. The habits are in place: read the prompt for role, reader, genre and purpose; use three or four facts in your own words; leave time for two passes.',
          'Stop studying early tonight. A rested reader catches more of his own errors than a tired one.',
          'Tomorrow, take one task at a time. Boa prova.'
        ]
      }
    ]
  }
);
