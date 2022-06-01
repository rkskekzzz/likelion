import React, { useState, useCallback } from 'react';
import Light from './Light';

export default function App() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = useCallback(
    () => setMasterOn(!masterOn),
    [setMasterOn, masterOn]
  );
  const toggleKitchen = useCallback(
    () => setKitchenOn(!kitchenOn),
    [setKitchenOn, kitchenOn]
  );
  const toggleBath = useCallback(() => setBathOn(!bathOn), [setBathOn, bathOn]);

  return (
    <div className="App">
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </div>
  );
}
