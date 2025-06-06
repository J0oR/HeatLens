export const chartDataConfig = {
  temp: {
    line1dataKey: "station",
    line2dataKey: "land",
    yearRange: [1880, 2025],
    marks: {
      1901: "1901",
      1922: "1922",
      1943: "1943",
      1964: "1964",
      1985: "1985",
      2006: "2006",
    },
    minGap: 20,
    legendPayload: [
      {
        value: "📡 Stazioni meteorologiche",
        type: "line",
        color: "#8E0E00",
      },
      {
        value: "🌍 Superficie terrestre",
        type: "line",
        color: "#322D54",
      },
    ],
    summary: {
      title: "Temperature Anomaly",
      info: "This chart displays the global average surface temperature anomaly from 1880 to the present, based on monthly data. Values represent deviations from a reference temperature and are expressed in °C"
    },
    info: {
      title: "Why Global Temperature Rise Matters",
      text: "Global temperatures have increased sharply in recent decades, accelerating at nearly three times the rate observed before 1980. This rapid warming is driven largely by human emissions of greenhouse gases. Since the Industrial Revolution, Earth’s average temperature has risen about 1°C, with the Arctic warming even faster. These changes disrupt climate systems, causing more extreme weather, rising sea levels, melting ice, and loss of biodiversity. Rising temperatures threaten ecosystems, agriculture, water supplies, and human health worldwide. Understanding temperature trends is crucial for predicting future impacts and guiding climate action.",
      links: [
        {
          title: "IPCC Climate Reports",
          url: "https://www.ipcc.ch/reports/",
        },
        {
          title: "NOAA Paleoclimate Data",
          url: "https://www.ncei.noaa.gov/products/paleoclimatology",
        },
        {
          title: "Arctic Climate Change",
          url: "https://arctic.noaa.gov/Report-Card/",
        },
      ]
    },
    chartTooltip: {
      label: "Temperature anomaly",
      unit: "°C"
    }
  },
  co2: {
    line1dataKey: "cycle",
    line2dataKey: "trend",
    yearRange: [2015, 2025],
    marks: {
      2016: "2016",
      2018: "2018",
      2020: "2020",
      2022: "2022",
      2024: "2024",
    },
    minGap: 1,
    legendPayload: [
      {
        value: "📈 Andamento a lungo termine CO2",
        type: "line",
        color: "#8E0E00",
        description: "Rappresenta l'andamento crescente della concentrazione di CO2 dovuto alle attività umane."
      },
      {
        value: "🌍 Variazioni stagionali di CO2",
        type: "line",
        color: "#322D54",
        description: "Mostra le fluttuazioni naturali della CO2 causate dai cambiamenti stagionali e dalla fotosintesi delle piante."
      },
    ],
    summary: {
      title: "CO₂ Levels",
      info: "This chart displays near-daily measurements of atmospheric carbon dioxide (CO₂) levels, tracking data from 10 years ago up to today. Values are given as mole fractions in dry air, measured in parts per million (ppm)."
    },
    info: {
      title: "What is CO2 and Why It Matters",
      text: "For thousands of years, atmospheric carbon dioxide (CO₂) levels stayed near 280 parts per million (ppm), maintaining Earth’s stable climate. Since the Industrial Revolution, human activities like burning fossil fuels, deforestation, and agriculture have raised CO₂ levels by over 30%, reaching concentrations unseen in hundreds of thousands of years. CO₂ is crucial because it traps heat in the atmosphere, driving global warming. This warming disrupts weather patterns, melts ice caps, raises sea levels, and threatens ecosystems and human societies worldwide. Elevated CO₂ also affects ocean chemistry, causing acidification that harms marine life. Understanding CO₂’s rise and impact is key to addressing climate change and protecting the planet’s future.",
      links: [
        {
          title: "Climate Change: Atmospheric Carbon Dioxide",
          url: "https://climate.nasa.gov/vital-signs/carbon-dioxide/",
        },
        {
          title: "The Relentless Rise of Carbon Dioxide",
          url: "https://www.nature.com/articles/d41586-019-01497-0",
        }
      ]
    },
    chartTooltip: {
      label: "Carbon dioxide (CO₂) level",
      unit: "ppm"
    },
  },
  meth: {
    line1dataKey: "average",
    line2dataKey: "trend",
    yearRange: [1984, 2025],
    marks: {
      1990: "1990",
      1996: "1996",
      2002: "2002",
      2008: "2008",
      2014: "2014",
      2020: "2020",
    },
    minGap: 2,
    legendPayload: [
      {
        value: "📡 Monthly Methane Average",
        type: "line",
        color: "#8E0E00",

      },
      /* {
        value: "📈 Methane Trend (in ppb)",
        type: "line",
        color: "#322D54",
      }, */
    ],
    summary: {
      title: "Methane Concentration",
      info: "This chart shows the historical atmospheric methane (CH₄) concentration over time, measured in parts per billion (ppb). The line represents the monthly average values recorded globally, providing insight into the long-term trend of methane accumulation in the atmosphere."
    },
    info: {
      title: "What is Methane and Why It Matters",
      text: "Methane (CH₄) is a potent greenhouse gas, over 80 times more powerful than CO₂ in trapping heat over 20 years. It comes from natural sources like wetlands, but over half now comes from human activities—livestock, agriculture, landfills, and fossil fuels.Although methane breaks down faster than CO₂, its short-term impact is far greater. Since pre-industrial times, atmospheric methane has risen by about 150%, well beyond natural levels seen over the past 650,000 years. This surge is accelerating global warming and making climate targets harder to reach. Cutting methane emissions is one of the fastest ways to slow near-term climate change.",
      links: [
        {
          title: "EPA: Methane Emissions",
          url: "https://www.epa.gov/gmi/importance-methane",
        },
        {
          title: "NASA: Methane Emissions Continue to Rise",
          url: "https://climate.nasa.gov/news/2865",
        },
        {
          title: "CH₄ Levels Over 800,000 Years (Nature)",
          url: "https://www.nature.com/articles/nature06950",
        },
      ]
    },
    chartTooltip: {
      label: "Methane (CH₄) level",
      unit: "ppb"
    }
  },
  n2o: {
    line1dataKey: "average",
    line2dataKey: "trend",
    legendPayload: [
      {
        value: "📡 monthly average",
        type: "line",
        color: "#8E0E00",
      },
      {
        value: "📈 long term trend",
        type: "line",
        color: "#322D54",
      },
    ],
    yearRange: [2002, 2025],
    minGap: 2,
    marks: {
      2005: "2005",
      2008: "2008",
      2011: "2011",
      2014: "2014",
      2017: "2017",
      2020: "2020",
      2023: "2023",
    },
    summary: {
      title: "Nitrous Oxide Concentration",
      info: "This chart displays the globally averaged atmospheric nitrous oxide concentration from 2001 to the present, based on monthly data collected from marine surface sites. Values are expressed as mole fractions in dry air, measured in parts per billion (ppb)."
    },
    info: {
      title: "The Impact of Nitrous Oxide on Climate and Ozone",
      text: "Nitrous oxide (N₂O) is a potent greenhouse gas emitted from various human activities, including agriculture (notably through the use of synthetic fertilizers and manure management), fossil fuel combustion, wastewater treatment, and certain industrial processes. It also occurs naturally through microbial activity in soils and oceans. Although present in smaller quantities than carbon dioxide or methane, nitrous oxide is the third most significant heat-trapping gas in Earth's atmosphere. It has a global warming potential approximately 265 times that of carbon dioxide over a 100-year period and remains in the atmosphere for about 114 years. Beyond its role in climate change, nitrous oxide is currently the leading ozone-depleting substance emitted by human activities, surpassing chlorofluorocarbons (CFCs) in its impact on the stratospheric ozone layer.",
      links: [
        {
          title: "The Royal Society - Stratospheric ozone depletion due to nitrous oxide",
          url: "https://royalsocietypublishing.org/doi/10.1098/rstb.2011.0377",
        },
        {
          title: "EPA - Overview of Greenhouse Gases",
          url: "https://www.epa.gov/ghgemissions/overview-greenhouse-gases",
        }
      ]
    },
    chartTooltip: {
      label: "Nitrous oxide (N₂O) level",
      unit: "ppb"
    },
  },
  polarIce: {
    line1dataKey: "value",
    line2dataKey: "monthlyMean",
    legendPayload: [
      {
        value: "📡 Estensione totale del ghiaccio marino globale per quel mese, in milioni di km²",
        type: "line",
        color: "#8E0E00",
      },
      {
        value: "📈 Media mensile della sola estensione osservata",
        type: "line",
        color: "#322D54",
      },
    ],
    yearRange: [1979, 2025],
    minGap: 4,
    marks: {
      1986: "1986",
      1993: "1993",
      2000: "2000",
      2007: "2007",
      2014: "2014",
      2021: "2021",
    },
    summary: {
      title: "Sea Ice Extent",
      info: "This chart displays the global sea ice extent from 1979 to 2025, based on monthly data. Measurements cover both the Northern and Southern Hemispheres and are expressed in million square kilometers. Values represent total extent, with deviations (anomalies) shown relative to the 1991–2020 baseline."
    },
    info: {
      title: "The Rapid Transformation of the Arctic",
      text: "The Arctic is warming nearly twice as fast as the global average—a phenomenon known as Arctic amplification. This accelerated warming is driven by feedback mechanisms like the albedo effect (where melting ice exposes darker surfaces that absorb more heat) and the impact of pollutants such as black carbon. Since the late 20th century, Arctic sea ice has declined dramatically, with losses accelerating from around 2–3% in the 1980s to over 12% per decade since 2010. Another major concern is permafrost thawing. As frozen ground warms, it releases methane—a potent greenhouse gas—into the atmosphere, further amplifying global warming. These changes not only impact Arctic ecosystems but also influence weather patterns and climate systems worldwide.",
      links: [
        {
          title: "2024 Arctic Report Card documents rapid, dramatic change",
          url: "https://www.climate.gov/news-features/understanding-climate/2024-arctic-report-card-documents-rapid-dramatic-change"
        },
        {
          title: "Climate Change: Arctic sea ice summer minimum",
          url: "https://www.climate.gov/news-features/understanding-climate/climate-change-arctic-sea-ice-summer-minimum"
        },
        {
          title: "Arctic-Global Linkages",
          url: "https://toolkit.climate.gov/arctic-global-linkages"
        }
      ]
    },
    chartTooltip: {
      label: "Polar ice extent",
      unit: "Mkm²"
    }
  },
};
