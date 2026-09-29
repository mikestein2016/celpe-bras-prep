window.CB = window.CB || {};
CB.models = CB.models || {};

CB.models['k-desperdicio'] = {
  answer: [
    '{{1|Resumo: o desperdício de alimentos}}',
    '{{2|Na edição sobre consumo consciente, o boletim resume a reportagem "Comida no lixo: onde começa o desperdício".}} A matéria {{9|mostra}} que o Brasil perde alimentos em todas as etapas, da colheita até a mesa.',
    '{{3|Segundo a reportagem,}} {{4|nas casas as famílias compram demais, guardam mal os alimentos e confundem as datas de validade.}} {{5|Por isso,}} descartam comida ainda boa. {{5|Além disso,}} não reaproveitam as sobras e jogam fora cascas, talos e folhas, {{6|embora possam ser usados}} em outras receitas.',
    'Nos supermercados, a reportagem {{9|aponta}} {{7|que frutas e legumes com manchas ou formato fora do padrão costumam ser descartados, porque os clientes não querem levá-los.}} Algumas redes começaram a {{8|vendê-los}} com desconto e a {{8|doar alimentos perto do vencimento a instituições sociais}}.',
    'Especialistas ouvidos pela reportagem {{9|sugerem}} {{10|medidas simples: definir antes as refeições da semana, ir ao mercado com uma lista, deixar à vista o que vence primeiro e congelar porções.}}',
    '{{12|De acordo com eles,}} essas atitudes {{11|ajudam as famílias a economizar}} e protegem o meio ambiente, {{12|já que reduzem o lixo orgânico levado aos aterros.}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'A short title that labels the text as a summary and names the topic. Coworkers flipping through the newsletter see at once what the piece is.' },
    { n: 2, cat: 'papel', text: 'The first sentence ties the summary to the edition\'s theme and names the report by its title, which is what the checklist asks for. It stays in the third person (*o boletim resume*), so the writer reports for the company without speaking as *eu* or *nós*.' },
    { n: 3, cat: 'genero', text: 'In a *resumo*, *segundo a reportagem* is a genre marker, not a mistake. The whole point of the text is to pass on another text, so its ideas must be credited to it. In any other genre on the exam, you would state the fact directly instead.' },
    { n: 4, cat: 'fonte', text: 'The report\'s nouns become verbs with a subject: *compras em excesso* is now *compram demais*, *armazenamento inadequado* is *guardam mal os alimentos*, and *confusão com as datas* is *confundem as datas*. Changing the structure is the safest way to paraphrase without copying.' },
    { n: 5, cat: 'coesao', text: '*Por isso* links a cause to its result (the confusion sends good food to the trash), and *Além disso* adds the next cause. They replace a long chain of *e... e... e* and keep each sentence to one idea.' },
    { n: 6, cat: 'lingua', text: 'Two things to copy. *Embora* always takes the subjunctive (*possam*, not *podem*). And *usados* is masculine plural because the list mixes feminine nouns (*cascas, folhas*) with a masculine one (*talos*). A mixed group takes the masculine. The same check prevents *celulares velhas* or *TVs velhos*.' },
    { n: 7, cat: 'fonte', text: 'The supermarket cause, reworded: *formato diferente* becomes *fora do padrão*, and *não querem comprá-los* becomes *não querem levá-los*. The whole paragraph is shorter than the original, which is the point of a summary. *Descartados* agrees with *frutas e legumes*, again masculine plural for a mixed group.' },
    { n: 8, cat: 'lingua', text: 'With a pronoun after an infinitive, the *-r* drops and the vowel takes an accent: *vender* + *os* = *vendê-los*, *levar* + *os* = *levá-los*. *Doar algo a alguém* takes *a* before the receiver: *doar alimentos a instituições sociais*, never *doar com*.' },
    { n: 9, cat: 'registro', text: 'Varied reporting verbs (*mostra, aponta, sugerem*) show what the source is doing at each point and meet the checklist. Repeating *fala* or *diz* is the spoken default.' },
    { n: 10, cat: 'fonte', text: 'All four measures are kept, each in new words: *planejar o cardápio* becomes *definir antes as refeições da semana*, *fazer lista de compras* becomes *ir ao mercado com uma lista*, and *deixar os mais antigos na frente* becomes *deixar à vista o que vence primeiro*, with crase in *à vista*.' },
    { n: 11, cat: 'lingua', text: 'Regência: *ajudar alguém a fazer algo*. The *a* before the infinitive is required, as in *incentivar as crianças a usar*. Leaving it out is one of the most common errors in this pattern.' },
    { n: 12, cat: 'genero', text: 'The summary ends with the benefits the specialists name, credited to them (*De acordo com eles*, where *eles* refers back to the specialists). The writer adds no advice or opinion of their own.' }
  ],
  why5: 'The text is a summary written by an employee for coworkers, and it fits the edition\'s theme from the first line. It names the report, stays in the third person and never gives an opinion. Every point the prompt asks for is there in the order of the original: the household causes, the supermarket causes and responses, the four measures and the two benefits. Each one is reworded with new structures instead of copied, and ideas are credited with varied reporting verbs, which is correct in a resumo. Short paragraphs each cover one part of the report, and *Por isso*, *Além disso* and *De acordo com eles* show how the ideas connect. The language models mixed-gender agreement (*usados*, *descartados*), *embora* with the subjunctive, accented pronoun forms (*vendê-los*) and *ajudar alguém a*.',
  wordCount: 180
};

