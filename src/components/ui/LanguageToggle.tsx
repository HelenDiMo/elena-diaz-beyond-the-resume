"use client";

import { useState } from "react";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"ES" | "EN">("ES");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "ES" ? "EN" : "ES"));
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="rounded border px-4 py-1 text-sm font-bold text-teal transition-colors hover:text-oceanic "
    >
      {language}
    </button>
  );
}
