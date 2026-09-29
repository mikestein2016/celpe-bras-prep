window.CB = window.CB || {};
CB.models = CB.models || {};

CB.models['f-horario-verao'] = {
  answer: [
    '{{1|Campinas, 29 de setembro de 2026.}}',
    '{{1|Prezados editores,}}',
    '{{2|Li a reportagem "Horário de verão: volta ou não volta?" e gostaria de opinar sobre o assunto.}} Moro em Campinas {{5|há oito anos}}.',
    '{{3|A matéria lembra que o governo acabou com a medida em 2019. A economia de energia já não compensava, porque o pico de consumo passou para a tarde, com o uso do ar-condicionado.}} {{4|Agora, bares, restaurantes e o setor de turismo pedem a volta do horário, enquanto muitas pessoas se queixam do sono ruim e de ver os filhos saírem de casa ainda no escuro.}}',
    '{{5|Na minha opinião, o horário de verão não deve voltar.}} {{6|Em primeiro lugar,}} {{7|Campinas é uma cidade quente, e aqui o ar-condicionado fica ligado a tarde inteira, com ou sem horário de verão.}} {{6|Em segundo lugar,}} {{7|no meu bairro, o ônibus escolar passa às seis e meia}}, e {{8|não é seguro as crianças esperarem na rua quando ainda é noite}}. {{6|Além disso,}} eu levava quase uma semana para {{11|me adaptar à mudança}} e {{11|chegava cansado ao trabalho}}.',
    '{{9|Por um lado,}} entendo os donos de bares e restaurantes. {{9|No entanto,}} {{10|a saúde e a segurança dos moradores são mais importantes}} do que o movimento do comércio.',
    '{{9|Por isso,}} espero que o governo mantenha {{10|a decisão tomada em 2019}}.',
    '{{12|Atenciosamente,}}',
    '{{12|Um leitor de Campinas}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'Local e data and the vocativo each sit on their own line. *Prezados editores* is the safe formal greeting for a newspaper, and it tells the grader at once that you recognized the genre.' },
    { n: 2, cat: 'papel', text: 'The first sentence names the report by its title and says why the reader is writing. In a carta do leitor this is expected, because the letter answers a specific piece the paper published. Calling it *o texto* would break the role, because a reader writes about *a reportagem* or *a matéria*.' },
    { n: 3, cat: 'fonte', text: 'Two facts from the report in new words. *Acabou com a medida em 2019* keeps the date, and *o pico de consumo passou para a tarde, com o uso do ar-condicionado* explains why the savings stopped paying off. *Já não compensava* replaces the report\'s wording instead of copying it.' },
    { n: 4, cat: 'fonte', text: 'Both sides of the debate in one sentence: who wants the change back (bars, restaurants, tourism) and who complains (poor sleep, children leaving home in the dark). *Enquanto* sets the two groups against each other without a second sentence. Note the accent on *saírem*: the stress falls on the *i*, as in *saída* and *país*.' },
    { n: 5, cat: 'registro', text: 'Two formal choices. *Há oito anos* is the written way to express elapsed time, where speech says *tem oito anos que*. *Na minha opinião* and *não deve voltar* state the position firmly and politely; *eu acho que* and *não tem que voltar* would sound like conversation.' },
    { n: 6, cat: 'coesao', text: '*Em primeiro lugar*, *Em segundo lugar* and *Além disso* number the arguments, so the editor sees three separate reasons instead of one long sentence joined with *e*. Each argument gets its own short sentence.' },
    { n: 7, cat: 'papel', text: 'The prompt asks you to relate the issue to your city. The hot afternoons in Campinas and the school bus at 6:30 turn the national debate into something the writer lives, and they also back up the report\'s points with local evidence.' },
    { n: 8, cat: 'lingua', text: 'Personal infinitive. *As crianças* is the subject of *esperar*, so the infinitive takes the plural ending: *as crianças esperarem*. Leaving it as *as crianças esperar* is the same slip as *para as crianças passar*. Write *para as crianças passarem*.' },
    { n: 9, cat: 'coesao', text: '*Por um lado* concedes the other side, *No entanto* turns back to the writer\'s view, and *Por isso* draws the conclusion. This is the connector set the prompt\'s argument calls for. *No entanto* also avoids opening a sentence with *Mas*, which reads as speech.' },
    { n: 10, cat: 'lingua', text: 'Agreement. *A saúde e a segurança* is a compound subject, so the verb goes to the plural (*são*). *Decisão* is feminine, so *a decisão tomada*. Other nouns in this topic to check: *a medida*, *a mudança*, *o horário*, *a economia de energia*.' },
    { n: 11, cat: 'lingua', text: 'Regência. *Adaptar-se a* + *a mudança* gives the crase in *à mudança*. *Chegar a* is the written form for arriving somewhere: *chegava ao trabalho*, not *chegava no trabalho*, which is common in speech.' },
    { n: 12, cat: 'genero', text: '*Atenciosamente* is the standard formal closing, and the signature gives a role and a city, never a real name. That is all a newspaper needs to publish a reader\'s letter.' }
  ],
  why5: 'The letter fits its context. A reader writes to the editors of a large newspaper about a report they published, names that report in the first line and keeps a formal first-person register to the signature. It takes up the debate with the facts the checklist expects, all reworded: the end of the measure in 2019, the shift of peak consumption to the afternoon because of air conditioning, the bars and tourism sector on one side, and poor sleep and children in the dark on the other. The opinion is stated in one sentence and backed by three reasons, two of them tied to Campinas (hot afternoons, the 6:30 school bus). Cohesion comes from two connector chains, one that numbers the arguments and one that concedes and concludes. The language is simple and clean, with a personal infinitive, crase after *adaptar-se a*, plural agreement with a compound subject and *há* for elapsed time.',
  wordCount: 218
};

