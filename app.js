// ── CONSTANTS ──
const AVG_KG_FIRST = 20; // 1st person ~20kg/month black bin waste
const AVG_KG_ADDITIONAL = 12; // each additional person adds ~12kg/month
const BIN_MAP = {general_waste:'general_waste',recycling:'recycling',compost:'compost',glass:'glass'};
const BIN_LABEL = {general_waste:'\u{1F5D1} Black',recycling:'\u267B Recycling',compost:'\u{1F342} Brown',glass:'\u{1F37E} Glass'};
const BIN_EMOJI = {general_waste:'\u{1F5D1}',recycling:'\u267B',compost:'\u{1F342}',glass:'\u{1F37E}'};
const TYPE_BADGE = {monthly:'<span class="badge bfx">Fixed monthly</span>',pay_by_lift:'<span class="badge bpg">Pay per lift</span>',pay_by_weight:'<span class="badge bwt">Pay by weight</span>'};

// ── TRUSTPILOT DATA (preserved from original) ──
const TRUSTPILOT = {
  'AES Recycling':{score:2.8,reviews:278,url:'https://ie.trustpilot.com/review/bnmrecycling.ie'},
  'Panda Green':{score:4.2,reviews:2558,url:'https://ie.trustpilot.com/review/www.panda.ie'},
  'Greyhound Recycling':{score:2.0,reviews:371,url:'https://ie.trustpilot.com/review/greyhound.ie'},
  'Thorntons Recycling':{score:2.4,reviews:57,url:'https://ie.trustpilot.com/review/thorntons-recycling.ie'},
  'The City Bin Co.':{score:1.6,reviews:84,url:'https://ie.trustpilot.com/review/citybin.com'},
  'City Bin':{score:1.6,reviews:84,url:'https://ie.trustpilot.com/review/citybin.com'},
  'Oxigen Environmental Unlimited Company':{score:4.2,reviews:795,url:'https://ie.trustpilot.com/review/oxigen.ie'},
  'Allied Recycling':{score:4.0,reviews:38,url:'https://ie.trustpilot.com/review/alliedrecycling.ie'},
  'Barna Recycling':{score:1.8,reviews:31,url:'https://ie.trustpilot.com/review/barnarecycling.com'},
  'Mr. Binman':{score:3.3,reviews:33,url:'https://ie.trustpilot.com/review/mrbinman.com'},
  'Mr Binman':{score:3.3,reviews:33,url:'https://ie.trustpilot.com/review/mrbinman.com'},
  'Kollect':{score:4.6,reviews:2585,url:'https://ie.trustpilot.com/review/kollect.ie'},
  'Kollect Developments Group Ltd':{score:4.6,reviews:2585,url:'https://ie.trustpilot.com/review/kollect.ie'},
  'Clean Ireland Recycling':{score:2.8,reviews:3,url:'https://www.trustpilot.com/review/www.cleanireland.ie'},
  'Country Clean Recycling':{score:1.5,reviews:55,url:'https://ie.trustpilot.com/review/www.countryclean.ie'},
  'Country Clean':{score:1.5,reviews:55,url:'https://ie.trustpilot.com/review/www.countryclean.ie'},
  'Ecological Waste Management':{score:3.6,reviews:1,url:'https://ie.trustpilot.com/review/www.ecological.ie'},
  'Oxigen Environmental':{score:4.2,reviews:795,url:'https://ie.trustpilot.com/review/oxigen.ie'},
  'Keygreen':{score:2.9,reviews:2,url:'https://ie.trustpilot.com/review/www.keygreen.ie'},
};

// ── PROCESS COUNTY_DATA INTO COMPANY LIST ──
function buildCompanies(data) {
  const map = {};
  for (const [countyKey, countyEntry] of Object.entries(data)) {
    const county = countyEntry.county;
    const coList = countyEntry.companies || [];
    // Inline the loop with a local alias to avoid shadowing
    for (const co of coList) {
      const key = co.name;
      if (!map[key]) {
        map[key] = {
          name: co.name,
          phone: co.phone,
          website: co.website,
          counties: [],
          countyData: {},
          allPlans: [],
          hasPricing: false,
          color: hashColor(co.name),
        };
      }
      const entry = map[key];
      if (!entry.counties.includes(county)) entry.counties.push(county);
      entry.countyData[county] = {
        pricing_available: co.pricing_available,
        confidence: co.confidence,
        service_notes: co.service_notes,
        address_used: co.address_used,
      };
      if (co.phone && !entry.phone) entry.phone = co.phone;
      if (co.website && !entry.website) entry.website = co.website;
      if (co.pricing_available) {
        entry.hasPricing = true;
        for (const p of co.plans) {
          entry.allPlans.push({ ...p, _county: county });
        }
      }
    }
  }
  const companies = Object.values(map);
  for (const c of companies) {
    c.counties.sort();
    c.countiesDisplay = c.counties.join(', ');
    c.coverage = summarizeCoverage(c.counties);
    c.binsOffered = getBinsOffered(c);
    c.trustpilot = findTrustpilot(c.name);
    c.lowestPrice = getLowestPrice(c);
    c.pricingModel = getPricingModel(c);
    c.freq = getFrequency(c);
  }
  return companies;
}

function hashColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
  const hue = ((h % 360) + 360) % 360;
  return 'hsl(' + hue + ',45%,35%)';
}

function logoDomain(c) {
  return c.website ? c.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '') : '';
}

function logoErr(img) {
  if (!img._fbTried) {
    img._fbTried = true;
    img.src = 'https://www.google.com/s2/favicons?domain=' + img.dataset.domain + '&sz=64';
  } else {
    const parent = img.parentElement;
    if (parent) {
      parent.style.background = img.dataset.color;
      parent.style.padding = '';
      parent.textContent = img.dataset.letter;
    }
  }
}

function logoIcon(c, sz) {
  sz = sz || 30;
  const domain = logoDomain(c);
  if (!domain) return esc(c.name[0]);
  return '<img src="https://logo.clearbit.com/' + domain + '" '
    + 'data-domain="' + domain + '" '
    + 'data-letter="' + esc(c.name[0]) + '" '
    + 'data-color="' + c.color + '" '
    + 'style="width:' + sz + 'px;height:' + sz + 'px;object-fit:contain;display:block" '
    + 'onerror="logoErr(this)" '
    + 'alt="">';
}

function summarizeCoverage(counties) {
  if (counties.length >= 20) return counties.length + ' of 26 counties';
  if (counties.length > 6) return counties.length + ' counties';
  return counties.join(', ');
}

function getBinsOffered(c) {
  const s = new Set();
  for (const p of c.allPlans) {
    if (p.bins_included) p.bins_included.forEach(b => s.add(b));
  }
  // If no plans, check county data for service notes
  if (!s.size) {
    s.add('general_waste');
    s.add('recycling');
  }
  return [...s];
}

function findTrustpilot(name) {
  return TRUSTPILOT[name] || null;
}

function getLowestPrice(c) {
  let min = Infinity;
  for (const p of c.allPlans) {
    if (p.price && p.price > 0) min = Math.min(min, p.price);
  }
  return min === Infinity ? 0 : min;
}

function getPricingModel(c) {
  const types = new Set(c.allPlans.map(p => p.type));
  if (types.size > 1) return 'mixed';
  if (types.has('pay_by_weight')) return 'weight';
  if (types.has('pay_by_lift')) return 'payg';
  return 'fixed';
}

function getFrequency(c) {
  for (const county of Object.keys(c.countyData)) {
    const notes = c.countyData[county].service_notes || '';
    if (/weekly/i.test(notes) && !/bi-?weekly|fortnightly/i.test(notes)) return 'Weekly';
    if (/bi-?weekly|fortnightly/i.test(notes)) return 'Fortnightly';
  }
  return 'Fortnightly';
}

// ── LAZY COUNTY LOADER ──
let companies = [];

function loadCounty(countyName, cb) {
  const cache = window.__COUNTY_CACHE__ || {};
  if (cache[countyName]) { cb(cache[countyName]); return; }
  const script = document.createElement('script');
  script.src = 'counties/' + countyName.toLowerCase() + '.js';
  script.onload = function() { cb((window.__COUNTY_CACHE__ || {})[countyName] || null); };
  script.onerror = function() { cb(null); };
  document.head.appendChild(script);
}

// ── QUIZ STATE ──
let quiz = { county: '', bins: ['general_waste'], people: 1, kgBlack: 12, useAvg: true, planType: 'monthly', eircode: '', wisResults: null, eircodeOnly: false };
let aSort = 'relevance';
let compareList = (function() { try { const s = localStorage.getItem('bc_compare'); return s ? JSON.parse(s) : []; } catch(e) { return []; } })();
let trayOpen = false;

function saveCompare() {
  try { localStorage.setItem('bc_compare', JSON.stringify(compareList)); } catch(e) {}
}

