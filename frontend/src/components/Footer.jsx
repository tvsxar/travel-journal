function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 px-6 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-bold text-lg text-gray-200">
            Journ
            <span className="text-cyan-500 drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">
              ee
            </span>
          </h3>

          <p className="text-gray-500 text-xs mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/tvsxar"
            className="hover:text-cyan-500 transition-all hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/poiatsyka/"
            className="hover:text-cyan-500 transition-all hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
