"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Package } from 'lucide-react';
import { useState } from 'react';

interface ProductVariant {
  lifeStage: 'cachorro' | 'adulto' | 'senior';
  size: 'pequeño' | 'mediano' | 'grande';
  label: string;
}

interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  variants: ProductVariant[];
  packageSizes: { size: string; label: string }[];
}

const PRODUCTS_BY_BRAND: { [brand: string]: Product[] } = {
  'Royal Canin': [
    {
      id: '1',
      brand: 'Royal Canin',
      name: 'Royal Canin Maxi',
      price: '$85.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Royal Canin Maxi',
      variants: [
        { lifeStage: 'cachorro', size: 'grande', label: 'Cachorro Grande' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' },
        { lifeStage: 'senior', size: 'grande', label: 'Senior Grande' }
      ],
      packageSizes: [{ size: '4kg', label: '4kg' }, { size: '10kg', label: '10kg' }, { size: '15kg', label: '15kg' }]
    }
  ],
  "Hill's Science Diet": [
    {
      id: '2',
      brand: "Hill's Science Diet",      name: "Hill's Adult Sensitive Stomach",      price: '$75.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=2',
      imageAlt: "Hill's Adult Sensitive Stomach",      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [{ size: '3.5kg', label: '3.5kg' }, { size: '7.5kg', label: '7.5kg' }, { size: '12kg', label: '12kg' }]
    }
  ],
  'Pro Plan': [
    {
      id: '3',
      brand: 'Pro Plan',
      name: 'Pro Plan OptiStart',
      price: '$70.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg?_wi=2',
      imageAlt: 'Pro Plan OptiStart',
      variants: [
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro Pequeño' },
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro Mediano' },
        { lifeStage: 'cachorro', size: 'grande', label: 'Cachorro Grande' }
      ],
      packageSizes: [{ size: '3kg', label: '3kg' }, { size: '6kg', label: '6kg' }, { size: '12kg', label: '12kg' }]
    }
  ],
  'Acana': [
    {
      id: '4',
      brand: 'Acana',
      name: 'Acana Grasslands',
      price: '$95.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg?_wi=2',
      imageAlt: 'Acana Grasslands',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [{ size: '2kg', label: '2kg' }, { size: '6kg', label: '6kg' }, { size: '11.4kg', label: '11.4kg' }]
    }
  ],
  'Taste of the Wild': [
    {
      id: '5',
      brand: 'Taste of the Wild',
      name: 'Taste of the Wild High Prairie',
      price: '$88.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
      imageAlt: 'Taste of the Wild High Prairie',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [{ size: '2kg', label: '2kg' }, { size: '5kg', label: '5kg' }, { size: '13kg', label: '13kg' }]
    }
  ],
  'Orijen': [
    {
      id: '6',
      brand: 'Orijen',
      name: 'Orijen Original',
      price: '$110.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/portrait-young-handsome-dogowner-spending-time-with-his-pet-cafe-sitting-indoors-looking_1258-245386.jpg?_wi=1',
      imageAlt: 'Orijen Original',
      variants: [
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'adulto', size: 'grande', label: 'Adulto Grande' }
      ],
      packageSizes: [{ size: '1.8kg', label: '1.8kg' }, { size: '5.4kg', label: '5.4kg' }, { size: '11.3kg', label: '11.3kg' }]
    }
  ],
  'Monello': [
    {
      id: '7',
      brand: 'Monello',
      name: 'Monello Premium',
      price: '$65.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/two-sisters-with-their-dog-park_1303-11215.jpg?_wi=1',
      imageAlt: 'Monello Premium',
      variants: [
        { lifeStage: 'cachorro', size: 'mediano', label: 'Cachorro Mediano' },
        { lifeStage: 'adulto', size: 'mediano', label: 'Adulto Mediano' },
        { lifeStage: 'senior', size: 'mediano', label: 'Senior Mediano' }
      ],
      packageSizes: [{ size: '3kg', label: '3kg' }, { size: '8kg', label: '8kg' }, { size: '15kg', label: '15kg' }]
    }
  ],
  'Equilibrio': [
    {
      id: '8',
      brand: 'Equilibrio',
      name: 'Equilibrio Adulto',
      price: '$72.000',
      imageSrc: 'http://img.b2bpic.net/free-photo/handsome-man-holding-french-bulldog-walking-park_176420-55093.jpg?_wi=2',
      imageAlt: 'Equilibrio Adulto',
      variants: [
        { lifeStage: 'cachorro', size: 'pequeño', label: 'Cachorro Pequeño' },
        { lifeStage: 'adulto', size: 'pequeño', label: 'Adulto Pequeño' },
        { lifeStage: 'senior', size: 'pequeño', label: 'Senior Pequeño' }
      ],
      packageSizes: [{ size: '2kg', label: '2kg' }, { size: '7.5kg', label: '7.5kg' }, { size: '15kg', label: '15kg' }]
    }
  ]
};

const FEATURED_PRODUCTS = [
  {
    id: '1',
    imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=1',
    imageAlt: 'Royal Canin Maxi'
  },
  {
    id: '2',
    imageSrc: 'http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=2',
    imageAlt: "Hill's Science Diet"
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

  const handleAddToCart = () => {
    if (selectedProduct && selectedLifeStage && selectedSize && selectedPackageSize) {
      const message = `Hola, quiero pedir: Producto: ${selectedProduct.name}, Etapa: ${selectedLifeStage}, Tamaño del perro: ${selectedSize}, Tamaño del paquete: ${selectedPackageSize}, Cantidad: ${quantity}, Por favor confirmar disponibilidad y entrega en Cartagena.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/573011471991?text=${encodedMessage}`, '_blank');
      handleCloseDetail();
    }
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
            text: "Llamar Ahora",            href: "tel:+573011471991"
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
              <h2 className="text-3xl font-bold mb-8 text-foreground break-words overflow-hidden whitespace-normal">{brand}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
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
                      <h3 className="font-bold text-lg mb-2 text-foreground line-clamp-2 break-words overflow-hidden whitespace-normal">{product.name}</h3>
                      <p className="text-primary-cta font-bold text-xl mb-4">{product.price}</p>
                      <button className="px-4 py-2 bg-primary-cta text-primary-cta-text rounded font-semibold text-sm hover:opacity-90 transition-opacity mt-auto">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={handleCloseDetail}>
          <div className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground break-words overflow-hidden whitespace-normal">{selectedProduct.name}</h2>
              <button onClick={handleCloseDetail} className="text-2xl text-foreground/50 hover:text-foreground flex-shrink-0">×</button>
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
                <p className="text-sm text-foreground/70 break-words overflow-hidden whitespace-normal">Marca: <span className="font-semibold text-foreground">{selectedProduct.brand}</span></p>
                <p className="text-3xl font-bold text-primary-cta">{selectedProduct.price}</p>

                <div className="space-y-3 flex-grow">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Etapa del Perro</label>
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
                      {Array.from(new Set(selectedProduct.variants.map(v => v.size))).map(size => (
                        <option key={size} value={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</option>
                      ))}
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
