"use client";

export default function ProductTable() {
    const products = [
        { name: "Vanilla Bean", price: "$5.99", rating: "⭐⭐⭐⭐⭐", availability: "Always Available", popularity: "Top Seller" },
        { name: "Chocolate Fudge", price: "$6.49", rating: "⭐⭐⭐⭐⭐", availability: "Always Available", popularity: "Best Seller" },
        { name: "Strawberry Dream", price: "$6.29", rating: "⭐⭐⭐⭐", availability: "Seasonal", popularity: "Summer Favorite" },
        { name: "Matcha Magic", price: "$7.99", rating: "⭐⭐⭐⭐⭐", availability: "Limited Edition", popularity: "Premium Choice" },
        { name: "Caramel Swirl", price: "$6.79", rating: "⭐⭐⭐⭐⭐", availability: "Always Available", popularity: "New Flavor" 
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Product Comparison
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Compare our premium ice cream flavors
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-2 border-purple-200 rounded-lg shadow-lg">
                        <thead className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold uppercase">Flavor</th>
                                <th className="px-6 py-4 text-left text-sm font-bold uppercase">Price</th>
                                <th className="px-6 py-4 text-left text-sm font-bold uppercase">Rating</th>
                                <th className="px-6 py-4 text-left text-sm font-bold uppercase">Availability</th>
                                <th className="px-6 py-4 text-left text-sm font-bold uppercase">Popularity</th>
                            </tr>
                        </thead>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 hover:bg-pink-50 transition-colors"
                            >
                                <td className="px-6 py-4 font-semibold text-gray-800">{product.name}
                                    <td className="px-6 py-4 text-pink-600 font-bold">{product.price}</td>
                                    <td className="px-6 py-4">{product.rating}</td>
                                    <td className="px-6 py-4">{product.availability}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {product.popularity}
                                        </span>
                                    </td>
                            </tr>
                        ))}
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-600">
                                    🌟 All products made with 100% natural ingredients
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button onClick={handleOrder()} className="mt-8 mx-auto block px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
                    Order Now
                </button>
            </div>
        </section>
    );
}

