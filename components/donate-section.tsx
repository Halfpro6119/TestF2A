"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const PRESET_AMOUNTS = [10, 25, 50, 100];

const PAYMENT_METHODS = [
  { name: "Visa", label: "Visa" },
  { name: "Mastercard", label: "Mastercard" },
  { name: "Google Pay", label: "G Pay" },
  { name: "Apple Pay", label: "Apple Pay" },
  { name: "PayPal", label: "PayPal" },
];

export function DonateSection() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("25.00");

  const displayAmount =
    selectedAmount !== null
      ? selectedAmount.toFixed(2)
      : parseFloat(customAmount) || "25.00";

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toFixed(2));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setCustomAmount(value);
    const num = parseFloat(value);
    if (!isNaN(num) && PRESET_AMOUNTS.includes(num)) {
      setSelectedAmount(num);
    } else if (!isNaN(num)) {
      setSelectedAmount(null);
    }
  };

  const donateAmount = parseFloat(String(displayAmount)) || 25;
  const frequencyLabel = isMonthly ? "monthly" : "today";
  const formattedAmount =
    donateAmount % 1 === 0 ? donateAmount.toFixed(0) : donateAmount.toFixed(2);

  return (
    <section
      id="donate"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="donate-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="widget-container bg-white p-8 md:p-10">
          <h2
            id="donate-heading"
            className="heading-display text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center leading-tight"
          >
            Please donate today to help restore someone&apos;s dignity
          </h2>
          <p className="legend-text-sm text-center text-gray-600 mb-8">
            Your donation helps deliver essential medical supplies to ostomates
            across Africa when they need it most.
          </p>

          {/* Donation frequency toggle - inspired by reference */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => setIsMonthly(true)}
              className={`min-h-[44px] px-5 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                isMonthly
                  ? "bg-brand-navy text-white"
                  : "text-gray-700 underline underline-offset-4 hover:text-brand-navy"
              }`}
            >
              Monthly donation
            </button>
            <button
              type="button"
              onClick={() => setIsMonthly(false)}
              className={`min-h-[44px] px-5 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                !isMonthly
                  ? "bg-brand-navy text-white"
                  : "text-gray-700 underline underline-offset-4 hover:text-brand-navy"
              }`}
            >
              One-off donation
            </button>
          </div>

          {/* Amount selection */}
          <div className="mb-6">
            <label
              htmlFor="amount-buttons"
              className="block text-sm font-medium text-gray-900 mb-3"
            >
              Select an amount
            </label>
            <div
              id="amount-buttons"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              role="group"
              aria-label="Donation amount"
            >
              {PRESET_AMOUNTS.map((amount) => {
                const isSelected = selectedAmount === amount;
                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`min-h-[48px] rounded-lg font-semibold transition-all duration-200 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                      isSelected
                        ? "bg-brand-navy text-white border-brand-navy"
                        : "bg-gray-100 text-gray-800 border-gray-200 hover:border-brand-blue/40 hover:bg-gray-50"
                    }`}
                  >
                    £{amount}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Impact hint */}
          <p className="legend-text text-gray-500 text-center mb-6">
            £{donateAmount} could help deliver approximately{" "}
            {Math.round((donateAmount / 20) * 100)} stoma bags to those in need
          </p>

          {/* Custom amount */}
          <div className="mb-6">
            <label
              htmlFor="custom-amount"
              className="block text-sm font-medium text-gray-900 mb-2"
            >
              Change amount
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative flex-1 max-w-[200px]">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  £
                </span>
                <Input
                  id="custom-amount"
                  type="text"
                  inputMode="decimal"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="pl-8 h-12 text-base font-medium"
                  aria-label="Custom donation amount in pounds"
                />
              </div>
            </div>
          </div>

          {/* Main CTA + payment methods */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-wrap">
            <div className="flex flex-wrap items-center gap-3 text-gray-500 text-xs">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method.name}
                  className="px-2 py-1 bg-gray-100 rounded text-gray-600"
                >
                  {method.label}
                </span>
              ))}
            </div>
            <Button
              className="bg-brand-red hover:bg-brand-red-hover text-white min-h-[48px] px-6 text-base font-semibold rounded-lg transition-colors duration-300 focus-visible:ring-brand-navy focus-visible:ring-offset-2 shrink-0 ml-auto"
              asChild
            >
              <a
                href="#"
                className="inline-flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  // In a real app: redirect to payment gateway
                }}
              >
                Donate £{formattedAmount} {frequencyLabel}{" "}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
