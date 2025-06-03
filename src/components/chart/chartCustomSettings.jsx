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
      <div style={{ background: "#FEFCFF", padding: "10px", borderRadius: "15px", color: "#black", padding: "20px" }}>
        <p style={{ fontWeight: "bold", color: "black" }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.stroke, marginTop: "10px" }}>
            {ValueLabel}: {typeof entry.value === "number" ? entry.value.toFixed(2) : entry.value} {ValueUnit}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
