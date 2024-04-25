import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";


const CountrySelector = () => {
    const [selected, setSelected] = useState("");
  return (
    <div>
       <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
  />;
    </div>
  );
};

export default CountrySelector;
