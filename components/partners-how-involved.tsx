"use client";

import { Building2, Megaphone, Gift, Users } from "lucide-react";
import { ProgressRevealSteps } from "@/components/progress-reveal-steps";

const partnerTypes = [
  { Icon: Building2, title: "Corporate & Community Partners", desc: "Businesses and organisations that share our vision. Partner through employee volunteering, matched giving, or long-term support." },
  { Icon: Megaphone, title: "Co-host Events", desc: "Fundraising or awareness events that amplify our message and reach new supporters." },
  { Icon: Gift, title: "In-Kind Support", desc: "Donate supplies, logistics, expertise or services that directly support our mission." },
  { Icon: Users, title: "Spread the Word", desc: "Use your platform, network or voice to raise awareness and connect us with potential supporters." },
];

export function PartnersHowInvolved() {
  return (
    <ProgressRevealSteps
      steps={partnerTypes.map(({ Icon, title, desc }) => ({
        num: 0,
        title,
        desc,
        Icon,
      }))}
      showProgressLine={true}
    />
  );
}
