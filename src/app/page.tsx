"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import AboutMetric from '@/components/sections/about/AboutMetric';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, Users, Clock, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';

export default function LandingPage() {
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
            { name: "Inicio", id: "hero" },
            { name: "Por Qué Nosotros", id: "authority" },
            { name: "Cobertura", id: "coverage" },
            { name: "Testimonios", id: "testimonials" },
            { name: "Contacto", id: "contact" }
          ]}
          button={{
            text: "Llamar Ahora",            href: "tel:+573001234567"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Alimento Premium para Perros en la Zona Norte de Cartagena"
          description="Asesoría especializada y entrega directa en Crespo, Bocagrande, Manga y alrededores. Trabajamos con marcas de alto estándar nutricional para dueños que priorizan la calidad de vida de sus perros."
          tag="Especialistas en Nutrición Premium"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Llamar Ahora", href: "tel:+573001234567" },
            { text: "Escribir por WhatsApp", href: "https://wa.me/573001234567?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20su%20servicio%20de%20alimento%20premium" }
          ]}
          buttonAnimation="blur-reveal"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1",              imageAlt: "Perro comiendo alimento premium"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=2",              imageAlt: "Dueño de perro satisfecho con nuestro servicio"
            }
          ]}
          mediaAnimation="blur-reveal"
          rating={5}
          ratingText="Recomendado por dueños premium en Cartagena"
          ariaLabel="Hero section - Cartagena Pet Delivery premium dog food"
        />
      </div>

      <div id="authority" data-section="authority">
        <AboutMetric
          title="Especialistas en Nutrición Premium para Perros - Confía en Nuestra Experiencia"
          metrics={[
            { icon: Award, label: "Marcas Premium Certificadas", value: "15+" },
            { icon: Users, label: "Clientes Satisfechos", value: "500+" },
            { icon: Clock, label: "Horario Ampliado", value: "7am-9pm" },
            { icon: CheckCircle, label: "Seguimiento Personalizado", value: "100%" }
          ]}
          metricsAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="About metrics section - Cartagena Pet Delivery specialization"
        />
      </div>

      <div id="brands" data-section="brands">
        <SocialProofOne
          title="Marcas de Alto Estándar Nutricional"
          description="Trabajamos únicamente con marcas premium que priorizan la salud y nutrición de tu perro. No comercializamos productos genéricos."
          tag="Curadores de Marcas Premium"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Royal Canin", "Hill's Science Diet", "Pro Plan", "Acana", "Orijen", "Canidae", "Taste of the Wild"]}
          speed={40}
          showCard={true}
          ariaLabel="Social proof - Premium brands section"
        />
      </div>

      <div id="coverage" data-section="coverage">
        <FeatureCardTwelve
          title="Cobertura en Zona Norte de Cartagena"
          description="Atendemos los barrios premium de Cartagena con entregas rápidas y personalizadas."
          features={[
            {
              id: "crespo",              label: "Crespo",              title: "Entregas expresas en Crespo",              items: ["Entrega mismo día", "Asesoría a domicilio", "Seguimiento de consumo"]
            },
            {
              id: "bocagrande",              label: "Bocagrande",              title: "Cobertura completa Bocagrande",              items: ["Entregas 7 días a la semana", "Horario flexible", "Atención personalizada"]
            },
            {
              id: "manga",              label: "Manga",              title: "Servicio premium en Manga",              items: ["Entregas garantizadas", "Consultoría nutricional", "Programas de lealtad"]
            },
            {
              id: "otras-zonas",              label: "Más Zonas",              title: "También llegamos a Marbella, Laguito, Castillo y Centro",              items: ["Cobertura amplia", "Entregas coordinadas", "Servicio premium"]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Coverage zones - Cartagena north zone delivery"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Lo que Dicen Nuestros Clientes Premium"
          description="Dueños de perros en la zona norte de Cartagena confían en nuestra especialización y calidad."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              title: "Confianza y Especialización",              quote: "Finalmente encontré alguien que entiende realmente de nutrición premium para perros. No me presionan con descuentos, solo con calidad. Mi perro nunca se ha visto mejor.",              name: "María Fernández",              role: "Crespo",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg",              imageAlt: "María Fernández"
            },
            {
              id: "2",              title: "Servicio y Comodidad",              quote: "La entrega a domicilio y la asesoría personalizada hacen toda la diferencia. No tengo que salir de Bocagrande y recibo exactamente lo que mi perro necesita.",              name: "Carlos Rodríguez",              role: "Bocagrande",              imageSrc: "http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg",              imageAlt: "Carlos Rodríguez"
            },
            {
              id: "3",              title: "Verdaderos Especialistas",              quote: "Trabajo con muchas tiendas, pero Cartagena Pet Delivery es diferente. Son curadores reales, no vendedores. Recomiendo sin dudarlo.",              name: "Andrea López",              role: "Manga",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-holding-french-bulldog-walking-park_176420-55093.jpg",              imageAlt: "Andrea López"
            },
            {
              id: "4",              title: "Seguimiento que Funciona",              quote: "El seguimiento del consumo de mi perro y las recomendaciones personalizadas me han ayudado a optimizar su nutrición. Excelente equipo.",              name: "Juan Martínez",              role: "Castillo",              imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-guys-playing-with-their-dog-backyard-grass-cheerful-old-dog_158595-6541.jpg",              imageAlt: "Juan Martínez"
            }
          ]}
          ariaLabel="Testimonials section - Customer reviews"
        />
      </div>

      <div id="form" data-section="form">
        <ContactCTA
          tag="Solicitud Especializada"
          tagIcon={MessageSquare}
          title="Solicita Asesoría Personalizada"
          description="Completa este formulario y nuestro equipo de especialistas se pondrá en contacto para brindarte una asesoría ajustada a las necesidades nutricionales de tu perro."
          buttons={[
            { text: "Llenar Formulario", href: "#form-section" },
            { text: "Llamar Directamente", href: "tel:+573001234567" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Contact CTA section - Request specialized advisory"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Cartagena Pet Delivery"
          leftLink={{ text: "Política de Privacidad", href: "#" }}
          rightLink={{ text: "Términos de Servicio", href: "#" }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
