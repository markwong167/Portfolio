import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1600;

type DeviceType = "M" | "T" | "PC";

export function useIsMobile() {
  const [deviceType, setDeviceType] = React.useState<DeviceType | undefined>(
    undefined
  );

  React.useEffect(() => {
    const getDeviceType = () => {
      const width = window.innerWidth;
      if (width < MOBILE_BREAKPOINT) return "M";
      if (width < TABLET_BREAKPOINT) return "T";
      return "PC";
    };

    const onChange = () => {
      setDeviceType(getDeviceType());
    };

    const mql = window.matchMedia(`(max-width: ${TABLET_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", onChange);
    setDeviceType(getDeviceType());
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return deviceType ?? "PC";
}
