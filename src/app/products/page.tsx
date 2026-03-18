"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { useState } from 'react';

export default function ProductsPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavorite = (productId: string) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const tasteOfTheWildProducts = [
    {
      id: "1",      brand: "Taste of the Wild",      name: "Pacific Stream",      price: "$89.99",      rating: 5,
      reviewCount: "248",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Pacific Stream",      isFavorited: favorites.includes("1"),
      onFavorite: () => handleFavorite("1")
    },
    {
      id: "2",      brand: "Taste of the Wild",      name: "High Prairie",      price: "$89.99",      rating: 5,
      reviewCount: "312",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild High Prairie",      isFavorited: favorites.includes("2"),
      onFavorite: () => handleFavorite("2")
    },
    {
      id: "3",      brand: "Taste of the Wild",      name: "Wetlands",      price: "$89.99",      rating: 5,
      reviewCount: "189",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Wetlands",      isFavorited: favorites.includes("3"),
      onFavorite: () => handleFavorite("3")
    },
    {
      id: "4",      brand: "Taste of the Wild",      name: "Appalachian Valley",      price: "$89.99",      rating: 5,
      reviewCount: "156",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Appalachian Valley",      isFavorited: favorites.includes("4"),
      onFavorite: () => handleFavorite("4")
    },
    {
      id: "5",      brand: "Taste of the Wild",      name: "Sierra Mountain",      price: "$89.99",      rating: 5,
      reviewCount: "267",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Sierra Mountain",      isFavorited: favorites.includes("5"),
      onFavorite: () => handleFavorite("5")
    },
    {
      id: "6",      brand: "Taste of the Wild",      name: "Southwest Canyon",      price: "$89.99",      rating: 5,
      reviewCount: "201",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Southwest Canyon",      isFavorited: favorites.includes("6"),
      onFavorite: () => handleFavorite("6")
    }
  ];

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
            { name: "Marcas", id: "#brands" },
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

      <div id="products" data-section="products" className="py-24">
        <ProductCardTwo
          products={tasteOfTheWildProducts}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          carouselMode="buttons"
          title="Colecciones Taste of the Wild"
          description="Descubre nuestro catálogo completo de alimentos premium para perros. Cada fórmula está diseñada para proporcionar nutrición óptima."
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Products section - Taste of the Wild collection"
        />
      </div>

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
