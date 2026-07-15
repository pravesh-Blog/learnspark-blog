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
    siteName: 'LearnSpark',
    type: 'website',
  },
  verification:{
    google:'iwqfJZjznxyNv1yBll0zo0qXAc_qy6XAX2OL1rsnd78'
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