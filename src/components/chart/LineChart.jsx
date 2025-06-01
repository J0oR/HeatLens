import React, { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { chartDataConfig } from "../../utils/chartDataConfig";
import styled from "styled-components";
// Importa la configurazione

export default function LineChartComponent({ data, label, dataType }) {
  const { line1dataKey, line2dataKey, legendPayload } = chartDataConfig[dataType] || {};

  const allValues = data.flatMap((d) => [d[line1dataKey], d[line2dataKey]]);
  const minValue = parseFloat((Math.min(...allValues) - 1).toFixed(2));
  const maxValue = parseFloat((Math.max(...allValues) + 1).toFixed(2));

  useEffect(() => {
    console.log(minValue, maxValue);
  }, [minValue, maxValue]);

  return (
    <ChartContainer width={"100%"} height={600}>
      <LineChart data={data}>
        <CartesianGrid horizontal={true} vertical={false} fill="lightblack" strokeDasharray="3 3" opacity={0.4}/>

        <XAxis
          dataKey="timeFormatted"
          angle={0} // angle in degrees
          textAnchor="middle" // aligns the text properly
          height={70} // add space for rotated labels
          interval={"preserveStartEnd"}
          tickLine={false}
          tickMargin={20}
        />

        <YAxis domain={[minValue, maxValue]} type="number" tickLine={false} interval={"preserveEnd"}  allowDataOverflow={true} hide={true} tickCount={maxValue - minValue}/>
        <Tooltip />

        <Legend verticalAlign="top" height={50} payload={legendPayload} layout="horizontal" />

        <Line type="monotone" dataKey={line1dataKey} stroke="#8884d8" activeDot={{ r: 2 }} name={`Anomalia alla stazione (${label})`} dot={{ r: 0 }} />

        <Line type="monotone" dataKey={line2dataKey} stroke="#82ca9d" name={`Anomalia sulla terra (${label})`} dot={{ r: 0 }} />
      </LineChart>
    </ChartContainer>
  );
}

const ChartContainer = styled(ResponsiveContainer)``;
