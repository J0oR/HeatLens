export const chartDataConfig = {
    temp: {
      line1dataKey: "station",
      line2dataKey: "land",
      legendPayload: [
        {
          value: "📡 Stazioni meteorologiche",
          type: "line",
          color: "#8884d8",
        },
        {
          value: "🌍 Superficie terrestre",
          type: "line",
          color: "#82ca9d",
        },
      ],
    },
    co2: {
      line1dataKey: "cycle",
      line2dataKey: "trend",
      legendPayload: [
        {
          value: "📈 Andamento a lungo termine CO2",
          type: "line",
          color: "#8884d8",
          description: "Rappresenta l'andamento crescente della concentrazione di CO2 dovuto alle attività umane."
        },
        {
          value: "🌍 Variazioni stagionali di CO2",
          type: "line",
          color: "#82ca9d",
          description: "Mostra le fluttuazioni naturali della CO2 causate dai cambiamenti stagionali e dalla fotosintesi delle piante."
        },
      ],
    },
    meth: {
      line1dataKey: "average",
      line2dataKey: "trend",
      legendPayload: [
        {
          value: "📈 Methane Average (in ppb)",
          type: "line",
          color: "#8884d8",
         
        },
        {
          value: "📈 Methane Trend (in ppb)",
          type: "line",
          color: "#82ca9d",
        },
      ],
    },
  };
  