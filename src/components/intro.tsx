import Image from 'next/image';

export default function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Image src="/avatar.png" alt="avatar" width={60} height={60} />
        <div>Theme icon</div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Steven Dao</h1>
        <h2 className="text-2xl">
          Technical Lead/Full Stack Dev &&nbsp;
          <span className="relative">Ailurophilic&nbsp;<span className="hidden align-center absolute hover:visible">🐱</span></span>
          <span className="relative">Cynophilist<span className="hidden align-center absolute hover:visible">🐶</span></span>
        </h2>
        <h3 className="text-xl">I make some open-source packages, mostly in Vue, Meteor & Alfred.</h3>
      </div>
    </section>
  )
}
