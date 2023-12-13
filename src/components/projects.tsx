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
    <section className="flex flex-wrap flex-col gap-4 md:flex-row md:gap-0">
      {projects.map((project) => (
        <a
          className="flex md:flex-[50%] gap-4"
          href={`${project.url}?ref=iamstevendao.com`}
          key={project.name}

        >
          <Image
            src={project.img}
            alt={project.name}
            width={70}
            height={70}
            priority
          />
          <div className="flex flex-col">
            <h1>{project.name}</h1>
          </div>
        </a>
      ))}
      <div className="flex md:flex-[50%]">
        View more at <a href="https://github.com/iamstevendao?ref=iamstevendao.com">github/iamstevendao</a>
      </div>
    </section >
  )
}