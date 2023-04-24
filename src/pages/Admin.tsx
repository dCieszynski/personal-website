import React, { useEffect, useState } from "react";
import { renderStudio } from "sanity";
import config from "../../sanity.config";

function Admin() {
  const [studio, setStudio] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (studio) return;
    setStudio(document.getElementById("studio"));
  }, [studio]);

  useEffect(() => {
    if (!studio) return;
    renderStudio(document.getElementById("studio"), config);
  }, [studio]);

  return <main id="studio" className="h-screen max-h-[100dvh] overscroll-none overflow-auto" />;
}

export default Admin;
