"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  router.replace("/i");

  return null;
}