// ── COST CALCULATION ──
function normalizeAllowanceToMonthly(plan) {
  const kg = plan.waste_allowance_kg;
  if (kg == null) return null;
  const period = plan.waste_allowance_period || 'monthly';
  if (period === 'monthly') return kg;
  if (period === 'per_lift') return kg * 2; // bi-weekly = ~2 lifts/month
  if (period === '6_monthly') return kg / 6;
  if (period === 'half_yearly') return kg / 6;
  if (period === 'annual' || period === 'yearly') return kg / 12;
  return kg;
}

function isLitrePlan(plan) {
  // Plans named by bin volume (e.g. "240L Waste Plan", "Bill Pay – 140L Waste") have
  // no kg-based allowance we can compare against — return true to skip estimation.
  if (plan.waste_allowance_litres != null) return true;
  return /\b\d+\s*L(itre)?\b/i.test(plan.name || '');
}

function calcPlanCost(plan) {
  const kg = quiz.kgBlack;
  const type = plan.type || 'monthly';
  const basePrice = plan.price || 0;

  if (isLitrePlan(plan)) return null; // volume-based plan, can't estimate from kg

  if (type === 'monthly') {
    // Monthly fixed plan
    let monthly = basePrice;
    // Handle different price frequencies
    const freq = plan.price_frequency || 'monthly';
    if (freq === 'half_yearly' || freq === '6_monthly') monthly = basePrice / 6;
    else if (freq === 'annual' || freq === 'yearly') monthly = basePrice / 12;
    else if (freq === 'quarterly') monthly = basePrice / 3;

    const allowance = normalizeAllowanceToMonthly(plan);
    const exRate = plan.excess_charge_per_kg;
    const excessKg = allowance != null ? Math.max(0, kg - allowance) : 0;
    // If user is over the allowance and we don't know the excess rate, can't estimate
    if (excessKg > 0 && exRate == null) return null;
    const excess = excessKg * (exRate || 0);
    return {
      total: monthly + excess,
      base: monthly,
      excess,
      excessKg,
      allowance: allowance,
      overLimit: excessKg > 0 && exRate > 0,
    };
  }

  if (type === 'pay_by_lift') {
    return null; // PAYG: no estimated total — show lift info in table instead
  }

  if (type === 'pay_by_weight') {
    let svc = basePrice || 0;
    const freq = plan.price_frequency || 'monthly';
    if (freq === 'half_yearly' || freq === '6_monthly') svc = basePrice / 6;

    const rate = plan.excess_charge_per_kg || 0;
    const weightCost = rate * kg;
    // Add recycling/compost weight costs if user wants those bins
    const rRate = plan.recycling_excess_per_kg || 0;
    const cRate = plan.compost_excess_per_kg || 0;
    const rKg = quiz.bins.includes('recycling') ? Math.round(kg * 0.6) : 0;
    const cKg = quiz.bins.includes('compost') ? Math.round(kg * 0.3) : 0;
    const rCost = rKg * rRate;
    const cCost = cKg * cRate;

    return {
      total: svc + weightCost + rCost + cCost,
      base: svc,
      excess: weightCost + rCost + cCost,
      excessKg: kg,
      allowance: null,
      overLimit: false,
    };
  }

  return null;
}

// Get the best (cheapest) estimated cost for a company given quiz state
function calcBestCost(c) {
  const plans = getFilteredPlans(c);
  if (!plans.length) return null;
  let best = null, bestPlan = null;
  for (const p of plans) {
    const est = calcPlanCost(p);
    if (est && (!best || est.total < best.total)) { best = est; bestPlan = p; }
  }
  if (best && bestPlan) best.planName = bestPlan.name;
  return best;
}

// Filter plans to current county (fall back to all plans if none for this county)
function getFilteredPlans(c) {
  let plans = c.allPlans;
  if (quiz.county) {
    const countyPlans = c.allPlans.filter(p => p._county === quiz.county);
    if (countyPlans.length > 0) {
      // Has county-specific plans — use them
      plans = countyPlans;
    } else {
      // No county-specific plans — only fall back if the county entry doesn't explicitly say not served
      const countyEntry = c.countyData[quiz.county];
      const explicitlyNotServed = countyEntry && countyEntry.pricing_available === false;
      plans = explicitlyNotServed ? [] : c.allPlans;
    }
  }
  // Deduplicate plans by name (keep first occurrence — county-specific wins)
  const seen = new Set();
  plans = plans.filter(p => {
    const key = p.name + '|' + p.type;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (quiz.planType !== 'all') {
    plans = plans.filter(p => {
      const t = p.type || 'monthly';
      if (quiz.planType === 'monthly') return t === 'monthly';
      if (quiz.planType === 'payg') return t === 'pay_by_lift' || t === 'pay_by_weight';
      return true;
    });
  }
  return plans;
}

// Relevance score
function score(c) {
  let s = 0;
  const plans = getFilteredPlans(c);
  // Bin match
  const offered = c.binsOffered;
  quiz.bins.forEach(b => { if (offered.includes(b)) s += 20; });
  if (quiz.bins.includes('general_waste') && !offered.includes('general_waste')) s -= 100;
  // Cost bonus
  const cost = calcBestCost(c);
  if (cost) s += Math.max(0, 70 - cost.total);
  if (!c.hasPricing) s -= 5;
  // Confidence bonus
  if (quiz.county && c.countyData[quiz.county]) {
    const conf = c.countyData[quiz.county].confidence;
    if (conf && conf.level === 'high') s += 10;
    else if (conf && conf.level === 'medium') s += 5;
  }
  return s;
}

// ── QUIZ HANDLERS ──
function getAvgKg(people) { return AVG_KG_FIRST + (Math.max(0, people - 1) * AVG_KG_ADDITIONAL); }

function updateAvgToggleLabel() {
  const kg = getAvgKg(quiz.people);
  const lbl = quiz.people === 1 ? '1 person' : (quiz.people === 5 ? '5+ people' : quiz.people + ' people');
  document.getElementById('avgToggleTxt').textContent = 'Irish average for ' + lbl + ' (' + kg + 'kg)';
}

function updateSlider() {
  const slider = document.getElementById('kgSlider');
  const valEl = document.getElementById('kgVal');
  slider.value = quiz.kgBlack;
  valEl.textContent = quiz.kgBlack + 'kg';
  valEl.className = 'kg-val' + (quiz.useAvg ? ' avg-mode' : '');
  slider.style.setProperty('--val', ((quiz.kgBlack - 5) / 95 * 100) + '%');
  document.getElementById('kgNote').textContent = quiz.useAvg
    ? 'Estimated average: ~20kg for 1 person + ~12kg per additional person. Drag to override.' : '';
  updateAvgToggleLabel();
}

document.getElementById('csel').addEventListener('change', function() {
  const countyName = this.value;
  this.classList.toggle('chosen', !!countyName);
  const hint = document.getElementById('chint');
  if (!countyName) {
    hint.textContent = 'Enter your Eircode to filter available providers.';
    hint.className = 'chint';
    document.getElementById('ncm').classList.add('show');
    quiz.county = '';
    companies = [];
    compareList = [];
    saveCompare();
    render();
    return;
  }
  hint.textContent = 'Loading\u2026';
  hint.className = 'chint';
  document.getElementById('ncm').classList.remove('show');
  loadCounty(countyName, function(countyData) {
    if (!countyData) {
      hint.textContent = 'Could not load data for ' + countyName + '. Please try again.';
      hint.className = 'chint';
      return;
    }
    const dataObj = {};
    dataObj[countyName.toLowerCase()] = countyData;
    companies = buildCompanies(dataObj);
    quiz.county = countyName;
    compareList = [];
    saveCompare();
    render();
  });
});

function clearCounty() {
  quiz.county = '';
  quiz.eircode = '';
  quiz.wisResults = null;
  quiz.eircodeOnly = false;
  companies = [];
  compareList = [];
  saveCompare();
  document.getElementById('csel').value = '';
  document.getElementById('csel').classList.remove('chosen');
  const mainInput = document.getElementById('eircode-main');
  if (mainInput) { mainInput.value = ''; mainInput.classList.remove('chosen'); }
  document.getElementById('chint').textContent = 'Enter your Eircode to filter available providers.';
  document.getElementById('chint').className = 'chint';
  document.getElementById('ncm').classList.add('show');
  render();
}

// ── EIRCODE MAIN INPUT ──
(function() {
  const input = document.getElementById('eircode-main');
  if (!input) return;
  let debounce;
  let lastLookup = '';

  async function runWis(raw) {
    if (raw === lastLookup) return;
    lastLookup = raw;
    const cacheKey = 'wis_' + raw;
    const hint = document.getElementById('chint');
    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        quiz.wisResults = JSON.parse(cached);
        render();
        return;
      }
    } catch(e) {}

    // Show checking indicator while live WIS queries run
    if (hint) { hint.textContent = 'Checking Eircode coverage\u2026'; hint.className = 'chint'; }

    let portalsToQuery = WIS_PORTALS;
    const county = eircodeToCounty(raw);
    if (county) {
      const countyData = (window.__COUNTY_CACHE__ || {})[county];
      if (countyData) {
        const countyNames = new Set((countyData.companies || []).map(c => c.name));
        const filtered = WIS_PORTALS.filter(p => countyNames.has(p.name));
        if (filtered.length) portalsToQuery = filtered;
      }
    }
    try {
      quiz.wisResults = await checkWisCoverage(raw, portalsToQuery);
      try { sessionStorage.setItem(cacheKey, JSON.stringify(quiz.wisResults)); } catch(e) {}
    } catch(e) {
      quiz.wisResults = portalsToQuery.map(p => ({ ...p, served: null, error: e.message }));
    }
    render();
  }

  input.addEventListener('input', function() {
    clearTimeout(debounce);
    const raw = this.value.replace(/\s+/g, '').toUpperCase();
    const hint = document.getElementById('chint');
    if (!raw) {
      this.classList.remove('chosen');
      lastLookup = '';
      clearCounty();
      return;
    }
    if (raw.length < 3) {
      this.classList.remove('chosen');
      hint.textContent = 'Enter your Eircode to filter available providers.';
      hint.className = 'chint';
      return;
    }
    debounce = setTimeout(() => {
      // Routing key must map to a county (first 3 chars)
      const county = eircodeToCounty(raw);
      if (!county) {
        input.classList.remove('chosen');
        hint.textContent = 'Eircode not recognised — please check and try again.';
        hint.className = 'chint';
        return;
      }
      // Show county hint while still typing
      if (raw.length < 7) {
        hint.textContent = 'County: ' + county + ' — keep typing your full Eircode…';
        hint.className = 'chint';
        return;
      }
      // Full eircode must be exactly 7 alphanumeric chars: 1 letter + 2 digits (routing key) + 4 alphanumeric (unique identifier)
      if (!/^[A-Z][0-9]{2}[AC-FHKNPRTV-Y0-9]{4}$/.test(raw)) {
        input.classList.remove('chosen');
        hint.textContent = 'That doesn\'t look like a valid Eircode — e.g. D01 F5D2';
        hint.className = 'chint';
        return;
      }
      // Only set quiz.eircode once we have a fully validated eircode
      quiz.eircode = raw;
      input.classList.add('chosen');
      const sel = document.getElementById('csel');
      const needCountyLoad = sel.value !== county;
      if (needCountyLoad) {
        sel.value = county;
        sel.dispatchEvent(new Event('change'));
      }
      // Run WIS coverage check after county data is available
      setTimeout(() => runWis(raw), needCountyLoad ? 400 : 0);
    }, 300);
  });
})();

