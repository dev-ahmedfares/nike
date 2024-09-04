import ProductPopularCard from "../components/ProductPopularCard"
import { products } from "../constants"

function PopularProducts() {
    return (
        <div className="max-container" id="products">
            <h2 className="font-palanquin text-clampSection font-bold mb-5">Our<span className="text-coral-red"> Popular</span> Products</h2>
            <p className="font-montserrat text-slate-gray lg:w-1/2 mb-20 max-sm:mb-14">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {products.map((product)=> <ProductPopularCard key={product.name} {...product}/>)}
            </div>
        </div>
    )
}

export default PopularProducts
