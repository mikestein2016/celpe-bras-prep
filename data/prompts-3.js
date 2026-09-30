window.CB = window.CB || {};
CB.prompts = CB.prompts || [];
CB.prompts.push(
  {
    id: "v-feira-livre",
    label: "V",
    title: "Por que comprar na feira",
    genre: "blog",
    task: 4,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Feira livre: o que o supermercado não oferece",
      body: [
        "Barracas coloridas, feirantes anunciando preços em voz alta e cheiro de fruta madura. Mesmo com a concorrência dos supermercados e dos aplicativos de compra, a feira livre continua fazendo parte da semana de muitos brasileiros. E há bons motivos para isso.",
        "O primeiro é a qualidade. Muitos feirantes são pequenos produtores da região, que colhem frutas, verduras e legumes um ou dois dias antes da feira. Por isso, os produtos chegam mais frescos e duram mais em casa. Na feira, também é mais fácil encontrar as frutas da estação. Quando uma fruta está na safra, há muita oferta: o sabor melhora e o preço cai.",
        "O preço é o segundo motivo. Como há menos intermediários entre quem planta e quem compra, muitos produtos saem mais baratos do que no supermercado. No fim da manhã, começa a chamada “hora da xepa”: para não levar a mercadoria de volta, os feirantes baixam os preços. Quem chega perto do meio-dia encontra menos variedade, mas pode pagar metade do preço em muitas barracas.",
        "Há ainda a conversa. Na feira, o cliente pode perguntar ao produtor como a verdura foi cultivada, se foi usado agrotóxico e qual é a melhor forma de conservar cada alimento. “Muita gente vem aqui só para pedir receita”, conta Dona Lurdes Campos, que vende hortaliças orgânicas há vinte anos na feira de quarta-feira da Rua das Laranjeiras.",
        "As dicas dos frequentadores mais experientes são simples: levar sacolas retornáveis ou um carrinho de feira, já que muitas barracas não oferecem mais sacolas plásticas; ter dinheiro trocado ou usar o Pix; dar uma volta pela feira inteira antes de comprar, para comparar preços; e pedir para provar a fruta. Quanto ao horário, quem busca qualidade e variedade deve chegar cedo; quem busca economia pode deixar a feira para o fim."
      ]
    },
    prompt: "Você escreve o Tempero de Casa, um blog de receitas simples para o dia a dia. Muitos leitores contam nos comentários que fazem todas as compras no supermercado. Com base no texto, escreva um post para o blog incentivando os leitores a frequentar a feira livre: apresente as vantagens de comprar na feira e dê dicas para aproveitar melhor a visita.",
    checklist: [
      "Blog post format: a title that tells readers what they gain, an opening that speaks to the reader as *você*, short paragraphs or a short list of tips, and a closing that invites comments.",
      "Written by the cooking blogger to readers who shop only at the supermarket, with the aim of persuading them; no mention of an article or a text.",
      "Quality and price in new words: many stallholders are small local growers who pick the produce a day or two before, so it arrives fresher and lasts longer; seasonal fruit tastes better and costs less; fewer middlemen mean lower prices.",
      "The human side: you can ask the grower how the produce was grown, whether pesticides were used and how to store it, and some even share recipes.",
      "Practical tips as *você* imperatives (*leve*, *tenha*, *dê*, *peça*): bring your own bags or a cart, have change or use Pix, walk the whole market before buying, ask to taste; go early for variety or at the end (*hora da xepa*) for lower prices.",
      "Warm written register with no *pra*, *a gente* or *tem* for *há*; feminine agreement on *a feira*, *a estação*, *a xepa*, *as verduras*; crase in *ir à feira*."
    ]
  },
  {
    id: "w-cursinho-popular",
    label: "W",
    title: "Um espaço para o cursinho",
    genre: "solicitacao",
    task: 1,
    minutes: 30,
    source: {
      kind: "video",
      title: "Reportagem do telejornal local",
      body: [
        "Apresentador: Há seis anos, um cursinho gratuito prepara jovens de baixa renda para o Enem e para o vestibular aqui na cidade. Agora, o projeto corre o risco de fechar as portas. O repórter Diego Farias conta essa história.",
        "Repórter: São sete da noite, e o salão paroquial da Igreja São Judas está lotado. São sessenta alunos, quase todos de escola pública, que trabalham durante o dia e estudam aqui à noite. O Cursinho Popular Degrau funciona de segunda a quinta, das sete às dez, e todas as aulas são dadas por professores voluntários. Mas no fim do mês a paróquia vai começar uma reforma no salão, e o cursinho precisa sair.",
        "Kátia Moreira, coordenadora: A gente já bateu em muita porta. A gente precisa de duas salas, com cadeiras e um quadro, de segunda a quinta, à noite. Não precisa ser nada chique. E a gente não tem dinheiro pra aluguel, né? Aqui ninguém recebe nada.",
        "Repórter: O resultado aparece na lista de aprovados. No ano passado, vinte e dois alunos do Degrau passaram em universidades públicas. E a procura só cresce: hoje, oitenta jovens esperam uma vaga.",
        "Lucas Andrade, 19 anos, ex-aluno: Eu trabalhava numa padaria de manhã e de tarde e vinha pra cá à noite. Hoje eu faço Enfermagem na federal. Sem o cursinho, eu não ia ter condição de pagar um preparatório.",
        "Repórter: A coordenação garante que os alunos cuidam do espaço e que os voluntários fazem a limpeza depois das aulas. Quem puder ajudar pode falar com o cursinho pelas redes sociais."
      ],
      note: "Stands in for a video: read it once, cover it, then write."
    },
    prompt: "Você faz parte da coordenação do Cursinho Popular Degrau. No térreo do Edifício Horizonte, a poucos metros do salão paroquial, há três salas desocupadas que pertencem à Construtora Vale Norte. Com base na reportagem, escreva uma carta à diretoria da construtora solicitando o uso gratuito de duas dessas salas nas noites de segunda a quinta-feira. Em sua carta, apresente o cursinho, explique por que ele precisa de um novo espaço, justifique o pedido e diga o que o cursinho pode oferecer em troca.",
    checklist: [
      "Formal request letter: place and date, addressee (*À Diretoria da Construtora Vale Norte*), a subject line, *Prezados senhores*, a closing such as *Atenciosamente* and a signature by role (*Coordenação do Cursinho Popular Degrau*).",
      "Written by the course coordination to the company's board; states the request in the first paragraph and makes it exact: two rooms, Monday to Thursday, 7 to 10 p.m., free of charge.",
      "Presents the course with facts in new words: free, running for six years, sixty low-income public school students who work during the day, volunteer teachers, eighty young people on the waiting list.",
      "Explains why it needs a new space: the parish will renovate the hall at the end of the month, and the course has no money for rent.",
      "Justifies the request with results: twenty-two students passed into public universities last year, and a former student who worked in a bakery now studies nursing.",
      "Offers something in return (students look after the rooms, volunteers clean after class) and closes with thanks and availability; spoken marks converted (*a gente*, *pra*, *né*, *nada chique*) and no mention of a TV report."
    ]
  },
  {
    id: "x-vacina-gripe",
    label: "X",
    title: "Campanha de vacinação",
    genre: "aviso",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Programa Bem-Estar, Rádio Cidade Alta",
      body: [
        "Locutora: Bom dia, ouvintes! Na próxima segunda-feira, dia 13, começa a campanha de vacinação contra a gripe. Pra explicar como vai funcionar, a gente conversa com a enfermeira Sônia Prado, da Secretaria Municipal de Saúde. Bom dia, Sônia!",
        "Sônia Prado, enfermeira: Bom dia! Olha, nas três primeiras semanas, até o dia 2 de maio, a vacina é só pros grupos prioritários: idosos a partir de sessenta anos, crianças de seis meses a menos de seis anos, gestantes, profissionais de saúde, professores e pessoas com doença crônica, tipo diabetes ou problema no coração. Aí, do dia 4 até o dia 29 de maio, libera pra toda a população acima de seis meses.",
        "Locutora: E onde a pessoa vai?",
        "Sônia: Em qualquer um dos dezoito postos de saúde, de segunda a sexta, das oito da manhã às cinco da tarde. E, nos sábados 18 e 25 de abril, vai ter um posto extra no Ginásio Municipal, das oito à uma da tarde, pensando em quem trabalha durante a semana.",
        "Locutora: Precisa levar alguma coisa?",
        "Sônia: Um documento com foto e a carteirinha de vacinação, se tiver. Quem tem doença crônica leva também uma receita ou um relatório do médico. E professor e profissional de saúde levam um comprovante de trabalho, tipo o crachá.",
        "Locutora: Sônia, ainda tem muita gente com medo de que a vacina dê gripe. Isso é verdade?",
        "Sônia: Não, não é. A vacina não causa gripe, porque não tem vírus vivo. Às vezes o braço fica dolorido ou dá uma febre baixinha por um ou dois dias, e só. Outra coisa: tem que tomar todo ano, tá? O vírus muda, e a vacina é atualizada. Só quem tá com febre no dia da vacina deve esperar melhorar pra tomar."
      ],
      note: "Stands in for a recording: read it once, cover it, then write."
    },
    prompt: "Você trabalha no setor de Recursos Humanos da Tecelagem Bom Fio, em Serratinga. A empresa decidiu liberar os funcionários por até duas horas, sem desconto no salário, para que eles se vacinem contra a gripe nos postos de saúde. Com base na entrevista, escreva um aviso para o mural da empresa. Informe a decisão da empresa, explique quem pode se vacinar em cada período, onde e com quais documentos, e esclareça as dúvidas mais comuns sobre a vacina.",
    checklist: [
      "Aviso format: a title (*AVISO*) with a subject line, an addressee (*Prezados colaboradores*), short blocks of information, a standard closing line and a signature by the department with place and date.",
      "Written by HR in the company's name (*informamos*) to all employees; opens with the campaign start (Monday the 13th) and the company's decision to release staff for up to two hours without a pay cut, and says how to arrange it.",
      "Who and when, in new words: until May 2, priority groups only (people 60 and over, children from six months to under six, pregnant women, health workers, teachers, people with chronic illnesses); from May 4 to 29, everyone from six months up.",
      "Where and what to bring: any of the eighteen health posts, weekdays from 8 a.m. to 5 p.m., plus the Ginásio Municipal on Saturdays April 18 and 25 from 8 a.m. to 1 p.m.; photo ID and the vaccination card, plus a doctor's prescription or report for chronic illness and proof of employment (such as a badge) for teachers and health workers.",
      "Clears up doubts without adding medical claims: the vaccine does not cause flu, a sore arm or low fever for a day or two can happen, it must be taken every year, and anyone with a fever that day should wait.",
      "Spoken marks converted (*pra*, *tá*, *tipo*, *libera*, *vai ter*, *tem* for *há*), plural instructions (*levem*, *procurem*) and no mention of a radio program."
    ]
  },
  {
    id: "y-patinetes",
    label: "Y",
    title: "Patinetes nas calçadas",
    genre: "carta-do-leitor",
    task: 3,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Patinetes elétricos: solução ou problema?",
      body: [
        "Há seis meses, oitocentos patinetes elétricos compartilhados chegaram às ruas de Porto Claro. O funcionamento é simples: pelo aplicativo, o usuário localiza o patinete mais próximo, desbloqueia o veículo e paga R$ 1 para começar a corrida e R$ 0,60 por minuto. No fim do trajeto, pode deixá-lo em qualquer ponto da área atendida.",
        "O serviço conquistou estudantes e trabalhadores do Centro, que usam os patinetes em trajetos curtos, como o caminho entre a estação de metrô e o escritório. “Chego ao trabalho em cinco minutos, sem suar e sem enfrentar trânsito”, diz o analista de sistemas Bruno Teles, de 29 anos.",
        "As reclamações, porém, cresceram na mesma velocidade. Como não há pontos fixos de estacionamento, muitos patinetes ficam largados no meio das calçadas, sobre rampas de acessibilidade e na frente de garagens. Pessoas com deficiência visual e cadeirantes são as mais prejudicadas. Além disso, muitos usuários circulam pelas calçadas em alta velocidade. Nos últimos três meses, o Pronto-Socorro Municipal de Porto Claro atendeu 46 pessoas feridas em acidentes com patinetes, entre elas 12 pedestres atropelados.",
        "A Voa Mobilidade, empresa responsável pelo serviço, afirma que orienta os usuários pelo aplicativo e que a velocidade máxima dos patinetes é de 20 km/h. A prefeitura informou que estuda uma regulamentação, mas ainda não há prazo. Em outras cidades, as regras incluem a proibição de circular nas calçadas, a criação de áreas demarcadas para estacionar, limites menores de velocidade em regiões movimentadas, idade mínima de 18 anos e multa para quem abandonar o patinete em local inadequado."
      ]
    },
    prompt: "Você mora no Centro de Porto Claro e leu, no jornal Folha do Porto, a reportagem “Patinetes elétricos: solução ou problema?”. Escreva uma carta do leitor ao jornal. Em sua carta, comente a reportagem, posicione-se sobre o uso dos patinetes compartilhados na cidade, relate o que você observa no seu dia a dia e proponha regras para que patinetes e pedestres convivam com segurança.",
    checklist: [
      "Carta do leitor format: place and date, *Prezados editores*, a first line that names the report, *Atenciosamente* and a signature by role and place (*Um morador do Centro*).",
      "Written by a downtown resident to the paper for publication; takes a clear position early (for example, keep the service but with rules). Naming the paper's report is expected; calling it *o texto* is not.",
      "Uses the report's facts in new words: 800 scooters arrived six months ago and can be left anywhere; they are useful for short trips; they end up in the middle of sidewalks, on ramps and in front of garages; users ride fast on sidewalks; 46 people injured in three months, 12 of them pedestrians.",
      "Acknowledges the other side (convenience for short trips; the company says it guides users and caps speed at 20 km/h) before answering it.",
      "Adds a first-person observation from daily life downtown as evidence.",
      "Proposes concrete rules for the city, such as no riding on sidewalks, marked parking spots, lower speed in busy areas, fines and a minimum age, linked with connectors (*em primeiro lugar*, *além disso*, *por isso*).",
      "Formal register: *há*, not *tem*; no sentence opening with *Mas*; *aprovar* a regulation, never *passar*; agreement on *a regulamentação*, *a calçada*, *os patinetes*."
    ]
  },
  {
    id: "z-trabalho-hibrido",
    label: "Z",
    title: "Trabalho híbrido",
    genre: "resumo",
    task: 4,
    minutes: 45,
    source: {
      kind: "texto",
      title: "Trabalho híbrido: o escritório virou ponto de encontro",
      body: [
        "Nos últimos anos, muitas empresas brasileiras adotaram o trabalho híbrido: os funcionários vão ao escritório dois ou três dias por semana e trabalham de casa nos outros. O modelo se tornou comum em áreas como tecnologia, finanças e serviços administrativos, e já não é visto como uma solução temporária.",
        "Para os funcionários, o principal ganho é o tempo. Quem mora longe deixa de passar duas ou três horas no trânsito em parte da semana e usa essas horas para dormir melhor, praticar exercícios ou ficar com a família. Muitos gestores também relatam que as tarefas que exigem concentração, como relatórios e análises, rendem mais em casa, longe das interrupções do escritório.",
        "O modelo, porém, traz riscos. O primeiro é o isolamento. Os funcionários novos, em especial, aprendem menos quando não observam de perto os colegas mais experientes, e a sensação de pertencer a uma equipe diminui. O segundo é a jornada sem limites. Com o computador sempre à mão, muitos respondem a mensagens à noite e nos fins de semana e têm dificuldade de se desligar. Psicólogos alertam que esse comportamento aumenta o risco de esgotamento.",
        "Para enfrentar esses problemas, as empresas testam diferentes soluções. Algumas definem dias fixos em que toda a equipe vai ao escritório, para que reuniões e treinamentos aconteçam pessoalmente. Outras criam regras de desconexão, como não enviar mensagens depois das 19h, ou programas em que um funcionário experiente acompanha cada recém-contratado. Há ainda empresas que reformaram o escritório, com menos mesas individuais e mais salas de reunião e espaços de convivência.",
        "Para os especialistas ouvidos pela revista, o sucesso do modelo depende menos do número de dias presenciais e mais de acordos claros entre empresa e equipe: o que se faz em casa, o que se faz no escritório e em que momento cada um pode se desconectar."
      ]
    },
    prompt: "Você trabalha no escritório de contabilidade Balanço Certo, que vai adotar o trabalho híbrido no próximo ano. Antes da reunião de planejamento, a gerente da sua equipe pediu que você resumisse o artigo “Trabalho híbrido: o escritório virou ponto de encontro”, publicado na revista Carreira & Gestão, para que todos cheguem à reunião informados. Escreva o resumo, apresentando os ganhos, os riscos e as soluções que as empresas estão testando, sem incluir a sua opinião.",
    checklist: [
      "Resumo format: a title, an opening sentence that names the article, the magazine and its main idea (naming the source is the convention in this genre), third person and present tense, and a text much shorter than the original.",
      "Written for the manager and the team to read before the planning meeting; neutral, with no opinion and no advice of the writer's own.",
      "Gains in new words: less time in traffic, used for rest, exercise and family; focused work such as reports goes better at home, away from office interruptions.",
      "Risks: isolation, above all for new employees who learn less without watching experienced colleagues, and a weaker sense of belonging; working hours without limits, with the burnout risk that psychologists warn about.",
      "What companies are trying: fixed days for the whole team in the office, disconnection rules (no messages after 7 p.m.), an experienced employee for each newcomer, offices redesigned with more meeting and social spaces.",
      "Ends with the article's conclusion (clear agreements matter more than the number of office days), with varied reporting verbs (*afirma*, *aponta*, *alerta*, *conclui*) and connectors (*além disso*, *por outro lado*)."
    ]
  },
  {
    id: "aa-festival-comida",
    label: "AA",
    title: "Festival de comida mineira",
    genre: "noticia",
    task: 1,
    minutes: 30,
    source: {
      kind: "video",
      title: "Reportagem do telejornal regional",
      body: [
        "Apresentadora: Queijo, doce de leite, pão de queijo saindo do forno e muita música. Terminou ontem, em Cedro Alto, no interior de Minas, o quinto Festival Sabores do Cedro, com recorde de público. A repórter Carla Nunes acompanhou os três dias de festa.",
        "Repórter: Foram cerca de quarenta mil visitantes de sexta a domingo, o dobro do ano passado, numa cidade de doze mil habitantes. A rua principal foi fechada para os carros e recebeu sessenta barracas, todas de produtores da região: queijo artesanal, linguiça, broa de fubá, doces em compota e café das fazendas da serra.",
        "Antônio Ribeiro, produtor de queijo: Eu trouxe trezentos queijos. Na sexta de noite já tinha acabado tudo! Tive que voltar na fazenda pra buscar mais. Nunca vi um movimento desse aqui, não.",
        "Repórter: O festival também lotou os hotéis e as pousadas desde quinta-feira, e os restaurantes tiveram fila até tarde da noite.",
        "Juliana Freitas, secretária de Turismo: Pra cidade, o festival é uma vitrine. Muito produtor vende num fim de semana o que vende num mês inteiro. E tem gente que conheceu Cedro Alto agora e já tá planejando voltar pra fazer as trilhas e visitar as fazendas.",
        "Repórter: A prefeitura já confirmou a próxima edição para a mesma época do ano que vem. A ideia é levar o festival para o Parque de Exposições, onde cabem mais barracas. Os produtores que quiserem participar podem se cadastrar na Secretaria de Turismo a partir de janeiro."
      ],
      note: "Stands in for a video: read it once, cover it, then write."
    },
    prompt: "Você colabora com o Gerais em Pauta, um site de notícias sobre as cidades do interior de Minas Gerais. Com base na reportagem, escreva uma notícia sobre o Festival Sabores do Cedro. Em seu texto, apresente o evento e seus números, mostre o impacto do festival para os produtores e o comércio local e informe os leitores sobre a próxima edição.",
    checklist: [
      "Notícia format: a headline in the present tense, an optional subtitle (*linha fina*), a lead that answers what, who, where and when, and paragraphs in order of importance.",
      "Written for the regional site's general readers in the third person, with no *eu*, no *nós* and no opinion adjectives such as *incrível* or *maravilhoso*.",
      "The event in new words: fifth edition, three days in Cedro Alto (12,000 residents), about 40,000 visitors, twice last year's number; the main street closed to cars with sixty stalls of local products (cheese, sausage, cornmeal bread, preserves, coffee).",
      "Impact on producers and business: the cheesemaker sold all 300 cheeses by Friday night and had to go back for more; hotels and inns full from Thursday; restaurant queues late into the night; some producers sell in one weekend what they sell in a month; visitors plan to return.",
      "At least one quote or reported statement attributed by name and role (the producer or the tourism secretary), cleaned of spoken marks (*pra*, *tá*, *tem gente*, *voltar na fazenda*, *num*).",
      "Closes with service information: next edition at the same time next year, probably at the Parque de Exposições, and producer registration at the Secretaria de Turismo from January; no mention of a TV report."
    ]
  },
  {
    id: "ab-aluguel-temporada",
    label: "AB",
    title: "Aluguel por temporada",
    genre: "artigo-opiniao",
    task: 2,
    minutes: 30,
    source: {
      kind: "audio",
      title: "Debate na Rádio Maré FM",
      body: [
        "Apresentador: No programa de hoje, o assunto é o aluguel por temporada pelos aplicativos aqui em Vila do Farol. Estão comigo a Cláudia Reis, que aluga dois apartamentos para turistas, e o Marcos Lima, da Associação de Moradores do Centro Histórico. Cláudia, o que mudou pra você?",
        "Cláudia Reis, proprietária: Mudou tudo. Antes eu alugava por ano e recebia mil e duzentos reais por mês. Hoje, com o aplicativo, numa semana de alta temporada eu tiro isso. E não sou só eu, né? O turista que fica no meu apartamento come no restaurante, compra artesanato, contrata passeio de barco. O dinheiro gira na cidade.",
        "Apresentador: Marcos, e do lado dos moradores?",
        "Marcos Lima, associação de moradores: Olha, ninguém é contra o turismo. Mas no Centro Histórico, de cada três casas, uma virou hospedagem. Quase não tem mais casa pra alugar por ano, e o aluguel das que sobraram dobrou em três anos. Professor, enfermeira, garçom, quem trabalha aqui não consegue mais morar aqui. Tá todo mundo indo pra cidade vizinha e gastando uma hora de ônibus pra vir trabalhar.",
        "Apresentador: E o barulho? Chegam muitas reclamações aqui na rádio.",
        "Marcos: Pois é. Tem prédio que virou hotel: festa até de madrugada, gente diferente toda semana, lixo na calçada no dia errado. E a escola do bairro já perdeu alunos, porque as famílias foram embora.",
        "Cláudia: Eu concordo que precisa de regra. Mas proibir não é a solução. Tem cidade que limitou o número de dias por ano que um imóvel pode ser alugado por temporada, tem cidade que cobra uma taxa do turista e usa o dinheiro em moradia. Isso dá pra discutir.",
        "Apresentador: A Câmara Municipal vai votar um projeto sobre o tema no mês que vem."
      ],
      note: "Stands in for a recording: read it once, cover it, then write."
    },
    prompt: "Você mora em Vila do Farol, uma cidade histórica do litoral. A Câmara Municipal vai votar no próximo mês um projeto de lei sobre o aluguel de imóveis por temporada, e o jornal Voz do Farol abriu espaço para que moradores escrevam sobre o tema. Com base no debate, escreva um artigo de opinião para o jornal. Posicione-se sobre o aluguel por aplicativo na cidade, apresente argumentos, considere o ponto de vista contrário e proponha medidas à Câmara.",
    checklist: [
      "Artigo de opinião format: a title that signals the position, a thesis in the first paragraph, one argument per paragraph and a conclusion that restates the thesis. No vocativo and no letter signature.",
      "Written by a resident for the local paper's readers, framed by the council vote next month.",
      "Uses facts from the debate in new words: owners earn in one peak-season week what a yearly lease paid in a month; tourists spend in restaurants, on crafts and on boat trips; in the historic center one house in three is now lodging; the remaining rents doubled in three years; workers move to the next town and commute an hour; noise and trash; the local school has lost students.",
      "Takes a clear position and presents the other side fairly (income for owners, money circulating in town) before answering it.",
      "Proposes measures for the council, such as a cap on rental days per year and a tourist fee to fund housing, and says how they would help.",
      "Formal written register: *há*, not *tem*; no *a gente*, *pra*, *né*, *tá*; no sentence opening with *Mas*; *têm* and *mantêm* with the plural circumflex; no mention of a radio program."
    ]
  }
);
