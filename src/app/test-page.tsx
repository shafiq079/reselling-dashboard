export default function TestPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">CSS Test Page</h1>
      
      {/* Test basic Tailwind classes */}
      <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
        This should have red background and white text
      </div>
      
      {/* Test custom classes */}
      <div className="glass-effect p-4 rounded-lg mb-4">
        This should have glass effect
      </div>
      
      <div className="card-enhanced p-4 mb-4">
        This should be an enhanced card
      </div>
      
      <div className="gradient-primary text-white p-4 rounded-lg">
        This should have gradient background
      </div>
      
      <style jsx>{`
        .test-style {
          background: linear-gradient(135deg, #8257e6 0%, #3ca0dc 100%);
          color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-top: 1rem;
        }
      `}</style>
      
      <div className="test-style">
        This should have inline gradient style
      </div>
    </div>
  )
}