"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import LegalSection from '@/components/legal/LegalSection';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function TermsPage() {
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
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1772771098404-vmtuch2c.png"
          logoHeight={36}
          logoSpacing={10}
          navItems={[
            { name: "Inicio", id: "/" },
            { name: "Por Qué Nosotros", id: "#authority" },
            { name: "Cobertura", id: "#coverage" },
            { name: "Testimonios", id: "#testimonials" },
            { name: "Productos", id: "/products" },
            { name: "Contacto", id: "#form" }
          ]}
          button={{
            text: "Llamar Ahora",            href: "tel:+573011471991"
          }}
        />
      </div>

      <LegalSection
        layout="page"
        title="Términos y Condiciones"
        subtitle="Última actualización: Enero 2025"
        sections={[
          {
            heading: "1. Aceptación de Términos",            content: [
              {
                type: "paragraph",                text: "Al acceder y utilizar los servicios de Cartagena Pet Delivery, aceptas estar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, no debes usar nuestros servicios."
              }
            ]
          },
          {
            heading: "2. Descripción de Servicios",            content: [
              {
                type: "paragraph",                text: "Cartagena Pet Delivery ofrece:"
              },
              {
                type: "list",                items: [
                  "Venta de alimentos premium para perros de marcas certificadas",                  "Entrega a domicilio en la zona norte de Cartagena",                  "Asesoría nutricional personalizada para perros",                  "Seguimiento del consumo y recomendaciones de alimentación"
                ]
              }
            ]
          },
          {
            heading: "3. Uso de Plataforma",            content: [
              {
                type: "paragraph",                text: "Al utilizar nuestros servicios, aceptas:"
              },
              {
                type: "list",                items: [
                  "Proporcionar información precisa y completa",                  "Mantener la confidencialidad de tus datos de contacto",                  "Utilizar los servicios de manera legal y ética",                  "No interferir con el funcionamiento normal de nuestros servicios"
                ]
              }
            ]
          },
          {
            heading: "4. Zona de Cobertura",            content: [
              {
                type: "paragraph",                text: "Nuestros servicios de entrega están disponibles principalmente en la zona norte de Cartagena, incluyendo Crespo, Bocagrande, Manga y alrededores. Consulta sobre cobertura en otras zonas."
              }
            ]
          },
          {
            heading: "5. Precios y Pagos",            content: [
              {
                type: "paragraph",                text: "Los precios de nuestros productos están sujetos a cambios sin previo aviso. La confirmación de disponibilidad y precio final se hará a través de WhatsApp antes de procesar tu pedido. Los pagos se coordinan según lo acordado con nuestro equipo de ventas."
              }
            ]
          },
          {
            heading: "6. Entregas",            content: [
              {
                type: "paragraph",                text: "Las entregas se realizan según lo coordinado con el cliente. Nos esforzamos por cumplir con los plazos acordados, pero estos son aproximados y pueden variar según circunstancias externas. Contacta con nosotros si tienes dudas sobre tu entrega."
              }
            ]
          },
          {
            heading: "7. Devoluciones",            content: [
              {
                type: "paragraph",                text: "Los productos deben estar en su empaque original y sin abrir para ser elegibles para devolución. Contáctanos dentro de 48 horas de la entrega si necesitas procesar una devolución."
              }
            ]
          },
          {
            heading: "8. Limitación de Responsabilidad",            content: [
              {
                type: "paragraph",                text: "Cartagena Pet Delivery no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios."
              }
            ]
          },
          {
            heading: "9. Ley Aplicable",            content: [
              {
                type: "paragraph",                text: "Estos Términos y Condiciones se rigen por las leyes de Colombia. Cualquier disputa será resuelta en los juzgados competentes de Cartagena."
              }
            ]
          },
          {
            heading: "10. Contacto",            content: [
              {
                type: "paragraph",                text: "Para preguntas sobre estos Términos y Condiciones, contáctanos a cartagenapetdelivery@gmail.com o llamando al +573011471991."
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
