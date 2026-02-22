"use client";

import { Package, Heart, Users } from "lucide-react";
import { StatsRevealGrid } from "@/components/stats-reveal-grid";

const stats = [
  { value: "Millions", label: "people live with an ostomy worldwide", Icon: Users },
  { value: "Unopened", label: "unused ostomy supplies often go to waste", Icon: Package },
  { value: "Donated", label: "supplies provide dignity and independence", Icon: Heart },
];

export function GetInvolvedStats() {
  return <StatsRevealGrid stats={stats} />;
}
