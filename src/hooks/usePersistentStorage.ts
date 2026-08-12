import { useEffect, useState } from "react";

export function usePersistentStorage() {
  const [isPersisted, setIsPersisted] = useState(false);

  useEffect(() => {
    (async function () {
      if (
        typeof window !== "undefined" &&
        navigator.storage &&
        navigator.storage.persisted
      ) {
        const status = await navigator.storage.persisted();
        setIsPersisted(status);
      }
    })();
  }, []);

  async function requestPersistence() {
    if (
      typeof window !== "undefined" &&
      navigator.storage &&
      navigator.storage.persist
    ) {
      const result = await navigator.storage.persist();
      setIsPersisted(result);
      return result;
    }
    return false;
  }

  return { isPersisted, requestPersistence };
}
