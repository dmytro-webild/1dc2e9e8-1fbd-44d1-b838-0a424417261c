"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Package } from 'lucide-react';
import { useState } from 'react';

interface ProductVariant {
  lifeStage: 'cachorro' | 'adulto' | 'senior';
  size: 'pequeño' | 'mediano' | 'grande' | 'gigante';
  label: string;
}

interface PackageOption {
  size: string;
  price: number;
  label: string;
}

interface Product {
  id: string;
  brand: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  variants: ProductVariant[];
  packageSizes: PackageOption[];
  note?: string;
}

const PRODUCTS_BY_BRAND: { [brand: string]: Product[] } = {
  'Taste of the Wild': [
    {
      id: '5b',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild Pacific Stream',
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773815793307-0vnh51mf.jpg',
      imageAlt: 'Taste of the Wild Pacific Stream',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' },
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro Pequeño' },
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro Mediano' },
        { lifeStage: 'cachorro', size: 'grande', label: 'Cachorro Grande' }
      ],
      packageSizes: [
        { size: '1kg', price: 48300, label: '1kg' },
        { size: '6.35kg', price: 270000, label: '6.35kg' },
        { size: '12.7kg', price: 453000, label: '12.7kg' }
      ]
    },
    {
      id: '5',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild High Prairie',
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773816029064-r9hgdfjm.jpg?_wi=1',
      imageAlt: 'Taste of the Wild High Prairie',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' },
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro Pequeño' },
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro Mediano' },
        { lifeStage: 'cachorro', size: 'grande', label: 'Cachorro Grande' }
      ],
      packageSizes: [
        { size: '1kg', price: 48300, label: '1kg' },
        { size: '6.35kg', price: 270000, label: '6.35kg' },
        { size: '12.7kg', price: 453000, label: '12.7kg' }
      ]
    },
    {
      id: '5f',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild Appalachian Valley',
      imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773816639808-ssk86efs.jpg?_wi=1',
      imageAlt: 'Taste of the Wild Appalachian Valley',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Pequeño (Recomendado)' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [
        { size: '6.35kg', price: 275000, label: '6.35kg' },
        { size: '12.7kg', price: 463000, label: '12.7kg' }
      ]
    },
    {
      id: '5c',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild Wetlands',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Taste of the Wild Wetlands',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Grande' }
      ],
      packageSizes: [
        { size: '12.7kg', price: 463000, label: '12.7kg' }
      ]
    },
    {
      id: '5d',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild Sierra Mountain',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Taste of the Wild Sierra Mountain',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Grande' }
      ],
      packageSizes: [
        { size: '12.7kg', price: 463000, label: '12.7kg' }
      ]
    },
    {
      id: '5e',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild Southwest Canyon',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Taste of the Wild Southwest Canyon',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Grande' }
      ],
      packageSizes: [
        { size: '12.7kg', price: 463000, label: '12.7kg' }
      ]
    }
  ],
  'Royal Canin': [
    {
      id: '1',
      brand: 'Royal Canin',
      name: 'Royal Canin X-Small',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Royal Canin X-Small',
      note: 'Para razas toy y muy pequeñas',
      variants: [
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro' },
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto' },
        { lifeStage: 'senior', size: 'pequeño', label: 'Senior' }
      ],
      packageSizes: [
        { size: '1.5kg', price: 55000, label: '1.5kg' },
        { size: '3kg', price: 95000, label: '3kg' }
      ]
    },
    {
      id: '1m',
      brand: 'Royal Canin',
      name: 'Royal Canin Small',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Royal Canin Small',
      note: 'Para razas pequeñas (10-25 kg)',
      variants: [
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro' },
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto' },
        { lifeStage: 'senior', size: 'pequeño', label: 'Senior' }
      ],
      packageSizes: [
        { size: '2kg', price: 65000, label: '2kg' },
        { size: '8kg', price: 180000, label: '8kg' }
      ]
    },
    {
      id: '1ml',
      brand: 'Royal Canin',
      name: 'Royal Canin Medium',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Royal Canin Medium',
      note: 'Para razas medianas (25-45 kg)',
      variants: [
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto' },
        { lifeStage: 'senior', size: 'mediano', label: 'Senior' }
      ],
      packageSizes: [
        { size: '4kg', price: 90000, label: '4kg' },
        { size: '10kg', price: 200000, label: '10kg' }
      ]
    },
    {
      id: '1xl',
      brand: 'Royal Canin',
      name: 'Royal Canin Maxi',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Royal Canin Maxi',
      note: 'Para razas grandes (45-100 kg)',
      variants: [
        { lifeStage: 'cachorro', size: 'grande', label: 'Cachorro' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto' },
        { lifeStage: 'senior', size: 'grande', label: 'Senior' }
      ],
      packageSizes: [
        { size: '4kg', price: 85000, label: '4kg' },
        { size: '10kg', price: 180000, label: '10kg' },
        { size: '15kg', price: 250000, label: '15kg' }
      ]
    },
    {
      id: '1xxl',
      brand: 'Royal Canin',
      name: 'Royal Canin Giant',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Royal Canin Giant',
      note: 'Para razas gigantes (más de 100 kg)',
      variants: [
        { lifeStage: 'cachorro', size: 'gigante', label: 'Cachorro' },
        { lifeStage: 'adulto', size: 'gigante', label: 'Adulto' },
        { lifeStage: 'senior', size: 'gigante', label: 'Senior' }
      ],
      packageSizes: [
        { size: '4kg', price: 85000, label: '4kg' },
        { size: '10kg', price: 180000, label: '10kg' },
        { size: '15kg', price: 250000, label: '15kg' },
        { size: '20kg', price: 320000, label: '20kg' }
      ]
    }
  ],
  "Hill's Science Diet": [
    {
      id: '2',
      brand: "Hill's Science Diet",      name: "Hill's Adult Sensitive Stomach",      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=2',
      imageAlt: "Hill's Adult Sensitive Stomach",      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [
        { size: '3.5kg', price: 75000, label: '3.5kg' },
        { size: '7.5kg', price: 145000, label: '7.5kg' },
        { size: '12kg', price: 220000, label: '12kg' }
      ]
    }
  ],
  'Pro Plan': [
    {
      id: '3',
      brand: 'Pro Plan',
      name: 'Pro Plan OptiStart',
      imageSrc: 'http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg?_wi=2',
      imageAlt: 'Pro Plan OptiStart',
      variants: [
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro Pequeño' },
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro Mediano' },
        { lifeStage: 'cachorro', size: 'grande', label: 'Cachorro Grande' }
      ],
      packageSizes: [
        { size: '3kg', price: 70000, label: '3kg' },
        { size: '6kg', price: 135000, label: '6kg' },
        { size: '12kg', price: 250000, label: '12kg' }
      ]
    }
  ],
  'Acana': [
    {
      id: '4',
      brand: 'Acana',
      name: 'Acana Grasslands',
      imageSrc: 'http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg?_wi=2',
      imageAlt: 'Acana Grasslands',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [
        { size: '2kg', price: 95000, label: '2kg' },
        { size: '6kg', price: 265000, label: '6kg' },
        { size: '11.4kg', price: 475000, label: '11.4kg' }
      ]
    }
  ],
  'Orijen': [
    {
      id: '6',
      brand: 'Orijen',
      name: 'Orijen Original',
      imageSrc: 'http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg?_wi=1',
      imageAlt: 'Orijen Original',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [
        { size: '1.8kg', price: 110000, label: '1.8kg' },
        { size: '5.4kg', price: 305000, label: '5.4kg' },
        { size: '11.3kg', price: 595000, label: '11.3kg' }
      ]
    }
  ],
  'Monello': [
    {
      id: '7',
      brand: 'Monello',
      name: 'Monello Premium',
      imageSrc: 'http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg?_wi=1',
      imageAlt: 'Monello Premium',
      variants: [
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro Mediano' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'senior', size: 'mediano', label: 'Senior Mediano' }
      ],
      packageSizes: [
        { size: '3kg', price: 65000, label: '3kg' },
        { size: '8kg', price: 165000, label: '8kg' },
        { size: '15kg', price: 295000, label: '15kg' }
      ]
    }
  ],
  'Equilibrio': [
    {
      id: '8',
      brand: 'Equilibrio',
      name: 'Equilibrio Adulto',
      imageSrc: 'http://img.b2bpic.net/free-photo/handsome-man-holding-french-bulldog-walking-park_176420-55093.jpg?_wi=2',
      imageAlt: 'Equilibrio Adulto',
      variants: [
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro Pequeño' },
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'senior', size: 'pequeño', label: 'Senior Pequeño' }
      ],
      packageSizes: [
        { size: '2kg', price: 72000, label: '2kg' },
        { size: '7.5kg', price: 195000, label: '7.5kg' },
        { size: '15kg', price: 355000, label: '15kg' }
      ]
    }
  ]
};

