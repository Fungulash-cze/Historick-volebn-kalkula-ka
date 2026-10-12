import './index.css';
import confetti from 'canvas-confetti';
import { ELECTIONS_DATA } from './data/electionsData.ts';
import { calculatePartyScores } from './calculator.ts';
import { ElectionYear, UserAnswerValue, PartyScore, Party } from './types.ts';

interface AppState {
  view: 'home' | 'quiz' | 'results';
  year: ElectionYear;
  questionIndex: number;
  answers: Record<number, UserAnswerValue>;
  partyScores: PartyScore[];
  showHistoricalNote: boolean;
  toastMessage: string | null;
  comparisonFilter: 'all' | 'agree' | 'disagree';
  selectedPartyForDetails: string | null;
  expandedPartiesYear: ElectionYear | null;
  sliderYearFilter: 'all' | ElectionYear;
  activeModalParty: { party: Party; year: ElectionYear } | null;
}

const state: AppState = {
  view: 'home',
  year: 1920,
  questionIndex: 0,
  answers: {},
  partyScores: [],
  showHistoricalNote: false,
  toastMessage: null,
  comparisonFilter: 'all',
  selectedPartyForDetails: null,
  expandedPartiesYear: null,
  sliderYearFilter: 'all',
  activeModalParty: null
};

function showToast(msg: string) {
  state.toastMessage = msg;
  renderApp();
  setTimeout(() => {
    state.toastMessage = null;
    renderApp();
  }, 3000);
}

