import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      name: 'vue-tel-input',
      url: 'https://iamstevendao.github.io/vue-tel-input',
      description: 'International Telephone Input with Vue',
      img: '/vue-tel-input.png',
      repo: 'vue-tel-input',
      user: 'iamstevendao',
      nStars: 0,
      nDownloads: 1,
    },
    {
      name: 'vue-suggestion',
      url: 'https://iamstevendao.github.io/vue-suggestion/',
      description: 'Suggestion List Input with Vue',
      img: '/vue-suggestion.png',
      repo: 'vue-suggestion',
      user: 'iamstevendao',
      nStars: 0,
      nDownloads: 1,
    },
    {
      name: 'meteor-google-cloud',
      url: 'https://github.com/edvisor-io/meteor-google-cloud',
      img: '/meteor-google-cloud.png',
      description: 'Automate Meteor deployments on Google Cloud App Engine Flexible',
      repo: 'meteor-google-cloud',
      user: 'edvisor-io',
      nStars: 0,
      nDownloads: 1,
    },
    {
      name: 'alfred-open-with-vscode',
      url: 'https://github.com/iamstevendao/alfred-open-with-vscode',
      img: '/alfred-open-with-vscode.png',
      description: 'Alfred workflow for opening a folder with VS Code',
      repo: 'alfred-open-with-vscode',
      user: 'iamstevendao',
      nStars: 0,
    },
    {
      name: 'alfred-open-with-sublime-merge',
      url: 'https://github.com/iamstevendao/alfred-open-with-sublime-merge',
      img: '/alfred-open-with-sublime-merge.png',
      description: 'Alfred workflow for opening a git folder with Sublime Merge',
    },
  ];

  return (
    <section className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <a
          className="flex gap-8"
          href={`${project.url}?ref=iamstevendao.com`}
          key={project.name}
        >
          <div className="min-w-[70px]">
            <Image
              src={project.img}
              alt={project.name}
              width={70}
              height={70}
              priority
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium">{project.name}</h2>
            <span className="text-gray-400">{project.description}</span>
          </div>
        </a>
      ))}
      <div className="">
        View more at&nbsp;<a className="text-sky-500" href="https://github.com/iamstevendao?ref=iamstevendao.com">github/iamstevendao</a>
      </div>
    </section >
  )
}
