import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

//meta tags
export const metadata = {
  title: {
    default: 'LearnSpark',
    template: '%s | LearnSpark'
  },
  description: 'AI, Learning aur Career Growth ke practical guides.',
  openGraph: {
    title: 'LearnSpark',
    description: 'AI, Learning aur Career Growth ke practical guides.',
    type: 'website',
  },
}

export default function SiteLayout({children}){
    return(
        <>
         <Navbar/>
         {children}
         <Footer/>
        </>
    );
}