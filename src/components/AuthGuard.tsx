"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this code runs only in the browser
      const token = sessionStorage.getItem("token");
      if (!token) {
        router.push("/"); // Redirect to the login page if no token is found
      } else {
        setIsAuthenticated(true); // Allow access to the protected page
      }
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