CB.models['g-amigo-mudanca'] = {
  answer: [
    '{{1|Assunto: dicas para a sua mudança}}',
    '{{1|Oi, Jake!}}',
    '{{2|Que notícia boa! Desde a faculdade você fala em morar no Brasil, e agora é pra valer!}}',
    '{{3|Quando cheguei, o que mais me surpreendeu foi o cumprimento. Uma vizinha que eu mal conhecia me deu dois beijos no rosto, e eu fiquei sem reação!}} {{4|Aqui, entre conhecidos, todo mundo se cumprimenta com beijo, e muita gente abraça já no primeiro encontro.}}',
    '{{12|Outra diferença é o horário.}} Nas festas, {{5|os brasileiros têm}} mais flexibilidade. {{6|Se alguém te chamar pra um churrasco às sete, pode chegar às sete e meia.}} {{7|Mas}} {{6|no trabalho, no médico ou numa entrevista, seja pontual.}}',
    '{{12|E prepare o estômago!}} {{8|O almoço é a refeição principal, com arroz, feijão, salada e carne, e à noite}} {{7|a gente}} {{8|come algo leve.}} Você vai sentir falta de algumas coisas daí, mas vai descobrir {{11|frutas deliciosas}} que nunca viu.',
    '{{12|Agora, as dicas práticas.}} {{10|A burocracia aqui é pesada.}} {{9|Tire}} {{10|o CPF logo, porque sem ele você não abre conta nem aluga apartamento.}} {{10|Alguns documentos também precisam ser}} {{11|autenticados}} {{10|em cartório}}, então {{9|ande}} sempre com cópias. E {{9|tenha}} paciência! {{9|Vale a pena}} pedir ajuda aos amigos brasileiros, e eu {{7|te}} apresento os meus.',
    '{{7|Me avisa}} o dia do seu voo, {{7|tá?}} Eu te busco no aeroporto.',
    '{{1|Um abraço,}}',
    '{{1|Chris}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'The frame of a personal e-mail: a short friendly subject, *Oi* plus the friend\'s first name, and *Um abraço* with the writer\'s first name at the end. *Prezado Jake* or *Atenciosamente* would be register errors with a friend.' },
    { n: 2, cat: 'papel', text: 'The opening reacts to the friend\'s news and recalls shared history (*desde a faculdade*). Before any advice starts, the grader knows that two old friends are writing and that one of them is about to move.' },
    { n: 3, cat: 'papel', text: 'The prompt asks what surprised *you* when you arrived, so the writer tells a short scene in the first person. *Fiquei sem reação* shows the foreigner\'s point of view, which is the role the prompt assigned.' },
    { n: 4, cat: 'fonte', text: 'The greeting habits from the source in new words: kisses between people who know each other, hugs even at a first meeting. *Todo mundo se cumprimenta com beijo* explains the custom to someone who has never seen it.' },
    { n: 5, cat: 'lingua', text: 'Accent. *Os brasileiros têm* takes the circumflex because the subject is plural. *Ele tem*, *eles têm*; *ele vem*, *eles vêm*. Autocorrect often misses this one, since both spellings are real words.' },
    { n: 6, cat: 'fonte', text: 'The source said social events run late but work and appointments do not. The e-mail turns that into a concrete example (a churrasco at seven) and a direct warning (*seja pontual*). Future subjunctive after *se*: *se alguém te chamar*, not *se alguém te chama*.' },
    { n: 7, cat: 'registro', text: 'Forms that are fine only in this genre: *pra*, *a gente*, *te* as an object with *você*, *tá?*, a sentence opening with *Mas*, and the spoken imperative *Me avisa*. With a friend they sound natural. In a carta do leitor, reclamação, blog or convite each one costs register points: write *para*, *nós*, *Peço que me avise*, *está bem?*, and replace *Mas* with *No entanto*.' },
    { n: 8, cat: 'fonte', text: 'Lunch as the main meal and a lighter dinner, from the source, with the typical plate kept because a newcomer needs the detail. The part about missing food from home and finding new fruit is reworded as a promise to the friend.' },
    { n: 9, cat: 'lingua', text: 'The tips use the written imperative for *você*: *tire*, *ande*, *tenha*, *seja*. The spoken forms *tira* and *anda* would pass in a note to a friend, but the written forms work in every genre, so they are the safer habit. *Vale a pena* + infinitive is another way to give advice without an order.' },
    { n: 10, cat: 'fonte', text: 'Bureaucracy from the source, turned into advice: get the CPF early, because you need it for a bank account and a rental, and carry copies because some documents need a notary. The source listed facts; the e-mail tells the friend what to do with them.' },
    { n: 11, cat: 'lingua', text: 'Agreement even in casual writing: *frutas deliciosas* (feminine plural), *documentos autenticados* (masculine plural). Check each adjective against its noun, as in *celulares velhos* and *TVs velhas*.' },
    { n: 12, cat: 'coesao', text: 'Each paragraph opens with a short line that names its topic (*Outra diferença é o horário*, *E prepare o estômago!*, *Agora, as dicas práticas*). The friend can follow the e-mail from surprise to warnings to tips without formal connectors, which would sound stiff here.' }
  ],
  why5: 'The e-mail matches its context. A foreigner who has lived in Brazil for years writes to a friend from home who is about to move. It opens by reacting to the news with a line of shared history and closes informally with a first name. It covers the three things the prompt asked for in order: a personal surprise told as a short scene, warnings about the cultural differences, and practical tips. All four themes from the source appear in new words and with a purpose (greetings, timing, meals, bureaucracy), and each is adapted for the friend rather than copied. Short topic lines at the start of each paragraph carry the reader through. The register is warm and consistent, with speech forms such as *pra*, *a gente* and *tá?* kept to a genre that allows them, while accents (*têm*), agreement and the written imperative stay standard.',
  wordCount: 215
};

