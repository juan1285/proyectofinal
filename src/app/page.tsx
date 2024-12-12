"use client";

import { useState } from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Importar el hook useRouter

export default function Home() {
  const [activeTab, setActiveTab] = useState<"default" | "iniciar-sesion" | "registrarse">("default");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Inicializar el router para redirigir

  const [users, setUsers] = useState<{ email: string; password: string }[]>([]);

  const handleTabClick = (tab: "default" | "iniciar-sesion" | "registrarse") => {
    setActiveTab(tab);
    setErrorMessage(""); // Limpiar cualquier mensaje de error al cambiar de tab
  };

  const handleCreateAccount = () => {
    if (newUserEmail && newUserPassword) {
      // Comprobación para ver si ya existe un usuario con ese correo
      const userExists = users.some(user => user.email === newUserEmail);
      if (userExists) {
        setErrorMessage("Ya existe una cuenta con este correo electrónico.");
        return;
      }

      setUsers((prevUsers) => [
        ...prevUsers,
        { email: newUserEmail, password: newUserPassword },
      ]);
      setNewUserEmail("");
      setNewUserPassword("");
      setActiveTab("iniciar-sesion");
    } else {
      setErrorMessage("Por favor, complete todos los campos.");
    }
  };

  const handleLogin = () => {
    // Redirigir sin validar las credenciales
    router.push("./shop"); // Redirigir a la página shop
  };
  

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: "url('https://www.housedigest.com/img/gallery/why-checking-home-depots-website-daily-can-help-fulfill-your-wish-list/l-intro-1656076572.jpg')",
      }}
    >
      {activeTab === "default" && (
        <div className="text-center space-y-6 p-8 rounded-lg shadow-lg border-4 border-white bg-white">
          <h1 className="text-4xl font-bold text-black font-poppins"> COMPANY-MAY</h1>
          
          <div className="space-x-4">
            <button
              onClick={() => handleTabClick("iniciar-sesion")}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => handleTabClick("registrarse")}
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      )}

      {activeTab === "iniciar-sesion" && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative border-4 border-white">
          <button
            onClick={() => handleTabClick("default")}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
          >
            ✖
          </button>
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
            Iniciar Sesión
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu correo"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu contraseña"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <div className="flex justify-between items-center text-sm">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600"
              >
                ¿Has olvidado tu contraseña?
              </a>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition"
            >
              Iniciar Sesión
            </button>
          </form>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm text-gray-500">
              <span className="bg-white px-2">o</span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => alert("Iniciar sesión con Google")}
              className="flex items-center justify-center w-full px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
            <button
              onClick={() => alert("Iniciar sesión con Facebook")}
              className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              <FaFacebook className="mr-2" /> Facebook
            </button>
            <button
              onClick={() => alert("Iniciar sesión con Apple")}
              className="flex items-center justify-center w-full px-4 py-2 bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
            >
              <FaApple className="mr-2" /> Apple
            </button>
          </div>
        </div>
      )}

      {activeTab === "registrarse" && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative border-4 border-white">
          <button
            onClick={() => handleTabClick("default")}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
          >
            ✖
          </button>
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
            Crear Cuenta
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="new-email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                id="new-email"
                type="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Tu correo"
              />
            </div>
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="new-password"
                type="password"
                value={newUserPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Tu contraseña"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
            <div className="flex items-center">
              <input
                id="accept-policy"
                type="checkbox"
                className="mr-2"
              />
              <label htmlFor="accept-policy" className="text-sm text-gray-600">
                Acepto las políticas de privacidad
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="accept-terms"
                type="checkbox"
                className="mr-2"
              />
              <label htmlFor="accept-terms" className="text-sm text-gray-600">
                Acepto los términos y condiciones
              </label>
            </div>
            <button
              type="button"
              onClick={handleCreateAccount}
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition"
            >
              Registrate
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
