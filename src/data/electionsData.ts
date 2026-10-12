import { ElectionMeta } from '../types.ts';

export const ELECTIONS_DATA: Record<1920 | 1946 | 1990, ElectionMeta> = {
  1920: {
    year: 1920,
    title: 'Volby do Poslanecké sněmovny 1920',
    subtitle: 'První parlamentní volby v nově zrozené Československé republice',
    date: '18. a 25. dubna 1920',
    turnout: '89,6 %',
    stakes: 'Rozhodovalo se o samotném charakteru mladého státu: zvítězí socialistická vize nového řádu, agrárně-venkovský konzervatismus, nebo občansko-demokratická a národně-konzervativní vize státu?',
    atmosphereQuote: '„Pryč od Vídně, pryč od Říma! Republika musí být sociálně spravedlivá a svobodná!“ – dobové heslo',
    historicalContext: `V dubnu 1920 se konaly vůbec první parlamentní volby samostatného Československa podle nové demokratické ústavy z února 1920, které nahradily dosavadní nevolené Revoluční národní shromáždění. Po rozpadu habsburské monarchie a kruté světové válce čelila republika obrovským výzvám: hyperinflaci, nedostatku potravin a uhlí, radikalizaci dělnictva ovlivněného bolševickou revolucí v Rusku a napětí s početnou německou a maďarskou menšinou, které se ocitly v novém státě nedobrovolně.

Mezi hlavní témata patřila pozemková reforma (rozdělení šlechtických velkostatků), odluka církve od státu, 8hodinová pracovní doba a postavení Slovenska v novém unitárním státě. Zároveň to byly první celostátní volby v naší historii, v nichž měly ženy plné a rovné volební právo.`,
    outcomeSummary: `Volby přinesly triumf levice. Sociální demokraté (ČSSD) vedení Vlastimilem Tusarem získali přes 25,7 % hlasů a stali se nejsilnější stranou. Společně s německou sociální demokracií (DSAP) měla levice v parlamentu téměř většinu. Tusar sestavil koaliční vládu „rudozelené koalice“ (sociální demokraté a agrárníci).

Již na podzim 1920 však v ČSSD propukl hluboký rozkol mezi demokratickým křídlem a radikální leninskou levicí, což vedlo k pádu vlády, generální stávce a v květnu 1921 k založení Komunistické strany Československa (KSČ). Moc následně převzala úřednická vláda Jana Černého a posléze tzv. Pětka v čele s agrárníkem Antonínem Švehlou.`,
    parties: [
      {
        id: 'cssd',
        shortName: 'ČSSD',
        fullName: 'Československá sociálně demokratická strana dělnická',
        ideology: 'Demokratický socialismus, odborové hnutí',
        leaders: ['Vlastimil Tusar', 'Rudolf Bechyně', 'Bohumír Šmeral'],
        color: '#dc2626',
        historicalPercentage: 25.7,
        historicalSeats: 74,
        description: 'Hlavní strana průmyslového dělnictva. Požadovala socializaci klíčových odvětví, silnou ochranu pracujících a rozsáhlou pozemkovou reformu.',
        programHighlight: 'Socializace velkých podniků, 8hodinový pracovní den, sociální pojištění a odluka církve od státu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1'
      },
      {
        id: 'rszml',
        shortName: 'RSČV (Agrárníci)',
        fullName: 'Republikánská strana československého venkova',
        ideology: 'Agrarismus, venkovský konzervatismus, ochranářství',
        leaders: ['Antonín Švehla', 'František Udržal', 'Karel Prášek'],
        color: '#16a34a',
        historicalPercentage: 9.7,
        historicalSeats: 28,
        description: 'Vlivná strana sedláků a venkovského obyvatelstva. Klíčový pilíř stability první republiky, obhájce soukromého zemědělského vlastnictví.',
        programHighlight: 'Půda do rukou rolníků, agrární cla proti levnému dovozu, zachování křesťanských tradic a řádu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Republik%C3%A1nsk%C3%A1_strana_zem%C4%9Bd%C4%9Blsk%C3%A9ho_a_malorolnick%C3%A9ho_lidu'
      },
      {
        id: 'csl',
        shortName: 'ČSL (Lidovci)',
        fullName: 'Československá strana lidová',
        ideology: 'Křesťanský socialismus, křesťanská demokracie, katolicismus',
        leaders: ['Jan Šrámek', 'Bohumil Stašek', 'Alois Kříž'],
        color: '#eab308',
        historicalPercentage: 11.3,
        historicalSeats: 33,
        description: 'Tradiční obhájce katolických věřících, církevních škol a rodiny. Hledala kompromis mezi sociální péčí a křesťanskou morálkou.',
        programHighlight: 'Obrana katolické církve proti sekularismu, podpora církevního školství a rodinná politika.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/KDU-%C4%8CSL'
      },
      {
        id: 'csns',
        shortName: 'ČSS (Socialisté)',
        fullName: 'Československá strana socialistická',
        ideology: 'Národní socialismus, vlastenectví, reformismus',
        leaders: ['Václav Klofáč', 'Jiří Stříbrný', 'Emil Franke'],
        color: '#f97316',
        historicalPercentage: 8.1,
        historicalSeats: 24,
        description: 'Středolevicová reformní strana orientovaná na úředníky, řemeslníky a inteligenci. Silně vlastenecká a protirakouská.',
        programHighlight: 'Socializace bez marxistického dogmatismu, jednotný národní stát a radikální protikatolický postoj.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_n%C3%A1rodn%C4%9B_socialistick%C3%A1'
      },
      {
        id: 'csnd',
        shortName: 'ČsND (Národní dem.)',
        fullName: 'Československá národní demokracie',
        ideology: 'Národní liberalismus, konzervatismus, hospodářský liberalismus',
        leaders: ['Karel Kramář', 'Alois Rašín', 'Viktor Dyk'],
        color: '#2563eb',
        historicalPercentage: 6.3,
        historicalSeats: 19,
        description: 'Oporu nacházela u velkoprůmyslu, bank a národovecké inteligence. Hájila tvrdou měnu (Rašínova deflace) a ostrý odpor k bolševismu.',
        programHighlight: 'Silná a stabilní měna, ochrana soukromého vlastnictví, nostrifikace podniků a spojenectví s Francií.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_n%C3%A1rodn%C3%AD_demokracie'
      },
      {
        id: 'dsap',
        shortName: 'DSAP (Něm. soc. dem.)',
        fullName: 'Deutsche sozialdemokratische Arbeiterpartei',
        ideology: 'Sociální demokracie, práva německojazyčné menšiny',
        leaders: ['Ludwig Czech', 'Josef Seliger'],
        color: '#b91c1c',
        historicalPercentage: 11.1,
        historicalSeats: 31,
        description: 'Druhá nejsilnější strana v republice. Reprezentovala německé dělníky v pohraničí, bojovala za sociální práva a národnostní samosprávu.',
        programHighlight: 'Socialismus, národnostní rovnoprávnost pro Němce, odmítnutí čechoslovakismu a podpora autonomie.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/N%C4%9Bmeck%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1_v_%C4%8Ceskoslovensk%C3%A9_republice'
      },
      {
        id: 'bdl',
        shortName: 'BdL (Něm. agrárníci)',
        fullName: 'Bund der Landwirte',
        ideology: 'Německý agrarismus, ochrana venkova',
        leaders: ['Franz Spina', 'Wolfgang Zierhut'],
        color: '#15803d',
        historicalPercentage: 3.9,
        historicalSeats: 11,
        description: 'Strana německých zemědělců a sedláků v Sudetech. Později se stala jednou z prvních německých „aktivistických“ stran spolupracujících s vládou.',
        programHighlight: 'Obrana německého venkova, odmítání konfiskace půdy bez spravedlivé náhrady, dovozní cla.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Bund_der_Landwirte'
      },
      {
        id: 'sls',
        shortName: 'SĽS (Ľudovci)',
        fullName: 'Slovenská ľudová strana',
        ideology: 'Slovenský autonomismus, křesťanský konzervatismus',
        leaders: ['Andrej Hlinka', 'Ferdiš Juriga', 'Florián Tománek'],
        color: '#854d0e',
        historicalPercentage: 6.8,
        historicalSeats: 12,
        description: 'V roce 1920 kandidovala ve volebním svazku s ČSL. Požadovala naplnění Pittsburské dohody, svébytnost slovenského národa a obranu víry.',
        programHighlight: 'Zákonodárná autonomie Slovenska, obrana katolické církve proti pražskému laicismu a čechoslovakismu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Hlinkova_slovensk%C3%A1_%C4%BEudov%C3%A1_strana'
      }
    ],
    questions: [
      {
        id: 1,
        category: 'Hospodářství a půda',
        statement: 'Rozsáhlé velkostatky šlechty a církve musí být státem plošně zabaveny a rozděleny mezi bezzemky a drobné rolníky.',
        historicalNote: 'Agrárníci a socialisté zabírání nadšeně podporovali. Národní demokraté varovali před propadem produkce na velkostatcích, němečtí agrárníci (BdL) byli proti, protože to postihlo německé majitele. Lidovcům vadilo zabavování církevní půdy, ale jejich voliči (rolníci) půdu chtěli.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 2,
        category: 'Socializace a průmysl',
        statement: 'Klíčové uhelné doly, energetika a velké velkokapitálové podniky mají být bez prodlení znárodněny a předány pod správu pracujícího lidu.',
        historicalNote: 'Část poválečné společnosti volala po okamžité socializaci. Národní demokraté a agrárníci varovali před hospodářským krachem.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 3,
        category: 'Sociální práva',
        statement: 'Zákonná pracovní doba smí být nanejvýš 8 hodin denně. Stát to musí u všech zaměstnavatelů tvrdě vymáhat',
        historicalNote: 'Levicové strany byly pro nekompromisní vymáhání. Agrárníci (česko-slovenští i němečtí) sice zákon respektovali, ale tvrdě lobbovali za výjimky pro zemědělství (např. během žní). Národní demokraté chtěli výjimky pro průmysl, lidovci hledali kompromis.',
        partyStances: { cssd: 1, rszml: -1, csl: 0, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: 0 }
      },
      {
        id: 4,
        category: 'Církev a stát',
        statement: 'Škola a stát musí být zcela odděleny od římskokatolické církve; církevní vliv na společnost a její majetková privilegia musí být odstraněny.',
        historicalNote: 'Vlna sekularizace pod heslem „Pryč od Říma“ vedla ke stržení Mariánského sloupu a vzniku Církve československé (husitské).',
        partyStances: { cssd: 1, rszml: 0, csl: -1, csns: 1, csnd: 0, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 5,
        category: 'Školství a víra',
        statement: 'Náboženská výchova a křesťanské hodnoty musí zůstat povinnou součástí vzdělávání mládeže na všech obecných i středních školách.',
        historicalNote: 'Otázka náboženství ve školách hluboce štěpila lidovce (kteří za něj bojovali) a socialisty (kteří požadovali čistě laickou školu).',
        partyStances: { cssd: -1, rszml: 0, csl: 1, csns: -1, csnd: 0, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 6,
        category: 'Státoprávní uspořádání',
        statement: 'Slovensku musí být neprodleně udělena plná zákonodárná a správní autonomie s vlastním sněmem, jak slibovala Pittsburská dohoda.',
        historicalNote: 'Andrej Hlinka trval na závazku z Pittsburgu z roku 1918. Praha však prosazovala centralismus z obavy před maďarským revizionismem.',
        partyStances: { cssd: -1, rszml: -1, csl: 0, csns: -1, csnd: -1, dsap: 0, bdl: 0, sls: 1 }
      },
      {
        id: 7,
        category: 'Národní identita',
        statement: 'Češi a Slováci tvoří jeden jediný, nedílný státotvorný „národ československý“ s jedním státním jazykem.',
        historicalNote: 'Politický konstrukt „čechoslovakismu“ byl v Ústavě 1920 ukotven proto, aby Slované tvořili v ČSR přesvědčivou dvoutřetinovou většinu.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 8,
        category: 'Národnostní menšiny',
        statement: 'Německá a maďarská menšina má mít v oblastech, kde tvoří většinu, plnou samosprávu a německý jazyk má být rovnocenný úřednímu.',
        historicalNote: 'Více než 3 miliony Němců a 700 tisíc Maďarů se ocitlo v ČSR. Německé strany zpočátku odmítaly loajalitu k novému státu.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: 1, sls: 0 }
      },
      {
        id: 9,
        category: 'Měnová politika',
        statement: 'Stát musí za cenu přísných rozpočtových škrtů a deflace udržet tvrdou a stabilní měnu, i kdyby to dočasně zvýšilo nezaměstnanost.',
        historicalNote: 'Alois Rašín prosadil ráznou měnovou odluku a deflační politiku, která zachránila korunu před německou hyperinflací, ale zdražila export.',
        partyStances: { cssd: -1, rszml: 0, csl: 0, csns: -1, csnd: 1, dsap: -1, bdl: 0, sls: 0 }
      },
      {
        id: 10,
        category: 'Hospodářský nacionalismus',
        statement: 'Podniky působící na našem území nesmí být řízeny ze zahraničí – musí sídlit v Československu a mít domácí vedení.',
        historicalNote: 'Zákon o nostrifikaci odstřihoval vídeňská a budapešťská ústředí a nutil podniky registrovat se a platit daně v Československu.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 1 }
      },
      {
        id: 11,
        category: 'Zemědělství a cla',
        statement: 'Domácí zemědělci musí být chráněni před levnou zahraniční konkurencí vysokými ochrannými cly na dovoz obilí a potravin.',
        historicalNote: 'Agrárníci požadovali cla pro ochranu rolníků, zatímco městské socialistické strany žádaly levné potraviny pro dělnictvo.',
        partyStances: { cssd: -1, rszml: 1, csl: 1, csns: -1, csnd: 1, dsap: -1, bdl: 1, sls: 1 }
      },
      {
        id: 12,
        category: 'Zahraniční politika',
        statement: 'Bezpečnost ČSR musí být postavena výhradně na vojenském spojenectví s Francií a dohodovými mocnostmi proti revanšismu.',
        historicalNote: 'Zahraniční politika Edvarda Beneše a Karla Kramáře stavěla na francouzském bezpečnostním deštníku a Malé dohodě.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: 0 }
      },
      {
        id: 13,
        category: 'Vztah k Sovětskému Rusku',
        statement: 'Československo by mělo neprodleně diplomaticky uznat bolševické Sovětské Rusko a navázat s ním přátelské vztahy.',
        historicalNote: 'Pravice a střed (Kramář, Švehla) bolševismus ostře odmítali. ČSSD se v této otázce v roce 1920 vnitřně štěpila na demokratické a radikální komunistické křídlo. Němečtí sociální demokraté (DSAP) tehdy stáli více nalevo a solidaritu podporovali.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 14,
        category: 'Zásluhy o stát',
        statement: 'Zákon musí legionářům zajistit přednostní právo na státní úřady, konfiskovanou půdu a licence k provozování trafik (které tehdy sloužily jako finanční zabezpečení veteránů).',
        historicalNote: 'Legionářská tradice byla posvátným mýtem První republiky, pravice a nacionálové ji stavěli nad loajalitu menšin.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 15,
        category: 'Parlament a Senát',
        statement: 'Parlament by měl mít pouze jednu komoru, nikoliv druhou brzdu v podobě elitářského Senátu.',
        historicalNote: 'Levicové strany (ČSSD, ČSNS, DSAP) považovaly Senát za zbytečnou a nedemokratickou konzervativní brzdu, která měla tlumit vůli lidu. Pravice a střed (Agrárníci, Národní demokraté Karla Kramáře, Lidovci) naopak ustavení Senátu tvrdě prosazovali jako pojistku proti revolučním náladám a unáhleným zákonům.',
        partyStances: { cssd: 1, rszml: -1, csl: -1, csns: 1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      }
    ],
    electionSystem: {
      body: 'Parlament se skládal ze dvou komor: Poslanecké sněmovny (300 mandátů) a Senátu (150 mandátů). V dubnu 1920 se však fakticky obsadilo jen 281 poslaneckých a 142 senátorských křesel. Kvůli tehdy neuzavřeným hranicím a sporům se totiž nevolilo na Těšínsku, Hlučínsku, Vitorazsku ani na Podkarpatské Rusi.',
      system: 'Poměrný systém ve 23 vícemandátových krajích (pro sněmovnu). Pro přepočet se v prvním skrutiniu používala Hareova kvóta, ve druhém a třetím Hagenbach-Bischoffova. Pro zisk mandátu v kraji neexistovala žádná umělá uzavírací klauzule, stačilo dosáhnout volebního čísla. Hlasovalo se pomocí přísně vázaných kandidátních listin bez možnosti kroužkování.',
      franchise: 'Všeobecné a rovné volební právo pro muže i ženy (poprvé v historii bez omezujícího majetkového censu). Věk pro volbu do Sněmovny byl stanoven na 21 let, pro Senát na 26 let. Podmínkou bylo státní občanství a bydliště v obci alespoň po dobu 3 měsíců.',
      eligibility: 'Do Poslanecké sněmovny mohl kandidovat občan od 30 let věku, do Senátu až od 45 let.',
      trivia: [
        'Volební povinnost: Účast u voleb byla ze zákona povinná. Kdo se bez vážného důvodu (nemoc, věk nad 70 let, vzdálenost přes 100 km) nedostavil k urnám, riskoval pokutu od 20 do 5 000 Kč nebo vězení až na 1 měsíc.',
        'Zákaz alkoholu: V den voleb i den předcházející platil v celé republice přísný zákaz nalévání a prodeje jakéhokoli alkoholu.',
        'První účast žen: Ženy tvořily více než 53 % všech zapsaných voličů. Do parlamentu bylo poprvé zvoleno celkem 16 žen (13 poslankyň a 3 senátorky).',
        'Národnostní rozmanitost: Německé a maďarské strany získaly přes 30 % všech poslaneckých mandátů, což věrně odráželo etnické složení nového státu.'
      ]
    }
  },
  1946: {
    year: 1946,
    title: 'Volby do Ústavodárného shromáždění 1946',
    subtitle: 'Poslední částečně svobodné volby před čtyřiceti lety komunistické totality',
    date: '26. května 1946',
    turnout: '94,0 %',
    stakes: 'Rozhodovalo se o geopolitickém a mocenském směřování země: zůstane Československo pluralitní demokracií a mostem na Západ, nebo se stane součástí sovětské sféry vlivu s omezenou suverenitou?',
    atmosphereQuote: '„Se Sovětským svazem na věčné časy a nikdy jinak!“ vs. „Za svobodu a křesťanskou kulturu!“',
    historicalContext: `Volby v květnu 1946 probíhaly v jedinečné a vypjaté atmosféře těsně po skončení druhé světové války. V zemi panovala vděčnost Sovětskému svazu za osvobození od nacistické okupace a zároveň rozhořčení ze zrady západních mocností v Mnichově 1938. 

Politická scéna byla zásadně omezena systémem tzv. Národní fronty: předválečné pravicové strany (především agrárníci a národní sjednocení) byly zakázány pod záminkou kolaborace. Probíhal masový odsun téměř 3 milionů Němců, konfiskace jejich majetku a osidlování pohraničí. Klíčový těžký průmysl, doly a banky byly již od října 1945 znárodněny Benešovými dekrety. Komunisté (KSČ) pod vedením Klementa Gottwalda vystupovali v roli vlastenců hájících drobné živnostníky a sedláky, zatímco demokratické strany (ČSNS, ČSL a slovenská Demokratická strana) se snažily bránit zbytek občanských svobod a parlamentní pluralitu.`,
    outcomeSummary: `KSČ v českých zemích drtivě zvítězila se ziskem 40,17 % hlasů (celostátně 31,05 %). Na Slovensku však došlo k politickému zemětřesení: nekomunistická Demokratická strana (DS) získala 62 % hlasů a porazila slovenské komunisty. 

Klement Gottwald se stal předsedou koaliční vlády Národní fronty. Komunisté obsadili klíčová ministerstva vnitra (SNB), informací, zemědělství a financí. Vítězství demokratů na Slovensku komunisté neutralizovali tzv. třetí pražskou dohodou, která omezila pravomoci slovenských orgánů. Výsledek voleb 1946 otevřel komunistům přímou cestu k ovládnutí bezpečnostního aparátu a k definitivnímu uchvácení moci během komunistického převratu v únoru 1948.`,
    parties: [
      {
        id: 'ksc',
        shortName: 'KSČ',
        fullName: 'Komunistická strana Československa',
        ideology: 'Marxismus-leninismus, lidová demokracie, sovětská orientace',
        leaders: ['Klement Gottwald', 'Rudolf Slánský', 'Václav Kopecký'],
        color: '#dc2626',
        historicalPercentage: 31.05,
        historicalSeats: 93,
        description: 'Vítěz voleb v českých zemích. Vystupovala jako tvůrce nového řádu, slibovala specifickou „československou cestu k socialismu“ bez kolchozů.',
        programHighlight: 'Pevné spojenectví se SSSR, dvouletý plán obnovy, příděl půdy v pohraničí rolníkům a monopol Národní fronty.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_%C4%8Ceskoslovenska'
      },
      {
        id: 'csns',
        shortName: 'ČSNS',
        fullName: 'Československá strana národně socialistická',
        ideology: 'Národní socialismus, masarykovská demokracie, vlastenectví',
        leaders: ['Petr Zenkl', 'Prokop Drtina', 'Hubert Ripka'],
        color: '#f97316',
        historicalPercentage: 18.37,
        historicalSeats: 55,
        description: 'Hlavní česká nekomunistická síla. Hájila odkaz T. G. Masaryka a Edvarda Beneše, usilovala o zachování svobody slova a vazeb na Západ.',
        programHighlight: 'Zastavení dalšího znárodňování, právní stát, ochrana živností a rovnováha mezi Východem a Západem.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_n%C3%A1rodn%C4%9B_socialistick%C3%A1'
      },
      {
        id: 'csl',
        shortName: 'ČSL (Lidovci)',
        fullName: 'Československá strana lidová',
        ideology: 'Křesťanská demokracie, křesťanský socialismus',
        leaders: ['Jan Šrámek', 'František Hála', 'Adolf Procházka'],
        color: '#eab308',
        historicalPercentage: 15.64,
        historicalSeats: 46,
        description: 'Křesťansky orientovaná strana opírající se o moravský venkov a katolické věřící. Hájila svobodu náboženství a církevní školství.',
        programHighlight: 'Obrana křesťanských rodinných hodnot, ochrana soukromého vlastnictví a svobodné volby bez diktátu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/KDU-%C4%8CSL'
      },
      {
        id: 'ds',
        shortName: 'DS',
        fullName: 'Demokratická strana',
        ideology: 'Občanská demokracie, křesťanství, slovenská samospráva',
        leaders: ['Jozef Lettrich', 'Ján Ursíny', 'Matej Josko'],
        color: '#2563eb',
        historicalPercentage: 14.07,
        historicalSeats: 43,
        description: 'Slovenský fenomén voleb 1946 (na Slovensku 62 %!). Sjednotila evangelíky i katolíky proti nástupu komunistické diktatury.',
        programHighlight: 'Slovenská národní samospráva, obnova tržních principů, svoboda vyznání a hráz proti bolševismu.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Demokratick%C3%A1_strana_(Slovensko)'
      },
      {
        id: 'cssd',
        shortName: 'ČSSD',
        fullName: 'Československá sociální demokracie',
        ideology: 'Demokratický socialismus, odborové hnutí',
        leaders: ['Zdeněk Fierlinger', 'Bohumil Laušman', 'Václav Majer'],
        color: '#ea580c',
        historicalPercentage: 12.05,
        historicalSeats: 37,
        description: 'Hluboce rozpolcená strana mezi levicovým prokomunistickým křídlem (Fierlinger) a demokratickým protikomunistickým křídlem (Majer).',
        programHighlight: 'Hospodářské plánování, sociální jistoty pracujících, zachování parlamentních procedur.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_soci%C3%A1ln%C4%9B_demokratick%C3%A1_strana_d%C4%9Blnick%C3%A1'
      },
      {
        id: 'kss',
        shortName: 'KSS',
        fullName: 'Komunistická strana Slovenska',
        ideology: 'Marxismus-leninismus, státní socialismus, centralismus',
        leaders: ['Viliam Široký', 'Gustáv Husák', 'Karol Šmidke'],
        color: '#991b1b',
        historicalPercentage: 6.89,
        historicalSeats: 21,
        description: 'Slovenská organizace KSČ. Na Slovensku utrpěla porážku od Demokratické strany, následně s pomocí pražských komunistů usilovala o likvidaci DS.',
        programHighlight: 'Socializace, centralizace moci v rukou komunistů a potlačení vlivu církve na Slovensku.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_Slovenska_(1939)'
      }
    ],
    questions: [
      {
        id: 1,
        category: 'Zahraniční orientace',
        statement: 'Zahraniční a bezpečnostní politika ČSR musí stát na bezvýhradném a trvalém spojenectví se Sovětským svazem jako jedinou zárukou proti Německu.',
        historicalNote: 'Sovětský svaz byl po válce vnímán jako osvoboditel. Demokratické strany však varovaly před jednostrannou závislostí na Moskvě.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 2,
        category: 'Most mezi světy',
        statement: 'Československo musí zůstat otevřeným mostem mezi Východem a Západem a zachovat těsné politické i obchodní vztahy s USA a Velkou Británií.',
        historicalNote: 'Prezident Edvard Beneš a nekomunistické strany věřili, že ČSR může syntetizovat západní demokracii a východní sociální spravedlnost.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 3,
        category: 'Odsun a právní stát',
        statement: 'Při odsunu a potrestání kolaborantů musíme důsledně dbát na právní stát a nepřipustit divoké msty a mimosoudní násilí.',
        historicalNote: 'S odsunem jako takovým souhlasily všechny poválečné strany. Ale demokratické strany (ČSNS, ČSL, DS) se v kampani ostře vymezovaly proti krutostem „Revolučních gard“ a apelovaly na spravedlnost a řádné soudy. Komunisté (KSČ, KSS) tyto excesy často záměrně vyvolávali nebo omlouvali jako „spravedlivý hněv lidu“. ČSSD byla rozpolcená.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 4,
        category: 'Hranice znárodnění',
        statement: 'Další vlna znárodňování musí být zastavena; soukromé řemeslo, maloobchod a střední firmy musí zůstat trvale v soukromých rukou.',
        historicalNote: 'Předvolební boj roku 1946 se vedl přesně o toto. Demokraté slibovali voličům jistotu, že jim nikdo nesebere jejich obchůdky a dílny. Klement Gottwald sice v kampani takticky tvrdil, že živnostníkům nikdo nic nevezme, ale ideologicky a programově KSČ trvala na úplné socializaci ekonomiky. Sociální demokracie chtěla silný státní sektor, ale váhala, jak naložit s drobnými živnostníky.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 5,
        category: 'Další vlna socializace',
        statement: 'Stát by měl v další etapě převzít také velkoobchod, zahraniční obchod a všechny průmyslové podniky s více než 50 zaměstnanci.',
        historicalNote: 'Tento cíl komunisté formulovali interně a prosadili jej do Hradeckého programu a po únorovém převratu.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 6,
        category: 'Zákaz pravicových stran',
        statement: 'Zákaz předválečné agrární strany a dalších pravicových subjektů byl spravedlivým krokem na ochranu republiky před kolaboranty.',
        historicalNote: 'Zákaz agrárníků zbavil statisíce venkovských voličů jejich přirozené strany. O jejich hlasy se tvrdě přetahovali komunisté a lidovci.',
        partyStances: { ksc: 1, csns: 1, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 7,
        category: 'Kultura a svoboda tisku',
        statement: 'Kultura, tisk a rozhlas by měly být vyňaty z vlivu soukromého kapitálu a řízeny výhradně státem či veřejnými institucemi.',
        historicalNote: 'Ministerstvo informací ovládal komunista Václav Kopecký, který prosazoval státní monopol na film, rozhlas i vydávání knih. Demokraté (ČSNS, ČSL, DS) zoufale bojovali za to, aby si strany, církve a spolky mohly vydávat nezávislý tisk a zachovat pluralitu. Levicová ČSSD v této době státní dohled nad kulturou převážně podporovala.',
        partyStances: { ksc: 1, csns: -1, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 8,
        category: 'Plánované hospodářství',
        statement: 'Hospodářství musí být podřízeno závaznému státnímu centrálnímu plánu (Dvouletce) a volný trh musí ustoupit zájmům celku.',
        historicalNote: 'Dvouletý plán obnovy na léta 1947–1948 byl ústředním programovým bodem Gottwaldovy vlády po volbách.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 9,
        category: 'Církev a školství',
        statement: 'Církevní školy a svoboda náboženského vyučování musí být v nové ústavě plně zaručeny a chráněny před marxistickým vlivem.',
        historicalNote: 'Zatímco lidovci a slovenští demokraté viděli v křesťanství hráz proti totalitě, komunisté plánovali vytlačení církve z veřejného prostoru.',
        partyStances: { ksc: -1, csns: 0, csl: 1, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 10,
        category: 'Postavení Slovenska',
        statement: 'Slovenské národní orgány (SNR a Sbor pověřenců) mají mít plnou autonomii a Praha nesmí omezovat slovenskou samosprávu.',
        historicalNote: 'Po drtivém vítězství DS na Slovensku komunisté prosadili tzv. 3. pražskou dohodu, která slovenské orgány podřídila pražské vládě.',
        partyStances: { ksc: -1, csns: -1, csl: 0, ds: 1, cssd: -1, kss: -1 }
      },
      {
        id: 11,
        category: 'Bezpečnostní složky',
        statement: 'Sbor národní bezpečnosti (SNB) a vojenské zpravodajství musí být přísně apolitické a nesmí být obsazovány členy jedné dominantní strany.',
        historicalNote: 'Komunistický ministr vnitra Václav Nosek systematicky dosazoval komunisty do velení policie, což vedlo k vládní krizi v únoru 1948.',
        partyStances: { ksc: -1, csns: 1, csl: 1, ds: 1, cssd: 0, kss: -1 }
      },
      {
        id: 12,
        category: 'Lidové soudnictví a retribuce',
        statement: 'Mimořádné lidové soudy pro potrestání zrádců a kolaborantů mají jednat rychle a bez zbytečných průtahů formálního práva.',
        historicalNote: 'Retribuční dekrety vedly k odsouzení přes 30 000 osob. Komunisté retribuce často zneužívali k likvidaci politických konkurentů.',
        partyStances: { ksc: 1, csns: 0, csl: -1, ds: -1, cssd: 0, kss: 1 }
      },
      {
        id: 13,
        category: 'Odbory a závodní rady',
        statement: 'Jednotné odborové hnutí (ROH) a závodní rady mají mít právo spolurozhodovat o chodu podniků a kontrolovat vedení firem.',
        historicalNote: 'Antonín Zápotocký vybudoval z ROH údernou pěst komunistické strany, schopnou vyhlásit generální stávku a paralyzovat stát.',
        partyStances: { ksc: 1, csns: 0, csl: -1, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 14,
        category: 'Monopol Národní fronty',
        statement: 'Systém Národní fronty, kde je opozice mimo vládní strany nepřípustná, je správnou zárukou národní jednoty.',
        historicalNote: 'Systém Národní fronty fakticky zrušil klasickou opoziční politiku a stal se nástrojem postupné likvidace demokracie.',
        partyStances: { ksc: 1, csns: 0, csl: 0, ds: -1, cssd: 1, kss: 1 }
      },
      {
        id: 15,
        category: 'Bílé lístky jako protest',
        statement: 'Voličům musí být umožněno odevzdat prázdný bílý volební lístek jako legitimní projev nesouhlasu s nabídkou Národní fronty.',
        historicalNote: 'Bílé lístky byly jedinou povolenou formou protestu. Získaly 0,45 % v českých zemích a 0,76 % na Slovensku.',
        partyStances: { ksc: -1, csns: 0, csl: 0, ds: 1, cssd: 0, kss: -1 }
      }
    ],
    electionSystem: {
      body: 'Ústavodárné národní shromáždění (jednokomorový parlament o celkových 300 poslancích). Poměr mandátů nebyl pevně daný, ale odvodil se až z volební účasti – nakonec připadlo 231 křesel na české země a 69 na Slovensko. Hlavním úkolem sboru bylo vypracování nové poválečné ústavy.',
      system: 'Poměrný volební systém ve 28 krajích. Kandidovat směly výhradně povolené strany sdružené v Národní frontě (4 v českých zemích, 4 na Slovensku). Všechny ostatní opoziční strany byly zakázány. Hlasovalo se vázanými kandidátkami.',
      franchise: 'Všichni českoslovenští státní občané od 18 let (věk byl snížen z předválečných 21 let). Z volebního práva však byli na základě dekretů zcela vyloučeni občané německé a maďarské národnosti a osoby označené za kolaboranty a zrádce.',
      eligibility: 'Každý občan s aktivním volebním právem, který dosáhl věku 21 let a byl zařazen na schválenou kandidátní listinu jedné ze stran Národní fronty.',
      trivia: [
        'Volební povinnost: I v roce 1946 byla účast u voleb pro oprávněné voliče povinná pod sankcí pokuty nebo vězení.',
        'Institut bílých lístků: Voliči, kteří nesouhlasili s nabídkou povolených stran Národní fronty, mohli do obálky vložit čistý bílý lístek. Celostátně jich bylo vhozeno zhruba 32 tisíc (0,45 % všech hlasů).',
        'Zákaz pravice: Tradiční a nejsilnější prvorepublikové strany – agrárníci (RSČV) a národní demokraté (ČsND) – měly zakázáno obnovit činnost.',
        'Slovenský paradox: Ačkoliv komunisté na Slovensku volby drtivě prohráli (vyhrála Demokratická strana s 62 %), tzv. třetí pražská dohoda podepsaná brzy po volbách účelově podřídila slovenské orgány (Sbor pověřenců) centrální pražské vládě řízené Klementem Gottwaldem.'
      ]
    }
  },
  1990: {
    year: 1990,
    title: 'Volby do Federálního shromáždění 1990',
    subtitle: 'První svobodné a demokratické volby po 44 letech nadvlády jedné strany',
    date: '8. a 9. června 1990',
    turnout: '96,8 %',
    stakes: 'Rozhodovalo se o definitivním potvrzení pádu totality, tempu a charakteru ekonomické transformace a o budoucím soužití Čechů a Slováků ve společném státě.',
    atmosphereQuote: '„Strany jsou pro straníky, Občanské fórum je pro všechny!“ – volební heslo OF',
    historicalContext: `V červnu 1990 zažilo Československo první skutečně svobodné volby od roku 1946. V euforické atmosféře po sametové revoluci (listopad 1989), zrušení článku 4 Ústavy o vedoucí úloze KSČ a zvolení Václava Havla prezidentem se k volebním urnám dostavilo neuvěřitelných 96,8 % oprávněných voličů.

Volby fungovaly především jako plebiscit o odmítnutí čtyřicetileté komunistické totality. Za širokým deštníkem revolučních hnutí (Občanské fórum v Česku, Verejnosť proti násiliu na Slovensku) se však již rýsovaly klíčové střety: Jak rychle přejít na tržní ekonomiku? Má se zvolit radikální cesta (Václav Klaus) nebo opatrnější sociální varianta (Valtr Komárek)? Jak se vypořádat s exponenty totality a tajnou policií StB (lustrace)? A jak uspořádat vztahy mezi Čechy a Slováky po vypjaté „pomlčkové válce“?`,
    outcomeSummary: `Občanské fórum (OF) v Česku získalo drtivých 53,15 % hlasů do Sněmovny lidu FS (celostátně 36,05 %), zatímco na Slovensku zvítězila Verejnosť proti násiliu (VPN) s 32,54 %. Komunistická strana (KSČS) skončila s 13,6 % druhá, což potvrdilo přítomnost nezanedbatelného postkomunistického elektorátu. Výrazného úspěchu dosáhlo na Moravě moravistické Hnutí za samosprávnou demokracii (HSD-SMS) s více než 10 % hlasů do Sněmovny lidu v ČR.

Byla vytvořena koaliční federální vláda v čele s Marianem Čalfou (OF/VPN). Volby roku 1990 potvrdily návrat Československa k demokracii, ale mandát na dva roky předznamenal dramatické události: rozpad revolučních hnutí, spor o kuponovou privatizaci a následný rozpad společného státu v roce 1992.`,
    parties: [
      {
        id: 'of',
        shortName: 'OF',
        fullName: 'Občanské fórum',
        ideology: 'Široké antiautoritářské hnutí, liberální demokracie, tržní reformy',
        leaders: ['Václav Klaus', 'Jiří Dienstbier', 'Jan Urban', 'Petr Pithart'],
        color: '#2563eb',
        historicalPercentage: 36.05,
        historicalSeats: 68,
        description: 'Vítěz voleb v ČR. Hnutí zrozené v sametové revoluci, které sjednotilo disidenty, ekonomy i širokou veřejnost k demontáži komunismu.',
        programHighlight: 'Návrat do Evropy, právní stát, rychlá privatizace a tržní ekonomika, svoboda jednotlivce.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Ob%C4%8Dansk%C3%A9_f%C3%B3rum'
      },
      {
        id: 'vpn',
        shortName: 'VPN',
        fullName: 'Verejnosť proti násiliu',
        ideology: 'Občanské demokratické hnutí, humanismus, reformismus',
        leaders: ['Fedor Gál', 'Vladimír Mečiar', 'Marián Čalfa', 'Milan Kňažko'],
        color: '#0284c7',
        historicalPercentage: 8.56,
        historicalSeats: 19,
        description: 'Slovenský protějšek OF, vítěz voleb na Slovensku. Bojovala za demokracii, ale s větším citem pro specifické sociální a národní potřeby Slovenska.',
        programHighlight: 'Demokratizace společnosti, federalismus s respektem k slovenské svébytnosti a sociálně citlivá transformace.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Verejno%C4%BE_proti_n%C3%A1siliu'
      },
      {
        id: 'kscs',
        shortName: 'KSČS',
        fullName: 'Komunistická strana Československa',
        ideology: 'Demokratický socialismus, reformní komunismus, obhajoba socialismu',
        leaders: ['Ladislav Adamec', 'Vasil Mohorita', 'Jiří Svoboda'],
        color: '#dc2626',
        historicalPercentage: 13.59,
        historicalSeats: 23,
        description: 'Bývalá státostrana po ztrátě mocenského monopolu. Hájila sociální jistoty, sociální stát a varovala před masovou nezaměstnaností a výprodejem majetku.',
        programHighlight: 'Zachování sociálních jistot, odpor k divoké privatizaci a plošným lustracím, vojenská neutralita.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Komunistick%C3%A1_strana_%C4%8Ceskoslovenska'
      },
      {
        id: 'kdu',
        shortName: 'KDU / KDH',
        fullName: 'Křesťanská a demokratická unie (ČR) / KDH (SR)',
        ideology: 'Křesťanská demokracie, sociálně-tržní hospodářství, etika',
        leaders: ['Josef Bartončík', 'Ján Čarnogurský', 'Václav Benda'],
        color: '#eab308',
        historicalPercentage: 10.84,
        historicalSeats: 20,
        description: 'Koalice lidovců a křesťanských aktivistů. V ČR byla těsně před volbami poškozena aférou kolem Josefa Bartončíka, na Slovensku získalo KDH silnou pozici.',
        programHighlight: 'Restituce církevního a soukromého majetku, ochrana rodiny, křesťanská morálka a sociálně-tržní řád.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/KDU-%C4%8CSL'
      },
      {
        id: 'hsd_sms',
        shortName: 'HSD-SMS',
        fullName: 'Hnutí za samosprávnou demokracii – Společnost pro Moravu a Slezsko',
        ideology: 'Moravský regionalismus, samospráva, decentralizace',
        leaders: ['Boleslav Bárta', 'Jaroslav Mezník'],
        color: '#9333ea',
        historicalPercentage: 5.39,
        historicalSeats: 9,
        description: 'Velké překvapení voleb na Moravě (v Jihomoravském kraji téměř 30 %!). Požadovalo zemské zřízení a konec pragocentrismu.',
        programHighlight: 'Obnova moravskoslezské samosprávy, trojfederace (Čechy, Morava a Slezsko, Slovensko) a zemský sněm.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Hnut%C3%AD_za_samospr%C3%A1vnou_demokracii_%E2%80%93_Spole%C4%8Dnost_pro_Moravu_a_Slezsko'
      },
      {
        id: 'sns',
        shortName: 'SNS',
        fullName: 'Slovenská národná strana',
        ideology: 'Slovenský nacionalismus, suverenita',
        leaders: ['Víťazoslav Móric', 'Stanislav Pánis'],
        color: '#84cc16',
        historicalPercentage: 3.67,
        historicalSeats: 6,
        description: 'Radikálně národní slovenská strana. Jako jediná parlamentní síla v roce 1990 otevřeně žádala samostatné Slovensko a konec federace.',
        programHighlight: 'Plná státní suverenita Slovenska, slovenština jako jediný úřední jazyk a samostatné vystupování v zahraničí.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Slovensk%C3%A1_n%C3%A1rodn%C3%A1_strana'
      },
      {
        id: 'css',
        shortName: 'ČSS (Socialisté)',
        fullName: 'Československá strana socialistická',
        ideology: 'Středový sociální liberalismus, reformismus',
        leaders: ['Jiří Vyvadil', 'Milan Nevima'],
        color: '#ea580c',
        historicalPercentage: 2.68,
        historicalSeats: 0,
        description: 'Bývalá strana Národní fronty, která se během listopadu 1989 postavila režimu (propůjčila balkón Melantrichu). Těsně nepřekročila 5% klauzuli.',
        programHighlight: 'Postupná sociálně-tržní transformace, posílení národní hrdosti a ochrana zaměstnanců.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/%C4%8Ceskoslovensk%C3%A1_strana_socialistick%C3%A1'
      },
      {
        id: 'sz',
        shortName: 'SZ (Zelení)',
        fullName: 'Strana zelených',
        ideology: 'Environmentální politika, ekologie, antinukleární hnutí',
        leaders: ['Aleš Šulc', 'Jaroslav Slanec'],
        color: '#16a34a',
        historicalPercentage: 3.1,
        historicalSeats: 0,
        description: 'Reagovala na děsivý stav životního prostředí v komunistickém ČSSR (smogy, kyselé deště, devastace Krušných hor).',
        programHighlight: 'Okamžité zastavení těžby uhlí v severních Čechách, ochrana ovzduší a pitné vody jako vládní priorita.',
        wikipediaUrl: 'https://cs.wikipedia.org/wiki/Strana_zelen%C3%BDch'
      }
    ],
    questions: [
      {
        id: 1,
        category: 'Ekonomická transformace',
        statement: 'Tržní transformace (liberalizace cen, privatizace a otevření trhů) musí proběhnout rychle a radikálně v podobě „šokové terapie“, i za cenu dočasného poklesu životní úrovně.',
        historicalNote: 'Spor mezi Václavem Klausem (rychlá reforma) a Valtrem Komárkem či Milanem Zeleným (postupná sociální cesta).',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 0, hsd_sms: 0, sns: -1, css: -1, sz: 0 }
      },
      {
        id: 2,
        category: 'Kuponová privatizace',
        statement: 'Státní podniky by měly být zprivatizovány masovou účastí všech občanů formou investičních kuponů za symbolický poplatek.',
        historicalNote: 'Kuponová privatizace byla unikátní československý nápad, jak rychle rozdělit obrovský státní majetek mezi miliony občanů bez domácího kapitálu.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 3,
        category: 'Sociální jistoty',
        statement: 'Přechod na tržní hospodářství musí být přísně regulován a zpomalen státem tak, aby nevznikla masová nezaměstnanost a neohrozila důchodce a rodiny.',
        historicalNote: 'Komunisté a část odborů varovali před sociálním kolapsem, na Slovensku hrozil rozpad zbrojního a těžkého průmyslu.',
        partyStances: { of: -1, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 4,
        category: 'Zákaz KSČ',
        statement: 'Komunistická strana by měla být jako totalitní zločinecká organizace postavena zcela mimo zákon a její majetek bez náhrady zabaven.',
        historicalNote: 'Havel a vedení OF razili heslo „Nejsme jako oni“ a odmítli plošný zákaz KSČ, radikální antikomunisté však požadovali její zrušení.',
        partyStances: { of: 0, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 5,
        category: 'Lustrace a vyrovnání s minulostí',
        statement: 'Bývalí agenti a spolupracovníci StB a vysocí funkcionáři KSČ musí být zákonem vyloučeni z veřejných funkcí a justice.',
        historicalNote: 'Lustrační zákon z roku 1991 vyvolal obrovské spory; pro KDU a radikální část OF byl nutnou očistou státu.',
        partyStances: { of: 1, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: -1, sz: 0 }
      },
      {
        id: 6,
        category: 'Restituce majetku',
        statement: 'Veškerý majetek zabavený komunistickým režimem po únoru 1948 (včetně polností a domů) musí být vrácen původním vlastníkům či jejich dědicům.',
        historicalNote: 'Restituční zákony napravovaly křivdy, ale vyvolaly debaty, zda vracet i majetek církvím a zda jít před únor 1948.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 1, sns: 0, css: 0, sz: 1 }
      },
      {
        id: 7,
        category: 'Společný stát',
        statement: 'Československá federace musí být zachována se silnými centrálními pravomocemi v měně, zahraniční politice a obraně.',
        historicalNote: 'Snaha zachovat funkční společný stát narážela na sílící slovenské požadavky na svébytnost a tzv. kompetenční spory.',
        partyStances: { of: 1, vpn: 0, kscs: 1, kdu: 1, hsd_sms: 1, sns: -1, css: 1, sz: 1 }
      },
      {
        id: 8,
        category: 'Slovenská suverenita',
        statement: 'Slovensko by mělo získat plnou národní suverenitu a s Českou republikou vytvořit nanejvýš volnou konfederaci či samostatný stát.',
        historicalNote: 'SNS byla jedinou formací, která otevřeně hlásala samostatnost, což se stalo realitou o dva a půl roku později v lednu 1993.',
        partyStances: { of: -1, vpn: -1, kscs: -1, kdu: -1, hsd_sms: -1, sns: 1, css: -1, sz: -1 }
      },
      {
        id: 9,
        category: 'Moravská samospráva',
        statement: 'V rámci nového uspořádání musí být obnoveno historické zemské zřízení Moravy a Slezska s vlastním zemským parlamentem a rozpočtem.',
        historicalNote: 'Hnutí HSD-SMS Boleslava Bárty požadovalo trojfederaci (Čechy, Morava-Slezsko, Slovensko) a odmítalo centralistickou moc Prahy.',
        partyStances: { of: -1, vpn: 0, kscs: 0, kdu: 0, hsd_sms: 1, sns: 0, css: 1, sz: 0 }
      },
      {
        id: 10,
        category: 'Vstup do NATO a na Západ',
        statement: 'Československo by mělo co nejrychleji usilovat o plné členství v Severoatlantické alianci (NATO) a Evropském společenství.',
        historicalNote: 'V roce 1990 ještě existovala Varšavská smlouva. Myšlenka vstupu do NATO teprve zrála, Dienstbier zpočátku navrhoval rozpuštění obou bloků.',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: 1, hsd_sms: 0, sns: 0, css: 0, sz: 0 }
      },
      {
        id: 11,
        category: 'Vojenská neutralita',
        statement: 'Československo by mělo vyhlásit trvalou vojenskou neutralitu po vzoru Rakouska a Švýcarska a nevstupovat do žádných aliancí.',
        historicalNote: 'Komunisté a část levice prosazovali neutralitu jako alternativu k integraci do západních vojenských struktur.',
        partyStances: { of: -1, vpn: -1, kscs: 1, kdu: -1, hsd_sms: 0, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 12,
        category: 'Odchod sovětských vojsk',
        statement: 'Odchod všech sovětských okupačních vojsk z našeho území musí proběhnout okamžitě, bezpodmínečně a do posledního vojáka.',
        historicalNote: 'Vyjednání bleskového odchodu 73 500 sovětských vojáků pod vedením Michaela Kocába a Jiřího Dienstbiera bylo klíčovým úspěchem roku 1990/91.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 1, sns: 1, css: 1, sz: 1 }
      },
      {
        id: 13,
        category: 'Ekologie a životní prostředí',
        statement: 'Záchrana zdevastované přírody a ovzduší (zejména v Severních Čechách) musí mít v rozpočtu absolutní přednost i před tempem růstu ekonomiky.',
        historicalNote: 'Ekologické demonstrace v Teplicích předcházely 17. listopadu. Všichni uznávali katastrofální stav lesů a smog, ale lišily se priority financování.',
        partyStances: { of: 1, vpn: 1, kscs: 0, kdu: 1, hsd_sms: 1, sns: 0, css: 1, sz: 1 }
      },
      {
        id: 14,
        category: 'Křesťanské a rodinné hodnoty',
        statement: 'Zákony nové republiky se musí opírat o křesťanskou etiku a stát by měl omezit potraty a finančně podporovat tradiční vícedětné rodiny.',
        historicalNote: 'Lidovci a KDH kladli morální obrodu společnosti na první místo a varovali před konzumním a morálním úpadkem ze Západu.',
        partyStances: { of: 0, vpn: 0, kscs: -1, kdu: 1, hsd_sms: 0, sns: 1, css: 0, sz: 0 }
      },
      {
        id: 15,
        category: 'Charakter politiky (OF vs. strany)',
        statement: 'Politiku by neměly ovládat tradiční stranické aparáty; široká občanská hnutí jsou pro novou společnost vhodnější než klasické ideologické strany.',
        historicalNote: 'Konflikt mezi Havlovou vizí „nepolitické politiky“ v rámci OF a Klausovým budováním standardní pravicové strany (budoucí ODS).',
        partyStances: { of: 1, vpn: 1, kscs: -1, kdu: -1, hsd_sms: 1, sns: -1, css: -1, sz: 0 }
      }
    ],
    electionSystem: {
      body: 'Volilo se do dvou komor Federálního shromáždění ČSFR: Sněmovny lidu (150 poslanců) a Sněmovny národů (150 poslanců). Občan zároveň volil i do republikových parlamentů – České národní rady (200 poslanců) nebo Slovenské národní rady (150 poslanců).',
      system: 'Poměrný systém ve 12 vícemandátových krajích. Poprvé byla zavedena uzavírací klauzule 5 % pro vstup do FS a ČNR (pro SNR platila mírnější hranice 3 %). Pro přepočet hlasů se použila Hagenbach-Bischoffova kvóta. Voliči měli poprvé k dispozici preferenční hlasy (kroužkování až 4 kandidátů).',
      franchise: 'Všichni občané bez rozdílu národnosti, kteří v den voleb dosáhli věku 18 let. Volební účast již nebyla povinná.',
      eligibility: 'Každý občan s aktivním volebním právem od 21 let.',
      trivia: [
        'Zkrácené volební období: Parlament byl zvolen pouze na přechodné 2leté období (1990–1992), jehož cílem bylo vytvořit novou demokratickou ústavu a nastartovat ekonomické reformy.',
        'Obrovská účast: K urnám dorazilo 96,8 % voličů, což je absolutní rekord ve svobodných volbách v našich moderních dějinách. Lidé stáli v dlouhých frontách a volby fungovaly jako plebiscit o svobodě.',
        'Aféra Bartončík: Těsně před volbami v době volebního moratoria obvinil náměstek ministra vnitra Jan Ruml předsedu lidovců Josefa Bartončíka z tajné spolupráce s StB, což pravděpodobně výrazně poškodilo výsledek KDU.',
        'Síla kroužkování: Voliči hned v prvních volbách masivně využívali preferenční hlasy, díky čemuž tzv. „přeskákalo“ z nižších míst na volitelná křesla mnoho známých disidentů a nezávislých osobností.'
      ]
    }
  }
};
