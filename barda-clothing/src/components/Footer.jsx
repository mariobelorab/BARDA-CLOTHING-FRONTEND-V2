export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© 2026 BARDA CLOTHING - Todos los derechos reservados</p>
        <p className="text-gray-500 text-sm mt-2">📧 contacto@bardaclothing.com | 📞 +54 11 1234-5678</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
}