window.CB = window.CB || {};
CB.openings = {
  intro: 'On Celpe-Bras, the greeting and the closing are genre markers. In two lines they show the grader that you understood who is writing, who is reading and how formal the text must be. A strong body under *Oi, pessoal* in a complaint to a company still loses points for context.',

  ladder: [
    { pt: 'Prezado Senhor Secretário,', level: 'Most formal', use: 'A named office holder you address by title: a municipal secretary, a mayor, a judge. Use *Prezada Senhora Secretária* for a woman.' },
    { pt: 'Prezados senhores,', level: 'Formal', use: 'A company, an ouvidoria or a public office when you do not know who will read it. The safe default for any formal letter or e-mail.' },
    { pt: 'Prezada Sra. Helena Duarte,', level: 'Formal', use: 'A named person you do not know well: a manager at another company, a school director, a landlord.' },
    { pt: 'Senhores pais e responsáveis,', level: 'Formal', use: 'A group addressed by an institution in a notice or circular: parents, residents (*Senhores moradores*), employees (*Prezados colaboradores*).' },
    { pt: 'Caros vizinhos,', level: 'Semi-formal', use: 'A group you belong to, in an invitation or community message. Also *Caro Roberto* to a colleague you know but are not close to.' },
    { pt: 'Bom dia, Fernanda,', level: 'Neutral', use: 'A work e-mail to a manager or colleague you write to every day. *Olá, Fernanda* works the same way.' },
    { pt: 'Querida Ana,', level: 'Informal', use: 'A friend or relative, in a warm personal e-mail. *Querido* for a man. Never in a formal letter.' },
    { pt: 'Oi, Tom!', level: 'Most informal', use: 'A close friend. The standard opening for the personal e-mail on the exam.' }
  ],

  situations: [
    {
      id: 'orgao-publico',
      title: 'A public office',
      genres: ['solicitacao', 'reclamacao'],
      reader: 'A civil servant at the prefeitura, a secretaria or another public body who handles requests from citizens. They expect formal written Portuguese, the office named in the third person (*a Secretaria*, *a Prefeitura*) and a clear request.',
      greeting: ['Prezados senhores,', 'Prezado Senhor Secretário,', 'Prezada Senhora Secretária,'],
      opening: [
        'Sou morador do bairro Jardim Aurora e escrevo para solicitar...',
        'Escrevo em nome dos moradores da Rua das Palmeiras para pedir...',
        'Venho, por meio deste e-mail, solicitar...'
      ],
      closingLines: [
        'Agradeço a atenção e fico à disposição para mais informações.',
        'Aguardo um retorno sobre as providências que serão tomadas.',
        'Desde já, agradeço a atenção.'
      ],
      signoff: ['Atenciosamente,', 'Cordialmente,'],
      signature: ['Um morador do Jardim Aurora', 'Uma moradora da Rua das Palmeiras', 'Associação de Moradores da Vila Serena'],
      avoid: [
        { bad: 'Olá, Prefeitura!', why: '*Olá* and the exclamation mark belong to friendly messages. An office gets *Prezados senhores*.' },
        { bad: 'Quero que vocês consertem o buraco da minha rua.', why: '*Quero* sounds like an order, and *vocês* treats the office as friends. Write *solicito o conserto* and name *a Prefeitura* in the third person.' },
        { bad: 'Att.', why: 'Write the closing out in full: *Atenciosamente*. Abbreviations look careless in a formal text.' }
      ],
      example: {
        opening: 'Sou morador da Rua das Palmeiras, no bairro Jardim Aurora, e escrevo para solicitar a instalação de uma faixa de pedestres em frente à Escola Municipal Vale Verde.',
        closing: 'Agradeço a atenção e fico à disposição para mais informações.\nAtenciosamente,\nUm morador do Jardim Aurora'
      }
    },
    {
      id: 'empresa-sac',
      title: 'A company\'s customer service',
      genres: ['reclamacao', 'solicitacao'],
      reader: 'An agent at the SAC or the ouvidoria who reads dozens of complaints a day. They expect a formal, firm and factual message that identifies the order or contract at once. Refer to the company in the third person (*a empresa*, *a loja*), never as *vocês*.',
      greeting: ['Prezados senhores,', 'Prezada equipe de atendimento,', 'À Ouvidoria da Loja Casa Bela'],
      opening: [
        'Sou cliente da NetVale há três anos e escrevo para registrar uma reclamação sobre...',
        'Escrevo para relatar um problema com o pedido nº 45872, feito no dia 3 de março.',
        'Venho registrar minha insatisfação com o atendimento recebido na loja do Shopping Central.'
      ],
      closingLines: [
        'Aguardo uma solução no prazo de cinco dias úteis.',
        'Caso o problema não seja resolvido, registrarei uma reclamação no Procon.',
        'Solicito também uma resposta por escrito.'
      ],
      signoff: ['Atenciosamente,'],
      signature: ['Cliente do pedido nº 45872', 'Titular do contrato nº 118.204'],
      avoid: [
        { bad: 'Oi, pessoal,', why: 'Spoken and chummy. A complaint that wants to be taken seriously opens with *Prezados senhores*.' },
        { bad: 'Querida loja,', why: '*Querida* is for people you love. It reads as sarcasm in a complaint.' },
        { bad: 'Vocês são uma empresa desonesta!', why: 'Insults and exclamation marks weaken the complaint. State the facts and what you want done.' }
      ],
      example: {
        opening: 'Sou cliente da Loja Casa Bela e escrevo para registrar uma reclamação sobre o pedido nº 45872, entregue com defeito no dia 12 de maio.',
        closing: 'Aguardo a troca do produto no prazo de cinco dias úteis. Caso contrário, registrarei uma reclamação no Procon.\nAtenciosamente,\nCliente do pedido nº 45872'
      }
    },
    {
      id: 'jornal-revista',
      title: 'Newspaper or magazine editors',
      genres: ['carta-do-leitor'],
      reader: 'The editors of a newspaper, magazine or news site, and through them the other readers. They expect a formal letter that names the article it answers and speaks of the paper in the third person.',
      greeting: ['Prezados editores,', 'Prezada redação,', 'Senhor editor,'],
      opening: [
        'Li com atenção a reportagem "...", publicada na edição de domingo, e gostaria de comentá-la.',
        'Escrevo a respeito da reportagem sobre..., publicada em 5 de junho.',
        'Como leitor da revista há muitos anos, gostaria de manifestar minha opinião sobre...'
      ],
      closingLines: [
        'Espero que o jornal continue a acompanhar esse tema.',
        'Agradeço o espaço e parabenizo a equipe pela reportagem.',
        'Espero que esta carta contribua para o debate.'
      ],
      signoff: ['Atenciosamente,'],
      signature: ['Um leitor de Campinas', 'Uma leitora de Sorocaba', 'Um professor de Juiz de Fora'],
      avoid: [
        { bad: 'Olá, Gazeta!', why: '*Olá* signals a friendly message, not a letter to the editor.' },
        { bad: 'Querido editor,', why: '*Querido* is for friends and family. The paper gets *Prezados editores*.' },
        { bad: 'Vi a matéria de vocês e achei ótima.', why: 'Vague and spoken. Name the article and the edition, and speak of *a reportagem* and *o jornal* in the third person.' }
      ],
      example: {
        opening: 'Li com atenção a reportagem "Ônibus lotados no horário de pico", publicada na edição de domingo, e gostaria de comentar o problema como passageiro diário da linha 204.',
        closing: 'Espero que o jornal continue a acompanhar esse tema.\nAtenciosamente,\nUm leitor de Campinas'
      }
    },
    {
      id: 'escola-direcao',
      title: 'A school\'s direction or coordination',
      genres: ['solicitacao', 'reclamacao'],
      reader: 'The director or a coordinator of a school, reading a message from a parent or a student. They expect a formal, respectful message that says whose parent you are and what you want.',
      greeting: ['Prezada Direção,', 'Prezada Coordenação,', 'Prezada Senhora Diretora,'],
      opening: [
        'Sou pai de uma aluna do 7º ano A e escrevo para solicitar...',
        'Sou mãe do aluno Pedro, do 5º ano B, e gostaria de conversar sobre...',
        'Escrevo em nome dos pais do 3º ano para sugerir...'
      ],
      closingLines: [
        'Agradeço a atenção e fico à disposição para conversar pessoalmente.',
        'Aguardo o retorno da escola.',
        'Desde já, agradeço a atenção.'
      ],
      signoff: ['Atenciosamente,', 'Cordialmente,'],
      signature: ['Pai de uma aluna do 7º ano A', 'Mãe do aluno Pedro, 5º ano B', 'Comissão de Pais do 3º ano'],
      avoid: [
        { bad: 'Oi, tia!', why: '*Tia* is how small children address their teachers. A parent writing to the direction uses *Prezada*.' },
        { bad: 'Querida diretora,', why: 'Too intimate for a formal request, even if you know her well.' },
        { bad: 'Vocês precisam resolver isso já!', why: 'An order with an exclamation mark. Use *solicito que a escola...* and a reasonable deadline.' }
      ],
      example: {
        opening: 'Sou pai de uma aluna do 7º ano A e escrevo para solicitar que a escola ofereça um espaço seguro para os alunos guardarem as bicicletas.',
        closing: 'Agradeço a atenção e fico à disposição para conversar pessoalmente.\nAtenciosamente,\nPai de uma aluna do 7º ano A'
      }
    },
    {
      id: 'trabalho',
      title: 'Your boss or a company department',
      genres: ['solicitacao'],
      reader: 'Your manager, HR, finance or another department. Work e-mail in Brazil is courteous and direct. Write formally to a department or a boss you rarely write to, and semi-formally to a manager you work with every day. First names are normal in both cases.',
      greeting: ['Prezada Fernanda,', 'Prezada equipe de Recursos Humanos,', 'Bom dia, Fernanda,', 'Olá, Fernanda,'],
      opening: [
        'Escrevo para solicitar dois dias de folga em novembro.',
        'Gostaria de pedir a sua autorização para...',
        'Em resposta ao seu e-mail de ontem, envio...',
        'Conforme combinado na reunião de segunda-feira, envio...'
      ],
      closingLines: [
        'Fico à disposição para qualquer esclarecimento.',
        'Aguardo o seu retorno.',
        'Desde já, agradeço.'
      ],
      signoff: ['Atenciosamente,', 'Cordialmente,', 'Abraços,'],
      signature: ['Rafael Souza, Analista de Compras', 'Equipe de Vendas, filial Campinas'],
      avoid: [
        { bad: 'Beijos,', why: '*Beijos* is for friends and family. With a colleague or a boss, close with *Atenciosamente*, or *Abraços* if you already write to each other informally.' },
        { bad: 'Oi, chefe!', why: '*Chefe* as a greeting is spoken and a little joking. Greet your manager by first name.' },
        { bad: 'Att.', why: 'Common in real office e-mail, but on the exam write *Atenciosamente* in full.' }
      ],
      example: {
        opening: 'Escrevo para solicitar dois dias de folga, 14 e 15 de novembro, para acompanhar a mudança da minha família.',
        closing: 'Organizei as minhas tarefas para que o setor não seja prejudicado. Fico à disposição para qualquer esclarecimento.\nAtenciosamente,\nRafael Souza\nAnalista de Compras'
      }
    },
    {
      id: 'aviso-grupo',
      title: 'Residents or employees as a group',
      genres: ['aviso'],
      reader: 'A whole group: the residents of a building, the parents of a school, the employees of a company. The text speaks for the institution in the plural (*informamos*, *solicitamos*) and addresses everyone at once. The closing line can stand alone before the signature, or be followed by *Atenciosamente*.',
      greeting: ['Senhores moradores,', 'Senhores pais e responsáveis,', 'Prezados colaboradores,', 'Prezadas famílias,'],
      opening: [
        'Informamos que, a partir de segunda-feira, 3 de março, ...',
        'Comunicamos aos moradores que...',
        'Em razão da reforma da garagem, informamos que...'
      ],
      closingLines: [
        'Contamos com a colaboração de todos.',
        'Agradecemos a compreensão.',
        'Pedimos desculpas pelo transtorno.',
        'Em caso de dúvidas, procurem a administração.'
      ],
      signoff: ['Atenciosamente,'],
      signature: ['A Direção', 'A Administração do Condomínio Solar das Flores', 'O Síndico', 'Departamento de Recursos Humanos'],
      avoid: [
        { bad: 'Oi, gente!', why: 'Spoken and personal. A notice addresses the group formally: *Senhores moradores*.' },
        { bad: 'Eu, o síndico, peço que...', why: 'A notice speaks for the institution in the plural (*solicitamos que*) and is signed by the role.' },
        { bad: 'Pessoal, por favor, não deixa o lixo no corredor.', why: 'Singular spoken imperative. Address the group and use the plural: *Solicitamos que não deixem o lixo no corredor*.' }
      ],
      example: {
        opening: 'Informamos que, no dia 18 de março, o abastecimento de água será interrompido das 8h às 17h para a limpeza das caixas-d\'água.',
        closing: 'Pedimos que os moradores armazenem água para esse período. Agradecemos a compreensão de todos.\nA Administração\nCondomínio Solar das Flores'
      }
    },
    {
      id: 'convite-grupo',
      title: 'A group invitation',
      genres: ['convite'],
      reader: 'Neighbors, school families or colleagues invited to an event. Warm but written: the organizers speak as *nós*, the readers are *vocês*, and instructions go in the plural imperative (*venham*, *tragam*). A formal event (a ceremony, a company launch) moves to *os senhores* and *temos a honra de convidar*.',
      greeting: ['Caros vizinhos,', 'Queridas famílias,', 'Caros colegas,'],
      opening: [
        'A Associação de Moradores convida todos os vizinhos para...',
        'Temos o prazer de convidar vocês para...',
        'Venham participar do nosso mutirão de limpeza, no domingo, 9 de novembro, às 8h.'
      ],
      closingLines: [
        'Contamos com a presença de vocês!',
        'Tragam a família e os amigos!',
        'Confirmem a presença até o dia 5 pelo WhatsApp da associação.'
      ],
      signoff: ['Até lá!', 'Esperamos vocês!'],
      signature: ['Diretoria da Associação de Moradores', 'Comissão de Festas da Escola Vila Serena', 'Equipe do Clube de Leitura'],
      avoid: [
        { bad: 'Oi, galera!', why: 'Slang. An invitation posted on a notice board or sent to a group is warm but written: *Caros vizinhos*.' },
        { bad: 'Prezados senhores,', why: 'Too stiff for neighbors. It turns an invitation into an official letter.' },
        { bad: 'Venham e traz um prato de doce.', why: 'Mixed imperatives. With *vocês*, every verb takes the plural form: *venham e tragam*.' }
      ],
      example: {
        opening: 'A Associação de Moradores do Jardim Aurora convida todos os vizinhos para a Festa da Primavera, no sábado, 21 de setembro, a partir das 15h, na praça central do bairro.',
        closing: 'Tragam um prato de doce ou salgado para dividir. Contamos com a presença de vocês!\nDiretoria da Associação de Moradores do Jardim Aurora'
      }
    },
    {
      id: 'blog-folheto',
      title: 'Blog or flyer readers',
      genres: ['blog', 'folheto'],
      reader: 'The general public or a blog\'s readers. There is no greeting line: a title opens the text, and the first sentence speaks straight to the reader as *você*, often with a question. The end is a call to act or to comment, not a letter closing.',
      greeting: ['Nenhuma: o título abre o texto.'],
      opening: [
        'Você já reparou que...?',
        'Você sabia que...?',
        'Se você mora no Jardim Aurora, este post é para você.'
      ],
      closingLines: [
        'E você, tem outra dica? Conte nos comentários!',
        'Compartilhe este post com os seus vizinhos.',
        'Venha doar e traga um amigo.'
      ],
      signoff: ['Até o próximo post!', 'Participe!'],
      signature: ['Marina, do blog Pedal no Bairro', 'Campanha do Grupo de Voluntários do Hospital Vale Verde'],
      avoid: [
        { bad: 'Prezados leitores,', why: 'A letter greeting on a blog post or a flyer sounds stiff. Open with the title and a question to *você*.' },
        { bad: 'Olá, galera! Tudo em cima?', why: 'Slang. The friendly tone comes from *você*, questions and short sentences, not from speech.' },
        { bad: 'Atenciosamente,', why: 'A letter closing. A blog post ends with a call to comment, and a flyer with a call to act.' }
      ],
      example: {
        opening: 'Você já tentou achar uma vaga para a sua bicicleta no Centro num sábado de manhã? Quem pedala pelo bairro sabe que o problema piorou este ano.',
        closing: 'E você, onde deixa a sua bicicleta? Conte nos comentários!\nMarina, do blog Pedal no Bairro'
      }
    },
    {
      id: 'amigo',
      title: 'A friend or relative',
      genres: ['email-pessoal'],
      reader: 'A friend or relative. Informal: first names, *você*, exclamations, and speech forms such as *a gente*, *pra* and *tá*. Spelling, accents and agreement still count.',
      greeting: ['Oi, Tom!', 'Querida Ana,', 'Olá, Jake!'],
      opening: [
        'Tudo bem com você?',
        'Que saudade! Faz tempo que a gente não se fala.',
        'Espero que você esteja bem.',
        'Fiquei muito feliz com a notícia do seu novo emprego!'
      ],
      closingLines: [
        'Me conta o que você acha!',
        'Responde quando puder!',
        'Estou com saudade. Vamos nos ver logo!'
      ],
      signoff: ['Um abraço,', 'Abraços,', 'Beijos,', 'Um beijo,'],
      signature: ['Rafa', 'Bia', 'Seu amigo, Rafa'],
      avoid: [
        { bad: 'Prezado Tom,', why: 'A formal greeting to a close friend sounds cold and misses the register.' },
        { bad: 'Atenciosamente,', why: 'An office closing. To a friend it sounds like a bank writing to him.' },
        { bad: 'Espero que você está bem.', why: '*Esperar que* takes the subjunctive, even in an informal e-mail: *esteja*.' }
      ],
      example: {
        opening: 'Tudo bem por aí? Fiquei muito feliz com a notícia do seu novo emprego!',
        closing: 'Me conta como estão as coisas por aí, tá? Estou com saudade!\nUm abraço,\nRafa'
      }
    }
  ],

  phrases: {
    purpose: [
      { pt: 'Escrevo para...', en: 'I am writing to...' },
      { pt: 'Escrevo com o objetivo de...', en: 'I am writing in order to...' },
      { pt: 'Escrevo em nome dos moradores da Rua das Palmeiras para...', en: 'I am writing on behalf of the residents of Rua das Palmeiras to...' },
      { pt: 'Venho, por meio deste e-mail, solicitar...', en: 'I am writing, by means of this e-mail, to request... (formal and a little stiff)' },
      { pt: 'Gostaria de manifestar minha opinião sobre...', en: 'I would like to express my opinion about...' },
      { pt: 'Gostaria de registrar uma reclamação sobre...', en: 'I would like to file a complaint about...' },
      { pt: 'O motivo deste e-mail é...', en: 'The reason for this e-mail is...' },
      { pt: 'Informamos que...', en: 'We inform you that... (notices, in the name of an institution)' }
    ],
    reference: [
      { pt: 'Em resposta ao seu e-mail de 10 de maio,...', en: 'In reply to your e-mail of May 10,...' },
      { pt: 'Com relação à reportagem "...", publicada em 5 de junho,...', en: 'Regarding the article "...", published on June 5,...' },
      { pt: 'A respeito do pedido nº 45872,...', en: 'Regarding order no. 45872,...' },
      { pt: 'Li com atenção a reportagem sobre...', en: 'I read the article about... carefully.' },
      { pt: 'Conforme combinado na reunião de ontem,...', en: 'As agreed at yesterday\'s meeting,...' },
      { pt: 'Conforme informado anteriormente,...', en: 'As previously stated,...' },
      { pt: 'Retomo o contato feito por telefone no dia 3 de abril.', en: 'I am following up on the phone call of April 3.' },
      { pt: 'Em relação à sua solicitação,...', en: 'With regard to your request,...' }
    ],
    request: [
      { pt: 'Solicito que a Secretaria envie um técnico ao local.', en: 'I request that the department send a technician to the site. (*Solicitar que* takes the subjunctive.)' },
      { pt: 'Gostaria de pedir que o horário seja revisto.', en: 'I would like to ask that the schedule be reviewed.' },
      { pt: 'Seria possível adiar a entrega para sexta-feira?', en: 'Would it be possible to postpone the delivery to Friday?' },
      { pt: 'Peço, por gentileza, que me enviem a nota fiscal.', en: 'I kindly ask you to send me the invoice.' },
      { pt: 'Gostaria de saber se há vagas na turma da manhã.', en: 'I would like to know if there are openings in the morning class.' },
      { pt: 'Poderiam me informar o prazo de entrega?', en: 'Could you tell me the delivery time?' },
      { pt: 'Venho solicitar a instalação de uma lombada.', en: 'I am writing to request the installation of a speed bump.' },
      { pt: 'Solicitamos que os moradores retirem as bicicletas do corredor.', en: 'We ask residents to remove their bicycles from the hallway. (notices)' }
    ],
    closing: [
      { pt: 'Agradeço a atenção.', en: 'Thank you for your attention.' },
      { pt: 'Desde já, agradeço.', en: 'Thank you in advance.' },
      { pt: 'Fico à disposição para mais informações.', en: 'I am available for any further information.' },
      { pt: 'Aguardo o seu retorno.', en: 'I look forward to your reply.' },
      { pt: 'Aguardo uma resposta até o dia 20.', en: 'I expect a reply by the 20th.' },
      { pt: 'Conto com a sua compreensão.', en: 'I count on your understanding.' },
      { pt: 'Contamos com a colaboração de todos.', en: 'We count on everyone\'s cooperation. (notices)' },
      { pt: 'Agradecemos a compreensão.', en: 'We appreciate your understanding. (notices)' },
      { pt: 'Espero ter contribuído para o debate.', en: 'I hope I have contributed to the debate. (letters to the editor)' }
    ]
  },

  traps: [
    { bad: 'Querido editor,', good: 'Prezado editor,', why: '*Querido* is for people you love. In a formal letter it sounds odd or even sarcastic.' },
    { bad: 'Olá, Secretaria de Obras!', good: 'Prezados senhores,', why: '*Olá* and an exclamation mark belong to friendly messages. A public office gets a formal greeting.' },
    { bad: 'Oi, pessoal,', good: 'Prezados senhores,', why: 'Writing to a company as if it were a group of friends misses the register of a complaint or request.' },
    { bad: 'Att. / Atte.', good: 'Atenciosamente,', why: 'The abbreviations are common in real office e-mail, but on the exam they look careless. Write the word out.' },
    { bad: 'Solicito a Vossa Senhoria que...', good: 'Solicito à Secretaria que...', why: '*Vossa Senhoria* survives in official government correspondence, but in an exam letter it sounds dated. It also takes third-person verbs, which is easy to get wrong. Name the office or use *o senhor*.' },
    { bad: 'Beijos, (a um colega de trabalho)', good: 'Atenciosamente,', why: '*Beijos* is for friends and family. With a colleague use *Atenciosamente*, or *Abraços* if you already write to each other informally.' },
    { bad: 'Obrigado pelo atenção.', good: 'Obrigado pela atenção.', why: '*Atenção* is feminine, like every *-ção* noun. *Obrigado* agrees with the writer: a woman writes *Obrigada*.' },
    { bad: 'Espero que você está bem.', good: 'Espero que você esteja bem.', why: '*Esperar que* takes the present subjunctive, even in a friendly e-mail.' },
    { bad: '(o seu nome verdadeiro)', good: 'Um morador do Jardim Aurora', why: 'Never sign with your real name. Sign with the role the prompt gives you or an invented name.' },
    { bad: 'Prezado Senhor, gostaria de saber se você pode me atender.', good: 'Prezado Senhor, gostaria de saber se o senhor pode me atender.', why: 'Once you open with *Senhor*, keep *o senhor* to the end. Switching to *você* mixes two registers in one text.' },
    { bad: 'Venho por meio desta solicitar...', good: 'Escrevo para solicitar...', why: 'Acceptable in a printed letter to a public office, with commas around *por meio desta*. It is stiff, though, and *desta* means *desta carta*, so an e-mail needs *deste e-mail*. Never use it to a friend or on a blog.' },
    { bad: 'Mas o serviço continua ruim.', good: 'Escrevo para informar que o serviço continua ruim.', why: 'Opening a formal text with *Mas* assumes a conversation the reader never had. Start by saying who you are and why you write.' }
  ]
};
