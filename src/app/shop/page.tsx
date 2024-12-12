"use client";
import Image from 'next/image'; // Asegúrate de importar Image
import { useState } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importación de íconos de Font Awesome
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Usuario simulado
const usuario = {
  nombre: "Juan Ángel Hernández Fonseca",
};

// Productos simulados (se usa para el carrusel)




export default function Shop() {
 
  const [submenuAbierto, setSubmenuAbierto] = useState<string | null>(null);
  const [mostrarMenuCuenta, setMostrarMenuCuenta] = useState(false);
 
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para mostrar el cajón del carrito
 
  const router = useRouter();
  const [cantidad, setCantidad] = useState(0); // Estado para la cantidad de productos
  const [carrito, setCarrito] = useState<any[]>([]); // Estado para el carrito




  const toggleSubmenu = (submenu: string) => {
    if (submenuAbierto === submenu) {
      setSubmenuAbierto(null);
    } else {
      setSubmenuAbierto(submenu);
    }
  };

  const toggleMenuCuenta = () => {
    setMostrarMenuCuenta(!mostrarMenuCuenta);
  };

  const cerrarSesion = () => {
    setMostrarMenuCuenta(false);
    alert("Has cerrado sesión");
    router.push("/login");
  };
  return (
      <div className="min-h-screen bg-White-50">
<header className="flex flex-col items-center p-6" style={{ backgroundColor: '#F96302' }}>
          <div className="flex justify-between items-center w-full">
          <Link href="/shop" className="text-3xl font-extrabold text-center flex-grow text-white">
    COMPANY-MAY
</Link>
            <div className="flex items-center space-x-8 relative">
              <div className="flex flex-col items-center cursor-pointer" onClick={toggleMenuCuenta}>
                <FaUserCircle className="text-3xl" />
                <span className="text-gray-700 font-semibold">Mi cuenta</span>
              </div>
              {mostrarMenuCuenta && (
                <div className="absolute left-[-180px] top-full mt-2 bg-white shadow-lg rounded-md w-72 z-10">
                  <div className="py-2 px-4 text-gray-700 font-semibold">
                    <p>Hola, {usuario.nombre}</p>
                  </div>
                  <ul className="text-sm py-2 px-4 space-y-2">
                    <li className="hover:bg-gray-200 cursor-pointer">
                    <Link href="/pedidos">Mis pedidos, direcciones y más</Link>
                    </li>
                    <li className="hover:bg-gray-200 cursor-pointer" onClick={cerrarSesion}>
                      <FaSignOutAlt className="inline mr-2" />
                      Cerrar sesión
                    </li>
                  </ul>
                </div>
              )}
              <div className="relative">
                <button className="text-gray-700 font-semibold" onClick={() => setMostrarCarrito(true)}>
                  <FaShoppingCart className="inline mr-2" />
                </button>
              </div>
            </div>
          </div>
        </header>
  
        <div className="bg-gray-100 p-4">
       
          <Link href="/banos">
              <button className="text-gray-700 font-semibold ml-4">Baños</button>
            </Link>

            <Link href="/cocina">
              <button className="text-gray-700 font-semibold ml-4">Cocina</button>
            </Link>
          
          
            <Link href="/ayuda">
              <button className="text-gray-700 font-semibold ml-4">Ayuda</button>
            </Link>
        </div>
        
        {/* Cajón del carrito */}
        <div className="relative">
  {mostrarCarrito && (
    <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Carrito</h2>
        <button
          className="text-gray-700 hover:text-red-500"
          onClick={() => setMostrarCarrito(false)}
        >
          ✖
        </button>
      </div>
      <div className="p-4">
        {/* Contenido del carrito */}
        <p className="text-gray-600">Tu carrito está vacío.</p>
        {/* Aquí puedes agregar la lista de productos */}
      </div>
    </div>
  )}
</div>
      <section className="p-6">
        <div className="w-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            dynamicHeight={false}
            emulateTouch={true}
            swipeable={true}
            interval={3000}
            showArrows={true}
            swipeScrollTolerance={5}
            showIndicators={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <div
                onClick={onClickHandler}
                style={{ position: 'absolute', left: '10px', top: '50%', zIndex: 10 }}
              >
                <button className="text-white bg-black rounded-full p-2">←</button>
              </div>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <div
                onClick={onClickHandler}
                style={{ position: 'absolute', right: '10px', top: '50%', zIndex: 10 }}
              >
                <button className="text-white bg-black rounded-full p-2">→</button>
              </div>
            )}
            renderIndicator={(clickHandler, isSelected, index, label) => (
              <li
                className={`inline-block mx-1 cursor-pointer w-3 h-3 rounded-full ${isSelected ? 'bg-orange-500' : 'bg-gray-400'}`}
                style={{ transition: 'background-color 0.3s', width: '12px', height: '12px' }}
                onClick={clickHandler}
              />
            )}
          >
            <div className="flex justify-center">
              <img
                src="https://cdn.homedepot.com.mx/temporalidades/2024/11_NoviembreDelAhorro/HOME/ATT-temp12_00-D.jpg"
                alt="Producto 1"
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.homedepot.com.mx/temporalidades/2024/12_Vigencia_12/HOME/ATT-regalos-D.jpg"
                alt="Producto 2"
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.homedepot.com.mx/temporalidades/2024/12_Vigencia_12/HOME/ATT-reuniones-D.jpg"
                alt="Producto 3"
                className="w-full h-72 object-cover rounded-md"
              />
            </div>
          </Carousel>
        </div>
      </section>
      
      <section className="p-6">
  {/* Texto alineado a la izquierda */}
  <div className="mb-2">
    <h2 className="text-xl font-semibold text-left">Compra por categoría</h2>
  </div>

  {/* Línea arriba del carrusel */}
  <div className="border-t-2 border-gray-300 mb-4"></div>

  {/* Carrusel */}
  <div className="w-full">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      dynamicHeight={false}
      emulateTouch={true}
      swipeable={true}
      interval={3000}
      showArrows={true}
      swipeScrollTolerance={5}
      showIndicators={true}
    >
      {/* Carrusel 1 */}
      <div className="flex justify-around">
  {/* Carrusel 1 */}
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-regalos_nja.jpg"
      alt="Imagen 1"
      width={160} // Define el tamaño adecuado para la imagen
      height={120} // Define el tamaño adecuado para la imagen
      className="object-cover"
    />
    <p className="mt-2 text-center">Regalos</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-calentadores.jpg"
      alt="Imagen 2"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Calentadores</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-pisos.jpg"
      alt="Imagen 3"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Pisos</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-refrigeradores.jpg"
      alt="Imagen 4"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Refrigeradores</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-banos.jpg"
      alt="Imagen 5"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Baños</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-calefactores.jpg"
      alt="Imagen 6"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Calefactores</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-pintura.jpg"
      alt="Imagen 7"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Pintura</p>
  </div>
</div>

{/* Carrusel 2 */}
<div className="flex justify-around">
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-seguridad.jpg"
      alt="Imagen 8"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Seguridad</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-herramientas.jpg"
      alt="Imagen 9"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Herramientas</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-lavadoras.jpg"
      alt="Imagen 10"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Lavadoras</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-iluminacion.jpg"
      alt="Imagen 11"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Iluminación</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-impermeabilizantes.jpg"
      alt="Imagen 12"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Impermeabilizantes</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-navidad.jpg"
      alt="Imagen 13"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Navidad</p>
  </div>
  <div className="w-[180px] h-[161.8px] bg-white-200 p-4 rounded-md">
    <Image
      src="https://cdn.homedepot.com.mx/temporalidades/carrusel_categorias/iconos/departamentos-organizacion.jpg"
      alt="Imagen 14"
      width={160}
      height={120}
      className="object-cover"
    />
    <p className="mt-2 text-center">Organización</p>
        </div>
      </div>
    </Carousel>
  </div>
</section>

<section className="p-6">
  {/* Texto alineado a la izquierda */}
  <div className="mb-2">
    <h2 className="text-xl font-semibold text-left">Nuestras recomendaciones para ti</h2>
  </div>

  {/* Línea arriba del carrusel */}
  <div className="border-t-2 border-gray-300 mb-4"></div>

  {/* Nuevo carrusel con recuadros */}
  <div className="w-full">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      dynamicHeight={false}
      emulateTouch={true}
      swipeable={true}
      interval={3000}
      showArrows={true}
      swipeScrollTolerance={5}
      showIndicators={true}
    >
      {/* Carrusel 1 */}
      <div className="flex justify-around">
      <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
      <Image 
  src="https://cdn.homedepot.com.mx/productos/116157/116157.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-4 mt-2 text-left">INTERCERAMIC SANITARIO LOGAN UNA PIEZA DESCARGA DOBLE</p>
     </div>
         
  {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>
        <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
      <Image 
  src="https://cdn.homedepot.com.mx/productos/199843/199843.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-4 mt-2 text-left">REFRIGERADOR BESPOKE SAMSUNG SBS 28 PIES RS28CB70NAQLEM. INCLUYE PANELES ACABADO ACERO</p>
     </div>
         {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-7 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>
        <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
      <Image 
  src="https://cdn.homedepot.com.mx/productos/143349/143349.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-4 mt-2 text-left">CALENTADOR DE AGUA INSTANTÁNEO 7 L GAS LP PARA 1 SERVICIO BAJA O ALTA PRESIÓN</p>
     </div>
       {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>
        <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
      <Image 
  src="https://cdn.homedepot.com.mx/productos/194228/194228.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-4 mt-2 text-left">ECHO DOT 5TA NEGRO</p>
     </div>
        {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>
      </div>
      {/* Carrusel 2 */}
      <div className="flex justify-around">
      <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
      <Image 
  src="https://cdn.homedepot.com.mx/productos/170698/170698.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-4 mt-2 text-left">COMBO PACKOUT DE 3 PIEZAS</p>
     </div>
        {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>
        <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
     
<Image 
  src="https://cdn.homedepot.com.mx/productos/143349/143349.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-4 mt-2 text-left">DEPOSITO EXTERIORES DARWIN 190x122x221 CM (DOBLE PUERTA)</p>
     </div>
    {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>

        <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-start w-full">
      <Image 
  src="https://cdn.homedepot.com.mx/productos/210977/210977.jpg" 
  alt="Producto" 
  width={150} 
  height={150} 
  className="object-cover" 
/>
     <p className="ml-7 mt-2 text-left">LÁMPARA COLGANTE INCANDESCENTE 1.03 M X 33 CM NEGRO</p>
     </div>
       
  {/* Precio debajo de la imagen */}
  <p className="mt-10 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>
        <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md flex flex-col">
  <div className="flex justify-between items-start w-full">
    <img 
      src="https://cdn.homedepot.com.mx/productos/163154/163154.jpg" 
      className="w-[150px] h-[150px] object-cover" 
    />
    <p className="ml-4 mt-2 text-left">SET DE SILLAS DE METAL 99 X 37 X 44 CM NEGRO 4 PIEZAS</p>
  </div>

  {/* Precio debajo de la imagen */}
  <p className="mt-7 text-lg font-semibold text-gray-700">Precio: $100.00</p>
  
  {/* Espacio flexible que empuja el contador y el botón hacia abajo */}
  <div className="flex-grow" />
  
  {/* Contador y botón */}
  <div className="mt-10 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <button className="px-2 py-1 bg-gray-300 rounded">-</button>
      <span className="px-3 py-1 border rounded">0</span>
      <button className="px-2 py-1 bg-gray-300 rounded">+</button>
    </div>
    <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">Agregar</button>
  </div>
</div>

      </div>
    </Carousel>
  </div>
</section>
    </div>
  );
}