CB.models['h-golpes'] = {
  answer: [
    '{{1|Golpes pelo celular: saiba como se proteger}}',
    '{{2|Vários frequentadores do Bem Viver nos contaram que receberam mensagens estranhas no celular}} e ficaram {{3|preocupados com elas}}. {{8|Há}} dois golpes muito comuns pelo WhatsApp e pelo Pix. {{6|Veja como eles funcionam e o que fazer.}}',
    '{{6|O golpe do falso parente}}',
    '{{4|Alguém escreve de um número novo, com a foto de um filho ou neto tirada das redes sociais, e diz que trocou de celular. Pouco depois, pede um Pix urgente.}}',
    '{{6|O golpe do link falso}}',
    '{{5|Chega uma mensagem que parece ser do banco, de uma loja ou de uma transportadora, sobre uma entrega atrasada, um prêmio ou um problema na conta. O link abre uma página falsa que pede a sua senha e os dados do cartão.}}',
    '{{6|Como se proteger}}',
    'Antes de qualquer Pix, {{7|ligue}} para o número antigo do parente ou fale com outra pessoa da família.',
    '{{9|Desconfie de pressa e de ofertas boas demais.}}',
    '{{7|Não clique}} {{10|em links}} enviados por mensagem. {{7|Abra}} o aplicativo oficial.',
    '{{10|Lembre-se de que}} o banco nunca pede senha por telefone ou mensagem.',
    '{{6|Caí no golpe. E agora?}}',
    '{{11|Avise o banco imediatamente e registre um boletim de ocorrência.}} {{12|Não tenha vergonha: golpistas enganam pessoas de todas as idades.}}',
    '{{1|Ficou com alguma dúvida? Deixe a sua pergunta nos comentários.}}',
    '{{1|Equipe de voluntários do Bem Viver}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'Blog markers at both ends. The title names the topic and promises something useful (*saiba como se proteger*). The closing asks for questions in the comments, and the sign-off gives a role, not a name.' },
    { n: 2, cat: 'papel', text: 'The first sentence explains why the post exists: members of the center reported suspicious messages. It sets up the relationship the prompt describes. A volunteer is writing to the older people who come to the center.' },
    { n: 3, cat: 'lingua', text: 'Regência. *Preocupado com*, never *preocupado sobre*, which is a calque of "worried about". The same preposition goes with *cuidado com* and *tomar cuidado com*.' },
    { n: 4, cat: 'fonte', text: 'The fake-relative scam in new words: a new number, a photo of a child or grandchild taken from social media, the story about a new phone and then an urgent Pix. The source\'s quote *Mudei de número, salva aí* is left out; the post explains the trick without copying it.' },
    { n: 5, cat: 'fonte', text: 'The fake-link scam, reworded: *transportadora* for the delivery company, *entrega atrasada* for the stalled package. The last sentence says exactly what the fake page wants (password and card data), because that is what the reader must recognize.' },
    { n: 6, cat: 'coesao', text: '*Veja como eles funcionam e o que fazer* announces the plan, and four short headings follow it in order: two scams, protection, what to do after. An older reader can find any part again without reading the whole post.' },
    { n: 7, cat: 'lingua', text: 'The written imperative for *você* uses the present subjunctive: *ligue*, *abra*, *avise*, *registre*, *não clique*. *Liga* and *abre* are the spoken forms. The tips are short and built around one verb each, so the list is easy to scan.' },
    { n: 8, cat: 'registro', text: '*Há dois golpes* uses *haver* for existence, the written form. *Tem dois golpes* is spoken Portuguese and slips the post toward conversation.' },
    { n: 9, cat: 'registro', text: 'Plain words for older readers: *pressa* and *ofertas boas demais* say what the source meant with no jargon (*phishing*, *engenharia social*). The post also keeps one form of address, *você*, from start to finish (*a sua senha*, *Ficou com alguma dúvida?*), as the checklist asks.' },
    { n: 10, cat: 'lingua', text: 'Two regência points. *Clicar em* (*não clique em links*), and *lembrar-se de que* when the verb is pronominal. Without the pronoun it is *lembre que*; mixing them (*lembre-se que*) is common but marked in careful writing.' },
    { n: 11, cat: 'fonte', text: 'What to do after a scam, as the prompt asked: warn the bank right away and file a *boletim de ocorrência*. Two imperatives in one sentence give the reader a clear order of steps.' },
    { n: 12, cat: 'papel', text: 'A line written for this reader. Many older people hide a scam out of shame, so the volunteer reassures them before inviting questions. It shows the writer is thinking about who reads the blog, not only about the information.' }
  ],
  why5: 'The post fits the context the prompt set. A volunteer writes to the older people who use the center, starts from the suspicious messages they reported and keeps a warm, semi-formal tone with *você* throughout. It covers the three purposes in order: how the two scams work, how to protect yourself and what to do after a scam. Every fact comes from the source in new words, including the new number with a copied photo, the fake page asking for passwords, the check with family, the official app and the bank that never asks for a password. Headings and an announcing sentence organize the post for readers who scan. The language is within reach and correct: written imperatives, *há* for existence, and regência with *preocupado com*, *clicar em* and *lembrar-se de que*.',
  wordCount: 218
};

