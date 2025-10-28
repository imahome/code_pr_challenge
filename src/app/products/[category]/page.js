import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ImageSlider from "@/components/ImageSlider";

export async function generateStaticParams() {
    return Object.keys(products).map((category) => ({
        category: category,
    }));
}

export default async function ProductCategoryPage({ params }) {
    const { category } = await params;
    const categoryData = products[category];

    if (!categoryData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-purple-50 to-blue-100">
                <h1 className="text-4xl font-bold">Category not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-50 to-blue-100">
            {/* Header */}
            <header className="container mx-auto px-4 py-8">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-3xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
                    >
                        🍦 Frosty Delights
                    </Link>
                    <Link
                        href="/"
                        className="hover:text-pink-600 transition-colors text-gray-700"
                    >
                        ← Back to Home
                    </Link>
                </nav>
            </header>

            {/* Category Header */}
            <section className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {categoryData.title}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {categoryData.description}
                </p>
            </section>

            {/* Products Grid */}
            <section className="container mx-auto px-4 py-12 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {categoryData.products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all"
                        >
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 text-lg">{product.description}</p>
                                <div className="text-3xl font-bold text-pink-600 mt-4">
                                    {product.price}
                                </div>
                            </div>

                            {/* Image Slider */}
                            <div className="mb-8">
                                <ImageSlider images={product.images} />
                            </div>

                            {/* Ingredients Section */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🥄</span> Ingredients
                                </h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {product.ingredients.map((ingredient, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-gray-700"
                                        >
                                            <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                            {ingredient}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Nutrition Info */}
                            <div className="bg-linear-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <span>📊</span> Nutrition Information
                                </h3>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-600">Calories:</span>
                                        <div className="font-semibold">{product.nutrition.calories}</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Fat:</span>
                                        <div className="font-semibold">{product.nutrition.fat}</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Carbs:</span>
                                        <div className="font-semibold">{product.nutrition.carbs}</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Protein:</span>
                                        <div className="font-semibold">{product.nutrition.protein}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="w-full mt-6 px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl text-lg">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <Link href="/" className="text-xl font-bold mb-2 block">
                        🍦 Frosty Delights
                    </Link>
                    <p className="text-gray-400 text-sm">© 2024 All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

