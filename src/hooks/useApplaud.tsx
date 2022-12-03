import { useState } from "react"

export function useApplaud() {
  const [applauds, setApplauds] = useState(0)

  function incrementApplaud() {
    setApplauds(applauds + 1);
  }

  return { applauds, incrementApplaud };
}