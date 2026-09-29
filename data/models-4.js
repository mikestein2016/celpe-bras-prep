window.CB = window.CB || {};
CB.models = CB.models || {};

CB.models["o-catadores"] = {
  answer: [
    "{{1|Vale do Sol, 24 de fevereiro de 2026}}",
    "{{1|Prezados editores,}}",
    "{{2|Li o balanço do carnaval publicado pelo Diário do Vale no último domingo. A matéria elogiou a organização da festa, mas deixou de fora as pessoas que limparam as ruas depois dos blocos.}}",
    "{{3|Moro na Avenida Beira-Rio}} {{4|há doze anos}}. {{3|Na manhã seguinte ao último bloco, a avenida já estava limpa.}} Isso foi obra dos catadores da Cooperativa Recicla Vida. {{5|Em quatro dias de festa, os sessenta cooperados recolheram dezoito toneladas de latas e garrafas PET, que serão vendidas}} {{6|à indústria em vez de irem}} {{5|para o aterro. Eles trabalharam a noite inteira atrás dos blocos, e alguns caminharam mais de vinte quilômetros por dia.}}",
    "{{7|Esse trabalho, porém,}} é feito em condições difíceis. {{8|O galpão da cooperativa é pequeno e cheio de goteiras, e o grupo precisa alugar um caminhão.}} {{7|Além disso,}} {{9|nem todos os cooperados têm}} {{8|luvas e botas, e a cidade não paga pelo serviço.}}",
    "{{7|Por isso,}} {{10|peço que a prefeitura ofereça um apoio concreto}}: {{8|um galpão maior, um caminhão próprio, equipamentos de proteção e um contrato que}} {{10|remunere}} {{8|a cooperativa pela limpeza.}} {{11|A prefeitura afirmou que estuda ampliar a parceria, mas uma promessa sem prazo não basta.}} {{12|Quem limpa a cidade merece mais do que um agradecimento.}}",
    "{{1|Atenciosamente,}}",
    "{{1|Um morador da Avenida Beira-Rio}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "The frame of a carta do leitor: place and date, *Prezados editores,*, *Atenciosamente* and a role signature. The signature says where the writer lives, which is the reason his view matters." },
    { n: 2, cat: "papel", text: "The first paragraph names what the paper published, grants it a point and then states what it left out. The editors know in two sentences which article the letter answers and what the writer's position is." },
    { n: 3, cat: "papel", text: "The writer's own experience as evidence. A resident's line about the clean street at dawn becomes the writer's own morning, told in the first person. A letter to the editor is stronger when the writer has seen the problem himself." },
    { n: 4, cat: "registro", text: "*Há doze anos* uses *haver* for elapsed time. *Tem doze anos que moro aqui* is the spoken version and costs register points in a formal letter." },
    { n: 5, cat: "fonte", text: "The recognition rests on the source's facts, reworded: sixty members, four days, eighteen tons of cans and PET bottles, the landfill avoided, the night shift behind the blocos and the twenty kilometers a day. The numbers stay exact because they are the proof, and no TV report is mentioned." },
    { n: 6, cat: "lingua", text: "Two points in one phrase. *Vender algo a alguém* + *a indústria* gives the crase in *à indústria*. *Em vez de irem* is the personal infinitive: the cans and bottles are the subject of *ir*, so the infinitive takes the plural ending. *As latas irem* follows the same rule as *para as crianças passarem*: a plural subject needs a plural ending." },
    { n: 7, cat: "coesao", text: "*Esse trabalho, porém,* points back to everything the previous paragraph described and turns to the problems in one move. *Além disso* adds a second group of problems, and *Por isso* leads from the problems to the request. Each paragraph has one job: the article, the work, the difficulties, the demand." },
    { n: 8, cat: "fonte", text: "The difficulties and the co-op's requests from the source: a small warehouse full of leaks, a rented truck, too few gloves and boots, no payment for the service. The president's list (*luva e bota pra todo mundo*) becomes *equipamentos de proteção*, and *que a prefeitura pague* becomes a contract that pays the co-op for the cleaning." },
    { n: 9, cat: "lingua", text: "*Nem todos os cooperados têm* takes the circumflex because the subject is plural. *Ele tem*, *eles têm*. Autocorrect does not catch this, since both spellings are real words." },
    { n: 10, cat: "lingua", text: "*Pedir que* takes the present subjunctive: *peço que a prefeitura ofereça*. The relative clause *um contrato que remunere* is also in the subjunctive, because the contract does not exist yet. *A prefeitura tem que dar* would be both spoken and pushy." },
    { n: 11, cat: "fonte", text: "The city's statement that it is studying the partnership with no deadline is reported with *afirmou que* and then answered. The letter uses the source's last detail as an argument instead of leaving it out." },
    { n: 12, cat: "registro", text: "The closing sums up the letter in one sentence that is firm without being rude. There is no insult to the city and no exclamation mark, which fits a reader writing to a newspaper for all its readers to see." }
  ],
  why5: "The letter fits its context. A resident of the avenue writes to the paper that published the carnival review and to its readers, and he asks the city to act. It follows the genre: place and date, *Prezados editores*, a first paragraph that names the article and states the position, the writer's own experience, a request and a role signature. It covers the three parts of the prompt in order: recognition of the work, the co-op's difficulties and a concrete request. The source is used almost in full (the numbers, the night work, the warehouse, the truck, the protective gear, the city's vague answer) and reworded, with no mention of a report. Reference words and connectors (*Esse trabalho, porém*, *Além disso*, *Por isso*) hold it together. The language shows *há* for elapsed time, the personal infinitive, crase, *têm* with its accent and *pedir que* with the subjunctive.",
  wordCount: 216
};

