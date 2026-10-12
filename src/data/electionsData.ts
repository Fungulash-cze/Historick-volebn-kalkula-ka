import { ElectionMeta } from '../types.ts';

export const ELECTIONS_DATA: Record<1920 | 1946 | 1990, ElectionMeta> = {
  1920: {
    year: 1920,
    title: 'Volby do Poslanecké sněmovny 1920',
    subtitle: 'První parlamentní volby v nově zrozené Československé republice',
    date: '18. a 25. dubna 1920',
    turnout: '89,6 %',
    stakes: 'Rozhodovalo se o samotném charakteru mladého státu: zvítězí socialistická vize nového řádu, agrárně-venkovský konzervatismus, nebo liberálně-kapitálový národní stát?',
    atmosphereQuote: '„Pryč od Vídně, pryč od Říma! Republika musí být sociálně spravedlivá a svobodná!“ – dobové heslo',
    historicalContext: `V dubnu 1920 se konaly vůbec první parlamentní volby samostatného Československa podle nové demokratické Ústavy z února 1920. Po rozpadu habsburské monarchie a kruté světové válce čelila republika obrovským výzvám: hyperinflaci, nedostatku potravin a uhlí, radikalizaci dělnictva ovlivněného bolševickou revolucí v Rusku a napětí s početnou německou a maďarskou menšinou, které se ocitly v novém státě nedobrovolně.

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
        programHighlight: 'Socializace velkých podniků, 8hodinový pracovní den, sociální pojištění a odluka církve od státu.'
      },
      {
        id: 'rszml',
        shortName: 'RSZML (Agrárníci)',
        fullName: 'Republikánská strana československého venkova',
        ideology: 'Agrarismus, venkovský konzervatismus, ochranářství',
        leaders: ['Antonín Švehla', 'František Udržal', 'Karel Prášek'],
        color: '#16a34a',
        historicalPercentage: 9.7,
        historicalSeats: 28,
        description: 'Vlivná strana sedláků a venkovského obyvatelstva. Klíčový pilíř stability první republiky, obhájce soukromého zemědělského vlastnictví.',
        programHighlight: 'Půda do rukou rolníků, agrární cla proti levnému dovozu, zachování křesťanských tradic a řádu.'
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
        programHighlight: 'Obrana katolické církve proti sekularismu, podpora církevního školství a rodinná politika.'
      },
      {
        id: 'csns',
        shortName: 'ČSNS (Národní soc.)',
        fullName: 'Československá strana socialistická',
        ideology: 'Národní socialismus, vlastenectví, reformismus',
        leaders: ['Václav Klofáč', 'Jiří Stříbrný', 'Emil Franke'],
        color: '#f97316',
        historicalPercentage: 8.1,
        historicalSeats: 24,
        description: 'Neklasová socialistická strana orientovaná na úředníky, řemeslníky a inteligenci. Silně vlastenecká a protirakouská.',
        programHighlight: 'Socializace bez marxistického dogmatismu, jednotný národní stát a radikální protikatolický postoj.'
      },
      {
        id: 'csnd',
        shortName: 'ČsND (Národní dem.)',
        fullName: 'Československá národní demokracie',
        ideology: 'Národní liberalismus, konzervatismus, velkokapitál',
        leaders: ['Karel Kramář', 'Alois Rašín', 'Viktor Dyk'],
        color: '#2563eb',
        historicalPercentage: 6.3,
        historicalSeats: 19,
        description: 'Reprezentantka velkoprůmyslu, bank a národovecké inteligence. Hájila tvrdou měnu (Rašínova deflace) a ostrý odpor k bolševismu.',
        programHighlight: 'Silná a stabilní měna, ochrana soukromého vlastnictví, nostrifikace podniků a spojenectví s Francií.'
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
        programHighlight: 'Socialismus, národnostní rovnoprávnost pro Němce, odmítnutí čechoslovakismu a podpora autonomie.'
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
        programHighlight: 'Obrana německého venkova, odmítání konfiskace půdy bez spravedlivé náhrady, dovozní cla.'
      },
      {
        id: 'sls',
        shortName: 'SĽS (Hlinkovci)',
        fullName: 'Slovenská ľudová strana',
        ideology: 'Slovenský autonomismus, křesťanský konzervatismus',
        leaders: ['Andrej Hlinka', 'Ferdiš Juriga', 'Florián Tománek'],
        color: '#854d0e',
        historicalPercentage: 6.8,
        historicalSeats: 12,
        description: 'V roce 1920 kandidovala ve volebním svazku s ČSL. Požadovala naplnění Pittsburské dohody, svébytnost slovenského národa a obranu víry.',
        programHighlight: 'Zákonodárná autonomie Slovenska, obrana katolické církve proti pražskému laicismu a čechoslovakismu.'
      }
    ],
    questions: [
      {
        id: 1,
        category: 'Hospodářství a půda',
        statement: 'Veškerá zemědělská půda velkostatků nad 150 hektarů orné půdy (nebo 250 ha celkem) musí být zabavena a přidělena bezzemkům a drobným rolníkům.',
        historicalNote: 'Záborový zákon z dubna 1919 byl jedním z nejradikálnějších v Evropě. Postihl hlavně cizí (rakouskou a německou) šlechtu a církev.',
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
        statement: 'Zákonná osmihodinová pracovní doba a povinné nemocenské pojištění pro všechny dělníky musí být nekompromisně vymáhány státem bez výjimek.',
        historicalNote: 'ČSR zavedla 8hodinový pracovní den již v prosinci 1918 jako jedna z prvních zemí na světě, což průmyslníci kritizovali kvůli poklesu zisků.',
        partyStances: { cssd: 1, rszml: 0, csl: 1, csns: 1, csnd: 0, dsap: 1, bdl: 0, sls: 1 }
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
        statement: 'Všechny akciové společnosti působící na území ČSR musí mít ústředí v republice a jejich vedení musí být v československých rukou (nostrifikace).',
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
        statement: 'Československo by mělo diplomaticky uznat Sovětské Rusko a dělnictvo by se mělo solidarizovat s revolučním proletariátem.',
        historicalNote: 'Otázka podpory bolševického Ruska v polsko-sovětské válce roku 1920 rozštěpila levici a vedla ke vzniku komunistické frakce.',
        partyStances: { cssd: 0, rszml: -1, csl: -1, csns: -1, csnd: -1, dsap: 1, bdl: -1, sls: -1 }
      },
      {
        id: 14,
        category: 'Zásluhy o stát',
        statement: 'Českoslovenští legionáři mají mít zákonem garantované přednostní právo na státní úřady, trafické licence a příděl zabrané půdy.',
        historicalNote: 'Legionářská tradice byla posvátným mýtem První republiky, pravice a nacionálové ji stavěli nad loajalitu menšin.',
        partyStances: { cssd: 1, rszml: 1, csl: 0, csns: 1, csnd: 1, dsap: -1, bdl: -1, sls: -1 }
      },
      {
        id: 15,
        category: 'Volební právo a rovnost',
        statement: 'Zavedení všeobecného volebního práva pro ženy bez jakéhokoli majetkového či vzdělanostního censu je nezvratným úspěchem demokracie.',
        historicalNote: 'Československá ústava 1920 zaručila rovná politická práva ženám, což podporovala většina demokratického spektra.',
        partyStances: { cssd: 1, rszml: 1, csl: 1, csns: 1, csnd: 1, dsap: 1, bdl: 1, sls: 1 }
      }
    ]
  },
  1946: {
    year: 1946,
    title: 'Volby do Ústavodárného shromáždění 1946',
    subtitle: 'Poslední částečně svobodné volby před čtyřiceti lety komunistické totality',
    date: '26. května 1946',
    turnout: '94,0 %',
    stakes: 'Rozhodovalo se o geopolitickém a mocenském směřování země: zůstane Československo pluralitní demokracií a mostem na Západ, nebo se stane vazalem Sovětského svazu?',
    atmosphereQuote: '„Se Sovětským svazem na věčné časy a nikdy jinak!“ vs. „Za svobodu a křesťanskou kulturu!“',
    historicalContext: `Volby v květnu 1946 probíhaly v jedinečné a vypjaté atmosféře těsně po skončení druhé světové války. V zemi panovala vděčnost Sovětskému svazu za osvobození od nacistické okupace a zároveň rozhořčení ze zrady západních mocností v Mnichově 1938. 

Politická scéna byla zásadně omezena systémem tzv. Národní fronty: předválečné pravicové strany (především agrárníci a národní sjednocení) byly zakázány pod záminkou kolaborace. Probíhal masový odsun téměř 3 milionů Němců, konfiskace jejich majetku a osidlování pohraničí. Klíčový těžký průmysl, doly a banky byly již od října 1945 znárodněny Benešovými dekrety. Komunisté (KSČ) pod vedením Klementa Gottwalda vystupovali v roli vlastenců hájících drobné živnostníky a sedláky, zatímco demokratické strany (ČSNS, ČSL a slovenská Demokratická strana) se snažily bránit zbytek občanských svobod a parlamentní pluralitu.`,
    outcomeSummary: `KSČ v českých zemích drtivě zvítězila se ziskem 40,17 % hlasů (celostátně 31,05 %). Na Slovensku však došlo k politickému zemětřesení: nekomunistická Demokratická strana (DS) získala 62 % hlasů a porazila slovenské komunisty. 

Klement Gottwald se stal předsedou koaliční vlády Národní fronty. Komunisté obsadili klíčová ministerstva vnitra (SNB), informací, zemědělství a financí. Vítězství demokratů na Slovensku komunisté neutralizovali tzv. Třetí pražskou dohodou, která omezila pravomoci slovenských orgánů. Výsledek voleb 1946 otevřel komunistům přímou cestu k ovládnutí bezpečnostního aparátu a k definitivnímu uchvácení moci během komunistického převratu v únoru 1948.`,
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
        programHighlight: 'Pevné spojenectví se SSSR, dvouletý plán obnovy, příděl půdy v pohraničí rolníkům a monopol Národní fronty.'
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
        programHighlight: 'Zastavení dalšího znárodňování, právní stát, ochrana živností a rovnováha mezi Východem a Západem.'
      },
      {
        id: 'csl',
        shortName: 'ČSL',
        fullName: 'Československá strana lidová',
        ideology: 'Křesťanská demokracie, křesťanský socialismus',
        leaders: ['Jan Šrámek', 'František Hála', 'Adolf Procházka'],
        color: '#eab308',
        historicalPercentage: 15.64,
        historicalSeats: 46,
        description: 'Křesťansky orientovaná strana opírající se o moravský venkov a katolické věřící. Hájila svobodu náboženství a církevní školství.',
        programHighlight: 'Obrana křesťanských rodinných hodnot, ochrana soukromého vlastnictví a svobodné volby bez diktátu.'
      },
      {
        id: 'ds',
        shortName: 'Demokratická strana (DS)',
        fullName: 'Demokratická strana (na Slovensku)',
        ideology: 'Občanská demokracie, křesťanství, slovenská samospráva',
        leaders: ['Jozef Lettrich', 'Ján Ursíny', 'Matej Josko'],
        color: '#2563eb',
        historicalPercentage: 14.07,
        historicalSeats: 43,
        description: 'Slovenský fenomén voleb 1946 (na Slovensku 62 %!). Sjednotila evangelíky i katolíky proti nástupu komunistické diktatury.',
        programHighlight: 'Slovenská národní samospráva, obnova tržních principů, svoboda vyznání a hráz proti bolševismu.'
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
        programHighlight: 'Hospodářské plánování, sociální jistoty pracujících, zachování parlamentních procedur.'
      },
      {
        id: 'kss',
        shortName: 'KSS (na Slovensku)',
        fullName: 'Komunistická strana Slovenska',
        ideology: 'Marxismus-leninismus, revoluční socialismus',
        leaders: ['Viliam Široký', 'Gustáv Husák', 'Karol Šmidke'],
        color: '#991b1b',
        historicalPercentage: 6.89,
        historicalSeats: 21,
        description: 'Slovenská organizace KSČ. Na Slovensku utrpěla porážku od Demokratické strany, následně s pomocí pražských komunistů usilovala o likvidaci DS.',
        programHighlight: 'Socializace, centralizace moci v rukou komunistů a potlačení vlivu církve na Slovensku.'
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
        category: 'Odsun menšin',
        statement: 'Odsun německého a maďarského obyvatelstva je morální a historickou nutností pro bezpečnost republiky a jejich majetek má patřit našemu lidu.',
        historicalNote: 'Na odsunu Němců na základě Postupimské dohody a Benešových dekretů panovala v roce 1946 naprostá shoda všech poválečných stran.',
        partyStances: { ksc: 1, csns: 1, csl: 1, ds: 1, cssd: 1, kss: 1 }
      },
      {
        id: 4,
        category: 'Hranice znárodnění',
        statement: 'Znárodnění velkého průmyslu a bank dekrety z října 1945 bylo správné, ale rozsah byl vyčerpán; soukromé řemeslo, maloobchod a střední firmy musí zůstat nedotčeny.',
        historicalNote: 'Gottwald v kampani 1946 veřejně sliboval, že živnostníkům nikdo jejich dílny nevezme, což po únoru 1948 okamžitě porušil.',
        partyStances: { ksc: 0, csns: 1, csl: 1, ds: 1, cssd: 0, kss: 0 }
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
        category: 'Půda a pohraničí',
        statement: 'Zkonfiskovaná půda v pohraničí má být natrvalo zapsána do soukromého vlastnictví rolníků a kolchozy v naší zemi nesmí nikdy vzniknout.',
        historicalNote: 'Komunistický ministr zemědělství Julius Ďuriš rozdával dekrety na půdu se sloganem „Půda patří tomu, kdo na ní pracuje!“.',
        partyStances: { ksc: 1, csns: 1, csl: 1, ds: 1, cssd: 1, kss: 1 }
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
    ]
  },
  1990: {
    year: 1990,
    title: 'Volby do Federálního shromáždění 1990',
    subtitle: 'První svobodné a demokratické volby po 44 letech nadvlády jedné strany',
    date: '8. a 9. června 1990',
    turnout: '96,8 %',
    stakes: 'Rozhodovalo se o definitivním potvrzení pádu totality, tempu a charakteru ekonomické transformace a o budoucím soužití Čechů a Slováků ve společném státě.',
    atmosphereQuote: '„Strany jsou pro straníky, Občanské fórum je pro všechny!“ – volební heslo OF',
    historicalContext: `V červnu 1990 zažilo Československo první skutečně svobodné volby od roku 1946. V euforické atmosféře po Sametové revoluci (listopad 1989), zrušení článku 4 Ústavy o vedoucí úloze KSČ a zvolení Václava Havla prezidentem se k volebním urnám dostavilo neuvěřitelných 96,8 % oprávněných voličů.

Volby fungovaly především jako plebiscit o odmítnutí čtyřicetileté komunistické totality. Za širokým deštníkem revolučních hnutí (Občanské fórum v Česku, Verejnosť proti násiliu na Slovensku) se však již rýsovaly klíčové střety: Jak rychle přejít na tržní ekonomiku? Má se zvolit radikální cesta (Václav Klaus) nebo opatrnější sociální varianta (Valtr Komárek)? Jak se vypořádat s exponenty totality a tajnou policií StB (lustrace)? A jak uspořádat vztahy mezi Čechy a Slováky po vypjaté „pomlčkové válce“?`,
    outcomeSummary: `Občanské fórum (OF) v Česku získalo drtivých 53,15 % hlasů do Sněmovny lidu FS (celostátně 36,05 %), zatímco na Slovensku zvítězila Verejnosť proti násiliu (VPN) s 32,54 %. Komunistická strana (KSČS) skončila s 13,6 % druhá, což potvrdilo přítomnost nezanedbatelného postkomunistického elektorátu. Výrazného úspěchu dosáhlo na Moravě moravistické Hnutí za samosprávnou demokracii (HSD-SMS) s téměř 8 % hlasů v ČR.

Byla vytvořena koaliční federální vláda v čele s Marianem Čalfou (OF/VPN). Volby roku 1990 potvrdily návrat Československa k demokracii, ale mandát na dva roky předznamenal dramatické události: rozpad revolučních hnutí, spor o kuponovou privatizaci a následný rozpad společného státu v roce 1992.`,
    parties: [
      {
        id: 'of',
        shortName: 'Občanské fórum (OF)',
        fullName: 'Občanské fórum',
        ideology: 'Široké antiautoritářské hnutí, liberální demokracie, tržní reformy',
        leaders: ['Václav Klaus', 'Jiří Dienstbier', 'Jan Urban', 'Petr Pithart'],
        color: '#2563eb',
        historicalPercentage: 36.05,
        historicalSeats: 68,
        description: 'Vítěz voleb v ČR. Hnutí zrozené v Sametové revoluci, které sjednotilo disidenty, ekonomy i širokou veřejnost k demontáži komunismu.',
        programHighlight: 'Návrat do Evropy, právní stát, rychlá privatizace a tržní ekonomika, svoboda jednotlivce.'
      },
      {
        id: 'vpn',
        shortName: 'Verejnosť proti násiliu (VPN)',
        fullName: 'Verejnosť proti násiliu',
        ideology: 'Občanské demokratické hnutí, humanismus, reformismus',
        leaders: ['Fedor Gál', 'Vladimír Mečiar', 'Marián Čalfa', 'Milan Kňažko'],
        color: '#0284c7',
        historicalPercentage: 8.56,
        historicalSeats: 19,
        description: 'Slovenský protějšek OF, vítěz voleb na Slovensku. Bojovala za demokracii, ale s větším citem pro specifické sociální a národní potřeby Slovenska.',
        programHighlight: 'Demokratizace společnosti, federalismus s respektem k slovenské svébytnosti a sociálně citlivá transformace.'
      },
      {
        id: 'kscs',
        shortName: 'KSČS',
        fullName: 'Komunistická strana Československa',
        ideology: 'Demokratický socialismus, postkomunismus',
        leaders: ['Ladislav Adamec', 'Vasil Mohorita', 'Jiří Svoboda'],
        color: '#dc2626',
        historicalPercentage: 13.59,
        historicalSeats: 23,
        description: 'Bývalá státostrana po ztrátě mocenského monopolu. Hájila sociální jistoty, sociální stát a varovala před masovou nezaměstnaností a výprodejem majetku.',
        programHighlight: 'Zachování sociálních jistot, odpor k divoké privatizaci a plošným lustracím, vojenská neutralita.'
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
        programHighlight: 'Restituce církevního a soukromého majetku, ochrana rodiny, křesťanská morálka a sociálně-tržní řád.'
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
        programHighlight: 'Obnova moravskoslezské samosprávy, trojfederace (Čechy, Morava a Slezsko, Slovensko) a zemský sněm.'
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
        programHighlight: 'Plná státní suverenita Slovenska, slovenština jako jediný úřední jazyk a samostatné vystupování v zahraničí.'
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
        programHighlight: 'Postupná sociálně-tržní transformace, posílení národní hrdosti a ochrana zaměstnanců.'
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
        programHighlight: 'Okamžité zastavení těžby uhlí v severních Čechách, ochrana ovzduší a pitné vody jako vládní priorita.'
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
    ]
  }
};