document.getElementById('binGroup').addEventListener('change', function() {
  quiz.bins = [...this.querySelectorAll('input:checked')].map(i => i.value);
  if (!quiz.bins.length) quiz.bins = ['general_waste'];
  this.querySelectorAll('.bo').forEach(o => o.classList.toggle('sel', o.querySelector('input').checked));
  render(); renderTray();
});

document.getElementById('peopleGroup').addEventListener('click', function(e) {
  const btn = e.target.closest('.pb');
  if (!btn) return;
  this.querySelectorAll('.pb').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  quiz.people = parseInt(btn.dataset.v);
  const desc = {1:'Solo household',2:'Couple or housemates',3:'Close to the Irish average',4:'Family household',5:'Higher waste expected'};
  document.getElementById('plbl').textContent = desc[quiz.people];
  quiz.useAvg = true;
  document.getElementById('avgToggle').classList.add('active');
  document.querySelector('#avgToggle input').checked = true;
  quiz.kgBlack = getAvgKg(quiz.people);
  updateSlider(); render(); renderTray();
});

document.getElementById('kgSlider').addEventListener('input', function() {
  quiz.kgBlack = parseInt(this.value);
  const avgKg = getAvgKg(quiz.people);
  quiz.useAvg = (quiz.kgBlack === avgKg);
  document.getElementById('avgToggle').classList.toggle('active', quiz.useAvg);
  document.querySelector('#avgToggle input').checked = quiz.useAvg;
  updateSlider(); render(); renderTray();
});

document.getElementById('avgToggle').addEventListener('click', function(e) {
  // Don't double-toggle from the checkbox
  if (e.target.tagName === 'INPUT') return;
  const cb = this.querySelector('input');
  cb.checked = !cb.checked;
  quiz.useAvg = cb.checked;
  this.classList.toggle('active', quiz.useAvg);
  if (quiz.useAvg) quiz.kgBlack = getAvgKg(quiz.people);
  updateSlider(); render(); renderTray();
});

document.getElementById('planTypeGroup').addEventListener('change', function(e) {
  if (!e.target.matches('input[name="plantype"]')) return;
  quiz.planType = e.target.value;
  this.querySelectorAll('.bo').forEach(o => o.classList.toggle('sel', o.querySelector('input').checked));
  render(); renderTray();
});

// ── TRUSTPILOT BADGE ──
function tpBadge(tp) {
  if (!tp) return '';
  const s = tp.score;
  const cls = s >= 3.8 ? 'tp-hi' : s >= 2.8 ? 'tp-mid' : 'tp-lo';
  const stars = '\u2605'.repeat(Math.round(s)) + '\u2606'.repeat(5 - Math.round(s));
  const label = s >= 4.0 ? 'Great' : s >= 3.5 ? 'Good' : s >= 2.5 ? 'Average' : s >= 2.0 ? 'Poor' : 'Bad';
  return '<a href="' + tp.url + '" target="_blank" class="tpbadge ' + cls + '" title="' + tp.reviews.toLocaleString() + ' reviews on Trustpilot">'
    + '<span class="tp-stars">' + stars + '</span> Rated <strong>' + label + '</strong> on Trustpilot</a>';
}

// ── ADMIN / TESTING FLAGS ──
const TESTING_MODE = new URLSearchParams(window.location.search).get('testing') === 'true';
const ADMIN_MODE = new URLSearchParams(window.location.search).get('testing') === 'true';

// ── WIS PORTAL CONFIG ──
// POC: queries each company's *.wis.ie/signup/address endpoint to check live coverage.
// NOTE: These are cross-origin requests — CORS will block them in a regular browser.
// To test, open Chrome with: open -a "Google Chrome" --args --disable-web-security --user-data-dir=/tmp/chrome-dev
const WIS_PORTALS = [
  { subdomain: 'oxigen',              name: 'Oxigen' },
  { subdomain: 'aesirl',             name: 'AES Recycling' },
  { subdomain: 'raywhelan',          name: 'Ray Whelan' },
  { subdomain: 'alliedrecycling',    name: 'Allied Recycling' },
  { subdomain: 'thorntonsrecycling', name: 'Thorntons Recycling' },
  { subdomain: 'mulleadys',          name: 'Mulleadys' },
  { subdomain: 'qrl',                name: 'Quality Recycling Ltd' },
  { subdomain: 'countryclean',       name: 'Country Clean Recycling' },
  { subdomain: 'wiserbins',          name: 'Wiser Recycling' },
  { subdomain: 'donegalwasterecycle',name: 'Donegal Waste & Recycle' },
  { subdomain: 'citybin',            name: 'The City Bin Co.' },
  { subdomain: 'greyhound',          name: 'Greyhound Recycling' },
  { subdomain: 'mrbinman',           name: 'Mr Binman' },
  { subdomain: 'cleanireland',       name: 'Clean Ireland Recycling' },
  { subdomain: 'kwdrecycling',       name: 'KWD Recycling' },
  { subdomain: 'mcgrathwaste',       name: 'McGrath Industrial Waste Ltd.' },
  { subdomain: 'advancedwaste',      name: 'Advanced Waste Recycling' },
  { subdomain: 'dmwaste',            name: 'DM Waste' },
  { subdomain: 'loganwaste',         name: 'Logan Waste' },
  { subdomain: 'clonmelwaste',       name: 'Clonmel Waste' },
  { subdomain: 'barnarecycling',     name: 'Barna Recycling' },
];