CB.models["p-ansiedade-provas"] = {
  answer: [
    "{{1|Assunto: dicas para a prova}}",
    "{{1|Oi, Lívia!}}",
    "{{2|Sua mãe me contou que você anda nervosa com o vestibular e dormindo pouco. Eu me lembro dessa fase, então resolvi te escrever.}}",
    "{{3|Fique tranquila. Um pouco de ansiedade é normal e até ajuda a manter a atenção. Ela só vira um problema quando tira o sono ou trava os estudos.}}",
    "{{4|Por falar em sono,}} {{5|chega de estudar de madrugada!}} {{6|Você precisa dormir de oito a dez horas, porque o cérebro guarda o que aprendeu durante o sono.}} {{7|E nada de virar a noite na véspera, combinado?}}",
    "{{6|Estude em blocos de uns cinquenta minutos, com pausas de dez. Nas pausas, levante, ande e beba água, longe do celular. Uma caminhada de meia hora por dia também ajuda.}}",
    "{{8|Quanto à comida,}} {{6|faça refeições leves e regulares e diminua o café e os energéticos. No dia da prova, coma o que já conhece e leve água e uma fruta.}}",
    "{{4|Na véspera,}} {{9|descanse, separe o documento com foto e a caneta preta, confira o endereço e saia cedo.}} {{10|Se der um branco na prova, respire devagar, contando até quatro ao puxar e ao soltar o ar. Depois, pule a questão e}} {{8|volte a ela}}.",
    "{{11|E lembre que uma prova é importante, mas não define a vida de ninguém. Estou torcendo por você!}}",
    "{{1|Um beijo,}}",
    "{{1|Tia Márcia}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "The personal e-mail frame: a short friendly subject, *Oi* plus her first name, and *Um beijo* with *Tia Márcia* at the end. The signature shows the family tie at once. *Prezada Lívia* or *Atenciosamente* would be register errors with a niece." },
    { n: 2, cat: "papel", text: "The opening says how the aunt knows about the stress (Lívia's mother told her) and why she is writing. It also names the two problems the prompt gave, nerves and poor sleep, so every piece of advice that follows has a reason." },
    { n: 3, cat: "fonte", text: "The psychologist's first point, reworded for a teenager: some anxiety is normal and even helps you stay alert, and it only becomes a problem when it takes your sleep or blocks your studying. Reassurance comes before advice, as the prompt asks (*tranquilizando-a*)." },
    { n: 4, cat: "coesao", text: "Short openers name the topic of most paragraphs: *Por falar em sono*, *Quanto à comida*, *Na véspera*. The paragraphs follow the order of the prompt (sleep, study, food, the day before and the exam), so Lívia can find each piece of advice. Formal connectors would sound stiff in a note to a niece." },
    { n: 5, cat: "papel", text: "The prompt says Lívia is studying until dawn, so the aunt answers that habit directly before giving the general rule. Advice aimed at the reader's real problem is what the grader looks for in *papel*." },
    { n: 6, cat: "fonte", text: "The advice from the source, turned into instructions: eight to ten hours of sleep and the reason (the brain stores what you learned while you sleep), 50-minute blocks with 10-minute breaks away from the phone, half an hour of walking, light, regular meals, less coffee and energy drinks, familiar food on the day, water and a snack." },
    { n: 7, cat: "registro", text: "Informal touches that suit an e-mail to a niece: *te escrever*, *chega de*, *nada de virar a noite*, *combinado?* and *dar um branco*. In a formal genre each of these would cost points. Here they make the aunt sound like herself." },
    { n: 8, cat: "lingua", text: "Crase and regência. *Quanto a* + *a comida* gives *quanto à comida*. *Voltar a algo*: *volte a ela* (to the question), not *volte nela*, which is the spoken form the psychologist used." },
    { n: 9, cat: "lingua", text: "The written imperative for *você* uses the present subjunctive: *descanse*, *separe*, *confira*, *saia*. *Conferir* and *sair* are irregular (*confira*, *saia*). The spoken forms in the source (*descansa*, *separa*, *confere*, *sai*) are fine in speech but look careless on paper, even in a personal e-mail." },
    { n: 10, cat: "fonte", text: "The breathing tip for a blank mind, with the count of four in and four out, followed by the advice to skip the question and come back later. The source's steps stay in the same order, in the aunt's words." },
    { n: 11, cat: "papel", text: "The last lines repeat the psychologist's closing idea (one exam does not define a life) as the aunt's own belief and end with affection. An e-mail meant to calm someone should end on support, not on one more instruction." }
  ],
  why5: "The e-mail fits its context. An aunt writes to her anxious niece because the girl's mother told her about the problem, and she calms her before she advises her. It has the genre's frame (friendly subject, *Oi, Lívia!*, *Um beijo* and a family signature) and covers every topic the prompt listed in order: reassurance, sleep, study breaks, food, the day before and a blank mind during the exam. Almost every fact from the interview appears, reworded as instructions for one teenager, and the radio program is never mentioned. Topic openers carry the reader from one piece of advice to the next. The register is warm and informal (*te escrever*, *chega de*, *combinado?*), while the imperatives, accents, crase and regência stay standard.",
  wordCount: 220
};

