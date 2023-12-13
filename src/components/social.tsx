export default function Social() {
  return (
    <section className="flex gap-4 flex-col md:flex-row">
      <div className="flex flex-col gap-1 align-center">
        <a className="text-center bg-gray-700 py-3 px-4 rounded-xl" href="mailto:hello@iamstevendao.com">
          Say&nbsp;<span className="text-amber-100">hello@iamstevendao.com</span>
        </a>
        <span className="text-center">Want to collaborate? Let's talk!</span>
      </div>
      <a className="text-sky-500 md:py-3" href="https://github.com/sponsors/iamstevendao?ref=iamstevendao.com"
      >Become a sponsor</a>
      <a className="text-sky-500 md:py-3" href="https://github.com/iamstevendao?ref=iamstevendao.com"
      >View my projects
      </a>
    </section>
  )
}