CB.models['l-onibus'] = {
  answer: [
    '{{1|Uberlândia, 20 de outubro de 2026}}',
    '{{8|À Secretaria Municipal de Transportes}}',
    '{{1|Assunto: retorno da linha 412 aos fins de semana}}',
    '{{1|Prezado Senhor Secretário,}}',
    '{{2|Em nome dos moradores do Jardim Esperança, solicitamos que a Secretaria}} {{3|determine}} {{2|o retorno da linha 412 aos sábados e domingos.}}',
    '{{4|Desde o início do mês, a Viação Rota Sul deixou de operar essa linha nos fins de semana, alegando que}} {{5|havia}} {{4|poucos passageiros.}} {{6|No entanto,}} a decisão prejudica quem precisa ir ao Hospital Regional da Zona Norte, no próprio bairro. {{7|Os funcionários dos plantões e as famílias dos pacientes internados agora caminham cerca de vinte minutos até a avenida mais próxima.}} {{7|Muitos idosos e pessoas com dificuldade de locomoção}} {{8|deixaram de ir às consultas}} de sábado.',
    '{{9|Entendemos que um serviço público não deve ser avaliado apenas pelo número de passageiros.}} O acesso {{8|à saúde}} é um direito, e o hospital atende toda a região. {{6|Além disso,}} {{10|mais de oitocentos moradores já assinaram nosso abaixo-assinado, o que comprova a demanda.}}',
    '{{6|Como solução,}} propomos que a linha volte a circular, mesmo com horários reduzidos. Os ônibus poderiam passar na troca de plantão e no horário de visitas, {{11|para os funcionários e os visitantes chegarem}} sem dificuldade.',
    '{{12|Contamos com a atenção da Secretaria e aguardamos uma resposta.}}',
    '{{1|Atenciosamente,}}',
    '{{1|Presidente da Associação de Moradores do Jardim Esperança}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'The full frame of a formal letter to a public office: place and date, addressee, an *Assunto* that states the request, the vocativo *Prezado Senhor Secretário*, *Atenciosamente* and a signature by role. The signature names the office the writer holds, not a person.' },
    { n: 2, cat: 'papel', text: 'The president writes for the association, so the letter uses the first person plural (*solicitamos*, *entendemos*, *propomos*). The request comes in the first sentence, so the Secretaria knows what is being asked before reading any detail.' },
    { n: 3, cat: 'lingua', text: '*Solicitar que* takes the subjunctive: *solicitamos que a Secretaria determine*. The same happens later with *propomos que a linha volte*. *Determina* or *volta* here would be an error.' },
    { n: 4, cat: 'fonte', text: 'The facts of the cut, reworded: *cortou os horários* becomes *deixou de operar*, and *o número de passageiros era baixo* becomes *alegando que havia poucos passageiros*. The company\'s reason is stated fairly, which makes the reply that follows more convincing.' },
    { n: 5, cat: 'registro', text: '*Havia poucos passageiros* uses *haver* for "there were". *Tinha poucos passageiros* is how people say it, but in a formal letter it lowers the register.' },
    { n: 6, cat: 'coesao', text: '*No entanto* turns from the company\'s reason to its effects, *Além disso* adds a second argument and *Como solução* opens the proposal. Each paragraph has one job. Starting a sentence with *Mas* would sound spoken.' },
    { n: 7, cat: 'fonte', text: 'The situation of each group affected by the cut: shift workers, families of patients, and older or less mobile residents. The walk of about twenty minutes stays exact because precise details persuade an office more than adjectives do.' },
    { n: 8, cat: 'lingua', text: 'Crase: *ir a* + *as consultas* = *às consultas*, *acesso a* + *a saúde* = *à saúde*, and *À Secretaria* at the top. With a masculine noun there is no crase: *ao hospital*.' },
    { n: 9, cat: 'papel', text: 'This is the main argument, and it answers the company\'s reason directly. A public service is judged by need, not only by ridership. The prompt asks for arguments, and the office that oversees bus companies is the reader who can act on this one.' },
    { n: 10, cat: 'fonte', text: 'The petition with more than eight hundred signatures is used as proof that people need the line. *O que comprova a demanda* turns a number from the source into an argument.' },
    { n: 11, cat: 'lingua', text: 'Personal infinitive. *Os funcionários e os visitantes* is the subject of *chegar*, so the infinitive takes the plural ending: *para os funcionários chegarem*. *Para os funcionários chegar* is the same error as *para as crianças passar*.' },
    { n: 12, cat: 'registro', text: '*Contamos com a atenção* is the standard polite close and asks for a reply without sounding demanding. *Atenção* is feminine, like every *-ção* noun: *a atenção*, *pela atenção*, never *pelo atenção*.' }
  ],
  why5: 'The letter comes from the association\'s president, goes to the office that oversees bus companies and states the request in its first sentence. It then does the three things the prompt asks. It describes the situation with the facts from the report reworded (the weekend cut, the company\'s reason, the hospital, the twenty-minute walk and the missed appointments). It argues that access to health care matters more than ridership and uses the petition as proof of demand. It proposes a concrete solution, a reduced schedule timed to shift changes and visiting hours, and asks for a reply. Paragraphs have one job each, linked by *No entanto*, *Além disso* and *Como solução*. The register is formal, firm and polite in the first person plural, and the language models the subjunctive after *solicitar que*, crase, *haver* and the personal infinitive.',
  wordCount: 217
};

CB.models['m-idosos-celular'] = {
  answer: [
    '{{1|Curso gratuito ensina idosos a usar o celular}}',
    '{{1|Inscrições para a próxima turma vão até o dia 30}}',
    '{{3|A Prefeitura}} {{2|oferece um curso gratuito de celular para pessoas com mais de 60 anos no Centro Cultural Santa Rita.}} As aulas acontecem {{9|às terças e quintas, às 14h,}} e contam com a ajuda de estudantes voluntários.',
    '{{4|Cada turma tem quinze alunos, e o curso dura dois meses.}} Nas aulas, os participantes {{5|aprendem a trocar mensagens, a marcar consultas pelo aplicativo da Secretaria de Saúde e a reconhecer tentativas de golpe.}}',
    '{{6|Os resultados aparecem logo nas primeiras semanas.}} {{7|Segundo o professor voluntário Rafael, as aulas respeitam o ritmo de cada aluno. Ele conta que muitos chegam com medo de apertar o botão errado, mas, depois de cerca de duas semanas, já ajudam os colegas.}}',
    '{{8|"Eu só sabia atender o telefone. Hoje mando fotos e faço chamadas de vídeo com a minha neta, que mora em Portugal. O curso mudou a minha vida", contou a aluna Célia, de 72 anos.}}',
    '{{11|As inscrições para a próxima turma podem ser feitas até o dia 30, pessoalmente, no Centro Cultural.}} {{10|Quem tiver interesse}} {{12|deve levar}} um documento com foto e o próprio celular. {{11|O número de vagas é limitado.}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'A headline in the present tense that states the main fact, with no period and no praise, and a subtitle with the most useful practical detail. A reader who sees only these two lines knows what the course is and that there is a deadline.' },
    { n: 2, cat: 'genero', text: 'The *lide*. The first sentence answers who (*a Prefeitura*), what (*um curso gratuito de celular*), for whom (*pessoas com mais de 60 anos*) and where (*Centro Cultural Santa Rita*). The next sentence adds when.' },
    { n: 3, cat: 'papel', text: 'The writer works for the city, but the news story still names *a Prefeitura* in the third person, never *nós*, and the volunteers are credited too. The course is presented as a city program through facts alone. Words like *incrível* or *não perca* would turn the news into an ad.' },
    { n: 4, cat: 'fonte', text: 'Course facts reworded: *são quinze alunos* becomes *cada turma tem quinze alunos*, and *às duas da tarde* becomes *às 14h*, the way news sites write times. Here *tem* is correct because it has a real subject (*cada turma*).' },
    { n: 5, cat: 'lingua', text: 'Regência: *aprender a fazer algo*. The *a* repeats before each infinitive in the list: *a trocar, a marcar, a reconhecer*. Dropping it is the same error as *incentivar as crianças usar*.' },
    { n: 6, cat: 'coesao', text: 'A short topic sentence opens the paragraph the prompt asks for (the results) and announces what follows. The paragraphs run in order of importance: the course, what it teaches, its results, then how to enroll.' },
    { n: 7, cat: 'fonte', text: 'The volunteer teacher\'s words in reported speech. *A gente vai devagar* becomes *as aulas respeitam o ritmo de cada aluno*, and *eles já tão ajudando* becomes *já ajudam os colegas*. *Ele conta que* keeps the second sentence credited to him. The idea stays and the spoken marks go.' },
    { n: 8, cat: 'registro', text: 'A short quote, attributed by name, age and role, cleaned up for writing. *Olha* and *né* are dropped, and *Dona Célia* becomes *a aluna Célia*, since news writing does not use *Dona*. The quote is the only place where an opinion (*mudou a minha vida*) belongs.' },
    { n: 9, cat: 'lingua', text: 'Crase with days and times: *às terças e quintas*, *às 14h*. The *a* of time meets the feminine article (*as terças*, *as 14 horas*). The same rule gives *das 9h às 17h*.' },
    { n: 10, cat: 'lingua', text: 'The future subjunctive after *quem* for an open group of people: *quem tiver interesse*, *quem quiser participar*. *Quem tem interesse* is common in speech but weaker in writing.' },
    { n: 11, cat: 'genero', text: 'The *serviço* closes the news story: deadline, place, what to bring and the limited places. *Limitado* agrees with *número*, the masculine head noun, not with *vagas*.' },
    { n: 12, cat: 'registro', text: '*É só levar* is spoken and sounds like a salesperson. *Deve levar* gives the same instruction in a neutral written register, without the plural imperative (*levem*) that would address the reader directly.' }
  ],
  why5: 'The text is a news story for the city\'s site, written by someone from the city\'s communication office, and it keeps the reporter out of it: third person, no *nós*, no praise. The headline, subtitle and lead give the main facts at once, and the paragraphs follow the order the prompt sets: present the course, show the results, explain how to enroll. Every course fact is there and reworded (free, over 60, Tuesdays and Thursdays at 2 p.m., fifteen students, two months, volunteers, the three skills), and nothing mentions where the facts came from. The results come through the teacher\'s words in reported speech and a short cleaned-up quote from a student, with all spoken marks converted. The language models crase with times, *aprender a* in a list, the future subjunctive with *quem* and agreement with *número*.',
  wordCount: 203
};

