import React, { useEffect, useMemo, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from "recharts";
import { chartDataConfig } from "../../utils/chartDataConfig";
import styled from "styled-components";

export default function AreaChartComponent({ data, label, dataType }) {
  const { line1dataKey, line2dataKey, legendPayload } = chartDataConfig[dataType] || {};

  const allValues = data.flatMap((d) => [d[line1dataKey], d[line2dataKey]]);
  //const minValue = parseFloat((Math.min(...allValues) - (dataType === "temp" ? 0.1 : 1)).toFixed(2));
  const minValue = parseFloat(Math.min(...allValues).toFixed(2));
  //const maxValue = parseFloat((Math.max(...allValues) + (dataType === "temp" ? 0.1 : 1)).toFixed(2));
  const maxValue = parseFloat(Math.max(...allValues).toFixed(2));

  // Calcola la distanza tra i tick
  const YtickCount = 8;
  const YtickStep = (maxValue - minValue) / (YtickCount - 1); // Subtrai 1 per evitare intervallo extra
  const Yticks = Array.from({ length: YtickCount }, (_, i) => minValue + i * YtickStep);

    const [isMobile, setIsMobile] = useState(false);


/*   useEffect(() => {
    console.log(minValue, maxValue);
    console.log(Yticks);
  }, [minValue, maxValue]); */
  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // breakpoint mobile, puoi cambiare
    }
    handleResize(); // check iniziale
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContainer height={500} width={"100%"}>
      <AreaChart data={data}>
      <defs>
          <linearGradient id="colorLine1" x1="0" y1="0.5" x2="1" y2="0.5">
  <stop offset="0%" stopColor="#8E0E00" stopOpacity={0} />
  <stop offset="50%" stopColor="#8E0E00" stopOpacity={0.4} />
  <stop offset="100%" stopColor="#8E0E00" stopOpacity={0} />
</linearGradient>

<linearGradient id="colorLine2" x1="0" y1="0.5" x2="1" y2="0.5">
  <stop offset="0%" stopColor="#322D54" stopOpacity={0.2} />
  <stop offset="50%" stopColor="#322D54" stopOpacity={0.4} />
  <stop offset="100%" stopColor="#322D54" stopOpacity={0.2} />
</linearGradient>

          <filter id="shadow" height="200%">
            <feDropShadow dx="0" dy="10" stdDeviation="10"/>
          </filter>
        </defs>

        <CartesianGrid horizontal={true} vertical={false} strokeDasharray="10" strokeWidth={0.5} stroke="#464859" opacity={1} fill="#0E0D1F" zIndex={100} />

        <XAxis
          dataKey="timeFormatted"
          textAnchor="middle"
          height={70}
          interval={"preserveStart"}
          tickLine={false}
          tickMargin={30}
          axisLine={false}
          minTickGap={20}
          
        />

        <YAxis
          domain={[minValue, maxValue]}
          type="number"
          tickLine={false}
          tickFormatter={(tick) => tick.toFixed(2)} // <-- forza il valore esatto con 2 decimali
          interval={"preserveStartEnd"}
          axisLine={false}
          ticks={Yticks}
          width={100}
          tickMargin={30}
          allowDataOverflow={true}
          hide={isMobile}
        />

        <Tooltip content={<CustomTooltip />} offset={30}/>

        <Area
          type="monotone"
          dataKey={line1dataKey}
          stroke="#bd3222"
          fillOpacity={1}
          fill="url(#colorLine1)"
          name={`Anomalia alla stazione (${label})`}
          strokeWidth={2}
          zIndex={5}
          baseValue={minValue}
        />
        {/* <Area type="monotone" dataKey={line2dataKey} stroke="#4e477e" fillOpacity={1} fill="url(#colorLine2)" name={`Anomalia sulla terra (${label})`} strokeWidth={1} zIndex={5} baseValue={minValue}/> */}
      </AreaChart>
    </ResponsiveContainer>
  );
}

//const ChartContainer = styled(ResponsiveContainer)``;


function CustomTooltip({ active, payload, label }) {
  //console.log(active, payload, label);
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#FEFCFF", padding: "10px", borderRadius: "25px", color: "#black", padding: "20px" }}>
        <p style={{ fontWeight: "bold", color: "black" }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.stroke, marginTop: "10px" }}>
            {entry.name}: {typeof entry.value === "number" ? entry.value.toFixed(2) : entry.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
}