const FEATURED_PRODUCTS = [
  {
    id: '1',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773816029064-r9hgdfjm.jpg?_wi=2',
    imageAlt: 'Taste of the Wild High Prairie'
  },
  {
    id: '2',
    imageSrc: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773816639808-ssk86efs.jpg?_wi=2',
    imageAlt: 'Taste of the Wild Appalachian Valley'
  },
  {
    id: '3',
    imageSrc: 'http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg?_wi=2',
    imageAlt: 'Pro Plan OptiStart'
  },
  {
    id: '4',
    imageSrc: 'http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg?_wi=2',
    imageAlt: 'Acana Grasslands'
  }
];

interface PriceEntry {
  lifeStage: 'adulto' | 'cachorro';
  size: string;
  price: number;
}

const TASTE_OF_THE_WILD_PRICES: PriceEntry[] = [
  { lifeStage: 'adulto', size: '1kg', price: 48300 },
  { lifeStage: 'adulto', size: '6.35kg', price: 270000 },
  { lifeStage: 'adulto', size: '12.7kg', price: 453000 },
  { lifeStage: 'cachorro', size: '1kg', price: 48300 },
  { lifeStage: 'cachorro', size: '6.35kg', price: 259000 },
  { lifeStage: 'cachorro', size: '12.7kg', price: 465000 }
];

