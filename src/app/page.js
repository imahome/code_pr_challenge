import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProductTable from "@/components/ProductTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* Updated Navigation with Icons */}
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Cool Your Senses
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Handcrafted frozen treats made with love. Premium ice creams and delicious lollies
          to satisfy your sweet cravings all year round.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            Explore Flavors
          </button>
          <button className="px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all">
            Find Us
          </button>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Signature Flavors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Flavor Cards */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🍓
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Strawberry Dream</h3>
            <p className="text-gray-600 text-center">
              Fresh strawberries swirled in creamy vanilla ice cream
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🌊
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Ocean Breeze</h3>
            <p className="text-gray-600 text-center">
              Refreshing blueberry with coconut milk base
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🍌
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Banana Split</h3>
            <p className="text-gray-600 text-center">
              Rich banana ice cream with chocolate chunks
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🍇
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Purple Passion</h3>
            <p className="text-gray-600 text-center">
              Exotic blackberry and lavender fusion
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🥭
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Tropical Mango</h3>
            <p className="text-gray-600 text-center">
              Sweet mango with a hint of passion fruit
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
              🍵
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Matcha Magic</h3>
            <p className="text-gray-600 text-center">
              Premium Japanese matcha with vanilla
            </p>
          </div>
        </div>
      </section>

      {/* Product Comparison Table */}
      <ProductTable />

      {/* Products Section */}
      <section id="products" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Our Product Range
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From classic scoops to frozen lollies, we have something for everyone
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Ice Cream Products */}
            <Link href="/products/premium-scoops">
              <div className="bg-linear-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍨</div>
                <h3 className="text-2xl font-bold mb-4">Premium Scoops</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Classic Vanilla Bean</li>
                  <li>• Rich Chocolate Fudge</li>
                  <li>• Caramel Swirl Delight</li>
                  <li>• Cookies & Cream</li>
                  <li>• Mint Chocolate Chip</li>
                </ul>
                <div className="text-pink-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Products →
                </div>
              </div>
            </Link>

            {/* Ice Lollies */}
            <Link href="/products/frozen-lollies">
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍡</div>
                <h3 className="text-2xl font-bold mb-4">Frozen Lollies</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Raspberry Rocket</li>
                  <li>• Lemon Lime Splash</li>
                  <li>• Triple Berry Blast</li>
                  <li>• Cola Ice Pop</li>
                  <li>• Watermelon Whip</li>
                </ul>
                <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Products →
                </div>
              </div>
            </Link>

            {/* Specials */}
            <Link href="/products/soft-serve">
              <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-200 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🍦</div>
                <h3 className="text-2xl font-bold mb-4">Soft Serve</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Classic Vanilla Swirl</li>
                  <li>• Chocolate Twist</li>
                  <li>• Vanilla-Choco Combo</li>
                  <li>• Rainbow Surprise</li>
                </ul>
                <div className="text-orange-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Products →
                </div>
              </div>
            </Link>

            {/* Specialty Items */}
            <Link href="/products/specialty-items">
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌟</div>
                <h3 className="text-2xl font-bold mb-4">Specialty Items</h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Ice Cream Sandwiches</li>
                  <li>• Ice Cream Cakes</li>
                  <li>• Gelato Selection</li>
                  <li>• Sorbet Collection</li>
                  <li>• Dipped Cones</li>
                </ul>
                <div className="text-purple-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Products →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Why Frosty Delights?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">100% Natural</h3>
              <p className="text-gray-600">
                Made with only the finest natural ingredients
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Handcrafted by passionate ice cream artisans
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🥛</div>
              <h3 className="text-xl font-bold mb-2">Locally Sourced</h3>
              <p className="text-gray-600">
                Supporting local farms and communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🍦 Frosty Delights</h3>
          <p className="text-gray-400 mb-6">
            Cool treats for warm hearts | Since 2024
          </p>

          {/* External Social Media Links */}
          <div className="flex justify-center gap-6 mb-8">
            {/* Error: Missing target and rel attributes */}
            <a href="https://instagram.com" className="text-3xl hover:text-pink-400 transition-colors">
              📷
            </a>

            {/* Error: Wrong attribute name (target_blank instead of target="_blank") */}
            <a href="https://facebook.com" target_blank className="text-3xl hover:text-blue-400 transition-colors">
              👥
            </a>

            {/* Error: Missing closing tag and href */}
            <a target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-sky-400 transition-colors">
              🐦
            </a>

            {/* Error: Rel as array instead of string */}
            <a href="https://youtube.com" target="_blank" rel={["noopener", "noreferrer"]} className="text-3xl hover:text-red-400 transition-colors">
              📺
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            © 2024 Frosty Delights. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
