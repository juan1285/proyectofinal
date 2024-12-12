"use client"; // Asegúrate de colocar esto al principio del archivo
import { useState } from "react";
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from "react-icons/fa"; // Importación de íconos de Font Awesome
import Link from "next/link";
import { useRouter } from "next/navigation";

// Usuario simulado
const usuario = {
  nombre: "Juan Ángel Hernández Fonseca",
  email: "juannitro17@gmail.com",
};

export default function Ayuda() {
  const [menuDepartamentos, setMenuDepartamentos] = useState(false);
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
              <button
                className="text-gray-700 font-semibold"
                onClick={() => setMostrarCarrito(true)} // Alternar estado de carrito
              >
                <FaShoppingCart className="inline mr-2" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gray-100 p-4">
      
          <div className="relative">
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
{/* Contenido de la cuenta */}
<div className="p-6 flex">
  {/* Contenedor vertical para las tarjetas de la izquierda */}
  <div className="w-2/3 space-y-6">
    {/* Tarjeta Mis pedidos */}
    <a className="bg-white p-4 shadow-lg flex flex-col justify-start" style={{ width: '352.75px', height: '62.3px' }}>
      <div className="flex items-center space-x-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="#f96302">
      <path d="M13.263,13.241l2.523-1.262,2.523,1.262V7.493H13.263ZM9.842,21.708V19.044h5.944v2.664ZM5.3,26.25v-21h21v21ZM7.515,7.493v0Zm0,16.542H24.057V7.493H20.44v9.14l-4.654-2.3-4.654,2.3V7.493H7.515Z" transform="translate(-5.3 -5.25)" />
    </svg>
      <p className="font-medium text-xl">Mis pedidos</p>
   
      </div>
      <p className="text-gray-600">Da seguimiento a tus órdenes realizadas</p>
    </a>

    {/* Tarjeta Mis direcciones */}
    <a className="bg-white p-4 shadow-lg flex flex-col justify-start" style={{ width: '352.75px', height: '62.3px' }}>
      <div className="flex items-center space-x-3">
        {/* Icono de ubicación (pin) */}
    <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#F96302">
      <path d="M3.83333 19.2917H7.33333V12.2917H14.3333V19.2917H17.8333V8.79167L10.8333 3.54167L3.83333 8.79167V19.2917ZM1.5 21.625V7.625L10.8333 0.625L20.1667 7.625V21.625H12V14.625H9.66667V21.625H1.5Z" />
    </svg>
        <p className="font-medium text-xl">Mis direcciones</p>
      </div>
      <p className="text-gray-600">Crea y administra tus direcciones</p>
    </a>

    {/* Tarjeta Mis métodos de pago */}
    <a  className="bg-white p-4 shadow-lg flex flex-col justify-start" style={{ width: '352.75px', height: '80.3px' }}>
      <div className="flex items-center space-x-3">
        {/* Icono de tarjeta de crédito */}

    <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#F96302">
      <path d="M0.715912 18.1V0.5H21.7159V18.1H0.715912ZM2.81591 4.9H19.6159V2.7H2.81591V4.9ZM15.1797 11.5825L19.6159 7.6775V7.1H2.81591V8.4475L15.1797 11.5825Z" />
    </svg>
        <p className="font-medium text-xl">Mis métodos de pago</p>
      </div>
      <p className="text-gray-600">Guarda y administra tus métodos de pago</p>
    </a>

    {/* Tarjeta Mis perfiles de compra */}
    <a  className="bg-white p-4 shadow-lg flex flex-col justify-start" style={{ width: '352.75px', height: '62.3px' }}>
      <div className="flex items-center space-x-3">
        {/* Icono de usuario */}
    <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#F96302">
      <path d="M11.9567 8.79932L10.5364 7.37903L12.1342 5.75584H7.89872V3.72686H12.1342L10.511 2.10367L11.9567 0.68338L16.0147 4.74135L11.9567 8.79932ZM6.88423 20.9732C6.32626 20.9732 5.8486 20.7746 5.45126 20.3772C5.05391 19.9799 4.85524 19.5022 4.85524 18.9442C4.85524 18.3863 5.05391 17.9086 5.45126 17.5113C5.8486 17.1139 6.32626 16.9153 6.88423 16.9153C7.4422 16.9153 7.91986 17.1139 8.3172 17.5113C8.71454 17.9086 8.91321 18.3863 8.91321 18.9442C8.91321 19.5022 8.71454 19.9799 8.3172 20.3772C7.91986 20.7746 7.4422 20.9732 6.88423 20.9732ZM17.0292 20.9732C16.4712 20.9732 15.9935 20.7746 15.5962 20.3772C15.1988 19.9799 15.0002 19.5022 15.0002 18.9442C15.0002 18.3863 15.1988 17.9086 15.5962 17.5113C15.9935 17.1139 16.4712 16.9153 17.0292 16.9153C17.5871 16.9153 18.0648 17.1139 18.4621 17.5113C18.8595 17.9086 19.0581 18.3863 19.0581 18.9442C19.0581 19.5022 18.8595 19.9799 18.4621 20.3772C18.0648 20.7746 17.5871 20.9732 17.0292 20.9732ZM0.797272 2.71237V0.68338H4.11974L8.43133 9.81381H15.5328L19.4893 2.71237H21.7973L16.7502 11.8428H8.00017L6.88423 13.8718H19.0581V15.9008H3.46032L6.47843 10.4225L2.82626 2.71237H0.797272Z" />
    </svg>
    
        <p className="font-medium text-xl">Mis perfiles de compra</p>
      </div>
      <p className="text-gray-600">Crea perfiles para comprar más rápido</p>
    </a>

    {/* Tarjeta Mis listas */}
    <a  className="bg-white p-4 shadow-lg flex flex-col justify-start" style={{ width: '352.75px', height: '62.3px' }}>
      <div className="flex items-center space-x-3">
        {/* Icono de lista */}
        <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#F96302">
      <path d="M10.5 20.2675L8.9775 18.9025C7.21 17.31 5.74875 15.9362 4.59375 14.7812C3.43875 13.6262 2.52 12.5894 1.8375 11.6706C1.155 10.7519 0.678125 9.9075 0.406875 9.1375C0.135625 8.3675 0 7.58 0 6.775C0 5.13 0.55125 3.75625 1.65375 2.65375C2.75625 1.55125 4.13 1 5.775 1C6.685 1 7.55125 1.1925 8.37375 1.5775C9.19625 1.9625 9.905 2.505 10.5 3.205C11.095 2.505 11.8037 1.9625 12.6262 1.5775C13.4487 1.1925 14.315 1 15.225 1C16.87 1 18.2437 1.55125 19.3462 2.65375C20.4487 3.75625 21 5.13 21 6.775C21 7.58 20.8644 8.3675 20.5931 9.1375C20.3219 9.9075 19.845 10.7519 19.1625 11.6706C18.48 12.5894 17.5612 13.6262 16.4062 14.7812C15.2512 15.9362 13.79 17.31 12.0225 18.9025L10.5 20.2675ZM10.5 17.4325C12.18 15.9275 13.5625 14.6369 14.6475 13.5606C15.7325 12.4844 16.59 11.5481 17.22 10.7519C17.85 9.95562 18.2875 9.24687 18.5325 8.62562C18.7775 8.00437 18.9 7.3875 18.9 6.775C18.9 5.725 18.55 4.85 17.85 4.15C17.15 3.45 16.275 3.1 15.225 3.1C14.4025 3.1 13.6412 3.33187 12.9412 3.79562C12.2412 4.25937 11.76 4.85 11.4975 5.5675H9.5025C9.24 4.85 8.75875 4.25937 8.05875 3.79562C7.35875 3.33187 6.5975 3.1 5.775 3.1C4.725 3.1 3.85 3.45 3.15 4.15C2.45 4.85 2.1 5.725 2.1 6.775C2.1 7.3875 2.2225 8.00437 2.4675 8.62562C2.7125 9.24687 3.15 9.95562 3.78 10.7519C4.41 11.5481 5.2675 12.4844 6.3525 13.5606C7.4375 14.6369 8.82 15.9275 10.5 17.4325Z" />
    </svg>
        <p className="font-medium text-xl">Mis listas</p>
      </div>
      <p className="text-gray-600">Crea y administra tus listas guardadas</p>
      
    </a>
  </div>
<div className="flex space-x-6"> {/* Contenedor flex para alinear las tarjetas */}
  {/* Información personal 1 */}
  <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '514.13px', height: '200px' }}>
    <div className="flex justify-between items-start">
    <p className="MuiTypography-root sc-hsWlPz dpkszC MuiTypography-body1">Información personal</p>
    <p className="MuiTypography-root sc-hsWlPz dpkszC MuiTypography-body1">Editar</p>
    </div>
    {/* Línea debajo de Información personal y Editar */}
    <div className="border-b-1 border-gray-300 my-4"></div>
    <div className="text-gray-600 mt-4">
    <p className="MuiTypography-root sc-hsWlPz juosUc MuiTypography-body1">juan angel hernandez fonseca</p>
    <p className="MuiTypography-root sc-hsWlPz juosUc MuiTypography-body1">juannitro17@gmail.com</p>
    <p className="MuiTypography-root sc-hsWlPz juosUc MuiTypography-body1">agrega un telefono</p>
      <div className="border-b-2 border-gray-300 my-4"></div>
      {/* Cambiar contraseña con margen ajustado */}
      <p className="MuiTypography-root sc-hsWlPz juosUc MuiTypography-body1">cambiar contraseña</p> {/* Ajusta el mt-2 según necesites */}
    </div>
  </div>
{/* Información personal 2 */}
<div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '514.13px', height: '200px' }}>
    <div className="flex justify-between items-start">
    <p className="MuiTypography-root sc-hsWlPz dpkszC MuiTypography-body1">Dirección de la cuenta</p>
    </div>
    {/* Línea debajo de Información personal y Editar */}
    <div className="border-b-1 border-gray-300 my-4"></div>
    <div className="text-gray-600 mt-4 text-center">
  <div className="border-b-2 border-gray-300 my-4"></div>
  <p className="MuiTypography-root sc-hsWlPz juosUc agregar-direccion-principal MuiTypography-body1 text-center">
    <svg aria-hidden="true" viewBox="1 1 22 22" data-testid="AddLocationAltIcon" style={{ width: '16px', height: '16px', marginRight: '5px' }}>
    </svg>
    Agrega una dirección
  </p>
</div>
</div>
</div>

      {/* Cajón del carrito */}
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
</div>
  );
}
