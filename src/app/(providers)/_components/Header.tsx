import Link from "next/link";

function Header() {
  return (
    <header className="border-b bg-yellow-50 border-yellow-200 h-14 px-4 flex items-center">
      <strong className="text-lg">
        <Link href="/">책 서비스</Link>
      </strong>

      <nav className="ml-4 text-sm">
        <ul>
          <li>
            <Link href="/books">책 목록 페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
