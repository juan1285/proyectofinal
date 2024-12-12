"use client"; // Asegúrate de colocar esto al principio del archivo
import Image from "next/image"; // Importamos el componente Image de Next.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importación de íconos de Font Awesome

// Usuario simulado
const usuario = {
  nombre: "Juan Ángel Hernández Fonseca",
};

export default function Ayuda() {
  const [submenuAbierto, setSubmenuAbierto] = useState<string | null>(null);
  const [mostrarMenuCuenta, setMostrarMenuCuenta] = useState(false); // Estado para mostrar el menú de cuenta
  const [acordeonAbierto, setAcordeonAbierto] = useState<number | null>(null); // Estado para manejar los acordeones
  const [mostrarCarrito, setMostrarCarrito] = useState(false); // Estado para mostrar el cajón del carrito
  const router = useRouter();

 
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
    router.push("/login"); // Redirige a la página de login
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
                    <Link href="/pedidos">Mis pedidos,direcciones y más</Link>
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
        <nav className="flex justify-start">
        
           
        <Link href="/banos">
              <button className="text-gray-700 font-semibold ml-4">Baños</button>
            </Link>

            <Link href="/cocina">
              <button className="text-gray-700 font-semibold ml-4">Cocina</button>
            </Link>
          
          <Link href="/ayuda">
            <button className="text-gray-700 font-semibold ml-4">Ayuda</button>
          </Link>
        </nav>
      </div>

      <section className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center space-x-10">
        <Image
      src="https://cdn.homedepot.com.mx/assets/img/uilib/help/home.svg"
      alt="Ayuda"
      width={200} // Define un tamaño adecuado para la imagen
      height={100} // Define un tamaño adecuado para la imagen
      className="max-w-full h-auto"
    />
          <div>
            <h3 className="text-3xl font-bold">¿Cómo podemos ayudarte?</h3>
          </div>
        </div>
      </section>

      <section className="flex items-start justify-between p-6 bg-white shadow-md mt-6">
        <div className="flex-1">
          <div className="flex items-center space-x-4">
          <Image
        src="https://cdn.homedepot.com.mx/assets/img/uilib/help/popular-topics.svg"
        alt="Temas frecuentes"
        width={64} // Define el tamaño adecuado para la imagen
        height={64} // Define el tamaño adecuado para la imagen
        className="max-w-full h-auto"
      />
            <div>
              <h3 className="text-lg font-semibold">Temas frecuentes</h3>
              <p className="text-sm text-gray-600">Explora las preguntas más populares.</p>
            </div>
          </div>
          
          {/* Lista de preguntas con acordeones */}
          <ul className="mt-4 text-lg text-gray-700">
            {[
              { 
                pregunta: "Conoce cómo consultar el estatus y detalle de tu orden", 
                respuesta: "Puedes consultar el estatus de tu orden ingresando a la sección 'Mis Pedidos' en tu cuenta. Si no tienes cuenta, utiliza el número de orden enviado a tu correo."
              },
              { 
                pregunta: "¿Qué hago si olvidé mi usuario?", 
                respuesta: "Si olvidaste tu usuario, verifica tu correo de registro. Normalmente, tu correo electrónico es tu usuario. De no ser así, contáctanos para más ayuda."
              },
              { 
                pregunta: "¿Qué hago si olvidé mi contraseña?", 
                respuesta: "Haz clic en '¿Olvidaste tu contraseña?' en la página de inicio de sesión. Sigue las instrucciones para crear una nueva."
              },
              { 
                pregunta: "¿Necesito tener una cuenta para comprar en COMPANY-MAY?", 
                respuesta: "No necesitas una cuenta para comprar, pero crear una te permitirá hacer el seguimiento de tus pedidos más fácilmente."
              },
              { 
                pregunta: "¿Cómo continúo con mi compra si mi dirección de entrega está fuera del área de servicio?", 
                respuesta: "En este caso, puedes optar por recoger tu pedido en una tienda cercana seleccionando la opción de recogida durante el proceso de compra."
              },
              { 
                pregunta: "¿Cómo puedo guardar una tarjeta de crédito o débito en mis métodos de pago?", 
                respuesta: "Al realizar una compra, selecciona la opción de guardar tu tarjeta para futuros pagos de forma segura."
              },
            ].map((item, index) => (
              <li key={index} className="border-b">
                <button
                  className="w-full text-left py-2 px-4 font-semibold hover:bg-gray-100"
                  onClick={() => setAcordeonAbierto(acordeonAbierto === index ? null : index)}
                >
                  {item.pregunta}
                </button>
                {acordeonAbierto === index && (
                  <div className="px-4 py-2 text-gray-600">
                    {item.respuesta}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-none self-center ml-6">
          <img
            src="https://cdn.homedepot.com.mx/assets/img/uilib/help/popular_topics_cover_img.jpg"
            alt="Temas frecuentes"
            className="w-full h-auto max-w-[705px] max-h-[470px] object-cover"
          />
        </div>
      </section>

      {/* Cajón del carrito */}
      <div className="relative">
        <button
          className="text-gray-700 font-semibold"
          onClick={() => setMostrarCarrito(true)}
        >
          <FaShoppingCart className="inline mr-2" />
        </button>
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
    </div>
  );
}
