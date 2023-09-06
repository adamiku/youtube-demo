import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-blue-500">
      <Link className="px-2 py-1 bg-white text-blue-500 rounded-lg" href="/">
        Home
      </Link>
      <Link
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
        href="/todos"
      >
        Todos
      </Link>
    </header>
  );
};

export default Header;
