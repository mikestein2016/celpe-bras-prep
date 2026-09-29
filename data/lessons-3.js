window.CB = window.CB || {};
CB.lessons = CB.lessons || [];
CB.lessons.push(

  // ===================== 12. O gênero dos substantivos =====================
  {
    id: 'l12-genero',
    n: 12,
    unit: 4,
    title: 'O gênero dos substantivos',
    en: 'Predict a noun\'s gender from its ending and catch the exceptions that trip you up.',
    minutes: 13,
    steps: [
      {
        type: 'teach',
        title: 'Endings that give the gender away',
        body: [
          'Most of your gender slips happen on words whose ending tells you the answer. Learn the endings and most of the slips go away.',
          'Feminine: *-ção, -são, -dade, -tude, -gem*. That covers *a proibição, a atenção, a decisão, a comunidade, a atitude, a viagem*.',
          'Masculine: Greek words in *-ma*, such as *o problema, o sistema, o tema, o programa, o clima*. Here the *-a* ending misleads you.'
        ],
        examples: [
          { pt: 'A proibição começa em março.', en: '-ção: feminine, so *a proibição*' },
          { pt: 'Obrigado pela atenção.', en: '*por + a* = *pela*, because *atenção* is feminine' },
          { pt: 'A comunidade aprovou o projeto.', en: '-dade: feminine' },
          { pt: 'O sistema novo é mais simples.', en: '-ma: masculine, and the adjective follows' }
        ]
      },
      {
        type: 'pick', n: 3, from: [
          { type: 'choice', q: 'Which article fits?', text: 'Os sócios do clube votaram contra ___ proibição de animais na piscina.', options: ['o', 'a'], answer: 'a', why: '*Proibição* ends in -ção, so it is feminine. *O proibição* was one of your real slips.' },
          { type: 'choice', q: 'Which article fits?', text: 'O novo sistema de agendamento do posto de saúde tem ___ problema: ninguém consegue marcar consulta por telefone.', options: ['um', 'uma'], answer: 'um', why: '*Problema* is a Greek -ma word, so it is masculine even though it ends in -a.' },
          { type: 'choice', q: 'Which article fits?', text: 'A empresa pagou a viagem, mas ___ hospedagem ficou por nossa conta.', options: ['o', 'a'], answer: 'a', why: 'Nouns in -gem are feminine: *a hospedagem, a viagem, a mensagem*.' },
          { type: 'choice', q: 'Which word fits?', text: 'Agradecemos a ajuda e ficamos gratos ___ atenção de todos.', options: ['pela', 'pelo'], answer: 'pela', why: '*Atenção* is feminine, so *por + a* becomes *pela*. You once wrote *pelo atenção*.' },
          { type: 'choice', q: 'Which article fits?', text: 'Muitos torcedores elogiaram ___ atitude da técnica depois da derrota.', options: ['o', 'a'], answer: 'a', why: 'Nouns in -tude are feminine: *a atitude, a juventude*.' },
          { type: 'choice', q: 'Which article fits?', text: 'O professor escolheu ___ tema difícil para o debate.', options: ['um', 'uma'], answer: 'um', why: '*Tema* is a Greek -ma word, so it is masculine: *um tema, o tema*.' }
        ]
      },
      {
        type: 'teach',
        title: 'The traps you memorize',
        body: [
          'Some nouns break the pattern. Learn them with the article attached: say *a mão*, never *mão* alone.',
          '*O dia, o mapa, o planeta* end in -a but are masculine. *A mão, a foto, a moto, a tribo* look masculine but are feminine. *Foto* and *moto* are short for *fotografia* and *motocicleta*. *A lei* is feminine too.',
          'Nouns in -e give no clue. *A árvore, a ponte, a noite, a parte* are feminine; *o leite, o nome, o time, o dente* are masculine. When you are not sure, rephrase with a word you know.'
        ],
        table: [
          { use: 'a lei', avoid: 'o lei', why: '*lei* is feminine' },
          { use: 'uma tribo', avoid: 'um tribo', why: 'ends in -o, but feminine' },
          { use: 'uma árvore', avoid: 'um árvore', why: '-e nouns: memorize' },
          { use: 'muitas árvores', avoid: 'muitos árvores', why: 'quantity words agree too' },
          { use: 'o dia', avoid: 'a dia', why: 'ends in -a, but masculine' }
        ]
      },
      {
        type: 'pick', n: 2, from: [
          { type: 'choice', q: 'Which sentence is correct?', options: ['Visitamos uma tribo indígena e tiramos muitas fotos.', 'Visitamos um tribo indígena e tiramos muitas fotos.', 'Visitamos uma tribo indígena e tiramos muitos fotos.'], answer: 'Visitamos uma tribo indígena e tiramos muitas fotos.', why: '*Tribo* and *foto* both end in -o but are feminine, so *uma tribo* and *muitas fotos*.' },
          { type: 'choice', q: 'Which article fits?', text: 'Durante a trilha, ___ árvore caiu e bloqueou o caminho.', options: ['um', 'uma'], answer: 'uma', why: '*Árvore* ends in -e, so the ending gives no clue. It is feminine: *uma árvore, muitas árvores*.' },
          { type: 'choice', q: 'Which article fits?', text: 'O motorista levantou ___ mão para agradecer.', options: ['o', 'a'], answer: 'a', why: '*Mão* ends in -ão but is feminine: *a mão, as mãos*.' },
          { type: 'choice', q: 'Which article fits?', text: 'Os turistas pediram ___ mapa da trilha na recepção do parque.', options: ['um', 'uma'], answer: 'um', why: '*Mapa* ends in -a but is masculine, like *o dia* and *o planeta*.' },
          { type: 'choice', q: 'Which article fits?', text: 'Os comerciantes discutiram ___ lei que proíbe sacolas plásticas.', options: ['o', 'a'], answer: 'a', why: '*Lei* is feminine. *O lei* was one of your real slips.' }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 4 gender mistakes in this letter to the editor.',
        text: 'Prezados editores, moro em Vila Aurora e apoio {{o lei|a lei|*Lei* is feminine.}} que protege as árvores das calçadas. {{O comunidade|A comunidade|Nouns in -dade are feminine.}} sofre com o calor, e cada sombra faz diferença. Na semana passada, a prefeitura cortou {{um árvore|uma árvore|*Árvore* is feminine; -e nouns must be memorized.}} de quarenta anos sem nenhum aviso. Espero que a nova regra acabe com esse problema. Obrigado {{pelo atenção|pela atenção|*Atenção* is feminine, so *por + a* = *pela*.}}. Um leitor de Vila Aurora'
      },
      {
        type: 'fix',
        title: 'Find the 4 gender mistakes in this museum notice.',
        text: 'Aviso aos visitantes. A partir de segunda-feira, {{o proibição|a proibição|Nouns in -ção are feminine.}} de fotos com flash vale para todas as salas. A exposição sobre {{um tribo|uma tribo|*Tribo* ends in -o but is feminine.}} do Alto Xingu fica aberta até dezembro. Deixe {{o bagagem|a bagagem|Nouns in -gem are feminine.}} no guarda-volumes da entrada. Se tiver {{alguma problema|algum problema|Greek -ma words are masculine: *o problema*.}}, procure a recepção.'
      },
      {
        type: 'write',
        q: 'Write 2–3 sentences to the city parks department about the problem below and ask for a solution. Use at least three of these nouns with an article: *árvore, problema, comunidade, solução, manutenção*.',
        text: 'Uma árvore caiu no Parque das Palmeiras, perto do lago, e continua no mesmo lugar há dez dias.',
        model: [
          'Prezados senhores,',
          'Há uma árvore caída no Parque das Palmeiras, perto do lago, e ninguém a retirou até agora.',
          'O problema preocupa a comunidade, porque muitas crianças brincam nessa área.',
          'Peço uma solução rápida e mais manutenção nas trilhas do parque.'
        ],
        check: [
          'Each noun has the right article: *uma árvore, o problema, a comunidade, uma solução, a manutenção*',
          'Adjectives match their nouns: *uma árvore caída*',
          '*Há*, not *tem*',
          'You asked for something concrete'
        ]
      },
      { type: 'drills', modes: ['genero'], tags: ['-ção', '-dade', '-gem', '-ma', 'exceção', '-são', '-tude'], n: 10 },
      { type: 'drills', modes: ['registro'], tags: ['há/tem', 'nós/a gente', 'para/pra'], n: 4 }
    ]
  },

  // ===================== 13. Tudo concorda =====================
  {
    id: 'l13-concordancia',
    n: 13,
    unit: 4,
    title: 'Tudo concorda',
    en: 'Carry a noun\'s gender and number to every word tied to it, even when that word is far away.',
    minutes: 13,
    steps: [
      {
        type: 'teach',
        title: 'The noun sets the gender for the whole chain',
        body: [
          'Once you know a noun\'s gender, every word tied to it follows: article, adjective, participle, possessive, pronoun. *Celulares velhas* and *TVs velhos* came from getting the noun wrong and carrying the mistake along.',
          'Check the chain, not only the word next door. In *As leis que o governo propôs no ano passado foram aprovadas*, the participle sits far from *leis* and still agrees with it.',
          'Possessives agree with the thing owned, not the owner: *os alunos e suas mochilas*.'
        ],
        examples: [
          { pt: 'Celulares velhos e TVs velhas vão para o ponto de coleta.', en: '*celular* is masculine; *TV* (*televisão*) is feminine' },
          { pt: 'As novas regras foram aprovadas ontem.', en: 'the participle agrees with *regras*' },
          { pt: 'Comprei uma bicicleta e a uso todos os dias.', en: 'the pronoun *a* stands for *bicicleta*' },
          { pt: 'Os pacientes trouxeram suas receitas.', en: '*suas* agrees with *receitas*, not *pacientes*' }
        ]
      },
      {
        type: 'pick', n: 3, from: [
          { type: 'choice', q: 'Which word fits?', text: 'Na feira de trocas, levei dois celulares ___ e uma TV antiga.', options: ['velhos', 'velhas'], answer: 'velhos', why: '*Celular* is masculine, so *celulares velhos*. *TV* would take *velha*.' },
          { type: 'choice', q: 'Which word fits?', text: 'As novas leis de trânsito foram ___ pela Câmara na terça-feira.', options: ['aprovados', 'aprovadas', 'aprovado'], answer: 'aprovadas', why: 'The participle agrees with *leis*, feminine plural. For a law, use *aprovar*, not *passar*.' },
          { type: 'choice', q: 'Which word fits?', text: 'Os pacientes devem trazer ___ carteirinhas de vacinação.', options: ['seus', 'suas'], answer: 'suas', why: 'Possessives agree with the thing owned: *carteirinhas* is feminine.' },
          { type: 'choice', q: 'Which word fits?', text: 'A academia reformou os vestiários e deixou as salas de ginástica mais ___.', options: ['amplos', 'amplas'], answer: 'amplas', why: 'The adjective goes with *salas*, feminine plural.' },
          { type: 'choice', q: 'Which word fits?', text: 'Recebi as passagens por e-mail, mas ainda não ___ imprimi.', options: ['os', 'as'], answer: 'as', why: 'The pronoun stands for *passagens*, feminine plural.' },
          { type: 'choice', q: 'Which word fits?', text: 'Meu irmão e minha cunhada estão ___ com a mudança.', options: ['animados', 'animadas'], answer: 'animados', why: 'When a masculine and a feminine noun share one adjective, it goes masculine plural.' }
        ]
      },
      {
        type: 'teach',
        title: 'Long sentences and group nouns',
        body: [
          'In a long sentence, find the noun the word belongs to before you choose the ending. In *A decisão dos diretores foi adiada*, *adiada* goes with *decisão*, not *diretores*.',
          'Group nouns such as *a maioria, o grupo, a população* are singular. With *a maioria das pessoas*, a singular verb is always correct: *a maioria das pessoas prefere*.'
        ],
        examples: [
          { pt: 'A decisão dos diretores foi adiada.', en: '*adiada* agrees with *decisão*' },
          { pt: 'O grupo de enfermeiras chegou cedo.', en: 'the verb agrees with *grupo*' },
          { pt: 'A população ficou preocupada com a falta de água.', en: '*preocupada* agrees with *população*' },
          { pt: 'A maioria das pessoas prefere pagar pelo celular.', en: 'singular verb with *a maioria*' }
        ]
      },
      {
        type: 'choice',
        q: 'Which sentence has every word in agreement?',
        options: [
          'A reforma das quadras foi concluída, e elas já estão abertas ao público.',
          'A reforma das quadras foi concluído, e elas já estão abertas ao público.',
          'A reforma das quadras foi concluída, e eles já estão abertos ao público.'
        ],
        answer: 'A reforma das quadras foi concluída, e elas já estão abertas ao público.',
        why: '*Concluída* agrees with *reforma*. *Elas* and *abertas* point back to *quadras*, which is feminine.'
      },
      {
        type: 'fix',
        title: 'Find the 4 agreement mistakes in this news item.',
        text: 'Loja de eletrônicos aceita aparelhos usados como parte do pagamento. A rede Tecno Lar lançou uma campanha neste mês. O cliente leva {{celulares velhas|celulares velhos|*Celular* is masculine.}} ou {{TVs velhos|TVs velhas|*TV* stands for *televisão*, which is feminine.}} e ganha desconto na compra de um aparelho novo. Os produtos recolhidos serão {{enviadas|enviados|The participle agrees with *produtos*, masculine plural.}} para reciclagem. Segundo a gerente, as lojas ficaram {{cheios|cheias|The adjective agrees with *lojas*, feminine plural.}} no primeiro fim de semana.'
      },
      {
        type: 'fix',
        title: 'Find the 4 agreement mistakes in this work e-mail.',
        text: 'Prezada equipe, a reunião sobre o novo plano de saúde foi {{remarcado|remarcada|The participle agrees with *reunião*, feminine.}} para quinta-feira, às 14h. Os funcionários devem trazer {{seus carteirinhas|suas carteirinhas|Possessives agree with the thing owned.}} do plano atual. As dúvidas enviadas por e-mail já foram {{respondidos|respondidas|The participle agrees with *dúvidas*, feminine plural.}}. Se alguém não recebeu as instruções, posso {{reenviá-los|reenviá-las|The pronoun stands for *instruções*, feminine plural.}}. Atenciosamente, Setor de Recursos Humanos'
      },
      {
        type: 'write',
        q: 'Write a 2–3 sentence review for a shopping site. You bought a TV and a headset. Say how each one arrived and whether you recommend the store.',
        model: [
          'Comprei uma TV e um fone de ouvido na semana passada.',
          'A TV chegou bem embalada, mas o fone veio sem a caixa original.',
          'Mesmo assim, os dois aparelhos funcionam bem, e recomendo a loja.'
        ],
        check: [
          '*A TV* is feminine: *embalada*',
          '*O fone* is masculine, and so is *os dois aparelhos*',
          'Every adjective and participle matches its noun',
          'Every pronoun (*o, a, os, as*) points to the right noun'
        ]
      },
      { type: 'drills', modes: ['genero'], tags: ['concordância', 'possessivo'], n: 8 },
      { type: 'drills', modes: ['genero'], tags: ['-ção', '-dade', '-gem', '-ma', 'exceção'], n: 4 }
    ]
  },

  // ===================== 14. Os acentos que você mais usa =====================
  {
    id: 'l14-acentos',
    n: 14,
    unit: 4,
    title: 'Os acentos que você mais usa',
    en: 'Put the accents on the words you write most, and leave off the ones the 2009 reform removed.',
    minutes: 14,
    steps: [
      {
        type: 'teach',
        title: 'Find the stress, then read the ending',
        body: [
          'Say the word and find the stressed syllable. The ending then tells you if it takes an accent.',
          'Stress on the last syllable: accent if it ends in *-a, -e, -o, -em, -ens* (plus *-s*): *já, você, após, também, através, invés*. No accent on *-i, -u, -r, -l, -z*: *aqui, comer, papel, feliz*.',
          'Stress on the second-to-last: accent only on rarer endings such as *-l, -r, -x, -ão, -ei, -i, -us* and *-io, -ia, -ua*: *fácil, açúcar, órgão, vários, história, água*. Stress on the third-to-last: always an accent: *médico, público, ônibus*.'
        ],
        examples: [
          { pt: 'através, invés, também, você', en: 'last syllable, ends in -es/-em/-e: accent' },
          { pt: 'comer, aqui, papel, Brasil', en: 'last syllable, ends in -r/-i/-l: no accent' },
          { pt: 'fácil, vários, história', en: 'second-to-last, rare ending: accent' },
          { pt: 'casa, jovem, homens, ideia', en: 'second-to-last, common ending: no accent' },
          { pt: 'médico, ônibus, próximo', en: 'third-to-last: always an accent' }
        ]
      },
      {
        type: 'pick', n: 2, from: [
          { type: 'choice', q: 'Which spelling is correct?', text: 'Pagamos a conta ___ do aplicativo do banco.', options: ['através', 'atraves', 'atravês'], answer: 'através', why: 'Stress on the last syllable, ending in *-es*: acute accent, like *invés* and *português*.' },
          { type: 'choice', q: 'Which spelling is correct?', text: 'Meu primo é um ___ muito responsável.', options: ['jovem', 'jóvem', 'jovém'], answer: 'jovem', why: 'Stress on the second-to-last syllable, ending in *-em*: a common ending, so no accent. *Também* has one because its stress is on the last syllable.' },
          { type: 'choice', q: 'Which spelling is correct?', text: 'Vamos ___ a obra na segunda-feira.', options: ['começar', 'comecar', 'começár'], answer: 'começar', why: 'The *ç* keeps the s sound before *a*. No accent: stress on the last syllable, ending in *-r*.' },
          { type: 'choice', q: 'Which spelling is correct?', text: 'O ___ da clínica chamou meu nome.', options: ['médico', 'medico'], answer: 'médico', why: 'Stress on the third-to-last syllable (*MÉ-di-co*): always an accent.' },
          { type: 'choice', q: 'Which spelling is correct?', text: 'Minha avó põe muito ___ no café.', options: ['açúcar', 'acucar', 'açucar'], answer: 'açúcar', why: 'Stress on the second-to-last syllable, ending in *-r*: accent. The *ç* keeps the s sound.' }
        ]
      },
      {
        type: 'teach',
        title: 'Two more rules and the 2009 changes',
        body: [
          'A stressed *i* or *u* that stands alone after another vowel takes an acute: *saída, país, saúde, conteúdo*. Not before *nh*, or before *l, m, n, r, z* in the same syllable: *rainha, ruim, juiz*.',
          'Plural *têm* and *vêm* take a circumflex: *ele tem, eles têm*; *ela vem, elas vêm*. The same goes for *mantêm, obtêm*.',
          'Since 2009, no accent on *ideia, assembleia, europeia, heroico, voo, enjoo, leem, veem*, or on *para* from the verb *parar*. Always keep the tilde: *não, portões, informações*.'
        ],
        table: [
          { use: 'assembleia', avoid: 'assémbleia / assembléia', why: 'no accent since 2009' },
          { use: 'ideia', avoid: 'idéia', why: 'no accent since 2009' },
          { use: 'voo', avoid: 'vôo', why: 'no accent since 2009' },
          { use: 'eles têm', avoid: 'eles tem', why: 'the plural takes the circumflex' },
          { use: 'começar', avoid: 'comecar', why: '*ç* before *a, o, u* keeps the s sound' }
        ]
      },
      {
        type: 'pick', n: 2, from: [
          { type: 'choice', q: 'Which spelling is correct?', text: 'Os moradores decidiram tudo na ___ de ontem.', options: ['assembleia', 'assembléia', 'assémbleia'], answer: 'assembleia', why: 'Since 2009, *ei* in a stressed second-to-last syllable takes no accent: *assembleia, ideia, europeia*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Os postos de saúde ___ vacina contra a gripe desde segunda-feira.', options: ['têm', 'tem', 'teem'], answer: 'têm', why: 'The subject is plural, so *têm* with a circumflex. *Tem* is singular, and *teem* does not exist.' },
          { type: 'choice', q: 'Which spelling is correct?', text: 'O ___ para Recife atrasou duas horas.', options: ['voo', 'vôo', 'vóo'], answer: 'voo', why: 'Since 2009, *oo* takes no accent: *voo, enjoo*.' },
          { type: 'choice', q: 'Which spelling is correct?', text: 'A ___ do show é pelo portão lateral.', options: ['saída', 'saida'], answer: 'saída', why: 'The stressed *i* stands alone after *a*, so it takes an acute: *sa-Í-da*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Meus pais ___ de Minas para passar o Natal conosco.', options: ['vêm', 'vem', 'veem'], answer: 'vêm', why: '*Vêm* (they come) has a circumflex. *Veem* comes from *ver* (they see).' }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 5 accent mistakes in this message to a sports club.',
        text: 'Prezada diretoria do Clube Atlético Serrano, na última {{assémbleia|assembleia|No accent since 2009, like *ideia*.}}, os sócios pediram mais horários na piscina. Muitos associados {{tem|têm|The subject is plural: *têm*.}} filhos pequenos e só podem nadar no fim de semana. Ao {{inves|invés|Stress on the last syllable, ending in *-es*: acute accent.}} de fechar a piscina aos domingos, sugerimos abri-la das 8h às 12h. Também pedimos que os {{portoes|portões|Keep the tilde in *-ões* plurals.}} laterais fiquem abertos. Podemos {{comecar|começar|*Ç* before *a* keeps the s sound.}} já em novembro. Atenciosamente, Comissão de Sócios'
      },
      {
        type: 'fix',
        title: 'Find the 4 accent mistakes in this blog post.',
        text: 'Neste sábado, a biblioteca {{publica|pública|Stress on the third-to-last syllable: always an accent.}} do bairro Jardim Esperança promove uma feira de troca de livros. A {{idéia|ideia|No accent since 2009.}} é simples: cada visitante leva um livro e sai com outro. A entrada é gratuita, e a {{saida|saída|A stressed *i* alone after a vowel takes an acute.}} para o estacionamento fica ao lado do café. Os voluntários {{vem|vêm|The subject is plural: *vêm*.}} de três escolas da região.'
      },
      {
        type: 'write',
        q: 'Write 3–4 short sentences for your running group\'s WhatsApp about Sunday\'s race. Use at least four of these: *saída, após, ônibus, têm, ideia, através*.',
        model: [
          'Pessoal, a saída da corrida de domingo será às 7h, em frente ao estádio.',
          'Quem vier de ônibus deve descer no ponto logo após a ponte.',
          'Os inscritos têm até sexta-feira para retirar o kit.',
          'A ideia é chegar trinta minutos antes.'
        ],
        check: [
          'Accents on *saída, após, ônibus, até*',
          '*Têm* with the circumflex, because the subject is plural',
          'No accent on *ideia*',
          'Tildes kept on any *-ão* or *-ões*'
        ]
      },
      { type: 'drills', modes: ['acento'], n: 8 },
      { type: 'drills', modes: ['genero'], tags: ['concordância'], n: 4 }
    ]
  },

  // ===================== 15. Conjugue o verbo =====================
  {
    id: 'l15-verbos',
    n: 15,
    unit: 4,
    title: 'Conjugue o verbo',
    en: 'Conjugate every verb that has a subject, and choose the subjunctive or imperative when the sentence calls for it.',
    minutes: 14,
    steps: [
      {
        type: 'teach',
        title: 'A subject needs a conjugated verb',
        body: [
          'When you write fast, the verb stays in its dictionary form: *as crianças passar*. If a verb has its own subject, conjugate it: *as crianças passam*, *os garis que recolhem*.',
          'After *para, antes de, depois de, sem*, the infinitive is right. When it has its own plural subject, it takes an ending: *para os alunos entenderem*, *antes de nós sairmos*.'
        ],
        examples: [
          { pt: 'As crianças passam as férias com os avós.', en: 'subject + conjugated verb' },
          { pt: 'Os funcionários que trabalham à noite recebem um adicional.', en: 'a *que* clause needs a conjugated verb' },
          { pt: 'O professor explicou duas vezes para os alunos entenderem.', en: 'personal infinitive: *entenderem*' },
          { pt: 'É proibido fumar no local.', en: 'no subject: plain infinitive' }
        ]
      },
      {
        type: 'pick', n: 2, from: [
          { type: 'choice', q: 'Which form fits?', text: 'Todos os dias, os entregadores ___ pela portaria dos fundos.', options: ['entrar', 'entram'], answer: 'entram', why: '*Os entregadores* is the subject, so the verb is conjugated.' },
          { type: 'choice', q: 'Which form fits?', text: 'A clínica abre mais cedo para os pacientes ___ antes do trabalho.', options: ['serem atendidos', 'ser atendidos', 'são atendidos'], answer: 'serem atendidos', why: 'After *para* with its own plural subject, the infinitive takes *-em*: *para os pacientes serem atendidos*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Os turistas que ___ o museu elogiam o acervo.', options: ['visitar', 'visitam'], answer: 'visitam', why: 'A *que* clause needs a conjugated verb: *os turistas que visitam*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Levamos lanche para as crianças não ___ fome na trilha.', options: ['passar', 'passarem', 'passam'], answer: 'passarem', why: 'After *para* with the subject *as crianças*, use the personal infinitive: *passarem*.' },
          { type: 'choice', q: 'Which form fits?', text: 'É proibido ___ animais na área da piscina.', options: ['levar', 'levarem'], answer: 'levar', why: 'After *é proibido* with no subject, use the plain infinitive.' }
        ]
      },
      {
        type: 'teach',
        title: 'Subjunctive for wishes, needs and future conditions',
        body: [
          'After *é importante que, é preciso que, espero que, peço que, para que*, use the present subjunctive: *é importante que os pais participem*, *espero que a loja resolva*.',
          'After *quando* and *se* about the future, use the future subjunctive. Regular verbs look like the infinitive: *quando você chegar*. Irregular ones change: *tiver, puder, vier, fizer, for*.'
        ],
        examples: [
          { pt: 'Espero que a empresa devolva o valor.', en: 'a wish: present subjunctive' },
          { pt: 'Organizamos a feira para que os produtores vendam direto.', en: 'purpose with *para que*' },
          { pt: 'Quando os resultados saírem, vamos publicá-los no site.', en: 'future with *quando*' },
          { pt: 'Se tiver dúvidas, ligue para a recepção.', en: 'future with *se*: *tiver*, not *ter*' }
        ]
      },
      {
        type: 'pick', n: 2, from: [
          { type: 'choice', q: 'Which form fits?', text: 'É importante que os funcionários ___ o novo sistema até sexta-feira.', options: ['conheçam', 'conhecem', 'conhecer'], answer: 'conheçam', why: '*É importante que* takes the present subjunctive: *conheçam*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Espero que a operadora ___ o problema ainda hoje.', options: ['resolva', 'resolve', 'resolver'], answer: 'resolva', why: '*Espero que* expresses a wish, so the subjunctive: *resolva*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Quando os ingressos ___ à venda, avisaremos pelo site.', options: ['estiverem', 'estão', 'estar'], answer: 'estiverem', why: '*Quando* about the future takes the future subjunctive: *estiverem*.' },
          { type: 'choice', q: 'Which form fits?', text: 'Se você ___ tempo no sábado, venha ao mutirão.', options: ['tiver', 'ter', 'tem'], answer: 'tiver', why: '*Se* about the future takes the future subjunctive. *Ter* becomes *tiver*.' },
          { type: 'choice', q: 'Which form fits?', text: 'A nutricionista montou um cardápio simples para que as famílias ___ em casa.', options: ['cozinhem', 'cozinham', 'cozinhar'], answer: 'cozinhem', why: '*Para que* takes the present subjunctive: *cozinhem*.' }
        ]
      },
      {
        type: 'teach',
        title: 'Imperatives for leaflets and notices',
        body: [
          'Leaflets and notices tell the reader what to do. Use the *você* imperative, which has the same form as the present subjunctive: *leve, traga, evite, lave, faça*.',
          'For several readers, use the plural: *tragam, evitem*. In writing, *leve* and *traga*, not the spoken *leva* and *traz*. Keep one form through the whole text.'
        ],
        examples: [
          { pt: 'Lave as mãos antes de preparar os alimentos.', en: '*lavar* → *lave*' },
          { pt: 'Traga um documento com foto.', en: '*trazer* → *traga*' },
          { pt: 'Não deixe objetos no carro.', en: 'the negative uses the same form' },
          { pt: 'Evitem barulho após as 22h.', en: 'plural readers' }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 4 verb mistakes in this health leaflet.',
        text: 'Campanha de vacinação contra a gripe. De 3 a 28 de novembro, os postos de saúde da cidade {{abrir|abrem|The subject *os postos* needs a conjugated verb.}} das 8h às 17h. {{Traz|Traga|Leaflet imperative with *você*: *traga*.}} a carteira de vacinação e um documento com foto. Os atendentes chamam idosos e gestantes primeiro para eles não {{esperar|esperarem|After *para* with the subject *eles*: personal infinitive.}} na fila. Se tiver febre no dia, {{espera|espere|Imperative with *você*: *espere*.}} a febre passar antes de se vacinar.'
      },
      {
        type: 'fix',
        title: 'Find the 4 verb mistakes in this complaint to a gym.',
        text: 'Prezada gerência da Academia Corpo em Movimento, meus dois filhos fazem aula na turma infantil de natação. Desde agosto, as crianças {{passar|passam|*As crianças* is the subject, so conjugate the verb.}} quarenta minutos esperando a professora. É importante que a academia {{contrata|contrate|After *é importante que*: subjunctive.}} outra monitora. Espero que a gerência {{resolve|resolva|After *espero que*: subjunctive.}} a situação logo. Se a academia não {{ter|tiver|*Se* about the future: future subjunctive.}} uma solução até o fim do mês, vou cancelar a matrícula. Atenciosamente, Pai de dois alunos da turma infantil'
      },
      {
        type: 'write',
        q: 'Write a 3-line notice for the office kitchen: a title, one line with two plural imperatives, and one line with *é importante que* or *para que*.',
        model: [
          'Aviso: uso da cozinha',
          'Lavem a própria xícara depois do uso e não deixem comida na geladeira na sexta-feira.',
          'É importante que todos respeitem essas regras para que a cozinha continue limpa.'
        ],
        check: [
          'Imperatives in one form: all *vocês* (*lavem, deixem*) or all *você*',
          'Subjunctive after *é importante que* and *para que*',
          'No verb left in the infinitive after a subject',
          'Short, direct lines, like a real notice'
        ]
      },
      { type: 'drills', modes: ['conjugacao'], n: 10 },
      { type: 'drills', modes: ['acento'], n: 4 }
    ]
  },

  // ===================== 16. Preposições e crase =====================
  {
    id: 'l16-regencia-crase',
    n: 16,
    unit: 4,
    title: 'Preposições e crase',
    en: 'Use the right preposition after common verbs, and write the crase only where *a + a* meet.',
    minutes: 14,
    steps: [
      {
        type: 'teach',
        title: 'Verbs that come with a preposition',
        body: [
          'Some verbs always bring the same preposition. Your slips *preocupados sobre, sonhar em, entregar com* came from translating or guessing.',
          'Learn each verb and its preposition as one block. In formal writing, *chegar* and *assistir* (to watch) take *a*, even though people say *chegar em* and *assistir o*. Others to learn as blocks: *participar de, precisar de, concordar com*.'
        ],
        table: [
          { use: 'preocupar-se com', avoid: 'preocupar-se sobre', why: 'worry about = *com*' },
          { use: 'sonhar com', avoid: 'sonhar em / sobre', why: 'dream of = *com*' },
          { use: 'entregar a / para', avoid: 'entregar com', why: 'hand something to someone' },
          { use: 'chegar a', avoid: 'chegar em', why: 'formal writing: *chegar a Curitiba, ao trabalho*' },
          { use: 'assistir a', avoid: 'assistir o', why: 'to watch a show or game' }
        ]
      },
      {
        type: 'pick', n: 3, from: [
          { type: 'choice', q: 'Which preposition fits?', text: 'Os pais estão preocupados ___ a segurança no transporte escolar.', options: ['com', 'sobre', 'de'], answer: 'com', why: '*Preocupado* takes *com*. *Sobre* is a translation of *about*.' },
          { type: 'choice', q: 'Which preposition fits?', text: 'Desde criança, ela sonha ___ uma viagem ao Japão.', options: ['com', 'em', 'sobre'], answer: 'com', why: '*Sonhar* takes *com*: *sonhar com uma viagem*.' },
          { type: 'choice', q: 'Which option fits?', text: 'O candidato deve entregar os documentos ___ coordenador do curso.', options: ['ao', 'com o', 'no'], answer: 'ao', why: '*Entregar* takes *a* (or *para*): *ao coordenador*.' },
          { type: 'choice', q: 'Which option fits?', text: 'Mais de cem voluntários participaram ___ mutirão de limpeza da praia.', options: ['do', 'ao', 'com o'], answer: 'do', why: '*Participar* takes *de*: *participar do mutirão*.' },
          { type: 'choice', q: 'Which option fits in formal writing?', text: 'Ontem à noite, assistimos ___ jogo do Brasil na casa de amigos.', options: ['ao', 'o'], answer: 'ao', why: 'In formal writing, *assistir* (to watch) takes *a*: *assistimos ao jogo*.' },
          { type: 'choice', q: 'Which preposition fits in formal writing?', text: 'O trem chegou ___ Curitiba com meia hora de atraso.', options: ['a', 'em'], answer: 'a', why: 'In formal writing, *chegar* takes *a*: *chegar a Curitiba*.' }
        ]
      },
      {
        type: 'teach',
        title: 'Crase is a + a',
        body: [
          'The crase *à* is the preposition *a* plus the article *a*. It appears only where both meet: a word that asks for *a*, and a feminine noun that takes *a*.',
          'Test it by swapping in a masculine noun. *Vou ao mercado*, so *vou à feira*. For places, try *voltar de*: *volto da Bahia*, so *vou à Bahia*; *volto de Brasília*, so *vou a Brasília*.',
          'No crase before a masculine noun, a verb, or *uma*: *a pé, começou a chover, entreguei a uma amiga*. Clock times and feminine fixed phrases take it: *às 10h, à noite, à vista*.'
        ],
        examples: [
          { pt: 'Vou ao mercado. Vou à feira.', en: '*ao* before a masculine noun, so *à* before a feminine one' },
          { pt: 'Chegamos a Brasília à noite.', en: '*Brasília* takes no article; *à noite* is a fixed phrase' },
          { pt: 'O museu abre às 9h.', en: 'clock time' },
          { pt: 'Entreguei o relatório à diretora.', en: '*entregar a* + *a diretora*' },
          { pt: 'Fomos a pé.', en: '*pé* is masculine: no crase' }
        ]
      },
      {
        type: 'pick', n: 3, from: [
          { type: 'choice', q: 'Which option fits?', text: 'Amanhã vamos ___ praia com as crianças.', options: ['à', 'a'], answer: 'à', why: 'Swap test: *vamos ao clube*, so *vamos à praia*.' },
          { type: 'choice', q: 'Which option fits?', text: 'O pagamento pode ser feito ___ partir de segunda-feira.', options: ['a', 'à'], answer: 'a', why: 'No crase before a verb: *a partir de*.' },
          { type: 'choice', q: 'Which option fits?', text: 'A reunião com os fornecedores começa ___ 14h.', options: ['às', 'as', 'a'], answer: 'às', why: 'Clock times take the crase: *às 14h*.' },
          { type: 'choice', q: 'Which option fits?', text: 'Neste verão, viajamos ___ Salvador de ônibus.', options: ['a', 'à'], answer: 'a', why: '*Salvador* takes no article (*volto de Salvador*), so there is no crase.' },
          { type: 'choice', q: 'Which option fits?', text: 'A loja só aceita pagamento ___ vista.', options: ['à', 'a'], answer: 'à', why: '*À vista* is a fixed phrase with crase.' },
          { type: 'choice', q: 'Which option fits?', text: 'Enviamos o convite ___ todos os vizinhos.', options: ['a', 'à'], answer: 'a', why: 'No crase before a masculine word: *a todos*.' }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this e-mail to a travel agency.',
        text: 'Prezada Sra. Helena, somos um grupo de doze pessoas e estamos {{preocupados sobre|preocupados com|*Preocupar-se* takes *com*.}} a mudança no roteiro da viagem a Ouro Preto. Na semana passada, entregamos todos os documentos {{com o|ao|*Entregar* takes *a* (or *para*).}} guia, como a agência pediu. Agora a agência informou que a saída será {{as|às|Clock time: *a + as* = *às*.}} 5h da manhã. Gostaríamos de voltar {{à|ao|*Horário* is masculine, so *ao*.}} horário original. Atenciosamente, Grupo Amigos da Serra'
      },
      {
        type: 'fix',
        title: 'Find the 4 mistakes in this blog post about a festival.',
        text: 'Quem {{sonha em|sonha com|*Sonhar* takes *com*.}} um fim de semana de forró e comida típica tem um bom programa neste sábado. O Festival Sanfona Viva acontece no Parque da Cidade, e a entrada é gratuita. Os portões abrem {{as|às|Clock time: *às 16h*.}} 16h. Para {{assistir o|assistir ao|In formal writing, *assistir* (to watch) takes *a*.}} show principal, chegue cedo. Quem for {{à pé|a pé|No crase before a masculine noun: *a pé*.}} pode usar a entrada lateral.'
      },
      {
        type: 'write',
        q: 'Write 2–3 sentences in an e-mail to a course organizer. Say what worries you, that you will hand in a document, and when you will arrive. Use *preocupado com*, *entregar a* and one crase.',
        text: 'Você vai fazer um curso de fotografia no sábado, mas a sua inscrição ainda aparece como pendente no site.',
        model: [
          'Prezado organizador,',
          'Estou preocupado com a minha inscrição no curso de sábado, que ainda aparece como pendente.',
          'Vou entregar o comprovante de pagamento à secretária do curso na sexta-feira.',
          'No sábado, chegarei ao local às 8h30.'
        ],
        check: [
          '*Preocupado com*, not *sobre*',
          '*Entregar a* (or *para*), not *com*',
          'Crase only where *a + a* meet; check with the swap test',
          '*Chegar a*, not *chegar em*'
        ]
      },
      { type: 'drills', modes: ['regencia', 'contracao'], n: 10 },
      { type: 'drills', modes: ['conjugacao'], n: 4 }
    ]
  },

  // ===================== 17. Revisão da unidade =====================
  {
    id: 'l17-revisao-lingua',
    n: 17,
    unit: 4,
    title: 'Revisão da unidade',
    en: 'Catch your gender, accent, verb and preposition slips with one proofreading routine.',
    minutes: 15,
    steps: [
      {
        type: 'teach',
        title: 'Two passes, every time',
        body: [
          'Your language slips fall into four groups: gender, accents, verbs and prepositions. You will not catch them while you write. You catch them after, in two passes.',
          'Pass 1, gender and number: find every noun and check each word tied to it. Pass 2, accents, verbs and crase: read word by word for accents, tildes and *ç*, check that every subject has a conjugated verb, and test each *a* or *à*.',
          'Save five minutes for Tarefas 1 and 2, and up to ten for Tarefas 3 and 4. Those minutes earn more points than an extra paragraph.'
        ]
      },
      {
        type: 'pick', n: 3, from: [
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['A comunidade aprovou a proposta na assembleia.', 'O comunidade aprovou a proposta na assembleia.', 'A comunidade aprovou a proposta na assembléia.'], answer: 'A comunidade aprovou a proposta na assembleia.', why: '-dade nouns are feminine, and *assembleia* has no accent since 2009.' },
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['Os sócios têm até sexta-feira para pagar a mensalidade.', 'Os sócios tem até sexta-feira para pagar a mensalidade.', 'Os sócios têm até sexta-feira para pagar o mensalidade.'], answer: 'Os sócios têm até sexta-feira para pagar a mensalidade.', why: 'A plural subject takes *têm*. *Mensalidade* ends in -dade, so it is feminine.' },
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['Espero que a loja devolva o dinheiro até o fim do mês.', 'Espero que a loja devolve o dinheiro até o fim do mês.', 'Espero que a loja devolver o dinheiro até o fim do mês.'], answer: 'Espero que a loja devolva o dinheiro até o fim do mês.', why: '*Espero que* takes the present subjunctive: *devolva*.' },
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['Estamos preocupados com as mudanças no plano de saúde.', 'Estamos preocupados sobre as mudanças no plano de saúde.', 'Estamos preocupados com os mudanças no plano de saúde.'], answer: 'Estamos preocupados com as mudanças no plano de saúde.', why: '*Preocupado* takes *com*, and *mudança* is feminine: *as mudanças*.' },
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['A excursão chega a Gramado às 10h.', 'A excursão chega à Gramado às 10h.', 'A excursão chega a Gramado as 10h.'], answer: 'A excursão chega a Gramado às 10h.', why: '*Gramado* takes no article (*volto de Gramado*), so no crase. Clock times take *às*.' },
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['Quando você tiver tempo, leia o manual do aparelho.', 'Quando você ter tempo, leia o manual do aparelho.', 'Quando você tiver tempo, lê o manual do aparelho.'], answer: 'Quando você tiver tempo, leia o manual do aparelho.', why: '*Quando* about the future takes *tiver*. Written instructions use *leia*, not *lê*.' },
          { type: 'choice', q: 'Which sentence has no mistakes?', options: ['Doamos os celulares velhos e as TVs velhas para uma escola técnica.', 'Doamos os celulares velhas e as TVs velhos para uma escola técnica.', 'Doamos os celulares velhos e as TVs velhos para uma escola técnica.'], answer: 'Doamos os celulares velhos e as TVs velhas para uma escola técnica.', why: '*Celular* is masculine and *TV* is feminine, so each adjective follows its own noun.' }
        ]
      },
      {
        type: 'fix',
        title: 'Find the 5 mistakes in this complaint to an online store.',
        text: 'Prezados senhores, no dia 2 de setembro, comprei {{um geladeira|uma geladeira|*Geladeira* is feminine.}} no site da Casa Norte. A entrega estava marcada para o dia 10, mas o produto ainda não chegou. Os atendentes {{tem|têm|The subject is plural: *têm*.}} dado respostas diferentes a cada ligação. Estou {{preocupada sobre|preocupada com|*Preocupar-se* takes *com*.}} o prazo. Peço que a loja {{entrega|entregue|After *peço que*: subjunctive.}} a geladeira ou devolva o valor pago. Caso contrário, vou registrar uma queixa no {{orgão|órgão|Stress on the second-to-last syllable, ending in *-ão*: accent.}} de defesa do consumidor. Atenciosamente, Cliente do pedido 4471'
      },
      {
        type: 'fix',
        title: 'Find the 5 mistakes in this notice from a public pool.',
        text: 'Aviso aos usuários da piscina municipal. A partir de 1º de dezembro, {{o nova regra|a nova regra|*Regra* is feminine, and so are its article and adjective.}} de horários entra em vigor. As aulas de natação para idosos {{passar|passam|The subject *as aulas* needs a conjugated verb.}} para as 7h. {{Traz|Traga|Notice imperative with *você*: *traga*.}} a carteirinha e um atestado médico atualizado. O vestiário fecha {{as|às|Clock time: *às 21h*.}} 21h. Dúvidas? Fale com a equipe na {{recepçao|recepção|Keep the tilde in *-ção*.}}.'
      },
      {
        type: 'pick', n: 1, from: [
          {
            type: 'fix',
            title: 'Find the 4 mistakes in this e-mail to a landlord.',
            text: 'Prezado Sr. Otávio, escrevo sobre o apartamento da Rua das Acácias. Desde {{o semana|a semana|*Semana* is feminine.}} passada, a descarga do banheiro não funciona. As paredes da cozinha também estão {{úmidos|úmidas|The adjective agrees with *paredes*, feminine plural.}}. É importante que o senhor {{envia|envie|After *é importante que*: subjunctive.}} um encanador ainda esta semana. Posso entregar a chave reserva {{com o|ao|*Entregar* takes *a* (or *para*).}} encanador. Atenciosamente, Inquilina do apartamento 302'
          },
          {
            type: 'fix',
            title: 'Find the 4 mistakes in this news item.',
            text: 'Estudantes de Vale Verde criam aplicativo para idosos. Três alunas do ensino médio desenvolveram {{um ferramenta|uma ferramenta|*Ferramenta* is feminine.}} que lembra os usuários de tomar os remédios na hora certa. O projeto foi {{apresentada|apresentado|The participle agrees with *projeto*, masculine.}} em uma feira de ciências na semana passada. Segundo a professora, a {{idéia|ideia|No accent since 2009.}} surgiu em uma aula de biologia. Agora, as alunas {{sonham em|sonham com|*Sonhar* takes *com*.}} uma bolsa para continuar o trabalho.'
          },
          {
            type: 'fix',
            title: 'Find the 4 mistakes in this travel blog post.',
            text: 'Passei três dias na Serra do Mirante e voltei encantado. {{O paisagem|A paisagem|Nouns in -gem are feminine.}} muda a cada curva da estrada. No segundo dia, começamos {{à subir|a subir|No crase before a verb.}} às 6h. A trilha é {{dificil|difícil|Stress on the second-to-last syllable, ending in *-l*: accent.}}, mas os guias da região {{conhece|conhecem|The subject *os guias* is plural.}} cada pedra do caminho. Vale cada gota de suor.'
          }
        ]
      },
      {
        type: 'write',
        q: 'Write the opening of a letter to your city council members in 2–3 sentences: say which law you support, why it matters where you live, and what you hope happens next. Do both passes before you compare.',
        text: 'A Câmara Municipal aprovou uma lei que cria hortas comunitárias em terrenos vazios.',
        model: [
          'Prezados vereadores,',
          'Escrevo para apoiar a lei aprovada na semana passada, que cria hortas comunitárias em terrenos vazios.',
          'Há muitos terrenos abandonados na minha região, e as famílias sonham com um espaço para plantar.',
          'Espero que a prefeitura divulgue as regras de inscrição o quanto antes.'
        ],
        check: [
          'Gender: *a lei aprovada, as hortas comunitárias*',
          'Accents: *há, famílias, região*',
          'Verbs: *espero que* + subjunctive',
          'Prepositions: *sonham com*',
          'You did both passes before comparing'
        ]
      },
      { type: 'drills', modes: ['genero', 'acento', 'conjugacao', 'regencia', 'contracao'], n: 10 },
      { type: 'drills', modes: ['abertura'], n: 4 },
      { type: 'prompt', id: 'v-feira-livre', note: 'Tarefa 4 blog post: write it by hand in 45 minutes, then do both proofreading passes (gender and number, then accents, verbs and crase) before you send the photo.' }
    ]
  }
);
