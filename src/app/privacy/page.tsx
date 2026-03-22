"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import LegalSection from '@/components/legal/LegalSection';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function PrivacyPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="blurBottom"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Cartagena Pet Delivery"
          navItems={[
            { name: "Inicio", id: "/" },
            { name: "Por Qué Nosotros", id: "#authority" },
            { name: "Cobertura", id: "#coverage" },
            { name: "Testimonios", id: "#testimonials" },
            { name: "Productos", id: "/products" },
            { name: "Contacto", id: "#form" }
          ]}
          button={{
            text: "Ver Catálogo",            href: "/products"
          }}
        />
      </div>

      <LegalSection
        layout="page"
        title="Política de Privacidad"
        subtitle="Última actualización: Enero 2025"
        sections={[
          {
            heading: "1. Introducción",            content: [
              {
                type: "paragraph",                text: "Cartagena Pet Delivery se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tus datos personales cuando utilizas nuestros servicios."
              }
            ]
          },
          {
            heading: "2. Información que Recopilamos",            content: [
              {
                type: "paragraph",                text: "Recopilamos la siguiente información personal:"
              },
              {
                type: "list",                items: [
                  "Nombre, teléfono y correo electrónico",                  "Dirección de entrega en Cartagena",                  "Información sobre tu perro (edad, tamaño, preferencias nutricionales)",                  "Historial de compras y preferencias de productos",                  "Información de comunicación y consultas"
                ]
              }
            ]
          },
          {
            heading: "3. Cómo Utilizamos Tu Información",            content: [
              {
                type: "paragraph",                text: "Utilizamos tu información personal para:"
              },
              {
                type: "list",                items: [
                  "Procesar tus pedidos y entregas",                  "Proporcionar asesoría nutricional personalizada",                  "Comunicarnos contigo sobre tu pedido y servicios",                  "Mejorar nuestros productos y servicios",                  "Cumplir con obligaciones legales"
                ]
              }
            ]
          },
          {
            heading: "4. Seguridad de Tus Datos",            content: [
              {
                type: "paragraph",                text: "Implementamos medidas de seguridad razonables para proteger tu información personal contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, no podemos garantizar una seguridad absoluta."
              }
            ]
          },
          {
            heading: "5. Compartir Tu Información",            content: [
              {
                type: "paragraph",                text: "No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios de entrega o cuando lo requiera la ley."
              }
            ]
          },
          {
            heading: "6. Derechos de Acceso",            content: [
              {
                type: "paragraph",                text: "Tienes el derecho de acceder, corregir o eliminar tu información personal. Para ejercer estos derechos, contáctanos a través de nuestro correo electrónico o formulario de contacto."
              }
            ]
          },
          {
            heading: "7. Cambios en Esta Política",            content: [
              {
                type: "paragraph",                text: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización."
              }
            ]
          },
          {
            heading: "8. Contacto",            content: [
              {
                type: "paragraph",                text: "Si tienes preguntas sobre esta Política de Privacidad, contáctanos a cartagenapetdelivery@gmail.com o llamando al +573011471991."
              }
            ]
          }
        ]}
      />

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Cartagena Pet Delivery"
          leftLink={{ text: "Política de Privacidad", href: "/privacy" }}
          rightLink={{ text: "Términos y Condiciones", href: "/terms" }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}