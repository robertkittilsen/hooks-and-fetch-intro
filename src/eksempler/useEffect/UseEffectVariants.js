import { useEffect } from "react";

export default function UseEffectVariants(prop, state) {
  useEffect(() => {
    // Kjører hver render
  });

  useEffect(() => {
    // Kjører bare på første render
  }, []);

  useEffect(() => {
    // Kjører på første render
    // og hver gang en avhengighet endres
  }, [prop, state]);

  return <div>useEffect variants</div>;
}
