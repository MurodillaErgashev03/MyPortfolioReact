
import './App.scss';

function App() {



  return (
    <div className='portfolio'>
      <header className='header'>
        <div className="container header__container">

          <a class="active">
            <h1 class="header__title">Murodilla</h1>
          </a>
          <input className='header__input' type="checkbox" id='toggle' />
          <label className='navbar__toggle' htmlFor="toggle">
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </label>

          <ul class="header__list-group">
            <li class="header__item-list"><a href='#hero' class="header-menu">Home</a></li>
            <li class="header__item-list"><a href='#texnology' class="header-menu">My Tech Stack</a></li>
            <li class="header__item-list"><a href='#about' class="header-menu">About me</a></li>
            <li class="header__item-list"><a href='#layout' class="header-menu">Portfolio</a></li>
            <li class="header__item-list contact-li"><a href='#contact__section' class="contact">Contact</a></li>
          </ul>

        </div>

      </header>


      <section id='hero' className='hero'>
        <div className='container hero__container'>
          <div className='hero__block flex justify-between items-center'>
            <div>
              <h2 className='hero__text'>
                <span className='hero__span'>I</span> m
                <span className='hero__span'>  Frontent developer</span>
              </h2>
              <h1 className='hero__title '>
                <span className='hero-item__span'>E</span>
                <span className='hero-item__span'>r</span>
                <span className='hero-item__span'>g</span>
                <span className='hero-item__span'>a</span>
                <span className='hero-item__span'>s</span>
                <span className='hero-item__span'>h</span>
                <span className='hero-item__span'>e</span>
                <span className='hero-item__span'>v</span>
                <span className=' w-[25px]'></span>
                <span className='hero-item__span'>M</span>
                <span className='hero-item__span'>u</span>
                <span className='hero-item__span'>r</span>
                <span className='hero-item__span'>o</span>
                <span className='hero-item__span'>d</span>
                <span className='hero-item__span'>i</span>
                <span className='hero-item__span'>l</span>
                <span className='hero-item__span'>l</span>
                <span className='hero-item__span'>a</span>
              </h1>
              <h3 className='hero-item__text'>
                I create websites and web applications
              </h3>

              <div className='hero-link__block flex gap-[25px] mt-4'>
                <a className='hero__link' href="https://github.com/MurodillaErgashev03"><img className='w-[25px] h-[25px] ' src="./images/github.svg" alt="" /></a>
                <a className='hero__link linkkk' href="https://t.me/shavkatov1ch_03"><img className='w-[25px] h-[25px]' src="./images/telegram.svg" alt="" /></a>
                <a className='hero__link' href="https://www.instagram.com/shavkatov1ch_03/"><img className='w-[25px] h-[25px]' src="./images/instagram.svg" alt="" /></a>
                <a className='hero__link' href="mailto:ergashevmurodilla27@gmail.com"><img className='w-[25px] h-[25px]' src="./images/email.svg" alt="" /></a>
              </div>
              <div className='download'>
                <p className='download-text'>
                  Download my rezume
                </p>
              </div>

            </div>
            <img className='hero-big__img h-[200px] w-[200px] rounded-[50%]' src='./images/image.jpg' alt="" />
          </div>
        </div>
      </section>

      <section id='texnology' className='texnology'>
        <div className="container icon__container">
          <h2 className='texnology__title mb-[50px]'>
            Technologies I’ve been working with recently.
          </h2>
          <div className='icon__block'>
            <div class="tech-icon">
              <img className='icon-img' src="./images/html.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/css.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/js.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/sass.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/git.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/github1.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/react.svg" alt="" />
            </div>
            <div class="tech-icon">
              <img className='icon-img' src="./images/next.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='about'>
        <div className='container h-[70vh] flex items-center about__container'>
          <div className='about-left__block mt-[45px] w-[500px]'>
            <img className='frontend-img' src="./images/frontend.jpg" alt="" />
          </div>
          <div className='about-right__block w-[700px]'>
            <h2 className='text-[32px] text-blue-500 font-bold about-right__title'>
              About me :
            </h2>
            <p className='font-normal text-[21px]  about-right__text'  >
              I am a frontend developer. I completed Salvation Education's frontend course. I gained strong knowledge of HTML, Css, Sass, Javascript, Dom, React, Redux, Tailwind, Bootstrap while studying here.
              I have several portfolios. I am very interested in this field. I would like to have a lot of experience in this field and become a strong developer.
            </p>
          </div>
        </div>
      </section>

      <section id='layout' className='layout'>
        <div className="container">
          <h2 className='layout-title'>
            My portfolio
          </h2>
          <ul className='layout-list'>
            <li className='layout-item-list'>
              <a href="https://frolicking-marshmallow-dc19ae.netlify.app/">
                <img className='uzum-img' src="./images/uzum.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Uzum market.
                </h4>
                <p className='uzum__text'>
                  Created using Fake backend. HTML, Sass, Js and bootstrap were used to develop this layout.
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://frolicking-marshmallow-dc19ae.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/uzum.uz">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://classy-bienenstitch-8e3cb9.netlify.app/">
                <img className='uzum-img' src="./images/twitter.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Twitter.
                </h4>
                <p className='uzum__text'>

                  Created using Fake backend. HTML, Sass, React and Tailwind were used to develop this layout.                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://classy-bienenstitch-8e3cb9.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/twitter">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://roaring-horse-5fc1b4.netlify.app/">
                <img className='uzum-img' src="./images/books.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Bookshelter.
                </h4>
                <p className='uzum__text'>
                  Created using Fake backend. HTML, Sass, Js and bootstrap were used to develop this layout.  </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://roaring-horse-5fc1b4.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/imtihon_4oy">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://precious-lamington-efeb3a.netlify.app/">
                <img className='uzum-img' src="./images/3-oy_maket.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Movie Tv.
                </h4>
                <p className='uzum__text'>
                  Created using Fake backend. HTML, Sass, Js and bootstrap were used to develop this layout.
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://precious-lamington-efeb3a.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/maket">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://sparkling-pithivier-81d53d.netlify.app/">
                <img className='uzum-img' src="./images/country.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Countries.
                </h4>
                <p className='uzum__text'>
                  Created using Fake backend. HTML, Sass, Js and bootstrap were used to develop this layout.
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://sparkling-pithivier-81d53d.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/country_new">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://stellular-gumdrop-dab277.netlify.app/">
                <img className='uzum-img' src="./images/manito.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Monito.
                </h4>
                <p className='uzum__text '>
                  Built on Figma. HTML, Sass and responsive were used to develop this layout. A site for puppies and cats
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://stellular-gumdrop-dab277.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/imtihon-2oy">Github</a>
                </div>
              </div>
            </li>


            <li className='layout-item-list'>
              <a href="https://shimmering-kelpie-b1b5dd.netlify.app/">
                <img className='coffee-img ' src="./images/coffee.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Coffee.
                </h4>
                <p className='uzum__text'>
                  Built on Figma. HTML, Sass and responsive were used to develop this layout.
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://shimmering-kelpie-b1b5dd.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/dars_1page_qaytarish">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://flourishing-semifreddo-76b061.netlify.app/">
                <img className='uzum-img' src="./images/trafalgar.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Trafalgar.
                </h4>
                <p className='uzum__text'>
                  Built on Figma. HTML, Sass and responsive were used to develop this layout.
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://flourishing-semifreddo-76b061.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/trafalgar-react">Github</a>
                </div>
              </div>
            </li>

            <li className='layout-item-list'>
              <a href="https://bucolic-sunburst-84d5d8.netlify.app/">
                <img className='uzum-img' src="./images/1-oy_imtihon.png" alt="" />
              </a>

              <div className='p-[10px]'>
                <h4 className='uzum__title'>
                  Pixer.
                </h4>
                <p className='uzum__text '>
                  Built on Figma. HTML, Sass and responsive were used to develop this layout.
                </p>
                <div className='flex gap-[25px] mt-[25px]'>
                  <a className='netlify__link' href="https://bucolic-sunburst-84d5d8.netlify.app/">Netlify</a>
                  <a className='github__link' href="https://github.com/MurodillaErgashev03/1_oy_imtihon">Github</a>
                </div>
              </div>
            </li>


          </ul>
        </div>

      </section>

      <section id='contact__section' className='contact__section'>
        <div className='contaier contact-container '>
          <h2 className='contact-title'>Contact me</h2>
          <form className='contact-box'>
            <input className='name__input' type="text" placeholder='Name' />
            <input className='email__input' type="email" placeholder='Email' />
            <input className='text__input' type="text" placeholder='Message' />
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
      </section>

      <footer className='footer'>
        <div className="container footer__container">
          <div className='top__footer '>
            <ul className='top-list'>
              <li className='top-item__list'>
                <p className='top-item__title'>
                  +998 93 339 34 03
                </p>
                <p className='top-item__text'>
                  ergashevmurodila27@gmail.com
                </p>
              </li>
            </ul>
            <div className='footer__link__block flex gap-[20px]'>
              <a className='hero__link' href="https://github.com/MurodillaErgashev03"><img className='w-[25px] h-[25px] ' src="./images/github.svg" alt="" /></a>
              <a className='hero__link linkkk' href="https://t.me/shavkatov1ch_03"><img className='w-[25px] h-[25px]' src="./images/telegram.svg" alt="" /></a>
              <a className='hero__link' href="https://www.instagram.com/shavkatov1ch_03/"><img className='w-[25px] h-[25px]' src="./images/instagram.svg" alt="" /></a>
              <a className='hero__link' href="mailto:ergashevmurodilla27@gmail.com"><img className='w-[25px] h-[25px]' src="./images/email.svg" alt="" /></a>
            </div>
          </div>
          <div className='bottom__footer flex items-center justify-between'>
            <ul className='bottom__list flex gap-[20px] p-[20px]'>
              <li className='bottom-item__list'>
                <a className='footer__link' href="#home">Home</a>
              </li>
              <li className='bottom-item__list'>
                <a className='footer__link' href="#texnology">My Tech Stack</a>
              </li>
              <li className='bottom-item__list'>
                <a className='footer__link' href="#about">About me</a>
              </li>
              <li className='bottom-item__list'>
                <a className='footer__link' href="#layout">
                  Portfolio</a>
              </li>
            </ul>
            <h4 className='footer__title'>
              Copyright © 2023 M.Ergashev
            </h4>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
