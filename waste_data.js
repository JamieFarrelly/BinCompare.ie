const COUNTY_DATA = {
"Carlow": {
  "county": "Carlow",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites/signup portals",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices confirmed via Panda signup page using 'Tullow Street, Carlow' address. Plans displayed and address accepted."
      },
      "service_notes": "3 plans available for Carlow (no Flexible/PAYG plan — rural area only). Compost bins being introduced to all rural areas; may not yet be available at all addresses — Panda will notify by email if not yet active. Alternate collection schedule applies.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 24.50,
          "price_frequency": "monthly",
          "household_size": "1-3 persons",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_allowance_note": "Unlimited",
          "compost_allowance_kg": null,
          "compost_allowance_note": "Unlimited (where available)",
          "notes": null
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 28.50,
          "price_frequency": "monthly",
          "household_size": "3-5 persons",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_allowance_note": "Unlimited",
          "compost_allowance_kg": null,
          "compost_allowance_note": "Unlimited (where available)",
          "notes": null
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 32.50,
          "price_frequency": "monthly",
          "household_size": "5+ persons",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_allowance_note": "Unlimited",
          "compost_allowance_kg": null,
          "compost_allowance_note": "Unlimited (where available)",
          "notes": null
        }
      ]
    },
    {
      "name": "Ray Whelan Limited",
      "phone": "059 9147 678",
      "website": "https://www.raywhelan.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices confirmed via Ray Whelan WIS signup portal using 'Tullow Street, Carlow' — system confirmed 'Location served!' and displayed plans with full pricing details."
      },
      "service_notes": "Alternate weekly collection. Bins delivered within 5-7 working days. Bin sizes: 240L waste, 240L recycling, 140L compost (where available). Payment options: direct debit, online portal, Payzone, or phone (€2 surcharge for phone payments).",
      "plans": [
        {
          "name": "SS 1 Waste 1 Recycle - Monthly",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 71,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.10,
          "recycling_excess_per_kg": null,
          "recycling_excess_note": "No extra charge for recycling",
          "compost_excess_per_kg": null,
          "compost_excess_note": "No extra charge for compost (where available)",
          "setup_payment": 48.00,
          "setup_payment_note": "Initial payment of €48 acts as credit for first two months",
          "notes": "Ideal for customers who leave bins out on a regular basis."
        },
        {
          "name": "Pay By Weight - Monthly",
          "type": "payg",
          "price": 10.00,
          "price_frequency": "monthly_service_charge",
          "service_charge": 10.00,
          "service_charge_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "per_kg_waste": 0.30,
          "per_kg_recycling": null,
          "recycling_note": "No extra charge for recycling",
          "per_kg_compost": 0.20,
          "compost_note": "Compost charged at €0.20/kg where service is available",
          "setup_payment": 50.00,
          "setup_payment_note": "Initial payment of €50 acts as account credit. Minimum €10 credit must be maintained to ensure collections.",
          "notes": "Best for customers who recycle more and produce less waste."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices confirmed via AES WIS portal (aesirl.wis.ie) using Tullow, Co. Carlow address. price_group_ids=1."
      },
      "address_used": "Tullowphelim, Tullow, Co. Carlow",
      "service_notes": "Fortnightly collections. 12-month contract (€50 cancellation fee). €50 prepayment to open account. Glass bin where available. No excess on recycling or compost.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 23,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 32,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "Pay by Lift",
          "type": "payg",
          "price": 15.20,
          "price_frequency": "monthly_service_charge",
          "service_charge": 15.20,
          "service_charge_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "per_lift_waste": 15.60,
          "per_lift_recycling": 8.00,
          "per_lift_compost": 6.60,
          "waste_allowance_kg": 60,
          "excess_charge_per_kg": 0.30,
          "notes": "Ideal for small households or irregular use. Recycling/organic lifts significantly cheaper than general waste lift."
        }
      ]
    },
    {
      "name": "Doheny Wheelie Bins & Recycling Limited",
      "phone": "056 772 9838",
      "website": "https://www.dohenywheeliebins.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website has SSL certificate issues blocking automated access. No pricing found on their site or via web search. Customer portal login required for existing customers."
      },
      "service_notes": "Based in Castleinch, Callan Rd., Kilkenny. Serves Carlow as listed on mywaste.ie. Offers Family and Midi (1/2) size wheelie bins. Pricing not publicly listed — contact directly or visit customer portal at dohenywheeliebins.com.",
      "plans": []
    }
  ]
}
,
"Cavan": {
  "county": "Cavan",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites and WIS portals",
  "companies": [
    {
      "name": "Mulleadys Ltd",
      "phone": "043 3324 128",
      "website": "https://www.mulleadys.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices retrieved directly from mulleadys.com/household.html — county-specific plans listed."
      },
      "address_used": null,
      "service_notes": "One-time bin setup fee of €60 (non-refundable). All bins collected fortnightly. Food service available in designated areas only. Serves Cavan, Leitrim, Longford, Roscommon, Westmeath.",
      "plans": [
        {
          "name": "Monthly Plan Lite",
          "type": "monthly",
          "price": 22.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 20,
          "compost_excess_per_kg": 0.15,
          "notes": null
        },
        {
          "name": "Monthly Plan Standard",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": null
        },
        {
          "name": "Pay by Weight",
          "type": "pay_by_weight",
          "price": 15.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Minimum account credit €7.50 required."
        }
      ]
    },
    {
      "name": "Oxigen Environmental",
      "phone": "0818 694 436",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices retrieved from Oxigen WIS portal (oxigen.wis.ie) for Main Street, Cavan — Cavan-specific plans confirmed."
      },
      "address_used": "Main Street, Cavan",
      "service_notes": "All plans use fortnightly collection. Pay By Weight suited for very light waste producers. Bins are 240L (standard) or 140L (small).",
      "plans": [
        {
          "name": "3 Bin Cavan",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": "Most families",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "3 Small Bin Cavan",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple-person dwellings",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "2 Bin Cavan",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": "Most families",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "2 Small Bin Cavan",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple-person dwellings",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Pay By Weight Cavan",
          "type": "pay_by_weight",
          "price": 16.00,
          "price_frequency": "monthly",
          "household_size": "Light waste producers",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Best for households that don't put bins out every fortnight."
        }
      ]
    },
    {
      "name": "The Binman",
      "phone": "086 3517273",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "Wilton Waste Recycling",
      "phone": "049 4336 476",
      "website": "https://www.wilton-recycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "low",
        "reason": "Only 'from €21.16/month' starting price found on wiltonrecycling.ie. Full plan breakdown not publicly listed — detailed pricing requires signup or direct contact."
      },
      "address_used": null,
      "service_notes": "Offers pay-by-weight and pay-as-you-use options. 4 bins: 240L waste, 240L recycling, 25L organic, 140L glass. Waste/recycling/organics collected fortnightly, glass quarterly. Available in Co. Cavan.",
      "plans": [
        {
          "name": "Household Bin Service",
          "type": "monthly",
          "price": 21.16,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_litres": 240,
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Pay-by-weight and pay-as-you-use (€7/mo service charge) options available. Full pricing requires signup."
        }
      ]
    },
    {
      "name": "Allied Recycling",
      "phone": "046 9433366",
      "website": "http://www.alliedrecycling.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on their website. Serves Westmeath, Meath, Cavan, Kildare and Dublin but pricing not published online."
      },
      "address_used": null,
      "service_notes": "Also serves Meath, Westmeath, Kildare, Dublin.",
      "plans": []
    },
    {
      "name": "Barna Recycling",
      "phone": "091 771 620",
      "website": "https://www.barnarecycling.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on website. Pricing managed through customer portal (cportal.barnarecycling.com) — requires account login."
      },
      "address_used": null,
      "service_notes": "Primarily serves Connacht counties. Online account management via customer portal.",
      "plans": []
    },
    {
      "name": "Blue Dolphin Environmental Ltd",
      "phone": "047 577 86",
      "website": "https://www.bluedolphinrecycling.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website uses Wix platform; pricing content not publicly accessible via WebFetch. No pricing found."
      },
      "address_used": null,
      "service_notes": "Based in Monaghan. Serves Cavan and Monaghan.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing sourced from Selectra comparison site (selectra.ie). County-specific pricing not independently verified for Cavan."
      },
      "address_used": null,
      "service_notes": "Multi-county operator. Plans based on weight allowance.",
      "plans": [
        {
          "name": "Lite",
          "type": "monthly",
          "price": 23.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Smart",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 33.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Exact per-lift rates not confirmed for Cavan."
        }
      ]
    }
  ]
}
,
"Clare": {
  "county": "Clare",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites",
  "companies": [
    {
      "name": "Mr Binman",
      "phone": "061 351 127",
      "website": "https://www.mrbinman.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mrbinman.com/bin-collection-quote/. Mr Binman serves Clare (Mid West region). 'City' vs 'country' rates apply — Clare is likely country rates."
      },
      "address_used": null,
      "service_notes": "Bins collected on alternate weeks: Week 1 = Waste & Organic, Week 2 = Recycling & Glass. City and country organic rates differ. Glass caddy free. Text reminders provided.",
      "plans": [
        {
          "name": "Household Standard",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Introductory price €27/mo for first 6 months, then €33.52/mo. €30 discount if paying by direct debit."
        },
        {
          "name": "Pay Per Lift (Xtralite)",
          "type": "pay_by_lift",
          "price": 6.05,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.10,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Min account credit €12."
        },
        {
          "name": "Lite",
          "type": "pay_by_lift",
          "price": 9.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "TerraUrban",
          "type": "monthly",
          "price": 27.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€30 discount if paying by direct debit."
        }
      ]
    },
    {
      "name": "Barna Recycling",
      "phone": "091 771 621",
      "website": "https://www.barnarecycling.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on website. Pricing managed through customer portal (cportal.barnarecycling.com) — requires account login."
      },
      "address_used": null,
      "service_notes": "Primarily serves Connacht counties and parts of Munster. Online account management via customer portal.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing sourced from Selectra comparison site (selectra.ie). County-specific pricing not independently verified for Clare."
      },
      "address_used": null,
      "service_notes": "Multi-county operator. Plans based on weight allowance.",
      "plans": [
        {
          "name": "Lite",
          "type": "monthly",
          "price": 23.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Smart",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 33.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Exact per-lift rates not confirmed for Clare."
        }
      ]
    },
    {
      "name": "Clean Ireland Recycling",
      "phone": "1890 361 800",
      "website": "https://www.cleanireland.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from cleanireland.ie. Clean Ireland serves Limerick, Clare, and North Kerry."
      },
      "address_used": null,
      "service_notes": "Pay-by-weight model. Serves Limerick, Clare, and North Kerry. Price billed every 6 months.",
      "plans": [
        {
          "name": "Household Pay-by-Weight",
          "type": "pay_by_weight",
          "price": 154.82,
          "price_frequency": "6_monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        }
      ]
    }
  ]
}
,
"Cork": {
  "county": "Cork",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites and WIS portals",
  "companies": [
    {
      "name": "KWD Recycling",
      "phone": "1850 373 737",
      "website": "https://www.kwd.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from kwd.ie. KWD primarily serves Cork county."
      },
      "address_used": null,
      "service_notes": "Two plan options based on bin size. Fortnightly collection.",
      "plans": [
        {
          "name": "Option A (240L)",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Option B (140L)",
          "type": "monthly",
          "price": 25.50,
          "price_frequency": "monthly",
          "household_size": "Smaller households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        }
      ]
    },
    {
      "name": "Mr Binman",
      "phone": "061 351 128",
      "website": "https://www.mrbinman.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mrbinman.com/bin-collection-quote/. Mr Binman serves Cork (city rates apply in urban Cork)."
      },
      "address_used": null,
      "service_notes": "Bins collected on alternate weeks: Week 1 = Waste & Organic, Week 2 = Recycling & Glass. City rates apply in Cork city; country rates in rural areas. Glass caddy free. Text reminders provided.",
      "plans": [
        {
          "name": "Household Standard",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Introductory price €27/mo for first 6 months, then €33.52/mo."
        },
        {
          "name": "Pay Per Lift (Xtralite)",
          "type": "pay_by_lift",
          "price": 6.05,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.10,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Min account credit €12."
        },
        {
          "name": "Lite",
          "type": "pay_by_lift",
          "price": 9.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "TerraUrban",
          "type": "monthly",
          "price": 27.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€30 discount if paying by direct debit."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Cork city address. Cork is an urban zone with higher pricing than rural areas."
      },
      "address_used": "37 Saint Patrick's Street, Cork",
      "service_notes": "All plans include glass bin collection in Cork (urban zone). Pay per lift available. €0.25/kg excess charge applies to all bins.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 38.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 35,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.25,
          "notes": null
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 40.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.25,
          "notes": null
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 44.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 75,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.25,
          "notes": null
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        }
      ]
    },
    {
      "name": "Wiser Recycling (Wiser Bins)",
      "phone": "021 4630 601",
      "website": "https://www.wiserbins.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from wiserbins.wis.ie for Cork city address. Location confirmed as served."
      },
      "address_used": "St Patrick's St, Centre, Cork, Ireland",
      "service_notes": "Monthly, quarterly, and half-yearly billing available. Standard bin allocation: 240L waste, 360L recycling, 240L food bin.",
      "plans": [
        {
          "name": "240 LITE 3Bin NEW 25",
          "type": "monthly",
          "price": 32.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Contact office for different bin sizes (021-4630601)."
        },
        {
          "name": "240Litre 3Bin NEW 25",
          "type": "monthly",
          "price": 36.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Contact office for different bin sizes (021-4630601)."
        }
      ]
    },
    {
      "name": "Country Clean Recycling",
      "phone": "022 468 48",
      "website": "https://www.countryclean.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (countryclean.wis.ie) returned 'Location not served' for multiple Cork addresses tested: Cork city, Mallow, Fermoy, Mitchelstown. May serve very limited parts of Cork not tested, but no pricing retrievable."
      },
      "address_used": null,
      "service_notes": "Based in north Munster (Charleville/Limerick border area). Primary service area appears to be Tipperary, Kilkenny, Waterford, Limerick rather than Cork.",
      "plans": []
    }
  ]
}
,
"Donegal": {
  "county": "Donegal",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites and Panda signup flow",
  "companies": [
    {
      "name": "Logan Waste",
      "phone": "074 9108 111",
      "website": "https://www.loganwaste.com",
      "pricing_available": true,
      "confidence": {
        "level": "low",
        "reason": "Website references €25 and €30 monthly plans but provides no details on bin sizes, weight allowances, or plan features. Full pricing requires direct contact."
      },
      "address_used": null,
      "service_notes": "Customer accounts must be kept in credit. Waste, recycling, and compost collection. Auto top-up available.",
      "plans": [
        {
          "name": "Monthly €25 Plan",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Bin sizes, weight allowances and full plan details not published — contact info@loganwaste.com or 074 9108111."
        },
        {
          "name": "Monthly €30 Plan",
          "type": "monthly",
          "price": 30.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Bin sizes, weight allowances and full plan details not published — contact info@loganwaste.com or 074 9108111."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Letterkenny, Co. Donegal address."
      },
      "address_used": "1 Lower Main Street, Letterkenny, Co. Donegal",
      "service_notes": "No glass bin included for Donegal (rural area). Compost availability being rolled out — may not be available at all rural addresses. €0.25/kg excess on waste.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 28.75,
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
          "notes": "Unlimited recycling and compost included. No glass bin in Donegal."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 75,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost included."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 39.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 100,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost included."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No glass bin in Donegal."
        }
      ]
    },
    {
      "name": "Sharkey Waste & Recycle",
      "phone": "074 9548 229",
      "website": "http://www.sharkeywaste.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from sharkeywaste.ie/domestic-waste-collection.aspx."
      },
      "address_used": null,
      "service_notes": "Invoiced every 6 months. Bins: 240L or 120L waste & recycling, plus food caddy. E-tag (pay as you go) option available. Minimum €20 top-up for E-tag via app or Payzone/An Post.",
      "plans": [
        {
          "name": "On Account Standard",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 600,
          "waste_allowance_period": "annual",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed 6-monthly. 240L or 120L bin options."
        },
        {
          "name": "On Account Plus",
          "type": "monthly",
          "price": 30.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 900,
          "waste_allowance_period": "annual",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed 6-monthly. 240L or 120L bin options."
        },
        {
          "name": "On Account Premium",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 1200,
          "waste_allowance_period": "annual",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed 6-monthly. 240L or 120L bin options."
        },
        {
          "name": "E-tag (Pay As You Go)",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Min top-up €20."
        }
      ]
    },
    {
      "name": "The Binman",
      "phone": "086 3517273",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "DM Waste",
      "phone": "074 915 7189",
      "website": "https://www.dmwaste.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on website. Site directs customers to register or contact directly. Mentions 'various domestic bin sizes and flexible payment options' but no rates published."
      },
      "address_used": null,
      "service_notes": "Bin registration required. Flexible payment options available.",
      "plans": []
    },
    {
      "name": "Donegal Waste & Recycle",
      "phone": "074 974 0130",
      "website": "https://www.donegalwasteandrecycle.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No pricing found on website or bin-collection subpage. Bin sizes are listed (120L and 240L options with 25L food caddy) but no costs published."
      },
      "address_used": null,
      "service_notes": "Bi-weekly collection. Options: 120L or 240L waste & recycling bins + 25L food caddy. Pay as You Go option available for low-waste households. Payment: Direct Debit, phone, Payzone/An Post, online prepay.",
      "plans": []
    }
  ]
}
,
"Dublin": {
  "county": "Dublin",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites + Panda API",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from Panda API for Dublin zone 3."
      },
      "address_used": "Dublin zone 3",
      "service_notes": "1 month free when signing up online. Glass collection not available in most Dublin regions. Unlimited recycling and compost on all flat-rate plans.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 24.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 28.50,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 32.50,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Flexible (Pay Per Lift)",
          "type": "pay_by_lift",
          "price": 12.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.085,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "per_lift_waste": 14.75,
          "per_lift_recycling": 1.63,
          "per_lift_compost": 3.80,
          "per_lift_glass": null,
          "notes": "€75 service charge per 6 months (~€12.50/month) + per lift: Waste €14.75/lift, Recycling €1.63/lift, Compost €3.80/lift."
        }
      ]
    },
    {
      "name": "The City Bin Co.",
      "phone": "1800 248 925",
      "website": "https://www.citybin.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from citybin.com for Dublin."
      },
      "address_used": null,
      "service_notes": "Annual plans include 1 month free. Free SMS reminders and recycling reports on all plans. Recycling included at no extra charge.",
      "plans": [
        {
          "name": "City Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "City Essential",
          "type": "monthly",
          "price": 26.49,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "City Extra",
          "type": "monthly",
          "price": 30.49,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        }
      ]
    },
    {
      "name": "Thorntons Recycling",
      "phone": "01 6235 133",
      "website": "https://www.thorntons-recycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from thorntons-recycling.ie for Dublin."
      },
      "address_used": null,
      "service_notes": "No annual fee. Award-winning mobile app. Refer a friend scheme (€25 credit).",
      "plans": [
        {
          "name": "Eco Band Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "notes": null
        },
        {
          "name": "Eco Band",
          "type": "monthly",
          "price": 26.49,
          "price_frequency": "monthly",
          "household_size": "4 people",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "notes": null
        }
      ]
    },
    {
      "name": "Greyhound Household",
      "phone": "01 4577777",
      "website": "https://www.greyhound.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from greyhound.ie for Dublin council areas."
      },
      "address_used": null,
      "service_notes": "Pricing varies by Dublin council area (DCC, DLR, SDCC, Fingal). Green and brown bin lifts complimentary on monthly plans. No annual upfront fees. Direct debit processes 28th–1st monthly. Bins delivered in 2–3 working days. Promo code 'Bin10' for 1 month free.",
      "plans": [
        {
          "name": "Standard (DCC)",
          "type": "monthly",
          "price": 24.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 32,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "Family (DCC)",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "Family Plus (DCC)",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": "Extra bins available."
        },
        {
          "name": "Standard (DLR)",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 32,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "Family (DLR)",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": null
        },
        {
          "name": "Family Plus (DLR)",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "notes": "Extra bins available."
        },
        {
          "name": "Pay As You Go",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.25,
          "per_lift_waste": 5.50,
          "per_lift_recycling": 4.50,
          "per_lift_compost": 4.00,
          "notes": "€59.95/year service charge (~€5/month) + per lift: Waste €5.50/lift, Recycling €4.50/lift, Compost €4.00/lift."
        }
      ]
    },
    {
      "name": "Key Waste Management Ltd. (KeyGreen)",
      "phone": "01 4299 846",
      "website": "https://www.keygreen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from keygreen.ie for Dublin."
      },
      "address_used": null,
      "service_notes": "Service available in Dublin 4 and Dublin 6 only. Bi-weekly collections. Recycling and organic bins included free.",
      "plans": [
        {
          "name": "KeyLite",
          "type": "monthly",
          "price": 23.95,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.33,
          "notes": null
        },
        {
          "name": "KeyStandard",
          "type": "monthly",
          "price": 26.95,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.33,
          "notes": null
        },
        {
          "name": "KeyPlus",
          "type": "monthly",
          "price": 31.95,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 70,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.33,
          "notes": null
        }
      ]
    },
    {
      "name": "Advanced Waste Recycling",
      "phone": "01 401 1928",
      "website": "https://www.advancedwaste.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing confirmed via WIS portal for Dublin 22 (Clondalkin area)."
      },
      "address_used": "Clondalkin, Dublin 22",
      "service_notes": "Based in Saggart, Co. Dublin (D24). Confirmed serving D22 area. Coverage may not extend across all Dublin postcodes.",
      "plans": [
        {
          "name": "2025 Light Plan",
          "type": "monthly",
          "price": 20.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No weight charge for recycling or compost bins."
        },
        {
          "name": "2025 Standard Plan",
          "type": "monthly",
          "price": 24.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No weight charge for recycling or compost bins."
        },
        {
          "name": "2025 Family Plus Plan",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 95,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No weight charge for recycling or compost bins."
        }
      ]
    },
    {
      "name": "Allied Recycling",
      "phone": "01 278 7080",
      "website": "https://www.alliedrecycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing sourced from alliedrecycling.ie. Dublin coverage limited to border areas near Meath/Kildare."
      },
      "address_used": null,
      "service_notes": "Serves Dublin border areas near Meath and Kildare. €30 delivery charge per bin for new customers. First month free.",
      "plans": [
        {
          "name": "Standard Three Bin",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 58,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "notes": "Each bin emptied fortnightly. Allowance is 350kg waste / 195kg recycling / 195kg compost per 6 months. Excess charged in January and July — rate not published."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 13.50,
          "price_frequency": "per_lift",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "excess_charge_per_kg": null,
          "per_lift_recycling": 6.50,
          "notes": "Waste €13.50/lift, Recycling €6.50/lift. Compost not available on Pay Per Lift. Setup fee €75 for a bin set."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "low",
        "reason": "Plan prices sourced from other counties — confirm directly with AES for Dublin-specific rates."
      },
      "address_used": null,
      "service_notes": "Prices shown are based on AES rates in other counties. Excess weight charges are not published — if you exceed your monthly allowance, contact AES for the exact cost.",
      "plans": [
        {
          "name": "Lite",
          "type": "monthly",
          "price": 23.00,
          "price_frequency": "monthly",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "notes": "Excess weight charge not published — contact AES for rate."
        },
        {
          "name": "Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "notes": "Excess weight charge not published — contact AES for rate."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 90,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "notes": "Excess weight charge not published — contact AES for rate."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "per_lift",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "excess_charge_per_kg": null,
          "notes": "Per-lift charge. No monthly commitment."
        }
      ]
    },
    {
      "name": "Tommy's Waste and Recycling Ltd",
      "phone": "086 2229 426",
      "website": "https://www.facebook.com/tommy.waste.9",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No structured pricing available online."
      },
      "address_used": null,
      "service_notes": "Online presence is a Facebook page only. Contact directly by phone for rates.",
      "plans": []
    },
    {
      "name": "Clearer Waste Management",
      "phone": "086 825 3502",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website. No pricing available online."
      },
      "address_used": null,
      "service_notes": "No website listed. Contact directly by phone for pricing.",
      "plans": []
    },
    {
      "name": "Ecoway Waste Management Ltd.",
      "phone": "01 874 8340",
      "website": "https://www.ecoway.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Pricing shown as 'Coming soon' on their website."
      },
      "address_used": null,
      "service_notes": "Service available in Dublin 1, 2, 3 and 7 only. Expanding coverage. Pricing 'Coming soon' on website.",
      "plans": []
    }
  ]
}
,
"Galway": {
  "county": "Galway",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites, WIS portals, and Panda/City Bin signup flows",
  "companies": [
    {
      "name": "Moran Refuse & Recycling Service",
      "phone": "091 794 400",
      "website": "https://www.moranrefuse.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from moranrefuse.ie/services/pricing/."
      },
      "address_used": null,
      "service_notes": "Billed every 6 months. Weight-based allowances. Excess charged at €0.25/kg. Bins: 120L, 240L, or 360L waste options.",
      "plans": [
        {
          "name": "120L Plan",
          "type": "monthly",
          "price": 28.33,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 200,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "240L Plan",
          "type": "monthly",
          "price": 33.33,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 450,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "360L Plan",
          "type": "monthly",
          "price": 46.67,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 675,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        }
      ]
    },
    {
      "name": "The City Bin Co.",
      "phone": "091 787800",
      "website": "https://www.citybin.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from citybin.com/signup/ — Galway-specific plans confirmed as of 16.01.26."
      },
      "address_used": null,
      "service_notes": "Monthly and annual billing available. Annual plan gives 1 month free. Serves Galway city area. Bins placed back neatly; free SMS reminders and recycling reports included. €0.30/kg excess on waste for all plans.",
      "plans": [
        {
          "name": "City Lite – Galway",
          "type": "monthly",
          "price": 21.00,
          "price_frequency": "monthly",
          "household_size": "Light waste producers",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 33,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Annual option: €233.50/year (1 month free). Best for households that recycle most waste."
        },
        {
          "name": "City Essential – Galway",
          "type": "monthly",
          "price": 23.40,
          "price_frequency": "monthly",
          "household_size": "Most households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Annual option: €259.90/year (1 month free)."
        },
        {
          "name": "City Extra – Galway",
          "type": "monthly",
          "price": 27.49,
          "price_frequency": "monthly",
          "household_size": "Larger households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Annual option: €304.89/year (1 month free)."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Galway city address."
      },
      "address_used": "1 Eyre Square, Galway",
      "service_notes": "Glass bin included for Galway (urban zone). Pay by weight option available. €0.25/kg excess on waste; €0.19/kg excess on recycling and compost.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 19.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 35,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": null
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 20.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 45,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.19,
          "notes": null
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.19,
          "notes": null
        },
        {
          "name": "Pay By Weight",
          "type": "pay_by_weight",
          "price": 12.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.14,
          "notes": null
        }
      ]
    },
    {
      "name": "Mr Binman",
      "phone": "061 351 128",
      "website": "https://www.mrbinman.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mrbinman.com/bin-collection-quote/. Mr Binman serves Galway. City vs country rates apply — Galway city areas use city rates, rural Galway uses country rates."
      },
      "address_used": null,
      "service_notes": "Bins collected on alternate weeks: Week 1 = Waste & Organic, Week 2 = Recycling & Glass. City organic bin is 140L; country organic bin is 25L. Glass caddy free. Text reminders provided.",
      "plans": [
        {
          "name": "Household Standard",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Introductory price €27/mo for first 6 months, then €33.52/mo."
        },
        {
          "name": "Pay Per Lift (Xtralite)",
          "type": "pay_by_lift",
          "price": 6.05,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.10,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Min account credit €12."
        },
        {
          "name": "Lite",
          "type": "pay_by_lift",
          "price": 9.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "TerraUrban",
          "type": "monthly",
          "price": 27.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€30 discount if paying by direct debit."
        }
      ]
    },
    {
      "name": "Barna Recycling",
      "phone": "091 771 621",
      "website": "https://www.barnarecycling.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on website. Pricing managed through customer portal (cportal.barnarecycling.com) — requires account login."
      },
      "address_used": null,
      "service_notes": "Primarily serves Connacht counties. Based in Galway. Online account management via customer portal.",
      "plans": []
    },
    {
      "name": "Walsh Waste",
      "phone": "091 844 747",
      "website": "https://www.walshwaste.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website and service area appear focused on commercial/business waste collection. No household bin collection service or pricing found."
      },
      "address_used": null,
      "service_notes": "Primarily a commercial waste contractor. No household collection service identified.",
      "plans": []
    },
    {
      "name": "Ballinrobe Waste",
      "phone": "094 954 1360",
      "website": "https://www.ballinrobewaste.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No pricing listed on website. Site describes service but directs customers to contact for details."
      },
      "address_used": null,
      "service_notes": "Serves South Mayo and parts of Co. Galway. Fortnightly collection. Offers 120L and 240L bin options.",
      "plans": []
    },
    {
      "name": "The Binman",
      "phone": "086 3517273",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "Athchursail Aran Teo",
      "phone": null,
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website or phone number listed in source data. No online pricing available."
      },
      "address_used": null,
      "service_notes": "Serves the Aran Islands (Inis Mór, Inis Meáin, Inis Oírr).",
      "plans": []
    },
    {
      "name": "Henry Kenny",
      "phone": null,
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website or phone number listed in source data. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    }
  ]
}
,
"Kerry": {
  "county": "Kerry",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites",
  "companies": [
    {
      "name": "KWD Recycling",
      "phone": "064 663 5666",
      "website": "https://www.kwd.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from kwd.ie/page96.php — KWD is based in Killarney and primarily serves Kerry, West Cork and West Limerick."
      },
      "address_used": null,
      "service_notes": "Two plan options based on bin size. Fortnightly collection. Service and weight charge model — the less you weigh, the less you pay. Payment options: 12 months upfront, 6 months, or monthly Easy Pay direct debit.",
      "plans": [
        {
          "name": "Option A (240L)",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": "Households with more than 2 people or higher waste volumes",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Also available: €175/6 months or €340/year. Weight-based charges apply."
        },
        {
          "name": "Option B (140L)",
          "type": "monthly",
          "price": 25.50,
          "price_frequency": "monthly",
          "household_size": "Households of 2 people or less / low waste volumes",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Also available: €150/6 months or €290/year. Weight-based charges apply."
        }
      ]
    },
    {
      "name": "Mr Binman",
      "phone": "061 351 130",
      "website": "https://www.mrbinman.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mrbinman.com/bin-collection-quote/. Kerry is a country (rural) area — country rates apply."
      },
      "address_used": null,
      "service_notes": "Bins collected on alternate weeks: Week 1 = Waste & Organic, Week 2 = Recycling & Glass. Kerry is country area — organic bin is 25L (not 140L city size). Glass caddy free. Text reminders provided.",
      "plans": [
        {
          "name": "Household Standard",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Introductory price €27/mo for first 6 months, then €33.52/mo."
        },
        {
          "name": "Pay Per Lift (Xtralite)",
          "type": "pay_by_lift",
          "price": 6.05,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.10,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Min account credit €12."
        },
        {
          "name": "Lite",
          "type": "pay_by_lift",
          "price": 9.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "TerraUrban",
          "type": "monthly",
          "price": 27.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€30 discount if paying by direct debit."
        }
      ]
    },
    {
      "name": "Higgins Waste & Recycling Services Ltd",
      "phone": "066 7123 059",
      "website": "https://www.higginswaste.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website unreachable (connection refused) at time of research. No pricing could be retrieved."
      },
      "address_used": null,
      "service_notes": "Kerry-based waste collector. Website may be temporarily down or no longer active.",
      "plans": []
    },
    {
      "name": "Michael Healy",
      "phone": "086 3753 959",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "Kerry County Council",
      "phone": null,
      "website": "https://www.kerrycoco.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Kerry County Council regulates waste collectors but does not directly provide household bin collection services. No collection pricing applicable."
      },
      "address_used": null,
      "service_notes": "Regulatory body only. Household waste collection in Kerry is provided by private operators.",
      "plans": []
    }
  ]
}
,
"Kildare": {
  "county": "Kildare",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites, WIS portals (Oxigen, Ray Whelan), and Panda signup flow",
  "companies": [
    {
      "name": "Oxigen Environmental",
      "phone": "0818 694 437",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices retrieved from Oxigen WIS portal (oxigen.wis.ie) for Naas, Co. Kildare — Kildare Urban plans confirmed."
      },
      "address_used": "S Main St, Naas West, Naas, Co. Kildare, Ireland",
      "service_notes": "Fortnightly collection. Pay By Weight option suited for light waste producers. Monthly, quarterly, half-yearly and annual billing available.",
      "plans": [
        {
          "name": "3 Bin Kildare Urban",
          "type": "monthly",
          "price": 29.00,
          "price_frequency": "monthly",
          "household_size": "Most families",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Also available: quarterly, 6-monthly, and annual billing."
        },
        {
          "name": "3 Small Bin Kildare Urban",
          "type": "monthly",
          "price": 24.50,
          "price_frequency": "monthly",
          "household_size": "Single or couple-person dwellings",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Also available: quarterly, 6-monthly, and annual billing."
        },
        {
          "name": "2 Bin Kildare Urban",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": "Most families",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Also available: quarterly, 6-monthly, and annual billing. Customer must declare alternative food waste management method."
        },
        {
          "name": "2 Small Bin Kildare Urban",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple-person dwellings",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Also available: quarterly, 6-monthly, and annual billing. Customer must declare alternative food waste management method."
        }
      ]
    },
    {
      "name": "Ray Whelan Limited",
      "phone": "059 9147 679",
      "website": "https://www.raywhelan.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Prices retrieved from Ray Whelan WIS portal (raywhelan.wis.ie) for Naas, Co. Kildare."
      },
      "address_used": "S Main St, Naas West, Naas, Co. Kildare, Ireland",
      "service_notes": "Serves Carlow, Laois, Kildare and Kilkenny. Alternate weekly collection. Initial account credit required on signup. All plans include 240L waste, 240L recycling, and 140L compost (where available).",
      "plans": [
        {
          "name": "Standard Monthly",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 71,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.10,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No extra charge for recycling or compost. Initial €48 deposit (2 months credit) required."
        },
        {
          "name": "Pay By Weight",
          "type": "pay_by_weight",
          "price": 10.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.20,
          "notes": "Initial €50 deposit required. Minimum €10 credit required."
        },
        {
          "name": "Pay By Lift",
          "type": "pay_by_lift",
          "price": 12.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.12,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Initial €50 deposit required. Minimum €10 credit required."
        }
      ]
    },
    {
      "name": "Thorntons Recycling",
      "phone": "01 6235 134",
      "website": "https://www.thorntons-recycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from thorntons-recycling.ie/household/. Thorntons serves Kildare."
      },
      "address_used": null,
      "service_notes": "Bi-weekly collection of waste, recycling, and compost bins. No annual fee. New customers may receive first month free.",
      "plans": [
        {
          "name": "Eco Band Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Eco Band",
          "type": "monthly",
          "price": 26.49,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "Eco Band Pro",
          "type": "monthly",
          "price": 35.49,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        }
      ]
    },
    {
      "name": "Greyhound Household",
      "phone": "01 4577777",
      "website": "https://www.greyhound.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from greyhound.ie/bin-collection-dublin/. Greyhound serves Dublin and Kildare; Kildare-specific rates confirmed."
      },
      "address_used": null,
      "service_notes": "Serves Dublin and Kildare. Rates vary by area within Kildare (Maynooth vs other towns). All plans include waste, recycling (green bin), and food waste (brown bin). Free green and brown bin lifts with no excess charges on recycling/compost. Excess on waste €0.30/kg.",
      "plans": [
        {
          "name": "Standard",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 32,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Free recycling and compost lifts."
        },
        {
          "name": "Family",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Free recycling and compost lifts."
        },
        {
          "name": "Family Plus",
          "type": "monthly",
          "price": 34.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Free recycling and compost lifts. Maynooth and some Kildare towns may have lower rates — contact Greyhound to confirm."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing sourced from Selectra comparison site (selectra.ie). County-specific pricing not independently verified for Kildare."
      },
      "address_used": null,
      "service_notes": "Multi-county operator including Kildare. Plans based on weight allowance.",
      "plans": [
        {
          "name": "Lite",
          "type": "monthly",
          "price": 23.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Smart",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 33.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Price varies by area — confirm with AES for your specific rate."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Exact per-lift rates not confirmed for Kildare."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Panda signup flow returned no available price options for Naas, Co. Kildare address. Service not available in Kildare."
      },
      "address_used": "1 North Main Street, Naas, Co. Kildare",
      "service_notes": "Panda does not appear to serve Co. Kildare.",
      "plans": []
    },
    {
      "name": "Advanced Waste Recycling",
      "phone": "01 401 1929",
      "website": "https://www.advancedwaste.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on website. Serves Dublin/Kildare area but pricing requires signup or direct contact."
      },
      "address_used": null,
      "service_notes": "Serves Dublin and Kildare areas. Pricing varies by area and plan. Contact enquiries@advancedwaste.ie for details.",
      "plans": []
    },
    {
      "name": "Allied Recycling",
      "phone": "046 943 3366",
      "website": "http://www.alliedrecycling.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No public pricing on their website. Serves Westmeath, Meath, Cavan, Kildare and Dublin but pricing not published online."
      },
      "address_used": null,
      "service_notes": "Also serves Meath, Westmeath, Cavan, Dublin.",
      "plans": []
    },
    {
      "name": "Key Waste Management Ltd.",
      "phone": "01 4299 847",
      "website": "https://www.keygreen.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website (keygreen.ie, formerly keywaste.ie) indicates service in Dublin 4 & 6 only. No evidence of Kildare service found."
      },
      "address_used": null,
      "service_notes": "Primarily serves Dublin 4 and Dublin 6. May not cover Kildare despite being listed.",
      "plans": []
    }
  ]
}
,
"Kilkenny": {
  "county": "Kilkenny",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites, WIS portals, and Panda signup flow",
  "companies": [
    {
      "name": "Ryan Brothers Waste Recycling Services",
      "phone": "0504 21658",
      "website": "https://www.ryanbros.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from ryanbros.ie/domestic-pricing-options/. Ryan Brothers serves Tipperary, Laois, Offaly, and Kilkenny."
      },
      "address_used": null,
      "service_notes": "Billed every 6 months. Brown bin delivered where available (rollout ongoing). Weight allowances apply to general waste and brown bin waste. Plans named by bin size.",
      "plans": [
        {
          "name": "140L Plan",
          "type": "monthly",
          "price": 31.10,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed every 6 months. Brown bin included where available. Weight allowances apply."
        },
        {
          "name": "240L Plan",
          "type": "monthly",
          "price": 34.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed every 6 months. Brown bin included where available. Weight allowances apply."
        },
        {
          "name": "360L Plan",
          "type": "monthly",
          "price": 44.21,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed every 6 months. Brown bin included where available. Weight allowances apply."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for 1 High Street, Kilkenny."
      },
      "address_used": "1 High Street, Kilkenny",
      "service_notes": "Glass bin included for Kilkenny. Compost rollout ongoing in rural areas — may not be available at all addresses. €0.25/kg excess on waste. Unlimited recycling and compost included in flat plans.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost included. Glass bin included."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 36.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost included. Glass bin included."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 39.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost included. Glass bin included."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Glass bin included."
        }
      ]
    },
    {
      "name": "Kilkenny County Council",
      "phone": "056 7794 000",
      "website": "https://www.kilkennycoco.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Kilkenny County Council regulates waste collectors but does not directly provide household bin collection services. No collection pricing applicable."
      },
      "address_used": null,
      "service_notes": "Regulatory body only. Household waste collection in Kilkenny is provided by private operators.",
      "plans": []
    },
    {
      "name": "Kollect Developments Group Ltd",
      "phone": "051 364 495",
      "website": "https://www.kollect.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Kollect is a skip hire and junk removal service, not a regular household bin collection provider. Not applicable to this dataset."
      },
      "address_used": null,
      "service_notes": "Skip hire and on-demand junk removal only. No regular bin collection service.",
      "plans": []
    },
    {
      "name": "Oxigen Environmental",
      "phone": "0818 694 436",
      "website": "https://www.oxigen.ie",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing from oxigen.ie national pay-by-lift and pay-by-weight pages. Serves Cavan to Waterford including Kilkenny. Exact Kilkenny-specific rates may vary."
      },
      "address_used": null,
      "service_notes": "Fortnightly collection. Serves Kilkenny as part of their south-east region (Cavan to Waterford, 100,000+ customers).",
      "plans": [
        {
          "name": "Pay By Lift",
          "type": "pay_by_lift",
          "price": 0,
          "price_frequency": "per_lift",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "per_lift_waste": 12.50,
          "per_lift_recycling": 6.00,
          "per_lift_compost": 7.50,
          "waste_allowance_kg": 45,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 45,
          "compost_excess_per_kg": 0.18,
          "notes": "No monthly service charge. Waste €12.50/lift (45kg included, then €0.23/kg). Recycling €6/lift (20kg, then €0.15/kg). Organic €7.50/lift (45kg, then €0.18/kg)."
        },
        {
          "name": "Pay By Weight",
          "type": "pay_by_weight",
          "price": 0,
          "price_frequency": "per_collection",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "per_kg_waste": 0.28,
          "per_kg_recycling": 0.16,
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "notes": "Pure pay-by-weight. Waste €0.28/kg, Recycling €0.16/kg. No monthly fee."
        }
      ]
    },
    {
      "name": "Quality Recycling Ltd",
      "phone": "051 642 334",
      "website": "https://www.qrl.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (qrl.wis.ie) returned 'Location not served' for Kilkenny city and Thomastown addresses. QRL is based in Carrick-on-Suir, Co. Tipperary and does not appear to serve Kilkenny."
      },
      "address_used": null,
      "service_notes": "Based in Carrick-on-Suir, Co. Tipperary. Tested Kilkenny city and south Kilkenny — neither served.",
      "plans": []
    },
    {
      "name": "Ray Whelan Limited",
      "phone": "059 9147 678",
      "website": "https://www.raywhelan.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Ray Whelan confirms they serve Kilkenny (listed on raywhelan.ie alongside Carlow, Laois, Kildare, Wicklow, Wexford) but no pricing is published online."
      },
      "address_used": null,
      "service_notes": "Serves Kilkenny from Carlow base. No pricing published online - contact directly. Payment via direct debit, Payzone, online or phone.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (aesirl.wis.ie) returned 'Location not served' for Kilkenny city and Callan addresses. AES is based in Newbridge, Co. Kildare and does not appear to serve Kilkenny."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Kilkenny county.",
      "plans": []
    },
    {
      "name": "Clean Ireland Recycling",
      "phone": "1890 361 802",
      "website": "https://www.cleanireland.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Clean Ireland serves Limerick, Clare and North Kerry. Kilkenny is outside their service area."
      },
      "address_used": null,
      "service_notes": "Service area is Limerick, Clare and North Kerry only.",
      "plans": []
    },
    {
      "name": "Country Clean Recycling",
      "phone": "022 468 49",
      "website": "https://www.countryclean.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (countryclean.wis.ie) returned 'Location not served' for Kilkenny city and Thomastown addresses."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Kilkenny county despite being listed.",
      "plans": []
    },
    {
      "name": "Doheny Wheelie Bins & Recycling Limited",
      "phone": "056 772 9838",
      "website": "https://www.dohenywheeliebins.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website uses a self-signed SSL certificate — both WebFetch and browser access failed. No pricing could be retrieved."
      },
      "address_used": null,
      "service_notes": "Kilkenny-based waste collector. Website inaccessible due to SSL certificate error.",
      "plans": []
    }
  ]
}
,
"Laois": {
  "county": "Laois",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites and WIS portals",
  "companies": [
    {
      "name": "Oxigen Environmental",
      "phone": "0818 694 438",
      "website": "https://www.oxigen.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from oxigen.wis.ie/signup for Portlaoise, Co. Laois. Plans labelled 'Laois Offaly Urban'."
      },
      "address_used": "1 Main Street, Portlaoise, Co. Laois",
      "service_notes": "Fortnightly collection. Weight allowances apply to black waste bin — excess charged at €0.24/kg. 2-bin plans include opt-out of brown bin (alternative food waste management required). Pay By Lift also available.",
      "plans": [
        {
          "name": "3 Bin Laois Offaly Urban",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": "Most families",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "3 Small Bin Laois Offaly Urban",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": "Single or couple-person dwellings",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": null
        },
        {
          "name": "2 Bin Laois Offaly Urban",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": "Most families (no organics)",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Customer must confirm alternative food waste management method."
        },
        {
          "name": "2 Small Bin Laois Offaly Urban",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple-person dwellings (no organics)",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Customer must confirm alternative food waste management method."
        },
        {
          "name": "Pay By Lift Laois Offaly",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": "Very light producers",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 45,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 45,
          "compost_excess_per_kg": 0.18,
          "notes": null
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from aesirl.wis.ie/signup for Portlaoise, Co. Laois."
      },
      "address_used": "1 Main Street, Portlaoise, Co. Laois",
      "service_notes": "Fortnightly collection. 12-month contract (€50 cancellation fee). €50 prepayment required. Glass bin included where available. No excess charge on recycling or compost bins.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No excess charge on recycling or compost. 12-month contract with €50 cancellation fee. €50 prepayment required."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No excess charge on recycling or compost. 12-month contract with €50 cancellation fee. €50 prepayment required."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No excess charge on recycling or compost. 12-month contract with €50 cancellation fee. €50 prepayment required."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": "Light use or small households",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "12-month contract with €50 cancellation fee. €50 prepayment required."
        }
      ]
    },
    {
      "name": "Ray Whelan Limited",
      "phone": "059 9147 680",
      "website": "https://www.raywhelan.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from raywhelan.wis.ie/signup for Portlaoise, Co. Laois."
      },
      "address_used": "1 Main Street, Portlaoise, Co. Laois",
      "service_notes": "Alternate weekly collection (bins on a schedule). Compost/organic bin included where available. Initial deposit required. Bins delivered within 5-7 working days.",
      "plans": [
        {
          "name": "Standard Monthly",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 71,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.10,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No extra charge for recycling or compost. Initial €48 deposit (2 months credit) required."
        },
        {
          "name": "Pay By Weight",
          "type": "pay_by_weight",
          "price": 10.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.20,
          "notes": "Initial €50 deposit required. Minimum €10 credit required."
        },
        {
          "name": "Pay By Lift",
          "type": "pay_by_lift",
          "price": 12.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.12,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Initial €50 deposit required. Minimum €10 credit required."
        }
      ]
    },
    {
      "name": "Ryan Brothers Waste Recycling Services",
      "phone": "0504 21658",
      "website": "https://www.ryanbros.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from ryanbros.ie/domestic-pricing-options/. Ryan Brothers serves Tipperary, Laois, Offaly, and Kilkenny."
      },
      "address_used": null,
      "service_notes": "Billed every 6 months. Brown bin delivered where available (rollout ongoing). Weight allowances apply to general waste and brown bin waste.",
      "plans": [
        {
          "name": "140L Plan",
          "type": "monthly",
          "price": 31.10,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed every 6 months. Brown bin included where available. Weight allowances apply."
        },
        {
          "name": "240L Plan",
          "type": "monthly",
          "price": 34.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed every 6 months. Brown bin included where available. Weight allowances apply."
        },
        {
          "name": "360L Plan",
          "type": "monthly",
          "price": 44.21,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Billed every 6 months. Brown bin included where available. Weight allowances apply."
        }
      ]
    },
    {
      "name": "Mr Binman",
      "phone": "061 351 131",
      "website": "https://www.mrbinman.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mrbinman.com/bin-collection-quote/ for Portlaoise, Co. Laois. Laois is a country (rural) area — country rates apply."
      },
      "address_used": "1 Lyster Square, Portlaoise, Co. Laois",
      "service_notes": "Fortnightly collection. Only Pay Per Lift (Xtralite) and TerraUrban plans available in Laois — Household Standard and Lite plans are not offered. Country rates apply: 25L organic bin at €2.50/lift.",
      "plans": [
        {
          "name": "Pay Per Lift (Xtralite)",
          "type": "pay_by_lift",
          "price": 6.05,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.10,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€6.05/mo service charge + €6.24/lift waste (140L, 20kg, €0.20/kg excess) + €3.13/lift recycling (140L, 15kg, €0.10/kg excess) + €2.50/lift organic (country rate, 25L). Glass free."
        },
        {
          "name": "TerraUrban",
          "type": "monthly",
          "price": 27.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27.25/mo. 240L waste + 240L recycling + 140L organic. €30 discount if paying by direct debit. Weight limit 300kg per 6 months on waste, €0.20/kg excess."
        }
      ]
    },
    {
      "name": "Doheny Wheelie Bins & Recycling Limited",
      "phone": "056 772 9838",
      "website": "https://www.dohenywheeliebins.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website uses a self-signed SSL certificate — both WebFetch and browser access failed. No pricing could be retrieved."
      },
      "address_used": null,
      "service_notes": "Website inaccessible due to SSL certificate error.",
      "plans": []
    }
  ]
}
,
"Leitrim": {
  "county": "Leitrim",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites (mulleadys.com/household.html, barnarecycling.com signup portal)",
  "companies": [
    {
      "name": "Mulleadys Ltd",
      "phone": "043 3324 129",
      "website": "https://www.mulleadys.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mulleadys.com/household.html. Mulleadys explicitly serves Longford, Leitrim, Roscommon and Westmeath."
      },
      "address_used": null,
      "service_notes": "Fortnightly collection. Payment due 1st of each month. One-time bin rental fee of €60 applies. Fair usage policy — surcharges may apply for excessive weights. WIS account portal: mulleadys.wis.ie.",
      "plans": [
        {
          "name": "Monthly Plan Lite",
          "type": "monthly",
          "price": 22.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 20,
          "compost_excess_per_kg": 0.15,
          "notes": "€22.50/month. 30kg waste allowance (€0.20/kg excess), 15kg recycling allowance (€0.20/kg excess), 20kg food bin allowance (€0.15/kg excess). Fortnightly collection."
        },
        {
          "name": "Monthly Plan Standard",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": "€27.50/month. 60kg waste allowance (€0.20/kg excess), 30kg recycling allowance (€0.20/kg excess), 30kg food bin allowance (€0.15/kg excess). Fortnightly collection."
        },
        {
          "name": "Pay by Weight",
          "type": "pay_by_weight",
          "price": 15.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.22,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.12,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.12,
          "notes": "€15/month standing charge + €0.22/kg waste + €0.12/kg recycling + €0.12/kg food waste. Minimum account credit €7.50."
        }
      ]
    },
    {
      "name": "Barna Recycling",
      "phone": "091 771 623",
      "website": "https://www.barnarecycling.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from cportal.barnarecycling.com/signup/signup.php selecting 'Co Leitrim' as service area."
      },
      "address_used": null,
      "service_notes": "Barna Recycling serves Connacht counties including Co. Leitrim. Plans include both fixed and pay-by-weight options. Compost bin availability being rolled out — weight limits differ depending on whether compost is available.",
      "plans": [
        {
          "name": "PBW Standard",
          "type": "pay_by_weight",
          "price": 21.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.05,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.15,
          "notes": "€21/month standing charge + pay by weight: Waste €0.25/kg, Recycling €0.05/kg, Compost €0.15/kg."
        },
        {
          "name": "Pay By Weight Lite",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.05,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.15,
          "notes": "€12/month standing charge + €3/lift per bin type + weight charges: Waste €0.25/kg, Recycling €0.05/kg, Compost €0.15/kg."
        },
        {
          "name": "ECO Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "Larger households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 350,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€210 per 6 months (~€35/month). Weight limit 350kg per 6 months for waste (450kg if compost not yet available in area). Surcharge €0.25/kg over limit. Suited to larger households."
        },
        {
          "name": "ECO Small",
          "type": "monthly",
          "price": 31.67,
          "price_frequency": "monthly",
          "household_size": "Smaller households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 200,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€190 per 6 months (~€31.67/month). Weight limit 200kg per 6 months for waste (300kg if compost not yet available in area). Surcharge €0.25/kg over limit. Suited to smaller households."
        }
      ]
    },
    {
      "name": "Oxigen Environmental",
      "phone": "0818 694 440",
      "website": "https://www.oxigen.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (oxigen.wis.ie) returned 'Location not served' for Carrick-on-Shannon, Co. Leitrim."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Leitrim.",
      "plans": []
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Panda signup flow returned 'no available price options' for Carrick-on-Shannon, Co. Leitrim."
      },
      "address_used": "Bridge Street, Carrick-On-Shannon, Co. Leitrim",
      "service_notes": "Does not serve Leitrim.",
      "plans": []
    },
    {
      "name": "The Binman",
      "phone": "086 3517273",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "Donegal Waste & Recycle",
      "phone": "074 974 0132",
      "website": "https://www.donegalwasteandrecycle.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No pricing found on website. Bin sizes listed but no costs published. Customers directed to contact directly."
      },
      "address_used": null,
      "service_notes": "Bi-weekly collection. Pay as You Go option available. No pricing published online.",
      "plans": []
    }
  ]
}
,
"Limerick": {
  "county": "Limerick",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + individual company websites, WIS portals, AES WIS portal, Mr Binman quote page, Clare county data (Clean Ireland)",
  "companies": [
    {
      "name": "KWD Recycling",
      "phone": "1850 373 737",
      "website": "https://www.kwd.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from kwd.ie/page96.php. KWD explicitly states it serves Kerry, West Cork and West Limerick."
      },
      "address_used": null,
      "service_notes": "Fortnightly collection. Service and weight charge model — the less you weigh, the less you pay. Payment options: 12 months, 6 months, or monthly Easy Pay direct debit. Serves West Limerick.",
      "plans": [
        {
          "name": "Option A (240L)",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": "Households with more than 2 people or higher waste volumes",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€29.50/month (Easy Pay). Also available: €175 per 6 months or €340 per year. 240L waste bin, 360L recycling bin, 25L food waste bin, 7L kitchen caddy. Weight-based charges apply."
        },
        {
          "name": "Option B (140L)",
          "type": "monthly",
          "price": 25.50,
          "price_frequency": "monthly",
          "household_size": "Households of 2 people or less / low waste volumes",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€25.50/month (Easy Pay). Also available: €150 per 6 months or €290 per year. 140L waste bin, 360L recycling bin, 25L food waste bin, 7L kitchen caddy. Weight-based charges apply."
        }
      ]
    },
    {
      "name": "Mr Binman",
      "phone": "061 351 132",
      "website": "https://www.mrbinman.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mrbinman.com/bin-collection-quote/ selecting Co. Limerick."
      },
      "address_used": null,
      "service_notes": "Limerick is country area — organic bin is 25L (not 140L city size) for Xtralite and Lite plans. Household Standard plan includes 140L organic bin. Bins collected on alternate weeks: Week 1 = Waste & Organic, Week 2 = Recycling & Glass. Glass caddy free. Text reminders provided.",
      "plans": [
        {
          "name": "Household Standard",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Introductory price €27/mo for first 6 months, then €33.52/mo. 300kg allowance per 6 months (~50kg/month). 240L waste, 240L recycling, 140L organic, 25L glass. €0.20/kg excess on waste."
        },
        {
          "name": "Pay Per Lift (Xtralite)",
          "type": "pay_by_lift",
          "price": 6.05,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.10,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€6.05/mo service charge + €6.24/lift waste (140L, 20kg, €0.20/kg excess) + €3.13/lift recycling (140L, 15kg, €0.10/kg excess) + €2.50/lift organic (country 25L rate). Glass free. Min account credit €12."
        },
        {
          "name": "Lite",
          "type": "pay_by_lift",
          "price": 9.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€9.50/mo service charge + €9.50/lift waste (240L, 25kg) + €4.00/lift recycling (240L, 15kg) + €3.00/lift organic (country 25L rate). Glass free. Min account credit €13."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Panda signup flow returned 'no available price options' for Limerick address."
      },
      "address_used": null,
      "service_notes": "Does not serve Limerick.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from aesirl.wis.ie/residential for 1 O'Connell Street, Limerick (V94 CD78). Location confirmed served with price_group_ids=1."
      },
      "address_used": "1 O'Connell Street, Limerick",
      "service_notes": "Fortnightly collections. 12-month contract applies (€50 cancellation fee within 12 months). €50 prepayment required to open account. Glass bin included where available. All plans include 240L waste, 240L recycling, 140L compost, 140L glass.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg monthly waste allowance. €0.30/kg excess on waste. No excess on recycling or compost. Glass bin if available in area."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27/month. 40kg monthly waste allowance. €0.30/kg excess on waste. No excess on recycling or compost. Glass bin if available in area."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€32/month. 60kg monthly waste allowance. €0.30/kg excess on waste. No excess on recycling or compost. Glass bin if available in area."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/mo service charge + €15.60/lift waste (up to 60kg, €0.30/kg over limit) + €8/lift recycling + €6.60/lift compost + €5.50/lift glass (quarterly service). Best for light use or small households."
        }
      ]
    },
    {
      "name": "Clean Ireland Recycling",
      "phone": "1890 361 803",
      "website": "https://www.cleanireland.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from cleanireland.ie. Clean Ireland explicitly serves Limerick, Clare, and North Kerry (same pricing across service area)."
      },
      "address_used": null,
      "service_notes": "Pay-by-weight model. Serves Limerick, Clare, and North Kerry. Price billed every 6 months. Glass collection included in certain areas (every 2 months).",
      "plans": [
        {
          "name": "Household Pay-by-Weight",
          "type": "pay_by_weight",
          "price": 25.80,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€154.82 per 6 months (~€25.80/month). Includes 240L waste, 360L recycling, 25L food waste, and glass collection (where available)."
        }
      ]
    },
    {
      "name": "Country Clean Recycling Unlimited Company",
      "phone": "022 468 51",
      "website": "https://www.countryclean.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (countryclean.wis.ie) returned 'Location not served' for Limerick city address (V94 CD78)."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Limerick county.",
      "plans": []
    },
    {
      "name": "Higgins Waste & Recycling Services Ltd",
      "phone": "066 7123 059",
      "website": "https://www.higginswaste.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website unreachable (ERR_CONNECTION_TIMED_OUT) for both higginswaste.com and higginswaste.com/domestic. No pricing could be retrieved."
      },
      "address_used": null,
      "service_notes": "Limerick-based waste collector. Website has been persistently unreachable — may be temporarily down or no longer active.",
      "plans": []
    }
  ]
}
,
"Longford": {
  "county": "Longford",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + alliedrecycling.wis.ie, mulleadys.com/household.html, oxigen.wis.ie, aesirl.wis.ie",
  "companies": [
    {
      "name": "Allied Recycling",
      "phone": "046 9433366",
      "website": "https://www.alliedrecycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from alliedrecycling.wis.ie/residential for Main St, Longford (N39 F0P8). Location confirmed served. Three plans available including a Longford-specific plan."
      },
      "address_used": "Main Street, Longford (N39 F0P8)",
      "service_notes": "Fortnightly collections. 12-month contract with €50 cancellation fee. Minimum 3 months payment required before service commencement. Bin delivery charge €30 per bin. All plans include 240L waste, 240L recycling, 140L compost.",
      "plans": [
        {
          "name": "Standard Service",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 330,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 150,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 195,
          "compost_excess_per_kg": 0.20,
          "notes": "€29.50/month (€177/6mo, €354/year). 330kg waste allowance per 6 months (€0.25/kg excess), 150kg recycling per 6 months (€0.15/kg excess), 195kg compost per 6 months (€0.20/kg excess). 240L waste, 240L recycling, 140L compost bins."
        },
        {
          "name": "Longford Value Saver",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": "2-person household",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 200,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 130,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 130,
          "compost_excess_per_kg": 0.20,
          "notes": "€25/month (€150/6mo, €300/year). Ideal for 2-person household. 200kg waste allowance per 6 months (€0.25/kg excess), 130kg recycling per 6 months (€0.15/kg excess), 130kg compost per 6 months (€0.20/kg excess). 240L waste, 240L recycling, 140L compost bins. Longford-specific plan."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 5.63,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.20,
          "notes": "€5.63/month service charge (~€1.30/week) + per-lift charges: Waste €14.50/lift (up to 40kg, €0.25/kg thereafter), Recycling €7.50/lift (up to 15kg, €0.15/kg thereafter), Compost €5.00/lift + €0.20/kg. Credit must be on account before presenting bins. Bin delivery €30 per bin."
        }
      ]
    },
    {
      "name": "Mulleadys Ltd",
      "phone": "043 3324 130",
      "website": "https://www.mulleadys.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mulleadys.com/household.html. Mulleadys explicitly serves Longford, Leitrim, Roscommon and Westmeath."
      },
      "address_used": null,
      "service_notes": "Fortnightly collection. Payment due 1st of each month. One-time bin rental fee of €60 applies. Fair usage policy — surcharges may apply for excessive weights. WIS account portal: mulleadys.wis.ie.",
      "plans": [
        {
          "name": "Monthly Plan Lite",
          "type": "monthly",
          "price": 22.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 20,
          "compost_excess_per_kg": 0.15,
          "notes": "€22.50/month. 30kg waste allowance (€0.20/kg excess), 15kg recycling allowance (€0.20/kg excess), 20kg food bin allowance (€0.15/kg excess). Fortnightly collection."
        },
        {
          "name": "Monthly Plan Standard",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": "€27.50/month. 60kg waste allowance (€0.20/kg excess), 30kg recycling allowance (€0.20/kg excess), 30kg food bin allowance (€0.15/kg excess). Fortnightly collection."
        },
        {
          "name": "Pay by Weight",
          "type": "pay_by_weight",
          "price": 15.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.22,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.12,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.12,
          "notes": "€15/month standing charge + €0.22/kg waste + €0.12/kg recycling + €0.12/kg food waste. Minimum account credit €7.50."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 441",
      "website": "https://www.oxigen.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (oxigen.wis.ie) returned 'Location not served' for Main St, Longford (N39 F0P8)."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Longford county.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (aesirl.wis.ie) returned 'Location not served' for Main St, Longford (N39 F0P8)."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Longford county.",
      "plans": []
    },
    {
      "name": "CMS Waste Disposal Ltd",
      "phone": "087 835 5181",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    }
  ]
}
,
"Louth": {
  "county": "Louth",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + mcelvaneywaste.com, oxigen.wis.ie, panda.ie signup flow, aesirl.wis.ie",
  "companies": [
    {
      "name": "McElvaney's Waste & Recycling and Ace Environmental",
      "phone": "047 808 90",
      "website": "https://www.mcelvaneywaste.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mcelvaneywaste.com/household-customers/wheel-bins/choose-a-service/. McElvaney's is listed as a Louth collector on mywaste.ie. Note: their website primarily references Monaghan and Cavan service areas — may only cover border areas of Louth."
      },
      "address_used": null,
      "service_notes": "Bi-weekly collections. Bill Pay uses 6-monthly invoicing with options for monthly/quarterly direct debit. Pay As You Go uses E-Tag card, topped up at Payzone outlets, online or via app. Urban areas get 140L compost bin, rural areas get 25L food caddy. Free glass collection included.",
      "plans": [
        {
          "name": "Bill Pay – 140L Waste",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "From €27/month. Weight limit applies. 140L waste bin + 240L recycling bin + 140L compost (urban) or 25L food caddy (rural) + free glass collection. Bi-weekly. Rural areas: compost caddy €4.20 extra/month. First month free on 12-month signup."
        },
        {
          "name": "Bill Pay – 240L Waste",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "From €32/month. Weight limit applies. 240L waste bin + 240L recycling bin + 140L compost (urban) or 25L food caddy (rural) + free glass collection. Bi-weekly. Rural areas: compost caddy €4.20 extra/month. First month free on 12-month signup."
        },
        {
          "name": "Pay As You Go",
          "type": "pay_by_lift",
          "price": 12.13,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€2.80/week (~€12.13/month) service charge + per-lift: 140L Waste €9.50/lift (>30kg: +€0.23/kg), 240L Waste €14/lift (>50kg: +€0.23/kg), 240L Recycling €7/lift, 140L Compost €7.50/lift (urban only), 23L Compost caddy €4.20/month service charge (rural). E-Tag card top-up system."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 442",
      "website": "https://www.oxigen.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from oxigen.wis.ie/residential for 1 Park St, Dundalk, Co. Louth (A91 V7D6). Location confirmed served with price_group_ids=1."
      },
      "address_used": "1 Park Street, Dundalk, Co. Louth",
      "service_notes": "Fortnightly collection. Plans named 'N Louth Urban'. All plans have weight allowances on waste bin; excess charged at €0.24/kg. 2-bin plans opt customers out of organic collection.",
      "plans": [
        {
          "name": "3 Bin N Louth Urban",
          "type": "monthly",
          "price": 29.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€29/month (€87/3mo, €174/6mo, €348/year). 240L waste, 240L recycling, 140L organic. Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Suits most families."
        },
        {
          "name": "3 Small Bin N Louth Urban",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€25/month (€75/3mo, €150/6mo, €300/year). 140L waste, 140L recycling, 140L organic. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings."
        },
        {
          "name": "2 Bin N Louth Urban",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€25/month (€75/3mo, €150/6mo, €300/year). 240L waste, 240L recycling only (no organic). 72kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection and must declare alternative food waste management."
        },
        {
          "name": "2 Small Bin N Louth Urban",
          "type": "monthly",
          "price": 23.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€23/month (€69/3mo, €138/6mo, €276/year). 140L waste, 140L recycling only (no organic). 48kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection."
        },
        {
          "name": "3-Bin Pay By Lift NE",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 45,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 45,
          "compost_excess_per_kg": 0.18,
          "notes": "€12/month service charge + per-lift: Waste €14/lift (up to 45kg, €0.24/kg excess), Recycling €7/lift (up to 20kg, €0.15/kg excess), Organic €7.50/lift (up to 45kg, €0.18/kg excess). 240L waste, 240L recycling, 140L organic. For very light producers."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Panda signup flow returned 'no available price options in your area' for 1 Park Street, Dundalk, Co. Louth."
      },
      "address_used": "1 Park Street, Dundalk, Co. Louth",
      "service_notes": "Does not serve Louth.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (aesirl.wis.ie) returned 'Location not served' for Dundalk, Co. Louth (A91 V7D6)."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Louth county.",
      "plans": []
    },
    {
      "name": "Ecological Waste Management Ltd",
      "phone": "042 9370152",
      "website": "https://www.ecological.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No pricing published on website. Customers directed to call 042 9370152 or email sales@ecological.ie to sign up."
      },
      "address_used": null,
      "service_notes": "Louth-based household waste collector. No online pricing available — sign-up by phone or email only.",
      "plans": []
    }
  ]
}
,
"Mayo": {
  "county": "Mayo",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + panda.ie signup flow (1 Main Street, Castlebar), cportal.barnarecycling.com (Co Mayo/Castlebar), individual company websites",
  "companies": [
    {
      "name": "Barna Recycling",
      "phone": "091 771 624",
      "website": "https://www.barnarecycling.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from cportal.barnarecycling.com/signup/signup_page2.php selecting 'Co Mayo' as service area and Castlebar as locality."
      },
      "address_used": null,
      "service_notes": "Barna Recycling serves Connacht counties including Co. Mayo. Plans include both pay-by-weight and fixed options. Compost bin availability being rolled out — weight limits differ depending on whether compost is available.",
      "plans": [
        {
          "name": "PBW Standard",
          "type": "pay_by_weight",
          "price": 21.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.05,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.15,
          "notes": "€21/month standing charge + pay by weight: Waste €0.25/kg, Recycling €0.05/kg, Compost €0.15/kg."
        },
        {
          "name": "Pay By Weight Lite",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.05,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.15,
          "notes": "€12/month standing charge + €3/lift per bin type + weight charges: Waste €0.25/kg, Recycling €0.05/kg, Compost €0.15/kg."
        },
        {
          "name": "ECO Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "Larger households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 350,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€210 per 6 months (~€35/month). Weight limit 350kg per 6 months for waste (450kg if compost not yet available in area). Surcharge €0.25/kg over limit. Suited to larger households."
        },
        {
          "name": "ECO Small",
          "type": "monthly",
          "price": 31.67,
          "price_frequency": "monthly",
          "household_size": "Smaller households",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 200,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€190 per 6 months (~€31.67/month). Weight limit 200kg per 6 months for waste (300kg if compost not yet available in area). Surcharge €0.25/kg over limit. Suited to smaller households."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for 1 Main Street, Castlebar, Co. Mayo. Plans are specific to Mayo (different pricing from other counties)."
      },
      "address_used": "1 Main Street, Castlebar, Co. Mayo",
      "service_notes": "Glass bin included for Mayo. Compost rollout ongoing in rural areas — if not yet available at address, customer will be notified. Unlimited recycling on flat plans.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 30.42,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": "€30.42/month. 40kg monthly waste allowance, €0.25/kg excess. 30kg recycling allowance, €0.19/kg excess. 40kg compost allowance, €0.19/kg excess. Glass bin included. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 33.25,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": "€33.25/month. 60kg monthly waste allowance, €0.25/kg excess. 30kg recycling allowance, €0.19/kg excess. 40kg compost allowance, €0.19/kg excess. Glass bin included. Most popular. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 38.50,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 100,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": "€38.50/month. 100kg monthly waste allowance, €0.25/kg excess. 30kg recycling allowance, €0.19/kg excess. 40kg compost allowance, €0.19/kg excess. Glass bin included. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 8.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.19,
          "notes": "€8.00/mo service charge + €15.00/lift waste + €6.75/lift recycling + €8.00/lift compost. Weight allowances apply per lift with €0.25/kg excess on waste, €0.19/kg on recycling and compost. Glass bin included."
        }
      ]
    },
    {
      "name": "Loftus Recycling",
      "phone": "096 325 00",
      "website": "https://www.loftusrecycling.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website refused connection (ERR_CONNECTION_REFUSED). No pricing could be retrieved."
      },
      "address_used": null,
      "service_notes": "Website persistently refused connection — may be temporarily down or no longer active.",
      "plans": []
    },
    {
      "name": "McGrath Industrial Waste Ltd.",
      "phone": "094 9031 315",
      "website": "https://www.mcgrathwaste.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Domestic page (mcgrathwaste.ie/domestic/) shows only an area search tool and 'Request a Quote' — no pricing published online."
      },
      "address_used": null,
      "service_notes": "Serves Mayo and Sligo. No online pricing — customers must request a quote by phone or through website.",
      "plans": []
    },
    {
      "name": "Sweeney Recycling",
      "phone": "094 9023 525",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "The Binman",
      "phone": "086 3517275",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "Ballinrobe Waste Disposal Ltd.",
      "phone": "094 954 1847",
      "website": "https://www.ballinrobewaste.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No pricing published on website. Customers directed to contact the company directly."
      },
      "address_used": null,
      "service_notes": "Serves South Mayo and parts of Galway. No online pricing available — contact by phone.",
      "plans": []
    },
    {
      "name": "Bourke Waste Removal Limited",
      "phone": "098 268 82",
      "website": "https://www.bourkewaste.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Website shows 'Get A Quote' / 'Call us on 098 26882 and get a quote today' — no pricing published online."
      },
      "address_used": null,
      "service_notes": "Based in Westport, Co. Mayo. No online pricing — customers directed to call for a quote.",
      "plans": []
    }
  ]
}
,
"Meath": {
  "county": "Meath",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + panda.ie signup flow (1/2 Trimgate Street, Navan), WIS portals (oxigen.wis.ie, aesirl.wis.ie, alliedrecycling.wis.ie, advancedwaste.wis.ie — Kells A82 A272 used where Navan C15 Y8X5 returned empty), thorntons-recycling.ie/household/customer-signup (Meath-specific plans), mulleadys.wis.ie",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for 1/2 Trimgate Street, Navan, Co. Meath. Plans are specific to Meath (different pricing from other counties)."
      },
      "address_used": "1/2 Trimgate Street, Navan, Co. Meath",
      "service_notes": "Glass bin included for Meath. Unlimited recycling and compost on all flat-rate plans (no excess charge). Compost rollout ongoing in rural areas. Pay Per Lift service charge billed half-yearly.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 25.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost — no excess. Glass bin included."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 28.50,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 44,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost — no excess. Glass bin included."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 34.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 80,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "Unlimited recycling and compost — no excess. Glass bin included."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 7.83,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 25,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.25,
          "per_lift_waste": 16.00,
          "per_lift_recycling": 5.25,
          "per_lift_compost": 6.50,
          "per_lift_glass": null,
          "notes": "Service charge €47/6 months. Waste €16/lift, recycling €5.25/lift, compost €6.50/lift. Glass included."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 443",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from oxigen.wis.ie for Kells, Co. Meath (A82 A272). price_group_ids=1. Navan (C15 Y8X5) returned empty — Kells was tried as an alternative address and confirmed served. Plans are labelled 'Cavan' in the system but returned for a Meath address, indicating shared pricing zone covering border areas."
      },
      "address_used": "Kells, Co. Meath (A82 A272)",
      "service_notes": "Serves Kells area of Meath (and likely other parts). Fortnightly collection. Plans shared with Cavan pricing zone. Weight allowances on waste bin; excess charged at €0.24/kg.",
      "plans": [
        {
          "name": "3 Bin Cavan",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "240L waste, 240L recycling, 140L organic. Fortnightly."
        },
        {
          "name": "3 Small Bin Cavan",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": "1-2 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "140L waste, 140L recycling, 140L organic."
        },
        {
          "name": "2 Bin Cavan",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No brown bin — customer opts out of organic collection."
        },
        {
          "name": "2 Small Bin Cavan",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": "1-2 people",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No brown bin — customer opts out of organic collection."
        },
        {
          "name": "Pay By Weight Cavan",
          "type": "pay_by_weight",
          "price": 16.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.16,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.18,
          "notes": "€16/month standing charge. Waste €0.28/kg, recycling €0.16/kg, organic €0.18/kg. No weight thresholds."
        }
      ]
    },
    {
      "name": "Thorntons Recycling",
      "phone": "01 6235 139",
      "website": "https://www.thorntons-recycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Meath is explicitly listed as a served county in thorntons-recycling.ie/household/customer-signup, with Meath-specific plan IDs (meath-24, meath-21, meath-52) and Meath-specific pricing. WIS portal (thorntons.wis.ie) remains unreachable but website confirms Meath service."
      },
      "address_used": null,
      "service_notes": "Bi-weekly collection. No annual fee — new customers pay 2 months upfront. 1st month free for new customers.",
      "plans": [
        {
          "name": "Eco Band Lite",
          "type": "monthly",
          "price": 26.49,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 25,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "1st month free for new customers. Pay 2 months (€52.98) upfront."
        },
        {
          "name": "Eco Band",
          "type": "monthly",
          "price": 31.49,
          "price_frequency": "monthly",
          "household_size": "4+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "1st month free for new customers. Pay 2 months (€62.98) upfront."
        },
        {
          "name": "Eco Band Pro",
          "type": "monthly",
          "price": 35.49,
          "price_frequency": "monthly",
          "household_size": "6+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.28,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "1st month free for new customers. Pay 2 months (€70.98) upfront."
        }
      ]
    },
    {
      "name": "Allied Recycling",
      "phone": "046 943 3366",
      "website": "http://www.alliedrecycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from alliedrecycling.wis.ie for Navan, Co. Meath. Meath-specific plans confirmed (labelled 'Standard Service' and 'Meath Value Saver')."
      },
      "address_used": "Navan, Co. Meath",
      "service_notes": "Fortnightly collections. 12-month contract, €50 cancellation fee. Min 3 months payment upfront. Bin delivery €30/bin.",
      "plans": [
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 5.63,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.20,
          "per_lift_waste": 14.50,
          "per_lift_recycling": 7.50,
          "per_lift_compost": 5.00,
          "per_lift_glass": null,
          "notes": "€5.63/month service charge. Waste €14.50/lift (40kg), recycling €7.50/lift (15kg), compost €5.00/lift."
        },
        {
          "name": "Meath Value Saver",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 150,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 130,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 150,
          "compost_excess_per_kg": 0.20,
          "notes": "150kg waste/6mo, 130kg recycling/6mo, 150kg compost/6mo. 240L waste + 240L recycling + 140L compost."
        },
        {
          "name": "Standard Service",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 330,
          "waste_allowance_period": "6_monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 150,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 195,
          "compost_excess_per_kg": 0.20,
          "notes": "330kg waste/6mo, 150kg recycling/6mo, 195kg compost/6mo. 240L waste + 240L recycling + 140L compost."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Kells, Co. Meath (A82 A272). price_group_ids=1. Navan (C15 Y8X5) returned empty — Kells confirmed served."
      },
      "address_used": "Kells, Co. Meath (A82 A272)",
      "service_notes": "Serves Kells area and likely wider Meath. Fortnightly collections. 12-month contract, €50 cancellation fee. €50 prepayment to open account. Glass bin if available in area.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 23.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No excess on recycling or compost. Glass bin if available."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No excess on recycling or compost. Glass bin if available."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "No excess on recycling or compost. Glass bin if available."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "per_lift_waste": 15.60,
          "per_lift_recycling": 8.00,
          "per_lift_compost": 6.60,
          "per_lift_glass": 5.50,
          "notes": "€15.20/month service. Waste €15.60/lift, recycling €8/lift, compost €6.60/lift, glass €5.50/lift (quarterly)."
        }
      ]
    },
    {
      "name": "Advanced Waste Recycling",
      "phone": "01 401 1930",
      "website": "https://www.advancedwaste.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (advancedwaste.wis.ie) returned price_group_ids=0 (not served) for 7 different Meath addresses tried: Navan (C15 Y8X5), Kells (A82 A272), Ashbourne (A84 VN62), Dunboyne (A86 XY02), Laytown (A92 H9R4), Ratoath (A85 XH72), Trim (C15 XC50). Does not serve Co. Meath."
      },
      "address_used": null,
      "service_notes": "Based in Saggart, Co. Dublin. Primarily serves Dublin. Does not serve Co. Meath.",
      "plans": []
    }
  ]
}
,
"Monaghan": {
  "county": "Monaghan",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + mcelvaneywaste.com (Bill Pay/PAYG), bluedolphinrecycling.ie/wheelie-bins, oxigen.wis.ie, aesirl.wis.ie",
  "companies": [
    {
      "name": "McElvaney's Waste & Recycling and Ace Environmental",
      "phone": "047 808 92",
      "website": "https://www.mcelvaneywaste.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mcelvaneywaste.com/household-customers/wheel-bins/choose-a-service/. McElvaney's primary service area is Monaghan and Cavan (also covers border areas of Louth)."
      },
      "address_used": null,
      "service_notes": "Bi-weekly collections. Bill Pay uses 6-monthly invoicing with options for monthly/quarterly direct debit. Pay As You Go uses E-Tag card, topped up at Payzone outlets, online or via app. Urban areas get 140L compost bin, rural areas get 25L food caddy. Free glass collection included.",
      "plans": [
        {
          "name": "Bill Pay – 140L Waste",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "From €27/month. Weight limit applies. 140L waste bin + 240L recycling bin + 140L compost (urban) or 25L food caddy (rural) + free glass collection. Bi-weekly. Rural areas: compost caddy €4.20 extra/month. First month free on 12-month signup."
        },
        {
          "name": "Bill Pay – 240L Waste",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "From €32/month. Weight limit applies. 240L waste bin + 240L recycling bin + 140L compost (urban) or 25L food caddy (rural) + free glass collection. Bi-weekly. Rural areas: compost caddy €4.20 extra/month. First month free on 12-month signup."
        },
        {
          "name": "Pay As You Go",
          "type": "pay_by_lift",
          "price": 12.13,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€2.80/week (~€12.13/month) service charge + per-lift: 140L Waste €9.50/lift (>30kg: +€0.23/kg), 240L Waste €14/lift (>50kg: +€0.23/kg), 240L Recycling €7/lift, 140L Compost €7.50/lift (urban only), 23L Compost caddy €4.20/month service charge (rural). E-Tag card top-up system."
        }
      ]
    },
    {
      "name": "Blue Dolphin Environmental Ltd",
      "phone": "047 577 86",
      "website": "https://www.bluedolphinrecycling.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from bluedolphinrecycling.ie/wheelie-bins. Blue Dolphin is a Monaghan-based operator (Smithborough, Co. Monaghan)."
      },
      "address_used": null,
      "service_notes": "Monaghan-based family business. All customers entitled to food bin from January 2024. Government Levy charged every 6 months. Weight allowances are per collection (per lift).",
      "plans": [
        {
          "name": "140L Waste Plan",
          "type": "monthly",
          "price": 23.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 20,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "From €23.50/month. 140L waste bin + 240L recycling bin + food caddy. 20kg allowed per waste collection, €0.23/kg excess. Government Levy billed separately every 6 months."
        },
        {
          "name": "240L Waste Plan",
          "type": "monthly",
          "price": 30.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "From €30.00/month. 240L waste bin + 240L recycling bin + food caddy. 50kg allowed per waste collection, €0.23/kg excess. Government Levy billed separately every 6 months. 360L, 660L and 1100L sizes also available."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 444",
      "website": "https://www.oxigen.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (oxigen.wis.ie) returned empty price_group_ids for H18 Y2H2 (Monaghan town). Location not served."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Co. Monaghan.",
      "plans": []
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (aesirl.wis.ie) returned empty price_group_ids for H18 Y2H2 (Monaghan town). Location not served."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Co. Monaghan.",
      "plans": []
    },
    {
      "name": "Mahony's Environmental Cleansing Ltd",
      "phone": "047 81 164",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "The Binman",
      "phone": "086 3517276",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    },
    {
      "name": "Ecological Waste Management Ltd",
      "phone": "042 9370152",
      "website": "https://www.ecological.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No pricing published on website. Customers directed to call 042 9370152 or email sales@ecological.ie to sign up."
      },
      "address_used": null,
      "service_notes": "Louth/Monaghan-area household waste collector. No online pricing available — sign-up by phone or email only.",
      "plans": []
    }
  ]
}
,
"Offaly": {
  "county": "Offaly",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + oxigen.wis.ie (Birr R42 K294), aesirl.wis.ie (Birr R42 K294), ryanbros.ie/domestic-pricing-options/, cleanireland.ie/residential-services/",
  "companies": [
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from oxigen.wis.ie for Birr, Co. Offaly (R42 K294). price_group_ids=1. Tullamore (R35 Y2H3) returned empty — Birr confirmed served. Plans are labelled 'Laois Offaly' in the WIS system."
      },
      "address_used": "Birr, Co. Offaly (R42 K294)",
      "service_notes": "Serves Birr area and likely wider Offaly. Fortnightly collection. Plans named 'Laois Offaly' — shared pricing zone with Laois. Weight allowances on waste bin; excess at €0.24/kg. 2-bin plans opt customers out of organic collection.",
      "plans": [
        {
          "name": "3 Bin Laois Offaly",
          "type": "monthly",
          "price": 32.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€32/month. 240L waste + 240L recycling + 140L organic. Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Suits most families."
        },
        {
          "name": "3 Small Bin Laois Offaly",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26.50/month. 140L waste + 140L recycling + 140L organic. Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings."
        },
        {
          "name": "2 Bin Laois Offaly",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27/month. 240L waste + 240L recycling (no organic). Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection."
        },
        {
          "name": "2 Small Bin Laois Offaly",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 140L waste + 140L recycling (no organic). Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection."
        },
        {
          "name": "Pay By Lift Laois Offaly",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 45,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 45,
          "compost_excess_per_kg": 0.18,
          "notes": "€12/month service charge + per-lift: Waste €14/lift (up to 45kg, €0.24/kg excess), Recycling €7/lift (up to 20kg, €0.15/kg excess), Organic €7/lift (up to 45kg, €0.18/kg excess). 240L waste + 240L recycling + 140L organic."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Birr, Co. Offaly (R42 K294). price_group_ids=1. Tullamore (R35 Y2H3) returned empty — Birr confirmed served."
      },
      "address_used": "Birr, Co. Offaly (R42 K294)",
      "service_notes": "Serves Birr area and likely wider Offaly. Fortnightly collections. 12-month contract with €50 cancellation fee. €50 prepayment required to open account. Glass bin included if available in area.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26/month. 40kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month. 60kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/month service charge + per-lift: Waste €15.60/lift (up to 60kg, €0.30/kg excess), Recycling €8/lift, Compost €6.60/lift, Glass €5.50/lift (quarterly). 240L waste + 240L recycling + 140L compost + 140L glass."
        }
      ]
    },
    {
      "name": "Ryan Brothers Waste Recycling Services",
      "phone": "0504 21660",
      "website": "https://www.ryanbros.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from ryanbros.ie/domestic-pricing-options/. Ryan Brothers website explicitly states service area includes Tipperary, Laois, Offaly and Kilkenny."
      },
      "address_used": null,
      "service_notes": "Based in Thurles, Co. Tipperary. Serves Tipperary, Laois, Offaly and Kilkenny. Brown bin delivered if available in area (rollout in progress). Weight allowances apply to general waste and brown bin. Billing is half-annually (€186.60 etc.) with bi-monthly instalment option (1/3 of half-annual amount).",
      "plans": [
        {
          "name": "140L Waste Plan",
          "type": "monthly",
          "price": 31.10,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€186.60/half-year (~€31.10/month), or €62.20 every 2 months. 140L general waste bin + 240L dry recycling bin. Brown bin delivered if available in area. Weight allowances apply."
        },
        {
          "name": "240L Waste Plan",
          "type": "monthly",
          "price": 34.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€205.50/half-year (~€34.25/month), or €68.50 every 2 months. 240L general waste bin + 240L dry recycling bin. Brown bin delivered if available in area. Weight allowances apply."
        },
        {
          "name": "360L Waste Plan",
          "type": "monthly",
          "price": 44.21,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€265.28/half-year (~€44.21/month), or €88.42 every 2 months. 360L general waste bin + 240L dry recycling bin. Brown bin delivered if available in area. Weight allowances apply."
        }
      ]
    },
    {
      "name": "Clean Ireland Recycling",
      "phone": "1890 361 804",
      "website": "https://www.cleanireland.ie",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing retrieved from cleanireland.ie/residential-services/. Company is listed for Offaly on mywaste.ie. However, their website primarily references Clare, Limerick and Tipperary as service counties, and Offaly is not explicitly mentioned. Pricing is from their public residential page."
      },
      "address_used": null,
      "service_notes": "Mid-West operator based in Shannon, Co. Clare. Website explicitly mentions Clare, Limerick and Tipperary service areas. Listed for Offaly on mywaste.ie — may serve border areas. Pay by weight only — no flat-rate plans. Sign-up via ciprtl.amcsgroup.com. Annual option also available at €309/year.",
      "plans": [
        {
          "name": "Pay by Weight – Half Yearly",
          "type": "pay_by_weight",
          "price": 25.80,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€154.82/6 months (~€25.80/month). €10 discount if on Direct Debit (€144.82/6mo ≈ €24.14/month). 240L waste + 360L recycling + 25L food caddy + 7L kitchen caddy + 50L glass container (certain areas). Fortnightly collection. All bins collected together in multi-compartment trucks. Annual option: €309/year (~€25.75/month)."
        }
      ]
    }
  ]
}
,
"Roscommon": {
  "county": "Roscommon",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + panda.ie signup flow (1 Main Street, Castlerea), oxigen.wis.ie (Athlone N37 EY22), aesirl.wis.ie (Athlone N37 EY22), mulleadys.com/household.html",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for 1 Main Street, Castlerea, Co. Roscommon. Plans confirmed specific to Roscommon area. No glass bin (unlike Mayo)."
      },
      "address_used": "1 Main Street, Castlerea, Co. Roscommon",
      "service_notes": "Serves Co. Roscommon. Compost rollout ongoing in rural areas — if not yet available at address, customer will be notified. No glass bin for Roscommon (unlike Mayo). Fortnightly collection.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 30.42,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": "€30.42/month. 40kg monthly waste allowance, €0.25/kg excess. 30kg recycling allowance, €0.19/kg excess. 40kg compost allowance, €0.19/kg excess. For 1-3 people. No glass bin."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 33.25,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": "€33.25/month. Most popular plan. 60kg monthly waste allowance, €0.25/kg excess. 30kg recycling allowance, €0.19/kg excess. 40kg compost allowance, €0.19/kg excess. For 3-5 people. No glass bin."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 38.50,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 100,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.19,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.19,
          "notes": "€38.50/month. 100kg monthly waste allowance, €0.25/kg excess. 30kg recycling allowance, €0.19/kg excess. 40kg compost allowance, €0.19/kg excess. For 5+ people. No glass bin."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 8.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 25,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": 50,
          "compost_excess_per_kg": 0.20,
          "notes": "€8.00/month service charge + per-lift: Waste €15.00/lift (up to 50kg, €0.20/kg excess), Recycling €6.75/lift (up to 25kg, €0.25/kg excess), Compost €8.00/lift (up to 50kg, €0.20/kg excess). No glass bin."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from oxigen.wis.ie for Athlone, Co. Roscommon (N37 EY22 — Roscommon side of Athlone). price_group_ids=1. Plans are labelled 'Westmeath' — shared pricing zone with Co. Westmeath."
      },
      "address_used": "Athlone, Co. Roscommon (N37 EY22)",
      "service_notes": "Serves Athlone area including Roscommon side. Plans labelled 'Westmeath' — shared pricing zone. Fortnightly collection. Weight allowances on waste bin; excess at €0.24/kg. 2-bin plans opt customers out of organic collection.",
      "plans": [
        {
          "name": "3 Bin Westmeath",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€29.50/month (€354/year). 240L waste + 240L recycling + 140L organic. Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Suits most families."
        },
        {
          "name": "3 Small Bin Westmeath",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26/month. 140L waste + 140L recycling + 140L organic. Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings."
        },
        {
          "name": "2 Bin Westmeath",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€25/month. 240L waste + 240L recycling (no organic). Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection."
        },
        {
          "name": "2 Small Bin Westmeath",
          "type": "monthly",
          "price": 22.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€22/month. 140L waste + 140L recycling (no organic). Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection."
        },
        {
          "name": "Pay By Lift Westmeath",
          "type": "pay_by_lift",
          "price": 6.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 45,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": "€6.50/month (€78/year) service charge + per-lift: Waste €14.50/lift (up to 45kg, €0.23/kg excess), Recycling €7.50/lift (up to 20kg, €0.15/kg excess), Organic €6.50/lift (up to 30kg, €0.15/kg excess). 240L waste + 240L recycling + 240L/140L organic."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Athlone, Co. Roscommon (N37 EY22 — Roscommon side of Athlone). price_group_ids=1."
      },
      "address_used": "Athlone, Co. Roscommon (N37 EY22)",
      "service_notes": "Serves Athlone area including Roscommon side. Fortnightly collections. 12-month contract with €50 cancellation fee. €50 prepayment required to open account. Glass bin included if available in area.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26/month. 40kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month. 60kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/month service charge + per-lift: Waste €15.60/lift (up to 60kg, €0.30/kg excess), Recycling €8/lift, Compost €6.60/lift, Glass €5.50/lift (quarterly). 240L waste + 240L recycling + 140L compost + 140L glass."
        }
      ]
    },
    {
      "name": "Mulleadys Waste",
      "phone": null,
      "website": "https://www.mulleadys.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from mulleadys.com/household.html. Company website explicitly states service area includes Longford, Leitrim, Roscommon and Westmeath."
      },
      "address_used": null,
      "service_notes": "Serves Longford, Leitrim, Roscommon and Westmeath. Fortnightly collection of all bins. Food bin service in designated areas only. One-off non-refundable bin rental charge of €60. Monthly payment due 1st of each month; Direct Debit available. Min credit of €7.50 required on Pay by Weight accounts.",
      "plans": [
        {
          "name": "Monthly Plan Lite",
          "type": "monthly",
          "price": 22.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 20,
          "compost_excess_per_kg": 0.15,
          "notes": "€22.50/month. 240L waste + 240L recycling + 25L food bin (designated areas). 30kg waste/month allowance €0.20 excess; 15kg recycling €0.20 excess; 20kg food €0.15 excess. Fortnightly. €60 one-off bin rental."
        },
        {
          "name": "Monthly Plan Standard",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": "€27.50/month. 240L waste + 240L recycling + 25L food bin (designated areas). 60kg waste/month allowance €0.20 excess; 30kg recycling €0.20 excess; 30kg food €0.15 excess. Fortnightly. €60 one-off bin rental."
        },
        {
          "name": "Pay by Weight",
          "type": "pay_by_weight",
          "price": 15.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.22,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.12,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.12,
          "notes": "€15/month service charge + pay per kg: Waste €0.22/kg, Recycling €0.12/kg, Food €0.12/kg. No weight allowances. Min credit €7.50 on account at all times. 240L waste + 240L recycling + 25L food (designated areas). Fortnightly. €60 one-off bin rental."
        }
      ]
    },
    {
      "name": "Barna Recycling",
      "phone": "091 771 624",
      "website": "https://www.barnarecycling.com",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Barna Recycling's 'Areas We Service' page confirms coverage of Galway, Sligo and Leitrim only. Roscommon is not listed. Signup portal returned no plans for Roscommon, Athlone, and Castlerea localities."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Roscommon. Coverage limited to Galway, Sligo and Leitrim.",
      "plans": []
    },
    {
      "name": "The Binman",
      "phone": "086 3517276",
      "website": null,
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "No website listed. Phone-only contact. No online pricing available."
      },
      "address_used": null,
      "service_notes": null,
      "plans": []
    }
  ]
}
,
"Sligo": {
  "county": "Sligo",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + panda.ie signup flow (Grange, Co. Sligo), donegalwasterecycle.wis.ie (O'Connell St, Sligo), barnarecycling.com (areas page + signup portal)",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for 1 Main Street, Grange, Co. Sligo. Sligo-specific pricing — differs from Mayo/Roscommon. Unlimited recycling and compost allowances (unlike other counties)."
      },
      "address_used": "1 Main Street, Grange, Co. Sligo",
      "service_notes": "Serves Co. Sligo. Unlimited recycling and compost on flat plans (unlike other counties). No glass bin. Compost rollout ongoing in rural areas. Fortnightly collection.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 31.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31.50/month. 46kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35.00/month. Most popular plan. 59kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 41.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€41.00/month. 85kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 25,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": 50,
          "compost_excess_per_kg": 0.20,
          "notes": "€12.00/month service charge + per-lift: Waste €16.00/lift (up to 50kg, €0.20/kg excess), Recycling €5.25/lift (up to 25kg, €0.25/kg excess), Compost €6.50/lift (up to 50kg, €0.20/kg excess). No glass bin."
        }
      ]
    },
    {
      "name": "Donegal Waste & Recycle",
      "phone": "+353 74 974 0130",
      "website": "https://www.donegalwasteandrecycle.com",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from donegalwasterecycle.wis.ie for O'Connell St, Sligo (price_group_ids=1). Company website has dedicated Sligo service page. Based in Co. Donegal; serves border counties including Sligo."
      },
      "address_used": "O'Connell St, Sligo",
      "service_notes": "Based in Co. Donegal. Serves Sligo. Quarterly weight allowances on waste bin; excess at €0.25/kg. Government levy of €0.01135/kg applies to waste lifts. One-off €40 bin delivery charge on Pre Pay plans. Compost caddy (25L) included. Fortnightly collection.",
      "plans": [
        {
          "name": "Standard 240 + 240 + Caddy",
          "type": "monthly",
          "price": 34.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 210,
          "waste_allowance_period": "quarterly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€34/month (€408/year). 240L waste + 240L recycling + 25L compost caddy. 210kg waste allowance per quarter (~70kg/month), €0.25/kg excess."
        },
        {
          "name": "Mix 240 Waste + 120 Recycle + Caddy",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 210,
          "waste_allowance_period": "quarterly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month (€372/year). 240L waste + 120L recycling + 25L compost caddy. 210kg waste allowance per quarter (~70kg/month), €0.25/kg excess."
        },
        {
          "name": "Standard 120 + 120 + Caddy",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 105,
          "waste_allowance_period": "quarterly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27/month (€324/year). 120L waste + 120L recycling + 25L compost caddy. 105kg waste allowance per quarter (~35kg/month), €0.25/kg excess."
        },
        {
          "name": "Mix 120 Waste + 240 Recycle + Caddy",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 105,
          "waste_allowance_period": "quarterly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month (€372/year). 120L waste + 240L recycling + 25L compost caddy. 105kg waste allowance per quarter (~35kg/month), €0.25/kg excess."
        },
        {
          "name": "2x240 Waste + 240 Recycle + Caddy",
          "type": "monthly",
          "price": 52.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 420,
          "waste_allowance_period": "quarterly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€52/month (€624/year). 2x 240L waste + 240L recycling + 25L compost caddy. 420kg waste allowance per quarter (~140kg/month), €0.25/kg excess."
        },
        {
          "name": "Pre Pay Top Up",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€5/month service charge + per-lift: Waste €13/lift (up to 40kg, €0.25/kg excess), Recycling €8/lift, Compost €5/lift. Government levy €0.01135/kg on waste. €40 one-off bin delivery. 240L waste + 240L recycling + 25L compost caddy."
        },
        {
          "name": "Pre Pay Annual",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€60/year (~€5/month) annual service charge + per-lift: Waste €13/lift (up to 40kg, €0.25/kg excess), Recycling €8/lift, Compost €5/lift. Government levy €0.01135/kg on waste. €40 one-off bin delivery. 240L waste + 240L recycling + 25L compost caddy."
        }
      ]
    },
    {
      "name": "Barna Recycling",
      "phone": "071 9154532",
      "website": "https://www.barnarecycling.com",
      "pricing_available": false,
      "confidence": {
        "level": "medium",
        "reason": "Barna Recycling's 'Areas We Service' page confirms Galway, Sligo and Leitrim coverage. A dedicated Sligo depot exists at Finisklin Road, Sligo (phone 071 9154532). However, the signup portal (cportal.barnarecycling.com) returns no plans for any Sligo locality tried (Sligo, Ballymote, Tubbercurry, Strandhill, Rosses Point, Collooney). No online pricing available — customers must sign up via phone."
      },
      "address_used": null,
      "service_notes": "Serves Co. Sligo with dedicated Sligo depot. Online signup portal has no plans configured for Sligo — contact the Sligo depot directly on 071 9154532 to sign up.",
      "plans": []
    },
    {
      "name": "McGrath Industrial Waste Ltd.",
      "phone": "094 9031 315",
      "website": "https://www.mcgrathwaste.ie",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "McGrath serves Mayo and Sligo per their website. No online pricing published — customers must request a quote."
      },
      "address_used": null,
      "service_notes": "Based in Castlebar, Co. Mayo. Serves Mayo and Sligo. No online pricing available — contact by phone.",
      "plans": []
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Oxigen WIS portal (oxigen.wis.ie) session was loaded with a Westmeath area search from prior county. Oxigen primarily serves Leinster and Midlands — Co. Sligo in northwest Connacht is outside their typical service area. Not verified via eircode check."
      },
      "address_used": null,
      "service_notes": "Does not appear to serve Co. Sligo.",
      "plans": []
    }
  ]
}
,
"Tipperary": {
  "county": "Tipperary",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + panda.ie signup flow (1 Main Street, Tipperary Town), aesirl.wis.ie (Parnell St, Thurles & Kickham St, Nenagh), ryanbros.ie/domestic-pricing-options/, cleanireland.ie/residential-services/",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for 1 Main Street, Tipperary Town. Unlimited recycling and compost allowances on flat plans."
      },
      "address_used": "1 Main Street, Tipperary Town",
      "service_notes": "Serves Co. Tipperary. Unlimited recycling and compost on flat plans. No glass bin. Compost rollout ongoing in rural areas. Fortnightly collection.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 31.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31.50/month. 46kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35.00/month. Most popular plan. 59kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 41.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€41.00/month. 85kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 50,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 25,
          "recycling_excess_per_kg": 0.25,
          "compost_allowance_kg": 50,
          "compost_excess_per_kg": 0.20,
          "notes": "€12.00/month service charge + per-lift: Waste €16.00/lift (up to 50kg, €0.20/kg excess), Recycling €5.25/lift (up to 25kg, €0.25/kg excess), Compost €6.50/lift (up to 50kg, €0.20/kg excess). No glass bin."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Parnell St, Thurles (price_group_ids=1) and Kickham St, Nenagh (price_group_ids=1). Note: Clonmel area returned 0 — AES serves North/Mid Tipperary but not South Tipperary (Clonmel area)."
      },
      "address_used": "Parnell St, Thurles, Co. Tipperary",
      "service_notes": "Serves North and Mid Tipperary (including Thurles, Nenagh). Does not appear to serve South Tipperary (Clonmel area returned price_group_ids=0). Fortnightly collections. 12-month contract with €50 cancellation fee. €50 prepayment required. Glass bin included if available.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26/month. 40kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month. 60kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/month service charge + per-lift: Waste €15.60/lift (up to 60kg, €0.30/kg excess), Recycling €8/lift, Compost €6.60/lift, Glass €5.50/lift (quarterly). 240L waste + 240L recycling + 140L compost + 140L glass."
        }
      ]
    },
    {
      "name": "Ryan Brothers Waste Recycling Services",
      "phone": "0504 21660",
      "website": "https://www.ryanbros.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from ryanbros.ie/domestic-pricing-options/. Ryan Brothers is based in Thurles, Co. Tipperary and explicitly states service area includes Tipperary, Laois, Offaly and Kilkenny."
      },
      "address_used": null,
      "service_notes": "Based in Thurles, Co. Tipperary. Serves Tipperary, Laois, Offaly and Kilkenny. Brown bin delivered if available in area (rollout in progress). Weight allowances apply to general waste and brown bin. Billing is half-annually with bi-monthly instalment option.",
      "plans": [
        {
          "name": "140L Waste Plan",
          "type": "monthly",
          "price": 31.10,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€186.60/half-year (~€31.10/month), or €62.20 every 2 months. 140L general waste bin + 240L dry recycling bin. Brown bin delivered if available in area. Weight allowances apply."
        },
        {
          "name": "240L Waste Plan",
          "type": "monthly",
          "price": 34.25,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€205.50/half-year (~€34.25/month), or €68.50 every 2 months. 240L general waste bin + 240L dry recycling bin. Brown bin delivered if available in area. Weight allowances apply."
        },
        {
          "name": "360L Waste Plan",
          "type": "monthly",
          "price": 44.21,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€265.28/half-year (~€44.21/month), or €88.42 every 2 months. 360L general waste bin + 240L dry recycling bin. Brown bin delivered if available in area. Weight allowances apply."
        }
      ]
    },
    {
      "name": "Clean Ireland Recycling",
      "phone": "1890 361 804",
      "website": "https://www.cleanireland.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from cleanireland.ie/residential-services/. Company website explicitly lists Tipperary as a service county alongside Clare and Limerick."
      },
      "address_used": null,
      "service_notes": "Mid-West operator based in Shannon, Co. Clare. Explicitly serves Clare, Limerick and Tipperary. Pay by weight only — no flat-rate plans. Sign-up via ciprtl.amcsgroup.com. Annual option also available at €309/year.",
      "plans": [
        {
          "name": "Pay by Weight – Half Yearly",
          "type": "pay_by_weight",
          "price": 25.80,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€154.82/6 months (~€25.80/month). €10 discount if on Direct Debit (€144.82/6mo ≈ €24.14/month). 240L waste + 360L recycling + 25L food caddy + 7L kitchen caddy + 50L glass container (certain areas). Fortnightly collection. All bins collected together in multi-compartment trucks. Annual option: €309/year (~€25.75/month)."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "WIS portal (oxigen.wis.ie) returned price_group_ids=0 for multiple Tipperary addresses: Tipperary Town, Clonmel, Thurles, Nenagh. Location not served."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Tipperary.",
      "plans": []
    }
  ]
}
,
"Waterford": {
  "county": "Waterford",
  "scraped_date": "2026-03-21",
  "source": "mywaste.ie + panda.ie signup flow (Barronstrand Street, Waterford City), oxigen.wis.ie (Barronstrand Street, Waterford City), qrl.wis.ie (Barronstrand Street, Waterford City), wiserbins.wis.ie (Tallow, Co. Waterford)",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Barronstrand Street, Waterford City. Plans confirmed for Co. Waterford. PPL per-lift weight limits not published by Panda for Waterford (all blank in modal)."
      },
      "address_used": "Barronstrand Street, Waterford City",
      "service_notes": "Serves Co. Waterford. Unlimited recycling and compost on flat plans. No glass bin. Compost rollout ongoing in rural areas. Fortnightly collection. Pay Per Lift weight allowances per lift not published for Waterford.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 31.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31.50/month. 46kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35.00/month. Most popular plan. 59kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 41.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€41.00/month. 85kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€12.00/month service charge + per-lift: Waste €16.00/lift, Recycling €5.25/lift, Compost €6.50/lift. Per-lift weight allowances not published by Panda for Waterford. No glass bin."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from oxigen.wis.ie for Barronstrand Street, Waterford City (price_group_ids=1). Plans labelled 'Waterford'. No Pay By Lift option available for Waterford (not shown in residential plans)."
      },
      "address_used": "Barronstrand Street, Waterford City",
      "service_notes": "Serves Co. Waterford. Fortnightly collection. Weight allowances on waste bin; excess at €0.24/kg. No Pay By Lift plan available for Waterford. 2 months FREE signup offer.",
      "plans": [
        {
          "name": "3 Bin Waterford",
          "type": "monthly",
          "price": 29.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€29/month. 240L waste + 240L recycling + 140L organic. Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Suits most families. 2 months FREE intro offer."
        },
        {
          "name": "3 Small Bin Waterford",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€25/month. 140L waste + 140L recycling + 140L organic. Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings. 2 months FREE intro offer."
        },
        {
          "name": "2 Bin Waterford",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27/month. 240L waste + 240L recycling (no organic). Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection. 2 months FREE intro offer."
        },
        {
          "name": "2 Small Bin Waterford",
          "type": "monthly",
          "price": 23.50,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€23.50/month. 140L waste + 140L recycling (no organic). Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings. 2 months FREE intro offer."
        }
      ]
    },
    {
      "name": "Quality Recycling Ltd",
      "phone": "1890 929241",
      "website": "https://www.qrl.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from qrl.wis.ie for Barronstrand Street, Waterford City (price_group_ids=1). Company website explicitly states service area includes Waterford City and County and South Tipperary."
      },
      "address_used": "Barronstrand Street, Waterford City",
      "service_notes": "South East operator based in Carrick-on-Suir, Co. Tipperary. Serves Waterford City and County and South Tipperary. Fortnightly collections. Free collection reminder texts. 2 months FREE introductory offer on flat plans. No weight allowances specified on flat plans.",
      "plans": [
        {
          "name": "Pay As You Go",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 35,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.18,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.18,
          "notes": "€5/month service charge + per-lift: Waste €13/lift (up to 35kg, €0.25/kg excess), Compost €8/lift (up to 40kg, €0.18/kg excess), Recycling €6.50/lift (up to 20kg, €0.18/kg excess). 240L waste + 360L recycling + 140L compost. Suitable for light users."
        },
        {
          "name": "140L Waste + 360L Recycling + 240L Compost",
          "type": "monthly",
          "price": 23.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€23/month (€69/3mo, €138/6mo). 140L waste + 360L recycling + 240L compost. Suitable for single or couple-person dwellings. Fortnightly. 2 months FREE intro offer."
        },
        {
          "name": "240L Waste + 360L Recycling + 240L Compost",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26.50/month (€79.50/3mo, €159/6mo). 240L waste + 360L recycling + 240L compost. Suitable for most households. Fortnightly. 2 months FREE intro offer."
        },
        {
          "name": "360L Waste + 360L Recycling + 240L Compost",
          "type": "monthly",
          "price": 40.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€40/month (€120/3mo, €240/6mo). 360L waste + 360L recycling + 240L compost. Suitable for larger households. Fortnightly. 2 months FREE intro offer."
        }
      ]
    },
    {
      "name": "Wiser Recycling",
      "phone": "021 4630601",
      "website": "https://www.wiserbins.ie",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing retrieved from wiserbins.wis.ie for Tallow, Co. Waterford (price_group_ids=1). Wiser serves West Waterford only — Waterford City, Dungarvan, Tramore, Lismore, Cappoquin all returned price_group_ids=0. Only Tallow and Ardmore (far west) confirmed served."
      },
      "address_used": "Tallow, Co. Waterford",
      "service_notes": "Cork-based operator. Serves West Waterford only (Tallow, Ardmore area confirmed). Does NOT serve Waterford City, Dungarvan, Tramore, Lismore or Cappoquin. Fortnightly collection. Contact office on 021-4630601 for different bin sizes.",
      "plans": [
        {
          "name": "240L Lite 3-Bin",
          "type": "monthly",
          "price": 32.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€32.50/month (€97.50/3mo, €195/6mo). Standard allocation: 240L waste + 240L food bin + 360L recycling. West Waterford only. Contact 021-4630601 for alternative bin sizes."
        },
        {
          "name": "240L Standard 3-Bin",
          "type": "monthly",
          "price": 36.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€36/month (€108/3mo, €216/6mo). Standard allocation: 240L waste + 240L food bin + 360L recycling. West Waterford only. Contact 021-4630601 for alternative bin sizes."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "AES WIS portal (aesirl.wis.ie) returned price_group_ids=0 for both Waterford City and Dungarvan. Location not served."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Waterford.",
      "plans": []
    }
  ]
}
,
"Westmeath": {
  "county": "Westmeath",
  "scraped_date": "2026-03-21",
  "source": "oxigen.wis.ie (Athlone — confirmed 'Westmeath' zone during Roscommon research), aesirl.wis.ie (Dominick Street, Mullingar), panda.ie signup flow (Dominick Street, Mullingar), mulleadys.wis.ie (Dominick Street, Mullingar)",
  "companies": [
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from oxigen.wis.ie. Athlone (N37 EY22) returned price_group_ids=1 and plans labelled 'Westmeath'. Mullingar (Dominick St) also returned price_group_ids=1. Full plans confirmed during Roscommon/Westmeath research."
      },
      "address_used": "Church Street, Athlone, Co. Westmeath",
      "service_notes": "Serves Co. Westmeath. Fortnightly collection. Plans named 'Westmeath' — distinct pricing zone. Weight allowances on waste bin; excess at €0.24/kg (3-bin) or €0.23/kg (Pay By Lift).",
      "plans": [
        {
          "name": "3 Bin Westmeath",
          "type": "monthly",
          "price": 29.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€29.50/month. 240L waste + 240L recycling + 140L organic. Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Suits most families."
        },
        {
          "name": "3 Small Bin Westmeath",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26/month. 140L waste + 140L recycling + 140L organic. Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings."
        },
        {
          "name": "2 Bin Westmeath",
          "type": "monthly",
          "price": 25.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 72,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€25/month. 240L waste + 240L recycling (no organic). Fortnightly. 72kg/month waste allowance, €0.24/kg excess. Customer opts out of brown bin collection."
        },
        {
          "name": "2 Small Bin Westmeath",
          "type": "monthly",
          "price": 22.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling"],
          "waste_allowance_kg": 48,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.24,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€22/month. 140L waste + 140L recycling (no organic). Fortnightly. 48kg/month waste allowance, €0.24/kg excess. Suitable for single or couple-person dwellings."
        },
        {
          "name": "Pay By Lift Westmeath",
          "type": "pay_by_lift",
          "price": 6.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 45,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.23,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.15,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": "€6.50/month service charge + per-lift: Waste €14.50/lift (up to 45kg, €0.23/kg excess), Recycling €7.50/lift (up to 20kg, €0.15/kg excess), Organic €6.50/lift (up to 30kg, €0.15/kg excess). 240L waste + 240L recycling + 140L organic."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Dominick Street, Mullingar (price_group_ids=1). Also confirmed for Athlone, Moate and Kilbeggan (all price_group_ids=1). Serves all of Co. Westmeath."
      },
      "address_used": "Dominick Street, Mullingar, Co. Westmeath",
      "service_notes": "Serves all of Co. Westmeath. Fortnightly collections. 12-month contract with €50 cancellation fee. €50 prepayment required to open account. Glass bin included if available in area.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 26.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26/month. 40kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month. 60kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/month service charge + per-lift: Waste €15.60/lift (up to 60kg, €0.30/kg excess), Recycling €8/lift, Compost €6.60/lift, Glass €5.50/lift (quarterly). 240L waste + 240L recycling + 140L compost + 140L glass."
        }
      ]
    },
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Dominick Street, Mullingar, Co. Westmeath. Unlimited recycling and compost on flat plans. PPL per-lift weight limits not published for Westmeath (blank in modal)."
      },
      "address_used": "Dominick Street, Mullingar, Co. Westmeath",
      "service_notes": "Serves Co. Westmeath. Unlimited recycling and compost on flat plans. No glass bin (glass icon shown in UI but allowance is blank). Compost rollout ongoing in rural areas. Fortnightly collection. Pay Per Lift weight allowances per lift not published for Westmeath.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 31.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31.50/month. 46kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35.00/month. Most popular plan. 59kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 41.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€41.00/month. 85kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€12.00/month service charge + per-lift: Waste €16.00/lift, Recycling €5.25/lift, Compost €6.50/lift. Per-lift weight allowances not published by Panda for Westmeath. No glass bin."
        }
      ]
    },
    {
      "name": "Mulleadys Recycling",
      "phone": "090 6490400",
      "website": "https://www.mulleadys.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from mulleadys.wis.ie for Dominick Street, Mullingar (price_group_ids=1). Also confirmed for Moate and Castlepollard. Athlone (Westmeath side) and Kilbeggan returned price_group_ids=0 — partial coverage of county."
      },
      "address_used": "Dominick Street, Mullingar, Co. Westmeath",
      "service_notes": "Roscommon/Westmeath operator. Serves Mullingar, Moate, Castlepollard and surrounding areas. Does NOT serve Athlone (Westmeath side) or Kilbeggan. Weight allowances on all bins. Pay by Weight plan charges per kg with no fixed allowance. Minimum €7.50 credit required on Pay by Weight accounts.",
      "plans": [
        {
          "name": "Monthly Plan Lite",
          "type": "monthly",
          "price": 22.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 15,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 20,
          "compost_excess_per_kg": 0.15,
          "notes": "€22.50/month. 240L waste + 240L recycling + 30L food bin. Waste: 30kg/mo allowance, €0.20/kg excess. Recycling: 15kg/mo, €0.20/kg excess. Food: 20kg/mo, €0.15/kg excess. Payment on 1st of month."
        },
        {
          "name": "Monthly Plan Standard",
          "type": "monthly",
          "price": 27.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 30,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 30,
          "compost_excess_per_kg": 0.15,
          "notes": "€27.50/month. 240L waste + 240L recycling + 30L food bin. Waste: 60kg/mo allowance, €0.20/kg excess. Recycling: 30kg/mo, €0.20/kg excess. Food: 30kg/mo, €0.15/kg excess. Payment on 1st of month."
        },
        {
          "name": "Monthly Plan Extra",
          "type": "monthly",
          "price": 32.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 75,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.20,
          "recycling_allowance_kg": 38,
          "recycling_excess_per_kg": 0.20,
          "compost_allowance_kg": 37,
          "compost_excess_per_kg": 0.15,
          "notes": "€32.50/month. 240L waste + 240L recycling + 30L food bin. Waste: 75kg/mo allowance, €0.20/kg excess. Recycling: 38kg/mo, €0.20/kg excess. Food: 37kg/mo, €0.15/kg excess. Payment on 1st of month."
        },
        {
          "name": "Pay by Weight",
          "type": "pay_by_weight",
          "price": 15.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.22,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.12,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.12,
          "notes": "€15/month service charge + pay per kg: Waste €0.22/kg, Recycling €0.12/kg, Food €0.12/kg. 240L waste + 240L recycling + 30L food bin. Minimum €7.50 credit required at all times. No Direct Debit available."
        }
      ]
    }
  ]
}
,
"Wexford": {
  "county": "Wexford",
  "scraped_date": "2026-03-21",
  "source": "panda.ie signup flow (Main Street, Wexford Town), aesirl.wis.ie (Main Street, Wexford Town), qrl.wis.ie (New Ross, Co. Wexford), raywhelan.wis.ie (Main Street, Wexford Town)",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Main Street, Wexford Town. Plans confirmed. PPL per-lift weight limits not published for Wexford (blank in modal)."
      },
      "address_used": "Main Street, Wexford Town",
      "service_notes": "Serves Co. Wexford. Unlimited recycling and compost on flat plans. No glass bin (glass icon shown in UI but allowance is blank). Compost rollout ongoing in rural areas. Fortnightly collection. Pay Per Lift weight allowances per lift not published for Wexford.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 31.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31.50/month. 46kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35.00/month. Most popular plan. 59kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 41.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€41.00/month. 85kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€12.00/month service charge + per-lift: Waste €16.00/lift, Recycling €5.25/lift, Compost €6.50/lift. Per-lift weight allowances not published by Panda for Wexford. No glass bin."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Main Street, Wexford Town (price_group_ids=1). Also confirmed for Enniscorthy, New Ross and Gorey. Serves all of Co. Wexford. Note: AES Smart is €27/month for Wexford, unlike most other counties where it is €26/month."
      },
      "address_used": "Main Street, Wexford Town",
      "service_notes": "Serves all of Co. Wexford. Fortnightly collections. 12-month contract with €50 cancellation fee. €50 prepayment required to open account. Glass bin included if available in area. AES Smart plan is €27/month in Wexford (€26 in other counties).",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27/month (Wexford-specific price — €26/month in other counties). 40kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 31.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31/month. 60kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/month service charge + per-lift: Waste €15.60/lift (up to 60kg, €0.30/kg excess), Recycling €8/lift, Compost €6.60/lift, Glass €5.50/lift (quarterly). 240L waste + 240L recycling + 140L compost + 140L glass."
        }
      ]
    },
    {
      "name": "Ray Whelan",
      "phone": "059 9140340",
      "website": "https://www.raywhelan.ie",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from raywhelan.wis.ie for Main Street, Wexford Town (price_group_ids=1). Also confirmed for Enniscorthy, New Ross and Gorey. Serves all of Co. Wexford. Carlow-based operator explicitly listing Wexford on their website."
      },
      "address_used": "Main Street, Wexford Town",
      "service_notes": "Carlow-based operator serving Carlow, Laois, Kildare, Kilkenny, Wicklow and Wexford. Alternate weekly collection (effectively fortnightly). Initial account setup requires €48 (flat plan) or €50 (Pay By Weight / Pay By Lift) upfront payment which acts as account credit. Minimum €10 credit required at all times on Pay By Weight and Pay By Lift plans.",
      "plans": [
        {
          "name": "Monthly Flat Rate",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 71,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.10,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 240L waste + 240L recycling + 140L organic (where available). 71kg/month waste allowance, €0.10/kg excess. No extra charge for recycling or compost. Initial €48 setup payment (credit for first 2 months). Alternate weekly collection."
        },
        {
          "name": "Pay By Weight",
          "type": "pay_by_weight",
          "price": 10.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": 0.00,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": 0.20,
          "notes": "€10/month service charge + pay per kg: Waste €0.30/kg, Recycling free, Compost €0.20/kg (where available). 240L waste + 240L recycling + 140L organic. Min €10 credit on account at all times. Initial €50 setup payment. Alternate weekly collection."
        },
        {
          "name": "Pay By Lift",
          "type": "pay_by_lift",
          "price": 12.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.12,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€12.50/month service charge + per-lift: Waste €8.00/lift (up to 30kg, €0.12/kg excess), Recycling €2.00/lift, Compost €6.00/lift (where available). 240L waste + 240L recycling + 140L organic. Min €10 credit on account. Initial €50 setup payment. Alternate weekly collection."
        }
      ]
    },
    {
      "name": "Quality Recycling Ltd",
      "phone": "1890 929241",
      "website": "https://www.qrl.ie",
      "pricing_available": true,
      "confidence": {
        "level": "medium",
        "reason": "Pricing retrieved from qrl.wis.ie for New Ross, Co. Wexford (price_group_ids=1). However Wexford Town, Enniscorthy and Gorey all returned price_group_ids=0. QRL serves South Wexford (New Ross area) which borders their core Waterford/South Tipperary service area."
      },
      "address_used": "New Ross, Co. Wexford",
      "service_notes": "South East operator based in Carrick-on-Suir, Co. Tipperary. Serves South Wexford (New Ross area) only — does NOT serve Wexford Town, Enniscorthy or Gorey. Fortnightly collections. Free collection reminder texts. 2 months FREE introductory offer on flat plans.",
      "plans": [
        {
          "name": "Pay As You Go",
          "type": "pay_by_lift",
          "price": 5.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 35,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": 20,
          "recycling_excess_per_kg": 0.18,
          "compost_allowance_kg": 40,
          "compost_excess_per_kg": 0.18,
          "notes": "€5/month service charge + per-lift: Waste €13/lift (up to 35kg, €0.25/kg excess), Compost €8/lift (up to 40kg, €0.18/kg excess), Recycling €6.50/lift (up to 20kg, €0.18/kg excess). 240L waste + 360L recycling + 140L compost. South Wexford (New Ross area) only."
        },
        {
          "name": "140L Waste + 360L Recycling + 240L Compost",
          "type": "monthly",
          "price": 23.00,
          "price_frequency": "monthly",
          "household_size": "Single or couple",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€23/month (€69/3mo, €138/6mo). 140L waste + 360L recycling + 240L compost. Suitable for single or couple-person dwellings. Fortnightly. 2 months FREE intro offer. South Wexford (New Ross area) only."
        },
        {
          "name": "240L Waste + 360L Recycling + 240L Compost",
          "type": "monthly",
          "price": 26.50,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26.50/month (€79.50/3mo, €159/6mo). 240L waste + 360L recycling + 240L compost. Suitable for most households. Fortnightly. 2 months FREE intro offer. South Wexford (New Ross area) only."
        },
        {
          "name": "360L Waste + 360L Recycling + 240L Compost",
          "type": "monthly",
          "price": 40.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": null,
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€40/month (€120/3mo, €240/6mo). 360L waste + 360L recycling + 240L compost. Suitable for larger households. Fortnightly. 2 months FREE intro offer. South Wexford (New Ross area) only."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Oxigen WIS portal (oxigen.wis.ie) returned price_group_ids=0 for all Wexford addresses tried: Wexford Town, Enniscorthy, New Ross, Gorey. Location not served."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Wexford.",
      "plans": []
    }
  ]
}
,
"Wicklow": {
  "county": "Wicklow",
  "scraped_date": "2026-03-21",
  "source": "panda.ie signup flow (Main Street, Wicklow Town), aesirl.wis.ie (Wicklow Town — south/central Wicklow; Bray/Greystones/Enniskerry returned pgids=0), citybin.wis.ie (Bray + Greystones + Wicklow Town all pgids=1, Dublin pricing zone)",
  "companies": [
    {
      "name": "Panda Green",
      "phone": "01 8298992",
      "website": "https://www.panda.ie/household/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved directly from panda.ie signup flow for Main Street, Wicklow Town. Serves all Co. Wicklow. Per-lift weight allowances not published by Panda for Wicklow (all blank in modal)."
      },
      "address_used": "Main Street, Wicklow Town",
      "service_notes": "Serves all Co. Wicklow. Unlimited recycling and compost on flat plans. No glass bin. Compost rollout ongoing in rural areas. Fortnightly collection. Pay Per Lift weight allowances per lift not published for Wicklow.",
      "plans": [
        {
          "name": "Essential",
          "type": "monthly",
          "price": 31.50,
          "price_frequency": "monthly",
          "household_size": "1-3 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 46,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€31.50/month. 46kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 1-3 people."
        },
        {
          "name": "Standard",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": "3-5 people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 59,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35.00/month. Most popular plan. 59kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 3-5 people."
        },
        {
          "name": "Plus",
          "type": "monthly",
          "price": 41.00,
          "price_frequency": "monthly",
          "household_size": "5+ people",
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 85,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.25,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€41.00/month. 85kg monthly waste allowance, €0.25/kg excess. Unlimited recycling and compost. No glass bin. For 5+ people."
        },
        {
          "name": "Pay Per Lift",
          "type": "pay_by_lift",
          "price": 12.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": null,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": null,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€12.00/month service charge + per-lift: Waste €16.00/lift, Recycling €5.25/lift, Compost €6.50/lift. Per-lift weight allowances not published by Panda for Wicklow. No glass bin."
        }
      ]
    },
    {
      "name": "AES Recycling",
      "phone": "045 580 060",
      "website": "https://www.aesrecycling.ie/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from aesirl.wis.ie for Wicklow Town (pgids=1). Also confirmed: Arklow, Blessington, Rathdrum, Baltinglass all pgids=1. Bray, Greystones, Enniskerry all returned pgids=0 — AES does not serve north Wicklow. AES Plus (€35/65kg) and Smart (€27/40kg) are higher than other counties (€31/60kg and €26/40kg respectively)."
      },
      "address_used": "Main Street, Wicklow Town",
      "service_notes": "Serves south and central Co. Wicklow only (Wicklow Town, Arklow, Blessington, Rathdrum, Baltinglass confirmed). Does NOT serve north Wicklow (Bray, Greystones, Enniskerry returned pgids=0). Higher pricing in Wicklow vs other counties. Fortnightly collections. 12-month contract with €50 cancellation fee. €50 prepayment required. Glass bin included if available.",
      "plans": [
        {
          "name": "AES Lite",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month. 30kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment."
        },
        {
          "name": "AES Smart",
          "type": "monthly",
          "price": 27.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 40,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€27/month. 40kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment. Note: AES Smart is €27 in Wicklow vs €26 in most other counties."
        },
        {
          "name": "AES Plus",
          "type": "monthly",
          "price": 35.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€35/month. 65kg/month waste allowance, €0.30/kg excess. No excess on recycling or compost. 240L waste + 240L recycling + 140L compost + 140L glass (if available). 12-month contract, €50 cancellation fee, €50 prepayment. Note: AES Plus is €35/65kg in Wicklow vs €31/60kg in most other counties."
        },
        {
          "name": "Pay by Lift",
          "type": "pay_by_lift",
          "price": 15.20,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost", "glass"],
          "waste_allowance_kg": 60,
          "waste_allowance_period": "per_lift",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€15.20/month service charge + per-lift: Waste €15.60/lift (up to 60kg, €0.30/kg excess), Recycling €8/lift, Compost €6.60/lift, Glass €5.50/lift (quarterly). 240L waste + 240L recycling + 140L compost + 140L glass."
        }
      ]
    },
    {
      "name": "The City Bin Co.",
      "phone": "091 747 474",
      "website": "https://www.citybin.com/",
      "pricing_available": true,
      "confidence": {
        "level": "high",
        "reason": "Pricing retrieved from citybin.wis.ie for Bray, Greystones, and Wicklow Town — all returned pgids=1 under the Dublin pricing zone. Plans labelled 'Dublin' apply to all Co. Wicklow."
      },
      "address_used": "Main Street, Bray, Co. Wicklow",
      "service_notes": "Dublin-based operator. Serves all Co. Wicklow under their Dublin pricing zone (confirmed: Bray, Greystones, Wicklow Town all pgids=1). 3-bin service: 240L waste + 240L recycling + 240L compost. Free SMS collection reminders. Bins placed back neatly after collection. Annual plans include 1 month free. Fortnightly collection.",
      "plans": [
        {
          "name": "City Lite - Dublin",
          "type": "monthly",
          "price": 24.00,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 30,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€24/month (or €264/year — 1 month free). 240L waste + 240L recycling + 240L compost. 30kg/month waste allowance, €0.30/kg excess. Lightest plan, rewards heavy recyclers. Free SMS reminders. Annual upfront price: €264."
        },
        {
          "name": "City Essential - Dublin",
          "type": "monthly",
          "price": 26.49,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 42,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€26.49/month (or €293.89/year — 1 month free). 240L waste + 240L recycling + 240L compost. 42kg/month waste allowance, €0.30/kg excess. Most popular plan. Free SMS reminders. Annual upfront price: €293.89."
        },
        {
          "name": "City Extra - Dublin",
          "type": "monthly",
          "price": 30.49,
          "price_frequency": "monthly",
          "household_size": null,
          "bins_included": ["general_waste", "recycling", "compost"],
          "waste_allowance_kg": 65,
          "waste_allowance_period": "monthly",
          "excess_charge_per_kg": 0.30,
          "recycling_allowance_kg": null,
          "recycling_excess_per_kg": null,
          "compost_allowance_kg": null,
          "compost_excess_per_kg": null,
          "notes": "€30.49/month (or €337.89/year — 1 month free). 240L waste + 240L recycling + 240L compost. 65kg/month waste allowance, €0.30/kg excess. For larger households. Free SMS reminders. Annual upfront price: €337.89."
        }
      ]
    },
    {
      "name": "Oxigen Environmental Unlimited Company",
      "phone": "0818 694 445",
      "website": "https://www.oxigen.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Oxigen WIS portal (oxigen.wis.ie) returned price_group_ids=0 for multiple Wicklow addresses. Location not served."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Wicklow.",
      "plans": []
    },
    {
      "name": "Ray Whelan",
      "phone": null,
      "website": "https://www.raywhelan.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Ray Whelan WIS portal (raywhelan.wis.ie) returned price_group_ids=0 for all Wicklow addresses checked. Location not served."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Wicklow.",
      "plans": []
    },
    {
      "name": "Greyhound Recycling",
      "phone": "01 467 0033",
      "website": "https://www.greyhound.ie/",
      "pricing_available": false,
      "confidence": {
        "level": "none",
        "reason": "Greyhound WIS portal returned price_group_ids=0 for Wicklow addresses checked. Location not served."
      },
      "address_used": null,
      "service_notes": "Does not serve Co. Wicklow.",
      "plans": []
    }
  ]
}
};
