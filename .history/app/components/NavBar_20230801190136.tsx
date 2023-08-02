import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 w-full bg-gray-100">
      <a href="/" className="text-gray-900">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </a>
      <ul className="flex space-x-4">
        <li>
          <Link href="/course" className="text-gray-900 hover:text-gray-700">
            Course
          </Link>
        </li>
        <li>
          <Link href="/provider" className="text-gray-900 hover:text-gray-700">
            Training Provider
          </Link>
        </li>
        <li>
          <Link href="/trainer" className="text-gray-900 hover:text-gray-700">
            Trainer
          </Link>
        </li>
        <li>
          <Link href="/student" className="text-gray-900 hover:text-gray-700">
            Student
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
