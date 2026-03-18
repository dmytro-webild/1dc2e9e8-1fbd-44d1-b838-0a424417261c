"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  sizes: { size: string; price: number }[];
  imageSrc: string;
  imageAlt: string;
  lifeStage: string;
  lifeStageLabel: string;
}

const products: Product[] = [
  {
    id: "appalachian-valley",    name: "Appalachian Valley",    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",    imageAlt: "Appalachian Valley Dog Food",    lifeStage: "Adulto",    lifeStageLabel: "Fórmula exclusiva para perros adultos",    sizes: [
      { size: "6.35kg", price: 275000 },
      { size: "12.7kg", price: 463000 }
    ]
  },
  {
    id: "wetlands",    name: "Wetlands",    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",    imageAlt: "Wetlands Dog Food",    lifeStage: "Adulto",    lifeStageLabel: "Fórmula exclusiva para perros adultos",    sizes: [
      { size: "12.7kg", price: 463000 }
    ]
  },
  {
    id: "sierra-mountain",    name: "Sierra Mountain",    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",    imageAlt: "Sierra Mountain Dog Food",    lifeStage: "Adulto",    lifeStageLabel: "Fórmula exclusiva para perros adultos",    sizes: [
      { size: "12.7kg", price: 463000 }
    ]
  },
  {
    id: "southwest-canyon",    name: "Southwest Canyon",    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",    imageAlt: "Southwest Canyon Dog Food",    lifeStage: "Adulto",    lifeStageLabel: "Fórmula exclusiva para perros adultos",    sizes: [
      { size: "12.7kg", price: 463000 }
    ]
  },
  {
    id: "orijen",    name: "Orijen",    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",    imageAlt: "Orijen Dog Food",    lifeStage: "Mixto",    lifeStageLabel: "Para todas las edades",    sizes: [
      { size: "11.4kg", price: 450000 }
    ]
  },
  {
    id: "acana",    name: "Acana",    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",    imageAlt: "Acana Dog Food",    lifeStage: "Mixto",    lifeStageLabel: "Para todas las edades",    sizes: [
      { size: "11.4kg", price: 420000 }
    ]
  }
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [cart, setCart] = useState<{ productId: string; size: string; price: number }[]>([]);

  const handleAddToCart = (productId: string, size: string, price: number) => {
    setCart([...cart, { productId, size, price }]);
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#001a4d] mb-4">Catálogo de Productos</h1>
            <p className="text-xl text-gray-600">Alimentos premium para la nutrición óptima de tu perro</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 w-full bg-gray-200">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-[#001a4d] mb-2">{product.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">Etapa: {product.lifeStage}</p>
                  <p className="text-sm text-gray-500 mb-4">{product.lifeStageLabel}</p>
                  <div className="space-y-2 mb-4">
                    {product.sizes.map((sizeOption) => (
                      <div key={`${product.id}-${sizeOption.size}`} className="flex justify-between items-center">
                        <span className="text-gray-700">{sizeOption.size}</span>
                        <span className="text-lg font-semibold text-[#001a4d]">${sizeOption.price.toLocaleString('es-CO')}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product.id)}
                    className="w-full py-2 bg-[#001a4d] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Seleccionar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#001a4d] mb-4">
                  {products.find(p => p.id === selectedProduct)?.name}
                </h3>
                <div className="space-y-3 mb-6">
                  {products.find(p => p.id === selectedProduct)?.sizes.map((size) => (
                    <button
                      key={`${selectedProduct}-${size.size}`}
                      onClick={() => setSelectedSize(size.size)}
                      className={`w-full p-3 rounded-lg font-semibold transition-colors ${
                        selectedSize === size.size
                          ? 'bg-[#001a4d] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size.size} - ${size.price.toLocaleString('es-CO')}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <button
                    onClick={() => {
                      const size = products
                        .find(p => p.id === selectedProduct)?.sizes
                        .find(s => s.size === selectedSize);
                      if (size) {
                        handleAddToCart(selectedProduct, selectedSize, size.price);
                      }
                    }}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity mb-2"
                  >
                    Agregar al Carrito
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedSize(null);
                  }}
                  className="w-full py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {cart.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-[#001a4d] mb-4">Carrito de Compras</h3>
              <div className="space-y-3 mb-6">
                {cart.map((item, index) => {
                  const product = products.find(p => p.id === item.productId);
                  return (
                    <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-800">{product?.name}</p>
                        <p className="text-sm text-gray-600">{item.size} - ${item.price.toLocaleString('es-CO')}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:opacity-90 transition-opacity text-sm"
                      >
                        Eliminar
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center text-xl font-bold text-[#001a4d]">
                  <span>Total:</span>
                  <span>${totalPrice.toLocaleString('es-CO')}</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const message = `Hola, me gustaría comprar los siguientes productos:\n\n${cart
                    .map(item => {
                      const product = products.find(p => p.id === item.productId);
                      return `- ${product?.name} (${item.size}): $${item.price.toLocaleString('es-CO')}`;
                    })
                    .join('\n')}\n\nTotal: $${totalPrice.toLocaleString('es-CO')}`;
                  window.open(
                    `https://wa.me/573011471991?text=${encodeURIComponent(message)}`,
                    '_blank'
                  );
                }}
                className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Confirmar por WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
