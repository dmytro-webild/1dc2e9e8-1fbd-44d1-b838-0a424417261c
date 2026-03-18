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
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { Award, Users, Clock, CheckCircle, Sparkles, MessageSquare, Dog } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface ModalFormData {
  nombre: string;
  telefono: string;
  edadPerro: string;
  marcaActual: string;
  comentario: string;
}

interface ProductSelection {
  productId: string;
  weight: string;
  age: string;
}

export default function LandingPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductSelection | null>(null);
  const [formData, setFormData] = useState<ModalFormData>({
    nombre: '',
    telefono: '',
    edadPerro: '',
    marcaActual: '',
    comentario: ''
  });

  const products = [
    {
      id: "high-prairie",      brand: "Taste of the Wild",      name: "High Prairie",      price: "$463.000",      rating: 5,
      reviewCount: "12+",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild High Prairie",      weights: ["12.7kg"],
      ageOptions: ["Adulto"],
      lockedWeight: true,
      lockedAge: true
    },
    {
      id: "wetlands",      brand: "Taste of the Wild",      name: "Wetlands",      price: "$463.000",      rating: 5,
      reviewCount: "12+",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Wetlands",      weights: ["12.7kg"],
      ageOptions: ["Adulto"],
      lockedWeight: true,
      lockedAge: true
    },
    {
      id: "sierra-mountain",      brand: "Taste of the Wild",      name: "Sierra Mountain",      price: "$463.000",      rating: 5,
      reviewCount: "12+",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Sierra Mountain",      weights: ["12.7kg"],
      ageOptions: ["Adulto"],
      lockedWeight: true,
      lockedAge: true
    },
    {
      id: "southwest-canyon",      brand: "Taste of the Wild",      name: "Southwest Canyon Jabalí",      price: "$463.000",      rating: 5,
      reviewCount: "12+",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Southwest Canyon Jabalí",      weights: ["12.7kg"],
      ageOptions: ["Adulto"],
      lockedWeight: true,
      lockedAge: true
    },
    {
      id: "appalachian-valley",      brand: "Taste of the Wild",      name: "Appalachian Valley",      price: "$463.000",      rating: 5,
      reviewCount: "12+",      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",      imageAlt: "Taste of the Wild Appalachian Valley",      weights: ["12.7kg"],
      ageOptions: ["Adulto"],
      lockedWeight: false,
      lockedAge: false
    }
  ];

  const handleFormSubmit = async (data: ModalFormData) => {
    try {
      const emailBody = `Nombre: ${data.nombre}\nTeléfono: ${data.telefono}\nEdad del Perro: ${data.edadPerro}\nMarca que usa actualmente: ${data.marcaActual}\nComentario: ${data.comentario}`;

      const response = await fetch('https://formspree.io/f/xyzabc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'Nueva solicitud de asesoría - Cartagena Pet Delivery',
          _replyto: data.telefono || 'noreply@example.com',
        }),
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        setShowModal(false);
        setFormData({ nombre: '', telefono: '', edadPerro: '', marcaActual: '', comentario: '' });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct({
        productId,
        weight: product.weights[0],
        age: product.ageOptions[0]
      });
      setShowProductModal(true);
    }
  };

  const handleProductConfirm = () => {
    if (selectedProduct) {
      const product = products.find(p => p.id === selectedProduct.productId);
      const productName = product?.name || '';
      const weight = selectedProduct.weight;
      const age = selectedProduct.age;
      const whatsappMessage = `Hola, me interesa el producto: ${productName} - ${weight} - ${age}`;
      const whatsappUrl = `https://wa.me/573011471991?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      setShowProductModal(false);
      setSelectedProduct(null);
    }
  };

  const productCardItems = products.map(product => ({
    id: product.id,
    brand: product.brand,
    name: product.name,
    price: product.price,
    rating: product.rating,
    reviewCount: product.reviewCount,
    imageSrc: product.imageSrc,
    imageAlt: product.imageAlt,
    onProductClick: () => handleProductClick(product.id)
  }));

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
      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg p-8 text-center shadow-2xl">
            <div className="text-6xl mb-4">🐾</div>
            <h2 className="text-2xl font-bold text-[#001a4d] mb-2">¡Solicitud Recibida!</h2>
            <p className="text-gray-600">Gracias. Nuestro equipo se pondrá en contacto contigo pronto.</p>
          </div>
        </div>
      )}

      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowProductModal(false)}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#001a4d]">Seleccionar Producto</h2>
              <button onClick={() => setShowProductModal(false)} className="text-2xl text-gray-500 hover:text-gray-700">×</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleProductConfirm(); }} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Presentación</label>
                {products.find(p => p.id === selectedProduct.productId)?.weights.length === 1 ? (
                  <div className="px-3 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                    {selectedProduct.weight}
                  </div>
                ) : (
                  <select
                    value={selectedProduct.weight}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, weight: e.target.value })}
                    disabled={products.find(p => p.id === selectedProduct.productId)?.lockedWeight}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d]"
                  >
                    {products.find(p => p.id === selectedProduct.productId)?.weights.map(w => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Edad del Perro</label>
                {products.find(p => p.id === selectedProduct.productId)?.ageOptions.length === 1 ? (
                  <div className="px-3 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
                    {selectedProduct.age}
                  </div>
                ) : (
                  <select
                    value={selectedProduct.age}
                    onChange={(e) => setSelectedProduct({ ...selectedProduct, age: e.target.value })}
                    disabled={products.find(p => p.id === selectedProduct.productId)?.lockedAge}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d]"
                  >
                    {products.find(p => p.id === selectedProduct.productId)?.ageOptions.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#001a4d] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#001a4d]">Solicitar Asesoría</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl text-gray-500 hover:text-gray-700">×</button>
            </div>
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d]"
                  placeholder="Tu teléfono"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Edad del Perro</label>
                <input
                  type="text"
                  name="edadPerro"
                  value={formData.edadPerro}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d]"
                  placeholder="Ej: 2 años"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Marca que usa actualmente</label>
                <input
                  type="text"
                  name="marcaActual"
                  value={formData.marcaActual}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d]"
                  placeholder="Marca actual"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Comentario</label>
                <textarea
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#001a4d] break-words whitespace-normal"
                  placeholder="Cuéntanos sobre tu perro"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#001a4d] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      )}

      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Cartagena Pet Delivery"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Por Qué Nosotros", id: "authority" },
            { name: "Marcas", id: "brands" },
            { name: "Cobertura", id: "coverage" },
            { name: "Testimonios", id: "testimonials" },
            { name: "Productos", id: "products" },
            { name: "Contacto", id: "form" }
          ]}
          button={{
            text: "Ver Catálogo",            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Alimento Premium para perros con entrega en Cartagena"
          description="Marcas reconocidas por su calidad nutricional.\nEntregas directas en la zona norte de Cartagena."
          tag="Especialistas en Nutrición Premium"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Ver Catálogo", href: "#products" },
            { text: "Escribir por WhatsApp", href: "https://wa.me/573011471991?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20su%20servicio%20de%20alimento%20premium" }
          ]}
          buttonAnimation="blur-reveal"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1773614668188-3te1fin1.png",              imageAlt: "Perro comiendo alimento premium"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hungry-white-brown-dog-with-big-ears-brown-eyes-ready-eat-bowl-full-food_181624-59012.jpg?_wi=2",              imageAlt: "Dueño de perro satisfecho con nuestro servicio"
            }
          ]}
          mediaAnimation="blur-reveal"
          rating={5}
          ratingText="Recomendado por clientes en Cartagena"
          ariaLabel="Hero section - Cartagena Pet Delivery premium dog food"
        />
      </div>

      <div id="brands" data-section="brands">
        <SocialProofOne
          title="Marcas que Respaldan una Buena Alimentación  "
          description="Seleccionamos marcas reconocidas por su calidad nutricional
y formulaciones confiables para el bienestar de tu perro."
          tag="Nutrición Premium"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Orijen", "Acana", "Taste of the Wild", "Hill's Science Diet", "Pro Plan", "Equilibrio", "Bonnat"]}
          speed={40}
          showCard={true}
          ariaLabel="Social proof - Premium brands section"
        />
      </div>

      <div id="authority" data-section="authority">
        <AboutMetric
          title="Especialistas en Nutrición Premium para Perros - Confía en Nuestra Experiencia"
          metrics={[
            { icon: Award, label: "Marcas Premium Disponibles", value: "8+" },
            { icon: Users, label: "Familias que confían en nosotros", value: "120+" },
            { icon: Clock, label: "Atención diaria ", value: "7am–9pm" },
            { icon: CheckCircle, label: "Seguimiento Personalizado", value: "Siempre " }
          ]}
          metricsAnimation="blur-reveal"
          useInvertedBackground={false}
          ariaLabel="About metrics section - Cartagena Pet Delivery specialization"
        />
      </div>

      <div id="coverage" data-section="coverage">
        <FeatureCardTwelve
          title="Cobertura en la Zona Norte de Cartagena"
          description="Atendemos la zona norte de Cartagena con entregas rápidas y atención personalizada."
          features={[
            {
              id: "crespo",              label: "Crespo",              title: "Entregas expresas en Crespo",              items: ["Entrega mismo día", "Asesoría a domicilio", "Seguimiento de alimentación"]
            },
            {
              id: "bocagrande",              label: "Bocagrande",              title: "Cobertura completa en Bocagrande",              items: ["Entregas 7 días a la semana", "Horario flexible", "Atención personalizada"]
            },
            {
              id: "manga",              label: "Manga",              title: "Servicio personalizado en Manga",              items: ["Entregas garantizadas", "Consultoría nutricional", "Programas de lealtad"]
            },
            {
              id: "otras-zonas",              label: "Más Zonas",              title: "También cubrimos el Anillo Vial, Serena del Mar y zonas cercanas",              items: ["Cobertura ampla", "Entregas coordinadas", "Servicio premium"]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          ariaLabel="Coverage zones - Cartagena north zone delivery"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          products={productCardItems}
          title="Catálogo de Productos Premium"
          description="Explora nuestra selección de alimentos premium para perros. Cada producto está cuidadosamente seleccionado para garantizar la mejor nutrición."
          tag="Productos Disponibles"
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          ariaLabel="Product catalog section"
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
              id: "1",              title: "Confianza y Especialización",              quote: "Finalmente encontré alguien que entiende realmente de nutrición premium para perros. No me presionan con descuentos, solo con calidad. Mi perro nunca se ha visto mejor.",              name: "María Fernández",              role: "Crespo",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1772830207795-vfzymp39.jpg",              imageAlt: "María Fernández"
            },
            {
              id: "2",              title: "Servicio y Comodidad",              quote: "La entrega a domicilio y la asesoría personalizada hacen toda la diferencia. No tengo que salir de Bocagrande y recibo exactamente lo que mi perro necesita.",              name: "Carlos Rodríguez",              role: "Bocagrande",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AUA3fVGRKIlnUpW45aNJlxvf7N/uploaded-1772830260696-bmz45rfx.jpg",              imageAlt: "Carlos Rodríguez"
            },
            {
              id: "3",              title: "Verdaderos Especialistas",              quote: "Trabajo con muchas tiendas, pero Cartagena Pet Delivery es diferente. Son curadores reales, no vendedores. Recomiendo sin dudarlo.",              name: "Andrea López",              role: "Manga",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-holding-french-bulldog-walking-park_176420-55093.jpg?_wi=1",              imageAlt: "Andrea López"
            },
            {
              id: "4",              title: "Seguimiento que Funciona",              quote: "El seguimiento del consumo de mi perro y las recomendaciones personalizadas me han ayudado a optimizar su nutrición. Excelente equipo.",              name: "Juan Martínez",              role: "Castillo",              imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-guys-playing-with-their-dog-backyard-grass-cheerful-old-dog_158595-6541.jpg?_wi=1",              imageAlt: "Juan Martínez"
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
            { text: "Recibir Asesoría Gratis", onClick: () => setShowModal(true) },
            { text: "Escribir por WhatsApp", href: "https://wa.me/573011471991?text=Hola,%20me%20interesa%20recibir%20asesoría%20personalizada" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          ariaLabel="Contact CTA section - Request specialized advisory"
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