function setView(view: AppState['view']) {
  state.view = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function startQuiz(year: ElectionYear) {
  state.year = year;
  state.questionIndex = 0;
  state.answers = {};
  state.partyScores = [];
  state.showHistoricalNote = false;
  state.view = 'quiz';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function handleAnswer(val: UserAnswerValue) {
  const currentElection = ELECTIONS_DATA[state.year];
  const currentQuestion = currentElection.questions[state.questionIndex];
  state.answers[currentQuestion.id] = val;

  if (state.questionIndex < currentElection.questions.length - 1) {
    state.questionIndex++;
    state.showHistoricalNote = false;
    renderApp();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const currentElection = ELECTIONS_DATA[state.year];
  const scores = calculatePartyScores(currentElection, state.answers);
  state.partyScores = scores;
  state.selectedPartyForDetails = scores[0]?.party.id || null;
  state.view = 'results';

  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  } catch (e) {
    console.error(e);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function openPartyModal(partyId: string, year: ElectionYear) {
  const election = ELECTIONS_DATA[year];
  const party = election.parties.find(p => p.id === partyId);
  if (party) {
    state.activeModalParty = { party, year };
    renderApp();
  }
}

function closePartyModal() {
  state.activeModalParty = null;
  renderApp();
}

function scrollPartySlider(direction: 'left' | 'right') {
  const container = document.getElementById('party-slider-scroll');
  if (container) {
    const scrollAmount = direction === 'left' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// -------------------------------------------------------------
// RENDERERS (Bílošedý Moderní Minimalistický Design)
// -------------------------------------------------------------

function renderHeader(): string {
  return `
    <header class="bg-white border-b border-zinc-200 sticky top-0 z-30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        <!-- Logo / Brand s HVK -->
        <button onclick="window.calcSetView('home')" class="flex items-center gap-3 text-left group cursor-pointer">
          <div class="w-9 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-extrabold text-xs tracking-wider shadow-xs border border-zinc-800 transition-colors group-hover:bg-zinc-800">
            HVK
          </div>
          <div>
            <span class="font-bold text-sm text-zinc-900 block leading-tight">
              Historická volební kalkulačka
            </span>
            <span class="text-[11px] text-zinc-500 font-medium block">
              1920 · 1946 · 1990
            </span>
          </div>
        </button>

        <!-- Navigace v bílošedém stylu -->
        <nav class="flex items-center gap-2.5 text-xs font-medium">
          <button 
            onclick="window.calcSetView('home')" 
            class="px-3 py-1.5 rounded-md transition-colors cursor-pointer ${state.view === 'home' ? 'bg-zinc-100 text-zinc-900 font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
          >
            Výběr voleb
          </button>
          ${state.view === 'quiz' || state.view === 'results' ? `
            <span class="text-zinc-300">/</span>
            <span class="text-zinc-800 font-semibold px-2 py-0.5 bg-zinc-100 rounded text-[11px] border border-zinc-200">
              Volby ${state.year}
            </span>
          ` : ''}
        </nav>
      </div>
    </header>
  `;
}

function renderHomeView(): string {
  const years: ElectionYear[] = [1920, 1946, 1990];

  return `
    <main class="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Minimalistický Editorial Úvod -->
      <section class="max-w-2xl mb-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight mb-3">
          Která historická strana odpovídá vašim názorům?
        </h1>
        <p class="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
          Vyberte si jeden ze tří klíčových parlamentních volebních roků. Zodpovězte 15 otázek vycházejících z autentických dobových programů a porovnejte své postoje se všemi tehdejšími kandidujícími stranami.
        </p>
      </section>

      <!-- 3 Karty Volebních Období (Bílošedý design) -->
      <section class="space-y-4 mb-14">
        ${years.map((y) => {
          const meta = ELECTIONS_DATA[y];
          const isExpanded = state.expandedPartiesYear === y;

          return `
            <div class="election-card p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <!-- Levý obsah -->
              <div class="flex-1">
                <!-- Rok & Meta řádek -->
                <div class="flex items-center gap-2.5 mb-2">
                  <span class="text-2xl font-extrabold text-zinc-900 font-mono tracking-tight">
                    ${meta.year}
                  </span>
                  <span class="text-zinc-300">·</span>
                  <span class="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                    ${meta.date}
                  </span>
                  <span class="text-zinc-300">·</span>
                  <span class="text-xs text-zinc-500 font-medium">
                    Účast ${meta.turnout}
                  </span>
                </div>

                <!-- Název a podstata voleb -->
                <h2 class="text-lg font-bold text-zinc-900 mb-1.5">
                  ${meta.title}
                </h2>
                
                <p class="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-3">
                  ${meta.stakes}
                </p>

                <!-- Přehled stran -->
                <div class="text-xs text-zinc-500">
                  <span>Kandidující subjekty (${meta.parties.length}): </span>
                  <span class="text-zinc-700 font-medium">
                    ${meta.parties.map(p => p.shortName).slice(0, 4).join(', ')}${meta.parties.length > 4 ? ` a další ${meta.parties.length - 4}` : ''}
                  </span>
                  <button 
                    onclick="window.calcToggleParties(${y})"
                    class="text-zinc-700 hover:text-zinc-900 underline ml-1 text-xs font-medium cursor-pointer"
                  >
                    ${isExpanded ? 'skrýt přehled' : 'zobrazit všechny'}
                  </button>
                </div>

                ${isExpanded ? `
                  <div class="mt-3 p-3 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-700 animate-fadeIn">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${meta.parties.map(p => `
                        <div 
                          onclick="window.calcOpenPartyModal('${p.id}', ${y})" 
                          class="flex items-center gap-2.5 p-1.5 rounded hover:bg-zinc-100 transition-colors cursor-pointer group"
                        >
                          <div class="w-1.5 h-5 rounded-full shrink-0" style="background-color: ${p.color};"></div>
                          <strong class="text-zinc-900 font-semibold group-hover:underline">${p.shortName}:</strong>
                          <span class="text-zinc-500 truncate">${p.fullName}</span>
                          <span class="text-[10px] text-zinc-400 ml-auto group-hover:text-zinc-700">info ↗</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Tlačítko akce -->
              <div class="shrink-0 pt-2 md:pt-0">
                <button 
                  onclick="window.calcStartQuiz(${y})"
                  class="w-full md:w-auto px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-zinc-800"
                >
                  <span>Spustit kalkulačku</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          `;
        }).join('')}
      </section>

      <!-- Vzdělávací pozadí projektu -->
      <section class="border-t border-zinc-200 pt-8">
        <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
          O projektu a historických datech
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-600 leading-relaxed">
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">15 dobových otázek pro každý rok</strong>
            Otázky pokrývají klíčová hospodářská, společenská, zahraničněpolitická i státoprávní témata, která tehdy určovala ráz volebních kampaní.
          </div>
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Historicky doložené postoje stran</strong>
            Všechny odpovědi politických subjektů vycházejí ze skutečných volebních manifestů, tiskovin, programů a parlamentních hlasování.
          </div>
          <div>
            <strong class="text-zinc-900 block mb-1 font-semibold">Skutečné volební výsledky</strong>
            Po dokončení kalkulačky získáte nejen procentuální shodu, ale také přehled o tom, jak volby reálně dopadly a jaké měly důsledky.
          </div>
        </div>
      </section>
    </main>
  `;
}

function renderQuizView(): string {
  const currentElection = ELECTIONS_DATA[state.year];
  const totalQuestions = currentElection.questions.length;
  const q = currentElection.questions[state.questionIndex];
  const progressPercent = Math.round(((state.questionIndex + 1) / totalQuestions) * 100);
  const currentAnswer = state.answers[q.id];

  return `
    <main class="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 animate-fadeIn">
      
      <!-- Progress Bar & Krok otázky -->
      <div class="mb-6">
        <div class="flex items-center justify-between text-xs mb-2">
          <button 
            onclick="window.calcSetView('home')" 
            class="text-zinc-500 hover:text-zinc-900 transition-colors font-medium flex items-center gap-1 cursor-pointer"
          >
            <span>←</span>
            <span>Výběr roku</span>
          </button>
          
          <div class="flex items-center gap-2">
            <span class="font-bold text-zinc-900">Volby ${state.year}</span>
            <span class="text-zinc-300">·</span>
            <span class="text-zinc-600 font-medium">
              Otázka ${state.questionIndex + 1} z ${totalQuestions}
            </span>
          </div>
        </div>

        <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
          <div 
            class="bg-zinc-900 h-full transition-all duration-300 ease-out" 
            style="width: ${progressPercent}%;"
          ></div>
        </div>
      </div>

      <!-- Hlavní dotazníková karta v bílošedém stylu -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8 shadow-xs mb-6">
        
        <!-- Kategorie -->
        <div class="mb-3">
          <span class="text-[11px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200">
            ${q.category}
          </span>
        </div>

        <!-- Tvrzení -->
        <h2 class="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-snug mb-6">
          ${q.statement}
        </h2>

        <!-- Dobový kontext -->
        <div class="mb-8 pt-3 border-t border-zinc-100">
          <button 
            id="btn-toggle-note"
            class="text-xs text-zinc-500 hover:text-zinc-900 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span class="text-[10px] transform ${state.showHistoricalNote ? 'rotate-90' : ''} transition-transform">▶</span>
            <span>Dobový kontext a vysvětlení otázky</span>
          </button>

          ${state.showHistoricalNote ? `
            <div class="mt-3 p-3.5 bg-zinc-50 border border-zinc-200 rounded-lg text-xs text-zinc-700 leading-relaxed animate-fadeIn">
              <strong>Historické pozadí:</strong> ${q.historicalNote}
            </div>
          ` : ''}
        </div>

        <!-- 3 Volební tlačítka (Ano / Nevím / Ne) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <!-- Souhlasím (+1) -->
          <button 
            onclick="window.calcHandleAnswer(1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === 1 ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm' : 'bg-white hover:bg-emerald-50 text-zinc-900 border-zinc-300 hover:border-emerald-600'}"
          >
            <span class="text-base text-emerald-600 ${currentAnswer === 1 ? 'text-white' : ''}">✔</span>
            <span>Ano / Souhlasím</span>
          </button>

          <!-- Nevím / Neutrální (0) -->
          <button 
            onclick="window.calcHandleAnswer(0)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === 0 ? 'bg-zinc-800 text-white border-zinc-800 shadow-sm' : 'bg-white hover:bg-zinc-100 text-zinc-700 border-zinc-300 hover:border-zinc-400'}"
          >
            <span class="text-base text-zinc-400 ${currentAnswer === 0 ? 'text-white' : ''}">—</span>
            <span>Nevím / Neutrální</span>
          </button>

          <!-- Nesouhlasím (-1) -->
          <button 
            onclick="window.calcHandleAnswer(-1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === -1 ? 'bg-rose-700 text-white border-rose-700 shadow-sm' : 'bg-white hover:bg-rose-50 text-zinc-900 border-zinc-300 hover:border-rose-600'}"
          >
            <span class="text-base text-rose-600 ${currentAnswer === -1 ? 'text-white' : ''}">✖</span>
            <span>Ne / Nesouhlasím</span>
          </button>

        </div>

      </div>

      <!-- Spodní ovládací prvky -->
      <div class="flex items-center justify-between text-xs text-zinc-500 px-1">
        <button 
          ${state.questionIndex > 0 ? `onclick="window.calcPrevQuestion()"` : 'disabled'}
          class="hover:text-zinc-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium flex items-center gap-1 cursor-pointer"
        >
          <span>←</span>
          <span>Předchozí otázka</span>
        </button>

        <!-- Číselný navigátor -->
        <div class="hidden sm:flex items-center gap-1">
          ${currentElection.questions.map((item, idx) => {
            const isAnswered = state.answers[item.id] !== undefined;
            const isCurrent = idx === state.questionIndex;
            return `
              <button 
                onclick="window.calcJumpQuestion(${idx})"
                class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono transition-colors cursor-pointer ${isCurrent ? 'bg-zinc-900 text-white font-bold' : isAnswered ? 'bg-zinc-200 text-zinc-800 font-medium' : 'text-zinc-400 hover:bg-zinc-100'}"
              >
                ${idx + 1}
              </button>
            `;
          }).join('')}
        </div>

        <button 
          onclick="window.calcHandleAnswer(0)"
          class="hover:text-zinc-900 transition-colors font-medium flex items-center gap-1 cursor-pointer"
        >
          <span>Přeskočit</span>
          <span>→</span>
        </button>
      </div>

    </main>
  `;
}

function renderResultsView(): string {
  const currentElection = ELECTIONS_DATA[state.year];
  const topMatch = state.partyScores[0];
  const selectedPartyId = state.selectedPartyForDetails || topMatch?.party.id;
  const selectedParty = currentElection.parties.find(p => p.id === selectedPartyId) || topMatch?.party;

  return `
    <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex-1 animate-fadeIn">
      
      <!-- Titulek výsledků -->
      <div class="mb-8">
        <div class="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
          <span>Výsledky kalkulačky</span>
          <span>·</span>
          <span>Volby ${state.year}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
          Vaše názorová shoda s kandidujícími stranami
        </h1>
      </div>

      <!-- Hlavní vítězná strana -->
      ${topMatch ? `
        <div class="bg-zinc-900 text-white rounded-xl p-6 sm:p-8 mb-8 shadow-sm border border-zinc-800">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="max-w-xl">
              <div class="flex items-center gap-3.5 mb-3">
                <div class="w-2 h-12 rounded-full shrink-0 shadow-xs" style="background-color: ${topMatch.party.color};"></div>
                <div>
                  <span class="text-xs uppercase tracking-wider font-semibold text-zinc-400 block">
                    Nejvyšší programová shoda
                  </span>
                  <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                    ${topMatch.party.fullName} (${topMatch.party.shortName})
                  </h2>
                </div>
              </div>

              <div class="text-xs text-zinc-400 mb-3 font-medium">
                ${topMatch.party.ideology} · Osobnosti: <strong class="text-zinc-200">${topMatch.party.leaders.join(', ')}</strong>
              </div>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
                ${topMatch.party.description}
              </p>
              <div class="p-3 rounded-lg bg-zinc-800 text-xs text-zinc-200 border border-zinc-700">
                <strong>Programové pilíře:</strong> ${topMatch.party.programHighlight}
              </div>
            </div>

            <div class="flex flex-col items-center justify-center p-5 rounded-xl bg-zinc-800 border border-zinc-700 min-w-[130px] shrink-0 self-center sm:self-auto text-center">
              <span class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                ${topMatch.matchPercentage}%
              </span>
              <span class="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-semibold">
                Shoda
              </span>
              <button 
                onclick="window.calcOpenPartyModal('${topMatch.party.id}', ${state.year})"
                class="mt-3 text-[11px] text-zinc-300 hover:text-white underline font-medium cursor-pointer"
              >
                Detail strany ↗
              </button>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Kompletní žebříček stran -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-zinc-900 mb-1">
          Celkové pořadí všech kandidujících stran
        </h3>
        <p class="text-xs text-zinc-500 mb-5">
          Klepnutím na libovolnou stranu zobrazíte podrobný rozbor konkrétních otázek.
        </p>

        <div class="space-y-3">
          ${state.partyScores.map((score, index) => {
            const isSelected = selectedParty?.id === score.party.id;
            return `
              <div 
                onclick="window.calcSelectPartyDetails('${score.party.id}')"
                class="p-3.5 rounded-lg border transition-all cursor-pointer ${isSelected ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300 bg-white'}"
              >
                <div class="flex items-center justify-between mb-2 text-xs">
                  <div class="flex items-center gap-3">
                    <span class="w-5 h-5 rounded bg-zinc-100 text-zinc-700 font-bold flex items-center justify-center text-[10px]">
                      ${index + 1}
                    </span>
                    <div class="w-1.5 h-6 rounded-full shrink-0" style="background-color: ${score.party.color};"></div>
                    <div>
                      <strong class="text-zinc-900 text-sm font-semibold">${score.party.shortName}</strong>
                      <span class="text-zinc-500 text-xs hidden sm:inline ml-1">– ${score.party.fullName}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      onclick="event.stopPropagation(); window.calcOpenPartyModal('${score.party.id}', ${state.year})"
                      class="text-[11px] text-zinc-400 hover:text-zinc-900 font-medium underline"
                    >
                      profil
                    </button>
                    <div class="font-mono font-bold text-sm text-zinc-900">
                      ${score.matchPercentage}%
                    </div>
                  </div>
                </div>

                <!-- Match bar -->
                <div class="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden mb-1.5">
                  <div 
                    class="h-full rounded-full transition-all duration-300" 
                    style="width: ${score.matchPercentage}%; background-color: ${score.party.color};"
                  ></div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Shoda: <strong>${score.agreeCount}</strong> · Rozpor: <strong>${score.disagreeCount}</strong></span>
                  <span>Skutečný výsledek ${state.year}: <strong class="text-zinc-800">${score.party.historicalPercentage}%</strong></span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Rozbor otázek -->
      ${selectedParty ? `
        <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100 mb-5">
            <div class="flex items-center gap-3">
              <div class="w-2 h-10 rounded-full shrink-0" style="background-color: ${selectedParty.color};"></div>
              <div>
                <span class="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block">Podrobný rozbor</span>
                <h3 class="text-base font-bold text-zinc-900">
                  Vaše odpovědi vs. ${selectedParty.fullName} (${selectedParty.shortName})
                </h3>
              </div>
            </div>

            <!-- Filtry shody / rozporu -->
            <div class="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetComparisonFilter('all')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'all' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Všechny (15)
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('agree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'agree' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Shoda
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('disagree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'disagree' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Rozpor
              </button>
            </div>
          </div>

          <div class="space-y-3">
            ${currentElection.questions
              .filter(q => {
                const userVal = state.answers[q.id] ?? 0;
                const partyVal = q.partyStances[selectedParty.id] ?? 0;
                if (state.comparisonFilter === 'agree') {
                  return userVal !== 0 && partyVal !== 0 && userVal === partyVal;
                }
                if (state.comparisonFilter === 'disagree') {
                  return userVal !== 0 && partyVal !== 0 && userVal !== partyVal;
                }
                return true;
              })
              .map(q => {
                const userVal = state.answers[q.id] ?? 0;
                const partyVal = q.partyStances[selectedParty.id] ?? 0;
                const isMatch = userVal !== 0 && partyVal !== 0 && userVal === partyVal;
                const isOpposite = userVal !== 0 && partyVal !== 0 && userVal !== partyVal;

                const labelUser = userVal === 1 ? 'Ano' : userVal === -1 ? 'Ne' : 'Nevím';
                const labelParty = partyVal === 1 ? 'Ano' : partyVal === -1 ? 'Ne' : 'Neutrální';

                return `
                  <div class="p-3.5 rounded-lg border text-xs ${isMatch ? 'border-emerald-200 bg-emerald-50/20' : isOpposite ? 'border-rose-200 bg-rose-50/20' : 'border-zinc-200 bg-white'}">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-zinc-500 font-semibold uppercase text-[10px]">${q.category}</span>
                      <span class="text-[11px] font-semibold px-2 py-0.5 rounded ${isMatch ? 'text-emerald-700 bg-emerald-100' : isOpposite ? 'text-rose-700 bg-rose-100' : 'text-zinc-600 bg-zinc-100'}">
                        ${isMatch ? '✔ Shoda' : isOpposite ? '✖ Rozpor' : '— Neutrální'}
                      </span>
                    </div>

                    <p class="font-medium text-zinc-900 mb-2 leading-relaxed">
                      ${q.statement}
                    </p>

                    <div class="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
                      <div>
                        <span class="text-zinc-500 block text-[10px]">Váš hlas:</span>
                        <strong class="${userVal === 1 ? 'text-emerald-700' : userVal === -1 ? 'text-rose-700' : 'text-zinc-700'} font-semibold">
                          ${labelUser}
                        </strong>
                      </div>
                      <div>
                        <span class="text-zinc-500 block text-[10px]">Postoj ${selectedParty.shortName}:</span>
                        <strong class="${partyVal === 1 ? 'text-emerald-700' : partyVal === -1 ? 'text-rose-700' : 'text-zinc-700'} font-semibold">
                          ${labelParty}
                        </strong>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Skutečné historické výsledky -->
      <div class="bg-white border border-zinc-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-zinc-900 mb-1">
          Jak tyto volby v roce ${state.year} skutečně dopadly?
        </h3>
        <p class="text-xs text-zinc-600 leading-relaxed mb-5">
          ${currentElection.historicalContext}
        </p>

        <div class="p-4 bg-zinc-50 rounded-lg border border-zinc-200 text-xs text-zinc-800 leading-relaxed mb-6">
          <strong>Povolební vývoj:</strong> ${currentElection.outcomeSummary}
        </div>

        <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
          Oficiální volební zisk stran (${state.year})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${currentElection.parties.map(p => `
            <div 
              onclick="window.calcOpenPartyModal('${p.id}', ${state.year})"
              class="p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs hover:border-zinc-300 hover:bg-zinc-100 transition-colors cursor-pointer group"
            >
              <div class="flex items-center justify-between mb-1.5">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-5 rounded-full shrink-0" style="background-color: ${p.color};"></div>
                  <div>
                    <strong class="text-zinc-900 font-semibold group-hover:underline block">${p.shortName}</strong>
                    <span class="text-[10px] text-zinc-500 truncate block">${p.fullName}</span>
                  </div>
                </div>
                <span class="font-mono font-bold text-zinc-900">${p.historicalPercentage}%</span>
              </div>
              <div class="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden mb-1.5">
                <div class="h-full rounded-full" style="width: ${Math.min(100, p.historicalPercentage * 2.2)}%; background-color: ${p.color};"></div>
              </div>
              <div class="text-[11px] text-zinc-500 flex justify-between">
                <span>Mandátů: <strong>${p.historicalSeats > 0 ? p.historicalSeats : '0'}</strong></span>
                <span class="group-hover:text-zinc-900">profil ↗</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Akční tlačítka -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button 
          onclick="window.calcShareResult()"
          class="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs tracking-tight transition-colors cursor-pointer shadow-xs border border-zinc-800"
        >
          Kopírovat výsledek
        </button>
        <button 
          onclick="window.calcSetView('home')"
          class="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 font-semibold text-xs tracking-tight transition-colors cursor-pointer"
        >
          Vyzkoušet jiný volební rok
        </button>
      </div>

    </main>
  `;
}

// -------------------------------------------------------------
// SLIDOVACÍ BAR DOLE NA STRÁNCE S LOGY A PROKLIKEM NA WIKIPEDII
// -------------------------------------------------------------

function renderPartySlider(): string {
  const years: ElectionYear[] = [1920, 1946, 1990];

  // Filtrovaný seznam všech stran
  const allPartiesWithYear: Array<{ party: Party; year: ElectionYear }> = [];
  years.forEach(y => {
    if (state.sliderYearFilter === 'all' || state.sliderYearFilter === y) {
      ELECTIONS_DATA[y].parties.forEach(party => {
        allPartiesWithYear.push({ party, year: y });
      });
    }
  });

  return `
    <section class="border-t border-zinc-200 bg-white py-8 px-4 sm:px-6 mt-12 shadow-xs">
      <div class="max-w-5xl mx-auto">
        
        <!-- Hlavička slidovacího baru -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-zinc-900"></span>
              <h3 class="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">
                Katalog historických stran & hnutí
              </h3>
            </div>
            <p class="text-xs text-zinc-500 mt-0.5">
              Klikněte na libovolnou stranu pro zobrazení historického profilu, programu a odkazu na Wikipedii.
            </p>
          </div>

          <!-- Filtry období & Šipky posuvu -->
          <div class="flex items-center gap-3">
            <!-- Záložky období -->
            <div class="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetSliderFilter('all')" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 'all' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                Vše (22)
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1920)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 1920 ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                1920
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1946)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 1946 ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                1946
              </button>
              <button 
                onclick="window.calcSetSliderFilter(1990)" 
                class="px-2.5 py-1 rounded transition-colors cursor-pointer ${state.sliderYearFilter === 1990 ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-600 hover:text-zinc-900'}"
              >
                1990
              </button>
            </div>

            <!-- Posuvná navigační tlačítka -->
            <div class="flex items-center gap-1.5">
              <button 
                onclick="window.calcScrollSlider('left')" 
                aria-label="Posunout doleva" 
                class="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                ◀
              </button>
              <button 
                onclick="window.calcScrollSlider('right')" 
                aria-label="Posunout doprava" 
                class="w-8 h-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <!-- Samotný vodorovný slidovací bar -->
        <div 
          id="party-slider-scroll" 
          class="party-slider flex items-stretch gap-3 overflow-x-auto no-scrollbar py-2 px-0.5"
        >
          ${allPartiesWithYear.map(({ party, year }) => `
            <div 
              onclick="window.calcOpenPartyModal('${party.id}', ${year})"
              class="w-[230px] sm:w-[250px] shrink-0 bg-white rounded-xl border border-zinc-200 p-4 hover:border-zinc-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <!-- Barevný proužek nahoře v typické barvě strany -->
                <div class="h-1.5 w-full rounded-t-xl -mt-4 -mx-4 mb-3" style="background-color: ${party.color};"></div>

                <!-- Vrchní lišta: Rok & Výsledek -->
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    Volby ${year}
                  </span>
                  <span class="text-xs font-mono font-bold text-zinc-900">
                    ${party.historicalPercentage}%
                  </span>
                </div>

                <!-- Barevný proužek a název strany v době voleb -->
                <div class="flex items-start gap-2.5 mb-2">
                  <div class="w-1.5 h-9 rounded-full shrink-0 mt-0.5" style="background-color: ${party.color};"></div>
                  <div class="overflow-hidden">
                    <h4 class="font-extrabold text-sm text-zinc-900 truncate group-hover:underline">
                      ${party.shortName}
                    </h4>
                    <p class="text-[11px] text-zinc-700 font-medium line-clamp-1" title="${party.fullName}">
                      ${party.fullName}
                    </p>
                  </div>
                </div>

                <div class="mb-2">
                  <span class="inline-block px-1.5 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 border border-zinc-200 truncate max-w-full">
                    ${party.ideology}
                  </span>
                </div>

                <p class="text-[11px] text-zinc-600 line-clamp-2 leading-relaxed mb-3">
                  ${party.description}
                </p>
              </div>

              <!-- Spodní proklik na popis & Wikipedii -->
              <div class="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 group-hover:text-zinc-900">
                <span class="font-medium">Popis & Wikipedie</span>
                <span class="font-bold text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// -------------------------------------------------------------
// MODÁLNÍ OKNO DETAILU STRANY (POPIS + WIKIPEDIE)
// -------------------------------------------------------------

function renderPartyModal(): string {
  if (!state.activeModalParty) return '';
  const { party, year } = state.activeModalParty;

  return `
    <div 
      id="party-modal-backdrop"
      class="fixed inset-0 z-50 bg-zinc-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onclick="if (event.target.id === 'party-modal-backdrop') window.calcClosePartyModal();"
    >
      <div 
        class="max-w-xl w-full bg-white rounded-2xl border border-zinc-200 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto animate-fadeIn text-zinc-900 overflow-hidden"
        onclick="event.stopPropagation();"
      >
        <!-- Barevný proužek nahoře v barvě strany -->
        <div class="h-2 w-full rounded-t-2xl -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 mb-6" style="background-color: ${party.color};"></div>
        
        <!-- Zavírací tlačítko -->
        <button 
          onclick="window.calcClosePartyModal()" 
          aria-label="Zavřít"
          class="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        <!-- Hlavička s barevným proužkem a dobovým názvem -->
        <div class="flex items-start gap-3.5 mb-5 pr-8">
          <div class="w-2 h-14 rounded-full shrink-0 shadow-xs" style="background-color: ${party.color};"></div>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="text-xs font-bold px-2 py-0.5 rounded bg-zinc-900 text-white font-mono">
                Volby ${year}
              </span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                ${party.ideology}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-zinc-900 leading-tight">
              ${party.fullName}
            </h3>
            <div class="flex items-center gap-2 mt-1.5">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${party.color};"></span>
              <span class="text-xs text-zinc-600 font-medium">
                Dobový název a zkratka: <strong class="text-zinc-900 font-bold">${party.shortName}</strong>
              </span>
            </div>
          </div>
        </div>

        <!-- Statistiky volebního výsledku -->
        <div class="grid grid-cols-2 gap-3 p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 mb-5 text-xs">
          <div>
            <span class="text-zinc-500 block text-[11px]">Skutečný volební zisk v roce ${year}:</span>
            <strong class="text-base font-extrabold text-zinc-900 font-mono">${party.historicalPercentage} %</strong>
          </div>
          <div>
            <span class="text-zinc-500 block text-[11px]">Získaných poslaneckých mandátů:</span>
            <strong class="text-base font-extrabold text-zinc-900 font-mono">${party.historicalSeats > 0 ? party.historicalSeats : '0 křesel'}</strong>
          </div>
        </div>

        <!-- Významné osobnosti -->
        <div class="mb-4 text-xs">
          <span class="text-zinc-400 uppercase tracking-wider font-bold block mb-1">Klíčové osobnosti</span>
          <p class="font-semibold text-zinc-800">
            ${party.leaders.join(' · ')}
          </p>
        </div>

        <!-- Historický popis (Wikipedie data) -->
        <div class="mb-4 text-xs sm:text-sm text-zinc-700 leading-relaxed space-y-2">
          <span class="text-zinc-400 uppercase tracking-wider font-bold block text-xs">Historický profil & kontext</span>
          <p>
            ${party.description}
          </p>
        </div>

        <!-- Programový pilíř -->
        <div class="p-3.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs text-zinc-800 leading-relaxed mb-6">
          <strong class="text-zinc-900">Hlavní programová teze:</strong> ${party.programHighlight}
        </div>

        <!-- Akční tlačítka v patce modálu -->
        <div class="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-zinc-200">
          ${party.wikipediaUrl ? `
            <a 
              href="${party.wikipediaUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs tracking-tight transition-colors text-center flex items-center justify-center gap-1.5 shadow-xs cursor-pointer border border-zinc-800"
            >
              <span>Otevřít článek na Wikipedii</span>
              <span class="text-xs">↗</span>
            </a>
          ` : ''}

          <button 
            onclick="window.calcStartQuiz(${year}); window.calcClosePartyModal();"
            class="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs tracking-tight transition-colors text-center cursor-pointer border border-zinc-200"
          >
            Spustit kalkulačku pro rok ${year}
          </button>
        </div>

      </div>
    </div>
  `;
}

function renderToast(): string {
  if (!state.toastMessage) return '';
  return `
    <div class="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium animate-fadeIn border border-zinc-700">
      <span>${state.toastMessage}</span>
    </div>
  `;
}

function renderFooter(): string {
  return `
    <footer class="border-t border-zinc-200 py-8 px-4 sm:px-6 text-zinc-500 text-xs bg-[#f4f4f5]">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span class="font-bold text-zinc-900">Historická volební kalkulačka (HVK)</span>
          <span class="text-zinc-300 mx-2">·</span>
          <span>1920 · 1946 · 1990</span>
        </div>
        <div class="text-[11px] text-zinc-400">
          Založeno na dobových volebních programech a historických pramenech
        </div>
      </div>
    </footer>
  `;
}

function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  let viewContent = '';
  switch (state.view) {
    case 'home':
      viewContent = renderHomeView();
      break;
    case 'quiz':
      viewContent = renderQuizView();
      break;
    case 'results':
      viewContent = renderResultsView();
      break;
  }

  root.innerHTML = `
    ${renderHeader()}
    ${viewContent}
    ${renderPartySlider()}
    ${renderFooter()}
    ${renderPartyModal()}
    ${renderToast()}
  `;

  attachEventListeners();
}

function attachEventListeners() {
  document.getElementById('btn-toggle-note')?.addEventListener('click', () => {
    state.showHistoricalNote = !state.showHistoricalNote;
    renderApp();
  });
}

// Klávesa Escape zavírá modální okno
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.activeModalParty) {
    closePartyModal();
  }
});

// Globální window metody pro HTML handlery
declare global {
  interface Window {
    calcStartQuiz: (year: ElectionYear) => void;
    calcHandleAnswer: (val: UserAnswerValue) => void;
    calcPrevQuestion: () => void;
    calcJumpQuestion: (index: number) => void;
    calcSetView: (view: AppState['view']) => void;
    calcSelectPartyDetails: (partyId: string) => void;
    calcSetComparisonFilter: (filter: 'all' | 'agree' | 'disagree') => void;
    calcToggleParties: (year: ElectionYear) => void;
    calcShareResult: () => void;
    calcSetSliderFilter: (filter: 'all' | ElectionYear) => void;
    calcScrollSlider: (direction: 'left' | 'right') => void;
    calcOpenPartyModal: (partyId: string, year: ElectionYear) => void;
    calcClosePartyModal: () => void;
  }
}

window.calcStartQuiz = (y) => startQuiz(y);
window.calcHandleAnswer = (val) => handleAnswer(val);
window.calcPrevQuestion = () => {
  if (state.questionIndex > 0) {
    state.questionIndex--;
    state.showHistoricalNote = false;
    renderApp();
  }
};
window.calcJumpQuestion = (idx) => {
  state.questionIndex = idx;
  state.showHistoricalNote = false;
  renderApp();
};
window.calcSetView = (v) => setView(v);
window.calcSelectPartyDetails = (pId) => {
  state.selectedPartyForDetails = pId;
  renderApp();
};
window.calcSetComparisonFilter = (f) => {
  state.comparisonFilter = f;
  renderApp();
};
window.calcToggleParties = (y) => {
  state.expandedPartiesYear = state.expandedPartiesYear === y ? null : y;
  renderApp();
};
window.calcSetSliderFilter = (f) => {
  state.sliderYearFilter = f;
  renderApp();
};
window.calcScrollSlider = (dir) => scrollPartySlider(dir);
window.calcOpenPartyModal = (pId, y) => openPartyModal(pId, y);
window.calcClosePartyModal = () => closePartyModal();

window.calcShareResult = () => {
  const top = state.partyScores[0];
  const shareText = top 
    ? `V Historické volební kalkulačce pro rok ${state.year} mi vyšla nejvyšší shoda s: ${top.party.fullName} (${top.matchPercentage} %)!`
    : `Vyzkoušejte Historickou volební kalkulačku (1920, 1946, 1990)!`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('Zkopírováno do schránky');
    }).catch(() => {
      showToast(shareText);
    });
  } else {
    showToast(shareText);
  }
};

renderApp();
