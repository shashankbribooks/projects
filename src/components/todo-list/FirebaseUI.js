// components/FirebaseUI.js
import { useEffect } from "react";
import { ui, uiConfig } from "../../utils/firebase";
import { getAuth } from "firebase/auth";

export default function FirebaseUI() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      ui?.start("#firebaseui-auth-container", uiConfig);
    }
  }, []);

  return <div id="firebaseui-auth-container"></div>;
}
