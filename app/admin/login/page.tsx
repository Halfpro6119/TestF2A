"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Invalid password");
        return;
      }

      router.push("/admin/news");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-grey flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="widget-container bg-white p-8">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-brand-navy" />
            </div>
          </div>
          <h1 className="heading-display text-2xl font-bold text-gray-900 text-center mb-2">
            Admin Login
          </h1>
          <p className="legend-text text-center mb-6">
            Enter the admin password to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="mt-1"
                autoFocus
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-brand-navy hover:bg-brand-navy-light"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
