window.CB = window.CB || {};
CB.models = CB.models || {};

CB.models['v-feira-livre'] = {
  answer: [
    '{{1|Feira livre: mais sabor, menos gasto e uma boa conversa}}',
    '{{2|Você ainda faz todas as compras no supermercado? Então este post é para você.}} Quase todas as receitas do Tempero de Casa começam na feira. Veja por quê.',
    '{{3|Em primeiro lugar,}} {{4|muitos feirantes são pequenos produtores da região e colhem as verduras e as frutas um ou dois dias antes.}} {{5|Por isso, elas chegam mais frescas}} e duram mais na geladeira. {{3|Além disso,}} na feira você encontra {{5|as frutas da estação}}, {{4|que têm mais sabor e custam menos. Como o produto passa por menos intermediários, o preço costuma ser menor do que no supermercado.}}',
    '{{3|Por fim,}} {{8|há a conversa.}} {{6|Você pode perguntar ao produtor como a verdura foi cultivada, se ele usa agrotóxico e qual é a melhor forma de conservá-la.}} {{8|Alguns feirantes até ensinam receitas!}}',
    '{{3|Quer aproveitar melhor a visita? Veja algumas dicas:}}',
    '1. {{7|Leve}} sacolas retornáveis ou um carrinho.',
    '2. {{7|Tenha}} dinheiro trocado ou {{7|pague}} com Pix.',
    '3. {{7|Dê}} uma volta completa antes de comprar e {{7|compare}} os preços.',
    '4. {{7|Peça}} para provar a fruta.',
    '5. {{9|Se você quer variedade, chegue cedo. Se prefere economizar, vá no fim, na hora da xepa, quando os preços caem.}}',
    '{{10|Que tal ir à feira neste fim de semana?}} {{11|E você, já tem uma barraca preferida? Conte nos comentários!}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'A blog post needs a title, and this one names the topic and the three gains the post will explain: flavor, savings and the conversation with the grower. Readers know what they will get before the first line.' },
    { n: 2, cat: 'papel', text: 'The blogger speaks straight to the readers the prompt describes, people who buy everything at the supermarket, and names the blog. The purpose is to persuade, so the post opens with a question to *você* instead of a general statement about markets.' },
    { n: 3, cat: 'coesao', text: '*Em primeiro lugar*, *Além disso* and *Por fim* list the three advantages, and the question *Quer aproveitar melhor a visita?* opens the tips. The grader can see both parts of the prompt, advantages and tips, in order.' },
    { n: 4, cat: 'fonte', text: 'Quality and price from the source, reworded. *Colhem ... um ou dois dias antes* keeps the key fact, and *há menos intermediários entre quem planta e quem compra* becomes *o produto passa por menos intermediários*. No article is mentioned; the blogger states the facts directly.' },
    { n: 5, cat: 'lingua', text: 'Gender check. *Elas* refers back to *as verduras e as frutas*, so *frescas* is feminine plural. *Estação* is feminine like every *-ção* noun: *as frutas da estação*, never *do estação*. Later, *conservá-la* agrees with *a verdura*.' },
    { n: 6, cat: 'fonte', text: 'The conversation with the grower, turned from a description (*o cliente pode perguntar*) into something the reader can do (*Você pode perguntar ao produtor*). The three questions come from the source, and *perguntar ao produtor* keeps the right preposition.' },
    { n: 7, cat: 'lingua', text: 'With *você*, the written imperative uses the subjunctive form: *leve*, *tenha*, *pague*, *dê*, *compare*, *peça*. *Leva*, *tem*, *paga*, *dá* and *pede* are the spoken forms and look careless in writing. *Dê* needs its circumflex, and *peça* its cedilla.' },
    { n: 8, cat: 'registro', text: '*Há a conversa* uses *haver* for "there is", and *Alguns feirantes até ensinam receitas* avoids the spoken *tem feirante que ensina receita*. The tone stays warm without dropping into speech.' },
    { n: 9, cat: 'fonte', text: 'The timing tip, rewritten as two short conditions. The source\'s *hora da xepa* stays because every Brazilian shopper knows the word, and the price drop is put in new words (*quando os preços caem*).' },
    { n: 10, cat: 'lingua', text: 'Crase: *ir a* + *a feira* = *ir à feira*. With a masculine place there is no crase: *ir ao supermercado*. The same rule gives *volta à escola*, *vou à praia*.' },
    { n: 11, cat: 'genero', text: 'The post ends by turning to the reader and asking for comments, the standard close of a blog post. The question before it (*Que tal ir à feira...?*) is the call to act the prompt asks for.' }
  ],
  why5: 'The post answers both parts of the prompt: why the feira is worth it and how to make the most of it. It fits the genre with a title, an opening question to *você*, short paragraphs, a numbered list of tips that each open with an imperative, and a call to comment. The writer is the cooking blogger talking to readers who shop only at the supermarket, and every paragraph serves the goal of persuading them. The source facts (small local growers, picking a day or two before, seasonal fruit, fewer middlemen, questions to the grower, the five tips and the *xepa*) are all there in new words, with no mention of an article. Cohesion comes from the three ordinal connectors and the question that opens the tips. The language models feminine agreement (*elas*, *da estação*, *conservá-la*), *você* imperatives with their accents and crase in *ir à feira*.',
  wordCount: 217
};