// ── WIS COVERAGE LOOKUP (ADMIN POC) ──
async function checkWisCoverage(eircode, portalsToQuery) {
  const portals = portalsToQuery || WIS_PORTALS;
  const results = await Promise.allSettled(
    portals.map(async portal => {
      const target = 'https://' + portal.subdomain + '.wis.ie/signup/address';
      const res = await fetch('https://corsproxy.io/?url=' + encodeURIComponent(target), {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'address=' + encodeURIComponent(eircode),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      return { ...portal, served: !!data.price_group_ids, county: data.county, resolvedEircode: data.eircode };
    })
  );
  return results.map((r, i) =>
    r.status === 'fulfilled'
      ? r.value
      : { ...portals[i], served: null, error: r.reason?.message || 'Failed' }
  );
}

// Maps WIS API county strings → app county select values
function wisCountyToAppCounty(wisCounty) {
  const s = (wisCounty || '').replace(/^Co\.?\s*/i, '').trim();
  const map = {
    'carlow': 'Carlow', 'dublin': 'Dublin', 'kildare': 'Kildare', 'kilkenny': 'Kilkenny',
    'laois': 'Laois', 'longford': 'Longford', 'louth': 'Louth', 'meath': 'Meath',
    'offaly': 'Offaly', 'westmeath': 'Westmeath', 'wexford': 'Wexford', 'wicklow': 'Wicklow',
    'clare': 'Clare', 'cork': 'Cork', 'kerry': 'Kerry', 'limerick': 'Limerick',
    'tipperary': 'Tipperary', 'waterford': 'Waterford',
    'galway': 'Galway', 'leitrim': 'Leitrim', 'mayo': 'Mayo', 'roscommon': 'Roscommon', 'sligo': 'Sligo',
    'cavan': 'Cavan', 'donegal': 'Donegal', 'monaghan': 'Monaghan',
  };
  return map[s.toLowerCase()] || null;
}

// Eircode routing key → county (reliable, no network needed)
function eircodeToCounty(eircode) {
  const rk = (eircode || '').replace(/\s+/g, '').toUpperCase().substring(0, 3);
  const map = {
    // Dublin (D prefix + two non-D routing keys in Fingal)
    D01:'Dublin',D02:'Dublin',D03:'Dublin',D04:'Dublin',D05:'Dublin',
    D06:'Dublin',D6W:'Dublin',D07:'Dublin',D08:'Dublin',D09:'Dublin',
    D10:'Dublin',D11:'Dublin',D12:'Dublin',D13:'Dublin',D14:'Dublin',
    D15:'Dublin',D16:'Dublin',D17:'Dublin',D18:'Dublin',D20:'Dublin',
    D22:'Dublin',D24:'Dublin',
    K32:'Dublin',K36:'Dublin',
    // Meath
    K34:'Meath',K45:'Meath',K56:'Meath',K67:'Meath',K78:'Meath',
    // Louth
    A91:'Louth',
    // Kildare
    A41:'Kildare',A42:'Kildare',A45:'Kildare',N32:'Kildare',
    // Wicklow
    A63:'Wicklow',A67:'Wicklow',A75:'Wicklow',A81:'Wicklow',A94:'Wicklow',A98:'Wicklow',W23:'Wicklow',
    // Carlow
    A82:'Carlow',A83:'Carlow',R35:'Carlow',W34:'Carlow',
    // Kilkenny
    A84:'Kilkenny',R32:'Kilkenny',R95:'Kilkenny',
    // Laois
    A85:'Laois',R45:'Laois',R51:'Laois',R56:'Laois',
    // Offaly
    A86:'Offaly',H62:'Offaly',H65:'Offaly',
    // Longford
    N37:'Longford',N39:'Longford',N41:'Longford',
    // Westmeath
    H53:'Westmeath',H54:'Westmeath',N45:'Westmeath',
    // Wexford
    N25:'Wexford',W12:'Wexford',Y14:'Wexford',Y21:'Wexford',Y25:'Wexford',Y34:'Wexford',Y35:'Wexford',
    // Waterford
    W91:'Waterford',X35:'Waterford',X42:'Waterford',X91:'Waterford',
    // Cork
    E21:'Cork',E25:'Cork',E32:'Cork',E34:'Cork',E41:'Cork',E45:'Cork',E53:'Cork',
    P12:'Cork',P14:'Cork',P17:'Cork',P24:'Cork',P25:'Cork',P31:'Cork',P32:'Cork',
    P43:'Cork',P47:'Cork',P51:'Cork',P56:'Cork',P61:'Cork',P67:'Cork',
    P72:'Cork',P75:'Cork',P81:'Cork',P85:'Cork',
    T12:'Cork',T23:'Cork',T34:'Cork',T45:'Cork',T56:'Cork',
    // Tipperary
    E91:'Tipperary',P36:'Tipperary',R14:'Tipperary',R21:'Tipperary',R25:'Tipperary',R93:'Tipperary',N91:'Tipperary',
    // Kerry
    L56:'Kerry',L65:'Kerry',L75:'Kerry',L93:'Kerry',
    V14:'Kerry',V15:'Kerry',V22:'Kerry',V23:'Kerry',V31:'Kerry',V35:'Kerry',
    V42:'Kerry',V56:'Kerry',V65:'Kerry',V92:'Kerry',V93:'Kerry',V94:'Kerry',
    // Limerick
    L34:'Limerick',L35:'Limerick',L36:'Limerick',L45:'Limerick',
    // Clare
    F52:'Clare',F56:'Clare',F92:'Clare',L27:'Clare',
    // Galway
    F31:'Galway',F35:'Galway',F42:'Galway',F45:'Galway',F91:'Galway',F93:'Galway',F94:'Galway',
    H12:'Galway',H45:'Galway',H71:'Galway',H91:'Galway',
    // Mayo
    F12:'Mayo',F23:'Mayo',F26:'Mayo',F28:'Mayo',
    // Sligo
    B79:'Sligo',
    // Leitrim
    H31:'Leitrim',N11:'Leitrim',
    // Roscommon
    B78:'Roscommon',G72:'Roscommon',H14:'Roscommon',H16:'Roscommon',H23:'Roscommon',N17:'Roscommon',
    // Cavan
    B65:'Cavan',B73:'Cavan',C47:'Cavan',
    // Monaghan
    H18:'Monaghan',
    // Donegal
    C15:'Donegal',C67:'Donegal',
  };
  return map[rk] || null;
}

// ── ADMIN UI INJECTION ──
function renderWisPanel() {
  const el = document.getElementById('wis-admin-panel');
  if (!el) return;
  const results = quiz.wisResults;
  if (!results) { el.innerHTML = ''; return; }
  const served = results.filter(r => r.served === true);
  const notServed = results.filter(r => r.served === false);
  const errored = results.filter(r => r.served === null);
  el.innerHTML =
    '<div class="wis-panel-title">WIS live coverage for <strong>' + esc(quiz.eircode) + '</strong></div>' +
    '<div class="wis-grid">' +
    results.map(r => {
      const cls = r.served === true ? 'wis-yes' : r.served === false ? 'wis-no' : 'wis-err';
      const icon = r.served === true ? '✓' : r.served === false ? '✗' : '?';
      const title = r.error ? r.error : (r.served ? 'Served' + (r.county ? ' · ' + r.county : '') : 'Not served');
      return '<span class="wis-tag ' + cls + '" title="' + esc(title) + '">' + icon + ' ' + esc(r.name) + '</span>';
    }).join('') +
    '</div>' +
    '<div class="wis-summary">' + served.length + ' served · ' + notServed.length + ' not served' + (errored.length ? ' · ' + errored.length + ' error (CORS?)' : '') + '</div>';
}

if (ADMIN_MODE) {
  (function() {
    const countyStep = document.querySelector('.qstep');
    const panel = document.createElement('div');
    panel.className = 'qstep wis-admin-step';
    panel.innerHTML =
      '<div class="slbl"><span class="snum admin-badge">A</span> Eircode live lookup <span class="admin-label">ADMIN</span></div>' +
      '<div class="wis-input-row">' +
      '  <input type="text" id="wis-eircode" class="wis-eircode-input" placeholder="e.g. D01, W12 DC90" maxlength="8" autocomplete="off" spellcheck="false">' +
      '  <button id="wis-lookup-btn" class="wis-btn">Check coverage</button>' +
      '  <button id="wis-clear-btn" class="wis-btn wis-btn-sec" style="display:none">Clear</button>' +
      '</div>' +
      '<div id="wis-admin-panel"></div>' +
      '<div class="chint" style="margin-top:6px">Queries all ' + WIS_PORTALS.length + ' WIS portals live. Requires CORS-disabled browser or proxy.</div>';
    countyStep.parentNode.insertBefore(panel, countyStep);

    document.getElementById('wis-lookup-btn').addEventListener('click', async function() {
      const raw = document.getElementById('wis-eircode').value.trim().toUpperCase();
      if (!raw) return;

      // Check sessionStorage cache first
      const cacheKey = 'wis_' + raw.replace(/\s+/g, '');
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          quiz.eircode = raw;
          quiz.wisResults = JSON.parse(cached);
          renderWisPanel();
          document.getElementById('wis-clear-btn').style.display = '';
          const mapped = eircodeToCounty(raw) || wisCountyToAppCounty((quiz.wisResults).map(r => r.county).find(Boolean));
          if (mapped) {
            const sel = document.getElementById('csel');
            if (sel && sel.value !== mapped) { sel.value = mapped; sel.dispatchEvent(new Event('change')); return; }
          }
          render();
          return;
        }
      } catch(e) {}

      quiz.eircode = raw;
      quiz.wisResults = null;
      renderWisPanel();
      this.disabled = true;
      this.textContent = 'Checking…';
      document.getElementById('wis-clear-btn').style.display = 'none';

      // Filter portals to only those serving the detected county
      let portalsToQuery = WIS_PORTALS;
      const county = eircodeToCounty(raw);
      if (county) {
        await new Promise(resolve => loadCounty(county, resolve));
        const countyData = (window.__COUNTY_CACHE__ || {})[county];
        if (countyData) {
          const countyNames = new Set((countyData.companies || []).map(c => c.name));
          const filtered = WIS_PORTALS.filter(p => countyNames.has(p.name));
          if (filtered.length) portalsToQuery = filtered;
        }
      }

      try {
        quiz.wisResults = await checkWisCoverage(raw, portalsToQuery);
        try { sessionStorage.setItem(cacheKey, JSON.stringify(quiz.wisResults)); } catch(e) {}
      } catch(e) {
        quiz.wisResults = portalsToQuery.map(p => ({ ...p, served: null, error: e.message }));
      }
      this.disabled = false;
      this.textContent = 'Check coverage';
      document.getElementById('wis-clear-btn').style.display = '';
      renderWisPanel();
      // Auto-select county: routing key first (reliable), WIS response as fallback
      const fromEircode = eircodeToCounty(raw);
      const wisCounty = (quiz.wisResults || []).map(r => r.county).find(Boolean);
      const mapped = fromEircode || wisCountyToAppCounty(wisCounty);
      if (mapped) {
        const sel = document.getElementById('csel');
        if (sel && sel.value !== mapped) {
          sel.value = mapped;
          sel.dispatchEvent(new Event('change'));
          return;
        }
      }
      render();
    });

    document.getElementById('wis-clear-btn').addEventListener('click', function() {
      quiz.eircode = '';
      quiz.wisResults = null;
      quiz.eircodeOnly = false;
      document.getElementById('wis-eircode').value = '';
      this.style.display = 'none';
      renderWisPanel();
      render();
    });

    document.getElementById('wis-eircode').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') document.getElementById('wis-lookup-btn').click();
    });
  })();
}

