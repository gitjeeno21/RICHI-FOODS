// pages/Gallery.jsx
import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'products', 'facilities', 'events', 'team']

  const galleryItems = [
    { id: 1, category: 'products', title: 'Premium Collection', image: '🥤', color: 'from-orange-400 to-red-400' },
    { id: 2, category: 'products', title: 'Flavor Variety', image: '🍇', color: 'from-purple-400 to-pink-400' },
    { id: 3, category: 'facilities', title: 'Modern Facility', image: '🏭', color: 'from-blue-400 to-cyan-400' },
    { id: 4, category: 'facilities', title: 'Quality Control', image: '🔬', color: 'from-green-400 to-emerald-400' },
    { id: 5, category: 'events', title: 'Launch Event', image: '🎉', color: 'from-yellow-400 to-orange-400' },
    { id: 6, category: 'events', title: 'Community Drive', image: '🎊', color: 'from-pink-400 to-rose-400' },
    { id: 7, category: 'team', title: 'Our Team', image: '👥', color: 'from-indigo-400 to-purple-400' },
    { id: 8, category: 'team', title: 'Team Spirit', image: '🤝', color: 'from-teal-400 to-cyan-400' },
    { id: 9, category: 'products', title: 'Fresh Produce', image: '🍊', color: 'from-orange-400 to-yellow-400' },
    { id: 10, category: 'facilities', title: 'Packaging', image: '📦', color: 'from-gray-400 to-blue-400' },
    { id: 11, category: 'events', title: 'Award Ceremony', image: '🏆', color: 'from-yellow-400 to-orange-400' },
    { id: 12, category: 'team', title: 'Leadership', image: '👔', color: 'from-slate-400 to-gray-400' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 to-cyan-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-600">
              A glimpse into Richifood's world
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 bg-white border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both` }}
                >
                  <div className={`bg-gradient-to-br ${item.color} rounded-2xl h-64 flex items-center justify-center overflow-hidden relative`}>
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-300">
                      {item.image}
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-semibold text-center px-4">{item.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold">8+</div>
                <div className="text-lg opacity-90">Premium Flavors</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">14+</div>
                <div className="text-lg opacity-90">Years of Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">100K+</div>
                <div className="text-lg opacity-90">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-lg opacity-90">States Covered</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X className="w-8 h-8" />
            </button>
            <div className={`bg-gradient-to-br ${selectedImage.color} rounded-2xl p-16 flex items-center justify-center`}>
              <div className="text-9xl animate-bounce">{selectedImage.image}</div>
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}


      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
      `}</style>
    </div>
  )
}

export default Gallery