CB.models['w-cursinho-popular'] = {
  answer: [
    '{{1|Contagem, 5 de outubro de 2026}}',
    '{{1|À Diretoria da Construtora Vale Norte}}',
    '{{1|Assunto: pedido de uso de duas salas do Edifício Horizonte}}',
    '{{1|Prezados senhores,}}',
    '{{2|Em nome da coordenação do Cursinho Popular Degrau, solicitamos o uso gratuito de duas salas do térreo do Edifício Horizonte}} {{3|de segunda a quinta-feira, das 19h às 22h}}.',
    '{{4|Há seis anos, o Degrau prepara jovens de baixa renda para o Enem e o vestibular sem cobrar nada. Atendemos sessenta alunos, quase todos de escolas públicas, que trabalham durante o dia e estudam à noite. Todas as aulas são dadas por professores voluntários,}} e {{5|há oitenta jovens na lista de espera}}.',
    '{{6|No entanto,}} a paróquia que nos cede {{7|o salão vai reformá-lo}} no fim do mês, e {{5|não temos recursos para pagar aluguel}}. {{6|Sem um novo espaço,}} o cursinho pode fechar as portas.',
    '{{8|Nosso trabalho traz resultados concretos.}} {{4|No ano passado, vinte e dois alunos foram aprovados em universidades públicas. Um deles trabalhava em uma padaria durante o dia e hoje cursa Enfermagem em uma universidade federal.}}',
    '{{6|Em troca,}} {{9|nós nos comprometemos a cuidar das salas}}, e os voluntários farão a limpeza após cada aula. {{8|Também teremos prazer em divulgar o apoio da construtora em nossas redes sociais.}}',
    '{{10|Agradecemos a atenção e ficamos à disposição para apresentar o projeto pessoalmente.}}',
    '{{1|Atenciosamente,}}',
    '{{1|Coordenação do Cursinho Popular Degrau}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'The full frame of a formal request: place and date, addressee, an *Assunto* that states the request, *Prezados senhores*, *Atenciosamente* and a signature by role. The coordination signs, not a person, because the letter speaks for the course.' },
    { n: 2, cat: 'papel', text: 'The first sentence says who is writing, to whom and what for. *Em nome da coordenação* sets the first person plural for the whole letter, and the request is exact: two rooms, which building, free of charge. The board knows what is being asked before reading any detail.' },
    { n: 3, cat: 'lingua', text: 'Crase in times: *das 19h às 22h* (*de* + *as*, *a* + *as*, because *horas* is feminine). With days of the week and no article there is no crase: *de segunda a quinta-feira*, not *à quinta-feira*.' },
    { n: 4, cat: 'fonte', text: 'The course and its results, taken from the report and reworded: *passaram em universidades públicas* becomes *foram aprovados*, and the former student\'s story is told in the third person without his name. The numbers (six years, sixty students, twenty-two approvals) stay exact because they persuade.' },
    { n: 5, cat: 'registro', text: 'Spoken lines turned into a formal letter. *A gente não tem dinheiro pra aluguel, né?* becomes *não temos recursos para pagar aluguel*, and *oitenta jovens esperam uma vaga* becomes *há oitenta jovens na lista de espera*, with *há*, not *tem*.' },
    { n: 6, cat: 'coesao', text: '*No entanto* turns from what the course does to the problem, *Sem um novo espaço* states the consequence, and *Em troca* opens the offer. Each paragraph answers one part of the prompt in order: present, explain, justify, offer.' },
    { n: 7, cat: 'lingua', text: 'Gender. *-ção* and *-são* nouns are feminine, but the ending *-ão* alone does not decide: *o salão*, *o pão*, *o caminhão* are masculine. So the pronoun is *reformá-lo*, masculine, agreeing with *o salão*.' },
    { n: 8, cat: 'papel', text: 'A company board wants to know why it should say yes. The letter gives two reasons that fit that reader: proof that the project works, and public credit for the company\'s support. The second is the writer\'s own idea, which the prompt allows when it asks what the course can offer.' },
    { n: 9, cat: 'lingua', text: 'Regência: *comprometer-se a* + infinitive. The *a* is required, as in *ajudar alguém a* or *obrigar alguém a*. After the subject *nós*, the pronoun comes before the verb: *nós nos comprometemos*.' },
    { n: 10, cat: 'registro', text: 'The standard polite close for a request, with a concrete offer of a meeting. *Ficamos à disposição* carries crase (*a* + *a disposição*), and the plural verbs keep the voice of the coordination to the end.' }
  ],
  why5: 'The letter comes from the course coordination, goes to the board of the company that owns the rooms and states an exact request in its first sentence. It then does the four things the prompt asks in four short paragraphs. It presents the course (free, six years, sixty working students, volunteer teachers, a waiting list of eighty). It explains the need (the parish will renovate the hall, and there is no money for rent). It justifies the request with results (twenty-two approvals, the former student now in nursing). It offers something in return (care of the rooms, cleaning, public credit for the company). Every fact comes from the report in new words, with no mention of TV. *No entanto*, *Sem um novo espaço* and *Em troca* link the parts. The register is formal and cooperative in the first person plural, and the language models crase with times, *o salão* as a masculine *-ão* noun and *comprometer-se a*.',
  wordCount: 219
};

