"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { Navigation } from "@/components/kaizenith/navigation";
import { Footer } from "@/components/kaizenith/footer";

type SectionId =
  | "identity"
  | "data-collected"
  | "purpose"
  | "legal-basis"
  | "storage"
  | "rights"
  | "retention"
  | "changes";

interface PrivacySection {
  id: SectionId;
  titleKey: string;
  contentKey: string;
}

export default function PrivacyPolicyPage() {
  const { locale, t } = useLocale();
  const [activeSection, setActiveSection] =
    React.useState<SectionId>("identity");

  // Bilingual content (revisado y ampliado)
//   Nombre / Razón social: [TU NOMBRE O RAZÓN SOCIAL]
// NIF: [TU NIF/CIF]
// Dirección postal: [DIRECCIÓN COMPLETA]
const content = {
  es: {
    pageTitle: "Política de Privacidad",
    pageSubtitle: "Transparencia sobre cómo tratamos tus datos",
    lastUpdated: "Última actualización: 26 de enero de 2025",
    effectiveDate: "Fecha efectiva: 26 de enero de 2025",

    sections: {
      identity: {
        title: "1. Identidad del responsable del tratamiento",
        content: `Responsable: Kaizenith
Tipo: Trabajador autónomo

País: España
Correo de contacto: hola@kaizenith.es

Si tienes preguntas sobre cómo tratamos tus datos o deseas ejercer tus derechos, puedes contactarnos en la dirección de correo anterior. No hemos designado un Delegado de Protección de Datos (DPO); si en el futuro se designa, actualizaremos esta política.`,
      },

      "data-collected": {
        title: "2. Datos personales que recogemos",
        content: `Recopilamos únicamente los datos personales necesarios para las finalidades descritas en esta política:

• Nombre (opcional)
• Dirección de correo electrónico (obligatorio para la suscripción)
• Datos de navegación y uso (cookies y tecnologías similares, datos de analítica)
• Metadatos técnicos (IP, agente de usuario) cuando sea necesario para seguridad o diagnóstico

Los datos de navegación se recogen mediante herramientas de analítica y cookies. Solo recopilamos información que nos ayuda a mejorar tu experiencia y a gestionar los envíos de comunicación.`,
      },

      purpose: {
        title: "3. Finalidad del tratamiento",
        content: `Utilizamos tus datos personales para las siguientes finalidades:

• Envío de boletines informativos (newsletters) y comunicaciones comerciales relacionadas con Kaizenith (solo si has dado tu consentimiento).
• Gestión del acceso a contenidos y descargables (lead magnets).
• Atención de consultas y soporte relacionadas con nuestros proyectos y servicios.
• Mejora del sitio web mediante análisis (analítica web) y monitorización de errores.
• Cumplimiento de obligaciones legales y gestión de posibles reclamaciones.

Solo trataremos tus datos para los fines descritos y no los utilizaremos para otros fines sin tu consentimiento previo.`,
      },

      "legal-basis": {
        title: "4. Base legal para el tratamiento",
        content: `La base legal para el tratamiento de tus datos personales es, en su mayoría, tu consentimiento (por ejemplo, al suscribirte a la newsletter o al solicitar un lead magnet).

Para la analítica y las cookies no estrictamente necesarias, también se aplicará el consentimiento cuando sea requerido por la normativa de privacidad.

Puedes retirar tu consentimiento en cualquier momento sin que ello afecte al tratamiento basado en el consentimiento previo al retiro. Para retirar el consentimiento puedes usar el enlace de "Desuscribirse" en nuestros correos o contactarnos en hola@kaizenith.es.`,
      },

      storage: {
        title: "5. Almacenamiento y terceros",
        content: `Para la gestión y envío de comunicaciones utilizamos proveedores externos. Actualmente, entre los principales proveedores que empleamos se incluyen:

• Mailchimp (plataforma de email marketing) — para almacenar listas y enviar newsletters.
• Google Analytics u otras herramientas de analítica — para medir uso y rendimiento del sitio.
• Proveedor de hosting y despliegue (servidor/VPS o plataforma cloud).

Algunos proveedores pueden procesar datos fuera del Espacio Económico Europeo. Cuando se produzcan transferencias internacionales se harán bajo las garantías adecuadas (por ejemplo, cláusulas contractuales tipo o equivalentes) o a través de centros de datos ubicados en la UE cuando sea posible. Si necesitas información concreta sobre la ubicación o las garantías aplicadas a un proveedor, contáctanos en hola@kaizenith.es.

No compartimos tus datos con terceros no necesarios ni para finalidades distintas sin tu consentimiento explícito.`,
      },

      rights: {
        title: "6. Tus derechos",
        content: `Tienes los siguientes derechos respecto a tus datos personales:

• Derecho de acceso: solicitar confirmación sobre si tratamos tus datos y obtener una copia.
• Derecho de rectificación: corregir datos inexactos o incompletos.
• Derecho de supresión (derecho al olvido): solicitar la eliminación de tus datos cuando proceda.
• Derecho a la portabilidad: recibir tus datos en un formato estructurado y de uso común.
• Derecho de limitación: solicitar la limitación del tratamiento en determinados supuestos.
• Derecho de oposición: oponerte al tratamiento de tus datos por motivos legítimos.
• Derecho a retirar el consentimiento: cuando el tratamiento se base en el consentimiento.

Para ejercer cualquiera de estos derechos, envía un correo a hola@kaizenith.es indicando:
• Tu nombre completo
• Dirección de correo registrada
• Derecho que deseas ejercer y, si procede, una copia de tu documento identificativo

Responderemos a tu solicitud dentro del plazo legal (normalmente 1 mes). En casos complejos, este plazo podrá extenderse hasta 3 meses, informándote de la ampliación y sus motivos.

Si consideras que tus derechos no han sido respetados, tienes derecho a presentar una reclamación ante la autoridad de control (en España: Agencia Española de Protección de Datos — AEPD: https://www.aepd.es).`,
      },

      retention: {
        title: "7. Conservación de los datos",
        content: `Conservamos tus datos personales solo durante el tiempo necesario para cumplir las finalidades para las que fueron recabados:

• Mientras mantengas una suscripción activa a nuestro newsletter.
• Hasta que solicites la supresión de tus datos y se complete el proceso (normalmente en un plazo máximo de 30 días).
• Si existe una obligación legal que exija conservar ciertos registros (por ejemplo, obligaciones contables o fiscales), conservaremos únicamente los datos necesarios durante el plazo legalmente exigido.

Tras la baja o retirada del consentimiento se dejará de recopilar nueva información relacionada con la finalidad, aunque algunos datos previamente recopilados pueden conservarse si es necesario para cumplir obligaciones legales o para contestar reclamaciones.`,
      },

      security: {
        title: "8. Medidas de seguridad",
        content: `Adoptamos medidas técnicas y organizativas razonables para proteger tus datos frente a pérdida, acceso no autorizado o tratamientos no autorizados. Entre las medidas:

• Uso de cifrado TLS/HTTPS para la transmisión de datos.
• Controles de acceso y credenciales seguras en servicios y plataformas.
• Actualizaciones y parches en servidores y dependencias.
• Minimización de datos (recogemos solo lo estrictamente necesario).

Ten en cuenta que ningún sistema es invulnerable; si se detecta una brecha de seguridad que afecte a datos personales te lo notificaremos cuando la normativa lo exija.`,
      },

      cookies: {
        title: "9. Cookies y tecnologías similares",
        content: `Utilizamos cookies y tecnologías similares. Para más detalles sobre las cookies, su finalidad y cómo gestionarlas, consulta nuestra Política de Cookies en /cookies.

A grandes rasgos:
• Cookies estrictamente necesarias: necesarias para el funcionamiento del sitio.
• Cookies de analítica y rendimiento: requieren tu consentimiento.
• Cookies de terceros: pueden ser usadas por servicios como Google Analytics o proveedores de marketing.

Puedes gestionar y revocar tu consentimiento en cualquier momento mediante el mecanismo de cookies del sitio o contactándonos.`,
      },

      automated: {
        title: "10. Toma de decisiones automatizada",
        content: `No realizamos decisiones automatizadas con efectos jurídicos o que te afecten de manera significativa basadas únicamente en un tratamiento automatizado. Si esto cambiara en el futuro, te informaremos y aplicaremos las garantías legales correspondientes.`,
      },

      changes: {
        title: "11. Cambios en esta Política de Privacidad",
        content: `Esta política puede actualizarse para reflejar cambios en nuestras prácticas o en la normativa. Publicaremos la versión actualizada en esta misma página con la fecha de última modificación. Si hay cambios materiales, intentaremos notificarte por correo electrónico cuando sea posible.`,
      },
    },
  },

  en: {
    pageTitle: "Privacy Policy",
    pageSubtitle: "Transparency about how we handle your data",
    lastUpdated: "Last updated: January 26, 2025",
    effectiveDate: "Effective date: January 26, 2025",

    sections: {
      identity: {
        title: "1. Identity of the Data Controller",
        content: `Controller: Kaizenith
Status: Self-employed

Country: Spain
Contact email: hola@kaizenith.es

If you have questions about how we handle your data or wish to exercise your rights, please contact us at the email address above. No Data Protection Officer (DPO) has been appointed; if one is designated in the future, this policy will be updated.`,
      },

      "data-collected": {
        title: "2. Personal Data Collected",
        content: `We collect only the personal data necessary for the purposes described in this policy:

• Name (optional)
• Email address (mandatory for subscription)
• Browsing and usage data (cookies and analytics)
• Technical metadata (IP, user agent) when necessary for security or diagnostics

Browsing data is collected via analytics tools and cookies. We only collect information that helps us improve the site and your experience.`,
      },

      purpose: {
        title: "3. Purpose of Processing",
        content: `We use your personal data for the following purposes:

• Sending newsletters and related communications (based on your consent).
• Managing access to downloadable materials (lead magnets).
• Responding to inquiries and providing support related to our projects and services.
• Improving the website through analytics and monitoring.
• Complying with legal obligations.

We will not process your data for purposes other than those stated without your prior consent.`,
      },

      "legal-basis": {
        title: "4. Legal Basis for Processing",
        content: `The legal basis for most of our data processing is your explicit consent (for example, when subscribing to the newsletter or requesting a lead magnet).

For analytics and certain cookies, consent will be obtained where required by law.

You may withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. To withdraw consent, use the "Unsubscribe" link in any email or contact us.`,
      },

      storage: {
        title: "5. Storage and Third Parties",
        content: `We use third-party providers to store and process data, including but not limited to:

• Mailchimp: email marketing platform (to store lists and send newsletters).
• Google Analytics: analytics service (to measure site usage).
• Hosting and deployment provider (server/VPS or cloud platform).

Some providers may process data outside the European Economic Area. When international transfers occur, we ensure appropriate safeguards (e.g., standard contractual clauses) or use EU-based data centers where possible. If you need details about a provider's location or safeguards, contact hola@kaizenith.es.

We do not share your data with unnecessary third parties or for purposes beyond those described without your consent.`,
      },

      rights: {
        title: "6. Your Rights",
        content: `You have the following rights regarding your personal data:

• Right of access: to request confirmation of whether we process your data and to request a copy.
• Right to rectification: to correct inaccurate or incomplete data.
• Right to erasure: to request deletion of your data.
• Right to data portability: to receive your data in a structured, commonly used format.
• Right to restriction: to request restriction of processing in certain circumstances.
• Right to object: to object to processing on legitimate grounds.
• Right to withdraw consent: where processing is based on consent.

To exercise any of these rights, contact hola@kaizenith.es and provide:
• Your full name
• Registered email address
• Clear description of the right you wish to exercise

We will respond within the legal timeframe (normally 1 month). In complex cases this may be extended up to 3 months with notification and justification.

If you believe your rights have not been respected, you may lodge a complaint with the relevant supervisory authority (in Spain: Spanish Data Protection Agency — AEPD: https://www.aepd.es).`,
      },

      retention: {
        title: "7. Data Retention",
        content: `We retain personal data only as long as necessary for the purposes for which it was collected:

• While you remain subscribed to our newsletter.
• For as long as required to fulfil the purposes described in this policy.

If you request to unsubscribe, we will delete your data within a maximum of 30 days, except where we are required to retain certain records by law.

After withdrawal of consent, no new data will be collected for those purposes, although some previously collected data may be retained if necessary for legal compliance or to respond to claims.`,
      },

      security: {
        title: "8. Security Measures",
        content: `We implement reasonable technical and organizational measures to protect your data from loss, unauthorized access or unlawful processing. Measures include:

• Use of TLS/HTTPS for data transmission.
• Access control and secure credentials for services and platforms.
• Regular updates and security patches for servers and dependencies.
• Data minimization (we collect only what is necessary).

While we strive to protect your data, no system can be 100% secure; in the event of a data breach affecting personal data, we will notify you as required by law.`,
      },

      cookies: {
        title: "9. Cookies and Similar Technologies",
        content: `We use cookies and similar technologies. For full details about cookies, purposes and how to manage them, consult our Cookies Policy at /cookies.

In summary:
• Strictly necessary cookies: required for site functionality.
• Analytics and performance cookies: used for site improvement and require consent.
• Third-party cookies: may be used by services like Google Analytics or marketing providers.

You can manage and withdraw your consent at any time through the cookie settings on the site or by contacting us.`,
      },

      automated: {
        title: "10. Automated Decision-making",
        content: `We do not perform automated decision-making with legal or similarly significant effects on individuals. If this changes, we will inform you and apply the appropriate safeguards.`,
      },

      changes: {
        title: "11. Changes to this Privacy Policy",
        content: `This policy may be updated from time to time to reflect changes in practices or legal requirements. We will publish the updated version on this page with the effective date. Where changes are material, we will notify you by email if reasonably possible.`,
      },
    },
  },
};


  const currentContent = locale === "es" ? content.es : content.en;
  const sections = Object.entries(currentContent.sections).map(
    ([key, value]) => ({
      id: key as SectionId,
      title: value.title,
      content: value.content,
    }),
  );

  return (
    <>
      <Navigation onOpenSignup={() => {}} />

      <main className="min-h-screen bg-background mt-8">
        {/* Header */}
        <section className="py-8 md:py-12 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === "es" ? "Volver al inicio" : "Back to home"}
            </Link>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {currentContent.pageTitle}
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentContent.pageSubtitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentContent.lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <aside className="md:col-span-1">
                <nav className="sticky top-8 space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        // Scroll suave a la sección
                        setTimeout(() => {
                          const element = document.getElementById(section.id);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }, 0);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {section.title}.
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main Content */}
              <div className="md:col-span-3 space-y-8">
                {sections.map((section) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-8 ${activeSection === section.id ? "block" : "hidden md:block"}`}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      {section.content.split("\n").map((line, idx) => {
                        if (!line.trim()) return <br key={idx} />;
                        if (line.trim().startsWith("•")) {
                          return (
                            <p
                              key={idx}
                              className="text-foreground/80 leading-relaxed ml-4"
                            >
                              {line.trim()}
                            </p>
                          );
                        }
                        return (
                          <p
                            key={idx}
                            className="text-foreground/80 leading-relaxed"
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </article>
                ))}

                {/* Contact Section */}
                <article className="pt-12 border-t border-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {locale === "es"
                      ? "Preguntas o Inquietudes"
                      : "Questions or Concerns"}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {locale === "es"
                      ? "Si tienes preguntas sobre esta Política de Privacidad o cómo manejamos tus datos, no dudes en contactarnos:"
                      : "If you have questions about this Privacy Policy or how we handle your data, please feel free to contact us:"}
                  </p>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <p className="text-foreground font-medium">
                      hola@kaizenith.es
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
