import Image from "next/image";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos para el carrusel

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
}

interface CarouselProps {
  productos: Producto[];
}

const Carousel = ({ productos }: CarouselProps) => {
  return (
    <div className="w-full">
      <ReactCarousel
        showArrows={true} // Mostrar flechas de navegación
        showThumbs={false} // Desactivar miniaturas de las imágenes
        infiniteLoop={true} // Hacer loop en las imágenes
        autoPlay={true} // Reproducir automáticamente
        interval={3000} // Intervalo entre imágenes
        stopOnHover={true} // Detener la reproducción al hacer hover
        emulateTouch={true} // Hacer que el carrusel sea táctil
      >
        {productos.map((producto) => (
          <div key={producto.id} className="text-center">
            <Image
  src={producto.imagen}
  alt={producto.nombre}
  width={500}  // Define un ancho adecuado
  height={300} // Define una altura adecuada
  className="w-full h-48 object-cover rounded-lg mb-4"
/>
            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
            <p className="text-gray-600">${producto.precio}</p>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Carousel;
