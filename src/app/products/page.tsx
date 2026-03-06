"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Package } from 'lucide-react';

export default function ProductsPage() {
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
            text: "Llamar Ahora",            href: "tel:+573011471991"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          background={{ variant: "plain" }}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1", alt: "Cliente satisfecho" },
            { src: "http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg", alt: "Perro comiendo" },
            { src: "http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg", alt: "Familia con perro" }
          ]}
          avatarText="Más de 500 clientes satisfechos"
          title="Catálogo de Alimentos Premium"
          description="Explora nuestra selección exclusiva de alimentos premium para perros. Cada producto ha sido cuidadosamente seleccionado para garantizar la máxima calidad nutricional."
          buttons={[
            { text: "Solicitar Asesoría", href: "/" },
            { text: "Contactar por WhatsApp", href: "https://wa.me/573011471991?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos" }
          ]}
          buttonAnimation="blur-reveal"
          ariaLabel="Hero section - Products page"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          products={[
            {
              id: "1",              name: "Royal Canin Maxi Adult",              price: "$85.000",              variant: "Premium Nutricional  Perros Grandes",              imageSrc: "http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1",              imageAlt: "Royal Canin Maxi Adult",              isFavorited: false
            },
            {
              id: "2",              name: "Hill's Science Diet Adult",              price: "$75.000",              variant: "Nutrición Científica  Todas las Razas",              imageSrc: "http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=2",              imageAlt: "Hill's Science Diet Adult",              isFavorited: false
            },
            {
              id: "3",              name: "Pro Plan Optistart",              price: "$70.000",              variant: "Desarrollo Óptimo  Cachorros",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg?_wi=2",              imageAlt: "Pro Plan Optistart",              isFavorited: false
            },
            {
              id: "4",              name: "Acana Grasslands",              price: "$95.000",              variant: "Ingredientes Naturales  Proteína Alta",              imageSrc: "http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg?_wi=2",              imageAlt: "Acana Grasslands",              isFavorited: false
            },
            {
              id: "5",              name: "Orijen Original",              price: "$110.000",              variant: "Biológicamente Apropiado  Perros Activos",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-holding-french-bulldog-walking-park_176420-55093.jpg?_wi=2",              imageAlt: "Orijen Original",              isFavorited: false
            },
            {
              id: "6",              name: "Canidae Pure",              price: "$80.000",              variant: "Sin Granos  Ingredientes Simples",              imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-guys-playing-with-their-dog-backyard-grass-cheerful-old-dog_158595-6541.jpg?_wi=2",              imageAlt: "Canidae Pure",              isFavorited: false
            }
          ]}
          title="Nuestros Productos"
          description="Selección cuidada de alimentos premium. Todos nuestros productos están respaldados por especialistas en nutrición canina."
          tag="Catálogo Premium"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          useInvertedBackground={false}
          carouselMode="buttons"
          ariaLabel="Products section"
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
