import { useContext } from "react";
import context from "../context/LanguageContext";

export default function useLanguage() {
  const values = useContext(context.languageContext);

  if (values === "undefined") {
    throw new Error("You cant use LanguageProvider here !!");
  }
  return values;
}
