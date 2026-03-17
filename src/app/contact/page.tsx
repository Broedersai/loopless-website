"use client";

import { useState } from "react";
import { Mail, Linkedin, Clock, ShieldCheck, Send } from "lucide-react";
import { SectionWithParticles } from "@/components/section-with-particles";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdVQxlB5rLB_4WneVx29PWxF1zhf15Q5FF-cv-GaDgGRTCT1w/formResponse";

const contactFields = [
  { entry: "entry.403495529", label: "Naam", type: "text", placeholder: "Jouw naam" },
  { entry: "entry.1501416755", label: "Bedrijfsnaam", type: "text", placeholder: "Jouw bedrijf" },
  { entry: "entry.888579366", label: "E-mailadres", type: "email", placeholder: "naam@bedrijf.nl" },
  { entry: "entry.832062819", label: "Telefoonnummer", type: "tel", placeholder: "+31 6 12345678" },
];

const intakeFields = [
  { entry: "entry.2130855848", label: "Welk werk kost jullie team de meeste tijd, maar voegt weinig waarde toe?", type: "textarea" },
  { entry: "entry.1783601044", label: "Hoeveel uur per week schat je dat dit het hele team kost?", type: "text" },
  { entry: "entry.1716856525", label: "Hoe lossen jullie dit op dit moment op?", type: "textarea" },
  { entry: "entry.1329753922", label: "Hoe ziet de ideale situatie eruit?", type: "textarea" },
  { entry: "entry.1960148829", label: "Welke tools en systemen gebruiken jullie?", type: "text" },
  { entry: "entry.1783374432", label: "Hebben jullie dit eerder geprobeerd op te lossen? Zo ja, wat werkte niet?", type: "textarea" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
    } catch {
      // Google Forms returns opaque response with no-cors, this is expected
    }

    setSubmitting(false);
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
            Heb je een concreet probleem of twijfel je nog waar de winst zit?
            In beide gevallen denk ik graag mee. Volledig vrijblijvend.
          </p>

          {/* Trust indicators */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6B8A]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#4F8EF7]" />
              <span>Volledig vrijblijvend</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#4F8EF7]" />
              <span>Reactie binnen 24 uur</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="h-4 w-4 text-[#4F8EF7]" />
              <span>Duurt ~5 minuten</span>
            </div>
          </div>
        </div>
      </SectionWithParticles>

      {/* Contact Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[1fr_2fr]">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Direct contact
            </h2>
            <p className="mb-8 text-[#6B6B8A]">
              Liever direct een bericht sturen? Dat kan ook.
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
                href="https://www.linkedin.com/in/wessel-broeders-250767221/"
              />
            </div>

            {/* Trust card */}
            <div className="mt-10 rounded-xl border border-[#1E1E35] bg-[#13131F] p-6">
              <p className="text-sm leading-relaxed text-[#6B6B8A]">
                <span className="font-semibold text-[#E8E8F0]">Hoe werkt het?</span>
                <br />
                Na het invullen neem ik binnen 24 uur contact op. Samen kijken
                we waar de grootste winst zit — ook als je nog niet precies weet
                welke processen geautomatiseerd kunnen worden. Geen
                verplichtingen, geen verborgen kosten.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-[#1E1E35] bg-[#13131F] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#4F8EF7]/10">
                  <ShieldCheck className="h-8 w-8 text-[#4F8EF7]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">
                  Bedankt voor het invullen!
                </h3>
                <p className="max-w-md text-[#6B6B8A]">
                  Ik heb je antwoorden ontvangen en neem binnen 24 uur contact
                  met je op om alles door te nemen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Contact details section */}
                <div className="mb-8">
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    Jouw gegevens
                  </h3>
                  <p className="mb-5 text-sm text-[#6B6B8A]">
                    Zodat ik je kan bereiken na het invullen.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {contactFields.map(({ entry, label, type, placeholder }) => (
                      <div key={entry}>
                        <label className="mb-1.5 block text-sm font-medium text-[#E8E8F0]">
                          {label}
                        </label>
                        <input
                          type={type}
                          name={entry}
                          placeholder={placeholder}
                          className="w-full rounded-lg border border-[#1E1E35] bg-[#0D0D1A] px-4 py-3 text-[#E8E8F0] placeholder-[#6B6B8A] transition-colors focus:border-[#4F8EF7] focus:outline-none focus:ring-2 focus:ring-[#4F8EF740]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8 border-t border-[#1E1E35]" />

                {/* Intake questions section */}
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    Over jullie situatie
                  </h3>
                  <p className="mb-5 text-sm text-[#6B6B8A]">
                    Weet je het antwoord niet zeker? Geen probleem — vul in wat je weet,
                    de rest bespreken we samen.
                  </p>
                  <div className="flex flex-col gap-6">
                    {intakeFields.map(({ entry, label, type }) => (
                      <div key={entry}>
                        <label className="mb-1.5 block text-sm font-medium text-[#E8E8F0]">
                          {label}
                        </label>
                        {type === "textarea" ? (
                          <textarea
                            name={entry}
                            rows={3}
                            className="w-full resize-y rounded-lg border border-[#1E1E35] bg-[#0D0D1A] px-4 py-3 text-[#E8E8F0] placeholder-[#6B6B8A] transition-colors focus:border-[#4F8EF7] focus:outline-none focus:ring-2 focus:ring-[#4F8EF740]"
                          />
                        ) : (
                          <input
                            type="text"
                            name={entry}
                            className="w-full rounded-lg border border-[#1E1E35] bg-[#0D0D1A] px-4 py-3 text-[#E8E8F0] placeholder-[#6B6B8A] transition-colors focus:border-[#4F8EF7] focus:outline-none focus:ring-2 focus:ring-[#4F8EF740]"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8 rounded-xl border border-[#1E1E35] bg-[#0D0D1A] p-4 text-center text-sm text-[#6B6B8A]">
                  Invullen is volledig vrijblijvend — ik neem binnen 24 uur contact op.
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-4 w-full rounded-lg bg-[#4F8EF7] px-8 py-4 font-semibold text-white shadow-[0_0_20px_#4F8EF740] transition-all hover:-translate-y-0.5 hover:bg-[#3A75D8] hover:shadow-[0_0_30px_#4F8EF740] disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {submitting ? "Versturen..." : "Verstuur antwoorden"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
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
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-start gap-4 rounded-lg p-2 -m-2 transition-colors hover:bg-[#4F8EF7]/5"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#4F8EF7]/10">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{label}</h4>
        <span className="text-sm text-[#4F8EF7]">{value}</span>
      </div>
    </a>
  );
}
