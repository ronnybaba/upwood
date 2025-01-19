"use client";

import { useEffect, useState } from "react";

export default function Username() {
  const [fullName, setFullName] = useState<string | null>("John Carter");

  useEffect(() => {
    // Check if the 'full name' exists in sessionStorage
    const storedFullName = sessionStorage.getItem("fullname");

    if (storedFullName) {
      // If found, set it in the state
      setFullName(storedFullName);
    }
  }, []); // Run only once when the component is mounted

  return (
    <div className="username fr">
      <span>{fullName?.[0]}</span>
      {fullName}
    </div>
  );
}