CB.models['x-vacina-gripe'] = {
  answer: [
    '{{1|AVISO}}',
    '{{1|Assunto: vacinação contra a gripe}}',
    '{{2|Prezados colaboradores,}}',
    '{{3|Informamos que a vacinação contra a gripe começa na segunda-feira, 13 de abril.}} {{4|A empresa liberará cada funcionário por até duas horas, sem desconto salarial. Combinem o horário com o supervisor.}}',
    '{{5|Até 2 de maio, a vacina é destinada aos grupos prioritários: pessoas com 60 anos ou mais, crianças de seis meses a menos de seis anos, gestantes, profissionais de saúde, professores e pessoas com doenças crônicas.}} {{6|De 4 a 29 de maio,}} {{5|todos a partir de seis meses poderão se vacinar.}}',
    'A vacina {{7|está disponível}} nos dezoito postos de saúde, {{8|de segunda a sexta-feira, das 8h às 17h}}. {{6|Além disso,}} nos sábados 18 e 25 de abril, {{7|haverá}} um posto extra no Ginásio Municipal, das 8h às 13h. {{9|Levem}} documento com foto e carteira de vacinação. {{9|Quem tiver}} doença crônica deve apresentar também receita ou relatório médico. Professores e profissionais de saúde devem levar um comprovante de trabalho, como o crachá.',
    '{{6|Por fim,}} {{10|a vacina não causa gripe, pois não}} {{12|contém}} {{10|vírus vivo. Pode haver dor no braço ou febre baixa por até dois dias. A vacinação deve ser anual, porque o vírus muda.}} {{9|Quem estiver}} com febre {{10|deve adiar a vacinação}}.',
    '{{11|Contamos com a participação de todos.}}',
    '{{11|Setor de Recursos Humanos}}',
    '{{11|Tecelagem Bom Fio}}',
    '{{11|Serratinga, 8 de abril de 2026}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: '*AVISO* and a subject line tell employees at a glance that this is an official notice and what it is about. On a bulletin board, the title is what makes people stop and read.' },
    { n: 2, cat: 'registro', text: '*Prezados colaboradores* is the standard formal address in company notices. It sets the plural for the whole text, so every instruction after it is plural too (*levem*, not *leve*).' },
    { n: 3, cat: 'papel', text: 'HR writes in the company\'s name with *Informamos que*, never as *eu*. The first sentence gives the reason for the notice: the campaign starts on Monday, April 13.' },
    { n: 4, cat: 'papel', text: 'The company\'s decision is the one piece of information only HR can give, and the prompt asks for it. The notice also says how to use it (*Combinem o horário com o supervisor*), which turns a policy into an action.' },
    { n: 5, cat: 'fonte', text: 'The two periods, reworded. *É só pros grupos prioritários* becomes *é destinada aos grupos prioritários*, and *libera pra toda a população* becomes *todos a partir de seis meses poderão se vacinar*. The list of groups stays complete because readers need to know if they are in it.' },
    { n: 6, cat: 'coesao', text: 'The notice moves in the order a reader needs: who, then where and when, then what to bring, then doubts. Dates open their sentences (*De 4 a 29 de maio*), *Além disso* adds the Saturday post, and *Por fim* opens the last block, the common doubts.' },
    { n: 7, cat: 'registro', text: '*A vacina está disponível* and *haverá um posto extra* are the written forms. *Tem vacina nos postos* and *vai ter um posto extra* are the spoken versions (the nurse uses *vai ter* on the radio), and they lower the register of an official notice.' },
    { n: 8, cat: 'lingua', text: 'Crase with times: *das 8h às 17h*, because *horas* is feminine. No crase with days of the week and no article: *de segunda a sexta-feira*.' },
    { n: 9, cat: 'lingua', text: 'Two verb forms to copy. The plural imperative for a group: *levem*, not *leva* or *levar*. And *quem* + future subjunctive for a condition that may or may not apply: *quem tiver*, *quem estiver*, and never the spoken *quem tá*.' },
    { n: 10, cat: 'fonte', text: 'The doubts from the interview, stated as plain facts and nothing more: no flu from the vaccine, a possible sore arm or low fever, a new dose every year, and a delay for anyone with a fever. *Pode haver* replaces the spoken *às vezes dá uma febre*. A health notice adds no medical claim the source did not make.' },
    { n: 11, cat: 'genero', text: 'A standard closing line, then the department, the company, place and date. No personal name appears, because the notice speaks for the institution.' },
    { n: 12, cat: 'lingua', text: 'Accent. *Contém* (singular, *a vacina contém*) has an acute accent; *contêm* (plural, *as vacinas contêm*) has a circumflex. The same pair works for *mantém/mantêm*; the base verb has *tem/têm*.' }
  ],
  why5: 'The notice is written by HR in the company\'s name to all employees and does everything the prompt asks. It opens with the campaign date and the company\'s decision, including how to use the two hours. It then gives who can be vaccinated in each period, where and when, and what to bring, and it closes by answering the common doubts. All facts come from the interview (the priority groups, May 2, May 4 to 29, eighteen health posts, the Saturday post at the gym, the documents, the four doubts) in new words and in written register, with no mention of a radio program and no medical claim beyond the source. The blocks follow the order a reader needs and are linked by dates and connectors. The language models the plural imperative, *quem* + future subjunctive, crase with times, *haverá* for *vai ter* and the accent on *contém*.',
  wordCount: 220
};

