"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Package } from 'lucide-react';
import { useState } from 'react';

interface ProductVariant {
  lifeStage: 'puppy' | 'adult' | 'senior';
  size: 'small' | 'medium' | 'large';
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
        { lifeStage: 'puppy', size: 'large', label: 'Puppy Large' },
        { lifeStage: 'adult', size: 'large', label: 'Adult Large' },
        { lifeStage: 'senior', size: 'large', label: 'Senior Large' }
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
        { lifeStage: 'adult', size: 'small', label: 'Small Adult' },
        { lifeStage: 'adult', size: 'medium', label: 'Medium Adult' },
        { lifeStage: 'adult', size: 'large', label: 'Large Adult' }
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
        { lifeStage: 'puppy', size: 'small', label: 'Puppy Small' },
        { lifeStage: 'puppy', size: 'medium', label: 'Puppy Medium' },
        { lifeStage: 'puppy', size: 'large', label: 'Puppy Large' }
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
        { lifeStage: 'adult', size: 'small', label: 'Small Adult' },
        { lifeStage: 'adult', size: 'medium', label: 'Medium Adult' },
        { lifeStage: 'adult', size: 'large', label: 'Large Adult' }
      ],
      packageSizes: [{ size: '2kg', label: '2kg' }, { size: '6kg', label: '6kg' }, { size: '11.4kg', label: '11.4kg' }]
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
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedPackageSize, setSelectedPackageSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariant(product.variants[0] || null);
    setSelectedPackageSize(product.packageSizes[0]?.size || '');
    setQuantity(1);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
    setSelectedVariant(null);
    setSelectedPackageSize('');
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct && selectedVariant && selectedPackageSize) {
      console.log('Added to cart:', {
        product: selectedProduct.name,
        variant: selectedVariant.label,
        packageSize: selectedPackageSize,
        quantity
      });
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

      <div id="products" data-section="products" className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          {Object.entries(PRODUCTS_BY_BRAND).map(([brand, products]) => (
            <div key={brand} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-foreground">{brand}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="cursor-pointer group bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-foreground">{product.name}</h3>
                      <p className="text-primary-cta font-bold text-xl mb-4">{product.price}</p>
                      <div className="space-y-2 mb-4">
                        <div>
                          <label className="text-xs font-semibold text-foreground/70 block mb-1">Life Stage</label>
                          <select className="w-full p-2 border border-accent rounded text-sm bg-background text-foreground">
                            {['puppy', 'adult', 'senior'].map(stage => (
                              <option key={stage} value={stage}>{stage.charAt(0).toUpperCase() + stage.slice(1)}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-foreground/70 block mb-1">Dog Size</label>
                          <select className="w-full p-2 border border-accent rounded text-sm bg-background text-foreground">
                            {['small', 'medium', 'large'].map(size => (
                              <option key={size} value={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-foreground/70 block mb-1">Package Size</label>
                          <select className="w-full p-2 border border-accent rounded text-sm bg-background text-foreground">
                            {product.packageSizes.map(pkg => (
                              <option key={pkg.size} value={pkg.size}>{pkg.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-accent rounded">
                          <button className="px-2 py-1 text-foreground hover:bg-accent/20">-</button>
                          <span className="px-3 py-1">1</span>
                          <button className="px-2 py-1 text-foreground hover:bg-accent/20">+</button>
                        </div>
                        <button className="px-4 py-2 bg-primary-cta text-primary-cta-text rounded font-semibold text-sm hover:opacity-90 transition-opacity">
                          Ver Detalles
                        </button>
                      </div>
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
              <h2 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h2>
              <button onClick={handleCloseDetail} className="text-2xl text-foreground/50 hover:text-foreground">×</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm text-foreground/70">Brand: <span className="font-semibold text-foreground">{selectedProduct.brand}</span></p>
                <p className="text-3xl font-bold text-primary-cta">{selectedProduct.price}</p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Life Stage</label>
                    <select
                      value={selectedVariant?.lifeStage || ''}
                      onChange={(e) => {
                        const variant = selectedProduct.variants.find(v => v.lifeStage === e.target.value);
                        setSelectedVariant(variant || null);
                      }}
                      className="w-full p-3 border border-accent rounded bg-background text-foreground"
                    >
                      {selectedProduct.variants.map(v => (
                        <option key={v.lifeStage} value={v.lifeStage}>{v.lifeStage.charAt(0).toUpperCase() + v.lifeStage.slice(1)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Dog Size</label>
                    <select
                      value={selectedVariant?.size || ''}
                      onChange={(e) => {
                        const variant = selectedProduct.variants.find(v => v.size === e.target.value);
                        setSelectedVariant(variant || null);
                      }}
                      className="w-full p-3 border border-accent rounded bg-background text-foreground"
                    >
                      {selectedProduct.variants.map(v => (
                        <option key={v.size} value={v.size}>{v.size.charAt(0).toUpperCase() + v.size.slice(1)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Package Size</label>
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
                    <label className="block text-sm font-semibold text-foreground mb-2">Quantity</label>
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
          leftLink={{ text: "Política de Privacidad", href: "#" }}
          rightLink={{ text: "Términos de Servicio", href: "#" }}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
