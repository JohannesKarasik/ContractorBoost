export default function VideoPage() {
    return (
      <main className="min-h-screen px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold">Watch Our Video</h1>
  
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              controls
              className="w-full"
              src="/videos/demo.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    );
  }