const APPALACHIAN_VALLEY_PRICES: PriceEntry[] = [
  { lifeStage: 'adulto', size: '6.35kg', price: 275000 },
  { lifeStage: 'adulto', size: '12.7kg', price: 463000 }
];

const ROYAL_CANIN_SIZE_MAPPING: { [key: string]: 'pequeño' | 'mediano' | 'grande' | 'gigante' } = {
  'Royal Canin X-Small': 'pequeño',
  'Royal Canin Small': 'pequeño',
  'Royal Canin Medium': 'mediano',
  'Royal Canin Maxi': 'grande',
  'Royal Canin Giant': 'gigante'
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLifeStage, setSelectedLifeStage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedPackageSize, setSelectedPackageSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedLifeStage(product.variants[0]?.lifeStage || '');
    setSelectedSize(product.variants[0]?.size || '');
    setSelectedPackageSize(product.packageSizes[0]?.size || '');
    setQuantity(1);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
    setSelectedLifeStage('');
    setSelectedSize('');
    setSelectedPackageSize('');
    setQuantity(1);
  };

  const getPriceForSelection = () => {
    if (!selectedProduct || !selectedPackageSize) return null;
    
    if (selectedProduct.name === 'Taste of the Wild High Prairie' || 
        selectedProduct.name === 'Taste of the Wild Pacific Stream') {
      const priceEntry = TASTE_OF_THE_WILD_PRICES.find(
        p => p.lifeStage === selectedLifeStage && p.size === selectedPackageSize
      );
      return priceEntry?.price || null;
    }
    
    if (selectedProduct.name === 'Taste of the Wild Appalachian Valley') {
      const priceEntry = APPALACHIAN_VALLEY_PRICES.find(
        p => p.lifeStage === selectedLifeStage && p.size === selectedPackageSize
      );
      return priceEntry?.price || null;
    }
    
    if (selectedProduct.name === 'Taste of the Wild Wetlands' ||
        selectedProduct.name === 'Taste of the Wild Sierra Mountain' ||
        selectedProduct.name === 'Taste of the Wild Southwest Canyon') {
      const pkg = selectedProduct.packageSizes.find(p => p.size === selectedPackageSize);
      return pkg?.price || null;
    }
    
    const pkg = selectedProduct.packageSizes.find(p => p.size === selectedPackageSize);
    return pkg?.price || null;
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedLifeStage && selectedPackageSize) {
      const price = getPriceForSelection();
      const formattedPrice = price ? `$${price.toLocaleString('es-CO')}` : 'Consultar';
      const lifeStageLabel = selectedProduct.name === 'Taste of the Wild Wetlands' ||
                            selectedProduct.name === 'Taste of the Wild Sierra Mountain' ||
                            selectedProduct.name === 'Taste of the Wild Southwest Canyon'
        ? 'Fórmula exclusiva para perros adultos'
        : selectedLifeStage.charAt(0).toUpperCase() + selectedLifeStage.slice(1);
      const message = `Hola, quiero pedir: Producto: ${selectedProduct.name}, Etapa de vida: ${lifeStageLabel}, Tamaño del paquete: ${selectedPackageSize}, Precio: ${formattedPrice}, Cantidad: ${quantity}. Por favor confirmar disponibilidad y entrega en Cartagena.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/573011471991?text=${encodedMessage}`, '_blank');
      handleCloseDetail();
    }
  };

  const isRoyalCanin = selectedProduct?.brand === 'Royal Canin';

  const getLowestPrice = (product: Product) => {
    return Math.min(...product.packageSizes.map(pkg => pkg.price));
  };

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

      <div id="hero" data-section="hero" className="pt-20">
        <HeroBillboardRotatedCarousel
          title="Catálogo de Alimentos Premium"
          description="Explora nuestra selección exclusiva de alimentos premium para perros. Cada producto ha sido cuidadosamente seleccionado para garantizar la máxima calidad nutricional."
          background={{ variant: "plain" }}
          tag="Productos Destacados"
          tagIcon={Package}
          tagAnimation="blur-reveal"
          buttons={[
            { text: "Solicitar Asesoría", href: "/" },
            { text: "Contactar por WhatsApp", href: "https://wa.me/573011471991?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos" }
          ]}
          buttonAnimation="blur-reveal"
          carouselItems={FEATURED_PRODUCTS}
          autoPlay={true}
          autoPlayInterval={4000}
          ariaLabel="Hero section - Featured products carousel"
        />
      </div>

      <div id="products" data-section="products" className="py-20 px-4">
        <div className="w-full max-w-7xl mx-auto">
          {Object.entries(PRODUCTS_BY_BRAND).map(([brand, products]) => (
            <div key={brand} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">{brand}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => {
                  const basePrice = getLowestPrice(product);
                  return (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="cursor-pointer group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                    >
                      <div className="aspect-square overflow-hidden bg-gray-200 flex-shrink-0">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg mb-2 text-foreground line-clamp-2">{product.name}</h3>
                        <p className="text-primary-cta font-bold text-xl mb-4">desde ${basePrice.toLocaleString('es-CO')}</p>
                        <button className="px-4 py-2 bg-primary-cta text-primary-cta-text rounded font-semibold text-sm hover:opacity-90 transition-opacity mt-auto">
                          Ver Detalles
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseDetail}>
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h2>
              <button onClick={handleCloseDetail} className="text-2xl text-foreground/50 hover:text-foreground">×</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 flex flex-col">
                <p className="text-sm text-foreground/70">Marca: <span className="font-semibold text-foreground">{selectedProduct.brand}</span></p>
                
                {selectedProduct.note && (
                  <div className="text-xs text-foreground/60 bg-background/50 p-2 rounded">
                    <p><strong>{selectedProduct.note}</strong></p>
                  </div>
                )}

                {selectedProduct.name === 'Taste of the Wild Appalachian Valley' && (
                  <div className="text-xs text-foreground/60 bg-background/50 p-2 rounded">
                    <p>Fórmula exclusiva para perros adultos, especialmente recomendada para razas pequeñas. El precio varía únicamente según el tamaño del empaque.</p>
                  </div>
                )}

                {(selectedProduct.name === 'Taste of the Wild Wetlands' ||
                  selectedProduct.name === 'Taste of the Wild Sierra Mountain' ||
                  selectedProduct.name === 'Taste of the Wild Southwest Canyon') && (
                  <div className="text-xs text-foreground/60 bg-background/50 p-2 rounded">
                    <p>Fórmula exclusiva para perros adultos.</p>
                  </div>
                )}

                {(selectedProduct.name === 'Taste of the Wild High Prairie' || 
                  selectedProduct.name === 'Taste of the Wild Pacific Stream') && (
                  <div className="text-xs text-foreground/60 bg-background/50 p-2 rounded">
                    <p>Nota: El selector de tamaño del perro es solo para referencia. El precio varía según la etapa de vida (Adulto/Cachorro) y el tamaño del paquete.</p>
                  </div>
                )}

                <p className="text-3xl font-bold text-primary-cta">{getPriceForSelection() ? `$${getPriceForSelection()?.toLocaleString('es-CO')}` : 'Consultar'}</p>

                <div className="space-y-3 flex-grow">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Etapa de Vida</label>
                    <select
                      value={selectedLifeStage}
                      onChange={(e) => setSelectedLifeStage(e.target.value)}
                      className="w-full p-3 border border-accent rounded bg-background text-foreground"
                    >
                      {Array.from(new Set(selectedProduct.variants.map(v => v.lifeStage))).map(stage => (
                        <option key={stage} value={stage}>{stage.charAt(0).toUpperCase() + stage.slice(1)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tamaño del Perro</label>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full p-3 border border-accent rounded bg-background text-foreground"
                    >
                      {Array.from(new Set(selectedProduct.variants.map(v => v.size))).map(size => {
                        const variant = selectedProduct.variants.find(v => v.size === size);
                        if (selectedProduct.name === 'Taste of the Wild Appalachian Valley' ||
                            selectedProduct.name === 'Taste of the Wild Wetlands' ||
                            selectedProduct.name === 'Taste of the Wild Sierra Mountain' ||
                            selectedProduct.name === 'Taste of the Wild Southwest Canyon') {
                          return <option key={size} value={size}>{variant?.label}</option>;
                        }
                        const sizeLabels: { [key: string]: string } = {
                          'pequeño': 'Pequeño',
                          'mediano': 'Mediano',
                          'grande': 'Grande',
                          'gigante': 'Gigante'
                        };
                        return <option key={size} value={size}>{sizeLabels[size] || size.charAt(0).toUpperCase() + size.slice(1)}</option>;
                      })}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Tamaño del Paquete</label>
                    <select
                      value={selectedPackageSize}
                      onChange={(e) => setSelectedPackageSize(e.target.value)}
                      className="w-full p-3 border border-accent rounded bg-background text-foreground"
                    >
                      {selectedProduct.packageSizes.map(pkg => (
                        <option key={pkg.size} value={pkg.size}>{pkg.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Cantidad</label>
                    <div className="flex items-center gap-3 border border-accent rounded p-2 w-fit">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1 text-foreground hover:bg-accent/20 rounded"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 text-foreground font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-1 text-foreground hover:bg-accent/20 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-primary-cta text-primary-cta-text rounded font-bold hover:opacity-90 transition-opacity mt-6"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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