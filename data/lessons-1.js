window.CB = window.CB || {};
CB.lessons = CB.lessons || [];
CB.lessons.push(

  // ---------------------------------------------------------------- Unit 1
  {
    id: 'l01-papel',
    n: 1,
    unit: 1,
    title: 'Quem escreve, para quem, para quê',
    en: 'Read any enunciado and name who you are, who reads, why you write and in what genre.',
    minutes: 12,
    steps: [
      {
        type: 'teach',
        title: 'Four questions before you write',
        body: [
          'Every Celpe-Bras enunciado sets a job: who you are (*enunciador*), who reads (*interlocutor*), why you write (*propósito*) and in what genre (*gênero*). Graders check this first. A text with perfect grammar that misses the reader or the purpose stays in the low bands.',
          'Underline the four in the prompt and write them in two or three words at the top of your draft: *eu: cliente / ouvidoria / e-mail / pedir reembolso*.',
          'The action verbs split the purpose into parts. *Relate, explique, solicite, sugira*: each one is a checkbox the grader will look for.'
        ],
        examples: [
          { pt: 'Você mora em Serratinga e leu uma reportagem sobre a falta de médicos no posto de saúde.', en: 'Enunciador: a resident who read the report.' },
          { pt: 'Escreva uma carta para a seção de leitores do jornal Correio Ribeirinho...', en: 'Interlocutor: the editors and readers. Gênero: carta do leitor.' },
          { pt: '...relatando a sua experiência e sugerindo soluções.', en: 'Propósito: two checkboxes, relate and suggest.' }
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Who is the enunciador of this text?',
            text: 'Você trabalha como recepcionista no Hotel Serra Azul. O gerente pediu que você escreva um aviso para os hóspedes informando que a piscina ficará fechada para manutenção entre os dias 3 e 7 de julho e indicando as opções de lazer oferecidas pelo hotel nesse período.',
            options: ['The hotel staff, speaking for the hotel', 'The manager, in his own name', 'A guest who is unhappy about the pool'],
            answer: 'The hotel staff, speaking for the hotel',
            why: 'You write it, but an aviso speaks for the institution in the plural (*informamos*) and is signed *A Recepção* or *A Gerência*. The manager only asked for it.'
          },
          {
            type: 'choice',
            q: 'Who reads your text?',
            text: 'Você é sócio do Clube Atlético Beira-Rio há dez anos. O clube anunciou que a academia vai fechar às 20h, e não mais às 22h. Escreva um e-mail para a diretoria do clube manifestando a sua insatisfação e propondo uma solução para quem só pode treinar à noite.',
            options: ['The club\'s board of directors', 'The other members of the club', 'The readers of a local newspaper'],
            answer: 'The club\'s board of directors',
            why: 'The prompt names the reader: *a diretoria do clube*. Write to the people who can change the rule, formally and with the club in the third person. The other members may agree with you, but they are not your reader.'
          },
          {
            type: 'choice',
            q: 'What is the purpose?',
            text: 'Você comprou um liquidificador no site da loja Casa Viva. O aparelho chegou com a jarra trincada. Escreva um e-mail para o SAC da loja relatando o problema e solicitando a troca do produto.',
            options: ['Report the defect and ask for a replacement', 'Ask for your money back', 'Warn other customers about the store'],
            answer: 'Report the defect and ask for a replacement',
            why: 'The verbs are *relatando* and *solicitando a troca*. A refund is a different request, and warning other customers belongs to a review or a blog, not to a message to the SAC.'
          },
          {
            type: 'choice',
            q: 'Which genre fits this prompt?',
            text: 'A Associação dos Produtores Orgânicos de Vale Verde vai realizar a primeira Feira da Colheita no parque municipal, no domingo, 14 de junho. Como membro da associação, escreva um texto para ser distribuído no centro da cidade, convidando a população e explicando as vantagens dos alimentos orgânicos.',
            options: ['Folheto', 'Carta do leitor', 'Notícia'],
            answer: 'Folheto',
            why: 'A text handed out in the street to invite and persuade the public is a *folheto*: a title, short blocks, the imperative. A *notícia* reports without inviting, and a *carta do leitor* goes to a newspaper.'
          },
          {
            type: 'choice',
            q: 'Who are you, and how should you sound?',
            text: 'Você é enfermeiro no posto de saúde do bairro Santa Luzia e vai escrever, no blog da unidade, um post com orientações para os pacientes sobre a campanha de vacinação contra a gripe.',
            options: ['A nurse giving advice, warm and clear, speaking to *você*', 'A patient telling your own story, informally', 'A health official writing a formal letter to the Secretaria'],
            answer: 'A nurse giving advice, warm and clear, speaking to *você*',
            why: 'The prompt makes you a nurse and your readers patients. A blog post speaks to *você* with tips in the imperative. It is not a letter to an office.'
          },
          {
            type: 'choice',
            q: 'Who is the interlocutor?',
            text: 'Você leu no jornal Correio do Litoral a reportagem "Conta de água sobe 18% em janeiro". Escreva uma carta do leitor para o jornal, posicionando-se sobre o aumento e sugerindo à companhia de saneamento medidas para reduzir o desperdício.',
            options: ['The editors and readers of the paper', 'The water company', 'The reporter who wrote the article'],
            answer: 'The editors and readers of the paper',
            why: 'A *carta do leitor* goes to the paper, even when it suggests things to the company. Write to *Prezados editores* and speak of *a companhia* in the third person.'
          }
        ]
      },
      {
        type: 'teach',
        title: 'The first sentence does the job',
        body: [
          'Open a formal text by saying who you are and why you write, in one sentence. The grader sees at once that you took the role and understood the purpose.',
          'The pattern is *Sou* + your role + *e escrevo para* + the verb from the prompt.',
          'Opening with *Mas* or with the problem itself assumes a conversation the reader never had.'
        ],
        examples: [
          { pt: 'Sou morador do bairro Jardim Aurora e escrevo para solicitar a instalação de uma faixa de pedestres.', en: 'Role and purpose, in a request to a public office.' },
          { pt: 'Sou cliente da NetVale há três anos e escrevo para registrar uma reclamação sobre a conexão.', en: 'Customer, for how long, and the purpose.' },
          { pt: 'Como leitor da revista há muitos anos, gostaria de manifestar minha opinião sobre a reportagem de capa.', en: 'A reader writing to the editors.' },
          { pt: 'Escrevo em nome dos moradores da Rua das Palmeiras para pedir mais iluminação.', en: 'Speaking for a group.' }
        ]
      },
      {
        type: 'choice',
        q: 'Which first sentence does the job?',
        text: 'Você esperou cinco horas por atendimento no pronto-socorro do Hospital Vale Verde. Escreva um e-mail para a ouvidoria do hospital relatando o que aconteceu e sugerindo melhorias.',
        options: [
          'Sou paciente do Hospital Vale Verde e escrevo para relatar a longa espera no pronto-socorro e sugerir melhorias no atendimento.',
          'Mas ninguém aguenta mais esperar tanto tempo no pronto-socorro.',
          'Olá, pessoal do hospital, tudo bem com vocês?'
        ],
        answer: 'Sou paciente do Hospital Vale Verde e escrevo para relatar a longa espera no pronto-socorro e sugerir melhorias no atendimento.',
        why: 'It names your role and both parts of the purpose. *Mas* starts in the middle of a conversation, and *Olá, pessoal* talks to the ouvidoria as if it were a group of friends.'
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this e-mail to the club.',
        text: 'Prezados senhores,\nSou sócio do Clube Atlético Beira-Rio {{tem|há|Elapsed time takes *há* in writing: *há dez anos*.}} dez anos e escrevo para manifestar minha insatisfação com {{o decisão|a decisão|Nouns in *-são* are feminine.}} de fechar a academia às 20h. Muitos associados trabalham até as 19h e estão {{preocupados sobre|preocupados com|*Preocupado* takes *com*, not *sobre*.}} a falta de horário para treinar. Solicito que a diretoria mantenha o horário até as 22h, pelo menos três vezes por semana, para os associados {{treinar|treinarem|The infinitive has its own subject (*os associados*), so it takes the personal ending.}} depois do trabalho.\nAtenciosamente,\nUm sócio do Clube Atlético Beira-Rio'
      },
      {
        type: 'write',
        q: 'Write the greeting and the first sentence: who you are and why you write.',
        text: 'Você alugou um apartamento na Rua das Acácias, 120, pela imobiliária Casa Firme. O aquecedor de água parou de funcionar logo depois da mudança. Escreva um e-mail para a imobiliária relatando o problema e solicitando o conserto.',
        model: [
          'Prezados senhores,',
          'Sou inquilino do apartamento 302 da Rua das Acácias, 120, e escrevo para relatar um defeito no aquecedor de água e solicitar o conserto.'
        ],
        check: [
          'A formal greeting: *Prezados senhores,*',
          'Your role in the first sentence (*Sou inquilino...*).',
          'The purpose with *escrevo para* and the verbs from the prompt (*relatar*, *solicitar*).',
          'The agency stays in the third person. No *vocês*.',
          'Agreement: *o defeito*, *o conserto*, *a imobiliária*.'
        ]
      },
      { type: 'drills', modes: ['abertura'], tags: ['abertura'], n: 5 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  {
    id: 'l02-generos',
    n: 2,
    unit: 1,
    title: 'O formato de cada gênero',
    en: 'Lay out the frame of the main genres before you write a word of the body.',
    minutes: 14,
    steps: [
      {
        type: 'teach',
        title: 'Graders see the format first',
        body: [
          'Before reading a word, a grader sees whether your page looks like the genre asked for. A letter has place and date, a vocativo and a signature. A notícia has a title and a lide. An e-mail to a company has an *Assunto* line.',
          'Learn each skeleton as a list of parts in order. Under time pressure, write the frame first and then fill it in.'
        ],
        examples: [
          { pt: 'Juiz de Fora, 12 de agosto de 2026.', en: 'Local e data: the top of a carta do leitor.' },
          { pt: 'Assunto: reserva cancelada sem aviso', en: 'Assunto: the first line of a complaint or request e-mail.' },
          { pt: 'Prezados editores,', en: 'Vocativo: the greeting of a letter.' },
          { pt: 'Atenciosamente, / Uma leitora de Juiz de Fora', en: 'Despedida and a role signature, never a real name.' }
        ]
      },
      {
        type: 'order',
        q: 'Put this carta do leitor in order.',
        items: [
          'Juiz de Fora, 12 de agosto de 2026.',
          'Prezados editores,',
          'Li a reportagem "Feiras livres perdem clientes para os aplicativos" e gostaria de comentá-la.',
          'Faço compras na feira do meu bairro há vinte anos, e a qualidade das frutas continua muito melhor.',
          'Para atrair novos clientes, sugiro que os feirantes aceitem pagamento por Pix.',
          'Atenciosamente, / Uma leitora de Juiz de Fora'
        ],
        why: 'Place and date, vocativo, the report you answer, your position with your experience, a proposal, then the closing and a role signature.'
      },
      {
        type: 'pick',
        n: 2,
        from: [
          {
            type: 'order',
            q: 'Put this complaint e-mail in order.',
            items: [
              'Assunto: reserva cancelada sem aviso (reserva nº 7731)',
              'Prezados senhores,',
              'Sou cliente da Pousada Maré Mansa e escrevo para registrar uma reclamação.',
              'No dia 2 de janeiro, ao chegar, soube que a minha reserva tinha sido cancelada.',
              'Solicito o reembolso integral do valor pago em até cinco dias úteis.',
              'Atenciosamente, / Titular da reserva nº 7731'
            ],
            why: 'Assunto, greeting, who you are and why, the facts, a demand with a deadline, then the closing with a signature that identifies the booking.'
          },
          {
            type: 'order',
            q: 'Put this notícia in order.',
            items: [
              'Corrida da Primavera abre inscrições nesta terça-feira',
              'A Corrida da Primavera de Vila Serena abre nesta terça-feira, 1º de setembro, as inscrições para a prova de 5 km, marcada para o dia 20.',
              'A organização espera 2 mil participantes, entre atletas amadores e profissionais.',
              '"Queremos que toda a família participe", afirmou o coordenador da prova, Márcio Lima.',
              'As inscrições custam R$ 40 e podem ser feitas pelo site da corrida até o dia 15.'
            ],
            free: [[2, 4]],
            why: 'Title first, then the lide with what, who, when and where. After that, details, a quote with name and role, and practical information can come in the order that reads best.'
          },
          {
            type: 'order',
            q: 'Put this aviso in order.',
            items: [
              'COMUNICADO',
              'Prezados colaboradores,',
              'Informamos que, na sexta-feira, 22 de maio, o refeitório ficará fechado para dedetização.',
              'Nesse dia, cada funcionário receberá um vale-refeição extra para almoçar fora da empresa.',
              'Agradecemos a compreensão.',
              'Departamento de Recursos Humanos'
            ],
            why: 'Title, the group addressed, the reason for the notice, what readers get or must do, the standard closing line, then the department as signer.'
          },
          {
            type: 'order',
            q: 'Put this folheto in order.',
            items: [
              'Proteja-se da gripe: vacine-se!',
              'A vacina reduz o risco de complicações da gripe, principalmente em idosos e crianças.',
              'Quem deve se vacinar? Pessoas com mais de 60 anos, gestantes e crianças pequenas.',
              'Quando? De 4 a 29 de maio, das 8h às 17h.',
              'Traga a sua carteira de vacinação e venha se proteger!'
            ],
            free: [[1, 3]],
            why: 'A catchy title first and the call to action last. In between, short blocks (why, who, when) in any order the reader can scan.'
          }
        ]
      },
      {
        type: 'teach',
        title: 'Title, lide, vocativo, assunto, despedida',
        body: [
          'A notícia, a blog post, an artigo de opinião and a folheto open with a title, not a greeting. A notícia title states the main fact in the present tense.',
          'The lide is the first paragraph of a notícia. It answers what, who, when and where, in the third person.',
          'Letters and e-mails open with a vocativo (*Prezados editores,*) and close with a despedida (*Atenciosamente,*). E-mails to a company or office add an *Assunto* line at the top.'
        ],
        examples: [
          { pt: 'Biblioteca de Pedra Azul passa a abrir aos domingos', en: 'A notícia title: the fact, present tense, no period.' },
          { pt: 'A Biblioteca Municipal de Pedra Azul abre aos domingos a partir de 6 de setembro, das 9h às 13h.', en: 'The lide: what, who, when, where.' },
          { pt: 'Assunto: pedido de troca (pedido nº 45872)', en: 'The Assunto names the matter and the account.' }
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which line is a good lide?',
            options: [
              'A Biblioteca Municipal de Pedra Azul abre aos domingos a partir de 6 de setembro, das 9h às 13h.',
              'Você gosta de ler no fim de semana?',
              'Eu acho ótimo que a biblioteca abra aos domingos.'
            ],
            answer: 'A Biblioteca Municipal de Pedra Azul abre aos domingos a partir de 6 de setembro, das 9h às 13h.',
            why: 'A lide answers what, who, when and where in the third person. A question to *você* opens a blog post, and *eu acho* is opinion.'
          },
          {
            type: 'choice',
            q: 'Which genre needs an *Assunto* line?',
            options: ['E-mail de reclamação', 'Notícia', 'Folheto'],
            answer: 'E-mail de reclamação',
            why: 'An e-mail to a company or office opens with *Assunto* so the reader knows the matter and the account at once. A notícia and a folheto open with a title.'
          },
          {
            type: 'choice',
            q: 'How does a blog post open?',
            options: ['With a title and a question to *você*', 'With *Prezados leitores,*', 'With the place and the date'],
            answer: 'With a title and a question to *você*',
            why: 'The title opens a blog post, and the first sentence speaks to the reader. A friendly *Olá, pessoal!* is optional. *Prezados leitores* sounds stiff, and place and date belong to letters.'
          },
          {
            type: 'choice',
            q: 'Which closing line fits a company aviso to its employees?',
            options: ['Agradecemos a compreensão.', 'Um abraço,', 'Conte nos comentários!'],
            answer: 'Agradecemos a compreensão.',
            why: 'A notice closes in the institution\'s plural voice. *Um abraço* is for friends, and *Conte nos comentários* ends a blog post.'
          },
          {
            type: 'choice',
            q: 'Which vocativo fits a carta do leitor?',
            options: ['Prezados editores,', 'Querido jornal,', 'Olá, leitores!'],
            answer: 'Prezados editores,',
            why: 'The letter goes to the editors, formally. *Querido* is for people you love, and *Olá* belongs to friendly messages.'
          },
          {
            type: 'choice',
            q: 'In a notícia, who speaks?',
            options: ['The reporter, in the third person only', 'The reporter as *eu*', 'The community as *nós*'],
            answer: 'The reporter, in the third person only',
            why: 'A notícia reports facts about other people. Opinions appear only as quotes from sources, with *afirmou* or *explicou*.'
          },
          {
            type: 'choice',
            q: 'What goes at the top of a carta do leitor?',
            options: ['Local e data', 'Assunto', 'Título'],
            answer: 'Local e data',
            why: 'A letter starts with the place and the date, then the vocativo. *Assunto* belongs to e-mails, and a title to notícias, blogs and articles.'
          }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this aviso.',
        text: 'COMUNICADO\nPrezados colaboradores,\nInformamos que, de 8 a 12 de junho, {{o garagem|a garagem|Nouns in *-gem* are feminine.}} da empresa ficará fechada para obras. Nesse período, {{tem|há|For "there is / there are", written Portuguese uses *há*.}} vagas no estacionamento do Shopping Norte, a 200 metros daqui. Solicitamos que os funcionários {{usar|usem|*Solicitamos que* takes the present subjunctive.}} o crachá na entrada. {{Tambem|Também|Words of two or more syllables stressed on the last one and ending in *-em* take an accent.}} pedimos que evitem o horário das 8h.\nAgradecemos a compreensão.\nDepartamento de Recursos Humanos'
      },
      {
        type: 'write',
        q: 'Write the title and the lide of a notícia from these facts.',
        text: 'Fatos: Festival de Inverno de Serra Alta / 5ª edição / de 10 a 19 de julho / começa numa sexta-feira / shows e oficinas gratuitas / Centro Cultural da cidade',
        model: [
          'Festival de Inverno de Serra Alta começa nesta sexta com programação gratuita',
          'O 5º Festival de Inverno de Serra Alta começa nesta sexta-feira, 10 de julho, e vai até o dia 19, com shows e oficinas gratuitas no Centro Cultural da cidade.'
        ],
        check: [
          'The title states the main fact in the present tense, with no period.',
          'The lide answers what, when, where and who it is for.',
          'Third person only: no *eu*, no *nós*.',
          'Agreement: *oficinas gratuitas*, *o festival*, *a 5ª edição*.'
        ]
      },
      { type: 'drills', modes: ['abertura'], tags: ['saudação', 'fecho', 'despedida', 'assinatura'], n: 6 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  {
    id: 'l03-registro',
    n: 3,
    unit: 1,
    title: 'Escrito, não falado',
    en: 'Swap the spoken forms you use every day for the written forms graders expect.',
    minutes: 12,
    steps: [
      {
        type: 'teach',
        title: 'Speech leaks into writing',
        body: [
          'Celpe-Bras texts are written texts, even when the source was a chatty video. Graders mark spoken forms as register slips, and a pattern of them costs a band.',
          'The exception is a personal e-mail to a friend. There, *a gente* and *pra* are natural.',
          '*Tem* stays correct for possession: *A clínica tem dois pediatras.* For "there is" and for elapsed time, write *há*.'
        ],
        table: [
          { use: 'Há muitas reclamações.', avoid: 'Tem muitas reclamações.', why: '*Haver* means "there is" in writing. Keep *ter* for possession.' },
          { use: 'Moro aqui há três anos.', avoid: 'Tem três anos que moro aqui.', why: 'Elapsed time also takes *há*.' },
          { use: 'nós reclamamos', avoid: 'a gente reclama', why: '*A gente* is spoken. Formal texts use *nós* with the *-mos* form.' },
          { use: 'para', avoid: 'pra', why: '*Pra* is a spoken contraction. Write *para* everywhere except to a friend.' },
          { use: 'a empresa, a clínica', avoid: 'vocês', why: 'A formal letter names the institution in the third person.' },
          { use: 'solicito', avoid: 'quero', why: '*Quero* sounds like an order at a counter.' }
        ]
      },
      {
        type: 'teach',
        title: 'Words and calques',
        body: [
          'Some choices are vocabulary, not grammar. Formal writing prefers the precise word: *gratuito*, *recolher*, *solicitar*.',
          'English leaks in through calques (structures copied word for word). In Portuguese a law is *aprovada*, and e-waste has its own name.'
        ],
        table: [
          { use: 'A lei foi aprovada.', avoid: 'A lei foi passada.', why: '*Passar uma lei* copies "to pass a law".' },
          { use: 'lixo eletrônico', avoid: 'e-waste', why: 'Use the Portuguese term whenever one exists.' },
          { use: 'Pesquisas mostram que...', avoid: 'Foi descoberto que...', why: 'Copies "it was discovered that". Say who found it.' },
          { use: 'A prefeitura recolhe os móveis velhos.', avoid: 'A prefeitura busca os móveis velhos.', why: 'For a collection service, write *recolher*.' },
          { use: 'gratuito', avoid: 'de graça', why: '*De graça* is fine in conversation. Print uses *gratuito*.' },
          { use: 'muitas pessoas', avoid: 'um monte de gente', why: '*Um monte de* is slang in a formal text.' }
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which sentence belongs in a letter to the editor?',
            options: ['Há poucos médicos no posto de saúde à noite.', 'Tem poucos médicos no posto de saúde à noite.', 'Quase não tem médico no posto à noite.'],
            answer: 'Há poucos médicos no posto de saúde à noite.',
            why: 'For "there are", writing uses *há*. The two *tem* versions are normal speech but register slips in a letter.'
          },
          {
            type: 'choice',
            q: 'Which sentence fits a complaint to a gym?',
            options: ['Nós, alunos da manhã, pagamos a mensalidade em dia.', 'A gente, que treina de manhã, paga a mensalidade em dia.'],
            answer: 'Nós, alunos da manhã, pagamos a mensalidade em dia.',
            why: '*A gente* is spoken. A formal complaint uses *nós* with the *-mos* verb form.'
          },
          {
            type: 'choice',
            q: 'Which sentence fits a notícia about a new law?',
            options: ['A lei foi aprovada pela Câmara Municipal em março.', 'A lei foi passada pela Câmara Municipal em março.'],
            answer: 'A lei foi aprovada pela Câmara Municipal em março.',
            why: 'A law is *aprovada*. *Foi passada* is a calque of "was passed".'
          },
          {
            type: 'choice',
            q: 'Which sentence fits a notícia about a recycling campaign?',
            options: ['A campanha recolhe lixo eletrônico até sexta-feira.', 'A campanha recolhe e-waste até sexta-feira.', 'A campanha busca lixo eletrônico até sexta-feira.'],
            answer: 'A campanha recolhe lixo eletrônico até sexta-feira.',
            why: 'Portuguese has its own term, *lixo eletrônico*. For a collection service, *recolher* is the written verb; *buscar* is everyday speech.'
          },
          {
            type: 'choice',
            q: 'Which sentence keeps the register of a complaint to an airline?',
            options: ['Solicito que a companhia devolva o valor da passagem.', 'Quero que vocês devolvam o valor da passagem.'],
            answer: 'Solicito que a companhia devolva o valor da passagem.',
            why: '*Solicito* is firm and formal, and *a companhia* keeps the distance. *Quero* and *vocês* sound like a quarrel at the counter.'
          },
          {
            type: 'choice',
            q: 'Which sentence fits a blog post for a clothing drive?',
            options: ['Você também pode doar roupas para a campanha.', 'A gente também pode doar roupa pra campanha.'],
            answer: 'Você também pode doar roupas para a campanha.',
            why: 'A blog speaks to the reader as *você*. *A gente* and *pra* pull the text toward speech.'
          },
          {
            type: 'choice',
            q: 'Which sentence uses *tem* correctly in formal writing?',
            options: ['A clínica tem dois pediatras.', 'Na clínica tem dois pediatras.'],
            answer: 'A clínica tem dois pediatras.',
            why: 'Here *tem* means possession: the clinic has two pediatricians. *Na clínica tem* means "there are", which takes *há* in writing.'
          }
        ]
      },
      {
        type: 'choice',
        q: 'In which task are *a gente* and *pra* acceptable?',
        options: ['An e-mail to a friend about a trip', 'A blog post for a health clinic', 'A notice for employees'],
        answer: 'An e-mail to a friend about a trip',
        why: 'Of these three, only the personal e-mail is informal. A blog is friendly but written, and a notice is formal.'
      },
      {
        type: 'fix',
        title: 'Find the 5 mistakes in this letter to the editor.',
        text: 'Prezados editores,\nLi a reportagem sobre a nova lei do silêncio e gostaria de comentá-la. Moro no Centro {{tem|há|Elapsed time takes *há* in writing.}} cinco anos, e {{a gente sofre|nós, moradores, sofremos|*A gente* is spoken. Use *nós* with the *-mos* form.}} com o barulho dos bares até as 3h. Fiquei feliz quando {{o lei|a lei|*Lei* is feminine: *a lei*.}} {{foi passada|foi aprovada|A law is *aprovada*. *Passada* copies the English.}}. Agora, é preciso fiscalizar os bares {{pra|para|*Pra* is spoken. Write *para*.}} que as regras sejam cumpridas.\nAtenciosamente,\nUm leitor do Centro'
      },
      {
        type: 'write',
        q: 'Rewrite this voice message as 1 or 2 sentences for a formal e-mail to the maintenance department.',
        text: 'Mensagem de um colega: "Tem duas semanas que o ar-condicionado da sala de reuniões tá quebrado, e ninguém faz nada pra consertar."',
        model: [
          'O ar-condicionado da sala de reuniões está quebrado há duas semanas, e o conserto ainda não foi feito.',
          'Solicito que o setor de manutenção resolva o problema com urgência.'
        ],
        check: [
          '*Há duas semanas*, not *tem duas semanas*.',
          'No *tá* or *pra*: *está*, *para*.',
          'The department in the third person, with *solicito*.',
          '*O problema* is masculine, like other Greek *-ma* words (*o sistema*, *o tema*).',
          'Accents: *há*, *está*, *reuniões*.'
        ]
      },
      { type: 'drills', modes: ['registro'], n: 8 },
      { type: 'formal', n: 2 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  {
    id: 'l04-aberturas',
    n: 4,
    unit: 1,
    title: 'Abrir e fechar o texto',
    en: 'Choose the greeting, first line, closing and signature that fit the reader.',
    minutes: 13,
    steps: [
      {
        type: 'teach',
        title: 'The greeting ladder',
        body: [
          'The greeting and the closing are genre markers. In two lines they show the grader who writes, who reads and how formal the text must be.',
          'Climb the ladder by distance. An office holder is addressed by title, a company gets *Prezados senhores*, a group you belong to gets *Caros*, a colleague gets *Bom dia* and a first name, a friend gets *Oi*.',
          'Blog posts and flyers open with a title. A greeting is optional on a blog (*Olá, pessoal!*) and rare on a flyer.'
        ],
        examples: [
          { pt: 'Prezado Senhor Secretário,', en: 'Most formal: an office holder addressed by title.' },
          { pt: 'Prezados senhores,', en: 'Formal: a company or office when you do not know the reader. The safe default.' },
          { pt: 'Caros vizinhos,', en: 'Semi-formal: a group you belong to, in an invitation.' },
          { pt: 'Bom dia, Fernanda,', en: 'Neutral: a manager or colleague you write to every day.' },
          { pt: 'Oi, Tom!', en: 'Informal: a close friend, in the personal e-mail.' }
        ]
      },
      {
        type: 'pick',
        n: 2,
        from: [
          {
            type: 'choice',
            q: 'Which greeting fits?',
            text: 'E-mail à diretora de uma escola de idiomas, que você não conhece, pedindo informações sobre um curso.',
            options: ['Prezada Senhora Diretora,', 'Querida diretora,', 'Oi, diretora!'],
            answer: 'Prezada Senhora Diretora,',
            why: 'A director you do not know gets *Prezada* and her title. *Querida* is too intimate, and *Oi* is for friends.'
          },
          {
            type: 'choice',
            q: 'Which greeting fits?',
            text: 'Convite da comissão de festas de uma empresa para os funcionários.',
            options: ['Caros colegas,', 'Prezados senhores,', 'Oi, galera!'],
            answer: 'Caros colegas,',
            why: 'An invitation to a group you belong to is warm but written. *Prezados senhores* turns it into an official letter, and *galera* is slang.'
          },
          {
            type: 'choice',
            q: 'Which greeting fits?',
            text: 'E-mail à sua gerente, com quem você fala todos os dias, pedindo um dia de folga.',
            options: ['Bom dia, Fernanda,', 'Prezado Senhor Secretário,', 'Querida Fernanda,'],
            answer: 'Bom dia, Fernanda,',
            why: 'Work e-mail to a manager you see every day is courteous and uses her first name. *Querida* is for friends and family.'
          },
          {
            type: 'choice',
            q: 'What opens this text?',
            text: 'Post no blog de um grupo de corrida, com dicas para quem vai correr a primeira prova de 5 km.',
            options: ['Nenhuma saudação: o título abre o texto.', 'Prezados leitores,', 'Oi, galera!'],
            answer: 'Nenhuma saudação: o título abre o texto.',
            why: 'A blog post opens with a title and speaks to *você*. A letter greeting sounds stiff, and *galera* is slang.'
          },
          {
            type: 'choice',
            q: 'Which greeting fits?',
            text: 'Carta à Secretária Municipal de Saúde pedindo mais médicos no posto do seu bairro.',
            options: ['Prezada Senhora Secretária,', 'Olá, Secretária!', 'Querida Secretária,'],
            answer: 'Prezada Senhora Secretária,',
            why: 'An office holder addressed by title gets *Prezada Senhora* plus the title. *Olá* and *Querida* are for people you know personally.'
          }
        ]
      },
      {
        type: 'teach',
        title: 'First line, closing, sign-off, signature',
        body: [
          'The first line after the greeting says who you are and why you write: *Sou* + role + *e escrevo para* + purpose.',
          'The end has three parts. A closing line that fits the purpose (*Aguardo o seu retorno*, *Contamos com a colaboração de todos*), a sign-off (*Atenciosamente,*) and a signature.',
          'Sign with the role or an invented name, never your real one. Write *Atenciosamente* in full.'
        ],
        table: [
          { use: 'Atenciosamente,', avoid: 'Att.', why: 'Abbreviations look careless on the exam.' },
          { use: 'Prezado editor,', avoid: 'Querido editor,', why: '*Querido* is for people you love.' },
          { use: 'Agradeço a atenção.', avoid: 'Obrigado pelo atenção.', why: '*Atenção* is feminine: *a atenção*, *pela atenção*.' },
          { use: 'Um leitor de Campinas', avoid: '(o seu nome verdadeiro)', why: 'Sign with the role the prompt gives you.' },
          { use: 'Escrevo para informar que...', avoid: 'Mas o serviço continua ruim.', why: 'Say who you are and why you write before the problem.' }
        ]
      },
      {
        type: 'order',
        q: 'Put the frame of this complaint in order.',
        items: [
          'Assunto: cobrança após o cancelamento da assinatura',
          'Prezados senhores,',
          'Cancelei a minha assinatura da plataforma CineCasa em agosto e escrevo para contestar uma cobrança feita em setembro.',
          'Solicito o estorno do valor em até cinco dias úteis.',
          'Atenciosamente,',
          'Titular da conta nº 88.410'
        ],
        why: 'Assunto, greeting, who you are and why, the demand with a deadline, the sign-off, then a signature that identifies the account.'
      },
      {
        type: 'pick',
        n: 2,
        from: [
          {
            type: 'choice',
            q: 'Which closing line fits a letter to the editor?',
            options: ['Espero que o jornal continue a acompanhar esse tema.', 'Aguardo o estorno em até cinco dias úteis.', 'Beijos e até a próxima!'],
            answer: 'Espero que o jornal continue a acompanhar esse tema.',
            why: 'A letter to the editor closes by speaking of the paper or the debate. A deadline belongs to a complaint, and *Beijos* to friends.'
          },
          {
            type: 'choice',
            q: 'Which sign-off fits an e-mail to a friend?',
            options: ['Um abraço,', 'Atenciosamente,', 'Cordialmente,'],
            answer: 'Um abraço,',
            why: 'A friend gets *Um abraço* or *Beijos*. The other two are office closings and sound cold to a friend.'
          },
          {
            type: 'choice',
            q: 'How do you sign a complaint to a store?',
            options: ['Cliente do pedido nº 45872', 'Seu amigo, Rafa', 'Beijos, Rafa'],
            answer: 'Cliente do pedido nº 45872',
            why: 'A complaint is signed with a line that identifies the order or contract. The other two are informal closings for friends.'
          },
          {
            type: 'choice',
            q: 'Which closing line fits a notice to employees?',
            options: ['Contamos com a colaboração de todos.', 'Aguardo o seu retorno.', 'Conte nos comentários!'],
            answer: 'Contamos com a colaboração de todos.',
            why: 'A notice speaks for the institution in the plural and addresses the whole group. *Aguardo o seu retorno* is one person to one reader, and the last one ends a blog post.'
          },
          {
            type: 'choice',
            q: 'Which sign-off fits a request to the HR department?',
            options: ['Atenciosamente,', 'Beijos,', 'Att.'],
            answer: 'Atenciosamente,',
            why: 'A formal work e-mail closes with *Atenciosamente* written in full. *Beijos* is for friends, and *Att.* looks careless on the exam.'
          }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 5 mistakes in this request.',
        text: 'Prezada Senhora Secretária,\nSou professor de violão {{tem|há|Elapsed time takes *há*: *há dez anos*.}} dez anos e escrevo para solicitar o uso do Teatro Municipal para um recital gratuito dos meus alunos, no dia 14 de novembro. O recital {{tambem|também|Words of two or more syllables stressed on the last one and ending in *-em* take an accent.}} seria uma oportunidade para as famílias {{conhecer|conhecerem|The infinitive has its own subject (*as famílias*), so it takes the personal ending.}} o teatro. Agradeço {{o atenção|a atenção|*Atenção* ends in *-ção*, so it is feminine.}} e fico à disposição para mais informações.\n{{Att.|Atenciosamente,|Write the sign-off in full on the exam.}}\nProfessor da Escola de Música Sol Maior'
      },
      {
        type: 'write',
        q: 'Write the greeting, the first sentence and the closing block (closing line, sign-off, signature).',
        text: 'Você é analista de compras na empresa Alfa Têxtil e precisa pedir ao setor de Recursos Humanos que as suas férias passem de janeiro para março.',
        model: [
          'Prezada equipe de Recursos Humanos,',
          'Trabalho no setor de Compras há dois anos e escrevo para solicitar a troca das minhas férias de janeiro para março.',
          'Fico à disposição para qualquer esclarecimento.',
          'Atenciosamente,',
          'Rafael Souza',
          'Analista de Compras'
        ],
        check: [
          'A formal greeting to the department.',
          'Role and purpose in the first sentence, with *há* for time.',
          'A closing line, then *Atenciosamente* in full.',
          'An invented name or your role, never your real name.',
          '*As férias* is feminine plural: *minhas férias*.'
        ]
      },
      { type: 'drills', modes: ['abertura'], n: 8 },
      { type: 'drills', modes: ['genero'], n: 3 },
      {
        type: 'prompt',
        id: 'u-plano-celular',
        note: 'Your first full complaint on the path. Build the frame before the body: Assunto, Prezados senhores, who you are and why, a demand with a deadline, Atenciosamente and a signature that identifies the account.'
      }
    ]
  },

  // ---------------------------------------------------------------- Unit 2
  {
    id: 'l05-selecionar',
    n: 5,
    unit: 2,
    title: 'Escolher as informações certas',
    en: 'Pick the three or four facts from the source that serve your purpose, and leave the rest.',
    minutes: 12,
    steps: [
      {
        type: 'teach',
        title: 'The source is part of the job',
        body: [
          'The grid checks whether you used the information in the source. A text built only on your own ideas is capped low, however good the Portuguese.',
          'Use three or four facts, and only the ones that serve the purpose. A fact can be true and interesting and still not belong. Ask of each one: which checkbox in the prompt does this serve?',
          'Numbers, names, dates, reasons and tips usually matter. Background, such as when a building opened or how old a company is, usually does not.'
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which fact does your e-mail need most?',
            text: 'Fonte: A Secretaria de Esportes de Porto Novo abriu 300 vagas em aulas gratuitas de hidroginástica para pessoas com mais de 60 anos. As aulas acontecem às terças e quintas, das 8h às 9h, na piscina aquecida do Ginásio Municipal. Para se inscrever, é preciso levar um documento com foto e um atestado médico. Segundo a professora Clara Reis, a atividade fortalece os músculos sem forçar as articulações. O ginásio foi inaugurado em 1987 e passou por uma reforma no ano passado.\nTarefa: e-mail para o seu pai, de 67 anos, convencendo-o a se inscrever.',
            options: ['The classes are free, twice a week, in a heated pool', 'The gym opened in 1987', 'The gym was renovated last year'],
            answer: 'The classes are free, twice a week, in a heated pool',
            why: 'Your father needs to know what he gets and when. The history of the building serves no part of the purpose.'
          },
          {
            type: 'choice',
            q: 'Which fact can you leave out?',
            text: 'Fonte: A Secretaria de Esportes de Porto Novo abriu 300 vagas em aulas gratuitas de hidroginástica para pessoas com mais de 60 anos. As aulas acontecem às terças e quintas, das 8h às 9h, na piscina aquecida do Ginásio Municipal. Para se inscrever, é preciso levar um documento com foto e um atestado médico. Segundo a professora Clara Reis, a atividade fortalece os músculos sem forçar as articulações. O ginásio foi inaugurado em 1987 e passou por uma reforma no ano passado.\nTarefa: e-mail para o seu pai, de 67 anos, convencendo-o a se inscrever.',
            options: ['The gym opened in 1987', 'He needs an ID with a photo and a medical certificate', 'Classes are on Tuesdays and Thursdays at 8h'],
            answer: 'The gym opened in 1987',
            why: 'The documents and the schedule tell him how to sign up and when to go. The opening date is background.'
          },
          {
            type: 'choice',
            q: 'Which fact gives your father a reason to go?',
            text: 'Fonte: A Secretaria de Esportes de Porto Novo abriu 300 vagas em aulas gratuitas de hidroginástica para pessoas com mais de 60 anos. As aulas acontecem às terças e quintas, das 8h às 9h, na piscina aquecida do Ginásio Municipal. Para se inscrever, é preciso levar um documento com foto e um atestado médico. Segundo a professora Clara Reis, a atividade fortalece os músculos sem forçar as articulações. O ginásio foi inaugurado em 1987 e passou por uma reforma no ano passado.\nTarefa: e-mail para o seu pai, de 67 anos, convencendo-o a se inscrever.',
            options: ['It strengthens the muscles without straining the joints', 'The city opened 300 places', 'The classes are at the Ginásio Municipal'],
            answer: 'It strengthens the muscles without straining the joints',
            why: 'Your purpose is to convince him, so the teacher\'s reason counts most. The number of places adds urgency but does not say why the activity is good for him.'
          },
          {
            type: 'choice',
            q: 'Which fact is essential for the cyclists?',
            text: 'Fonte: A partir de 1º de março, a companhia de trens urbanos de Serratinga vai permitir bicicletas em todos os vagões aos sábados e domingos. Nos dias úteis, as bicicletas continuam permitidas somente depois das 20h. Cada vagão aceita no máximo quatro bicicletas. A companhia comprou 40 trens novos em 2019. Segundo o gerente de operações, a medida atende a um pedido antigo dos ciclistas.\nTarefa: post no blog do grupo de ciclismo Pedal Livre, informando os membros sobre a mudança.',
            options: ['Bikes are allowed in every car on weekends from March 1', 'The company bought 40 trains in 2019', 'The operations manager commented on the change'],
            answer: 'Bikes are allowed in every car on weekends from March 1',
            why: 'The post informs cyclists about the change, so the new rule and its date come first. The trains bought in 2019 are background.'
          },
          {
            type: 'choice',
            q: 'Which fact does your aunt need?',
            text: 'Fonte: A fabricante de fogões Chama Azul convocou os donos do modelo Gourmet 4 para trocar gratuitamente a mangueira de gás, que pode apresentar vazamento. Foram vendidas 12 mil unidades entre 2024 e 2025. O agendamento é feito pelo site ou por um telefone gratuito da empresa. A troca leva cerca de 30 minutos e é feita na casa do cliente. A marca completou 50 anos em 2025.\nTarefa: e-mail para a sua tia, que tem esse fogão, explicando o que ela precisa fazer.',
            options: ['How to book the free replacement', 'How many stoves were sold', 'How long the brand has existed'],
            answer: 'How to book the free replacement',
            why: 'The purpose is to tell her what to do. Sales figures and the brand\'s age do not help her act.'
          },
          {
            type: 'choice',
            q: 'Which fact is irrelevant for her?',
            text: 'Fonte: A fabricante de fogões Chama Azul convocou os donos do modelo Gourmet 4 para trocar gratuitamente a mangueira de gás, que pode apresentar vazamento. Foram vendidas 12 mil unidades entre 2024 e 2025. O agendamento é feito pelo site ou por um telefone gratuito da empresa. A troca leva cerca de 30 minutos e é feita na casa do cliente. A marca completou 50 anos em 2025.\nTarefa: e-mail para a sua tia, que tem esse fogão, explicando o que ela precisa fazer.',
            options: ['The brand turned 50 in 2025', 'The hose may leak gas', 'A technician does the job at her home'],
            answer: 'The brand turned 50 in 2025',
            why: 'The leak is the reason to act, and the home visit tells her what to expect. The anniversary is background.'
          }
        ]
      },
      {
        type: 'choice',
        q: 'How many facts from the source should a text use?',
        options: ['Three or four, reworded', 'One, the most important', 'All of them, in the same order'],
        answer: 'Three or four, reworded',
        why: 'One fact looks like you ignored the source. All of them in order turns your text into a copy of it. Three or four that serve the purpose, in your words.'
      },
      {
        type: 'teach',
        title: 'Copying costs points too',
        body: [
          'Copying whole sentences is penalized. Graders compare your text with the source, and copied stretches show nothing about your Portuguese.',
          'Keep the facts and the numbers. Change the sentence around them: another subject, another verb, another order. Lesson 6 practices this.'
        ],
        examples: [
          { pt: 'Fonte: As aulas acontecem às terças e quintas, das 8h às 9h.', en: 'The source sentence.' },
          { pt: 'Você: Você pode fazer aula às terças e quintas, logo cedo, das 8h às 9h.', en: 'Same facts, a new sentence that speaks to the reader.' }
        ]
      },
      {
        type: 'choice',
        q: 'A candidate writes a strong complaint using only his own experience and no fact from the source. What happens?',
        options: ['His score is capped, even with good Portuguese', 'Nothing, since graders only check grammar', 'He gets extra points for originality'],
        answer: 'His score is capped, even with good Portuguese',
        why: 'Using the source is part of the task. Ignoring it means the task was not done, whatever the quality of the language.'
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this e-mail to Dad.',
        text: 'Oi, pai!\nTudo bem? Descobri que a prefeitura está oferecendo aulas gratuitas de hidroginástica para quem tem mais de 60 anos. Sei que você está {{preocupado sobre|preocupado com|*Preocupado* takes *com*, not *sobre*.}} o joelho, mas uma professora explicou que a atividade fortalece {{os musculos|os músculos|Every word stressed on the third-to-last syllable takes an accent.}} sem forçar as articulações. {{O inscrição|A inscrição|Nouns in *-ção* are feminine.}} é simples: basta levar um documento com foto e um atestado médico. Que tal chamar o tio Beto para vocês dois {{começar|começarem|The infinitive has its own subject (*vocês dois*), so it takes the personal ending.}} juntos?\nUm beijo,\nLu'
      },
      {
        type: 'write',
        q: 'Write 2 sentences for the Pedal Livre blog with the facts the cyclists need. Leave the rest out.',
        text: 'Fonte: A partir de 1º de março, a companhia de trens urbanos de Serratinga vai permitir bicicletas em todos os vagões aos sábados e domingos. Nos dias úteis, as bicicletas continuam permitidas somente depois das 20h. Cada vagão aceita no máximo quatro bicicletas. A companhia comprou 40 trens novos em 2019. Segundo o gerente de operações, a medida atende a um pedido antigo dos ciclistas.',
        model: [
          'A partir de 1º de março, quem pedala vai poder levar a bicicleta em qualquer vagão do trem aos sábados e domingos.',
          'Nos dias úteis, nada muda: as bicicletas só entram depois das 20h, e cada vagão aceita no máximo quatro.'
        ],
        check: [
          'The new weekend rule and its start date.',
          'The weekday rule and the limit of four bikes per car.',
          'Nothing about the 40 trains from 2019.',
          'Your own sentences, not the source\'s.',
          'Agreement: *a bicicleta*, *as bicicletas*, *o vagão*.'
        ]
      },
      { type: 'drills', modes: ['regencia'], tags: ['verbo', 'adjetivo'], n: 5 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  {
    id: 'l06-reescrever',
    n: 6,
    unit: 2,
    title: 'Dizer com outras palavras',
    en: 'Reword facts from the source in your own sentences, without ever mentioning the source.',
    minutes: 13,
    steps: [
      {
        type: 'teach',
        title: 'Keep the fact, change the sentence',
        body: [
          'Rewording shows the grader your Portuguese. Keep the fact and change the sentence: a new subject, a new verb, a different order, or a noun where the source had a verb (*aumentou* becomes *houve um aumento*).',
          'Turn quotes into reported facts in written register. The speaker says *a gente* and *pra*; you write *especialistas explicam que...*',
          'Numbers, names and dates can stay as they are. Build your own sentence around them.'
        ],
        examples: [
          { pt: 'Fonte: "O número de ciclistas dobrou em dois anos." Você: Em dois anos, a cidade passou a ter o dobro de ciclistas.', en: 'Same fact, new structure.' },
          { pt: 'Fonte: "A gente joga fora muita comida por falta de planejamento", diz a nutricionista. Você: Especialistas explicam que muitas famílias desperdiçam comida por falta de planejamento.', en: 'A quote becomes a reported fact, in written register.' },
          { pt: 'Fonte: "As inscrições vão até sexta." Você: Quem quiser participar tem até sexta-feira para se inscrever.', en: 'A new subject and a new verb.' }
        ]
      },
      {
        type: 'teach',
        title: 'Never mention the exam material',
        body: [
          'The reader of your text never saw the video, the audio or the reading. *Segundo o texto*, *o vídeo mostra* and *no áudio* break the role at once.',
          'State the fact, or credit *uma reportagem recente*, *uma pesquisa* or *especialistas*.',
          'One exception: a carta do leitor answers a report the paper published, so it may name that report by title (*Li a reportagem "..."*).'
        ],
        table: [
          { use: 'Uma reportagem recente mostrou que...', avoid: 'O texto diz que...', why: 'Your reader never saw the exam text.' },
          { use: 'Especialistas recomendam...', avoid: 'No vídeo, o médico fala que...', why: 'Credit the expertise, not the recording. *Fala que* is also spoken.' },
          { use: 'A feira acontece aos domingos.', avoid: 'Segundo o áudio, a feira acontece aos domingos.', why: 'A plain fact needs no credit at all.' }
        ]
      },
      {
        type: 'pick',
        n: 2,
        from: [
          {
            type: 'choice',
            q: 'Which is the best paraphrase?',
            text: 'Fonte: "As vendas de bicicletas elétricas cresceram 40% no último ano", afirmou o presidente da associação de lojistas.',
            options: [
              'Os lojistas venderam 40% mais bicicletas elétricas no último ano do que no ano anterior.',
              'As vendas de bicicletas elétricas cresceram 40% no último ano, afirmou o presidente.',
              'Segundo o texto, as vendas de bicicletas elétricas cresceram 40%.'
            ],
            answer: 'Os lojistas venderam 40% mais bicicletas elétricas no último ano do que no ano anterior.',
            why: 'Same fact with a new subject and verb. The second copies the source, and the third mentions a text your reader never saw.'
          },
          {
            type: 'choice',
            q: 'Which is the best paraphrase?',
            text: 'Fonte: "O consumo excessivo de sal está associado ao aumento da pressão arterial."',
            options: [
              'Quem consome muito sal corre mais risco de ter pressão alta.',
              'O consumo excessivo de sal está associado ao aumento da pressão.',
              'O áudio explica que o consumo excessivo de sal aumenta a pressão.'
            ],
            answer: 'Quem consome muito sal corre mais risco de ter pressão alta.',
            why: 'It keeps the meaning in a new structure. The second is a copy, and the third mentions the audio.'
          },
          {
            type: 'choice',
            q: 'Which is the best paraphrase for a blog post?',
            text: 'Nutricionista: "O ideal é fazer a lista de compras em casa, olhando a geladeira, pra não comprar coisa repetida."',
            options: [
              'Especialistas recomendam montar a lista de compras em casa, depois de conferir a geladeira, para evitar compras repetidas.',
              'No vídeo, a nutricionista fala pra fazer a lista em casa.',
              'O ideal é fazer a lista de compras em casa, olhando a geladeira, para não comprar coisa repetida.'
            ],
            answer: 'Especialistas recomendam montar a lista de compras em casa, depois de conferir a geladeira, para evitar compras repetidas.',
            why: 'The quote becomes a reported tip in written register. The second mentions the video and keeps *pra*, and the third is a copy.'
          },
          {
            type: 'choice',
            q: 'Which is the best paraphrase for a student newsletter?',
            text: 'Fonte: "A biblioteca funcionará em horário estendido, das 8h às 22h, durante o período de provas."',
            options: [
              'Durante a época de provas, a biblioteca vai abrir das 8h às 22h.',
              'Segundo o texto, a biblioteca funcionará em horário estendido.',
              'A biblioteca funcionará em horário estendido durante o período de provas.'
            ],
            answer: 'Durante a época de provas, a biblioteca vai abrir das 8h às 22h.',
            why: 'New order and new verb, with the hours kept. The second mentions the text, and the third copies it and drops the hours.'
          },
          {
            type: 'choice',
            q: 'Which is the best paraphrase for a travel blog?',
            text: 'Guia turístico: "Tem que chegar cedo, porque depois das dez a fila pro bondinho fica enorme."',
            options: [
              'Quem quer evitar filas longas no bondinho deve chegar antes das 10h.',
              'No áudio, o guia diz que tem que chegar cedo.',
              'Tem que chegar cedo, porque depois das dez a fila fica enorme.'
            ],
            answer: 'Quem quer evitar filas longas no bondinho deve chegar antes das 10h.',
            why: 'The tip becomes a written sentence with the time kept. The second mentions the audio, and the third copies the guide\'s speech.'
          }
        ]
      },
      {
        type: 'choice',
        q: 'Your blog post is built on a TV report about electric bikes. Which opening works?',
        options: [
          'Você sabia que as vendas de bicicletas elétricas cresceram 40% no último ano?',
          'Eu vi um vídeo que fala das bicicletas elétricas.',
          'Segundo o vídeo, as bicicletas elétricas estão na moda.'
        ],
        answer: 'Você sabia que as vendas de bicicletas elétricas cresceram 40% no último ano?',
        why: 'It states the fact and speaks to the reader. The other two send the reader to a video they never saw.'
      },
      {
        type: 'choice',
        q: 'In which genre may you name the report you are answering?',
        options: ['Carta do leitor: *Li a reportagem "..."*', 'Blog post: *Segundo o texto...*', 'Aviso: *O vídeo mostra que...*'],
        answer: 'Carta do leitor: *Li a reportagem "..."*',
        why: 'The editors published the report, so naming it is part of the genre. Elsewhere, state the fact or credit *uma reportagem recente* or *especialistas*.'
      },
      {
        type: 'write',
        q: 'Write 1 or 2 sentences for an e-mail to your brother that use this fact in your own words.',
        text: 'Fonte: "Segundo o Instituto Vida Ativa, adultos que caminham 30 minutos por dia, cinco vezes por semana, reduzem em até 30% o risco de doenças do coração."\nLeitor: o seu irmão, que passa o dia sentado no escritório.',
        model: [
          'Li que quem caminha meia hora por dia, cinco vezes por semana, tem até 30% menos risco de ter problemas no coração.',
          'Que tal começar a caminhar depois do trabalho?'
        ],
        check: [
          'The fact is accurate: half an hour, five times a week, up to 30% less risk.',
          'A new structure, not the source\'s sentence.',
          'No *segundo o texto*. *Li que* or a plain statement works in a personal e-mail.',
          'A friendly tone that fits a brother.',
          'Accents: *coração*, *até*, *escritório*.'
        ]
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this blog post.',
        text: 'Conta de luz mais leve\n{{Segundo o vídeo,|Especialistas explicam que|Your reader never saw the video. State the fact or credit *especialistas*.}} o chuveiro elétrico está entre os aparelhos que mais gastam energia em casa. Por isso, tome banhos curtos. {{Tem|Há|For "there is / there are", written Portuguese uses *há*.}} também cuidados simples com a geladeira: não guarde comida quente e não deixe a porta aberta. Para {{as crianças aprender|as crianças aprenderem|The infinitive has its own subject, so it takes the personal ending.}}, cole um lembrete perto do interruptor. {{O redução|A redução|Nouns in *-ção* are feminine.}} na conta aparece já no primeiro mês!'
      },
      { type: 'drills', modes: ['acento'], n: 6 },
      { type: 'drills', modes: ['genero'], n: 3 }
    ]
  },

  {
    id: 'l07-video-audio',
    n: 7,
    unit: 2,
    title: 'Notas de vídeo e áudio',
    en: 'Take notes during the two playings that give you every fact you need to write.',
    minutes: 13,
    steps: [
      {
        type: 'teach',
        title: 'Two playings, two jobs',
        body: [
          'Before it plays, write your role, reader, genre and purpose at the top of your notes. The purpose tells you what to listen for.',
          'First playing: names, numbers, dates and the 3 or 4 main points, one line each. Second playing: fill the gaps you marked with *?* and check every number.',
          'You are not transcribing. Keywords, arrows and initials only. A full sentence costs you the next point.'
        ]
      },
      {
        type: 'teach',
        title: 'What to capture, and how',
        body: [
          'Capture four things: numbers (times, prices, quantities), names and roles (*engenheira*, *nutricionista*), reasons, and tips. Tips often become your suggestions.',
          'Mark who says what with an initial: N for the narrator, E for an expert. In your text, write *especialistas recomendam*, never *no áudio*.'
        ],
        examples: [
          { pt: '→', en: 'causes, leads to: *cansaço → acidente*' },
          { pt: '+ / −', en: 'more / less: *+ caro*, *− fila*' },
          { pt: 'p/ · c/ · q · pq', en: '*para, com, que, porque*' },
          { pt: 'h · min · sem. · qua', en: '*horas, minutos, semana, quarta-feira*' },
          { pt: '?', en: 'missed it; fill it on the second playing' }
        ]
      },
      {
        type: 'pick',
        n: 3,
        from: [
          {
            type: 'choice',
            q: 'Which note is worth writing during the first playing?',
            text: 'Apresentador: Com o feriado prolongado, muita gente vai pegar a estrada. Conversamos com Ana Ribeiro, engenheira de trânsito. Ana, qual é o primeiro cuidado?\nAna: Revisar o carro uma semana antes, não na véspera. Pneu, freio, óleo e água. Se aparecer um problema, dá tempo de consertar.\nApresentador: E a hora de sair?\nAna: Evite a quarta-feira entre 16h e 20h, que é quando o trânsito fica pior. Quem pode sair na quinta bem cedo pega a estrada mais vazia.\nApresentador: E durante a viagem?\nAna: Pare a cada duas horas, nem que seja por quinze minutos. O cansaço causa muitos acidentes, porque o motorista não percebe que tá com sono.',
            options: ['revisar carro 1 sem. antes: pneu, freio, óleo, água', 'Revisar o carro uma semana antes, não na véspera. Pneu, freio, óleo e água.', 'apresentador pergunta a hora de sair'],
            answer: 'revisar carro 1 sem. antes: pneu, freio, óleo, água',
            why: 'Keywords and the number, fast. The full sentence is transcribing and makes you miss the next point, and the host\'s question carries no information.'
          },
          {
            type: 'choice',
            q: 'Which set of notes captures the tips?',
            text: 'Apresentador: Com o feriado prolongado, muita gente vai pegar a estrada. Conversamos com Ana Ribeiro, engenheira de trânsito. Ana, qual é o primeiro cuidado?\nAna: Revisar o carro uma semana antes, não na véspera. Pneu, freio, óleo e água. Se aparecer um problema, dá tempo de consertar.\nApresentador: E a hora de sair?\nAna: Evite a quarta-feira entre 16h e 20h, que é quando o trânsito fica pior. Quem pode sair na quinta bem cedo pega a estrada mais vazia.\nApresentador: E durante a viagem?\nAna: Pare a cada duas horas, nem que seja por quinze minutos. O cansaço causa muitos acidentes, porque o motorista não percebe que tá com sono.',
            options: ['1. revisão 1 sem. antes 2. não sair qua 16-20h 3. parar 2/2 h, mín. 15 min', '1. revisão do carro 2. feriado 3. cansaço', '1. Ana Ribeiro 2. engenheira 3. estrada'],
            answer: '1. revisão 1 sem. antes 2. não sair qua 16-20h 3. parar 2/2 h, mín. 15 min',
            why: 'Each tip keeps its number. The second set lost every number, and the third has names but no content.'
          },
          {
            type: 'choice',
            q: 'How would you note why she says to stop every two hours?',
            text: 'Apresentador: Com o feriado prolongado, muita gente vai pegar a estrada. Conversamos com Ana Ribeiro, engenheira de trânsito. Ana, qual é o primeiro cuidado?\nAna: Revisar o carro uma semana antes, não na véspera. Pneu, freio, óleo e água. Se aparecer um problema, dá tempo de consertar.\nApresentador: E a hora de sair?\nAna: Evite a quarta-feira entre 16h e 20h, que é quando o trânsito fica pior. Quem pode sair na quinta bem cedo pega a estrada mais vazia.\nApresentador: E durante a viagem?\nAna: Pare a cada duas horas, nem que seja por quinze minutos. O cansaço causa muitos acidentes, porque o motorista não percebe que tá com sono.',
            options: ['cansaço → acidente (motorista não percebe sono)', 'parar 2/2 h', 'descansar é bom'],
            answer: 'cansaço → acidente (motorista não percebe sono)',
            why: 'The arrow keeps the cause, and reasons make your text convincing. The second note has the tip without the reason, and the third is too vague to use.'
          },
          {
            type: 'choice',
            q: 'Ana says *o motorista não percebe que tá com sono*. Which sentence fits your formal text?',
            text: 'Ana: Pare a cada duas horas, nem que seja por quinze minutos. O cansaço causa muitos acidentes, porque o motorista não percebe que tá com sono.',
            options: ['Muitos motoristas não percebem que estão com sono.', 'O motorista não percebe que tá com sono.', 'No áudio, a engenheira fala que o motorista tá com sono.'],
            answer: 'Muitos motoristas não percebem que estão com sono.',
            why: '*Tá* becomes *estão*, and the sentence is yours. The second copies her speech, and the third mentions the audio.'
          },
          {
            type: 'choice',
            q: 'Ana Ribeiro is a traffic engineer. How do you credit her advice?',
            text: 'Apresentador: Conversamos com Ana Ribeiro, engenheira de trânsito.',
            options: ['Especialistas em trânsito recomendam...', 'Ana Ribeiro disse no áudio que...', 'O áudio recomenda...'],
            answer: 'Especialistas em trânsito recomendam...',
            why: 'Knowing she is an expert lets you write *especialistas*. Your reader never heard the audio, so neither the recording nor the interview belongs in the text.'
          }
        ]
      },
      {
        type: 'order',
        q: 'Put the note-taking steps in order.',
        items: [
          'Ler o enunciado e anotar papel, leitor, gênero e propósito',
          'Primeira vez: nomes, números e 3 ou 4 ideias principais',
          'Entre as duas vezes: marcar as lacunas com ?',
          'Segunda vez: completar as lacunas e conferir os números',
          'Numerar as notas na ordem do seu texto',
          'Escrever frases próprias, sem citar o vídeo'
        ],
        why: 'The prompt tells you what to listen for, the first playing catches the facts, the second fills the gaps, and the plan comes before the writing.'
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this notice built from the notes.',
        text: 'Prezados colaboradores,\nCom o feriado prolongado, muitos de vocês vão pegar a estrada. {{No áudio, uma engenheira disse que|Especialistas em trânsito recomendam que|Your reader never heard the audio. Credit *especialistas*.}} o carro seja revisado uma semana antes da viagem. Evitem sair na quarta-feira entre 16h e 20h, quando o trânsito {{e|é|*É* (is) takes an accent. *E* means "and".}} mais intenso. Nas {{viagens longos|viagens longas|*Viagem* ends in *-gem*, so it is feminine, and the adjective agrees.}}, solicitamos que os motoristas {{parar|parem|*Solicitamos que* takes the present subjunctive.}} a cada duas horas.\nBoa viagem a todos!\nDepartamento de Recursos Humanos'
      },
      {
        type: 'write',
        q: 'Turn these notes into 2 sentences for a health clinic\'s blog. Do not mention the audio.',
        text: 'Notas: E (nutricionista): café da manhã c/ proteína → sem fome até almoço | suco industr. = muito açúcar | fruta inteira > suco',
        model: [
          'Especialistas explicam que um café da manhã com proteína ajuda você a ficar sem fome até a hora do almoço.',
          'Além disso, prefira a fruta inteira ao suco industrializado, que costuma ter muito açúcar.'
        ],
        check: [
          'The expert becomes *especialistas*, with no mention of the audio.',
          'Every arrow and symbol became a full sentence with a connector.',
          'The tip speaks to *você* in the imperative (*prefira*).',
          '*Preferir* X *a* Y, not *preferir* X *do que* Y.',
          'Accents: *café*, *proteína*, *açúcar*.'
        ]
      },
      { type: 'drills', modes: ['conjugacao'], tags: ['infinitivo pessoal', 'subjuntivo', 'imperativo'], n: 5 },
      { type: 'drills', modes: ['genero'], n: 3 },
      {
        type: 'prompt',
        id: 'o-catadores',
        note: 'Tarefa 1 in full. Read the prompt first, then read the transcript at speaking pace as if the video were playing, taking notes with this lesson\'s method. Cover it and write the carta do leitor from your notes, with 3 or 4 facts in your own words.'
      }
    ]
  }
);
