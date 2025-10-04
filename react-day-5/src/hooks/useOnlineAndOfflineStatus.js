import { useEffect, useState } from "react";

function useOnlineAndOfflineStatus() {
  const [status, setStatus] = useState(
    navigator.onLine ? "Online" : "Offline"
  );

  useEffect(() => {
    const handleOnline = () => setStatus("Online");
    const handleOffline = () => setStatus("Offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { status };
}

export default useOnlineAndOfflineStatus;
