"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importación de íconos de Font Awesome
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const productos = [
  {
    id: 1,
    nombre: "BATERIA DE COCINA 38 PZAS",
    precio: 497.00,
    imagen: "https://cdn.homedepot.com.mx/productos/194786/194786.jpg"
  },
  {
    id: 2,
    nombre: "BATERIA DE COCINA 4PZAS SIC",
    precio: 399.00,
    imagen: "https://cdn.homedepot.com.mx/productos/194781/194781.jpg"
  },
  {
    id: 3,
    nombre: "BATERIA DE COCINA 7 PZAS MONACO ROJO",
    precio: 1999.00,
    imagen: "https://cdn.homedepot.com.mx/productos/194775/194775.jpg"
  },
  {
    id: 4,
    nombre: "BATERIA DE COCINA 9 PZAS PARIS",
    precio: 799.00,
    imagen: "https://cdn.homedepot.com.mx/productos/194779/194779.jpg"
  },
  {
    id: 5,
    nombre: "BATERÍA DE COCINA SICILIA AVELLANA TRAMONTINA 7 PZAS",
    precio: 950.00,
    imagen: "https://cdn.homedepot.com.mx/productos/194782/194782.jpg"
  }
]
  
const productos2 = [
  {
    id: 1,
    nombre: "DESCORCHADOR ELECTRICO CUISINART",
    precio: 497.00,
    imagen: "https://cdn.homedepot.com.mx/productos/230522/230522.jpg"
  },
  {
    id: 2,
    nombre: "DECANTADOR DE VINO MAGNUM 3 LT",
    precio: 399.00,
    imagen: "https://cdn.homedepot.com.mx/productos/204972/204972.jpg"
  },
  {
    id: 3,
    nombre: "DECANTADOR GARZA 27 OZ",
    precio: 1999.00,
    imagen: "https://cdn.homedepot.com.mx/productos/204976/204976.jpg"
  }
];


// Usuario simulado
const usuario = {
  nombre: "Juan Ángel Hernández Fonseca",
};

interface LoginForm {
  email: string;
  password: string;
}

interface CreateAccountForm {
  name: string;
  email: string;
  password: string;
}

interface ForgotPasswordForm {
  email: string;
}

export default function Cocina() {
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
        <h2 className="text-xl font-semibold text-left">Baterías de cocina</h2>
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
        <h2 className="text-xl font-semibold text-left">Accesorios para bar</h2>
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
