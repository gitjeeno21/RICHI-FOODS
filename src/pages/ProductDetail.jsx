import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiHeart, FiShare2, FiStar, FiCheck } from 'react-icons/fi'

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('500ml')

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: 'Cilo Grape',
    flavor: 'grape',
    tagline: 'TASTY REFRESHING CILO GRAPE',
    description: 'Experience the rich, sweet flavor of perfectly ripened grapes in every sip. Our grape juice is made from select grapes, carefully processed to preserve natural vitamins and antioxidants.',
    price: 3.99,
    sizes: [
      { size: '250ml', price: 2.49 },
      { size: '500ml', price: 3.99 },
      { size: '1L', price: 6.99 }
    ],
    features: [
      '100% Natural Grape Juice',
      'No Added Sugar',
      'Rich in Antioxidants',
      'Vitamin C & K',
      'No Preservatives'
    ],
    nutrition: {
      calories: 120,
      carbs: 30,
      sugar: 28,
      protein: 1,
      vitaminC: '120%'
    },
    rating: 4.5,
    reviews: 128
  }

  const relatedProducts = [
    { id: 2, name: 'Cilo Apple Drink', flavor: 'apple', price: 3.49 },
    { id: 3, name: 'Cilo Mango Drink', flavor: 'mango', price: 4.29 },
    { id: 6, name: 'Cilo Orange Juice', flavor: 'orange', price: 3.79 }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-cilo-orange">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="text-gray-500 hover:text-cilo-orange">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-cilo-orange">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-gray-100 rounded-2xl p-8 mb-4">
              <img 
                src={`/images/${product.flavor}.png`} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="flex gap-4">
              {['250ml', '500ml', '1L'].map((size) => (
                <div key={size} className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src={`/images/${product.flavor}.png`} 
                    alt={`${product.name} ${size}`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 text-xl mb-4">{product.tagline}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                    ))}
                  </div>
                  <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FiHeart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <FiShare2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FiCheck className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(size.size)}
                    className={`px-6 py-3 rounded-lg border-2 ${selectedSize === size.size ? 'border-cilo-orange bg-cilo-orange-light' : 'border-gray-300'}`}
                  >
                    <div className="font-semibold">{size.size}</div>
                    <div className="text-cilo-orange font-bold">${size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-3">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-(--brand-orange) text-white font-semibold rounded-full transition-all duration-300 hover:bg-(--brand-orange-dark) hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                <FiShoppingCart className="w-5 h-5" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Nutrition Info */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Nutrition Facts (per serving)</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cilo-orange">{product.nutrition.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cilo-orange">{product.nutrition.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cilo-orange">{product.nutrition.sugar}g</div>
                  <div className="text-sm text-gray-600">Sugar</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cilo-orange">{product.nutrition.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cilo-orange">{product.nutrition.vitaminC}</div>
                  <div className="text-sm text-gray-600">Vitamin C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <div key={related.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-40 h-40 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img 
                    src={`/images/${related.flavor}.png`} 
                    alt={related.name}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{related.name}</h3>
                <div className="text-cilo-orange text-2xl font-bold mb-4">${related.price}</div>
                <Link 
                  to={`/product/${related.id}`}
                  className="btn-secondary inline-block w-full"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail