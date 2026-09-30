window.CB = window.CB || {};
CB.formal = CB.formal || [];
CB.formal.push(

  { id: 'fm-001',
    context: 'E-mail de reclamação à operadora de internet',
    informal: 'Faz dez dias que a internet tá caindo toda noite, e ninguém faz nada.',
    formal: 'Há dez dias a internet cai todas as noites, e nenhuma providência foi tomada.',
    changes: [
      { from: 'Faz dez dias que', to: 'Há dez dias', why: '*Faz ... que* is correct, but formal writing prefers *há* for elapsed time.' },
      { from: 'tá caindo toda noite', to: 'cai todas as noites', why: '*Tá* is spoken; the simple present *cai* states a repeated fact more formally.' },
      { from: 'ninguém faz nada', to: 'nenhuma providência foi tomada', why: 'A complaint states that no action was taken, without the vague *ninguém*.' }
    ] },

  { id: 'fm-002',
    context: 'Pedido à Secretaria Municipal de Saúde',
    informal: 'A gente tá precisando de um pediatra no posto, porque tem só um médico pra atender a vila inteira.',
    formal: 'Precisamos de um pediatra no posto, porque há apenas um médico para atender a vila inteira.',
    changes: [
      { from: 'A gente tá precisando', to: 'Precisamos', why: '*A gente* becomes the *nós* verb, in the simple present.' },
      { from: 'tem só um', to: 'há apenas um', why: 'For there is, write *há*; *apenas* is more formal than *só*.' },
      { from: 'pra atender', to: 'para atender', why: 'Write *para* in full.' }
    ] },

  { id: 'fm-003',
    context: 'Carta do leitor ao jornal sobre a lei do silêncio',
    informal: 'O lei do silêncio foi passado em março, mas nos fins de semana o barulho continua que nem antes.',
    formal: 'A lei do silêncio foi aprovada em março, mas nos fins de semana o barulho continua como antes.',
    changes: [
      { from: 'O lei', to: 'A lei', why: '*Lei* is feminine.' },
      { from: 'foi passado', to: 'foi aprovada', why: 'A law is *aprovada*; *passada* copies English passed. It agrees with *a lei*.' },
      { from: 'que nem antes', to: 'como antes', why: '*Que nem* is spoken; write *como*.' }
    ] },

  { id: 'fm-004',
    context: 'Aviso da administração aos moradores de um prédio',
    informal: 'Pessoal, a água vai tá cortada na quinta-feira, das 8h às 17h, então enche uns baldes antes, tá?',
    formal: 'Senhores moradores, a água estará cortada na quinta-feira, das 8h às 17h. Por isso, solicitamos que encham alguns baldes antes.',
    changes: [
      { from: 'Pessoal', to: 'Senhores moradores', why: 'A notice addresses the group formally.' },
      { from: 'vai tá cortada', to: 'estará cortada', why: '*Tá* is spoken; the synthetic future *estará* suits a formal notice.' },
      { from: 'enche', to: 'solicitamos que encham', why: 'A notice speaks for the institution (*solicitamos*) and addresses everyone in the plural.' },
      { from: 'uns baldes antes, tá?', to: 'alguns baldes antes', why: 'Cut the tag *tá?*; *alguns* is more formal than *uns*.' }
    ] },

  { id: 'fm-005',
    context: 'E-mail ao RH sobre uma vaga interna',
    informal: 'Queria aplicar pra vaga de coordenador que o pessoal do RH divulgou ontem.',
    formal: 'Gostaria de me candidatar à vaga de coordenador que o setor de RH divulgou ontem.',
    changes: [
      { from: 'Queria', to: 'Gostaria de', why: 'A polite formal request uses the conditional.' },
      { from: 'aplicar pra', to: 'me candidatar à', alt: ['candidatar-me à'], why: '*Aplicar para* copies English apply for. You *candidatar-se a* a job, and *a* + *a vaga* gives *à*.' },
      { from: 'o pessoal do RH', to: 'o setor de RH', why: '*O pessoal* is spoken; name the department.' }
    ] },

  { id: 'fm-006',
    context: 'Reclamação à companhia aérea sobre bagagem extraviada',
    informal: 'Cheguei em Recife no sábado e até agora não peguei a minha mala. Ninguém me dá uma resposta.',
    formal: 'Cheguei a Recife no sábado e até agora não recebi a minha mala. Não obtive nenhuma resposta.',
    changes: [
      { from: 'Cheguei em', to: 'Cheguei a', why: 'In formal writing you *chegar a* a place.' },
      { from: 'peguei', to: 'recebi', why: 'You *receber* your luggage; *pegar* is spoken here.' },
      { from: 'Ninguém me dá uma resposta', to: 'Não obtive nenhuma resposta', why: 'State what you did not get; *obter uma resposta* is the formal verb.' }
    ] },

  { id: 'fm-007',
    context: 'Notícia no site da prefeitura sobre uma feira de orgânicos',
    informal: 'Tem uma feira de orgânicos nova no Mercado Central, e o pessoal tá achando os preços super baixos.',
    formal: 'Há uma feira de orgânicos nova no Mercado Central, e os consumidores consideram os preços muito baixos.',
    changes: [
      { from: 'Tem uma', to: 'Há uma', why: 'For there is, formal writing uses *há*.' },
      { from: 'o pessoal tá achando', to: 'os consumidores consideram', why: 'Name the group instead of *o pessoal*; the simple present replaces *tá* + gerund.' },
      { from: 'super baixos', to: 'muito baixos', why: '*Super* is spoken; write *muito*.' }
    ] },

  { id: 'fm-008',
    context: 'E-mail a uma escola de idiomas pedindo reembolso',
    informal: 'Me devolve o dinheiro da matrícula, porque o curso foi cancelado e ninguém me avisou.',
    formal: 'Solicito a devolução do valor da matrícula, porque o curso foi cancelado e não fui avisado.',
    changes: [
      { from: 'Me devolve', to: 'Solicito a devolução', why: 'Do not open with *me* or give an order; request with *solicito*.' },
      { from: 'o dinheiro', to: 'do valor', why: 'A formal request speaks of *o valor*, not *o dinheiro*.' },
      { from: 'ninguém me avisou', to: 'não fui avisado', why: 'The passive states the fact without the vague *ninguém*.' }
    ] },

  { id: 'fm-009',
    context: 'Artigo de opinião para a revista do sindicato',
    informal: 'Tipo, a gente trabalha dez horas por dia e ganha que nem estagiário, né?',
    formal: 'Trabalhamos dez horas por dia e ganhamos o mesmo que estagiários.',
    changes: [
      { from: 'Tipo, a gente trabalha', to: 'Trabalhamos', why: 'Cut the filler *tipo*; *a gente* becomes the *nós* verb.' },
      { from: 'ganha que nem', to: 'ganhamos o mesmo que', why: 'Keep the *nós* form. *Que nem* is spoken; for pay, write *o mesmo que*.' },
      { from: 'estagiário, né?', to: 'estagiários', why: 'Cut *né?*; the comparison is with interns in the plural.' }
    ] },

  { id: 'fm-010',
    context: 'Solicitação à Secretaria de Meio Ambiente sobre uma árvore em risco',
    informal: 'Tem um árvore enorme caindo em cima da fiação na Rua dos Ipês, e dá pra ver os galhos rachados.',
    formal: 'Há uma árvore enorme caindo sobre a fiação na Rua dos Ipês, e é possível ver os galhos rachados.',
    changes: [
      { from: 'Tem um árvore', to: 'Há uma árvore', why: '*Há* for there is; *árvore* is feminine.' },
      { from: 'em cima da', to: 'sobre a', why: '*Sobre* is more formal than *em cima de*.' },
      { from: 'dá pra ver', to: 'é possível ver', why: '*Dá pra* is spoken; write *é possível*.' }
    ] },

  { id: 'fm-011',
    context: 'Reclamação ao SAC de uma loja de eletrodomésticos',
    informal: 'Comprei um televisão no dia 3 e ela já tá com defeito. Cês precisam dar um jeito nisso.',
    formal: 'Comprei uma televisão no dia 3 e ela já está com defeito. Solicito que a loja tome providências.',
    changes: [
      { from: 'um televisão', to: 'uma televisão', why: 'Nouns in *-são* are feminine.' },
      { from: 'tá com defeito', to: 'está com defeito', why: 'Write *está* in full.' },
      { from: 'Cês precisam', to: 'Solicito que a loja', why: 'Name the company in the third person and request with *solicito que*.' },
      { from: 'dar um jeito nisso', to: 'tome providências', why: '*Dar um jeito* is spoken; *tomar providências*, in the subjunctive after *solicito que*.' }
    ] },

  { id: 'fm-012',
    context: 'Carta à redação de um jornal esportivo',
    informal: 'A matéria de vocês sobre o campeonato de vôlei feminino ficou muito top, mas faltou falar do time da cidade.',
    formal: 'A reportagem sobre o campeonato de vôlei feminino ficou excelente, mas não mencionou a equipe da cidade.',
    changes: [
      { from: 'A matéria de vocês', to: 'A reportagem', why: 'Speak of the paper and its article in the third person, without *vocês*.' },
      { from: 'muito top', to: 'excelente', why: '*Top* is slang; write *excelente*.' },
      { from: 'faltou falar do time', to: 'não mencionou a equipe', why: '*Mencionar* is the precise verb; *a equipe* is more formal than *o time*.' }
    ] },

  { id: 'fm-013',
    context: 'E-mail à clínica veterinária para remarcar uma consulta',
    informal: 'Não vou conseguir ir na consulta de sexta-feira. Dá pra remarcar pra segunda?',
    formal: 'Não poderei comparecer à consulta de sexta-feira. Seria possível remarcá-la para segunda-feira?',
    changes: [
      { from: 'Não vou conseguir', to: 'Não poderei', why: 'The synthetic future *poderei* is the written form.' },
      { from: 'ir na consulta', to: 'comparecer à consulta', why: '*Ir em* is spoken. You *comparecer a* an appointment, and *a* + *a* gives *à*.' },
      { from: 'Dá pra remarcar', to: 'Seria possível remarcá-la', why: 'A polite request uses the conditional; the pronoun *-la* replaces *a consulta*.' },
      { from: 'pra segunda', to: 'para segunda-feira', why: 'Write *para* and the weekday in full.' }
    ] },

  { id: 'fm-014',
    context: 'Comunicado do RH a todos os funcionários',
    informal: 'A partir de segunda-feira, o pessoal vai ter que bater o ponto pelo aplicativo. Qualquer dúvida, fala com a gente.',
    formal: 'A partir de segunda-feira, os funcionários deverão registrar o ponto pelo aplicativo. Em caso de dúvida, procurem o RH.',
    changes: [
      { from: 'o pessoal', to: 'os funcionários', why: '*O pessoal* is spoken; name the group.' },
      { from: 'vai ter que bater', to: 'deverão registrar', why: 'A notice states obligations with *dever*; *registrar o ponto* is the written term.' },
      { from: 'Qualquer dúvida', to: 'Em caso de dúvida', why: 'The fixed formal phrase is *em caso de dúvida*.' },
      { from: 'fala com a gente', to: 'procurem o RH', why: 'Address the group in the plural, and name the department instead of *a gente*.' }
    ] },

  { id: 'fm-015',
    context: 'Pergunta por e-mail ao serviço de limpeza urbana',
    informal: 'Queria saber onde que eu posso deixar meu e-waste, tipo computador velho e duas impressoras quebradas.',
    formal: 'Gostaria de saber onde posso descartar meu lixo eletrônico, como um computador velho e duas impressoras quebradas.',
    changes: [
      { from: 'Queria saber', to: 'Gostaria de saber', why: 'A polite formal question uses the conditional.' },
      { from: 'onde que eu posso deixar', to: 'onde posso descartar', why: 'Cut the spoken *que* and the extra *eu*; *descartar* is the precise verb.' },
      { from: 'e-waste', to: 'lixo eletrônico', why: 'Use the Portuguese term, not the English one.' },
      { from: 'tipo computador', to: 'como um computador', why: '*Tipo* is spoken; introduce examples with *como* or *por exemplo*.' }
    ] },

  { id: 'fm-016',
    context: 'Mensagem formal ao síndico sobre a vaga de garagem',
    informal: 'Faz duas semanas que um carro estranho ocupa a minha vaga do garagem, e o pessoal da portaria não faz nada.',
    formal: 'Há duas semanas um carro estranho ocupa a minha vaga da garagem, e os porteiros não tomaram nenhuma providência.',
    changes: [
      { from: 'Faz duas semanas que', to: 'Há duas semanas', why: '*Faz ... que* is correct, but formal writing prefers *há* for elapsed time.' },
      { from: 'do garagem', to: 'da garagem', why: 'Nouns in *-gem* are feminine.' },
      { from: 'o pessoal da portaria', to: 'os porteiros', why: 'Name the people instead of *o pessoal*.' },
      { from: 'não faz nada', to: 'não tomaram nenhuma providência', why: 'State that no action was taken; *tomar providências* is the formal phrase.' }
    ] },

  { id: 'fm-017',
    context: 'E-mail ao banco para contestar uma cobrança',
    informal: 'Apareceu uma cobrança de R$ 89,90 no meu cartão que eu não reconheço. Me manda o detalhamento dessa compra.',
    formal: 'Apareceu no meu cartão uma cobrança de R$ 89,90 que não reconheço. Solicito que me enviem o detalhamento dessa compra.',
    changes: [
      { from: 'uma cobrança de R$ 89,90 no meu cartão', to: 'no meu cartão uma cobrança', why: 'Move *no meu cartão* forward so *que não reconheço* sits next to *cobrança*, the thing you do not recognize.' },
      { from: 'que eu não reconheço', to: 'que não reconheço', why: 'The verb ending already shows the subject; cut *eu*.' },
      { from: 'Me manda', to: 'Solicito que me enviem', why: 'Do not open with *me* or give an order; request with *solicito que* and the subjunctive.' }
    ] },

  { id: 'fm-018',
    context: 'Notícia no boletim da universidade sobre uma descoberta',
    informal: 'O pessoal do laboratório de biologia descobriu que tem um fungo novo na mata da universidade.',
    formal: 'Os pesquisadores do laboratório de biologia descobriram que há um fungo novo na mata da universidade.',
    changes: [
      { from: 'O pessoal', to: 'Os pesquisadores', why: 'A news report names who did the work.' },
      { from: 'descobriu', to: 'descobriram', why: 'The verb agrees with the plural subject.' },
      { from: 'tem um fungo', to: 'há um fungo', why: 'For there is, formal writing uses *há*.' }
    ] },

  { id: 'fm-019',
    context: 'E-mail à recepção de um hotel sobre a chegada',
    informal: 'A gente vai chegar lá pelas 23h, então segura o quarto pra gente, tá?',
    formal: 'Chegaremos por volta das 23h e pedimos que mantenham a nossa reserva.',
    changes: [
      { from: 'A gente vai chegar', to: 'Chegaremos', why: '*A gente vai* becomes the *nós* future.' },
      { from: 'lá pelas', to: 'por volta das', why: '*Lá pelas* is spoken; write *por volta de*.' },
      { from: 'então segura', to: 'pedimos que mantenham', why: 'Replace the spoken order with a request in the subjunctive.' },
      { from: 'o quarto pra gente, tá?', to: 'a nossa reserva', why: 'Cut *pra gente* and the tag *tá?*; name the booking.' }
    ] },

  { id: 'fm-020',
    context: 'Artigo de opinião sobre o festival de música da cidade',
    informal: 'O festival foi muito legal, mas a prefeitura cortou a verba, e aí ninguém sabe se vai ter edição no ano que vem.',
    formal: 'O festival foi excelente, mas a prefeitura cortou a verba e, por isso, não se sabe se haverá edição no ano que vem.',
    changes: [
      { from: 'muito legal', to: 'excelente', why: '*Legal* is slang in a formal text.' },
      { from: ', e aí', to: 'por isso', why: '*E aí* is spoken; *por isso* marks the consequence.' },
      { from: 'ninguém sabe', to: 'não se sabe', why: 'The impersonal *não se sabe* is more formal than *ninguém sabe*.' },
      { from: 'vai ter', to: 'haverá', why: 'For there will be, write *haverá*.' }
    ] },

  { id: 'fm-021',
    context: 'Reclamação à gerência de uma academia',
    informal: 'Tô pagando a mensalidade certinho, mas o ar-condicionado tá quebrado faz um mês.',
    formal: 'Pago a mensalidade em dia, mas o ar-condicionado está quebrado há um mês.',
    changes: [
      { from: 'Tô pagando a mensalidade', to: 'Pago a mensalidade', why: '*Tô* is spoken; the simple present *pago* states a habit more formally than *estou pagando*.' },
      { from: 'certinho', to: 'em dia', why: '*Certinho* is spoken; *em dia* means paid on time.' },
      { from: 'tá quebrado', to: 'está quebrado', why: 'Write *está* in full.' },
      { from: 'faz um mês', to: 'há um mês', why: '*Faz um mês* is correct, but formal writing prefers *há* for elapsed time.' }
    ] },

  { id: 'fm-022',
    context: 'E-mail à diretora da creche do filho',
    informal: 'Meu filho tem alergia a amendoim, então me dá uma confirmação de que o lanche não leva amendoim.',
    formal: 'Meu filho tem alergia a amendoim. Por isso, peço que a senhora confirme que o lanche não contém amendoim.',
    changes: [
      { from: 'me dá', to: 'peço que a senhora', why: 'A request to a director you do not know well uses *peço que* and *a senhora*.' },
      { from: 'uma confirmação de', to: 'confirme', why: 'After *peço que*, use the verb in the subjunctive.' },
      { from: 'não leva', to: 'não contém', why: '*Conter* is the precise verb for ingredients.' }
    ] },

  { id: 'fm-023',
    context: 'Reclamação à operadora do plano de saúde',
    informal: 'Me informaram por telefone que o exame não tá coberto, mas no contrato tá escrito que tá.',
    formal: 'Fui informado por telefone de que o exame não está coberto, mas o contrato prevê essa cobertura.',
    changes: [
      { from: 'Me informaram', to: 'Fui informado', why: 'Do not open with *me*; the passive *fui informado* avoids it.' },
      { from: 'telefone que', to: 'telefone de que', why: 'In the passive, *ser informado* takes *de*, so write *de que*.' },
      { from: 'não tá coberto', to: 'não está coberto', why: 'Write *está* in full.' },
      { from: 'no contrato tá escrito que tá', to: 'prevê essa cobertura', why: '*Prever* is the verb for what a contract states.' }
    ] },

  { id: 'fm-024',
    context: 'Carta do leitor a uma revista sobre o preço dos alimentos',
    informal: 'Hoje em dia, quando a gente vai no mercado, o arroz e o feijão tão cada vez mais caros.',
    formal: 'Hoje em dia, quando vamos ao mercado, o arroz e o feijão estão cada vez mais caros.',
    changes: [
      { from: 'quando a gente vai', to: 'quando vamos', why: '*A gente vai* becomes *vamos*.' },
      { from: 'no mercado', to: 'ao mercado', why: 'In writing you *ir a* a place, not *ir em*.' },
      { from: 'tão cada vez', to: 'estão cada vez', why: 'Write *estão* in full.' }
    ] },

  { id: 'fm-025',
    context: 'Ofício à Secretaria de Cultura pedindo o teatro municipal',
    informal: 'Nosso grupo de teatro queria usar o palco do Teatro Municipal pra fazer um apresentação beneficente em novembro.',
    formal: 'Nosso grupo de teatro gostaria de utilizar o palco do Teatro Municipal para realizar uma apresentação beneficente em novembro.',
    changes: [
      { from: 'queria usar', to: 'gostaria de utilizar', why: 'A polite formal request uses the conditional.' },
      { from: 'pra fazer', to: 'para realizar', why: 'Write *para*; an event is *realizado*.' },
      { from: 'um apresentação', to: 'uma apresentação', why: 'Nouns in *-ção* are feminine.' }
    ] },

  { id: 'fm-026',
    context: 'E-mail de reclamação a uma loja on-line de roupas',
    informal: 'O vestido chegou no tamanho errado e com o embalagem rasgada, e cês ainda querem cobrar o frete da troca?',
    formal: 'O vestido chegou no tamanho errado e com a embalagem rasgada, e a loja ainda pretende cobrar o frete da troca.',
    changes: [
      { from: 'o embalagem', to: 'a embalagem', why: 'Nouns in *-gem* are feminine.' },
      { from: 'cês ainda querem', to: 'a loja ainda pretende', why: 'Name the company in the third person and state the fact instead of asking a heated question.' }
    ] },

  { id: 'fm-027',
    context: 'Aviso de uma escola de música aos alunos',
    informal: 'Galera, as aulas de violão vão tá suspensas essa semana porque o professor tá doente.',
    formal: 'Prezados alunos, as aulas de violão estarão suspensas nesta semana porque o professor está doente.',
    changes: [
      { from: 'Galera', to: 'Prezados alunos', why: '*Galera* is slang; a notice addresses the group formally.' },
      { from: 'vão tá suspensas', to: 'estarão suspensas', why: '*Tá* is spoken; the synthetic future *estarão* suits a formal notice.' },
      { from: 'essa semana', to: 'nesta semana', alt: ['esta semana'], why: 'For the current week, write *nesta semana* or *esta semana*.' },
      { from: 'tá doente', to: 'está doente', why: 'Write *está* in full.' }
    ] },

  { id: 'fm-028',
    context: 'Artigo de opinião sobre o trabalho remoto',
    informal: 'Muita gente acha que home office é super produtivo, mas tipo, depende muito da pessoa.',
    formal: 'Muitas pessoas acham que o trabalho remoto é bastante produtivo, mas isso depende muito da pessoa.',
    changes: [
      { from: 'Muita gente acha', to: 'Muitas pessoas acham', why: '*Muitas pessoas* is more formal than *muita gente*, and it takes a plural verb.' },
      { from: 'home office', to: 'o trabalho remoto', why: 'Prefer the Portuguese term in a formal text.' },
      { from: 'super produtivo', to: 'bastante produtivo', why: '*Super* is spoken; write *bastante* or *muito*.' },
      { from: 'mas tipo, depende', to: 'mas isso depende', why: 'Cut the filler *tipo* and give the verb a subject.' }
    ] },

  { id: 'fm-029',
    context: 'Solicitação à prefeitura sobre a iluminação de uma trilha',
    informal: 'A trilha do Morro Azul tá sem luz nenhuma, e de noite as pessoas que correm lá ficar com medo.',
    formal: 'A trilha do Morro Azul está sem iluminação, e, à noite, os corredores ficam inseguros.',
    changes: [
      { from: 'tá sem luz nenhuma', to: 'está sem iluminação', why: 'Write *está*; *iluminação* is the term for public lighting.' },
      { from: 'de noite', to: 'à noite', why: '*À noite*, with crase, is more formal than *de noite*.' },
      { from: 'as pessoas que correm lá', to: 'os corredores', why: 'One precise noun replaces the spoken clause.' },
      { from: 'ficar com medo', to: 'ficam inseguros', why: 'The verb must agree with its subject: *os corredores ficam*, not the infinitive.' }
    ] },

  { id: 'fm-030',
    context: 'E-mail à coordenação da pós-graduação sobre um prazo',
    informal: 'Vou estar enviando o relatório só na semana que vem, porque meu pai tá internado.',
    formal: 'Enviarei o relatório apenas na próxima semana, porque meu pai está internado.',
    changes: [
      { from: 'Vou estar enviando', to: 'Enviarei', why: '*Vou estar* + gerund is a call-center habit; write the simple future.' },
      { from: 'só na semana que vem', to: 'apenas na próxima semana', why: '*Apenas* and *próxima semana* are more formal than *só* and *semana que vem*.' },
      { from: 'tá internado', to: 'está internado', why: 'Write *está* in full.' }
    ] },

  { id: 'fm-031',
    context: 'Notícia no jornal do bairro sobre a vacinação contra a gripe',
    informal: 'Tem vacina contra a gripe pra todo mundo com mais de 60 anos, e o pessoal pode ir em qualquer posto até sexta-feira.',
    formal: 'Há vacinas contra a gripe para todas as pessoas com mais de 60 anos, que podem ir a qualquer posto até sexta-feira.',
    changes: [
      { from: 'Tem vacina', to: 'Há vacinas', why: 'For there is, formal writing uses *há*.' },
      { from: 'pra todo mundo', to: 'para todas as pessoas', why: 'Write *para*; *todas as pessoas* is more formal than *todo mundo*.' },
      { from: 'e o pessoal pode', to: 'que podem', why: 'Cut *o pessoal*; a relative clause refers back to the same people.' },
      { from: 'ir em qualquer', to: 'ir a qualquer', why: 'In writing you *ir a* a place, not *ir em*.' }
    ] },

  { id: 'fm-032',
    context: 'Reclamação ao suporte de um aplicativo de entrega de comida',
    informal: 'Meu pedido chegou frio e faltando o refrigerante, e aí o aplicativo não deixa eu pedir reembolso.',
    formal: 'Meu pedido chegou frio e sem o refrigerante e, além disso, o aplicativo não me permite solicitar reembolso.',
    changes: [
      { from: 'faltando o refrigerante', to: 'sem o refrigerante', why: 'A plain preposition is cleaner than the spoken gerund.' },
      { from: ', e aí', to: 'além disso', why: '*E aí* is spoken; *além disso* adds a second problem.' },
      { from: 'não deixa eu pedir', to: 'não me permite solicitar', why: '*Deixa eu* is spoken; write *me permite* and *solicitar*.' }
    ] },

  { id: 'fm-033',
    context: 'Solicitação à Secretaria de Esportes sobre uma quadra pública',
    informal: 'A quadra tá toda esburacada, e a gente queria que colocassem uma rede nova e dessem um jeito no piso.',
    formal: 'A quadra está toda esburacada, e solicitamos que instalem uma rede nova e providenciem o conserto do piso.',
    changes: [
      { from: 'tá toda', to: 'está toda', why: 'Write *está* in full.' },
      { from: 'a gente queria', to: 'solicitamos', why: '*A gente* becomes the *nós* verb; *solicitar* is the formal request.' },
      { from: 'colocassem', to: 'instalem', why: 'Equipment is *instalado*; after *solicitamos*, use the present subjunctive.' },
      { from: 'dessem um jeito', to: 'providenciem o conserto', why: '*Dar um jeito* is spoken; ask for the repair.' }
    ] },

  { id: 'fm-034',
    context: 'E-mail à imobiliária sobre um vazamento no apartamento',
    informal: 'Tem um vazamento no banheiro faz três semanas e ninguém da imobiliária veio ver.',
    formal: 'Existe um vazamento no banheiro há três semanas e nenhum funcionário da imobiliária veio verificar.',
    changes: [
      { from: 'Tem um vazamento', to: 'Existe um vazamento', why: 'For there is, write *existe* or *há*.' },
      { from: 'faz três semanas', to: 'há três semanas', why: '*Faz três semanas* is correct, but formal writing prefers *há* for elapsed time.' },
      { from: 'ninguém', to: 'nenhum funcionário', why: 'Name who failed to act.' },
      { from: 'veio ver', to: 'veio verificar', why: '*Verificar* is the precise verb for an inspection.' }
    ] },

  { id: 'fm-035',
    context: 'Carta do leitor sobre a proibição de fogos de artifício',
    informal: 'O proibição dos fogos no Réveillon é super importante pros animais, e muita gente concorda.',
    formal: 'A proibição dos fogos no Réveillon é muito importante para os animais, e muitas pessoas concordam.',
    changes: [
      { from: 'O proibição', to: 'A proibição', why: 'Nouns in *-ção* are feminine.' },
      { from: 'super importante', to: 'muito importante', why: '*Super* is spoken; write *muito*.' },
      { from: 'pros animais', to: 'para os animais', why: '*Pros* is spoken; write *para os*.' },
      { from: 'muita gente concorda', to: 'muitas pessoas concordam', why: '*Muitas pessoas* is more formal than *muita gente*, and it takes a plural verb.' }
    ] },

  { id: 'fm-036',
    context: 'E-mail ao setor financeiro da empresa sobre um reembolso',
    informal: 'Até hoje não caiu o reembolso da viagem de março. Cê consegue ver isso pra mim?',
    formal: 'Até hoje não recebi o reembolso da viagem de março. Solicito que verifiquem a situação.',
    changes: [
      { from: 'não caiu', to: 'não recebi', why: 'Money *caiu na conta* is spoken; write *receber*.' },
      { from: 'Cê consegue ver', to: 'Solicito que verifiquem', why: 'A request to a department uses *solicito que* and the subjunctive.' },
      { from: 'isso pra mim?', to: 'a situação', why: 'Name what needs checking instead of *isso pra mim*.' }
    ] },

  { id: 'fm-037',
    context: 'Artigo de opinião para o site de um coletivo ambiental',
    informal: 'Se a gente não cuidar dos rios agora, daí nossos filhos vão pagar o preço.',
    formal: 'Se não cuidarmos dos rios agora, nossos filhos pagarão o preço.',
    changes: [
      { from: 'a gente não cuidar', to: 'não cuidarmos', why: 'After *se*, the *nós* future subjunctive: *cuidarmos*.' },
      { from: 'agora, daí nossos', to: 'agora, nossos', why: 'Cut *daí*; the *se* clause already sets up the consequence.' },
      { from: 'vão pagar', to: 'pagarão', why: 'The synthetic future reads as written Portuguese.' }
    ] },

  { id: 'fm-038',
    context: 'E-mail à organização de uma corrida de rua',
    informal: 'Me inscrevi na corrida de 10 km, mas não peguei o kit nem o número de peito. E ninguém responde meus e-mails.',
    formal: 'Fiz a minha inscrição na corrida de 10 km, mas não recebi o kit nem o número de peito. Também não obtive resposta aos meus e-mails.',
    changes: [
      { from: 'Me inscrevi', to: 'Fiz a minha inscrição', alt: ['Inscrevi-me', 'Fiz minha inscrição', 'Eu me inscrevi'], why: 'Do not open a sentence with *me*. Write *inscrevi-me* or *fiz a minha inscrição*.' },
      { from: 'não peguei', to: 'não recebi', why: 'You *receber* a kit; *pegar* is spoken here.' },
      { from: 'E ninguém responde meus e-mails', to: 'resposta aos meus e-mails', why: 'State the fact without *ninguém*; *responder* and *resposta* take *a*, so write *aos meus e-mails*.' }
    ] },

  { id: 'fm-039',
    context: 'Carta à Câmara Municipal sobre um projeto de shopping',
    informal: 'O comunidade do Vale do Sol tá preocupada sobre o novo shopping, porque vão derrubar um monte de árvore.',
    formal: 'A comunidade do Vale do Sol está preocupada com o novo shopping, porque muitas árvores serão derrubadas.',
    changes: [
      { from: 'O comunidade', to: 'A comunidade', why: 'Nouns in *-dade* are feminine.' },
      { from: 'tá preocupada sobre', to: 'está preocupada com', why: 'Write *está*; *preocupado* takes *com*, not *sobre*.' },
      { from: 'vão derrubar um monte de árvore', to: 'muitas árvores serão derrubadas', why: '*Um monte de* is slang; the passive puts the trees first.' }
    ] },

  { id: 'fm-040',
    context: 'Aviso da biblioteca pública aos leitores',
    informal: 'A biblioteca vai fechar pra reforma em julho, então quem pegou livro emprestado tem que devolver até dia 30.',
    formal: 'A biblioteca vai fechar para reforma em julho. Por isso, quem retirou livros deve devolvê-los até o dia 30.',
    changes: [
      { from: 'pra reforma', to: 'para reforma', why: 'Write *para* in full.' },
      { from: 'pegou livro emprestado', to: 'retirou livros', why: '*Retirar livros* is the library term.' },
      { from: 'tem que devolver', to: 'deve devolvê-los', why: 'A notice states obligations with *dever*; *-los* refers back to the books.' },
      { from: 'até dia 30', to: 'até o dia 30', why: 'Formal writing keeps the article: *o dia 30*.' }
    ] },

  { id: 'fm-041',
    context: 'Notícia sobre o festival de inverno de uma cidade serrana',
    informal: 'O festival de inverno vai ter show de graça todo dia, e a organização espera um monte de turista.',
    formal: 'O festival de inverno terá shows gratuitos todos os dias, e a organização espera muitos turistas.',
    changes: [
      { from: 'vai ter show', to: 'terá shows', why: 'The synthetic future reads as written Portuguese.' },
      { from: 'de graça', to: 'gratuitos', why: '*De graça* is spoken; print uses *gratuito*.' },
      { from: 'todo dia', to: 'todos os dias', why: 'Formal writing prefers *todos os dias*.' },
      { from: 'um monte de turista', to: 'muitos turistas', why: '*Um monte de* is slang; write *muitos*, in the plural.' }
    ] },

  { id: 'fm-042',
    context: 'Solicitação à secretaria acadêmica da faculdade',
    informal: 'Preciso pegar meu histórico até sexta, porque tô aplicando pra uma bolsa de intercâmbio.',
    formal: 'Preciso obter meu histórico até sexta-feira, porque estou me candidatando a uma bolsa de intercâmbio.',
    changes: [
      { from: 'pegar meu histórico', to: 'obter meu histórico', why: 'You *obter* a document; *pegar* is spoken.' },
      { from: 'sexta,', to: 'sexta-feira', why: 'Write the weekday in full.' },
      { from: 'tô aplicando pra', to: 'estou me candidatando a', alt: ['candidatando-me a'], why: '*Aplicar para* copies English apply for; write *candidatar-se a*.' }
    ] },

  { id: 'fm-043',
    context: 'Carta à ouvidoria de um hospital',
    informal: 'Minha mãe ficou seis horas esperando no pronto-socorro, e ninguém passou nenhuma informação pra gente.',
    formal: 'Minha mãe esperou seis horas no pronto-socorro, e não recebemos nenhuma informação.',
    changes: [
      { from: 'ficou seis horas esperando', to: 'esperou seis horas', why: 'One verb in the past is tighter than *ficar* + gerund.' },
      { from: 'ninguém passou nenhuma informação pra gente', to: 'não recebemos nenhuma informação', why: 'Cut *pra gente*; the *nós* verb states the fact.' }
    ] },

  { id: 'fm-044',
    context: 'E-mail ao suporte técnico de um programa de contabilidade',
    informal: 'Depois da atualização, o sistema tá travando toda hora, e aí eu perco o que tava fazendo.',
    formal: 'Depois da atualização, o sistema trava com frequência, e por isso perco o que estava fazendo.',
    changes: [
      { from: 'tá travando toda hora', to: 'trava com frequência', why: 'The simple present states a repeated problem; *toda hora* is spoken.' },
      { from: 'e aí eu perco', to: 'e por isso perco', why: '*E aí* is spoken; in writing, *por isso* marks the result. The verb ending already shows *eu*.' },
      { from: 'tava fazendo', to: 'estava fazendo', why: 'Write *estava* in full.' }
    ] },

  { id: 'fm-045',
    context: 'E-mail ao diretor de um museu de arte',
    informal: 'Cê poderia colocar uma legenda em inglês nas obras? Muito turista estrangeiro visita o museu e não entende nada.',
    formal: 'O senhor poderia incluir uma legenda em inglês nas obras? Muitos turistas estrangeiros visitam o museu e não entendem as descrições.',
    changes: [
      { from: 'Cê poderia', to: 'O senhor poderia', why: 'A director you do not know is *o senhor*; *cê* is spoken.' },
      { from: 'colocar', to: 'incluir', why: '*Colocar* is vague; *incluir* is the precise verb.' },
      { from: 'Muito turista estrangeiro visita', to: 'Muitos turistas estrangeiros visitam', why: 'The spoken singular for a crowd becomes a plural in writing.' },
      { from: 'não entende nada', to: 'não entendem as descrições', why: 'The verb agrees with the plural subject; name what they miss.' }
    ] }

);