function confBadge(c) {
  if (!TESTING_MODE) return '';
  if (!quiz.county || !c.countyData[quiz.county]) return '';
  const conf = c.countyData[quiz.county].confidence;
  if (!conf || conf.level === 'none') return '';
  const cls = conf.level === 'high' ? 'conf-hi' : conf.level === 'medium' ? 'conf-med' : 'conf-lo';
  return '<span class="' + cls + '">' + esc(conf.reason || conf.level) + '</span>';
}

function wisBadge(c) {
  if (!quiz.eircode || !quiz.wisResults) return '';
  const result = quiz.wisResults.find(r => r.name === c.name);
  if (!result || result.served !== true) return '';
  return '<span class="conf-hi" style="margin-left:8px;vertical-align:middle">Eircode coverage confirmed</span>';
}

// ── RENDER CARDS ──
function chips(bins) {
  return (bins || []).map(b => '<span class="bchip' + (quiz.bins.includes(b) ? ' m' : '') + '">' + (BIN_LABEL[b] || b) + '</span>').join('');
}

function formatPrice(p) {
  if (!p || p <= 0) return 'Contact';
  return '\u20ac' + p.toFixed(2);
}

function formatAllowance(plan) {
  const kg = plan.waste_allowance_kg;
  if (kg == null) return '\u2014';
  const period = plan.waste_allowance_period || 'monthly';
  if (period === 'per_lift') return kg + 'kg/lift';
  if (period === '6_monthly' || period === 'half_yearly') return kg + 'kg/6mo';
  if (period === 'annual' || period === 'yearly') return Math.round(kg / 12) + 'kg/mo';
  return kg + 'kg/mo';
}

function formatExcess(plan) {
  const r = plan.excess_charge_per_kg;
  if (r == null || r <= 0) return '\u2014';
  return '\u20ac' + r.toFixed(2) + '/kg';
}