CB.models['i-adocao'] = {
  answer: [
    '{{1|Adote com amor. Adote com responsabilidade.}}',
    '{{2|ONG Patinhas do Jardim Aurora}}',
    '{{2|Neste sábado, estaremos na feira de adoção do parque da cidade}}, com cães e gatos {{11|à espera de um lar}}.',
    '{{4|Pense bem antes de adotar}}',
    '{{3|Muitos animais abandonados nas ruas foram escolhidos por impulso, só porque o filhote era bonito.}} {{12|Um animal é um compromisso de muitos anos.}}',
    '{{4|Quanto custa?}}',
    '{{5|Ração de boa qualidade}}',
    '{{5|Vacinação todos os anos}}',
    '{{5|Proteção contra vermes, pulgas e carrapatos}}',
    '{{5|Visitas regulares}} {{11|ao veterinário}}',
    '{{5|Uma reserva para emergências}}',
    '{{7|Castre}} o seu animal. {{6|A castração evita filhotes não planejados e diminui o risco de algumas doenças. Muitas prefeituras fazem a cirurgia de graça ou por um preço baixo.}}',
    '{{4|E o tempo?}}',
    '{{7|Leve}} o cão para passear todos os dias. {{7|Brinque}} com o gato e {{7|coloque}} telas nas janelas. {{8|Um animal pode viver mais de quinze anos, então decida quem vai cuidar dele nas férias ou numa mudança.}}',
    '{{4|Como adotar na Patinhas?}}',
    '{{9|1. Escolha o seu novo amigo na feira.}}',
    '{{9|2. Converse com a nossa equipe em uma entrevista.}}',
    '{{9|3. Assine o termo de responsabilidade.}}',
    '{{7|Dê}} uma chance aos adultos! Eles {{10|já têm tamanho e temperamento definidos}}, então não há surpresas.',
    '{{2|Visite o nosso estande no sábado e traga a sua família!}}',
    '{{2|Instagram: @patinhasdojardimaurora}}',
    '{{2|E-mail: adote@patinhasjardimaurora.org}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'A flyer title has to stop people as they walk past. Two short imperatives with a repeated verb (*Adote com amor. Adote com responsabilidade.*) name the action and the message of the whole leaflet.' },
    { n: 2, cat: 'papel', text: 'The NGO identifies itself under the title and mentions the fair, then closes with an invitation to its stand and invented contact details. The reader always knows who is speaking and where to find them, which is the role the prompt assigned.' },
    { n: 3, cat: 'fonte', text: 'The source\'s point about impulse adoption and abandonment, compressed into one sentence and reworded. The leaflet does not repeat that families forgot costs and time; the next blocks show those costs instead.' },
    { n: 4, cat: 'genero', text: 'Short subheadings, some as questions (*Quanto custa?*, *E o tempo?*, *Como adotar na Patinhas?*), break the text into blocks a visitor can scan in seconds. A flyer written as paragraphs would lose points on genre.' },
    { n: 5, cat: 'fonte', text: 'The care and costs from the source as a list of short items: food, yearly vaccines, protection against worms, fleas and ticks, vet visits and an emergency fund. Nothing is added, and the wording changes (*vacinação*, *proteção*, *visitas regulares*).' },
    { n: 6, cat: 'fonte', text: 'Neutering with both benefits from the source (no unplanned litters, lower risk of some diseases) and the practical fact that it is often free or cheap. That last point answers the reader\'s objection about cost.' },
    { n: 7, cat: 'lingua', text: 'Imperatives for *você* use the present subjunctive: *castre*, *leve*, *brinque*, *coloque*, *dê*, *traga*. *Coloca* and *traz* are spoken forms. Note the spelling changes that keep the sound: *brincar* becomes *brinque*, *colocar* becomes *coloque*. *Dê* keeps its accent.' },
    { n: 8, cat: 'fonte', text: 'The time commitment from the source: daily walks, play and window screens, a lifespan of more than fifteen years and a plan for vacations or a move. The last sentence turns the source\'s warning into an instruction (*decida quem vai cuidar dele*).' },
    { n: 9, cat: 'coesao', text: 'The adoption process as three numbered steps in the order a visitor will live them, from the fair to the interview to the signed form. Numbering does the work that connectors do in a paragraph.' },
    { n: 10, cat: 'lingua', text: 'Accent and agreement. *Eles já têm* takes the circumflex because the subject (*eles*, the adult animals) is plural. *Definidos* is masculine plural because it describes two masculine nouns, *tamanho* and *temperamento*.' },
    { n: 11, cat: 'lingua', text: 'Crase and contraction. *À espera de* always carries the crase. *Visitas ao veterinário* uses *a* + *o* because *veterinário* is masculine, so there is no crase there.' },
    { n: 12, cat: 'registro', text: 'Persuasive but responsible. The leaflet invites adoption and states the commitment plainly, with no guilt and no exaggeration. It stays neutral and written: *você* and imperatives for warmth, no *a gente*, no *pra*, no *tem que*.' }
  ],
  why5: 'The leaflet fits its context. An NGO speaks to visitors at an adoption fair and encourages adoption while being honest about what it costs. It has every genre marker the checklist lists: a slogan title, the NGO\'s name, short blocks under subheadings, a list, imperatives to the reader and invented contacts at the end. All the source information is there in new words, including costs and care, neutering and its low price, daily time and the fifteen-year lifespan, the interview, the signed form and the case for adult animals. The blocks follow a logical order (why to think, cost, time, process), and the numbered steps give cohesion without long sentences. The language is simple and correct: written imperatives with the right spelling changes, *têm* with its accent, masculine plural agreement in *definidos* and crase in *à espera de*.',
  wordCount: 209
};