CB.models['y-patinetes'] = {
  answer: [
    '{{1|Porto Claro, 14 de outubro de 2026.}}',
    '{{1|Prezados editores,}}',
    '{{2|Li a reportagem "Patinetes elétricos: solução ou problema?" e gostaria de comentá-la}} {{3|como morador do Centro}}. {{4|Acredito que os patinetes podem continuar na cidade, desde que haja regras claras.}}',
    '{{5|É verdade que}} o serviço é prático. {{6|Para trajetos curtos, como ir da estação de metrô ao escritório, o patinete é rápido e evita o trânsito.}} {{5|No entanto,}} {{6|desde a chegada dos oitocentos veículos, há seis meses,}} as calçadas {{7|passaram a servir de estacionamento}}. {{3|Na minha rua, vejo patinetes deixados no meio da calçada quase todos os dias, inclusive sobre a rampa de acessibilidade da esquina.}} {{6|Muitos usuários também andam em alta velocidade entre os pedestres. Em três meses, 46 pessoas se feriram em acidentes, entre elas 12 pedestres.}}',
    '{{6|A empresa afirma que orienta os usuários pelo aplicativo e limita a velocidade a 20 km/h,}} {{7|mas a situação mostra que isso não basta.}}',
    '{{8|Por isso,}} {{9|a prefeitura deve aprovar a regulamentação}} com urgência. {{8|Em primeiro lugar,}} {{10|é preciso proibir a circulação nas calçadas e criar vagas próprias para os patinetes}}. {{8|Além disso,}} {{11|os usuários que deixarem o patinete em local inadequado}} devem ser multados, e {{10|a velocidade máxima deve ser menor nas ruas mais movimentadas}}.',
    '{{12|A tecnologia é bem-vinda, desde que a calçada continue sendo dos pedestres.}}',
    '{{1|Atenciosamente,}}',
    '{{1|Um morador do Centro}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'The frame of a letter to the editor: place and date, *Prezados editores*, *Atenciosamente* and a signature by role and place. Never a real name.' },
    { n: 2, cat: 'papel', text: 'The first line names the report and says why the reader is writing, which is what separates a *carta do leitor* from a general essay. *Comentá-la* is feminine because it refers back to *a reportagem*.' },
    { n: 3, cat: 'papel', text: 'The writer is a downtown resident, and he uses that role as evidence: *na minha rua, vejo...* The prompt asks for what he observes day to day, and a first-person detail like the ramp at the corner is something only this writer can add.' },
    { n: 4, cat: 'lingua', text: 'The position comes in the first paragraph, in one sentence. *Desde que* (provided that) always takes the subjunctive: *desde que haja*, and at the end *desde que a calçada continue*. *Desde que tem regras* would be wrong twice: indicative and spoken *tem*.' },
    { n: 5, cat: 'coesao', text: '*É verdade que ... No entanto* is the concession pattern. The writer grants the other side (the service is practical) before answering it, which makes the position look fair and meets the checklist.' },
    { n: 6, cat: 'fonte', text: 'Facts from the report in new words: the commute example, the 800 scooters six months ago, speeding among pedestrians, and the company\'s answer (guidance in the app and a 20 km/h cap). The injury figures stay exact (46 people, 12 pedestrians) because numbers are the strongest proof, and they come without *segundo o texto*.' },
    { n: 7, cat: 'registro', text: '*Passaram a servir de estacionamento* is the written way to say *viraram estacionamento*. And *mas* joins two clauses inside one sentence. Opening a new sentence with *Mas* is the spoken habit the genre guide warns against.' },
    { n: 8, cat: 'coesao', text: '*Por isso* turns the problem into a demand, then *Em primeiro lugar* and *Além disso* list the rules. The proposal paragraph reads as a numbered plan without looking like a list.' },
    { n: 9, cat: 'lingua', text: 'A regulation or a law is *aprovada*, never *passada*: *a prefeitura deve aprovar a regulamentação*. *Foi passado* is a calque of the English "was passed". *Regulamentação* is feminine, like every *-ção* noun.' },
    { n: 10, cat: 'fonte', text: 'The rules come from what other cities do, as the report describes, but they are adapted to Porto Claro and reworded: *áreas demarcadas para estacionar* becomes *vagas próprias para os patinetes*, and *limites menores de velocidade em regiões movimentadas* becomes *velocidade máxima menor nas ruas mais movimentadas*.' },
    { n: 11, cat: 'lingua', text: 'The fine applies to future cases, so the relative clause takes the future subjunctive: *os usuários que deixarem*. *Que deixar* would leave the plural subject *os usuários* without its ending.' },
    { n: 12, cat: 'genero', text: 'One sentence sums up the position before the closing, as the genre guide suggests. It echoes the thesis (keep the scooters, with conditions) in new words.' }
  ],
  why5: 'The letter is from a downtown resident to the paper that ran the report. It names the report in the first line and states a clear position right after it: keep the scooters, with rules. It grants the other side fairly (short trips, speed, the company\'s claim) and then answers it with the report\'s facts in new words (800 scooters, blocked sidewalks, speeding, 46 injured and 12 pedestrians) and one first-person observation that only this writer could make. It proposes concrete rules for the city and ends with a one-sentence summary before the closing. *É verdade que ... No entanto* handles the concession, and *Por isso*, *Em primeiro lugar* and *Além disso* organize the proposal. The register is formal and firm, with no sentence opening with *Mas*. The language models *desde que* + subjunctive, *aprovar* instead of the calque *passar*, the future subjunctive in *que deixarem* and feminine agreement in *comentá-la*.',
  wordCount: 220
};

