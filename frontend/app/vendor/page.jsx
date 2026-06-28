"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function VendorRootPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    router.replace(isLoggedIn ? "/vendor/dashboard" : "/login");
  }, [isLoggedIn, router]);

  return null;
}
