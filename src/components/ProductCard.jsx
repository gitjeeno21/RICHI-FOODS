import { memo } from 'react'
import { motion } from 'framer-motion'

const ProductCard = memo(function ProductCard({ name, category, img, color, gradient, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative flex flex-col items-center text-center cursor-pointer"
    >
      {/* Gradient Background Card */}
      <div 
        className={`relative mb-4 h-80 md:h-96 w-full max-w-sm rounded-3xl flex items-center justify-center overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br`}
        style={{
          backgroundImage: gradient ? `linear-gradient(135deg, ${gradient})` : undefined,
          backgroundColor: color,
        }}
      >
        {/* Decorative gradient overlay for depth */}
        <div className="absolute inset-0 opacity-20 mix-blend-multiply" />
        
        {/* Product Image */}
        <div className="relative z-10 h-full w-full flex items-center justify-center p-8">
          {img ? (
            <img 
              src={img} 
              alt={name}
              className="h-full w-auto object-contain drop-shadow-2xl group-hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)] transition-all duration-300 transform group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <div className="text-8xl">🍹</div>
          )}
        </div>
      </div>

      {/* Product Name */}
      <h3 
        className="font-black text-lg md:text-xl text-[#7A4A2A] group-hover:text-[#F97316] transition-colors duration-300 mt-3" 
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {name}
      </h3>
      
      {/* Category Badge */}
      {category && (
        <p className="text-xs font-semibold text-[#F97316]/70 mt-1 uppercase tracking-widest">
          {category}
        </p>
      )}
    </motion.div>
  )
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if these props change
  return (
    prevProps.name === nextProps.name &&
    prevProps.category === nextProps.category &&
    prevProps.img === nextProps.img &&
    prevProps.gradient === nextProps.gradient &&
    prevProps.index === nextProps.index
  )
})

export default ProductCard
