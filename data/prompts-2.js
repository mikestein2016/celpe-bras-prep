window.CB = window.CB || {};
CB.prompts = CB.prompts || [];
CB.prompts.push(
  {
    id: "o-catadores",
    label: "O",
    title: "Os catadores do carnaval",
    genre: "carta-do-leitor",
    task: 1,
    minutes: 30,
    source: {
      kind: "video",
      title: "Reportagem do telejornal local",
      body: [
        "Apresentadora: O carnaval de rua deste ano levou milhares de foliões aos blocos da cidade. Mas, quando a festa acaba, começa o trabalho de quem quase ninguém vê. O repórter Caio Nunes acompanhou os catadores da Cooperativa Recicla Vida.",
        "Repórter: São cinco da manhã, e o último bloco acabou de passar pela Avenida Beira-Rio. No chão, sobram latas, garrafas e copos plásticos. Em quatro dias de festa, os sessenta cooperados recolheram dezoito toneladas de latas de alumínio e garrafas PET. Esse material deixou de ir para o aterro e vai ser vendido para a indústria de reciclagem.",
        "Rosana Lima, presidente da cooperativa: A gente trabalha a noite inteira, atrás dos blocos. Tem colega que anda mais de vinte quilômetros por dia. O carnaval é a época em que a gente mais ganha, mas é também a mais pesada.",
        "Repórter: A renda dos catadores vem da venda do material. Mesmo assim, a cooperativa enfrenta dificuldades. O galpão onde eles separam as latas é pequeno e cheio de goteiras, e o grupo precisa alugar um caminhão para levar tudo até a empresa compradora.",
        "Rosana: O que a gente pede é simples: um galpão maior, um caminhão próprio e luva e bota pra todo mundo, porque nem todo mundo tem. E que a prefeitura pague pelo serviço. A gente limpa a cidade, e ninguém paga a gente por isso.",
        "Sérgio, morador da avenida: De manhã cedo, quando eu saí pra trabalhar, a rua já estava limpa. Muita gente nem sabe quem faz isso.",
        "Repórter: Em nota, a prefeitura informou que estuda ampliar a parceria com as cooperativas de reciclagem, mas não deu prazo."
      ],
      note: "Stands in for a video: read it once, cover it, then write."
    },
    prompt: "Você mora na Avenida Beira-Rio, por onde passam os principais blocos de carnaval da sua cidade. O jornal Diário do Vale publicou um balanço do carnaval que elogiou a organização da festa, mas não mencionou o trabalho dos catadores. Com base na reportagem, escreva uma carta do leitor ao jornal reconhecendo a importância do trabalho da Cooperativa Recicla Vida, relatando as dificuldades que os cooperados enfrentam e pedindo à prefeitura um apoio concreto para a cooperativa.",
    checklist: [
      "Carta do leitor format: place and date, *Prezados editores,*, a first line that names the paper's carnival review, *Atenciosamente* and a role signature (*Um morador da Avenida Beira-Rio*).",
      "Written by a resident of the avenue to the paper and its readers. The position comes early (the review left out the people who cleaned the streets) and is backed by his own experience (the street was clean the next morning).",
      "Recognizes the work with facts in new words: sixty members, four days of carnival, eighteen tons of cans and PET bottles sold for recycling instead of going to the landfill, work through the night behind the blocos, some walking more than 20 km a day.",
      "Reports the difficulties: a small warehouse full of leaks, a rented truck, not enough gloves and boots, and no payment from the city for the service.",
      "Asks the prefeitura for concrete support (a bigger warehouse, a truck, protective equipment, payment for the cleaning) and answers its statement that it is studying the partnership with no deadline.",
      "Formal register: *há*, not *tem*; *nós*, not *a gente*; *No entanto* instead of an opening *Mas*. The letter states the facts directly and never mentions a TV report."
    ]
  },
  {
    id: "p-ansiedade-provas",
    label: "P",
    title: "Ansiedade antes do vestibular",
    genre: "email-pessoal",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Entrevista no programa Saúde em Dia, da Rádio Vale FM",
      body: [
        "Locutora: Faltam poucas semanas para os vestibulares, e muitos estudantes estão nervosos. Para falar sobre isso, recebemos a psicóloga Renata Figueiredo. Renata, ficar ansioso antes da prova é normal?",
        "Renata: É normal, sim. Um pouco de ansiedade até ajuda, porque deixa a pessoa mais atenta. O problema é quando ela atrapalha: o estudante não consegue dormir, sente dor de barriga, chora com facilidade ou tem um branco na hora de estudar.",
        "Locutora: E o que ajuda?",
        "Renata: A primeira coisa é o sono. Um adolescente precisa de oito a dez horas por noite. Estudar de madrugada parece uma boa ideia, mas é enquanto a gente dorme que o cérebro guarda o que aprendeu. Então virar a noite na véspera é o pior que se pode fazer.",
        "Locutora: E como organizar o estudo?",
        "Renata: Em blocos. Estuda uns cinquenta minutos e para dez. Nessa pausa, levanta, anda um pouco, bebe água, mas longe do celular. E meia hora de caminhada ou de qualquer exercício por dia ajuda muito a baixar a tensão.",
        "Locutora: E a alimentação?",
        "Renata: Refeições leves, em horários regulares. Muito café e muito energético deixam a pessoa mais agitada. No dia da prova, coma o que você já está acostumado a comer, nada de novidade. E leve água e um lanche, uma fruta, uma barra de cereal.",
        "Locutora: Alguma dica para a véspera?",
        "Renata: Descansa. Separa o documento com foto e a caneta de tinta preta, confere o endereço do local e sai de casa com antecedência. Se der um branco durante a prova, respira fundo: puxa o ar contando até quatro e solta contando até quatro. Pula a questão e volta nela depois. E conversa com alguém de confiança. Uma prova é importante, mas não define a vida de ninguém."
      ],
      note: "Stands in for a recording: read it once, cover it, then write."
    },
    prompt: "Sua sobrinha Lívia, de 17 anos, vai fazer o vestibular daqui a duas semanas. A mãe dela contou a você que Lívia está muito ansiosa, dormindo mal e estudando até de madrugada. Com base na entrevista, escreva um e-mail para Lívia tranquilizando-a e dando conselhos sobre o sono, a organização dos estudos, a alimentação e a véspera e o dia da prova.",
    checklist: [
      "Personal e-mail format: a short subject, *Oi, Lívia!* or *Querida Lívia,*, an informal closing (*Um beijo*, *Beijos*) and a family signature (*Tia Márcia*, *Seu tio Paulo*).",
      "Written by an aunt or uncle who heard about the stress from Lívia's mother. The e-mail opens with affection and reassurance before the advice and answers her real problems (poor sleep, studying late at night).",
      "Reassures with the psychologist's points in new words: some anxiety is normal and helps you pay attention, it becomes a problem when it takes away sleep or blocks studying, and one exam does not define a life.",
      "Sleep and study, with source facts: eight to ten hours a night, no studying until dawn and no all-nighter before the exam because the brain stores what you learned while you sleep; blocks of about 50 minutes with 10-minute breaks away from the phone; half an hour of exercise a day.",
      "Food and the exam: light, regular meals, less coffee and energy drinks, familiar food on the day, water and a snack; the day before, rest, pack the photo ID and a black pen, check the address and leave early; if her mind goes blank, breathe counting to four, skip the question and come back to it.",
      "Warm informal register with *você*. Light spoken touches are fine, but accents, agreement and the imperative forms stay standard, and there is no mention of a radio program."
    ]
  },
  {
    id: "q-bike-trabalho",
    label: "Q",
    title: "De bicicleta para o trabalho",
    genre: "artigo-opiniao",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Pedalar até o trabalho: a empresa pode ajudar",
      body: [
        "Em várias cidades brasileiras, cresce o número de pessoas que trocam o carro ou o ônibus pela bicicleta para ir ao trabalho. Algumas empresas perceberam essa mudança e passaram a incentivá-la. Instalaram bicicletários, criaram vestiários com chuveiros e armários e, em alguns casos, oferecem um pequeno bônus a quem vai trabalhar pedalando.",
        "As vantagens aparecem dos dois lados. Para o funcionário, a bicicleta é uma forma de fazer exercício todos os dias sem pagar academia, além de economizar combustível ou passagem. Em trajetos curtos, ela também torna o horário de chegada mais previsível, porque não fica presa no trânsito. Para a empresa, funcionários mais ativos tendem a ter mais disposição, e cada vaga de carro pode abrigar várias bicicletas. Na Metalúrgica Serra Azul, que instalou um bicicletário coberto e dois vestiários, o número de funcionários que vão trabalhar de bicicleta passou de 12 para 50 em um ano.",
        "Os obstáculos, porém, são reais. Muitas cidades ainda têm poucas ciclovias, e o medo de acidentes no trânsito é o principal motivo que afasta as pessoas da bicicleta. O calor e a chuva também pesam, e quem mora a mais de dez quilômetros do trabalho dificilmente vai pedalando todos os dias. Há ainda o risco de furto e o custo de uma bicicleta de boa qualidade.",
        "Especialistas em mobilidade afirmam que a empresa sozinha não resolve tudo, mas pode fazer diferença. Eles recomendam começar com medidas simples, como um bicicletário coberto e seguro, e combinar a bicicleta com o transporte público para quem mora longe. Outra sugestão é organizar grupos para pedalar juntos nos primeiros dias, o que dá mais segurança a quem está começando, e oferecer cursos rápidos sobre regras de trânsito e manutenção básica."
      ]
    },
    prompt: "Você trabalha na Alvorada Seguros, uma empresa com cerca de 200 funcionários. Um grupo de colegas propôs à diretoria transformar parte das vagas de carro da garagem em um bicicletário e construir um vestiário com chuveiros. A proposta dividiu opiniões na empresa. Escreva um artigo de opinião para o boletim interno da Alvorada Seguros em que você se posicione sobre a proposta, apresente argumentos com base no texto, discuta os obstáculos e sugira medidas para que a iniciativa funcione.",
    checklist: [
      "Artigo de opinião format: a title that signals the stance, an introduction with a one-sentence thesis, development paragraphs and a conclusion. No vocativo; the writer signs with name and role, as in an internal newsletter.",
      "Written by an employee for colleagues and management, and it names the proposal under debate: turning part of the garage's car spaces into a bike rack, plus a locker room with showers.",
      "At least two arguments from the text in new words: daily exercise without a gym, savings on fuel or fares, a more predictable arrival time, one car space holding several bikes, and the metalworks case (from 12 to 50 cyclists in a year).",
      "Acknowledges the obstacles fairly (few bike lanes and fear of accidents, heat and rain, long distances, theft, the cost of a good bike) and answers them.",
      "Proposes concrete measures from the text: a covered, secure rack, bike plus public transport for people who live far away, group rides for beginners, short courses on traffic rules and basic maintenance.",
      "Formal register: *defendo que* or *acredito que*, not *eu acho*; *há*, not *tem*; *No entanto* instead of an opening *Mas*; no *segundo o texto*."
    ]
  },
  {
    id: "r-museu-gratuito",
    label: "R",
    title: "Museu de graça aos domingos",
    genre: "noticia",
    task: 4,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Museu Casa da Estação terá entrada gratuita aos domingos",
      body: [
        "A partir de 11 de outubro, o Museu Casa da Estação, que conta a história da cidade desde a chegada da ferrovia, passará a ter entrada gratuita todos os domingos, das 10h às 17h. Nos outros dias de funcionamento, de terça a sábado, o ingresso continua custando R$ 20, com meia-entrada para estudantes e pessoas com mais de 60 anos.",
        "A mudança faz parte de um projeto para aproximar o museu dos moradores. Uma pesquisa feita pela equipe do museu no primeiro semestre mostrou que a maior parte dos visitantes vem de outras cidades e que muitos moradores nunca entraram no prédio da antiga estação. “Queremos que as famílias da cidade se sintam em casa aqui”, afirma a diretora do museu, Helena Prado.",
        "Aos domingos, o museu também vai oferecer visitas guiadas em Libras, a Língua Brasileira de Sinais, no primeiro e no terceiro domingo de cada mês, às 11h. As visitas serão conduzidas por um educador surdo e terão vagas para 15 pessoas. Visitantes ouvintes interessados em conhecer a língua também podem participar.",
        "Para as crianças de 6 a 12 anos, haverá a oficina “Pequenos Ferroviários”, todos os domingos, às 14h. Os participantes vão conhecer a maquete da antiga estação e montar o próprio trem de papelão. A atividade tem 20 vagas, e as inscrições são feitas na recepção, a partir das 13h. As crianças devem estar acompanhadas de um adulto.",
        "O museu fica na Praça da Estação, 12, a cinco minutos do terminal de ônibus, e tem rampas e elevador. A programação completa está no perfil @casadaestacao nas redes sociais."
      ]
    },
    prompt: "Você é voluntário na Associação de Moradores da Vila Ferroviária, bairro onde fica o Museu Casa da Estação, e escreve para o boletim mensal da associação. Com base no comunicado divulgado pelo museu, escreva uma notícia para o boletim informando os moradores sobre a entrada gratuita aos domingos e as novas atividades, com as informações práticas de que eles precisam para participar.",
    checklist: [
      "Notícia format: a present-tense headline (a *linha fina* is optional), a lead that answers what, who, when and where, development paragraphs and a closing service paragraph. Third person throughout.",
      "Written for the neighborhood's residents: the text links the news to them (the museum is in their neighborhood, and many locals have never been inside).",
      "Main facts in new words: free entry every Sunday from 11 October, 10 a.m. to 5 p.m.; R$ 20 from Tuesday to Saturday, with half price for students and people over 60.",
      "The new activities: Libras tours on the first and third Sundays at 11 a.m., led by a deaf educator, 15 places, open to hearing visitors; the children's workshop every Sunday at 2 p.m. for ages 6 to 12, 20 places, sign-up at reception from 1 p.m., children with an adult.",
      "The reason for the change (most visitors come from other cities) and at least one quote attributed by name and role to the director, plus access details (address, ramps and elevator).",
      "Neutral register: no *eu*, *nós*, *você* or opinion adjectives; *haverá*, not *vai ter*; *gratuita*, not *de graça*. Facts are attributed to the museum, never to *o texto* or *o comunicado*."
    ]
  },
  {
    id: "s-telemedicina",
    label: "S",
    title: "Consulta pelo celular",
    genre: "folheto",
    task: 1,
    minutes: 30,
    source: {
      kind: "video",
      title: "Reportagem do telejornal regional",
      body: [
        "Apresentador: A partir deste mês, quem é atendido nos postos de saúde de Serra Clara pode fazer a consulta de retorno sem sair de casa. A repórter Lúcia Andrade explica como funciona.",
        "Repórter: A teleconsulta é feita por videochamada, pelo aplicativo Saúde Serra Clara. Ela serve para as consultas de retorno: mostrar resultado de exame, renovar receita de remédio de uso contínuo e acompanhar pacientes com pressão alta ou diabetes que estão com a doença controlada.",
        "Sandra Melo, enfermeira e coordenadora do Posto de Saúde da Vila Nova: Pra marcar, a pessoa baixa o aplicativo e entra com o CPF e o número do cartão do SUS. Quem não sabe mexer pode marcar aqui na recepção mesmo. Um dia antes, chega uma mensagem de lembrete. Na hora, é só abrir o aplicativo uns dez minutos antes e apertar em “Entrar na consulta”. A receita chega pelo próprio aplicativo e vale em qualquer farmácia.",
        "Repórter: E quem não tem celular com câmera ou internet em casa?",
        "Sandra: Pode vir ao posto. A gente montou uma sala com tablet, e uma técnica de enfermagem ajuda a fazer a ligação.",
        "Repórter: Dona Aparecida, de 71 anos, já fez a primeira teleconsulta.",
        "Aparecida: Minha neta me ajudou a instalar o aplicativo. Eu fiquei nervosa, mas deu tudo certo. Não precisei pegar dois ônibus nem esperar na fila.",
        "Repórter: A Secretaria de Saúde lembra que a teleconsulta não substitui tudo. Primeira consulta, vacina, curativo e coleta de exame continuam sendo presenciais. E, em caso de dor no peito, falta de ar ou febre alta, o paciente não deve esperar a teleconsulta: deve procurar a UPA mais próxima ou ligar para o SAMU, no 192."
      ],
      note: "Stands in for a video: read it once, cover it, then write."
    },
    prompt: "Você trabalha na recepção do Posto de Saúde da Vila Nova, em Serra Clara. Muitos pacientes do posto são idosos e têm dúvidas sobre o novo serviço de teleconsulta. Com base na reportagem, elabore o texto de um folheto que será entregue aos pacientes, explicando o que é a teleconsulta e para que serve, como marcar a consulta e participar dela, o que é preciso ter e em que casos o paciente deve ir ao posto pessoalmente.",
    checklist: [
      "Folheto format: a short title that names the service, the posto as signer, short blocks under question headings, imperatives to the reader and a closing call to action that says where to get help.",
      "Written by the posto for its patients, many of them older adults: short sentences, plain words (*videochamada*, *consulta de retorno*), and one form of address used consistently (*você* or *o senhor / a senhora*).",
      "What it is and what it is for: a video call through the Saúde Serra Clara app for follow-up visits (test results, renewing prescriptions for continuous-use medicine, monitoring high blood pressure or diabetes that is under control).",
      "How to book and join: download the app and enter the CPF and SUS card number, or book at reception; a reminder message arrives the day before; open the app ten minutes early and tap *Entrar na consulta*; the prescription arrives in the app and is valid at any pharmacy.",
      "What you need and the help on offer: a phone with a camera and internet, or the posto's room with a tablet and a nursing technician who helps with the call; a relative can help install the app.",
      "When to go in person: first visits, vaccines, dressings and sample collection. In an emergency (chest pain, shortness of breath, high fever) do not wait for the video call: go to the UPA or call SAMU on 192."
    ]
  },
  {
    id: "t-voluntariado",
    label: "T",
    title: "Dia do Voluntariado",
    genre: "convite",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Podcast Trabalho & Cia: voluntariado nas empresas",
      body: [
        "Apresentadora: No episódio de hoje, vamos falar de voluntariado nas empresas. Cada vez mais companhias organizam dias em que os funcionários deixam o escritório para trabalhar em um projeto social. Quem conta a experiência é Rodrigo Tavares, do RH da Distribuidora Sol Nascente.",
        "Rodrigo: No ano passado, a gente reformou a Creche Pingo de Gente, que atende oitenta crianças perto da nossa sede. Foram quarenta funcionários, num sábado, das oito às quatro. Pintamos as salas, consertamos o parquinho e montamos uma horta com as crianças.",
        "Apresentadora: Como vocês escolheram o que fazer?",
        "Rodrigo: Primeiro, a gente perguntou à creche do que ela precisava. Isso é fundamental. Não adianta chegar com uma ideia pronta. Depois, abrimos as inscrições com um mês de antecedência, pra comprar tinta e material na quantidade certa.",
        "Apresentadora: E quem não sabe pintar nem consertar nada?",
        "Rodrigo: Tem tarefa pra todo mundo. Teve gente lixando, gente pintando, gente cozinhando, gente brincando com as crianças. A empresa deu o material, o transporte, o almoço e as camisetas. O funcionário só precisava ir com roupa velha e sapato fechado.",
        "Apresentadora: E o que mudou depois?",
        "Rodrigo: Muita coisa. Gente do financeiro que nunca tinha falado com o pessoal do depósito virou amiga. E todo mundo voltou com a sensação de ter feito algo que importa. Tanto que, neste ano, as vagas acabaram em dois dias.",
        "Apresentadora: Uma última dica para quem quer começar?",
        "Rodrigo: Comece pequeno, com um dia só, e depois mostre o resultado: as fotos, o antes e o depois. Isso anima os colegas para a próxima vez."
      ],
      note: "Stands in for a recording: read it once, cover it, then write."
    },
    prompt: "Você trabalha na Tecnova Sistemas, uma empresa de tecnologia, e faz parte do comitê que está organizando o primeiro Dia do Voluntariado da empresa. No sábado, 7 de novembro, das 8h às 16h, os funcionários vão passar o dia no Lar Recanto das Flores, que abriga 30 idosos. O lar pediu a pintura do refeitório, o conserto dos bancos do jardim e o plantio de um canteiro de flores. À tarde, haverá música e bingo com os moradores. O ônibus sairá da sede às 7h30, e as inscrições vão até 23 de outubro, pela intranet. Com base no podcast, escreva um convite aos colegas apresentando a ação, mostrando por que vale a pena participar e informando o que a empresa oferece, o que eles devem levar e como se inscrever.",
    checklist: [
      "Convite format: a title that names the event, a warm written greeting (*Caros colegas,*), the practical details set out clearly, a closing that repeats the invitation and the committee as signer.",
      "Written by a member of the organizing committee to coworkers: *nós* for the organizers and *vocês* with plural imperatives (*venham*, *inscrevam-se*) for the readers.",
      "What, when and where from the prompt: Saturday 7 November, 8 a.m. to 4 p.m., at the Lar Recanto das Flores (30 older residents); painting the dining hall, fixing the garden benches, planting a flower bed, music and bingo in the afternoon; the bus leaves at 7:30.",
      "Why take part, with facts from the podcast in new words: the committee asked the home what it needed first; there is a task for every skill level; at another company, forty staff renovated a daycare in one Saturday, people from different departments became friends and everyone came back feeling they had done something that matters.",
      "Practical details: the company provides materials, transport, lunch and T-shirts; bring old clothes and closed shoes; sign up on the intranet by 23 October so materials can be bought in the right amount.",
      "Written register without the recording's spoken marks (*a gente*, *pra*, *tem tarefa*, *teve gente*), and no mention of a podcast."
    ]
  },
  {
    id: "u-plano-celular",
    label: "U",
    title: "Cobrança indevida no celular",
    genre: "reclamacao",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Cobrança indevida na conta do celular: saiba o que fazer",
      body: [
        "Horóscopo por mensagem, jogos, clubes de notícias, seguro do aparelho: muitos consumidores descobrem na fatura do celular a cobrança de serviços que nunca contrataram. Em geral, são valores pequenos, de R$ 5 a R$ 15 por mês, e por isso passam despercebidos durante meses. Esses serviços costumam ser ativados por um clique em um anúncio ou por uma mensagem respondida sem querer.",
        "O Código de Defesa do Consumidor (CDC) considera prática abusiva fornecer qualquer serviço sem solicitação prévia do cliente. Além disso, o CDC determina que o consumidor cobrado em quantia indevida tem direito a receber de volta o dobro do que pagou em excesso, com correção monetária e juros, salvo em caso de engano justificável.",
        "Especialistas orientam o consumidor a conferir a fatura todos os meses, item por item. Ao encontrar uma cobrança desconhecida, o primeiro passo é entrar em contato com o SAC da operadora, pedir o cancelamento do serviço e a devolução do valor e anotar o número de protocolo de cada atendimento. Também é possível pedir à operadora o bloqueio de serviços de terceiros na linha, para evitar novas cobranças.",
        "Se o SAC não resolver o problema, o cliente pode recorrer à ouvidoria da empresa, registrar uma reclamação na Anatel, a agência que regula as telecomunicações, ou usar o site consumidor.gov.br. Guardar faturas, capturas de tela e números de protocolo ajuda a comprovar o problema."
      ]
    },
    prompt: "Você é cliente da operadora Conecta Móvel há quatro anos, com um plano pós-pago de R$ 59,90 por mês. Ao conferir as faturas, percebeu que, desde junho, aparecem dois serviços que você nunca contratou: “Clube Jogos+”, de R$ 9,90, e “Notícias Já”, de R$ 4,99. Você ligou para o SAC no dia 2 de setembro (protocolo nº 2026-771045), mas as cobranças continuaram na fatura de setembro. Escreva um e-mail de reclamação à ouvidoria da Conecta Móvel relatando o problema, informando os seus direitos com base no texto, solicitando o cancelamento dos serviços e a devolução dos valores e dizendo o que fará se não for atendido.",
    checklist: [
      "Formal complaint e-mail: the addressee (*À Ouvidoria da Conecta Móvel*), an *Assunto* that names the problem and the protocol number, *Prezados senhores,*, *Atenciosamente* and a signature that identifies the account with an invented name.",
      "The first paragraph says who is writing (a customer for four years, postpaid plan of R$ 59.90) and why the ouvidoria: the SAC did not solve the problem.",
      "Facts with dates and amounts: Clube Jogos+ (R$ 9.90) and Notícias Já (R$ 4.99) charged since June and never requested; the call to the SAC on 2 September with the protocol number; the charges came back in the September bill. A strong answer totals what was paid (four bills, R$ 59.56).",
      "The rights in new words: supplying a service the customer did not request is an abusive practice under the CDC, and a consumer charged an undue amount has the right to get back double what was paid, with monetary correction and interest.",
      "Specific requests with a deadline: cancel both services, refund double the amount paid, and block third-party services on the line.",
      "The next step if nothing is solved (a complaint at Anatel or on consumidor.gov.br), in a firm, polite register: the company in the third person, *solicito*, *caso* + subjunctive, no *vocês têm que* and no *segundo o texto*."
    ]
  }
);
