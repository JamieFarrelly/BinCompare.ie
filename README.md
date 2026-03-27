# Ireland Bin Price Comparison

> **Built with AI:** This project was built entirely through conversation with [Claude](https://claude.ai) (Anthropic's AI assistant). The code was generated iteratively.

## What this is

A single-page website (`index.html`) that compares household bin collection prices across all 26 Irish counties. Users select their county, number of people, bins needed, and estimated waste weight - the site calculates their real monthly cost across every provider in their area.

## File structure

```
index.html                      <- The entire website (HTML + CSS + JS, single file)
waste_data.js                   <- All 26 county JSONs bundled into one JS variable
ireland_waste_collectors.csv    <- Master list of all companies from mywaste.ie
[county]_waste_pricing.json     <- 26 individual county pricing files (source of truth)
README.md                       <- This file
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

## JSON schema

Each county has a `[county]_waste_pricing.json` file. These are the source of truth for all pricing data.

### County-level fields

| Field | Type | Description |
|---|---|---|
| `county` | string | County name (e.g. "Dublin") |
| `source` | string | Description of data sources used |
| `companies` | array | List of waste collection companies |

### Company-level fields

| Field | Type | Description |
|---|---|---|
| `name` | string | Company name |
| `phone` | string/null | Contact phone number |
| `website` | string/null | Company website URL |
| `pricing_available` | boolean | Whether we have pricing data for this company in this county |
| `confidence` | object | `{ level, reason }` - how confident we are in the pricing |
| `address_used` | string/null | The address/eircode entered to retrieve pricing (null if no address was needed, or if no pricing was found) |
| `pricing_method` | string/null | How pricing was obtained (see below) |
| `service_notes` | string/null | Notes about the service (collection frequency, billing, etc.) |
| `plans` | array | List of plans (empty `[]` if `pricing_available` is false) |

### `pricing_method` values

| Value | Meaning | How to refresh |
|---|---|---|
| `"public_page"` | Pricing found on a public website page, no address needed | Visit the URL in `confidence.reason` and compare prices |
| `"wis_portal"` | Address entered into a `[company].wis.ie` portal | Go to the WIS portal URL in `confidence.reason`, enter the `address_used`, and compare plans |
| `"signup_flow"` | Address entered into a company signup/quote flow (e.g. Panda, Greyhound) | Go to the signup URL in `confidence.reason`, enter the `address_used`, and compare plans |
| `"county_dropdown"` | County selected from a dropdown (Barna Recycling portal) | Go to `cportal.barnarecycling.com/signup/signup.php`, select the county, and compare plans |
| `null` | No pricing found for this company in this county | Check if the company has added online pricing since last check |

### Plan-level fields

| Field | Type | Description |
|---|---|---|
| `name` | string | Plan name as shown by the company |
| `type` | string | `"monthly"`, `"pay_by_lift"`, or `"pay_by_weight"` |
| `price` | number | Base monthly price in euros |
| `price_frequency` | string | Usually `"monthly"` |
| `household_size` | string/null | Who the plan is for (e.g. "1-3 people", "5+ people") |
| `bins_included` | array | List of bins: `"general_waste"`, `"recycling"`, `"compost"`, `"glass"` |
| `waste_allowance_kg` | number/null | Kg of general waste included before excess charges |
| `waste_allowance_period` | string/null | `"monthly"`, `"6_monthly"`, `"quarterly"`, or `"per_lift"` |
| `waste_allowance_litres` | number/null | Volume-based allowance (used by QRL instead of kg) |
| `excess_charge_per_kg` | number/null | Cost per kg over the waste allowance |
| `recycling_allowance_kg` | number/null | Kg of recycling included (null = unlimited) |
| `recycling_excess_per_kg` | number/null | Cost per kg over recycling allowance |
| `compost_allowance_kg` | number/null | Kg of compost included (null = unlimited) |
| `compost_excess_per_kg` | number/null | Cost per kg over compost allowance |
| `per_lift_waste` | number | (pay_by_lift only) Cost per waste bin lift |
| `per_lift_recycling` | number | (pay_by_lift only) Cost per recycling bin lift |
| `per_lift_compost` | number | (pay_by_lift only) Cost per compost bin lift |
| `per_lift_glass` | number/null | (pay_by_lift only) Cost per glass bin lift |
| `per_kg_waste` | number | (pay_by_weight only) Cost per kg of general waste |
| `per_kg_recycling` | number | (pay_by_weight only) Cost per kg of recycling |
| `notes` | string/null | Any additional plan details |
| `scraped_date` | string | Date this plan's pricing was last verified (YYYY-MM-DD) |

### Confidence levels

| Level | Meaning |
|---|---|
| `high` | Price confirmed directly from company portal/website for this specific county |
| `medium` | Price likely correct but not county-specific (e.g. national pricing page, or nearby county used) |
| `low` | Partial info only (e.g. website says "from" prices, or plan details incomplete) |
| `none` | No pricing found - company exists but hasn't published prices online |

---

## How to refresh all prices (prompt for Claude)

Copy and paste one of these prompts into Claude to refresh the pricing data. The `pricing_method`, `address_used`, and `confidence.reason` fields on each company tell Claude exactly how to re-fetch that company's prices.

### Full refresh (all 26 counties)

> Go through every `*_waste_pricing.json` file in `C:/Users/jamie/Desktop/Claude/`. For each company in each county:
>
> 1. **If `pricing_method` is `"wis_portal"`**: Go to the WIS portal URL mentioned in `confidence.reason` (e.g. `oxigen.wis.ie/signup`). Enter the address from `address_used`. Compare the plans and prices shown to what's currently in the JSON. Update any that have changed.
>
> 2. **If `pricing_method` is `"signup_flow"`**: Go to the signup URL mentioned in `confidence.reason` (e.g. `panda.ie/household/`). Enter the address from `address_used`. Compare and update.
>
> 3. **If `pricing_method` is `"county_dropdown"`**: Go to `cportal.barnarecycling.com/signup/signup.php`. Select the county mentioned in `address_used`. Compare and update.
>
> 4. **If `pricing_method` is `"public_page"`**: Visit the URL mentioned in `confidence.reason`. Compare the pricing shown to the JSON. Update any that have changed.
>
> 5. **If `pricing_method` is `null`** (no pricing): Do a quick check of the company's website to see if they've added pricing since the last check. If they have, add it and set the appropriate `pricing_method`.
>
> After all updates, set `scraped_date` to today's date on every plan that was updated. Then rebuild `waste_data.js`.

### Single county refresh

> Refresh all waste pricing for **[COUNTY NAME]**. Read `[county]_waste_pricing.json` from `C:/Users/jamie/Desktop/Claude/`. For each company, use its `pricing_method`, `address_used`, and `confidence.reason` to re-fetch the current prices. Update any prices that have changed, add any new plans, remove any discontinued plans. Set `scraped_date` to today on every plan that was updated. Then rebuild `waste_data.js`.

### Single company refresh (across all counties)

> Refresh pricing for **[COMPANY NAME]** across all counties where it appears. Search all `*_waste_pricing.json` files for this company. For each entry, re-fetch prices using the method described in `pricing_method` and `confidence.reason`. Update all changed prices. Set `scraped_date` to today on every plan that was updated. Then rebuild `waste_data.js`.

---

## How pricing data was originally collected

### Step 1: Get the company list from mywaste.ie

[mywaste.ie](https://www.mywaste.ie) is the official Irish government waste directory. It lists every licensed household waste collector per county.

- Search by county and record every company name, phone number, and website
- This produced `ireland_waste_collectors.csv` with ~180 entries (companies appear once per county they serve)

### Step 2: Fetch pricing for each company

There are 4 methods, each corresponding to a `pricing_method` value:

#### `"wis_portal"` - WIS Portal (most common for large operators)

Many Irish waste companies use the **WIS (Waste Industry Services)** platform for customer signup. Each company has a portal at `[company].wis.ie/signup`.

**Known WIS portals:**
| Portal URL | Company |
|---|---|
| `oxigen.wis.ie` | Oxigen Environmental |
| `aesirl.wis.ie` | AES Recycling |
| `raywhelan.wis.ie` | Ray Whelan |
| `alliedrecycling.wis.ie` | Allied Recycling |
| `thorntons.wis.ie` | Thorntons Recycling |
| `mulleadys.wis.ie` | Mulleadys |
| `qrl.wis.ie` | Quality Recycling Ltd |
| `countryclean.wis.ie` | Country Clean Recycling |
| `wiserbins.wis.ie` | Wiser Recycling |
| `donegalwasterecycle.wis.ie` | Donegal Waste & Recycle |

**How to use a WIS portal:**
1. Go to `[company].wis.ie/signup`
2. Enter an address or Eircode for the county you're checking
3. If the location is served, you'll see `price_group_ids` > 0 and a list of plans with full pricing
4. If it returns `price_group_ids=0` or "location not served", the company doesn't cover that area
5. Record: plan name, monthly price, waste allowance (kg), excess charge per kg, bins included

**Important:**
- The same company can have different prices per county/area - always test with a local address
- Try multiple addresses if one fails (up to 10 different addresses across the county)
- Some WIS portals go down periodically - try again later if unreachable

#### `"signup_flow"` - Company signup page (Panda, Greyhound, etc.)

Some companies have their own signup systems:
- **Panda Green** (`panda.ie/household/`): Enter an address, get zone-specific pricing. Serves ~10 counties.
- **Greyhound** (`greyhound.ie`): Enter an eircode to check coverage and see plans.
- **City Bin Co.** (`citybin.com/signup/`): City-specific plans for Dublin and Galway.

#### `"county_dropdown"` - Portal with county selector (Barna only)

**Barna Recycling** uses a custom portal at `cportal.barnarecycling.com/signup/signup.php`:
1. Select a county from the dropdown
2. Select a locality (if prompted)
3. Plans are shown - same pricing across Galway, Mayo, Sligo, Leitrim, and Roscommon
4. Note: Sligo uses a 25L food caddy while other counties use a 140L compost bin

#### `"public_page"` - Pricing on a public website page

These companies list pricing directly on their website with no address entry needed:
- **Clean Ireland** - `cleanireland.ie/residential-services/`
- **KWD Recycling** - `kwd.ie`
- **McElvaney's** - `mcelvaneywaste.com/household-customers/wheel-bins/choose-a-service/`
- **Mulleadys** - `mulleadys.com/household.html`
- **Mr Binman** - `mrbinman.com/bin-collection-quote/`
- **Moran Refuse** - `moranrefuse.ie/services/pricing/`
- **Ryan Brothers** - `ryanbros.ie/domestic-pricing-options/`
- **Blue Dolphin** - `bluedolphinrecycling.ie/wheelie-bins`
- **Higgins Waste** - `higginswaste.ie/services/household-collection/`
- **Ecological** - `ecological.ie/service-option/`
- **Logan Waste** - `loganwaste.com`

#### No pricing available (`pricing_method: null`)

Many smaller/regional companies don't publish pricing online. For these:
- Set `pricing_available: false`
- Set `confidence.level: "none"`
- Include the reason (e.g. "No pricing published on website", "Phone-only contact")
- Leave `plans: []` empty
- Still include the company so users know it exists and can contact them

---

## Current data stats (as of 2026-03-25)

- **155 company-county entries** across 26 counties
- **72 with pricing** (46 public_page, 37 wis_portal, 20 signup_flow, 5 county_dropdown)
- **43 without pricing** (`pricing_method: null`)
- **65 high-confidence**, 6 medium, 1 low

### Companies with pricing

| Company | Method | Counties with pricing |
|---|---|---|
| AES Recycling | wis_portal | ~11 counties |
| Panda Green | signup_flow | ~10 counties |
| Oxigen Environmental | wis_portal | ~8 counties |
| Mr Binman | public_page | ~5 counties |
| Allied Recycling | wis_portal | ~4 counties |
| Mulleadys | public_page | ~4 counties |
| Ray Whelan | wis_portal | ~4 counties |
| Barna Recycling | county_dropdown | 5 counties (Galway, Mayo, Sligo, Leitrim, Roscommon) |
| Clean Ireland Recycling | public_page | 3 counties (Clare, Limerick, Tipperary) |
| KWD Recycling | public_page | ~3 counties |
| Quality Recycling Ltd | wis_portal | ~3 counties |
| Ryan Brothers | public_page | ~3 counties |
| City Bin Co. | public_page | 2 counties (Dublin, Galway) |
| Ecological Waste Management | public_page | 2 counties (Louth, Monaghan) |
| Greyhound | signup_flow / wis_portal | ~3 counties (Dublin, Kildare, Wicklow) |
| Higgins Waste | public_page | 2 counties (Kerry, Limerick) |
| McElvaney's | public_page | ~2 counties |
| Thorntons Recycling | wis_portal | ~2 counties |
| Wiser Recycling | wis_portal | ~2 counties |
| Blue Dolphin | public_page | ~2 counties |
| Country Clean Recycling | public_page | 1 county (Cork) |
| Donegal Waste & Recycle | wis_portal | 2 counties (Donegal, Sligo) |
| Logan Waste | public_page | 1 county (Donegal) |
| Moran Refuse | public_page | 1 county (Galway) |
| Wilton Waste | public_page | 1 county (Waterford) |

### Companies without any online pricing

These appear in the data but have no public pricing anywhere:
- Athchursail Aran Teo, Ballinrobe Waste, Bourke Waste Removal, CMS Waste Disposal, Doheny Wheelie Bins, Henry Kenny, McGrath Industrial Waste, The Binman (multiple counties)

### Addresses to use per county

When refreshing WIS portals, the `address_used` field in each JSON shows what was previously used. If that address stops working, try a central town. Some examples:
- Dublin: "Clondalkin, Dublin 22"
- Cork: "37 Saint Patrick's Street, Cork"
- Galway: "1 Eyre Square, Galway"
- Limerick: city centre address
- Louth: "Drogheda, Co. Louth" (note: Dundalk didn't work for some companies)
- Kildare: "S Main St, Naas, Co. Kildare"
- Laois: "1 Main Street, Portlaoise, Co. Laois"
- Monaghan: "Drumillard Little, Castleblayney, Co. Monaghan"
- Cavan: "Main Street, Cavan"

If a WIS portal says "location not served", try up to 10 different addresses across the county before concluding the company doesn't serve that area.

---

## Trustpilot scores

Stored in the `TRUSTPILOT` object in `index.html`. Only companies with actual Trustpilot profiles are included. Most smaller Irish waste companies don't have Trustpilot pages.

To update: Google "[company name] Trustpilot" and check for an `ie.trustpilot.com/review/[domain]` page.

---

## Key website features

- **Cost calculator**: Estimates real monthly cost based on household size and waste weight
- **Compare tool**: Side-by-side comparison of up to 3 providers
- **Bin filtering**: Only shows companies that offer the bins you need
- **Grey "no estimate" box**: When excess charge is unknown and weight exceeds allowance, estimate is greyed out with a tooltip
- **Contact form**: Collapsible form at bottom for pricing errors/missing companies (via Formspree)
- **Testing mode**: Add `?testing=true` to URL to show confidence badges
- **Mobile responsive**: Full mobile layout for screens under 700px