CB.models["q-bike-trabalho"] = {
  answer: [
    "{{1|Vagas para bicicletas: um bom negócio para todos}}",
    "{{2|A diretoria da Alvorada Seguros avalia a proposta de transformar parte das vagas da garagem em um bicicletário com vestiário.}} {{3|Defendo que a empresa aprove a ideia,}} {{4|desde que venha acompanhada}} {{3|de medidas de segurança.}}",
    "{{5|Em primeiro lugar,}} {{6|quem pedala até o trabalho faz exercício diariamente sem pagar academia e economiza combustível ou passagem. Sem ficar presa no trânsito, a bicicleta também torna a chegada mais previsível.}}",
    "{{5|Além disso,}} a empresa sai ganhando, {{6|porque funcionários mais ativos costumam ter mais disposição, e uma vaga de carro abriga várias bicicletas.}} {{6|Em uma metalúrgica que instalou bicicletário e vestiários, o número de}} {{8|funcionários que vão}} {{6|de bicicleta passou de 12 para 50 em um ano.}}",
    "{{5|É verdade que}} {{9|muitas ruas não}} {{8|têm}} {{9|ciclovias e que o medo de acidentes afasta muitas pessoas.}} {{7|Há}} {{9|ainda o calor, a chuva, a distância e o risco de furto.}} {{5|No entanto,}} a empresa pode reduzir esses obstáculos. {{10|Sugiro que ela instale}} {{11|um bicicletário coberto e seguro}}, {{10|organize}} {{11|grupos para pedalar juntos nos primeiros dias}} e {{10|ofereça}} {{11|um curso rápido sobre regras de trânsito e manutenção. Quem mora longe pode combinar a bicicleta com o ônibus.}}",
    "{{5|Em suma,}} {{3|trocar algumas vagas de carro por bicicletas é um investimento pequeno, com retorno grande para todos.}}",
    "{{1|Carla Menezes, analista de Sinistros}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "The title states the position before the first line, and the article ends with the writer's name and role, the usual byline in an internal newsletter. There is no vocativo and no *Atenciosamente*, because an opinion article is not a letter." },
    { n: 2, cat: "papel", text: "The first sentence names the proposal under debate in the terms colleagues know (the board, the garage spaces, the bike rack). The readers are coworkers and managers, so the article speaks about their company, not about cycling in general." },
    { n: 3, cat: "registro", text: "*Defendo que* commits to a position. *Eu acho que* sounds unsure and conversational. The conclusion restates the thesis in new words (*um investimento pequeno, com retorno grande*) instead of repeating the first sentence." },
    { n: 4, cat: "lingua", text: "*Desde que* (provided that) always takes the subjunctive: *desde que venha*. The thesis also uses the subjunctive after *defendo que* (*que a empresa aprove*), because it states what the writer wants to happen. *Acompanhada* is feminine because it agrees with *a ideia*." },
    { n: 5, cat: "coesao", text: "The argument runs on connectors: *Em primeiro lugar* and *Além disso* for the two arguments, *É verdade que... No entanto* for the concession and the answer, *Em suma* for the conclusion. Each paragraph does one job, the structure graders look for in this genre." },
    { n: 6, cat: "fonte", text: "The benefits from the source, reworded as evidence: daily exercise without a gym, savings on fuel or fares, a predictable arrival time, several bikes in one car space and more energy at work. The metalworks case (from 12 to 50 cyclists in a year) is the concrete proof, cited without naming the text." },
    { n: 7, cat: "registro", text: "*Há ainda o calor...* uses *haver* for \"there is\". *Tem ainda o calor* is spoken and is one of the most common register slips in formal writing." },
    { n: 8, cat: "lingua", text: "Plural agreement. *Funcionários que vão*: the verb agrees with *funcionários*, the noun that *que* refers to. *Muitas ruas não têm*: plural subject, so *têm* takes the circumflex." },
    { n: 9, cat: "fonte", text: "The obstacles from the source, stated fairly before they are answered: few bike lanes, fear of accidents, heat, rain, long distances and theft. A counter-argument that is presented honestly makes the answer to it more convincing." },
    { n: 10, cat: "papel", text: "An employee writing to management suggests rather than demands: *Sugiro que ela instale, organize, ofereça*. *Sugerir que* takes the present subjunctive, and *ela* refers back to *a empresa*, so the company stays in the third person." },
    { n: 11, cat: "fonte", text: "The specialists' recommendations become the writer's own proposals: a covered, secure rack (which also answers the theft risk), group rides for beginners, a short course on traffic rules and maintenance, and combining the bike with public transport for people who live far away." }
  ],
  why5: "The article fits its context. An employee writes in the internal newsletter for colleagues and managers about a proposal they all know, and every argument is about their company. It follows the genre: a title that states the position, a one-sentence thesis, two arguments, a fair counter-argument with an answer, a conclusion that restates the thesis and a byline. The source is used as evidence throughout (exercise, savings, predictability, space, the metalworks case, the obstacles, the specialists' measures) and always reworded. Connectors mark each step of the argument. The language is formal and accurate: *defendo que* instead of *eu acho*, *há* instead of *tem*, *desde que* and *sugiro que* with the subjunctive, and plural agreement in *vão* and *têm*.",
  wordCount: 220
};

