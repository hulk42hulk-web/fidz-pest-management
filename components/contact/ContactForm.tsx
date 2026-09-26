"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Condominium",
    pestProblem: "Termite Treatment",
    postalCode: "",
    unitNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please fill in your name and Singapore contact number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white/95 backdrop-blur-xl border-2 border-[#16A765] rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 text-center space-y-6 shadow-xl animate-in fade-in">
        <div className="w-16 h-16 rounded-full bg-[#E8F8EF] border border-[#16A765]/30 text-[#16A765] flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
            Inspection Request Received!
          </h3>
          <p className="text-base text-[#5A6E85] max-w-md mx-auto">
            Thank you, <strong className="text-[#0B2345]">{formData.name}</strong>. Our duty coordinator will contact you at <strong className="text-[#0B2345]">{formData.phone}</strong> shortly to confirm your inspection slot.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-xs text-[#5A6E85] max-w-md mx-auto text-left space-y-1">
          <div><strong className="text-[#0B2345]">Property:</strong> {formData.propertyType}</div>
          <div><strong className="text-[#0B2345]">Target Pest:</strong> {formData.pestProblem}</div>
          <div><strong className="text-[#0B2345]">Postal Code:</strong> {formData.postalCode || "Provided via call"}</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href={COMPANY_INFO.whatsappUrl}
            isExternal
            variant="primary"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4 fill-white" />}
            className="bg-[#16A765] hover:bg-[#087F4E] text-white shadow-md shadow-[#16A765]/20"
          >
            Chat On WhatsApp Now
          </Button>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#0B2345] hover:text-[#16A765] hover:underline py-2 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(16,42,67,0.06)] space-y-5"
    >
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2345] font-heading">
          Request An On-Site Inspection
        </h3>
        <p className="text-sm text-[#5A6E85] mt-1">
          Fill in your details below and our team will get in touch promptly.
        </p>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-[#FEECEF] border border-red-200 text-[#E5394F] text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Tan Wei Ming"
            className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
            Singapore Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9123 4567"
            className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Email */}
      <div className="space-y-1.5">
        <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. weiming@example.com"
          className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors"
        />
      </div>

      {/* Row 3: Property Type & Pest Problem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
            Property Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors cursor-pointer"
          >
            <option value="HDB Flat">HDB Flat</option>
            <option value="Condominium">Condominium</option>
            <option value="Landed Property">Landed Property (Terrace/Semi-D/Bungalow)</option>
            <option value="F&B Restaurant / Cafe">F&B Restaurant / Cafe</option>
            <option value="Commercial Office">Commercial Office</option>
            <option value="Childcare / School">Childcare / Preschool / School</option>
            <option value="Healthcare / Clinic">Healthcare Clinic / Hospital</option>
            <option value="Industrial / Warehouse">Warehouse / Industrial Facility</option>
            <option value="Other">Other Premises</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
            Pest Concern
          </label>
          <select
            name="pestProblem"
            value={formData.pestProblem}
            onChange={handleChange}
            className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors cursor-pointer"
          >
            <option value="Termite Treatment">Termites (Subterranean / Drywood)</option>
            <option value="Emergency Pest Control">Urgent Emergency Sighting (24/7)</option>
            <option value="Bed Bug Treatment">Bed Bugs & Bites</option>
            <option value="Cockroach Control">Cockroaches (German / American)</option>
            <option value="Ant Control">Ants (Ghost / Pharaoh / Carpenter)</option>
            <option value="Rodent & Rat Control">Rats & Mice (Ceiling / Kitchen)</option>
            <option value="Fly Control">Drain Flies / Fruit Flies / Houseflies</option>
            <option value="Soil Treatment">Pre/Post Construction Soil Treatment</option>
            <option value="General Inspection">General Pest Inspection</option>
          </select>
        </div>
      </div>

      {/* Row 4: Postal Code & Unit Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
            Postal Code (6 Digits)
          </label>
          <input
            type="text"
            name="postalCode"
            maxLength={6}
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="e.g. 573969"
            className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
            Unit Number (Optional)
          </label>
          <input
            type="text"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            placeholder="e.g. #06-76"
            className="w-full h-[52px] px-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 5: Message */}
      <div className="space-y-1.5">
        <label className="block text-xs sm:text-sm font-bold text-[#0B2345] uppercase tracking-wider">
          Message / Infestation Details
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe where you noticed the pests, when the problem started, or any specific timing preferences..."
          className="w-full p-4 rounded-xl bg-[#F8FBFD] border border-slate-200 text-base text-[#102A43] focus:outline-none focus:border-[#16A765] focus:bg-white transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full h-[56px] text-base font-extrabold uppercase tracking-wide shadow-lg shadow-[#16A765]/20"
      >
        {isSubmitting ? "Submitting Request..." : "Request Inspection"}
      </Button>

      <div className="text-center text-xs text-[#5A6E85] pt-1">
        🔒 Your information is confidential and used solely for inspection scheduling.
      </div>
    </form>
  );
}
