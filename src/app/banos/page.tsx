"use client";
import React, {  useState } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importación de íconos de Font Awesome
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const productos = [
  {
    id: 1,
    nombre: "LLAVE MEZCLADORA PARA BAÑO DUOMANDO",
    precio: 497.00,
    imagen: "https://cdn.homedepot.com.mx/productos/149075/149075.jpg"
  },
  {
    id: 2,
    nombre: "REGADERA ELÉCTRICA 9 X 16.5 CM TERMOPLÁSTICO",
    precio: 399.00,
    imagen: "https://cdn.homedepot.com.mx/productos/177830/177830.jpg"
  },
  {
    id: 3,
    nombre: "REGADERA CON BRAZO Y CHAPETÓN CROMO",
    precio: 1999.00,
    imagen: "https://cdn.homedepot.com.mx/productos/465610/465610.jpg"
  },
  {
    id: 4,
    nombre: "REGADERA MANUAL BRISEI CON 3 FUNCIONES 26.5 X 10 X 5 CM PLÁSTICO ABS",
    precio: 799.00,
    imagen: "https://cdn.homedepot.com.mx/productos/136123/136123.jpg"
  },
  {
    id: 5,
    nombre: "LLAVE MEZCLADORA PARA LAVABO DUOMANDO 4 PULGADAS LATÓN",
    precio: 950.00,
    imagen: "https://cdn.homedepot.com.mx/productos/567839/567839.jpg"
  },
  {
    id: 6,
    nombre: "LLAVE MEZCLADORA PARA BAÑO MONOMANDO 25.7 X 9 X 15.6 CM ZINC",
    precio: 750.00,
    imagen: "https://cdn.homedepot.com.mx/productos/149054/149054.jpg"
  }
]
  
const productos2 = [
  {
    id: 1,
    nombre: "TINA CON HIDROMASAJE 325 L BLANCO",
    precio: 497.00,
    imagen: "https://cdn.homedepot.com.mx/productos/941823/941823.jpg"
  },
  {
    id: 2,
    nombre: "TINA CON HIDROMASAJE DE 329 L BLANCA",
    precio: 399.00,
    imagen: "https://cdn.homedepot.com.mx/productos/941858/941858.jpg"
  },
  {
    id: 3,
    nombre: "TINA CON HIDROMASAJE DE 208 L BLANCA",
    precio: 1999.00,
    imagen: "https://cdn.homedepot.com.mx/productos/943162/943162.jpg"
  },
  {
    id: 4,
    nombre: "TINA SIN HIDROMASAJE DE 208 L BLANCA",
    precio: 799.00,
    imagen: "https://cdn.homedepot.com.mx/productos/943189/943189.jpg"
  },
  {
    id: 5,
    nombre: "TINA DE BAÑO 152.4 X 81.3 X 48.5 CM CON HIDROMASAJE DE 265 L BLANCA",
    precio: 950.00,
    imagen: "https://cdn.homedepot.com.mx/productos/123919/123919.jpg"
  },
  {
    id: 6,
    nombre: "TINA DE BAÑO 152.4 X 81.3 X 48.5 CM CON HIDROMASAJE DE 265 L BLANCA",
    precio: 750.00,
    imagen: "https://cdn.homedepot.com.mx/productos/123924/123924.jpg"
  },

];


// Usuario simulado
const usuario = {
  nombre: "Juan Ángel Hernández Fonseca",
};

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidad?: number;
}

export default function Banos() {
  const [submenuAbierto, setSubmenuAbierto] = useState<string | null>(null);
  const [mostrarMenuCuenta, setMostrarMenuCuenta] = useState(false);
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para mostrar el cajón del carrito
  const router = useRouter();
  const [cantidad, setCantidad] = useState(0); // Estado para la cantidad de productos
  const [carrito, setCarrito] = useState<any[]>([]); // Estado para el carrito
  
  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto: any) => {
    if (cantidad > 0) {
      // Agregamos el producto con la cantidad seleccionada al carrito
      setCarrito([
        ...carrito,
        { ...producto, cantidad } // Producto con su cantidad
      ]);
      setCantidad(0); // Reseteamos la cantidad después de agregarlo al carrito
      setMostrarCarrito(true); // Abrir el cajón del carrito automáticamente
      alert("Producto agregado al carrito");
    }
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

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
              <ul>
                {carrito.length === 0 ? (
                  <p>Tu carrito está vacío</p>
                ) : (
                  carrito.map((item, index) => (
                    <li key={index} className="flex items-center justify-between border-b py-2">
                      <div className="flex items-center">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          className="w-16 h-16 object-cover mr-4"
                        />
                        <div>
                          <p className="text-sm font-semibold">{item.nombre}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <button
                              className="px-2 py-1 bg-gray-300 rounded"
                              onClick={decrementarCantidad}
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border rounded">{item.cantidad}</span>
                            <button
                              className="px-2 py-1 bg-gray-300 rounded"
                              onClick={incrementarCantidad}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-semibold">{`$${item.precio * item.cantidad}`}</p>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
  
      <section className="p-6">
        <h2 className="text-xl font-semibold text-left">Grifería</h2>
        <div className="border-t-2 border-gray-300 mb-4"></div>
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
            {productos.map((producto) => (
              <div className="flex justify-around" key={producto.id}>
                <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
                  <div className="flex justify-between items-start w-full">
                    <img
                      src={producto.imagen}
                      className="w-[150px] h-[150px] object-cover"
                      alt={producto.nombre}
                    />
                    <p className="ml-4 mt-2 text-left">{producto.nombre}</p>
                  </div>
                  <p className="mt-10 text-lg font-semibold text-gray-700">
                    Precio: ${producto.precio}
                  </p>
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button className="px-2 py-1 bg-gray-300 rounded" onClick={decrementarCantidad}>
                        -
                      </button>
                      <span className="px-3 py-1 border rounded">{cantidad}</span>
                      <button className="px-2 py-1 bg-gray-300 rounded" onClick={incrementarCantidad}>
                        +
                      </button>
                    </div>
                    <button
                      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-xl font-semibold text-left">Tinas de baño</h2>
        <div className="border-t-2 border-gray-300 mb-4"></div>
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
            {productos2.map((producto) => (
              <div className="flex justify-around" key={producto.id}>
                <div className="w-[338px] h-[337px] bg-white border border-gray-300 shadow-md p-4 rounded-md">
                  <div className="flex justify-between items-start w-full">
                    <img
                      src={producto.imagen}
                      className="w-[150px] h-[150px] object-cover"
                      alt={producto.nombre}
                    />
                    <p className="ml-4 mt-2 text-left">{producto.nombre}</p>
                  </div>
                  <p className="mt-10 text-lg font-semibold text-gray-700">
                    Precio: ${producto.precio}
                  </p>
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button className="px-2 py-1 bg-gray-300 rounded" onClick={decrementarCantidad}>
                        -
                      </button>
                      <span className="px-3 py-1 border rounded">{cantidad}</span>
                      <button className="px-2 py-1 bg-gray-300 rounded" onClick={incrementarCantidad}>
                        +
                      </button>
                    </div>
                    <button
                      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
