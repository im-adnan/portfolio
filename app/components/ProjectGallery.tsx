import Image from 'next/image'

const projects = [
  { name: 'Anemix', url: 'https://anemix.vercel.app/' },
  { name: 'Nbrly', url: 'https://www.nbrlyapp.com/' },
  { name: 'Snacc', url: 'https://snacc.fit/' },
  { name: 'Lexpal', url: 'https://app.lexpal.ai/' },
  { name: 'Athenagen.ai', url: 'https://www.athenagen.ai/' },
  { name: 'Trash To Cash', url: 'http://www.trashtocash.co.in/' },
  { name: 'AltFit', url: 'https://www.altfit.club/' },
  { name: 'Copper', url: 'https://copper-a594e.web.app/' },
  { name: 'Poolpay', url: 'https://poolpay.in/' },
  { name: 'VocalCode', url: 'https://vocalcode.co.in/' },
]

export default function ProjectGallery() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Project Snapshots</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <Image
              src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(project.name)}`}
              alt={`${project.name} snapshot`}
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">{project.name}</h4>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

