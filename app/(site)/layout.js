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
    description: 'Learn AI & Tech, Spark Your Career',
    type: 'website',
  },
  verification:{
    google:'qgiYLH0jiurDtCZbPLLZbtN-a0UnqYM801ryKtfTAdc'
  }
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