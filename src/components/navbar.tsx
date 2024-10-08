const Navbar = () => {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Home", "/dashboard"],
        ["Team", "/team"],
        ["Projects", "/projects"],
        ["Reports", "/reports"],
      ].map(([title, url]) => (
        <a
          href={url}
          className="rounded-lg px-3 py-2 font-medium text-slate-100"
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
