import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header */}
      <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
        Established Foundations • Proactive Defense
      </p>

      <h2 className="text-4xl font-bold mb-6">
        ABOUT OUR LAW FIRM
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          <div className="border-l-4 border-gray-300 pl-4 text-gray-600 leading-relaxed mb-6">
            Boles Holmes White LLC is a full-service law firm specializing in
            transactional, litigation, government relations and white collar
            criminal defense. Our team represents both businesses and individuals
            throughout the U.S.
          </div>

          <p className="text-gray-600 mb-6">
            With offices in downtown Birmingham and Dothan our team represents
            clients on matters in states throughout the country.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border p-4 rounded-md">
              <h4 className="font-semibold text-sm mb-1">PRO HAC VICE</h4>
              <p className="text-xs text-gray-500">
                Multi-state representation throughout the country.
              </p>
            </div>

            <div className="border p-4 rounded-md">
              <h4 className="font-semibold text-sm mb-1">DUAL OFFICE REACH</h4>
              <p className="text-xs text-gray-500">
                Offices in Birmingham and Dothan.
              </p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Learn More →
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-4 justify-center">
          
          <div className="mt-10">
            <Image
              src="https://alabamaoutsidecounsel.com/wp-content/uploads/2025/02/thumbnail_IMG_1608-683x1024.jpg.webp"
              alt="lawyer 1"
              width={220}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div>
            <Image
              src="https://alabamaoutsidecounsel.com/wp-content/uploads/2025/02/thumbnail_IMG_1679.jpg.webp"
              alt="building"
              width={220}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="mt-10">
            <Image
              src="https://alabamaoutsidecounsel.com/wp-content/uploads/2025/02/thumbnail_IMG_1706.jpg.webp"
              alt="lawyer 2"
              width={220}
              height={300}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}