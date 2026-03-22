# Ireland Bin Price Comparison - Project Summary

> **⚠️ Built with AI:** This project was built entirely through conversation with [Claude](https://claude.ai) (Anthropic's AI assistant). The code was generated iteratively. It works, but it is far from perfect — approach it accordingly.

## What this is

A single-page website (`index.html`) that compares household bin collection prices across all 26 Irish counties. Users select their county, number of people, bins needed, and estimated waste weight - the site calculates their real monthly cost across every provider in their area.

## File structure

```
index.html                      ← The entire website (HTML + CSS + JS, single file)
waste_data.js                   ← All 26 county JSONs bundled into one JS variable
ireland_waste_collectors.csv    ← Master list of all companies from mywaste.ie
[county]_waste_pricing.json     ← 26 individual county pricing files (source of truth)
README.md                       ← This file
```

## Why waste_data.js exists

The browser can't reliably read local JSON files without a web server. `waste_data.js` bundles all 26 JSONs into a single `const COUNTY_DATA = {...}` variable loaded via `<script>` tag. This means the site works when opened directly from the filesystem (double-click `index.html`).

**Rebuild command** (run after ANY JSON change):

```bash
cd C:/Users/jamie/Desktop/Claude
echo "const COUNTY_DATA = {" > waste_data.js
first=true
for f in *_waste_pricing.json; do
  county=$(grep '"county"' "$f" | head -1 | sed 's/.*: "//;s/".*//' | tr '[:upper:]' '[:lower:]')
  if [ "$first" = true ]; then first=false; else echo "," >> waste_data.js; fi
  printf '"%s": ' "$county" >> waste_data.js
  cat "$f" >> waste_data.js
done
echo "};" >> waste_data.js
```

---

## How pricing data was collected

### Step 1: Get the company list from mywaste.ie

[mywaste.ie](https://www.mywaste.ie) is the official Irish government waste directory. It lists every licensed household waste collector per county.

- Go to mywaste.ie, search by county, and record every company name, phone number, and website
- This produced `ireland_waste_collectors.csv` with ~180 entries (companies appear once per county they serve)

### Step 2: Fetch pricing for each company

There are 4 main ways to get pricing, in order of reliability:

#### Method A: WIS Portal (best source - ~15 companies use this)

Many Irish waste companies use the **WIS (Waste Industry Services)** platform for customer signup. Each company has a portal at `[company].wis.ie/residential`.

**Known WIS portals:**
| Portal URL | Company |
|---|---|
| `oxigen.wis.ie` | Oxigen Environmental |
| `aesirl.wis.ie` | AES Recycling |
| `raywhelan.wis.ie` | Ray Whelan |
| `alliedrecycling.wis.ie` | Allied Recycling |
| `thorntons.wis.ie` | Thorntons Recycling |
| `advancedwaste.wis.ie` | Advanced Waste Recycling |
| `mulleadys.wis.ie` | Mulleadys |
| `citybin.wis.ie` | City Bin Co. |
| `qrl.wis.ie` | Quality Recycling Ltd |
| `countryclean.wis.ie` | Country Clean Recycling |
| `wiserbins.wis.ie` | Wiser Recycling |
| `donegalwasterecycle.wis.ie` | Donegal Waste & Recycle |

**How to use a WIS portal:**
1. Go to `[company].wis.ie/residential` or `[company].wis.ie/signup`
2. Enter an address or Eircode for the county you're checking
3. If the location is served, you'll see `price_group_ids` > 0 and a list of plans with full pricing
4. If it returns `price_group_ids=0` or "location not served", the company doesn't cover that area
5. Record: plan name, monthly price, waste allowance (kg), excess charge per kg, bins included, per-lift charges

**Important WIS notes:**
- The same company can have different prices per county/area - always test with a local address
- Try multiple addresses if one fails (up to 10 different addresses across the county)
- Some WIS portals go down periodically - try again later if unreachable

#### Method B: Panda API / Signup Flow (Panda Green only)

Panda has a custom signup flow at `panda.ie/household/`:
1. Enter an address on their signup page
2. It returns zone-specific pricing (e.g. "Dublin zone 3")
3. If it says "no available price options in your area", Panda doesn't serve that location
4. Panda serves: Dublin, Wicklow, Meath, Kildare, Cork, Galway, Limerick and some surrounding areas

#### Method C: Company website (direct scraping)

Some companies list pricing directly on their website:
- **Clean Ireland** (`cleanireland.ie`) - pricing page lists plans
- **KWD Recycling** (`kwd.ie`) - plans listed on site
- **Barna Recycling** (`barnarecycling.com`) - requires portal login, limited public info
- **McElvaney's** (`mcelvaneywaste.com/household-customers/wheel-bins/choose-a-service/`) - plans listed
- **Mulleadys** (`mulleadys.com/household.html`) - county-specific plans listed
- **Mr Binman** (`mrbinman.com`) - pricing on site
- **Logan Waste** (`loganwaste.ie`) - pricing on site
- **Moran Refuse** (`moranrefuse.ie`) - pricing on site
- **Ryan Brothers** (`ryanbros.ie`) - pricing on site

#### Method D: No pricing available

Many smaller/regional companies don't publish pricing online. For these:
- Set `pricing_available: false`
- Set `confidence.level: "none"`
- Include the reason (e.g. "No pricing published on website", "Phone-only contact")
- Leave `plans: []` empty
- Still include the company so users know it exists and can contact them

### Step 3: Record the data

Each county gets a JSON file with this structure:

```json
{
  "county": "Dublin",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites",
  "companies": [
    {
      "name": "Company Name",
      "phone": "01 234 5678",
      "website": "https://example.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from company website"
      },
      "address_used": "1 Main Street, Dublin 1",
      "service_notes": "Free first month. Fortnightly collection.",
      "plans": [
        {
          "name": "Standard 3-Bin",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Any additional details"
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "per_lift_waste": 14.00,
          "per_lift_recycling": 3.00,
          "per_lift_compost": 5.00,
          "per_lift_glass": null,
          "waste_allowance_kg": 40,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "notes": "Base fee + per lift charges"
        }
      ]
    }
  ]
}
```

### Confidence levels

| Level | Meaning | When to use |
|---|---|---|
| `high` | Price confirmed directly from company portal/API/website for this county | WIS portal with valid address, direct website scrape |
| `medium` | Price likely correct but not 100% confirmed | Website shows price but not county-specific, or secondary source |
| `low` | Price estimated from another county or partial info | Cross-county extrapolation, "from" prices only |
| `none` | No pricing found | Company exists but no public pricing |

### Plan types

| Type | Description | Key fields |
|---|---|---|
| `monthly` | Fixed monthly fee with weight allowance | `price`, `waste_allowance_kg`, `excess_charge_per_kg` |
| `pay_by_lift` | Base fee + per-lift charges | `price` (base), `per_lift_waste`, `per_lift_recycling`, `per_lift_compost` |
| `pay_by_weight` | Pure weight-based pricing | `price` (base), `excess_charge_per_kg` |

---

## Monthly price refresh process

### Quick version (for AI assistant)

> "Update all 26 county waste pricing JSON files in C:/Users/jamie/Desktop/Claude/. For each county, check every company listed in the JSON. For companies with pricing, re-fetch current prices from their source (WIS portal, website, or Panda signup). For companies without pricing, check if they've added online pricing. Update the `scraped_date` to today. Then rebuild waste_data.js."

### Detailed process

1. **For each county JSON file**, go through every company:

2. **Companies using WIS portals** (check the `confidence.reason` field for the portal URL):
   - Visit `[company].wis.ie/residential`
   - Enter the same address from `address_used` (or a new local address)
   - Compare plans and prices to what's in the JSON
   - Update any changed prices, new plans, or removed plans

3. **Panda Green** (serves ~8 counties):
   - Go to `panda.ie/household/` signup flow
   - Enter an address for each county Panda serves
   - Compare zone pricing to current JSON data

4. **Direct website companies** (Clean Ireland, KWD, McElvaney's, etc.):
   - Visit their website pricing page
   - Compare to current JSON data

5. **Companies without pricing**:
   - Quick check of their website for any new pricing pages
   - If still no pricing, leave as-is

6. **After all updates**:
   - Update `scraped_date` to today's date in each modified JSON
   - Rebuild `waste_data.js` using the bash command above

### Addresses to use per county

When checking WIS portals, use a central town address. The `address_used` field in each JSON shows what was previously used. Examples:
- Dublin: "Clondalkin, Dublin 22" or specific Dublin zones
- Cork: "37 Saint Patrick's Street, Cork"
- Louth: "1 Park Street, Dundalk, Co. Louth"
- Kildare: "Naas, Co. Kildare"

If a WIS portal says "location not served", try up to 10 different addresses across the county before concluding the company doesn't serve that area.

---

## Current data stats

- **57 unique companies** across all 26 counties
- **~92 company-county entries with pricing** (high/medium/low confidence)
- **~73 company-county entries without pricing** (confidence: none)
- **~81 high-confidence** price entries
- **~8 medium-confidence**, **~3 low-confidence**

### Companies with pricing (and their primary source)

| Company | Source method | Counties served |
|---|---|---|
| Oxigen Environmental | WIS portal (`oxigen.wis.ie`) | ~15 counties |
| AES Recycling | WIS portal (`aesirl.wis.ie`) | ~14 counties |
| Panda Green | Panda signup flow | ~8 counties |
| Ray Whelan | WIS portal (`raywhelan.wis.ie`) | ~4 counties |
| Allied Recycling | WIS portal (`alliedrecycling.wis.ie`) + website | ~3 counties |
| Thorntons Recycling | WIS portal (`thorntons.wis.ie`) + website | ~3 counties |
| Advanced Waste Recycling | WIS portal (`advancedwaste.wis.ie`) | ~2 counties |
| City Bin Co. | WIS portal (`citybin.wis.ie`) + website | ~2 counties |
| Quality Recycling Ltd | WIS portal (`qrl.wis.ie`) | ~3 counties |
| Country Clean Recycling | WIS portal (`countryclean.wis.ie`) | ~2 counties |
| Wiser Recycling | WIS portal (`wiserbins.wis.ie`) | ~2 counties |
| Donegal Waste & Recycle | WIS portal (`donegalwasterecycle.wis.ie`) | ~2 counties |
| Mulleadys | WIS portal + website (`mulleadys.com`) | ~4 counties |
| Clean Ireland Recycling | Company website | ~3 counties |
| KWD Recycling | Company website | ~2 counties |
| McElvaney's Waste | Company website | ~3 counties |
| Mr Binman | Company website | ~2 counties |
| Greyhound Household | Company website | Dublin + surrounding |
| Barna Recycling | Portal (limited) + phone | ~3 counties |
| Sharkey Waste | Company website | ~1 county |
| Logan Waste | Company website | ~1 county |
| Moran Refuse | Company website | ~1 county |
| Ryan Brothers | Company website | ~1 county |
| Wilton Waste | Company website (partial) | ~1 county |
| Blue Dolphin | Company website | ~1 county |
| Key Waste (KeyGreen) | Company website | ~1 county |

### Companies without any online pricing

These ~20 companies appear in the data but have no public pricing anywhere:
- Athchursail Aran Teo, Ballinrobe Waste, Bourke Waste Removal, CMS Waste Disposal, Clearer Waste Management, DM Waste, Doheny Wheelie Bins, Ecological Waste Management, Ecoway Waste Management, Greyhound Recycling (separate from Greyhound Household), Henry Kenny, Higgins Waste, Kollect (skip hire only), Loftus Recycling, Mahony's Environmental, McGrath Industrial Waste, Michael Healy, Sweeney Recycling, The Binman, Tommy's Waste, Walsh Waste

---

## Trustpilot scores

Stored in the `TRUSTPILOT` object in `index.html`. Only companies with actual Trustpilot profiles are included. Most smaller Irish waste companies don't have Trustpilot pages.

To update: Google "[company name] Trustpilot" and check for an `ie.trustpilot.com/review/[domain]` page.

---

## Key website features

- **Cost calculator**: Estimates real monthly cost based on household size and waste weight, especially important for pay-by-weight plans
- **Compare tool**: Side-by-side comparison of up to 3 providers
- **Bin filtering**: Only shows companies that offer the bins you need (per county)
- **Grey "no estimate" box**: When a plan's excess charge rate is unknown and user's weight exceeds the allowance, the estimate is greyed out with an explanation tooltip
- **Contact form**: Collapsible form at bottom for pricing errors/missing companies (via Formspree)
- **Testing mode**: Add `?testing=true` to URL to show confidence badges (verified/estimated/low confidence)
- **Mobile responsive**: Full mobile layout for screens under 700px