CB.models["r-museu-gratuito"] = {
  answer: [
    "{{1|Museu Casa da Estação passa a ter entrada gratuita aos domingos}}",
    "{{1|Programação inclui visitas em Libras e oficina infantil}}",
    "{{2|O Museu Casa da Estação, na Vila Ferroviária, terá entrada gratuita aos domingos a partir de 11 de outubro, das 10h às 17h.}} {{3|De terça a sábado, o ingresso custa R$ 20, com meia-entrada para estudantes e pessoas com mais de 60 anos.}}",
    "{{4|Segundo o museu,}} {{5|a mudança busca aproximar o espaço dos moradores. Um levantamento da equipe mostrou que}} {{6|a maioria dos visitantes vem}} {{5|de outras cidades e muitos moradores nunca entraram no prédio.}} {{7|\"Queremos que as famílias da cidade se sintam em casa aqui\", afirmou a diretora, Helena Prado.}}",
    "{{8|Além da gratuidade,}} {{9|haverá}} {{10|visitas guiadas em Libras no primeiro e no terceiro domingo de cada mês, às 11h. Um educador surdo conduzirá grupos de até 15 pessoas.}} {{11|Visitantes ouvintes que quiserem conhecer a língua}} {{10|também podem participar.}}",
    "{{8|Para o público infantil,}} {{10|a oficina \"Pequenos Ferroviários\" acontece aos domingos, às 14h. Crianças de 6 a 12 anos vão conhecer a maquete da estação e montar um trem de papelão.}}",
    "{{12|A oficina tem 20 vagas, e as inscrições são feitas na recepção a partir das 13h. As crianças devem estar}} {{6|acompanhadas}} {{12|de um adulto. O museu fica na Praça da Estação, 12, e conta com rampas e elevador.}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "A headline in the present tense with the main fact and no period, then a *linha fina* that adds the second piece of news. *Passa a ter* announces a change, and *gratuita* is the written word (*de graça* belongs to speech)." },
    { n: 2, cat: "papel", text: "The lead answers what, where and when in one sentence, and *na Vila Ferroviária* ties the news to the newsletter's readers, because the museum is in their neighborhood. The writer never says *nós* or *você*, because a news story stays in the third person." },
    { n: 3, cat: "fonte", text: "Prices for the other days, reworded: *de terça a sábado* replaces *nos outros dias de funcionamento*, *custa* replaces *continua custando*, and the half-price groups stay exact. Readers need this to understand what the free Sunday is worth." },
    { n: 4, cat: "registro", text: "Facts are attributed to the museum, as any news story does. The writer never says *segundo o comunicado* or *o texto diz*. The newsletter reader never saw the release, only the museum." },
    { n: 5, cat: "fonte", text: "The reason for the change from the source, reworded: bring the museum closer to residents, because most visitors come from other cities and many locals have never been inside. *Levantamento* replaces *pesquisa*, and the sentence is shorter than the original." },
    { n: 6, cat: "lingua", text: "Agreement. *A maioria dos visitantes vem*: the verb agrees with *maioria*, a singular noun (*vêm*, agreeing with *visitantes*, is also accepted, but the singular is the safer choice). *As crianças devem estar acompanhadas*: feminine plural to match *crianças*." },
    { n: 7, cat: "genero", text: "A quote attributed by name and role with *afirmou*. The director's words bring the only opinion into the story, which keeps the reporter neutral." },
    { n: 8, cat: "coesao", text: "*Além da gratuidade* moves from the free entry to the first new activity, and *Para o público infantil* opens the next one. Each paragraph covers one piece of news, in order of importance." },
    { n: 9, cat: "registro", text: "*Haverá visitas guiadas* uses *haver* in the future. *Vai ter visitas* is the spoken form and does not belong in a news story." },
    { n: 10, cat: "fonte", text: "The two activities with every detail a reader needs: Libras tours on the first and third Sundays at 11h, groups of up to 15 led by a deaf educator (the passive in the source becomes an active sentence), open to hearing visitors; the children's workshop every Sunday at 14h for ages 6 to 12, with the model station and a cardboard train." },
    { n: 11, cat: "lingua", text: "Future subjunctive after a relative pronoun for people who may or may not appear: *visitantes que quiserem*. *Que querem* would describe people already known to want it." },
    { n: 12, cat: "genero", text: "The closing *serviço* paragraph: places, sign-up time, the adult rule, the address and the access features. A resident can plan the visit from this paragraph alone." }
  ],
  why5: "The news story fits its context. A volunteer writes for the neighborhood association's newsletter and ties the news to the readers from the lead: the museum is in their neighborhood, and many of them have never been inside. It follows the genre: a present-tense headline, a *linha fina*, a lead with what, where and when, development in order of importance, a quote attributed by name and role and a closing *serviço* paragraph. Every practical fact from the release is there and reworded, attributed to the museum and never to a text. Paragraph openers such as *Além da gratuidade* and *Para o público infantil* guide the reader. The register stays neutral and written, with *gratuita*, *haverá* and third person throughout, and the language shows agreement with *maioria* and *crianças* and the future subjunctive in *quiserem*.",
  wordCount: 217
};

