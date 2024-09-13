/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useState } from "react";

function THte() {
  const [value, setValue] = useState(2);
  const user = useMemo(() => ({ name: "kim", age: 13 }), []);

  const increment = useCallback(() => setValue((value) => value + 1), []);

  return <div>tlfgja</div>;
}

export default THte;
