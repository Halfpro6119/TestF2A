"use client";

import { Briefcase, Sparkles, Building2, Heart } from "lucide-react";
import { ProgressRevealSteps } from "@/components/progress-reveal-steps";

const employerBenefits = [
  { Icon: Briefcase, title: "Flexible opportunities", desc: "For individuals or teams—team days, skilled volunteering, or long-term partnerships" },
  { Icon: Sparkles, title: "Hands-on or skills-based", desc: "Tailored to your team's expertise and goals" },
  { Icon: Building2, title: "Visibility and recognition", desc: "Showcase your company's community support" },
  { Icon: Heart, title: "Positive impact", desc: "Boost employee engagement, wellbeing and retention" },
];

export function VolunteerEmployerBenefits() {
  return (
    <ProgressRevealSteps
      steps={employerBenefits.map(({ Icon, title, desc }) => ({
        num: 0,
        title,
        desc,
        Icon,
      }))}
      showProgressLine={true}
      progressReachAt={0.7}
      className="mb-0"
    />
  );
}