CB.models["s-telemedicina"] = {
  answer: [
    "{{1|Consulta de retorno sem sair de casa}}",
    "{{2|Um serviço do Posto de Saúde da Vila Nova}}",
    "{{3|Agora, você pode fazer a sua consulta de retorno por videochamada, pelo aplicativo Saúde Serra Clara. Sem ônibus e sem fila!}}",
    "{{4|Para que serve?}}",
    "{{5|Mostrar resultados de exames}}",
    "{{5|Renovar receitas de remédios de uso contínuo}}",
    "{{5|Acompanhar a pressão alta e o diabetes, quando estão}} {{6|controlados}}",
    "{{4|Como marcar?}}",
    "{{7|Baixe}} {{5|o aplicativo e entre com o seu CPF e o número do cartão do SUS.}} {{8|Se preferir, marque a consulta na recepção do posto.}} {{5|Um dia antes, você recebe uma mensagem de lembrete.}}",
    "{{4|E no dia da consulta?}}",
    "{{7|Abra}} {{5|o aplicativo dez minutos antes e}} {{7|toque}} {{5|em \"Entrar na consulta\". A receita chega pelo próprio aplicativo e vale em qualquer farmácia.}}",
    "{{9|Não tem celular com câmera ou internet?}}",
    "{{7|Venha}} {{5|ao posto. Temos uma sala com tablet, e uma técnica de enfermagem}} {{10|ajuda você a fazer}} {{5|a chamada.}} {{8|Um familiar também pode}} {{10|ajudar a instalar}} {{8|o aplicativo.}}",
    "{{4|Quando é preciso vir ao posto?}}",
    "{{11|Primeira consulta, vacinas, curativos e coleta de exames continuam presenciais.}}",
    "{{11|Em caso de dor no peito, falta de ar ou febre alta, não espere a teleconsulta.}} {{7|Procure}} {{11|a UPA mais próxima ou}} {{7|ligue}} {{11|para o SAMU (192).}}",
    "{{12|Dúvidas? Fale com a recepção. Estamos aqui para ajudar!}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "A flyer title has to work in two seconds. *Consulta de retorno sem sair de casa* names the service and its main benefit in words any patient knows, with no *teleconsulta* jargon up front." },
    { n: 2, cat: "papel", text: "The line under the title says who is behind the flyer (the patient's own posto). Older readers trust a service that comes from the people who already treat them." },
    { n: 3, cat: "fonte", text: "What the service is (a video call through the app) and the benefit a patient named in the source, reworded: no bus, no queue. The flyer never mentions a report; it states the facts as the posto's own." },
    { n: 4, cat: "coesao", text: "Question headings follow the order in which a patient meets the service: what it is for, how to book, the day of the call, what to do without a phone, when to come in person. The headings do the work of connectors in a text meant to be scanned." },
    { n: 5, cat: "fonte", text: "The practical details from the source, as short items: the three uses, CPF and SUS card to register, the reminder the day before, opening the app ten minutes early, the button to tap, the prescription valid at any pharmacy, and the room with a tablet and a nursing technician." },
    { n: 6, cat: "lingua", text: "Agreement with mixed genders. *A pressão alta* is feminine and *o diabetes* is masculine; when an adjective refers to both, it goes to the masculine plural: *controlados*." },
    { n: 7, cat: "lingua", text: "Imperatives for *você* use the present subjunctive: *baixe*, *abra*, *venha*, *procure*. Watch the spelling changes that keep the sound: *tocar* becomes *toque*, *ligar* becomes *ligue*, *marcar* becomes *marque*." },
    { n: 8, cat: "papel", text: "The flyer is for patients who are often older and unsure about apps, so it offers the ways around the app: booking at reception and help from a relative. The prompt asked the writer to think about who will read it." },
    { n: 9, cat: "registro", text: "*Não tem celular?* is correct. *Ter* for possession (to have a phone) is standard in every register. The *tem* to avoid in formal writing is the one that means \"there is\" (*há*). Knowing the difference stops overcorrection." },
    { n: 10, cat: "lingua", text: "Regência: *ajudar alguém a fazer algo*. The *a* before the infinitive is required: *ajuda você a fazer a chamada*, *pode ajudar a instalar*. Dropping it is the same slip as *incentivar as crianças usar*." },
    { n: 11, cat: "fonte", text: "The limits of the service from the source: first visits, vaccines, dressings and sample collection stay in person, and the emergency signs (chest pain, shortness of breath, high fever) send the patient to the UPA or SAMU on 192 without waiting." },
    { n: 12, cat: "genero", text: "The flyer ends with a call to action and the posto's *nós* voice (*Estamos aqui para ajudar*), telling the reader where to take any question. The *você* address holds from the first line to the last." }
  ],
  why5: "The flyer fits its context. The posto speaks to its own patients, many of them older adults, in short, plain lines and offers help to anyone who does not use apps. It has the genre's markers: a title with the benefit, the posto as sender, question headings, short items, *você* imperatives and a closing call to action. It answers every part of the prompt: what the service is and what it is for, how to book and join, what you need and when to come in person, including the emergency warning. The source's facts are all there, reworded as instructions, and no report is mentioned. The headings follow the patient's path, which keeps it easy to scan. The language is simple and correct, with subjunctive imperatives and their spelling changes, masculine plural agreement with mixed genders and *ajudar a* with its preposition.",
  wordCount: 212
};

