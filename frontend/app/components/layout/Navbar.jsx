import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-black">Insta</span>
          <span className="text-purple-600">Bazaar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>

          <Link href="/gallery" className="hover:text-purple-600">
            Gallery
          </Link>

          <Link href="/vendors" className="hover:text-purple-600">
            Vendors
          </Link>

          <Link href="/about" className="hover:text-purple-600">
            About
          </Link>

          <Link href="/reviews" className="hover:text-purple-600">
            Reviews
          </Link>
        </nav>

        <div className="flex gap-3">
          <Link href="/login" className="px-4 py-2 rounded-xl border">
            Login
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 rounded-xl bg-purple-600 text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
