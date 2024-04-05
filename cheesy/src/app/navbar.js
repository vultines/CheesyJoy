import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weights: [400, 700] 
});

const Navbar = () => {
    return (
        <main className={montserrat.className}>
            <nav className="navbar">
                    <div className="logo">
                        <Image src="/icons/logo.png" width={100} height={50}/>
                    </div>
                <div className="links">
                <a href="#contactos">Contactos</a>
                <a href="#promociones">Promociones</a>
                <a href="#nosotros">Nosotros</a>
                </div>
            </nav>
        </main>
      
    );
  };
  
  export default Navbar;
  