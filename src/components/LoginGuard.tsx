"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

interface LoginGuardProps {
  children: ReactNode;
}

const LoginGuard = ({ children }: LoginGuardProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      router.push("/active-projects");
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default LoginGuard;
