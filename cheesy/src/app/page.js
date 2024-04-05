'use client'

import Image from "next/image";
import { Montserrat, Open_Sans, Pacifico } from "next/font/google";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const Map = dynamic(() => import('./map'), {
  ssr: false,
});

const position = { lng: -66.169243, lat: -17.380831 };


const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weights: [700] 
});

const opensans = Open_Sans({
  subsets: ['latin'],
  weights: [400, 700]
});



export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="overlay"></div>
        <div className="header-content">
          <div className={montserrat.className}>
            <h1 className="header-title">¡Descubre el auténtico sabor de la alegría en Cheesy Joy!</h1>
          </div>
          <button className="contact-button" onClick={() => window.location.href = 'https://wa.me/59177440815'}>Contáctanos</button>

        </div>
      </div>

      <section id="contactos" className="contact-section">
      <div className={opensans.className}>
          <h1 className="section-title">Contactos & Ubicación</h1>
        </div>
        <div className="contact-container">
          <div className="contact-info-container">
            <div className={montserrat.className}>
              <h2 className="contact-title">¡Realiza tu pedido!</h2>
            </div>
            <div className="icon-container">
              <Image src="/icons/WhatsApp.png" alt="WhatsApp Logo" width={40} height={40} />
              <div className={opensans.className}>
              <p>+591 77440815</p>
            </div>
            </div>
           

            <br></br>

            <div className={montserrat.className}>
              <h2 className="contact-title">¡Siguenos en nuestras redes sociales!</h2>
            </div>

            <div className="icon-container">
              <Image src="/icons/Instagram.png" alt="Instagram Logo" width={40} height={40} />
              <div className={opensans.className}>
                <p>cheesyjoypizzeria</p>
              </div>
            </div>
           

            <div className="icon-container">
              <Image src="/icons/Facebook.png" alt="Facebook Logo" width={40} height={40} />
              <div className={opensans.className}>
                <p>Cheesy Joy</p>
              </div>
            </div>
            
            <div className="icon-container">
              <Image src="/icons/TikTok.png" alt="TikTok Logo" width={40} height={40} />
              <div className={opensans.className}>
                <p>cheesyjoy.pizzeria</p>
              </div>
            </div>
          </div>
          <div className="map-frame-container">
            <Map />
          </div>
        </div>
      </section>


      <section className="our-pizzas">
        <div className={opensans.className}>
            <h1 className="section-title">Nuestras Pizzas</h1>
        </div>
          <br></br>
        <div className="menu-image">
        </div>
      </section>

      <section id="promociones" className="our-promotions">
        <div className={opensans.className}>
          <h1 className="section-title">Promociones</h1>
        </div>
        <div className="promotion-images-container">
          <div className="promotion-image">
            <Image src="/imgs/combos1.png" alt="Promotion 1" width={400} height={300} />
          </div>
          <div className="promotion-image">
            <Image src="/imgs/combos2.png" alt="Promotion 2" width={700} height={600} />
          </div>
        </div>
      </section>

      <section id="nosotros" className="about-us">
          
        <div className="about-container">
        
          <div className="about-text">
            <div className={opensans.className}>
              <h1 className="section-title">Sobre Nosotros</h1>
            </div>
            <div className={opensans.className}>
            <p>Chee'syJoy, donde la felicidad se mezcla con los sabores más deliciosos a los precios más economicos!</p>
            <br></br>
            <p>Nuestras pizzas son hechas con masa madre y horneadas al momento, ofreciendo un sabor inigualable.</p>
            <br></br>
            <p>Nos comprometemos con la calidad, frescura y satisfacción del cliente.</p>
            <br></br>
            <p>¡Descubre nuestras ofertas irresistibles y únete a la experiencia Chee’syJoy hoy mismo!</p>
            </div>
          </div>
          <div className="about-video">
            <video controls width="400" height="300">
              <source src="/imgs/cheesyjoyvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ backgroundColor: '#FEC904' }}>
        <div className="footer-container">
          {/* First section */}
          <div className="footer-section" >
            <div className={opensans.className}>
              Av. Carlos Medinacelli entre Av. Casto Rojas y Parque Demterio Canelas
              <br></br>
              +591 77440815
            </div>
          
          </div>

          {/* Middle section */}
          <div className="footer-section">
            <div className="footer-image">
              <Image src="/icons/cjLogoLtr.png" alt="Footer Image" width={180} height={100} />
              <br></br>
              <br></br>
              <div className={opensans.className} >
                <p className="image-credits" style={{fontWeight:"bold"}}>&copy; CheesyJoy 2024 by Vultines | All Rights reserved</p>
              </div>
            </div>
          </div>

          {/* Last section */}
          <div className="footer-section">
            <div className="social-icons">
              <Image src="/imgs/Facebook.png" alt="Facebook Logo" width={35} height={35} />
              <Image src="/imgs/Instagram.png" alt="Instagram Logo" width={35} height={35} />
              <Image src="/imgs/TikTok.png" alt="TikTok Logo" width={35} height={35} />
              <Image src="/imgs/WhatsApp.png" alt="WhatsApp Logo" width={35} height={35} />
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}
