import { useMemo } from "react";

export const useIconProps = (color = "white", size = 24) => {
  return useMemo(
    () => ({
      style: { color, fontSize: size },
    }),
    [color, size]
  );
};