function cardHtml(c, idx, topScore) {
  const isRec = score(c) === topScore && c.hasPricing && topScore > 0;
  const inCmp = compareList.includes(c.name);
  const cmpFull = compareList.length >= 3 && !inCmp;
  const cid = 'card-' + idx;

  const plans = getFilteredPlans(c);
  const planEsts = plans.map(p => ({ p, est: calcPlanCost(p) })).filter(x => x.est);
  planEsts.sort((a, b) => a.est.total - b.est.total);

  const cheapest = planEsts.length ? planEsts[0].est : null;
  const allLitre = !cheapest && plans.length > 0 && plans.every(p => isLitrePlan(p));
  const noestTip = allLitre
    ? 'This provider sizes plans by bin volume (litres) rather than weight. Contact them to find which bin size suits your household.'
    : 'Your usage may exceed this plan\'s allowance and the excess charge rate isn\'t published. Contact the provider for a full quote.';

  // Header price
  const allPayg = plans.length > 0 && plans.every(p => p.type === 'pay_by_lift' || p.type === 'pay_by_weight');
  const hasCountyPlans = plans.length > 0;
  let priceHtml, estHtml = '';
  if (cheapest) {
    priceHtml = '<div class="pfl">Est. for you</div><div class="pfv">\u20ac' + cheapest.total.toFixed(2) + '<span>/mo</span></div>';
    estHtml = '<div class="pest-wrap">';
    if (cheapest.overLimit) {
      estHtml += '<div class="pest-over">\u26a0\ufe0f ' + cheapest.excessKg + 'kg over ' + (cheapest.allowance != null ? cheapest.allowance.toFixed(0) : '') + 'kg limit</div>';
    } else if (cheapest.allowance != null && cheapest.allowance < 900) {
      estHtml += '<div class="pest-ok">\u2714 Within ' + cheapest.allowance.toFixed(0) + 'kg allowance</div>';
    }
    estHtml += '</div>';
  } else if (allPayg) {
    priceHtml = '<div class="pfl">Plan type</div><div class="pfv" style="font-size:13px">Pay as you go</div>';
  } else if (hasCountyPlans) {
    const countyMin = plans.reduce((m, p) => p.price && p.price > 0 ? Math.min(m, p.price) : m, Infinity);
    const fromPrice = countyMin < Infinity ? countyMin : 0;
    priceHtml = fromPrice > 0
      ? '<div class="pfl">From</div><div class="pfv">\u20ac' + fromPrice.toFixed(2) + '<span>/mo</span></div>'
      : '<div class="pfl">Pricing</div><div class="pfv" style="font-size:14px">On request</div>';
  } else {
    priceHtml = '<div class="pfl">Pricing</div><div class="pfv" style="font-size:14px">On request</div>';
  }

  const card = document.createElement('div');
  const noCountyPricing = !c.hasPricing || plans.length === 0;
  card.className = 'ccard' + (isRec ? ' rec' : '') + (noCountyPricing ? ' nop' : '');
  card.id = cid;
  card.style.animationDelay = (idx * 0.035) + 's';

  const web = c.website ? c.website.replace(/^https?:\/\//, '').replace(/\/$/, '') : '';
  const sourceUrl = c.website || '';
  const svcNotes = quiz.county && c.countyData[quiz.county] ? c.countyData[quiz.county].service_notes : '';

  card.innerHTML =
    '<div class="chdr" data-cid="' + cid + '">'
    + '<div class="chl">'
    + '<div class="cion" style="background:' + (c.website ? '#f0f0ee' : c.color) + ';padding:' + (c.website ? '6px' : '0') + '">' + logoIcon(c, 30) + '</div>'
    + '<div>'
    + '<div class="cname">' + esc(c.name)
    + (isRec ? '<span class="rbadge">\u2b50 Best match</span>' : '')
    + (noCountyPricing ? '<span class="npbadge">\u{1F4DE} Contact for pricing</span>' : '')
    + wisBadge(c)
    + '</div>'
    + '<div class="ccov"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>'
    + esc(c.coverage) + ' ' + confBadge(c) + '</div>'
    + '</div></div>'
    + '<div class="chr2"><div class="pf' + (!cheapest && !noCountyPricing ? ' pf-noest' : '') + '">' + priceHtml + estHtml + (!cheapest && !noCountyPricing ? '<div class="noest-tip">' + noestTip + '</div>' : '') + '</div>'
    + '<button class="tico" id="' + cid + '-btn" aria-expanded="false" aria-controls="' + cid + '-panel" aria-label="Show details for ' + esc(c.name) + '"><svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button>'
    + '</div></div>'
    + '<div class="pwrap" id="' + cid + '-panel">'
    + (plans.length ? '<div class="ptab-wrap"><table class="ptab"><thead><tr><th>Plan</th><th>Price</th><th>' + (allPayg ? 'Rate info' : 'Est. for you') + '</th><th>Bins</th><th>Allowance</th><th>Excess</th></tr></thead><tbody>'
      + [...plans].sort((a, b) => {
        const ea = calcPlanCost(a), eb = calcPlanCost(b);
        if (ea && eb) return ea.total - eb.total;
        if (ea) return -1; if (eb) return 1;
        return 0;
      }).map((p, pi) => {
        const est = calcPlanCost(p);
        const pType = p.type || 'monthly';
        const isPayg = pType === 'pay_by_lift' || pType === 'pay_by_weight';
        const isBest = !isPayg && plans.length > 1 && planEsts.length && planEsts[0].p === p;
        let estCell;
        if (isPayg) {
          // Build informational cell — no estimated total
          const lines = [];
          const liftWaste = p.per_lift_waste || (p.price_frequency === 'per_lift' ? p.price : null);
          const liftRec   = p.per_lift_recycling || null;
          const liftComp  = p.per_lift_compost   || null;
          const liftGlas  = p.per_lift_glass      || null;
          // Service charge
          let svcMonthly = null;
          if (p.service_charge) {
            const scFreq = p.service_charge_frequency || 'monthly';
            if (scFreq === 'monthly') svcMonthly = p.service_charge;
            else if (scFreq === 'half_yearly' || scFreq === '6_monthly') svcMonthly = p.service_charge / 6;
            else if (scFreq === 'annual' || scFreq === 'yearly') svcMonthly = p.service_charge / 12;
          } else if (p.price_frequency === 'monthly' || p.price_frequency === 'monthly_service_charge') {
            svcMonthly = p.price;
          }
          if (svcMonthly)  lines.push('\u20ac' + svcMonthly.toFixed(2) + '/mo service charge');
          if (liftWaste)   lines.push('\u20ac' + liftWaste.toFixed(2) + '/waste lift');
          if (liftRec)     lines.push('\u20ac' + liftRec.toFixed(2)   + '/recycling lift');
          if (liftComp)    lines.push('\u20ac' + liftComp.toFixed(2)  + '/brown lift');
          if (liftGlas)    lines.push('\u20ac' + liftGlas.toFixed(2)  + '/glass lift');
          if (p.waste_allowance_kg && p.waste_allowance_period === 'per_lift')
            lines.push(p.waste_allowance_kg + 'kg included/lift');
          if (p.excess_charge_per_kg)
            lines.push('\u20ac' + p.excess_charge_per_kg.toFixed(2) + '/kg excess');
          if (p.per_kg_waste)
            lines.push('\u20ac' + p.per_kg_waste.toFixed(2) + '/kg waste');
          if (p.per_kg_recycling)
            lines.push('\u20ac' + p.per_kg_recycling.toFixed(2) + '/kg recycling');
          if (p.per_kg_compost)
            lines.push('\u20ac' + p.per_kg_compost.toFixed(2) + '/kg brown');
          estCell = '<td class="td-est td-rate" style="font-size:10.5px;color:#888;line-height:1.6">'
            + (lines.length ? lines.join('<br>') : '<span class="est-na">See provider</span>')
            + '</td>';
        } else if (est) {
          estCell = '<td class="td-est"><span class="est-val">\u20ac' + est.total.toFixed(2) + '</span><span class="per">/mo</span>';
          if (est.overLimit) {
            estCell += '<br><span class="est-over">\u26a0\ufe0f ' + est.excessKg + 'kg over ' + (est.allowance != null ? est.allowance.toFixed(0) : '') + 'kg</span>';
          } else if (est.allowance != null && est.allowance < 900) {
            estCell += '<br><span class="est-ok">\u2714 within ' + est.allowance.toFixed(0) + 'kg</span>';
          }
          estCell += '</td>';
        } else {
          estCell = isLitrePlan(p)
            ? '<td class="td-est"><span class="est-na" title="Volume-based plan — no kg estimate available">By bin size</span></td>'
            : '<td class="td-est"><span class="est-na">n/a</span></td>';
        }
        const planNote = cleanNote(p.notes);
        return '<tr' + (isBest ? ' class="plan-best"' : '') + '>'
          + '<td><div class="pn">' + esc(p.name) + (isBest ? '<span class="best-pill">\u2605 Best for you</span>' : '')
          + (planNote ? '<span class="plan-tip" data-tip="' + esc(planNote) + '">i</span>' : '') + '</div>'
          + (p.household_size ? '<div class="pnt">' + esc(p.household_size) + '</div>' : '')
          + '</td>'
          + '<td class="pc">' + formatPrice(p.price) + '<br><span class="per">/' + (p.price_frequency || 'month').replace(/_/g, ' ') + '</span></td>'
          + estCell
          + '<td><div class="bchips">' + chips(p.bins_included) + '</div></td>'
          + '<td style="font-size:12px">' + formatAllowance(p) + '</td>'
          + '<td style="font-size:12px">' + formatExcess(p) + '</td>'
          + '</tr>';
      }).join('')
      + '</tbody></table></div>' : '<div style="padding:12px;color:#aaa;font-size:13px">No plan details available for this county. Contact provider directly.</div>')
    + (() => {
        const cleaned = cleanNote(svcNotes);
        if (!cleaned) return '';
        return '<div class="irow">' + esc(cleaned) + '</div>';
      })()
    + '<div style="margin-top:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">'
    + (c.phone ? '<a href="tel:' + esc(c.phone) + '" class="call-btn"><svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg> Call</a>' : '')
    + (web ? '<a href="' + sourceUrl + '" target="_blank" rel="noopener" class="visit-btn"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg> Visit website</a>' : '')
    + '</div>'
    + (c.trustpilot ? '<div style="margin-top:8px">' + tpBadge(c.trustpilot) + '</div>' : '')
    + (c.hasPricing ? '<button class="cmpbtn' + (inCmp ? ' added' : '') + '"'
      + (cmpFull ? ' disabled' : '') + ' data-name="' + esc(c.name) + '">'
      + (inCmp ? '\u2713 Added' : cmpFull ? 'Max 3 reached' : '+ Compare') + '</button>' : '')
    + '<button class="report-btn" data-company="' + esc(c.name) + '" onclick="reportIssue(this)">&#9872; Report a pricing issue</button>'
    + '</div>';

  // Event listeners
  card.querySelector('.chdr').addEventListener('click', () => {
    const open = card.classList.toggle('open');
    const btn = card.querySelector('.tico');
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', (open ? 'Hide' : 'Show') + ' details for ' + c.name);
  });
  const cmpBtn = card.querySelector('.cmpbtn');
  if (cmpBtn && !cmpFull) cmpBtn.addEventListener('click', e => { e.stopPropagation(); addCmp(c.name); });

  return card;
}

function esc(s) {
  if (!s) return '';
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function cleanNote(txt) {
  if (!txt) return '';
  return txt
    .replace(/Service confirmed for[^.]*\.\s*/gi, '')
    .replace(/Pricing confirmed[^.]*\.\s*/gi, '')
    .replace(/Prices? (confirmed|retrieved|verified|found) (via|from|on)[^.]*\.\s*/gi, '')
    .replace(/Uses WIS platform[^.]*\.\s*/gi, '')
    .replace(/WIS portal[^.]*\.\s*/gi, '')
    .replace(/Online signup[^.]*\.\s*/gi, '')
    .replace(/price_group_ids[^.]*\.\s*/gi, '')
    .replace(/Most popular( plan)?\.?\s*/gi, '')
    .replace(/For (larger|smaller) (households?|families)\.?\s*/gi, '')
    .replace(/Lightest plan\s*[—-]\s*/gi, '')
    .replace(/Ideal for (small |large )?households?[^.]*\.\s*/gi, '')
    .replace(/Best for[^.]*households?[^.]*\.\s*/gi, '')
    .replace(/Suited to (larger|smaller) households?\.?\s*/gi, '')
    .replace(/^\*\s+/gm, '')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

// ── MAIN RENDER ──
function render() {
  try { _render(); } catch(e) { console.error('Render error:', e); document.getElementById('cg').innerHTML = '<div style="color:red;padding:20px">Error: ' + e.message + '<br>' + e.stack + '</div>'; }
}
function _render() {
  let data = quiz.county ? companies.filter(c => c.counties.includes(quiz.county)) : [];
  if (aSort === 'relevance') data.sort((a, b) => score(b) - score(a));
  else if (aSort === 'alpha') data.sort((a, b) => a.name.localeCompare(b.name));
  else if (aSort === 'price-asc') data.sort((a, b) => (calcBestCost(a)?.total || 999) - (calcBestCost(b)?.total || 999));
  else if (aSort === 'price-desc') data.sort((a, b) => (calcBestCost(b)?.total || 0) - (calcBestCost(a)?.total || 0));

  const grid = document.getElementById('cg');
  const nr = document.getElementById('nr');
  const ncm = document.getElementById('ncm');

  const cmpHint = document.getElementById('cmpHint');
  if (!quiz.county) { ncm.classList.add('show'); cmpHint.classList.remove('show'); grid.innerHTML = ''; nr.classList.remove('show'); return; }
  ncm.classList.remove('show');
  cmpHint.classList.add('show');
  // Filter to companies that offer ALL selected bins — check county-specific plans only
  data = data.filter(c => {
    const countyPlans = getFilteredPlans(c);
    if (!countyPlans.length) return true; // no pricing data, keep (show as contact for pricing)
    const countyBins = new Set(countyPlans.flatMap(p => p.bins_included || []));
    return quiz.bins.every(b => countyBins.has(b));
  });
  // When a specific plan type is selected, hide companies with no matching plans
  // But keep companies that don't have pricing for this specific county (they show as "contact for pricing")
  if (quiz.planType !== 'all') {
    data = data.filter(c => {
      const hasPlans = getFilteredPlans(c).length > 0;
      if (hasPlans) return true;
      // Check if this company has pricing for the selected county specifically
      const cd = quiz.county && c.countyData[quiz.county];
      const hasPricingThisCounty = cd && cd.pricing_available;
      // Keep if no pricing in this county (show as "contact for pricing")
      return !hasPricingThisCounty;
    });
  }
  // Always remove companies WIS explicitly confirmed as NOT serving this eircode
  if (quiz.wisResults) {
    const notServedNames = new Set(quiz.wisResults.filter(r => r.served === false).map(r => r.name));
    data = data.filter(c => !notServedNames.has(c.name));
  }
  // Strict filter: keep only companies WIS explicitly confirmed as served
  if (quiz.eircodeOnly && quiz.wisResults) {
    const servedNames = new Set(quiz.wisResults.filter(r => r.served === true).map(r => r.name));
    data = data.filter(c => servedNames.has(c.name));
  }

  // Eircode filter toggle
  const filterBar = document.getElementById('eircode-filter-bar');
  if (filterBar) {
    if (quiz.wisResults && quiz.eircode) {
      const county = quiz.county || 'your county';
      filterBar.innerHTML = '<div class="slbl" style="margin:16px 0 8px">Company Filter <span class="plan-tip" data-tip="Some companies do not have the ability to check if your eircode is covered. For example, some ask customers to call them to check coverage. We\'ll never show companies in the list below unless they at least offer partial coverage of your county.">i</span></div>'
        + '<div class="bg" id="eircodeFilterGroup">'
        + '<label class="bo' + (!quiz.eircodeOnly ? ' sel' : '') + '">'
        + '<input type="radio" name="eircoverf" value="county"' + (!quiz.eircodeOnly ? ' checked' : '') + '>'
        + '<span class="bl">Companies that serve ' + esc(county) + '</span>'
        + '<span class="bs">Include companies that <i>may</i> cover your Eircode<br>(we\'ve excluded some companies that don\'t serve your eircode)</span>'
        + '</label>'
        + '<label class="bo' + (quiz.eircodeOnly ? ' sel' : '') + '">'
        + '<input type="radio" name="eircoverf" value="eircode"' + (quiz.eircodeOnly ? ' checked' : '') + '>'
        + '<span class="bl">Companies that definitely serve ' + esc(quiz.eircode) + '</span>'
        + '<span class="bs"><i>May</i> filter out some companies that cover your Eircode</span>'
        + '</label>'
        + '</div>';
      document.getElementById('eircodeFilterGroup').addEventListener('change', function(e) {
        if (!e.target.matches('input[name="eircoverf"]')) return;
        quiz.eircodeOnly = e.target.value === 'eircode';
        this.querySelectorAll('.bo').forEach(o => o.classList.toggle('sel', o.querySelector('input').checked));
        render();
      });
    } else {
      filterBar.innerHTML = '';
    }
  }

  if (!data.length) { grid.innerHTML = ''; nr.classList.add('show'); return; }
  nr.classList.remove('show');

  const topScore = Math.max(...data.map(c => score(c)));
  const priced = data.filter(c => c.hasPricing && getFilteredPlans(c).length > 0);
  const unpriced = data.filter(c => !priced.includes(c));

  // Update hint with accurate post-filter count
  const total = priced.length + unpriced.length;
  const hint = document.getElementById('chint');
  const eircodeLabel = quiz.eircode ? ' (' + quiz.eircode + ')' : '';
  hint.textContent = '\u2713 Found ' + total + ' ' + (total !== 1 ? 'companies' : 'company') + ' serving Co. ' + quiz.county + eircodeLabel;
  hint.className = 'chint found';

  grid.innerHTML = '';
  let idx = 0;
  if (priced.length) {
    const d1 = document.createElement('div');
    d1.className = 'sdiv';
    d1.innerHTML = '<div class="sdlbl">Pricing available \u2014 ' + priced.length + ' ' + (priced.length !== 1 ? 'companies' : 'company') + '</div>';
    grid.appendChild(d1);
    priced.forEach(c => grid.appendChild(cardHtml(c, idx++, topScore)));
  }
  if (unpriced.length) {
    const d2 = document.createElement('div');
    d2.className = 'sdiv';
    d2.innerHTML = '<div class="sdlbl">Contact for pricing \u2014 ' + unpriced.length + ' ' + (unpriced.length !== 1 ? 'companies' : 'company') + '</div>';
    grid.appendChild(d2);
    unpriced.forEach(c => grid.appendChild(cardHtml(c, idx++, topScore)));
  }
}

// ── COMPARE TRAY ──
function addCmp(name) {
  if (compareList.includes(name)) compareList = compareList.filter(n => n !== name);
  else if (compareList.length < 3) compareList.push(name);
  saveCompare();
  renderTray(); render();
  if (compareList.length > 0 && !trayOpen) openTray();
  if (compareList.length === 0) closeTray();
}

function openTray() {
  trayOpen = true;
  document.getElementById('ctray').classList.add('open');
  document.getElementById('trayTog').textContent = '\u25bc collapse';
  document.getElementById('pip').classList.remove('show');
  const bar = document.getElementById('ctrayBar');
  bar.setAttribute('aria-expanded', 'true');
  bar.setAttribute('aria-label', 'Compare tray \u2014 click to collapse');
  requestAnimationFrame(function() {
    var h = document.getElementById('ctray').offsetHeight;
    document.body.style.paddingBottom = (h + 16) + 'px';
  });
}

function updateTrayPadding() {
  if (trayOpen) {
    var h = document.getElementById('ctray').offsetHeight;
    document.body.style.paddingBottom = (h + 16) + 'px';
  }
}

function closeTray() {
  trayOpen = false;
  document.getElementById('ctray').classList.remove('open');
  document.getElementById('pip').classList.toggle('show', compareList.length > 0);
  document.body.style.paddingBottom = '';
  const bar = document.getElementById('ctrayBar');
  bar.setAttribute('aria-expanded', 'false');
  bar.setAttribute('aria-label', 'Compare tray \u2014 click to expand');
}

document.getElementById('ctrayBar').addEventListener('click', () => { if (trayOpen) closeTray(); else openTray(); });
document.getElementById('ctrayBar').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (trayOpen) closeTray(); else openTray(); }
});
document.getElementById('trayClr').addEventListener('click', e => { e.stopPropagation(); compareList = []; saveCompare(); renderTray(); render(); closeTray(); });
document.getElementById('pip').addEventListener('click', openTray);

