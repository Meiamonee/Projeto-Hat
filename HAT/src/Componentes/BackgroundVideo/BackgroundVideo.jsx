export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Vídeo */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video/videoplayback.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
    </div>
  )
}
