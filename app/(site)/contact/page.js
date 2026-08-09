export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-24">

        <p className="font-mono text-xs text-[#2C5F4F] tracking-[0.2em] mb-4 dark:text-[#7FB8A0]">
          CONTACT
        </p>

        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F2421] mb-8 dark:text-[#F5F5F5]">
          Contact Us
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none mb-10 dark:text-[#B5B5B5]">
          <p>
            Koi sawal, suggestion, ya feedback hai? Bina kisi soch ke message karo - 
            main jald se jald reply karunga.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="yt87082@gmail.com" 
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors dark:bg-[#222222] dark:border-[#333333] dark:hover:border-[#7FB8A0]"
          >
            <span className="font-mono text-xs text-[#2C5F4F] dark:text-[#7FB8A0] tracking-wider w-16">EMAIL</span>

            <span className="text-[#1F2421] text-sm sm:text-base dark:text-[#B5B5B5]">yt87082@gmail.com</span>
          </a>

          <a 
            href="https://www.instagram.com/pravesh_editz.ai?igsh=aTd3Yno3aWxrdW4x" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors dark:bg-[#222222] dark:border-[#333333] dark:hover:border-[#7FB8A0]"
          >
            <span className="font-mono text-xs dark:text-[#7FB8A0] text-[#2C5F4F] tracking-wider w-16">Instagram</span>

            <span className="text-[#1F2421] text-sm sm:text-base dark:text-[#B5B5B5]">@pravesh_editz.ai</span>
          </a>

          <a 
            href="https://youtube.com/@pravesh.editz4u?si=nHOB0H-qY-KmyPDx" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors
            dark:bg-[#222222] dark:border-[#333333] dark:hover:border-[#7FB8A0]"
          >
            <span className="font-mono text-xs dark:text-[#7FB8A0] text-[#2C5F4F] tracking-wider w-16">YouTube</span>

            <span className="text-[#1F2421] text-sm sm:text-base dark:text-[#B5B5B5]">
                 @pravesh.Editz4u </span>
          </a>

          <div 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-[#E3DFD4] rounded-sm p-5 hover:border-[#2C5F4F] transition-colors dark:bg-[#222222] dark:border-[#333333] dark:hover:border-[#7FB8A0]"
          >
            <span className="font-mono text-xs dark:text-[#7FB8A0] text-[#2C5F4F] tracking-wider w-16">PHONE</span>

            <span className="text-[#1F2421] text-sm sm:text-base dark:text-[#B5B5B5]">+917909058430</span>
          </div>


          
        </div>

      </div>
    </div>
  )
}