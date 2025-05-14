import React, { useEffect, useRef } from "react";
import Tooltip from "rc-tooltip";
import raf from "rc-util/lib/raf";
import "rc-tooltip/assets/bootstrap.css";

export default function HandleTooltip({ value, visible, children, tipFormatter = (val) => `${val}` }) {
  const tooltipRef = useRef();
  const rafRef = useRef(null);

  function cancelKeepAlign() {
    raf.cancel(rafRef.current);
  }

  function keepAlign() {
    rafRef.current = raf(() => {
      tooltipRef.current?.forceAlign();
    });
  }

  useEffect(() => {
    if (visible) keepAlign();
    else cancelKeepAlign();
    return cancelKeepAlign;
  }, [value, visible]);

  return (
    <Tooltip
      ref={tooltipRef}
      overlay={tipFormatter(value)}
      placement="top"
      visible={visible}
    >
      {children}
    </Tooltip>
  );
}


 // Funzione per il rendering del handle con il tooltip
  const handleRender = (node, props) => (
    <HandleTooltip value={props.value} visible={props.dragging}>
      {node}
    </HandleTooltip>
  );

  export { handleRender };