import { useMousePosition } from "../../../hooks/useMousePosition";

import Gato from "../ClassComponent/Gato";

export function RFC() {
  const { x, y } = useMousePosition();

  return (
    <>
      <h1>Movimente o mouse!</h1>
      <Gato mouse={{ x, y }} />
    </>
  );
}