CB.models['z-trabalho-hibrido'] = {
  answer: [
    '{{1|Resumo: trabalho híbrido}}',
    '{{2|O artigo "Trabalho híbrido: o escritório virou ponto de encontro", publicado na revista Carreira & Gestão, trata do modelo em que o funcionário vai ao escritório dois ou três dias por semana.}} {{3|A matéria apresenta os ganhos, os riscos e as soluções em teste nas empresas.}}',
    '{{4|Segundo a revista,}} {{5|o principal ganho é o tempo. Quem mora longe passa menos horas no trânsito e pode descansar mais, praticar exercícios ou ficar com a família.}} {{3|Além disso,}} {{6|muitos gestores afirmam}} {{5|que atividades que pedem concentração avançam melhor em casa, onde há menos interrupções.}}',
    '{{3|Por outro lado,}} o artigo {{6|aponta}} dois riscos. {{7|O primeiro é o isolamento. Os recém-contratados aprendem menos quando não convivem com colegas experientes, e a sensação de fazer parte da equipe}} {{8|diminui}}. {{7|O segundo é a falta de limites na jornada, já que muitos}} {{9|respondem a mensagens}} {{7|fora do horário.}} {{6|Psicólogos alertam}} que esse hábito aumenta o risco de esgotamento.',
    '{{3|Para enfrentar esses problemas,}} {{10|algumas empresas marcam dias fixos}} {{11|para a equipe se reunir}} {{10|no escritório. Outras proíbem mensagens depois das 19h ou colocam um profissional experiente para acompanhar cada novato. Algumas também trocaram mesas individuais por espaços de convivência.}}',
    '{{12|Na conclusão, especialistas ouvidos pela revista afirmam que}} o sucesso do modelo depende mais de acordos claros do que do número de dias no escritório.'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'A short title that labels the text as a summary and names the topic. The team sees at once what the page is.' },
    { n: 2, cat: 'papel', text: 'The first sentence names the article, the magazine and the main idea, so the manager and the team know exactly what they are reading about. It also defines the model in one clause, which helps colleagues who have not followed the subject.' },
    { n: 3, cat: 'coesao', text: 'The opening announces the plan (gains, risks, solutions), and each paragraph follows it, opened by a connector: *Além disso* adds, *Por outro lado* turns to the risks, *Para enfrentar esses problemas* moves to the solutions.' },
    { n: 4, cat: 'genero', text: 'In a *resumo*, *Segundo a revista* is a genre marker, not a mistake. The text exists to pass on another text, so its ideas must be credited to it. In any other genre on the exam you would state the fact directly.' },
    { n: 5, cat: 'fonte', text: 'The gains, reworded with new structures: *deixa de passar duas ou três horas no trânsito* becomes *passa menos horas no trânsito*, and *tarefas que exigem concentração rendem mais em casa, longe das interrupções* becomes *atividades que pedem concentração avançam melhor em casa, onde há menos interrupções*.' },
    { n: 6, cat: 'registro', text: 'Varied reporting verbs (*afirmam*, *aponta*, *alertam*) show what each source does and meet the checklist. *Fala que* or *diz que* in every sentence is the spoken default.' },
    { n: 7, cat: 'fonte', text: 'The two risks, kept in the order of the original and shortened. The illustration about computers always at hand is dropped, and *à noite e nos fins de semana* shrinks to *fora do horário*, because a summary keeps the idea and cuts the detail.' },
    { n: 8, cat: 'lingua', text: 'Accent and agreement. *Diminui* (it decreases) has no accent, while *diminuí* (I decreased) does. The verb is singular because its subject is *a sensação*, not *equipe* or the words between them.' },
    { n: 9, cat: 'lingua', text: 'Regência: in formal writing, *responder a* + what you answer: *responder a mensagens*, *responder ao e-mail*. Everyday speech drops the *a* (*responder as mensagens*), which the grader reads as a slip.' },
    { n: 10, cat: 'fonte', text: 'The four solutions, each in a new form: *definem dias fixos* becomes *marcam dias fixos*, the disconnection rule becomes *proíbem mensagens depois das 19h*, *recém-contratado* becomes *novato*, and the office redesign becomes *trocaram mesas individuais por espaços de convivência*.' },
    { n: 11, cat: 'lingua', text: 'Personal infinitive with a singular subject. *A equipe* is singular, so the infinitive has no ending: *para a equipe se reunir*. With a plural subject it changes: *para os funcionários se reunirem*.' },
    { n: 12, cat: 'genero', text: 'The summary ends with the article\'s own conclusion, credited to the specialists it quotes. The writer adds no opinion or advice, which is what the prompt asks for.' }
  ],
  why5: 'The text is a summary written for the manager and the team before the planning meeting, and it stays neutral from the first line to the last. It names the article and the magazine, announces the three parts the prompt asks for and then covers them in the order of the original: the gains, the two risks and the solutions companies are testing, closing with the specialists\' conclusion. Each point is reworded with new structures, examples are cut, and ideas are credited with varied reporting verbs, which is correct in a resumo. Connectors mark each move. The language models *responder a*, subject-verb agreement across a long subject, the accent contrast in *diminui* and *diminuí*, and the personal infinitive with a singular subject.',
  wordCount: 219
};

