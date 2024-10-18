import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Zurich Motor Insurance
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get your insurance quote instantly, manage your portfolio, and submit claims easily.
        </p>
      </header>

      <main className="mt-8 flex flex-col items-center space-y-4">
        <Link
          href="/login"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Login to Your Account
        </Link>

        <div className="mt-6">
          <Image
            src="/insurance.png" // Replace with an appropriate image for your app
            alt="Motor Insurance Logo"
            width={400}
            height={200}
          />
        </div>
      </main>

      <footer className="mt-10 text-center text-gray-500">
        <p>&copy; 2024 Zurich Motor Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
}