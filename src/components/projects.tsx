'use client'

import { useState, useEffect, useContext, createContext } from 'react';
import Image from 'next/image'

type RepoStat = {
  repo: string;
  stats: {
    nStars: number;
    nDownloads: number;
  };
};

const RepoStatsContext = createContext<RepoStat[]>([]);

function useRepoStats() {
  const repoStats = useContext(RepoStatsContext);
  return repoStats;
}

function ProjectStats({ repo }: { repo: string }) {
  const repoStats = useRepoStats();
  const repoStat = repoStats.find((stats) => stats.repo === repo);

  if (!repoStat || !repoStat.stats) {
    return null;
  }

  const { nStars, nDownloads } = repoStat.stats;

  return (
    <div className="text-sm">
      {nStars > 0 && <span>&#9733; {nStars}</span>}
      {nDownloads > 0 && <span>&nbsp;&#183;&nbsp;&#11015; {nDownloads.toLocaleString()} monthly</span>}
    </div>
  );
}

export default function Projects() {
  const [repoStats, setRepoStats] = useState([
    { repo: 'iamstevendao/vue-tel-input', stats: { nStars: 754, nDownloads: 342075 } },
    { repo: 'iamstevendao/vue-suggestion', stats : { nStars: 66, nDownloads: 5313 } },
    { repo: 'edvisor-io/meteor-google-cloud', stats: { nStars: 30, nDownloads: 25 } },
  ]);

  useEffect(() => {
    const fetchRepoStats = async () => {
      const repoStatsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/repo-stats`);
      const { repoStats } = await repoStatsResponse.json();
      setRepoStats(repoStats);
    };

    fetchRepoStats();
  }, []);

  const projects = [
    {
      name: 'vue-tel-input',
      url: 'https://iamstevendao.com/vue-tel-input/',
      description: 'International Telephone Input with Vue',
      img: '/vue-tel-input.png',
      repo: 'iamstevendao/vue-tel-input',
    },
    {
      name: 'vue-suggestion',
      url: 'https://iamstevendao.com/vue-suggestion/',
      description: 'Suggestion List Input with Vue',
      img: '/vue-suggestion.png',
      repo: 'iamstevendao/vue-suggestion',
    },
    {
      name: 'meteor-google-cloud',
      url: 'https://github.com/edvisor-io/meteor-google-cloud',
      img: '/meteor-google-cloud.png',
      description: 'Automate Meteor deployments on Google Cloud App Engine Flexible',
      repo: 'edvisor-io/meteor-google-cloud',
    },
    {
      name: 'alfred-open-with-vscode',
      url: 'https://github.com/iamstevendao/alfred-open-with-vscode',
      img: '/alfred-open-with-vscode.png',
      description: 'Alfred workflow for opening a folder with VS Code',
    },
    {
      name: 'alfred-open-with-sublime-merge',
      url: 'https://github.com/iamstevendao/alfred-open-with-sublime-merge',
      img: '/alfred-open-with-sublime-merge.png',
      description: 'Alfred workflow for opening a git folder with Sublime Merge',
    }
  ];

  return (
    <RepoStatsContext.Provider value={repoStats}>
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
              {!!project.repo && <ProjectStats repo={project.repo} />}
            </div>
          </a>
        ))}
        <div className="">
          View more at&nbsp;<a className="text-sky-500" href="https://github.com/iamstevendao?ref=iamstevendao.com">github/iamstevendao</a>
        </div>
      </section >
    </RepoStatsContext.Provider>
  )
}
