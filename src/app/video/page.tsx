export default function VideoPage() {
    return (
      <main className="min-h-screen px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold">Watch Our Video</h1>
  
          <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
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