CB.models["t-voluntariado"] = {
  answer: [
    "{{1|Dia do Voluntariado Tecnova: vamos juntos ao Lar Recanto das Flores}}",
    "{{2|Caros colegas,}}",
    "{{3|O comitê do Dia do Voluntariado convida todos vocês}} {{4|a participar}} {{3|da primeira ação social da Tecnova.}} {{5|No sábado, 7 de novembro, das 8h às 16h, vamos passar o dia no Lar Recanto das Flores, que abriga 30 idosos.}}",
    "{{6|Antes de planejar o dia, perguntamos ao lar do que ele mais precisa.}} {{7|Por isso,}} {{5|vamos pintar o refeitório, consertar os bancos do jardim e plantar um canteiro de flores.}} {{8|À tarde,}} {{9|haverá}} {{5|música e bingo com os moradores.}} {{6|Ninguém precisa saber pintar ou consertar nada, porque}} {{9|há}} {{6|tarefas para todos, de lixar bancos a conversar com os idosos.}}",
    "{{7|Vale a pena participar.}} {{10|Em uma distribuidora que fez uma ação parecida, quarenta funcionários reformaram uma creche em um único sábado. Colegas de setores diferentes, que nunca tinham conversado, ficaram amigos, e todos voltaram com a sensação de ter feito algo importante.}}",
    "{{11|A Tecnova vai fornecer}} {{6|o material, o transporte, o almoço e as camisetas.}} O ônibus sai da sede às 7h30. {{12|Venham}} com roupa velha e sapato fechado.",
    "{{12|Inscrevam-se}} pela intranet até 23 de outubro, {{4|para que possamos}} {{6|comprar o material na quantidade certa.}}",
    "{{3|Contamos com a presença de vocês!}}",
    "{{1|Comitê do Dia do Voluntariado}}",
    "{{1|Tecnova Sistemas}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "The title names the event and the place, so a colleague who only reads the subject line knows what it is. The invitation ends with the committee and the company as signers, not a personal name." },
    { n: 2, cat: "registro", text: "*Caros colegas* is warm but written, right for coworkers. *Oi, pessoal* would be too casual for a company-wide message, and *Prezados colaboradores* would sound like HR announcing a rule." },
    { n: 3, cat: "papel", text: "The first sentence says who invites (the committee), whom (all colleagues) and to what. The closing repeats the invitation in the organizers' *nós* voice (*Contamos com*), speaking to *vocês*, as in the rest of the text." },
    { n: 4, cat: "lingua", text: "Regência and subjunctive. *Convidar alguém a fazer algo* needs the *a*: *convida todos vocês a participar*. *Para que* always takes the subjunctive: *para que possamos comprar*." },
    { n: 5, cat: "genero", text: "What, when and where come in the first paragraph, then the tasks and the afternoon program. An invitation has to answer the reader's practical questions before it persuades." },
    { n: 6, cat: "fonte", text: "The lessons from another company's experience, applied to this event without saying where they came from: the committee asked the home what it needs first, there is a task for every skill, the company provides materials, transport, lunch and T-shirts, and early sign-up lets them buy the right amount of material." },
    { n: 7, cat: "coesao", text: "*Por isso* links the home's request to the tasks, so the plan reads as a response to real needs. *Vale a pena participar* opens the persuasive paragraph with its main idea." },
    { n: 8, cat: "lingua", text: "Crase: *à tarde* always takes it, like *à noite*. Clock times take it too: *das 8h às 16h*, *às 7h30*. With a masculine noun there is none: *ao lar*." },
    { n: 9, cat: "registro", text: "*Haverá música* and *há tarefas para todos* use *haver* for \"there is\" and \"there will be\". The recording's spoken versions (*tem tarefa pra todo mundo*, *teve gente*) are gone." },
    { n: 10, cat: "fonte", text: "The other company's result as the reason to join: forty staff, one Saturday, a renovated daycare, friendships across departments and the sense of doing something that matters. *Ficaram amigos* replaces the spoken *virou amiga*." },
    { n: 11, cat: "registro", text: "*Fornecer* is the precise written verb for supplies. *A empresa deu o material* is how people say it; *a Tecnova vai fornecer* is how an invitation writes it." },
    { n: 12, cat: "lingua", text: "The invitation speaks to *vocês*, so the imperatives are plural: *venham*, *inscrevam-se*. With a reflexive verb, the pronoun follows the imperative with a hyphen in written Portuguese: *inscrevam-se*." }
  ],
  why5: "The invitation fits its context. A member of the organizing committee writes to coworkers, uses *nós* for the organizers and *vocês* for the readers, and signs as the committee. It answers all three parts of the prompt: it presents the event (date, time, place, tasks, afternoon program), gives reasons to join and explains what the company provides, what to bring and how and by when to sign up. The recording's experience is used as advice already followed (asking the home first, tasks for all skills, early sign-up) and as evidence (the other company's results), never credited to a podcast. *Por isso* and a clear topic sentence hold the paragraphs together. The language shows *convidar a*, *para que* with the subjunctive, crase in *à tarde*, *haver* in place of *ter*, plural imperatives and *fornecer* in place of *dar*.",
  wordCount: 209
};