CB.models['n-bagagem'] = {
  answer: [
    '{{1|Assunto: extravio de bagagem no voo 3481 (protocolo nº 584137)}}',
    '{{1|Prezados senhores,}}',
    '{{2|Escrevo para registrar uma reclamação sobre o extravio da minha mala no voo 3481 da Aurora Linhas Aéreas, de São Paulo para Recife, no dia 20 de setembro.}} Viajei para participar de um congresso de uma semana e, {{3|há cinco dias}}, estou sem a minha bagagem.',
    '{{5|Assim que}} percebi que a mala não estava na esteira, {{4|fui ao balcão da companhia, ainda no aeroporto, e registrei o extravio. Recebi o número de protocolo indicado acima e guardei a etiqueta da mala.}} {{5|Desde então,}} não recebi nenhuma informação.',
    '{{6|Como estou longe de casa, precisei comprar roupas e produtos de higiene para participar do congresso.}} {{11|Comprei apenas itens básicos, como camisas, calças, escova de dente e desodorante}}, no valor total de R$ 486,70. {{7|As notas fiscais seguem em anexo.}}',
    '{{5|Diante disso,}} {{8|solicito que a empresa localize a minha mala e a entregue}} no hotel onde estou hospedado, em Recife, ou no meu endereço em São Paulo, informado no registro. {{9|Solicito também o reembolso das despesas}} e uma resposta por escrito em até dois dias úteis.',
    '{{10|Caso não receba uma resposta nesse prazo, registrarei uma reclamação no consumidor.gov.br.}}',
    '{{1|Atenciosamente,}}',
    '{{1|Tiago Moreira Lessa}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'The complaint frame: an *Assunto* with the flight and the protocol number, so the SAC can find the case from the subject alone, then *Prezados senhores*, *Atenciosamente* and an invented name.' },
    { n: 2, cat: 'papel', text: 'The first sentence says who is writing (a passenger), what kind of message it is (a complaint) and which case it concerns: flight, route and date. The prompt asks you to identify the case at once, and the airline needs these details to act.' },
    { n: 3, cat: 'registro', text: '*Há cinco dias* uses *haver* for elapsed time. *Tem cinco dias* is common in speech, but in writing elapsed time takes *há* (or *faz*).' },
    { n: 4, cat: 'fonte', text: 'The steps the lawyer recommends, turned into what the writer already did: register the loss at the airline counter before leaving the airport, keep the protocol number and keep the bag tag. The advice is applied to this case without saying where it came from.' },
    { n: 5, cat: 'coesao', text: 'Time connectors carry the story: *Assim que* (as soon as), *Desde então* (since then), and *Diante disso* to move from the facts to the demands. Each paragraph does one job: the case, the steps taken, the expenses, the demands, the next step.' },
    { n: 6, cat: 'papel', text: 'This sentence justifies the purchases before listing them. The writer was away from home and had a congress to attend. It shows the expenses were necessary, which is the condition for a refund.' },
    { n: 7, cat: 'lingua', text: 'Agreement: *seguem* is plural because *as notas fiscais* is plural. *Em anexo* never changes. The same check catches *as falhas tem* instead of *as falhas têm*.' },
    { n: 8, cat: 'lingua', text: '*Solicitar que* takes the subjunctive (*localize*, *entregue*). The pronoun *a* refers back to *a mala* so the noun is not repeated. *Entregar* takes *em* for a place (*no hotel*) and *a* for a person (*entregar a mala ao passageiro*), never *com*. The company stays in the third person (*a empresa*), never *vocês*.' },
    { n: 9, cat: 'fonte', text: 'The refund of reasonable expenses comes from the lawyer\'s advice, now stated as a demand, followed by a deadline for a written reply. The prompt asks for both a solution for the bag and the refund, and each gets its own verb.' },
    { n: 10, cat: 'lingua', text: '*Caso* + subjunctive (*receba*), then the simple future (*registrarei*). This is the written way to state a consequence calmly. *Se vocês não responderem, eu vou reclamar* is the spoken version.' },
    { n: 11, cat: 'registro', text: 'The lawyer says *tipo roupa, escova de dente*. *Como* introduces examples in writing, and *itens básicos* shows the purchases were reasonable, with no *terno de grife*. A total with cents reads as a real receipt.' }
  ],
  why5: 'The e-mail goes from a passenger to the airline\'s customer service and identifies the case in the subject line and the first sentence. It then follows the logic of a complaint: what happened, what the writer already did, what it cost, what the writer demands and what happens otherwise. The source is used as advice already followed: the loss was registered at the counter, the protocol and the tag were kept, the purchases were basic and the receipts are attached, and the next step is consumidor.gov.br. None of it mentions where the advice came from, and the spoken marks (*tá*, *né*, *olha*, *tipo*) are gone. Time connectors and one job per paragraph keep it easy to follow. The register is firm and polite, with the company in the third person, and the language models *há* for elapsed time, *solicitar que* with the subjunctive, plural agreement and *caso* with the future.',
  wordCount: 201
};