CB.models['aa-festival-comida'] = {
  answer: [
    '{{1|Festival Sabores do Cedro bate recorde de público em Cedro Alto}}',
    '{{1|Evento dobra o público do ano passado e lota hotéis e restaurantes}}',
    '{{2|A quinta edição do Festival Sabores do Cedro terminou no domingo em Cedro Alto, no interior de Minas Gerais, com cerca de 40 mil visitantes em três dias.}} {{3|O público foi mais do que o triplo da população local, de 12 mil habitantes.}}',
    'A rua principal {{4|foi fechada}} para os carros e recebeu sessenta barracas de produtores da região. {{3|Os visitantes encontraram queijo artesanal, linguiça, broa de fubá, doces em compota e café da serra.}}',
    '{{5|O movimento surpreendeu os produtores.}} O produtor de queijo Antônio Ribeiro levou {{6|trezentas peças e vendeu todas}} já na sexta-feira à noite. Ele precisou {{7|voltar à fazenda}} para buscar mais. {{8|Além disso,}} {{3|os hotéis e as pousadas ficaram lotados desde quinta-feira, e os restaurantes tiveram filas até tarde da noite.}}',
    '{{9|"Muitos produtores vendem em um fim de semana o que vendem em um mês", afirmou Juliana Freitas, secretária de Turismo.}} {{8|Segundo ela,}} {{10|há visitantes que conheceram a cidade durante o evento e já planejam voltar}}.',
    '{{11|A prefeitura já confirmou a sexta edição para o ano que vem e pretende levá-la para o Parque de Exposições, um espaço maior. Produtores interessados podem se cadastrar na Secretaria de Turismo a partir de janeiro.}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'A headline in the present tense with the main fact (*bate recorde*), no period, then a *linha fina* that adds the comparison with last year and the impact. A reader who stops here already has the story.' },
    { n: 2, cat: 'genero', text: 'The lead answers what (the fifth festival), where (Cedro Alto, in Minas Gerais), when (ended on Sunday, three days) and the result (about 40,000 visitors). The report said *ontem*; a news item gives the day, since readers may see it later.' },
    { n: 3, cat: 'fonte', text: 'Numbers and details from the report, reworded: the town\'s size becomes a comparison (*mais do que o triplo da população local*), and *café das fazendas da serra* becomes *café da serra*. No TV report is mentioned.' },
    { n: 4, cat: 'lingua', text: 'The participle agrees with its subject: *a rua foi fechada*. In *os hotéis e as pousadas ficaram lotados*, a mixed group takes the masculine plural. This is also the right structure where English says "was passed": a law *foi aprovada*, never *foi passada*.' },
    { n: 5, cat: 'papel', text: 'The reporter never says *incrível* or *um sucesso*. The impact comes from facts (a sold-out cheesemaker, full hotels, queues), and opinions appear only inside a quote attributed to someone. That keeps the neutral third person the genre requires.' },
    { n: 6, cat: 'lingua', text: 'Gender follows the noun you choose. *Trezentos queijos* is masculine, but *peça* is feminine, so the number and the pronoun change too: *trezentas peças*, *vendeu todas*. Check every number and adjective against its noun.' },
    { n: 7, cat: 'lingua', text: 'Regência and crase: *voltar a* + *a fazenda* = *voltar à fazenda*. The producer says *voltar na fazenda*, which is common in speech but marked as an error in writing.' },
    { n: 8, cat: 'coesao', text: '*Além disso* adds the hotels and restaurants to the producers\' story, and *Segundo ela* links the next fact back to the secretary quoted before it, so her name does not need repeating.' },
    { n: 9, cat: 'genero', text: 'A direct quote with name, role and the verb *afirmou*, as the genre asks. The words are cleaned for print: *num* becomes *em um*, which is more formal (*num* and *numa* are also accepted in writing), and *muito produtor vende* becomes *muitos produtores vendem*. A quote keeps the speaker\'s idea, not her spoken grammar.' },
    { n: 10, cat: 'registro', text: '*Há visitantes que* replaces the spoken *tem gente que*, and *já planejam voltar* replaces *já tá planejando voltar*. Reported speech lets the writer keep the idea and drop the spoken form.' },
    { n: 11, cat: 'fonte', text: 'The last paragraph is the *serviço*: next edition, probable new venue and how producers can register. It comes last because it is useful but not the main news. *Levá-la* is feminine because it refers to *a sexta edição*.' }
  ],
  why5: 'The text is a news item for a regional site, written in the neutral third person with no opinion of the writer\'s own. It has a present-tense headline, a subtitle, and a lead that answers what, where, when and how many. The paragraphs then follow the order the prompt asks for: the event and its numbers, the impact on producers and local business, a quote from the tourism secretary, and service information about the next edition. Every fact comes from the report in new words (40,000 visitors, twice last year, 12,000 residents, sixty stalls, the 300 cheeses sold by Friday, full hotels, queues, the Parque de Exposições, registration in January), and the spoken lines are cleaned for print. *Além disso* and *Segundo ela* link the paragraphs. The language models passive agreement, *trezentas peças* agreeing with a feminine noun and crase in *voltar à fazenda*.',
  wordCount: 219
};

