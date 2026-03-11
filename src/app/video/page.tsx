export default function VideoPage() {
    return (
      <main className="min-h-screen bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
            Contractors
          </p>
  
          <h1 className="mt-4 text-3xl font-bold leading-tight text-black md:text-5xl">
            How We Use AI & Functional Website Design to Help Small Business
            Contractors like you GROW for just
            <span className="block text-[#fec30f]">$297/month</span>
          </h1>
  
          <p className="mt-6 text-lg font-medium text-black md:text-xl">
            Step 1: Watch this 6 minute video
            <span className="ml-2 font-bold uppercase">
              (You need to turn sound on)
            </span>
          </p>
  
          <div className="mt-8 aspect-video overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/xE1AjSksqFE"
              title="Contractor Boost Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    );
  }