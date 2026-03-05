"use client";

import { useState } from "react";
import { Mail, Linkedin, Globe } from "lucide-react";
import { SectionWithParticles } from "@/components/section-with-particles";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const naam = (data.get("naam") as string)?.trim();
    const email = (data.get("email") as string)?.trim();

    const newErrors: Record<string, string> = {};
    if (!naam) newErrors.naam = "Vul je naam in";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Vul een geldig e-mailadres in";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <SectionWithParticles className="pb-20 pt-40" particleCount={350} speed={0.4} trailOpacity={0.06}>
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Laten we kennismaken
          </h1>
          <p className="mx-auto max-w-[600px] text-xl text-[#6B6B8A]">
            Plan een gratis gesprek van 30 minuten. Ik kijk graag mee naar waar
            jouw team vastloopt.
          </p>
        </div>
      </SectionWithParticles>

      {/* Contact Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Direct contact
            </h2>
            <p className="mb-8 text-[#6B6B8A]">
              Liever direct een bericht sturen? Dat kan ook. Ik reageer meestal
              binnen 24 uur.
            </p>

            <div className="flex flex-col gap-6">
              <ContactItem
                icon={<Mail className="h-5 w-5 text-[#4F8EF7]" />}
                label="E-mail"
                value="wessel@loopless.nl"
                href="mailto:wessel@loopless.nl"
              />
              <ContactItem
                icon={<Linkedin className="h-5 w-5 text-[#4F8EF7]" />}
                label="LinkedIn"
                value="Wessel Broeders"
                href="#"
              />
              <ContactItem
                icon={<Globe className="h-5 w-5 text-[#4F8EF7]" />}
                label="Website"
                value="loopless.nl"
                href="https://loopless.nl"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-[#1E1E35] bg-[#13131F] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <h3 className="mb-2 text-2xl font-bold text-[#4F8EF7]">
                  Bericht verstuurd!
                </h3>
                <p className="text-[#6B6B8A]">
                  Bedankt voor je bericht. Ik neem zo snel mogelijk contact op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <FormField
                  label="Naam"
                  name="naam"
                  type="text"
                  placeholder="Jouw naam"
                  required
                  error={errors.naam}
                />
                <FormField
                  label="Bedrijfsnaam"
                  name="bedrijf"
                  type="text"
                  placeholder="Jouw bedrijf"
                />
                <FormField
                  label="E-mailadres"
                  name="email"
                  type="email"
                  placeholder="naam@bedrijf.nl"
                  required
                  error={errors.email}
                />
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-[#E8E8F0]">
                    Wat is het grootste knelpunt in jouw proces?
                  </label>
                  <textarea
                    name="bericht"
                    rows={5}
                    placeholder="Vertel kort waar je tegenaan loopt..."
                    className="w-full resize-y rounded-lg border border-[#1E1E35] bg-[#0D0D1A] px-4 py-3 text-[#E8E8F0] placeholder-[#6B6B8A] transition-colors focus:border-[#4F8EF7] focus:outline-none focus:ring-2 focus:ring-[#4F8EF740]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#4F8EF7] px-8 py-4 font-semibold text-white shadow-[0_0_20px_#4F8EF740] transition-all hover:-translate-y-0.5 hover:bg-[#3A75D8] hover:shadow-[0_0_30px_#4F8EF740]"
                >
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-[#E8E8F0]">
        {label}
        {required && <span className="ml-1 text-[#4F8EF7]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-lg border px-4 py-3 text-[#E8E8F0] placeholder-[#6B6B8A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F8EF740] ${
          error
            ? "border-red-500 bg-[#0D0D1A]"
            : "border-[#1E1E35] bg-[#0D0D1A] focus:border-[#4F8EF7]"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#4F8EF7]/10">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{label}</h4>
        <a
          href={href}
          className="text-sm text-[#4F8EF7] transition-colors hover:text-[#3A75D8]"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
