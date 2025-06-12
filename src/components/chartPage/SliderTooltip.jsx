const SliderTooltip = ({ children}) => {
    
    const themeTooltip = {
        display: "inline-block",
        color: "red",
        fontSize: "14px",
        fontFamily: "Source Sans Pro, mono",
        whiteSpace:  "nowrap",
        position: "relative",
        bottom: "100%",
        transform: "translate(-50%, -10px)",
      }
  

  return (
    <div style={themeTooltip}>
      {children}
    </div>
  );
};

export default SliderTooltip;