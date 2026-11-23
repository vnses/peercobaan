import Link from "next/link";

export default function TangerangPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <Link href="/" className="text-sm underline">
        ← Kembali ke Halaman Utama
      </Link>
      <h1 className="mt-4 text-3xl font-bold">
        Sewa Excavator Tangerang
      </h1>
      <p className="mt-2">
        Layanan sewa excavator untuk proyek di wilayah Tangerang dan sekitarnya.
      </p>
    </main>
  );
}
