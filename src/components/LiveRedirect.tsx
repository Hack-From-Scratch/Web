import { useEffect } from "react";

export default function LiveRedirect() {
  useEffect(() => {
    window.location.replace("https://www.twitch.tv/hackfromscratch");
  }, []);

  return null;
}