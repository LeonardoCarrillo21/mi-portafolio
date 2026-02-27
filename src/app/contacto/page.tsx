// src/app/contacto/page.tsx
"use client";
import { Mail, MessageSquare, Send, CheckCircle, Loader2 } from "lucide-react";
import { Reveal } from "@/components/reveal/Reveal";
import Link from "next/link";
import { Linkedin } from "lucide-react";

import { useState,useEffect } from "react";
import { sendEmail } from "@/app/actions"; // Importamos la acción que creamos

export default function ContactoPage() {
  const [mounted, setMounted] = useState(false);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("sending");
    const result = await sendEmail(formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      alert("Hubo un error al enviar el mensaje.");
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      <Reveal width="100%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Info */}
          <div>
            <h1 className="text-5xl font-bold mb-6">Hablemos.</h1>
            <p className="text-gray-400 text-lg mb-8">
              ¿Tienes una idea, un proyecto o solo quieres saludar? 
              Mi bandeja de entrada siempre está abierta.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">carrillomartinezleonardojavier@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <Link href="https://www.linkedin.com/in/leonardo-javier-carrillo-martinez-software-developer" target="_blank" className="font-medium">Leonardo Carrillo Developer</Link>

                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className={`dark:bg-gray-900/70 bg-gray-100/70 p-8 rounded-2xl border border-white/10`}>
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-gray-400 mt-2">Te responderé lo antes posible.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-blue-400 hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input 
                    placeholder="Tu nombre"
                    name="name"
                    type="text" 
                    required
                    className= {`w-full  dark:bg-gray-800/40 bg-white/90 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    placeholder="Tu email"
                    name="email"
                    type="email" 
                    required
                    className= {`w-full  dark:bg-gray-800/40 bg-white/90 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea 
                    placeholder="Tu mensaje"
                    name="message"
                    required
                    rows={4}
                    className= {`w-full  dark:bg-gray-800/40 bg-white/90 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-all`}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  {status === "sending" ? (
                    <>Enviando... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Enviar mensaje <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </Reveal>
    </main>
  );
}