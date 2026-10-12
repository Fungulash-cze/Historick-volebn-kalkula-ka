import './index.css';
import confetti from 'canvas-confetti';
import { ELECTIONS_DATA } from './data/electionsData.ts';
import { calculatePartyScores } from './calculator.ts';
import { ElectionYear, UserAnswerValue, PartyScore } from './types.ts';

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
  expandedPartiesYear: null
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
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });
  } catch (e) {
    console.error(e);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

// -------------------------------------------------------------
// RENDERERS (Modern Data-Journalism UI)
// -------------------------------------------------------------

function renderHeader(): string {
  return `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        <!-- Logo / Brand -->
        <button onclick="window.calcSetView('home')" class="flex items-center gap-3 text-left group">
          <div class="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-xs">
            VK
          </div>
          <div>
            <span class="font-bold text-sm text-slate-900 block leading-tight">
              Historická volební kalkulačka
            </span>
            <span class="text-[11px] text-slate-500 font-medium block">
              1920 · 1946 · 1990
            </span>
          </div>
        </button>

        <!-- Right navigation -->
        <nav class="flex items-center gap-3 text-xs font-medium">
          <button 
            onclick="window.calcSetView('home')" 
            class="px-3 py-1.5 rounded-md transition-colors ${state.view === 'home' ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}"
          >
            Výběr voleb
          </button>
          ${state.view === 'quiz' || state.view === 'results' ? `
            <span class="text-slate-300">|</span>
            <span class="text-slate-700 font-semibold px-2 py-0.5 bg-blue-50 text-blue-800 rounded text-[11px]">
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
      
      <!-- Clean Editorial Intro -->
      <section class="max-w-2xl mb-10">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          Která historická strana odpovídá vašim názorům?
        </h1>
        <p class="text-base text-slate-600 leading-relaxed font-normal">
          Vyberte si jeden ze tří klíčových parlamentních volebních roků. Zodpovězte 15 otázek vycházejících ze skutečných dobových programů a zjistěte procentuální shodu se všemi tehdejšími kandidujícími stranami.
        </p>
      </section>

      <!-- 3 Election Cards -->
      <section class="space-y-4 mb-14">
        ${years.map((y) => {
          const meta = ELECTIONS_DATA[y];
          const isExpanded = state.expandedPartiesYear === y;

          return `
            <div class="election-card p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <!-- Left content -->
              <div class="flex-1">
                <!-- Year & Meta row -->
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                    ${meta.year}
                  </span>
                  <span class="text-slate-300">·</span>
                  <span class="text-xs font-semibold text-blue-700">
                    ${meta.date}
                  </span>
                  <span class="text-slate-300">·</span>
                  <span class="text-xs text-slate-500 font-medium">
                    Účast ${meta.turnout}
                  </span>
                </div>

                <!-- Title & Context -->
                <h2 class="text-lg font-bold text-slate-900 mb-1.5">
                  ${meta.title}
                </h2>
                
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  ${meta.stakes}
                </p>

                <!-- Clean parties summary with toggle -->
                <div class="text-xs text-slate-500">
                  <span>Kandidující strany (${meta.parties.length}): </span>
                  <span class="text-slate-700 font-medium">
                    ${meta.parties.map(p => p.shortName).slice(0, 4).join(', ')}${meta.parties.length > 4 ? ` a další ${meta.parties.length - 4}` : ''}
                  </span>
                  <button 
                    onclick="window.calcToggleParties(${y})"
                    class="text-blue-600 hover:text-blue-800 underline ml-1 text-xs font-medium cursor-pointer"
                  >
                    ${isExpanded ? 'skrýt přehled' : 'zobrazit všechny'}
                  </button>
                </div>

                ${isExpanded ? `
                  <div class="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 animate-fadeIn">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      ${meta.parties.map(p => `
                        <div class="flex items-center gap-2">
                          <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${p.color};"></span>
                          <strong class="text-slate-900 font-semibold">${p.shortName}:</strong>
                          <span class="text-slate-500 truncate">${p.ideology}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>

              <!-- Right action button -->
              <div class="shrink-0 pt-2 md:pt-0">
                <button 
                  onclick="window.calcStartQuiz(${y})"
                  class="w-full md:w-auto px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm tracking-tight transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Spustit kalkulačku</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          `;
        }).join('')}
      </section>

      <!-- Educational background -->
      <section class="border-t border-slate-200 pt-8">
        <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
          O projektu a historických datech
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
          <div>
            <strong class="text-slate-900 block mb-1 font-semibold">15 dobových otázek pro každý rok</strong>
            Otázky pokrývají klíčové ekonomické, sociální, zahraniční a ústavní otázky, kterými tehdejší společnost skutečně žila.
          </div>
          <div>
            <strong class="text-slate-900 block mb-1 font-semibold">Přesná váhová matice postojů</strong>
            Postoje stran byly sestaveny na základě historických volebních programů, tiskovin a parlamentních hlasování.
          </div>
          <div>
            <strong class="text-slate-900 block mb-1 font-semibold">Skutečné volební výsledky</strong>
            Po dokončení kalkulačky se dozvíte nejen svou shodu, ale také reálné rozdělení mandátů a co po volbách následovalo.
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
      
      <!-- Progress Bar & Question Step -->
      <div class="mb-6">
        <div class="flex items-center justify-between text-xs mb-2">
          <button 
            onclick="window.calcSetView('home')" 
            class="text-slate-500 hover:text-slate-800 transition-colors font-medium flex items-center gap-1 cursor-pointer"
          >
            <span>←</span>
            <span>Výběr roku</span>
          </button>
          
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-900">Volby ${state.year}</span>
            <span class="text-slate-300">·</span>
            <span class="text-slate-600 font-medium">
              Otázka ${state.questionIndex + 1} z ${totalQuestions}
            </span>
          </div>
        </div>

        <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div 
            class="bg-blue-600 h-full transition-all duration-300 ease-out" 
            style="width: ${progressPercent}%;"
          ></div>
        </div>
      </div>

      <!-- Main Questionnaire Card -->
      <div class="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs mb-6">
        
        <!-- Category label -->
        <div class="mb-3">
          <span class="text-xs font-bold text-blue-700 uppercase tracking-wider">
            ${q.category}
          </span>
        </div>

        <!-- Statement -->
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-6">
          ${q.statement}
        </h2>

        <!-- Explanatory note toggle -->
        <div class="mb-8 pt-3 border-t border-slate-100">
          <button 
            id="btn-toggle-note"
            class="text-xs text-slate-500 hover:text-slate-900 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span class="text-[10px] transform ${state.showHistoricalNote ? 'rotate-90' : ''} transition-transform">▶</span>
            <span>Dobový kontext a vysvětlení otázky</span>
          </button>

          ${state.showHistoricalNote ? `
            <div class="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 leading-relaxed animate-fadeIn">
              <strong>Historické pozadí:</strong> ${q.historicalNote}
            </div>
          ` : ''}
        </div>

        <!-- 3 Modern Electoral Buttons (Ano / Nevím / Ne) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <!-- Souhlasím (+1) -->
          <button 
            onclick="window.calcHandleAnswer(1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === 1 ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm' : 'bg-white hover:bg-emerald-50 text-slate-800 border-slate-300 hover:border-emerald-600'}"
          >
            <span class="text-base text-emerald-600 ${currentAnswer === 1 ? 'text-white' : ''}">✔</span>
            <span>Ano / Souhlasím</span>
          </button>

          <!-- Nevím / Neutrální (0) -->
          <button 
            onclick="window.calcHandleAnswer(0)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === 0 ? 'bg-slate-800 text-white border-slate-800 shadow-sm' : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300 hover:border-slate-400'}"
          >
            <span class="text-base text-slate-400 ${currentAnswer === 0 ? 'text-white' : ''}">—</span>
            <span>Nevím / Neutrální</span>
          </button>

          <!-- Nesouhlasím (-1) -->
          <button 
            onclick="window.calcHandleAnswer(-1)"
            class="btn-choice py-3.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-2 border ${currentAnswer === -1 ? 'bg-rose-700 text-white border-rose-700 shadow-sm' : 'bg-white hover:bg-rose-50 text-slate-800 border-slate-300 hover:border-rose-600'}"
          >
            <span class="text-base text-rose-600 ${currentAnswer === -1 ? 'text-white' : ''}">✖</span>
            <span>Ne / Nesouhlasím</span>
          </button>

        </div>

      </div>

      <!-- Bottom controls: Back & Skip -->
      <div class="flex items-center justify-between text-xs text-slate-500 px-1">
        <button 
          ${state.questionIndex > 0 ? `onclick="window.calcPrevQuestion()"` : 'disabled'}
          class="hover:text-slate-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-medium flex items-center gap-1 cursor-pointer"
        >
          <span>←</span>
          <span>Předchozí otázka</span>
        </button>

        <!-- Minimal numbered pill navigator -->
        <div class="hidden sm:flex items-center gap-1">
          ${currentElection.questions.map((item, idx) => {
            const isAnswered = state.answers[item.id] !== undefined;
            const isCurrent = idx === state.questionIndex;
            return `
              <button 
                onclick="window.calcJumpQuestion(${idx})"
                class="w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono transition-colors cursor-pointer ${isCurrent ? 'bg-blue-600 text-white font-bold' : isAnswered ? 'bg-slate-200 text-slate-800 font-medium' : 'text-slate-400 hover:bg-slate-100'}"
              >
                ${idx + 1}
              </button>
            `;
          }).join('')}
        </div>

        <button 
          onclick="window.calcHandleAnswer(0)"
          class="hover:text-slate-900 transition-colors font-medium flex items-center gap-1 cursor-pointer"
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
      
      <!-- Top Headline -->
      <div class="mb-8">
        <div class="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
          <span>Výsledky kalkulačky</span>
          <span>·</span>
          <span>Volby ${state.year}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Vaše názorová shoda se stranami
        </h1>
      </div>

      <!-- #1 Match Highlight Card -->
      ${topMatch ? `
        <div class="bg-slate-900 text-white rounded-xl p-6 sm:p-8 mb-8 shadow-sm">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div class="max-w-xl">
              <span class="text-xs uppercase tracking-wider font-semibold text-blue-400 block mb-1">
                Nejvyšší shoda programu
              </span>
              <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
                ${topMatch.party.fullName} (${topMatch.party.shortName})
              </h2>
              <div class="text-xs text-slate-400 mb-3 font-medium">
                ${topMatch.party.ideology} · Klíčové osobnosti: <strong class="text-slate-200">${topMatch.party.leaders.join(', ')}</strong>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                ${topMatch.party.description}
              </p>
              <div class="p-3 rounded-lg bg-slate-800 text-xs text-slate-200 border border-slate-700">
                <strong>Programové pilíře:</strong> ${topMatch.party.programHighlight}
              </div>
            </div>

            <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800 border border-slate-700 min-w-[130px] shrink-0 self-center sm:self-auto">
              <span class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                ${topMatch.matchPercentage}%
              </span>
              <span class="text-[11px] uppercase tracking-wider text-slate-400 mt-1 font-semibold">
                Shoda
              </span>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Complete Ranking of all parties (Bar chart) -->
      <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-slate-900 mb-1">
          Celkové pořadí všech kandidujících stran
        </h3>
        <p class="text-xs text-slate-500 mb-5">
          Klepnutím na libovolnou stranu zobrazíte podrobné srovnání odpovědí.
        </p>

        <div class="space-y-3">
          ${state.partyScores.map((score, index) => {
            const isSelected = selectedParty?.id === score.party.id;
            return `
              <div 
                onclick="window.calcSelectPartyDetails('${score.party.id}')"
                class="p-3 rounded-lg border transition-all cursor-pointer ${isSelected ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:border-slate-300 bg-white'}"
              >
                <div class="flex items-center justify-between mb-1.5 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-[10px]">
                      ${index + 1}
                    </span>
                    <strong class="text-slate-900 text-sm font-semibold">${score.party.shortName}</strong>
                    <span class="text-slate-500 text-xs hidden sm:inline">(${score.party.ideology})</span>
                  </div>
                  <div class="font-mono font-bold text-sm text-slate-900">
                    ${score.matchPercentage}%
                  </div>
                </div>

                <!-- Match bar -->
                <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-1">
                  <div 
                    class="h-full rounded-full transition-all duration-300" 
                    style="width: ${score.matchPercentage}%; background-color: ${score.party.color};"
                  ></div>
                </div>

                <div class="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Shoda: <strong>${score.agreeCount}</strong> · Rozpor: <strong>${score.disagreeCount}</strong></span>
                  <span>Reálný výsledek ${state.year}: <strong class="text-slate-800">${score.party.historicalPercentage}%</strong></span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Question Comparison Breakdown -->
      ${selectedParty ? `
        <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-xs">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
            <div>
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Podrobný rozbor</span>
              <h3 class="text-base font-bold text-slate-900">
                Vaše odpovědi vs. ${selectedParty.fullName}
              </h3>
            </div>

            <!-- Filter tabs -->
            <div class="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button 
                onclick="window.calcSetComparisonFilter('all')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'all' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'}"
              >
                Všechny (15)
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('agree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'agree' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'}"
              >
                Shoda
              </button>
              <button 
                onclick="window.calcSetComparisonFilter('disagree')"
                class="px-3 py-1 rounded-md transition-colors cursor-pointer ${state.comparisonFilter === 'agree' ? 'text-slate-600 hover:text-slate-900' : state.comparisonFilter === 'disagree' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'}"
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
                  <div class="p-3.5 rounded-lg border text-xs ${isMatch ? 'border-emerald-200 bg-emerald-50/20' : isOpposite ? 'border-rose-200 bg-rose-50/20' : 'border-slate-200 bg-white'}">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-slate-500 font-semibold uppercase text-[10px]">${q.category}</span>
                      <span class="text-[11px] font-semibold px-2 py-0.5 rounded ${isMatch ? 'text-emerald-700 bg-emerald-100' : isOpposite ? 'text-rose-700 bg-rose-100' : 'text-slate-600 bg-slate-100'}">
                        ${isMatch ? '✔ Shoda' : isOpposite ? '✖ Rozpor' : '— Neutrální'}
                      </span>
                    </div>

                    <p class="font-medium text-slate-900 mb-2 leading-relaxed">
                      ${q.statement}
                    </p>

                    <div class="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                      <div>
                        <span class="text-slate-500 block text-[10px]">Váš hlas:</span>
                        <strong class="${userVal === 1 ? 'text-emerald-700' : userVal === -1 ? 'text-rose-700' : 'text-slate-700'} font-semibold">
                          ${labelUser}
                        </strong>
                      </div>
                      <div>
                        <span class="text-slate-500 block text-[10px]">Postoj ${selectedParty.shortName}:</span>
                        <strong class="${partyVal === 1 ? 'text-emerald-700' : partyVal === -1 ? 'text-rose-700' : 'text-slate-700'} font-semibold">
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

      <!-- Real Historical Results -->
      <div class="bg-white border border-slate-200 rounded-xl p-6 mb-8 shadow-xs">
        <h3 class="text-base font-bold text-slate-900 mb-1">
          Jak tyto volby v roce ${state.year} skutečně dopadly?
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed mb-5">
          ${currentElection.historicalContext}
        </p>

        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed mb-6">
          <strong>Povolební vývoj:</strong> ${currentElection.outcomeSummary}
        </div>

        <!-- Historical percentages table -->
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Oficiální volební zisk stran (${state.year})
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          ${currentElection.parties.map(p => `
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <div class="flex items-center justify-between mb-1">
                <strong class="text-slate-900 font-semibold">${p.shortName}</strong>
                <span class="font-mono font-bold text-slate-900">${p.historicalPercentage}%</span>
              </div>
              <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-1.5">
                <div class="h-full rounded-full" style="width: ${Math.min(100, p.historicalPercentage * 2.2)}%; background-color: ${p.color};"></div>
              </div>
              <div class="text-[11px] text-slate-500 flex justify-between">
                <span>Mandátů: <strong>${p.historicalSeats > 0 ? p.historicalSeats : '0'}</strong></span>
                <span>Účast: ${currentElection.turnout}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Action controls -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button 
          onclick="window.calcShareResult()"
          class="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-tight transition-colors cursor-pointer shadow-xs"
        >
          Kopírovat výsledek
        </button>
        <button 
          onclick="window.calcSetView('home')"
          class="px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs tracking-tight transition-colors cursor-pointer"
        >
          Vyzkoušet jiný volební rok
        </button>
      </div>

    </main>
  `;
}

function renderToast(): string {
  if (!state.toastMessage) return '';
  return `
    <div class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium animate-fadeIn">
      <span>${state.toastMessage}</span>
    </div>
  `;
}

function renderFooter(): string {
  return `
    <footer class="border-t border-slate-200 py-8 px-4 sm:px-6 mt-16 text-slate-500 text-xs bg-white">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span class="font-bold text-slate-900">Historická volební kalkulačka</span>
          <span class="text-slate-300 mx-2">·</span>
          <span>1920 · 1946 · 1990</span>
        </div>
        <div class="text-[11px] text-slate-400">
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
    ${renderFooter()}
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

// Global window methods
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
