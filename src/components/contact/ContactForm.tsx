"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const subjects = [
  { value: "freelance", label: "Proyecto freelance" },
  { value: "fulltime", label: "Oportunidad full-time" },
  { value: "collab", label: "Colaboración / open source" },
  { value: "other", label: "Otro" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Este campo es requerido";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Email inválido";
  if (!data.subject) errors.subject = "Selecciona un motivo";
  if (data.message.trim().length < 20)
    errors.message = "El mensaje debe tener al menos 20 caracteres";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    await fetch("https://formspree.io/f/xjglqrjb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    await new Promise((r) => setTimeout(r, 1500)); // Simula envío
    setLoading(false);
    setSent(true);
  };

  const inputClass = (field: keyof FormData) => `
    w-full font-mono text-[11px] bg-transparent
    border px-3.5 py-3 outline-none
    transition-colors duration-200
    placeholder:text-gray-600
    text-(--muted)
    ${
      errors[field]
        ? "border-red-400/70"
        : "border-(--text)/20 focus:border-(--dorado)/60"
    }
  `;

  return sent ? (
    <div className="border border-(--text)/10 rounded-xl p-8 flex flex-col gap-3">
      <h3
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="text-3xl font-light text-(--text)"
      >
        Mensaje enviado.
      </h3>
      <p className="font-mono text-[11px] text-(--muted) leading-[1.7]">
        Gracias por escribirme. Te responderé lo antes posible — generalmente en
        menos de 24 horas.
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Nombre + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5 ">
          <label className="font-mono text-[9px] tracking-[0.15em] uppercase text-(--dorado)">
            Nombre
          </label>
          <input
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
            className={inputClass("name")}
          />
          {errors.name && (
            <span className="font-mono text-[9px] text-red-400">
              {errors.name}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[9px] tracking-[0.15em] uppercase text-(--dorado)">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass("email")}
          />
          {errors.email && (
            <span className="font-mono text-[9px] text-red-400">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Asunto */}
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[9px] tracking-[0.15em] uppercase text-(--dorado)">
          Asunto
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`${inputClass("subject")} cursor-pointer appearance-none`}
        >
          <option value="" disabled>
            Selecciona un motivo
          </option>
          {subjects.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="font-mono text-[9px] text-red-400">
            {errors.subject}
          </span>
        )}
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-1.5 ">
        <label className="font-mono text-[9px] tracking-[0.15em] uppercase text-(--dorado)">
          Mensaje
        </label>
        <textarea
          name="message"
          placeholder="Cuéntame sobre tu proyecto o idea..."
          value={form.message}
          onChange={handleChange}
          maxLength={500}
          rows={5}
          className={`${inputClass("message")} resize-none leading-[1.7]`}
        />
        <div className="flex justify-between items-center">
          {errors.message ? (
            <span className="font-mono text-[9px] text-red-400">
              {errors.message}
            </span>
          ) : (
            <span />
          )}
          <span className="font-mono text-[9px] text-(--muted)">
            {form.message.length} / 500
          </span>
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 mt-1">
        <button
          type="submit"
          disabled={loading}
          className="font-mono text-[10px] tracking-[0.15em] uppercase bg-(--dorado)/50  text-(--text) px-7 py-3 hover:bg-(--dorado)/80 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="w-3 h-3 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </button>
        <span className="font-mono text-[9px] text-(--muted) leading-relaxed">
          Tu información no será
          <br />
          compartida con terceros.
        </span>
      </div>
    </form>
  );
}