function renderTray() {
  document.getElementById('pipcnt').textContent = compareList.length;
  const pipBtn = document.getElementById('pip');
  pipBtn.setAttribute('aria-label', 'Open compare tray, ' + compareList.length + ' provider' + (compareList.length !== 1 ? 's' : '') + ' selected');
  if (!trayOpen) pipBtn.classList.toggle('show', compareList.length > 0);

  // Update bar avatars
  const avEl = document.getElementById('trayAvatars');
  avEl.innerHTML = compareList.map(name => {
    const c = companies.find(x => x.name === name);
    return c ? '<div class="ctray-av" style="background:' + (c.website ? '#f0f0ee' : c.color) + ';padding:' + (c.website ? '3px' : '0') + '">' + logoIcon(c, 18) + '</div>' : '';
  }).join('');
  const kgEl = document.getElementById('trayKgNote');
  kgEl.textContent = compareList.length && quiz.kgBlack ? '\u00b7 ' + quiz.kgBlack + 'kg/mo' : '';

  const body = document.getElementById('trayBody');
  if (!compareList.length) {
    body.innerHTML = '<div class="ctray-hint"><div class="ctray-hint-icon">\u2696</div>Open a company card and click <strong>\u201c+ Compare\u201d</strong> to add it here. Up to 3 companies.</div>';
    return;
  }

  const allCosts = compareList.map(n => {
    const c = companies.find(x => x.name === n);
    return c ? calcBestCost(c) : null;
  });
  const validCosts = allCosts.filter(Boolean);
  const maxCost = validCosts.length ? Math.max(...validCosts.map(x => x.total)) : 1;
  const minCost = validCosts.length ? Math.min(...validCosts.map(x => x.total)) : 0;
  const allBins = ['general_waste', 'recycling', 'compost', 'glass'];

  const cols = compareList.map((name, i) => {
    const c = companies.find(x => x.name === name);
    if (!c) return '';
    const cost = allCosts[i];
    const isCheap = cost && cost.total === minCost && compareList.length > 1;
    const barW = cost ? Math.round((cost.total / maxCost) * 100) : 0;
    const col = c.color || 'var(--g)';

    let costSection = '<div class="tcost-section">'
      + '<div class="tcost-lbl">Estimated monthly cost</div>';
    if (cost) {
      costSection += '<div class="tcost" style="color:' + col + '">\u20ac' + cost.total.toFixed(2) + '<span>/mo</span></div>'
        + (cost.planName ? '<div class="tplan-name">' + esc(cost.planName) + '</div>' : '')
        + '<div class="tbar-wrap"><div class="tbar" style="width:' + barW + '%;background:' + col + '"></div></div>'
        + '<div class="tcost-status ' + (cost.overLimit ? 'over' : 'ok') + '">'
        + (cost.overLimit ? '\u26a0\ufe0f Over allowance' : '\u2714 Within allowance') + '</div>'
        + (isCheap ? '<div class="tbest-banner">\u{1F3C6} Best value</div>' : '');
    } else {
      costSection += '<div class="tno-cost">No estimate available</div>';
    }
    costSection += '</div>';

    const binsRow = '<div class="trow"><div class="trow-lbl">Bins included</div><div class="tbins">'
      + allBins.map(b => '<span class="tbin ' + (c.binsOffered.includes(b) ? 'y' : 'n') + '">' + (BIN_LABEL[b] || b) + '</span>').join('')
      + '</div></div>';

    const actions = '<div class="trow-actions">'
      + (c.phone ? '<a class="tact tact-phone" href="tel:' + c.phone + '">\ud83d\udcde ' + esc(c.phone) + '</a>' : '')
      + (c.website ? '<a class="tact" href="' + esc(c.website) + '" target="_blank" rel="noopener">Visit website \u2192</a>' : '')
      + '</div>';

    const tpHtml = c.trustpilot ? '<div style="margin:6px 12px 0">' + tpBadge(c.trustpilot) + '</div>' : '';
    return '<div class="tcol' + (isCheap ? ' tcol-winner' : '') + '">'
      + '<div class="tcol-accent" style="background:' + col + '"></div>'
      + '<div class="tcol-hdr">'
      + '<div class="tcol-icon" style="background:' + (c.website ? '#f0f0ee' : col) + ';padding:' + (c.website ? '4px' : '0') + '">' + logoIcon(c, 26) + '</div>'
      + '<span class="tcol-name">' + esc(c.name) + '</span>'
      + '<button class="tcol-rm" data-rm="' + esc(c.name) + '" aria-label="Remove ' + esc(c.name) + ' from comparison">&times;</button>'
      + '</div>'
      + tpHtml
      + costSection
      + binsRow
      + '<div class="trow"><div class="trow-lbl">Collection</div><div class="trow-val">' + esc(c.freq || 'Fortnightly') + '</div></div>'
      + '<div class="trow"><div class="trow-lbl">Coverage</div><div class="trow-val" style="font-size:12px">' + esc(c.coverage) + '</div></div>'
      + actions
      + '</div>';
  }).join('');

  body.innerHTML = '<div class="ctray-cols">' + cols + '</div>';
  body.querySelectorAll('.tcol-rm').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); addCmp(btn.dataset.rm); });
  });
  requestAnimationFrame(updateTrayPadding);
}

