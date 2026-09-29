window.CB = window.CB || {};
CB.prompts = CB.prompts || [];
CB.prompts.push(
  {
    id: "a-celular",
    label: "A",
    title: "Celular na escola",
    genre: "solicitacao",
    task: 1,
    minutes: 30,
    source: {
      kind: "texto",
      title: "Celular fora da sala de aula",
      body: [
        "Desde 2025, uma lei federal restringe o uso de celulares nas escolas de educação básica em todo o Brasil, públicas e privadas. Os alunos não podem usar o aparelho durante as aulas nem no recreio. Há exceções: o celular pode ser usado com fins pedagógicos, com orientação do professor, e por alunos que precisam dele por motivos de saúde ou acessibilidade.",
        "Muitos professores dizem que os alunos estão mais atentos e conversam mais entre si no intervalo. Alguns pais, porém, têm dúvidas: como falar com os filhos em uma emergência? E o que as crianças vão fazer no recreio sem o celular? Algumas escolas responderam com atividades no intervalo, como jogos de tabuleiro, esportes e biblioteca aberta."
      ],
      note: "Stands in for a video: read it once, cover it, then write."
    },
    prompt: "Você é pai de um aluno do ensino fundamental. Antes de uma reunião sobre o tema, a escola pediu sugestões às famílias. Escreva um e-mail à coordenação pedagógica: diga sua posição sobre a lei, apresente uma preocupação e sugira duas atividades para o recreio.",
    checklist: [
      "Formal e-mail format with an *assunto* line, a vocativo to the coordination (*Prezada coordenação*), a closing such as *Atenciosamente* and a signature by role (*pai de aluno do 5º ano*), not a real name.",
      "Identifies the writer as a parent answering the school's request for suggestions before the meeting.",
      "States a clear position on the law (for, against, or in favor with reservations).",
      "Presents one concrete concern, such as reaching the child in an emergency or what children will do at recess without phones.",
      "Suggests two recess activities as polite proposals (*sugiro que*, *seria interessante*), from the school examples (board games, sports, open library) or the writer's own ideas.",
      "Reuses source facts in new words (federal law since 2025, exceptions for teaching use and for health or accessibility needs) without mentioning a video; formal register addressed to the school staff."
    ]
  },
  {
    id: "b-lixo-eletronico",
    label: "B",
    title: "Lixo eletrônico no condomínio",
    genre: "aviso",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "O que fazer com o celular velho?",
      body: [
        "O Brasil está entre os maiores produtores de lixo eletrônico do mundo, e só uma pequena parte desse material é reciclada. Celulares, pilhas, baterias e computadores contêm metais como chumbo e mercúrio, que podem contaminar o solo e a água quando vão para o lixo comum. Esses aparelhos também têm materiais valiosos, como cobre e ouro, que podem ser reaproveitados.",
        "Pela lei brasileira, fabricantes e lojas devem receber de volta os produtos usados, no sistema chamado logística reversa. Muitas lojas de eletrônicos e supermercados têm pontos de coleta. Antes de descartar um celular ou computador, é importante apagar os dados pessoais."
      ]
    },
    prompt: "Você faz parte da comissão ambiental do seu condomínio. Alguns moradores estão jogando pilhas e aparelhos velhos no lixo comum. Escreva um aviso para o mural do condomínio explicando por que isso é um problema e orientando os moradores sobre o que fazer.",
    checklist: [
      "Aviso format with a short headline that names the topic (*Atenção: descarte de pilhas e eletrônicos*), a greeting to residents (*Prezados moradores*) and a signature by role (*Comissão Ambiental*).",
      "Names the problem in the building: some residents are throwing batteries and old devices into the regular trash.",
      "Explains why it matters, in new words: metals such as lead and mercury contaminate soil and water, and valuable materials such as copper and gold could be reused.",
      "Tells residents what to do: take items to collection points in electronics stores and supermarkets, which must accept them back (*logística reversa*), and erase personal data first. Adding a building collection box is a good touch.",
      "Gives instructions in a consistent form, all imperatives (*Leve*, *Não jogue*) or all infinitives (*Levar*, *Não jogar*).",
      "Neutral to formal register, short and scannable for a notice board; no reference to a text the residents never read."
    ]
  },
  {
    id: "c-airfryer",
    label: "C",
    title: "Airfryer com defeito",
    genre: "reclamacao",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Comprou pela internet? Conheça seus direitos",
      body: [
        "Quem compra pela internet tem os mesmos direitos de quem compra em uma loja física, e alguns a mais. Segundo o Código de Defesa do Consumidor (CDC), o cliente pode desistir de uma compra feita fora da loja em até sete dias depois de receber o produto, sem precisar explicar o motivo. Nesse caso, a loja deve devolver todo o valor pago, inclusive o frete.",
        "Se o produto chegar com defeito, a loja tem até 30 dias para resolver o problema. Se não resolver nesse prazo, o consumidor pode escolher entre três opções: a troca por outro produto igual, a devolução do dinheiro ou um desconto no preço.",
        "Especialistas recomendam guardar notas fiscais, e-mails e fotos do produto. Se a empresa não responder, o consumidor pode registrar uma reclamação no site consumidor.gov.br ou no Procon da sua cidade."
      ]
    },
    prompt: "Você comprou uma airfryer no site da loja Casa Mais. O produto chegou há duas semanas e parou de funcionar depois de três dias. Você já mandou dois e-mails, mas não recebeu resposta. Escreva uma carta de reclamação ao SAC da loja: descreva o problema, informe os direitos do consumidor com base no texto, diga qual solução você quer e o que vai fazer se não for atendido.",
    checklist: [
      "Formal complaint letter: place and date, addressee (*Ao SAC da Casa Mais*), order number, a closing such as *Atenciosamente* and an invented name or *Cliente* as signature.",
      "Describes the problem: delivered two weeks ago, stopped working after three days, two e-mails with no answer.",
      "Cites the right rule, in new words: the store has 30 days to fix a defect, and after that the customer chooses exchange, refund or discount. A strong answer does not claim the 7-day withdrawal right, since the product arrived two weeks ago.",
      "States one specific solution the writer wants (for example a new airfryer or a full refund) and sets a deadline for the answer.",
      "Says what happens otherwise: a complaint on consumidor.gov.br or at the Procon.",
      "Firm, polite formal register (*solicito*, *aguardo*), no insults, and no *segundo o texto*; the CDC can be named directly."
    ]
  },
  {
    id: "d-horta",
    label: "D",
    title: "Horta comunitária",
    genre: "noticia",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Entrevista na rádio comunitária do bairro",
      body: [
        "Locutor: Dona Marta, como começou a horta?",
        "Marta Oliveira, coordenadora: Olha, aquele terreno ao lado da escola estadual ficou abandonado por uns dez anos. Tinha lixo, tinha mato, ninguém passava ali à noite. Em março, um grupo de doze vizinhos resolveu limpar tudo e plantar. Hoje a gente já tem alface, couve, tomate, cebolinha e muita erva medicinal.",
        "Locutor: E quem pode participar?",
        "Marta: Qualquer morador. A gente se reúne todo sábado, das oito às onze da manhã. Não precisa saber plantar, a gente ensina. Os alunos da escola também vêm uma vez por semana com a professora de Ciências.",
        "Locutor: E o que vocês fazem com o que colhem?",
        "Marta: Metade fica com quem trabalha na horta. A outra metade a gente doa para a cozinha da creche do bairro. Agora o nosso sonho é conseguir uma caixa d'água, porque no verão a gente carrega balde da casa dos vizinhos."
      ],
      note: "Stands in for an audio: read it once, cover it, then write."
    },
    prompt: "Você escreve para o site de notícias do seu bairro. Com base na entrevista, escreva uma notícia sobre a horta comunitária para informar os moradores e convidá-los a participar.",
    checklist: [
      "Notícia format: a headline, an optional subtitle (*linha fina*), and a lead paragraph that answers what, who, where and when. Third person throughout.",
      "Spoken register converted to written: no *olha*, *a gente* or *tinha* for *havia*; Marta appears in reported speech or a short, cleaned-up quote attributed to her as coordinator.",
      "History, in new words: a lot next to the state school abandoned for about ten years, full of trash and weeds; in March twelve neighbors cleaned it and started planting.",
      "Current state: lettuce, collard greens, tomatoes, chives and medicinal herbs; half the harvest stays with the volunteers and half goes to the neighborhood daycare kitchen.",
      "Invitation with practical details: any resident can join, Saturdays from 8 to 11 a.m., no experience needed; school students also take part once a week.",
      "Mentions the need for a water tank as a way for readers to help, and closes with a call to participate."
    ]
  },
  {
    id: "e-entregadores",
    label: "E",
    title: "Entregadores de aplicativo",
    genre: "artigo-opiniao",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "A rotina de quem entrega",
      body: [
        "Eles estão em todas as esquinas das grandes cidades: motociclistas e ciclistas com mochilas térmicas nas costas, levando comida, remédios e compras até a porta dos clientes. Para muitos, trabalhar com aplicativos de entrega é a principal fonte de renda. Para outros, é um complemento no fim do mês.",
        "A vantagem mais citada pelos entregadores é a flexibilidade: cada um escolhe quando e quanto quer trabalhar. Mas a rotina tem um lado difícil. Para conseguir uma renda razoável, muitos passam o dia inteiro na rua, enfrentam trânsito, chuva e calor, e nem sempre têm onde descansar, beber água ou usar o banheiro entre uma entrega e outra. Como são considerados trabalhadores autônomos, em geral não têm férias remuneradas nem proteção garantida em caso de acidente.",
        "As empresas afirmam que oferecem oportunidades de trabalho a milhares de pessoas e que já criaram seguros e pontos de apoio em algumas cidades. Os entregadores, por sua vez, pedem um valor mínimo por entrega e mais transparência sobre a forma como os aplicativos calculam o pagamento. O tema divide opiniões e vem sendo debatido por governo, empresas e trabalhadores."
      ]
    },
    prompt: "Você é colunista de um jornal da sua cidade. Com base no texto, escreva um artigo de opinião para a coluna de domingo sobre as condições de trabalho dos entregadores de aplicativo. Em seu artigo, apresente a situação desses trabalhadores, posicione-se sobre o tema e proponha medidas para melhorar a rotina deles.",
    checklist: [
      "Artigo de opinião format: a title that signals the stance, an introduction that frames the issue, development paragraphs and a conclusion. No vocativo and no letter-style signature.",
      "Written as a columnist for the paper's general readers, not as a letter to the companies or to the riders.",
      "Presents the situation with source facts in new words: flexibility and income, long days in traffic, rain and heat, few places to rest, and no paid vacation or guaranteed accident protection because they count as self-employed.",
      "Takes a clear position backed by at least two arguments and acknowledges the other side (companies say they create jobs and already offer insurance and support points).",
      "Proposes concrete measures, such as a minimum rate per delivery, transparency in how pay is calculated, or more support points, linked with argument connectors (*além disso*, *por outro lado*, *portanto*).",
      "Formal written register; no invented statistics and no *segundo o texto*."
    ]
  },
  {
    id: "f-horario-verao",
    label: "F",
    title: "A volta do horário de verão",
    genre: "carta-do-leitor",
    task: 4,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Horário de verão: volta ou não volta?",
      body: [
        "O horário de verão foi adotado no Brasil por várias décadas. Durante alguns meses do ano, os relógios de parte do país eram adiantados em uma hora, para aproveitar melhor a luz do sol no fim da tarde. Em 2019, o governo federal acabou com a medida. O principal argumento foi que a economia de energia tinha ficado pequena, porque hoje o maior consumo acontece à tarde, com o uso de aparelhos de ar-condicionado, e não mais no início da noite.",
        "Desde então, o assunto volta ao debate de tempos em tempos, sobretudo em anos de seca, quando os reservatórios das hidrelétricas ficam baixos. Bares, restaurantes e o setor de turismo defendem a volta: com mais horas de claridade depois do expediente, as pessoas saem mais e consomem mais.",
        "Outros discordam. Muitas pessoas dizem que levam dias para se adaptar à mudança, dormem mal e ficam cansadas. Pais reclamam que as crianças precisam sair para a escola ainda no escuro. Além disso, especialistas em energia afirmam que o efeito da medida sobre a conta de luz seria pequeno."
      ]
    },
    prompt: "Você leu, em um jornal de grande circulação, a reportagem “Horário de verão: volta ou não volta?”. Escreva uma carta do leitor ao jornal. Em sua carta, retome a discussão apresentada na reportagem, dê sua opinião sobre o tema, justifique-a com argumentos e relacione o assunto com a realidade da sua cidade.",
    checklist: [
      "Carta do leitor format: a vocativo to the editors (*Prezados editores*), a reference to the published report it answers, a closing, and a signature by role and city (*Um leitor de Curitiba*).",
      "Written by a reader to the newspaper for publication. Naming the paper's report is expected in this genre; calling it *o texto* is not.",
      "Takes up the debate with facts in new words: the measure ended in 2019, peak energy use has shifted to the afternoon with air conditioning, bars and tourism want it back, and people complain about sleep and children leaving home in the dark.",
      "Gives a clear opinion and supports it with at least two arguments.",
      "Connects the issue to the writer's city or routine (commute, climate, local commerce).",
      "Formal register in the first person, concise, with argument connectors (*por um lado*, *no entanto*, *por isso*)."
    ]
  },
  {
    id: "g-amigo-mudanca",
    label: "G",
    title: "Conselhos para um amigo",
    genre: "email-pessoal",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Choque cultural: o que surpreende os estrangeiros no Brasil",
      body: [
        "Quem se muda para o Brasil costuma se encantar com a simpatia das pessoas. Mas alguns hábitos do dia a dia também causam estranhamento. O primeiro é o cumprimento: entre conhecidos, é comum dar um ou dois beijos no rosto, e muita gente abraça quem acabou de conhecer.",
        "Outro ponto é a relação com o horário. Em encontros sociais, chegar meia hora depois do combinado muitas vezes é normal. Em compromissos de trabalho, consultas médicas e entrevistas, porém, a pontualidade é esperada.",
        "A comida também muda a rotina. O almoço é a principal refeição do dia, com arroz, feijão, salada e alguma carne, e o jantar costuma ser mais leve. Muitos estrangeiros sentem falta de produtos do seu país, mas acabam descobrindo frutas que nunca tinham visto.",
        "Por fim, há a burocracia. Para abrir uma conta no banco, alugar um apartamento ou contratar um plano de celular, é preciso ter CPF, e alguns documentos precisam ser autenticados em cartório. A dica de quem já passou por isso é ter paciência, andar com cópias dos documentos e pedir ajuda a amigos brasileiros."
      ]
    },
    prompt: "Você é estrangeiro e mora no Brasil há alguns anos. Um amigo do seu país vai se mudar para cá no mês que vem e pediu conselhos. Com base no texto e na sua experiência, escreva um e-mail para ele: conte o que mais surpreendeu você quando chegou, alerte-o sobre as diferenças culturais que ele vai encontrar e dê dicas práticas para os primeiros meses.",
    checklist: [
      "Personal e-mail format: an informal greeting with an invented first name (*Oi, Tom!*), an opening that reacts to his news, an informal closing (*Um abraço*) and a first-name signature.",
      "Written by a foreigner with a few years in Brazil to a friend from home; the text shows shared history and the upcoming move.",
      "Tells at least one personal surprise from the writer's own arrival, in the first person.",
      "Warns about the differences using source facts in new words: kisses and hugs as greetings, relaxed timing socially but punctuality at work and appointments, lunch as the main meal, and bureaucracy (CPF, notarized documents).",
      "Gives practical tips with imperatives or *vale a pena* / *é bom*: get a CPF early, carry copies of documents, be patient, ask Brazilian friends for help.",
      "Warm, informal register with *você*; light spoken touches are fine, but spelling, accents and agreement stay standard, and there is no *segundo o texto*."
    ]
  },
  {
    id: "h-golpes",
    label: "H",
    title: "Golpes pelo celular",
    genre: "blog",
    task: 4,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Golpes pelo celular: como não cair",
      body: [
        "Os golpes pelo WhatsApp e pelo Pix estão entre os mais comuns no Brasil. Um dos mais conhecidos é o do falso parente. O golpista manda uma mensagem de um número desconhecido, com a foto de um filho ou neto copiada das redes sociais, e escreve: “Mudei de número, salva aí”. Pouco depois, pede dinheiro com urgência para pagar uma conta ou resolver um problema.",
        "Outro golpe frequente é o do link falso. A pessoa recebe uma mensagem que parece ser do banco, de uma loja ou de uma empresa de entregas, com um aviso sobre uma encomenda parada, um prêmio ou um problema na conta. Ao clicar no link, ela é levada a uma página falsa que pede senhas e dados do cartão.",
        "Especialistas em segurança dão algumas orientações. Antes de fazer qualquer transferência, ligue para o número antigo do parente ou confirme a história com outra pessoa da família. Desconfie de pedidos urgentes e de ofertas boas demais. Não clique em links recebidos por mensagem: acesse o site ou o aplicativo oficial. Bancos não pedem senha por telefone nem por mensagem. Se cair em um golpe, avise o banco imediatamente e registre um boletim de ocorrência."
      ]
    },
    prompt: "Você é voluntário no Centro de Convivência Bem Viver, que atende idosos do seu bairro, e escreve para o blog da instituição. Muitos frequentadores contaram que receberam mensagens suspeitas no celular. Escreva uma postagem para o blog explicando como funcionam os golpes mais comuns pelo WhatsApp e pelo Pix, orientando os leitores sobre como se proteger e informando o que fazer em caso de golpe.",
    checklist: [
      "Blog post format: an inviting title, short paragraphs or a short list of tips, direct address to the reader, and a closing that invites questions or comments. A sign-off by role (*Equipe de voluntários*) is optional.",
      "Written by a volunteer for older readers of the center's blog; mentions that members have reported suspicious messages.",
      "Explains how the scams work, in new words: the fake relative with a new number and a copied photo asking for urgent money, and the fake link that imitates a bank, store or delivery company and asks for passwords and card data.",
      "Explains how to protect yourself: call the old number or check with family, distrust urgency and deals that are too good, use the official app instead of links, and remember that banks never ask for passwords.",
      "Says what to do after a scam: warn the bank right away and file a police report (*boletim de ocorrência*).",
      "Clear, warm, semi-formal register for older readers, with one form of address used consistently (*você* or *o senhor / a senhora*), simple sentences and no technical jargon."
    ]
  },
  {
    id: "i-adocao",
    label: "I",
    title: "Adoção responsável",
    genre: "folheto",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Adotar é amor, mas também é responsabilidade",
      body: [
        "Todos os anos, muitos cães e gatos são abandonados nas ruas das cidades brasileiras. Uma parte deles foi adotada por impulso: a família se encantou com o filhote, mas não pensou nos gastos nem no tempo que um animal exige.",
        "Veterinários lembram que o animal precisa de ração de qualidade, vacinas todos os anos, remédio contra vermes, pulgas e carrapatos e consultas regulares. Também é preciso reservar dinheiro para emergências. A castração é recomendada para cães e gatos, machos e fêmeas: evita ninhadas indesejadas e reduz o risco de algumas doenças. Muitas prefeituras e ONGs oferecem castração gratuita ou a preço baixo.",
        "O tempo é outro ponto importante. Cães precisam passear todos os dias, e gatos precisam de brincadeiras e de telas nas janelas. Um animal pode viver mais de quinze anos, e a família deve pensar em quem vai cuidar dele nas férias ou em caso de mudança.",
        "Antes da adoção, as ONGs costumam fazer uma entrevista e pedir que o adotante assine um termo de responsabilidade. Adotar um animal adulto também é uma boa opção, porque ele já tem tamanho e temperamento definidos."
      ]
    },
    prompt: "Você trabalha na ONG Patinhas do Jardim Aurora, que resgata cães e gatos e os encaminha para adoção. No próximo sábado, a ONG vai participar de uma feira de adoção no parque da cidade. Escreva o texto de um folheto que será distribuído aos visitantes. No folheto, incentive a adoção responsável, informe os cuidados e os custos que um animal exige e explique como funciona o processo de adoção na ONG.",
    checklist: [
      "Folheto format: a title or slogan that catches the eye, short blocks with subheadings or bullet points, imperatives addressed to the reader (*Adote*, *Pense bem*), and the NGO's name with invented contact details at the end.",
      "Written by the NGO for visitors at the adoption fair; mentions the fair and invites them to adopt.",
      "Informs costs and care, in new words: quality food, yearly vaccines, treatment for worms, fleas and ticks, regular vet visits, money for emergencies, and the benefits of neutering, which is often free or cheap.",
      "Informs the time commitment: daily walks for dogs, play and window screens for cats, a lifespan that can pass fifteen years, and a plan for vacations or a move.",
      "Explains the NGO's process (interview and signed responsibility form) and encourages adopting adult animals.",
      "Persuasive but responsible tone in a neutral register, short enough for a leaflet; no *segundo o texto*."
    ]
  },
  {
    id: "j-feira-trocas",
    label: "J",
    title: "Feira de trocas",
    genre: "convite",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Anúncio na Rádio Comunitária Vila Nova",
      body: [
        "Locutora: Bom dia, ouvintes! Hoje eu tô aqui com a Cláudia, da Associação de Pais e Mestres da Escola Municipal Jardim Primavera. Cláudia, que feira é essa que vocês tão organizando?",
        "Cláudia: Bom dia! É a nossa primeira Feira de Trocas de Livros e Brinquedos. Vai ser no sábado, dia 18, das nove da manhã à uma da tarde, na quadra da escola. É aberta pra toda a comunidade, não precisa ser aluno, não.",
        "Locutora: E como é que funciona?",
        "Cláudia: É bem simples. A criança traz um livro ou um brinquedo que não usa mais e troca por uma ficha. Com a ficha, ela escolhe outro item na feira. Cada item vale uma ficha, não importa o tamanho. Quem quiser pode deixar as coisas na secretaria até sexta e já pegar as fichas.",
        "Locutora: Pode levar qualquer coisa?",
        "Cláudia: Olha, a gente pede que seja coisa em bom estado, né? Brinquedo limpo, com as peças completas, e livro sem página rasgada. Brinquedo quebrado a gente não vai aceitar.",
        "Locutora: E vai ter mais alguma atração?",
        "Cláudia: Vai, sim! Vai ter contação de histórias às dez e meia e pintura de rosto pra criançada. E o que sobrar no final a gente vai doar pra creche do bairro."
      ],
      note: "Stands in for an audio: read it once, cover it, then write."
    },
    prompt: "Você faz parte da Associação de Pais e Mestres da Escola Municipal Jardim Primavera, que está organizando o evento divulgado na rádio comunitária. Escreva um convite que será publicado no grupo de WhatsApp das famílias e no mural da escola. No convite, chame a comunidade para o evento, explique como funcionam as trocas e oriente as famílias sobre o que pode ser levado.",
    checklist: [
      "Convite format: a title naming the event, an invitation formula (*A APM convida...*, *Venha participar!*), clear what, when and where, and a signature by the association.",
      "Written by the parents' association to families and the wider community, short and scannable enough for both WhatsApp and a printed notice board.",
      "Event facts: Saturday the 18th, 9 a.m. to 1 p.m., on the school's sports court, open to everyone, not only students.",
      "How swaps work: one item earns one token regardless of size; items can be left at the school office until Friday or brought on the day.",
      "What to bring and what not to: clean toys with all their pieces, books without torn pages, no broken toys; mentions the storytelling at 10:30, face painting, and that leftovers go to the neighborhood daycare.",
      "Spoken marks converted to writing (no *tô*, *tão*, *pra*, *a gente*, *né*); friendly semi-formal tone with imperatives such as *venha* and *traga*."
    ]
  },
  {
    id: "k-desperdicio",
    label: "K",
    title: "Desperdício de alimentos",
    genre: "resumo",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Comida no lixo: onde começa o desperdício",
      body: [
        "O Brasil é um dos grandes produtores de alimentos do mundo, mas uma parte importante do que é produzido nunca chega a ser consumida. O desperdício acontece em todas as etapas: na colheita, no transporte, nos supermercados e também dentro de casa.",
        "Nas residências, os motivos mais comuns são as compras em excesso, o armazenamento inadequado e a confusão com as datas de validade. Muitas famílias jogam fora comida que ainda estava boa ou preparam mais do que conseguem comer e não aproveitam as sobras. Cascas, talos e folhas, que podem ser usados em sopas, bolos e refogados, também costumam ir direto para o lixo.",
        "Nos supermercados, frutas e legumes com pequenas manchas ou formato diferente muitas vezes são descartados porque os clientes não querem comprá-los. Algumas redes passaram a vender esses produtos mais baratos e a doar alimentos próximos do vencimento a bancos de alimentos e instituições sociais.",
        "Especialistas sugerem medidas simples: planejar o cardápio da semana, fazer lista de compras, deixar os alimentos mais antigos na frente da geladeira e congelar porções. Segundo eles, reduzir o desperdício ajuda o orçamento da família e o meio ambiente, já que menos lixo orgânico vai para os aterros."
      ]
    },
    prompt: "Você trabalha no setor de sustentabilidade de uma empresa que publica um boletim interno mensal para os funcionários. O tema da edição deste mês é o consumo consciente, e sua chefe pediu que você resumisse a reportagem “Comida no lixo: onde começa o desperdício”. Escreva o resumo para o boletim, apresentando as principais causas do desperdício de alimentos nas casas e nos supermercados e as medidas sugeridas para reduzi-lo, sem incluir sua opinião.",
    checklist: [
      "Resumo format: a title, a first sentence that identifies the original report (naming the source is the convention in this genre), third person, and a text much shorter than the original.",
      "Written by an employee for coworkers in the internal newsletter, fitted to the edition's theme; neutral and without personal opinion.",
      "Household causes in new words: buying too much, poor storage, confusion over expiry dates, uneaten leftovers, and peels and stalks thrown away.",
      "Supermarket causes and responses: produce with spots or odd shapes is discarded; some chains sell it cheaper and donate food close to its expiry date.",
      "Suggested measures and benefits: plan the week's menu, make a shopping list, keep older food in front, freeze portions; savings for the family and less organic waste in landfills.",
      "Paraphrase instead of copied sentences, with reporting verbs (*afirma*, *aponta*, *sugere*) and cause and addition connectors; neutral formal register."
    ]
  },
  {
    id: "l-onibus",
    label: "L",
    title: "Linha de ônibus cortada",
    genre: "solicitacao",
    task: 4,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Jardim Esperança fica sem ônibus aos fins de semana",
      body: [
        "Desde o início do mês, os moradores do bairro Jardim Esperança, na zona norte da cidade, não contam mais com a linha 412 aos sábados e domingos. A Viação Rota Sul, responsável pelo serviço, informou que cortou os horários de fim de semana porque o número de passageiros nesses dias era baixo.",
        "A decisão afeta principalmente quem depende do Hospital Regional da Zona Norte, que fica no bairro e atende pacientes de toda a região. Funcionários que trabalham em plantões no fim de semana e familiares que visitam pacientes internados agora precisam andar cerca de vinte minutos até a avenida mais próxima para pegar outro ônibus. “Minha mãe está internada e eu só consigo visitá-la no domingo. Agora levo quase duas horas para chegar”, conta a costureira Rosa Almeida.",
        "Segundo a associação de moradores, muitos idosos e pessoas com dificuldade de locomoção deixaram de ir às consultas marcadas para o sábado. A associação já reuniu mais de oitocentas assinaturas em um abaixo-assinado. A Secretaria Municipal de Transportes, que fiscaliza as empresas de ônibus, disse que vai analisar o caso."
      ]
    },
    prompt: "Você é presidente da associação de moradores do Jardim Esperança. Escreva uma carta à Secretaria Municipal de Transportes solicitando a volta da linha 412 aos fins de semana. Em sua carta, descreva a situação dos moradores, apresente argumentos que justifiquem o pedido e proponha uma solução para o problema.",
    checklist: [
      "Formal request letter: place and date, addressee (*À Secretaria Municipal de Transportes*), subject line, vocativo (*Prezado(a) Secretário(a)*), a closing such as *Atenciosamente* and a signature by role (*Presidente da Associação de Moradores do Jardim Esperança*).",
      "Written by the association's president on behalf of residents to the public body that oversees bus companies; states the request early.",
      "Describes the situation in new words: line 412 cut on weekends since the start of the month because of low ridership, the regional hospital in the neighborhood, weekend-shift staff and visitors walking about twenty minutes to the avenue, and older or less mobile residents missing Saturday appointments.",
      "Justifies the request with arguments such as access to health care, public service over ridership numbers, and the petition with more than 800 signatures as proof of demand.",
      "Proposes a concrete solution (restore the line, or a reduced weekend schedule timed to visiting hours and shift changes) and asks for a reply.",
      "Formal, polite and firm register in the first person plural (*solicitamos*, *contamos com*); no *segundo o texto*."
    ]
  },
  {
    id: "m-idosos-celular",
    label: "M",
    title: "Curso de celular para idosos",
    genre: "noticia",
    task: 1,
    minutes: 30,
    source: {
      kind: "video",
      title: "Reportagem do telejornal local",
      body: [
        "Apresentadora: Aprender a usar o celular depois dos sessenta anos. É isso que um curso gratuito está oferecendo aqui na cidade. A repórter Juliana Costa foi conferir.",
        "Repórter: Toda terça e quinta, às duas da tarde, esta sala do Centro Cultural Santa Rita fica cheia. São quinze alunos, todos com mais de sessenta anos, cada um com o seu celular na mão.",
        "Dona Célia, 72 anos: Eu tinha o celular, mas só sabia atender. Agora eu mando foto, faço chamada de vídeo com a minha neta que mora em Portugal... Olha, mudou a minha vida, né?",
        "Repórter: O curso dura dois meses e é oferecido pela prefeitura, com a ajuda de estudantes voluntários. Nas aulas, os alunos aprendem a usar aplicativos de mensagem, a marcar consulta pelo aplicativo da Secretaria de Saúde e a reconhecer golpes.",
        "Rafael, professor voluntário: A gente vai devagar, no ritmo de cada um. Muitos chegam com medo de apertar o botão errado. Depois de umas duas semanas, eles já tão ajudando o colega do lado.",
        "Repórter: As inscrições para a próxima turma vão até o dia 30 e são feitas pessoalmente no Centro Cultural. É só levar um documento com foto e o próprio celular. As vagas são limitadas."
      ],
      note: "Stands in for a video: read it once, cover it, then write."
    },
    prompt: "Você trabalha na assessoria de comunicação da prefeitura e escreve para o site de notícias da cidade. Com base na reportagem, escreva uma notícia sobre o curso. Em seu texto, apresente o curso, destaque os resultados para os alunos e informe os interessados sobre como se inscrever na próxima turma.",
    checklist: [
      "Notícia format: a headline, an optional subtitle, a lead that answers what, who, where and when, third person, and short paragraphs in order of importance.",
      "Written for the city hall's news site to residents; since the city runs the course, it can present it as a city program without sounding like an advertisement.",
      "Course facts in new words: free, for people over 60, Tuesdays and Thursdays at 2 p.m. at the Centro Cultural Santa Rita, two months, groups of fifteen, student volunteers, and the content (messaging apps, booking health appointments, spotting scams).",
      "Shows results for students through reported speech or a short cleaned-up quote from Dona Célia or the volunteer teacher.",
      "Registration details: until the 30th, in person at the Centro Cultural, bring photo ID and your own phone, limited places.",
      "Spoken marks converted to writing (no *a gente*, *tão*, *né*, *olha*) and no mention of a TV report or video."
    ]
  },
  {
    id: "n-bagagem",
    label: "N",
    title: "Mala extraviada",
    genre: "reclamacao",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Podcast Consumidor em Dia",
      body: [
        "Apresentador: Tá começando mais um Consumidor em Dia, o podcast que tira suas dúvidas de consumo. Hoje o tema é uma situação que ninguém quer viver: chegar ao destino e a mala não aparecer na esteira. Pra falar disso, eu converso com a advogada Renata Lopes. Renata, qual é a primeira coisa que a pessoa tem que fazer?",
        "Renata Lopes, advogada: Olha, a regra de ouro é: não sai do aeroporto sem registrar o problema. Vai direto no balcão da companhia aérea e pede o registro da bagagem extraviada. Eles têm que te dar um documento com um número de protocolo. Guarda esse papel e também a etiqueta da mala, aquela que colam no cartão de embarque.",
        "Apresentador: E se a mala demorar dias? A pessoa fica sem roupa, sem nada...",
        "Renata: Pois é. Se você está fora de casa, pode comprar o que é necessário, tipo roupa, escova de dente, remédio. Mas guarda todas as notas fiscais, tá? A companhia tem que reembolsar essas despesas, desde que sejam razoáveis. Ninguém vai pagar terno de grife, né?",
        "Apresentador: E se a companhia não responder?",
        "Renata: Primeiro, faz tudo por escrito, por e-mail ou pelo canal oficial, sempre com o número de protocolo. Se não resolver, registra uma reclamação no consumidor.gov.br. Muitas empresas respondem rápido por lá."
      ],
      note: "Stands in for an audio: read it once, cover it, then write."
    },
    prompt: "Você viajou de São Paulo para Recife pela Aurora Linhas Aéreas para participar de um congresso de uma semana. Sua mala não chegou e, cinco dias depois, ainda não foi encontrada. Você registrou o extravio no aeroporto e precisou comprar roupas e produtos de higiene. Escreva um e-mail de reclamação ao SAC da companhia: relate o problema e as providências que você já tomou, exija uma solução para a mala, solicite o reembolso das despesas e informe o que vai fazer se não for atendido.",
    checklist: [
      "Formal complaint format: a subject line with the protocol number, a vocativo (*Prezados senhores*), flight details (invented date and flight number), a closing such as *Atenciosamente* and an invented name.",
      "Written by a passenger to the airline's customer service; identifies the case in the first lines.",
      "Reports the problem and the steps taken, drawing on the audio: the missing bag was registered at the airline counter before leaving the airport, and the writer has the protocol number and the bag tag.",
      "Demands a solution for the bag (locate it and deliver it to the hotel or home address) with a deadline for a reply.",
      "Requests reimbursement of the emergency purchases, presents them as necessary and reasonable, and says the receipts are attached; states the next step if unresolved (a complaint on consumidor.gov.br).",
      "Firm, polite formal register with spoken marks converted (no *tá*, *né*, *olha*, *pra*) and no mention of a podcast."
    ]
  }
);