CB.models["u-plano-celular"] = {
  answer: [
    "{{1|À Ouvidoria da Conecta Móvel}}",
    "{{1|Assunto: cobrança de serviços não contratados (protocolo SAC nº 2026-771045)}}",
    "{{1|Prezados senhores,}}",
    "{{2|Sou cliente da Conecta Móvel}} {{3|há quatro anos}}, {{2|com um plano pós-pago de R$ 59,90 por mês. Escrevo}} {{4|à Ouvidoria}} {{2|porque o SAC não resolveu o problema descrito abaixo.}}",
    "{{5|Desde a fatura de junho, a operadora cobra dois serviços que eu nunca solicitei: o \"Clube Jogos+\", de R$ 9,90, e o \"Notícias Já\", de R$ 4,99.}} {{6|No dia 2 de setembro, liguei para o SAC, pedi o cancelamento e anotei o protocolo indicado acima.}} {{7|No entanto,}} {{8|as duas cobranças voltaram}} {{5|a aparecer na fatura de setembro. Em quatro faturas, paguei R$ 59,56 por serviços que não contratei.}}",
    "{{7|Lembro que}} {{9|o Código de Defesa do Consumidor considera abusivo fornecer um serviço sem pedido prévio do cliente. Além disso, quem é cobrado indevidamente tem direito a receber de volta o dobro do que pagou, com correção monetária e juros.}}",
    "{{7|Diante disso,}} {{10|solicito}} {{11|o cancelamento imediato dos dois serviços, a devolução em dobro do valor pago, ou seja, R$ 119,12, e o bloqueio de serviços de terceiros na minha linha.}} {{10|Aguardo uma resposta por escrito em até cinco dias úteis.}}",
    "{{12|Caso o problema não seja resolvido nesse prazo, registrarei}} uma reclamação na Anatel e no site consumidor.gov.br.",
    "{{1|Atenciosamente,}}",
    "{{1|Renato Albuquerque Lins}}",
    "{{1|Contrato nº 4408127}}"
  ],
  notes: [
    { n: 1, cat: "genero", text: "The complaint frame: the department first, an *Assunto* with the problem and the SAC protocol, *Prezados senhores*, *Atenciosamente*, an invented name and the contract number. The ouvidoria can find the case from the subject line alone." },
    { n: 2, cat: "papel", text: "The first paragraph says who is writing (a customer for four years, with the plan and its price) and why this message goes to the ouvidoria, since the SAC already failed. An ouvidoria handles cases the SAC did not solve, so this sentence justifies the channel." },
    { n: 3, cat: "registro", text: "*Há quatro anos* uses *haver* for elapsed time. *Tem quatro anos que sou cliente* is the spoken version." },
    { n: 4, cat: "lingua", text: "Crase: *escrever a* + *a Ouvidoria* gives *à Ouvidoria*, and the addressee line *À Ouvidoria* works the same way. With a masculine noun there is no crase: *escrevo ao SAC*." },
    { n: 5, cat: "papel", text: "The facts only this customer can give: both services by name and price, the month the charges started, the September bill and the total already paid (four bills of R$ 14,89). Exact figures make the complaint hard to dismiss." },
    { n: 6, cat: "fonte", text: "The specialists' first step, turned into what the writer already did: he called the SAC, asked for cancellation and kept the protocol number. The advice is applied to this case, and the text is never mentioned." },
    { n: 7, cat: "coesao", text: "*No entanto* marks the broken promise, *Lembro que* moves from the facts to the law, and *Diante disso* leads from the law to the demands. Each paragraph does one job: who, what happened, the rights, the demands, the next step." },
    { n: 8, cat: "lingua", text: "Agreement. *Cobrança* ends in *-ança* and is feminine, so it is *as duas cobranças*, not *os dois*. The verb *voltaram* is plural to match." },
    { n: 9, cat: "fonte", text: "The two rights from the source, reworded: supplying a service nobody asked for is abusive, and a consumer charged an undue amount gets back double what was paid, with monetary correction and interest. The Código de Defesa do Consumidor can be named, because the rule belongs to the law, not to the text." },
    { n: 10, cat: "registro", text: "*Solicito* and *Aguardo* are firm and formal. *Quero* sounds like a demand at a counter. The company stays in the third person (*a operadora*), never *vocês*." },
    { n: 11, cat: "fonte", text: "Three precise demands: cancel both services, refund double the amount (R$ 119,12, worked out from R$ 59,56), and block third-party services, the specialists' tip for stopping new charges." },
    { n: 12, cat: "lingua", text: "*Caso* + present subjunctive (*seja resolvido*), then the simple future (*registrarei*). This is the calm written way to state a consequence. *Se vocês não resolverem, eu vou reclamar* is the spoken version." }
  ],
  why5: "The e-mail fits its context. A customer writes to the ouvidoria after the SAC failed, identifies the case in the subject line and the first paragraph, and keeps a firm, polite tone throughout. It follows the logic of a complaint: who the customer is, what happened with names, dates and amounts, what the law says, what the customer demands with a deadline and what happens otherwise. The source is used in three ways: as advice already followed (calling the SAC, keeping the protocol), as the legal basis (abusive practice, double refund) and as a demand (blocking third-party services). None of it is credited to a text. Connectors lead from facts to law to demands. The language shows *há* for elapsed time, crase in *à Ouvidoria*, feminine agreement in *as duas cobranças*, *solicito* in place of *quero* and *caso* with the subjunctive.",
  wordCount: 218
};