// ── PLAN TIP TOOLTIP ──
(function() {
  const tip = document.getElementById('ptip');
  let tipSource = null;

  function showTip(text, x, y) {
    tip.textContent = text;
    tip.classList.add('show');
    const pad = 12;
    const tw = tip.offsetWidth || 220;
    const th = tip.offsetHeight || 40;
    if (x + tw + pad > window.innerWidth) x = Math.max(pad, x - tw - pad * 2);
    if (y < pad) y = pad;
    if (y + th + pad > window.innerHeight) y = window.innerHeight - th - pad;
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }

  // Mouse: hover to show
  document.addEventListener('mouseover', function(e) {
    const el = e.target.closest('.plan-tip');
    if (!el) return;
    tip.textContent = el.dataset.tip || '';
    tip.classList.add('show');
    positionTip(e);
  });
  document.addEventListener('mousemove', function(e) {
    if (!tip.classList.contains('show')) return;
    if (!e.target.closest('.plan-tip')) { tip.classList.remove('show'); return; }
    positionTip(e);
  });
  document.addEventListener('mouseout', function(e) {
    if (!e.target.closest('.plan-tip')) return;
    tip.classList.remove('show');
  });

  // Touch/click: tap to toggle tooltip (mobile fallback)
  document.addEventListener('click', function(e) {
    const el = e.target.closest('.plan-tip');
    if (!el) {
      if (tip.classList.contains('show') && tipSource) {
        tip.classList.remove('show');
        tipSource = null;
      }
      return;
    }
    e.stopPropagation();
    if (tipSource === el && tip.classList.contains('show')) {
      tip.classList.remove('show');
      tipSource = null;
      return;
    }
    tip.textContent = el.dataset.tip || '';
    tip.classList.add('show');
    tipSource = el;
    positionTipFromElement(el);
  });
  function positionTip(e) {
    const pad = 12;
    let x = e.clientX + pad;
    let y = e.clientY - tip.offsetHeight / 2;
    if (x + tip.offsetWidth + pad > window.innerWidth) x = e.clientX - tip.offsetWidth - pad;
    if (y < pad) y = pad;
    if (y + tip.offsetHeight + pad > window.innerHeight) y = window.innerHeight - tip.offsetHeight - pad;
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }
  function positionTipFromElement(el) {
    const pad = 8;
    const rect = el.getBoundingClientRect();
    // Measure off-screen to get actual dimensions
    tip.style.left = '-9999px';
    tip.style.top = '0px';
    const tipW = tip.offsetWidth;
    const tipH = tip.offsetHeight;
    // Center horizontally on the icon, prefer below, fall back to above
    let x = rect.left + rect.width / 2 - tipW / 2;
    let y = rect.bottom + pad;
    if (y + tipH + pad > window.innerHeight) y = rect.top - tipH - pad;
    x = Math.max(pad, Math.min(x, window.innerWidth - tipW - pad));
    tip.style.left = x + 'px';
    tip.style.top = y + 'px';
  }
})();

// ── INIT ──
(function init() {
  document.getElementById('hdrPlans').textContent = '400+';
  document.getElementById('hdrCos').textContent = '50+';
  const footCnt = document.getElementById('footCnt'); if (footCnt) footCnt.textContent = '50+';
  quiz.kgBlack = getAvgKg(1);
  updateSlider();
  render();
  // Restore compare tray state from localStorage
  if (compareList.length > 0) {
    renderTray();
    document.getElementById('pip').classList.add('show');
  }
})();

// ── CONTACT TOGGLE ──
document.getElementById('contactToggle').addEventListener('click', function() {
  const section = document.getElementById('contactSection');
  const open = section.classList.toggle('open');
  this.setAttribute('aria-expanded', open);
});

document.querySelector('.cmp-hint-link').addEventListener('click', function(e) {
  e.preventDefault();
  var section = document.getElementById('contactSection');
  if (!section.classList.contains('open')) {
    section.classList.add('open');
    document.getElementById('contactToggle').setAttribute('aria-expanded', true);
  }
  section.scrollIntoView({ behavior: 'smooth' });
});

// Report pricing issue
function reportIssue(btn) {
  var company = btn.getAttribute('data-company');
  var section = document.getElementById('contactSection');
  if (!section.classList.contains('open')) {
    section.classList.add('open');
    document.getElementById('contactToggle').setAttribute('aria-expanded', true);
  }
  var msg = document.getElementById('contact-msg');
  msg.value = 'Issue with pricing for ' + company + ':\n\n';
  section.scrollIntoView({ behavior: 'smooth' });
  setTimeout(function() { msg.focus(); }, 400);
}

// Share functionality
function handleShare(e) {
  e.stopPropagation();
  const shareData = {
    title: "Ireland's Bin Collection Price Comparison",
    text: "Compare bin collection prices across all 26 Irish counties — find the cheapest in your area.",
    url: 'https://bincompare.ie'
  };
  // Use native share sheet on mobile if available
  if (navigator.share && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    navigator.share(shareData).catch(() => {});
  } else {
    // Desktop: toggle dropdown
    document.getElementById('shareDrop').classList.toggle('open');
  }
}
function copyLink(btn) {
  navigator.clipboard.writeText('https://bincompare.ie').then(() => {
    const span = btn.querySelector('span');
    span.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { span.textContent = 'Copy link'; btn.classList.remove('copied'); }, 2000);
  });
  document.getElementById('shareDrop').classList.remove('open');
}
// Close share dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.share-wrap')) {
    document.getElementById('shareDrop').classList.remove('open');
  }
});
