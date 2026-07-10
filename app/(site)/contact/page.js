export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24">

        <p className="font-mono text-xs text-[#B2491A] tracking-[0.2em] mb-4">
          CONTACT
        </p>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] mb-8">
          Contact Us
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none mb-10">
          <p>
            Koi sawal, suggestion, ya feedback hai? Bina kisi soch ke message karo - 
            main jald se jald reply karunga.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="mailto:tumharaemail@example.com" 
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors"
          >
            <span className="font-mono text-xs text-[#B2491A] tracking-wider w-16">EMAIL</span>

            <span className="text-[#1F2421] text-sm sm:text-base">yt87082@gmail.com</span>
          </a>

          <a 
            href="https://www.instagram.com/praveshearn_editz?igsh=aTd3Yno3aWxrdW4x" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors"
          >
            <span className="font-mono text-xs text-[#B2491A] tracking-wider w-16">SOCIAL</span>

            <span className="text-[#1F2421] text-sm sm:text-base">@praveshearn_editz</span>
          </a>

          <div 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors"
          >
            <span className="font-mono text-xs text-[#B2491A] tracking-wider w-16">PHONE</span>

            <span className="text-[#1F2421] text-sm sm:text-base">7070782166</span>
          </div>


          
        </div>

      </div>
    </div>
  )
}