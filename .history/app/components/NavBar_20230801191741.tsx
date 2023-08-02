import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-10 w-full text-[.7rem] bg-gray-100">
      <a href="/" className="text-gray-900">
        <img src="/seismic.png" alt="Logo" className="h-8 w-auto" />
      </a>
      <ul className="flex space-x-4">
        <li>
          <Link
            href="/course"
            className="text-gray-900 hover:text-gray-700 text-[.7rem]"
          >
            Course
          </Link>
        </li>
        <li>
          <Link
            href="/provider"
            className="text-gray-900 hover:text-gray-700 text-[.7rem]"
          >
            Training Provider
          </Link>
        </li>
        <li>
          <Link
            href="/trainer"
            className="text-gray-900 hover:text-gray-700 text-[.7rem]"
          >
            Trainer
          </Link>
        </li>
        <li>
          <Link
            href="/student"
            className="text-gray-900 hover:text-gray-700 text-[.7rem] font-bold"
          >
            Student
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
