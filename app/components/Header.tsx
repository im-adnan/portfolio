export default function Header() {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-4xl font-bold">Syed Mohd Adnan</h1>
          <h2 className="text-2xl text-gray-600">Flutter Application Developer</h2>
          <p className="mt-2">
            <strong>Location:</strong> 12/204, Bazaria, Jal Kal Sansthan,<br /> 
            Sahaswan, Uttar Pradesh, India - 243638
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => window.print()}
          >
            Print PDF
          </button>
          <p className="mt-2">Phone: <a href="tel:+919548277449" className="text-blue-500 hover:underline">+91 9548277449</a></p>
          <p>Email: <a href="mailto:sayedmuhammadadnan@outlook.com" className="text-blue-500 hover:underline">sayedmuhammadadnan@outlook.com</a></p>
          <p><a href="https://www.linkedin.com/in/im-adnan/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></p>
          <p><a href="https://github.com/im-adnan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a></p>
        </div>
      </div>
    </header>
  )
}

