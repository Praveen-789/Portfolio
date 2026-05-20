export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-purple-400 font-medium">Praveen Nagadesi</span>. Built with React &amp;
          Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
