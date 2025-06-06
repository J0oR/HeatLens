import { chartDataConfig } from "../../utils/chartDataConfig";

export const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      fill="#666666" // <-- colore identico a quello dell'asse X
      fontSize={12}>
      {payload.value.toFixed(2)}
    </text>
  );
};

export const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text
      x={x - 25}
      y={y}
      fill="#666666" // <-- colore identico a quello dell'asse X
      fontSize={12}>
      {payload.value}
    </text>
  );
};


export const CustomTooltip = ({ active, payload, label, ValueLabel, ValueUnit }) => {

  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#FEFCFF", padding: "10px 20px", borderRadius: "25px", color: "#black", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <p style={{ fontWeight: "bold", color: "black" }}>{label}</p>
        
          <p  style={{ color: payload[0].stroke}}>
           {typeof payload[0].value === "number" ? payload[0].value.toFixed(2) : payload[0].value} {ValueUnit}
          </p>
      </div>
    );
  }
  return null;
};