CB.models['j-feira-trocas'] = {
  answer: [
    '{{1|1ª Feira de Trocas de Livros e Brinquedos}}',
    '{{2|Caras famílias e vizinhos,}}',
    '{{3|A Associação de Pais e Mestres da Escola Municipal Jardim Primavera convida toda a comunidade para a primeira Feira de Trocas de Livros e Brinquedos. Não é preciso ser aluno da escola: todos são bem-vindos!}}',
    '{{5|Quando:}} {{4|sábado, dia 18, das 9h às 13h}}',
    '{{5|Onde:}} {{4|na quadra da escola}}',
    '{{5|Como funcionam as trocas?}}',
    '{{6|A criança entrega um livro ou brinquedo que não usa mais e recebe uma ficha.}} {{11|Com essa ficha,}} ela escolhe outro item na feira. {{6|Cada item vale uma ficha, seja grande ou pequeno.}}',
    '{{6|Quem preferir pode deixar os itens na secretaria até sexta-feira e já levar as fichas. Também é possível trazê-los no dia da feira.}}',
    '{{5|O que pode ser levado?}}',
    '{{9|Brinquedos limpos, com todas as peças}}',
    '{{9|Livros sem páginas rasgadas}}',
    'Atenção: {{10|brinquedos quebrados não serão aceitos.}}',
    '{{7|Incentivem}} {{8|as crianças a separar}} os itens com antecedência.',
    '{{11|Além das trocas,}} {{10|haverá}} {{4|contação de histórias às 10h30 e pintura de rosto para as crianças.}} {{11|No fim da feira,}} {{4|os itens que sobrarem serão}} {{8|doados à creche do bairro}}.',
    '{{7|Venham}} com toda a família e {{7|tragam}} os amigos. {{12|Contamos com a presença de vocês!}}',
    '{{12|Associação de Pais e Mestres da Escola Municipal Jardim Primavera}}'
  ],
  notes: [
    { n: 1, cat: 'genero', text: 'The title names the event and says it is the first one. On a notice board or at the top of a WhatsApp message, the title is often all people read before deciding to open it.' },
    { n: 2, cat: 'registro', text: '*Caras famílias e vizinhos* is warm but written, and it covers both groups the invitation is for: school families and the wider neighborhood. *Oi, pessoal* would be too casual for the school\'s mural, and *Prezados senhores* too stiff for parents.' },
    { n: 3, cat: 'papel', text: 'The first sentence says who invites (the parents\' association), whom (the whole community) and to what. The next line makes clear the event is open to everyone, not only students, which was a point the organizer stressed.' },
    { n: 4, cat: 'fonte', text: 'The event facts converted to written form. *Das nove da manhã à uma da tarde* becomes *das 9h às 13h*, and *às dez e meia* becomes *às 10h30*. The storytelling, face painting and donation to the daycare stay, all in the association\'s own words.' },
    { n: 5, cat: 'genero', text: 'Labels (*Quando:*, *Onde:*) and question headings make the invitation scannable on a phone and on a printed board. Short lines replace the back-and-forth of a conversation.' },
    { n: 6, cat: 'fonte', text: 'How the swaps work, reworded: one item earns one token whatever its size, and items can be left at the office until Friday or brought on the day. *Seja grande ou pequeno* replaces *não importa o tamanho* with a present subjunctive, and *quem preferir* uses the future subjunctive.' },
    { n: 7, cat: 'lingua', text: 'The invitation speaks to *vocês*, so the imperatives are plural: *incentivem*, *venham*, *tragam*. The singular spoken forms (*vem*, *traz*, *coloca*) do not match *vocês*. Write *coloquem*, *venham*, *tragam*.' },
    { n: 8, cat: 'lingua', text: 'Regência. *Incentivar alguém a fazer algo* needs the *a* before the infinitive: *incentivem as crianças a separar*, never *incentivem as crianças separar*. *Doar algo a alguém* + *a creche* gives the crase in *doados à creche*.' },
    { n: 9, cat: 'lingua', text: 'Agreement in the list of what to bring. *Brinquedos limpos* (masculine plural), *todas as peças* and *páginas rasgadas* (feminine plural). Each adjective matches the noun it describes.' },
    { n: 10, cat: 'registro', text: 'Spoken lines turned into written ones. *Brinquedo quebrado a gente não vai aceitar* becomes *brinquedos quebrados não serão aceitos*, and *vai ter contação de histórias* becomes *haverá contação de histórias*. The text never mentions where the information came from, and *tô*, *tão*, *pra*, *a gente* and *né* are all gone.' },
    { n: 11, cat: 'coesao', text: '*Com essa ficha* points back to the token named in the previous sentence, so the steps of the swap link without repeating the whole idea. *Além das trocas* and *No fim da feira* move the reader from the main activity to the extras and the end of the day.' },
    { n: 12, cat: 'papel', text: 'The closing repeats the invitation in the association\'s *nós* voice (*Contamos com*) and speaks to *vocês*, as in the rest of the text. The signature is the association, which is the role the prompt gave.' }
  ],
  why5: 'The invitation fits its context. The parents\' association invites families and neighbors, and the short labeled blocks work both in a WhatsApp group and on the school mural. It covers the three purposes the prompt set: it calls the community to the event, explains the token system and says what may and may not be brought. Every fact from the source is there, including the date and time, the court, the open invitation, one token per item, the Friday drop-off, the condition of the items, storytelling at 10:30, face painting and the donation to the daycare. All spoken marks are converted to writing, and the source is never mentioned. Headings and reference words (*essa ficha*, *Além das trocas*) hold it together. The language shows plural imperatives, regência with *incentivar a* and *doar a*, agreement in the list, and *haverá* in place of *vai ter*.',
  wordCount: 205
};
