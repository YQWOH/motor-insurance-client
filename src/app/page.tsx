import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <Header />

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

      <Footer />
    </div>
  );
}