CB.models['ab-aluguel-temporada'] = {
  answer: [
    '{{1|Vila do Farol precisa de turistas e de moradores}}',
    '{{2|O aluguel por aplicativo mudou o Centro Histórico de Vila do Farol. No próximo mês, a Câmara vai votar um projeto sobre o tema.}} {{3|Defendo que esse aluguel continue, mas com limites claros.}}',
    '{{4|É inegável que}} {{5|o sistema traz renda. Há proprietários que ganham em uma semana de alta temporada o que recebiam em um mês de aluguel anual.}} {{4|Além disso,}} {{5|os turistas gastam no comércio local e em passeios de barco}}, e esse dinheiro circula na cidade.',
    '{{4|No entanto,}} quem vive aqui paga um preço alto. {{6|Uma em cada três casas do Centro Histórico funciona como hospedagem, e o aluguel das poucas que restam dobrou em três anos.}} Professores, enfermeiras e garçons, que {{7|mantêm}} a cidade funcionando, {{8|já não conseguem morar aqui}}. {{6|Muitos se mudaram para cidades vizinhas e levam uma hora até o trabalho. A escola do bairro já perdeu alunos}}, e {{8|há reclamações}} de barulho e lixo.',
    '{{4|Por isso,}} {{9|a Câmara deve aprovar regras que protejam}} os moradores sem acabar com o turismo. {{10|É possível fixar um limite anual de dias de aluguel para turistas. Uma taxa cobrada dos turistas também poderia financiar moradia para os trabalhadores.}}',
    '{{11|Em suma, Vila do Farol precisa dos turistas, mas precisa ainda mais de quem vive aqui o ano inteiro.}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'An opinion piece needs a title, and this one signals the position: the town needs both groups. The title is a scored genre marker, so never leave it out.' },
    { n: 2, cat: 'papel', text: 'Two sentences of context for local readers: what changed and why the topic matters now (the council vote next month). The writer is a resident writing for neighbors, so the vote gives the article its reason to exist.' },
    { n: 3, cat: 'genero', text: 'The thesis comes at the end of the first paragraph, in one sentence. *Defendo que* expresses a wish about what should happen, so it takes the subjunctive: *que esse aluguel continue*.' },
    { n: 4, cat: 'coesao', text: '*É inegável que* grants the other side, *Além disso* adds to it, *No entanto* turns to the answer, *Por isso* leads to the proposal and *Em suma* concludes. Each paragraph has one job, and the reader can follow the argument by the connectors alone.' },
    { n: 5, cat: 'fonte', text: 'The owners\' side, presented fairly and in new words. One owner\'s story becomes a general fact (*há proprietários que ganham...*), and *o dinheiro gira na cidade* becomes *esse dinheiro circula na cidade*.' },
    { n: 6, cat: 'fonte', text: 'The residents\' side, reworded from the debate: *de cada três casas, uma virou hospedagem* becomes *uma em cada três casas funciona como hospedagem*, and the one-hour commute and the school that lost students become evidence for the thesis.' },
    { n: 7, cat: 'lingua', text: 'Accent. *Que mantêm* refers to *professores, enfermeiras e garçons*, a plural subject, so it takes the circumflex: *mantêm*. The singular is *mantém*. The same pair works for *têm/tem* and *contêm/contém*.' },
    { n: 8, cat: 'registro', text: 'Spoken lines rewritten for print. *Quem trabalha aqui não consegue mais morar aqui* becomes *já não conseguem morar aqui*, *tá todo mundo indo* disappears, and the complaints about noise and trash become *há reclamações de barulho e lixo*, with *há*, not *tem*.' },
    { n: 9, cat: 'lingua', text: 'A law or a rule is *aprovada*, never *passada*, which is the English calque. *Regras que protejam* uses the subjunctive because the rules do not exist yet: the writer describes the kind of rule the council should approve.' },
    { n: 10, cat: 'fonte', text: 'The two measures from the debate, a cap on rental days and a tourist fee for housing, turned into proposals for the council. Each one answers a problem named earlier: fewer homes for rent and workers who cannot afford to live in town.' },
    { n: 11, cat: 'genero', text: 'The conclusion restates the thesis in new words and in one balanced sentence. *Em suma* signals the end, and no new argument appears.' }
  ],
  why5: 'The article is written by a resident for the local paper, framed by the council vote, and it states its thesis at the end of the first paragraph. It has a title that signals the position, one paragraph for the other side, one for the answer, one for the proposals and a one-sentence conclusion. The facts from the debate appear in new words and are used as evidence, not retold: the owner\'s income and tourist spending on one side, the one-in-three houses, doubled rents, the one-hour commute, the school and the noise on the other. The two measures come from the debate and are tied to the problems they solve. Connectors carry the argument from concession to conclusion. The register is formal throughout, with no spoken marks and no sentence opening with *Mas*. The language models *defender que* and *regras que* with the subjunctive, *aprovar* instead of the calque *passar* and the plural circumflex in *mantêm*.',
  wordCount: 218
};
