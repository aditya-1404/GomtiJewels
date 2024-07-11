import React from 'react'
import '../components/home.css'
import Nav from './nav'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Footer from './footer'
gsap.registerPlugin(ScrollTrigger)
function Home() {
  useGSAP(()=>{
    var tl=gsap.timeline()
    tl.from('.head,.page1 h3',{
      y:-200,
      opacity:0,
      duration:2,
      stagger:0.2
    })
    window.addEventListener("wheel",(dets)=>{
      if(dets.deltaY>0){
        gsap.to('.strip',{
          transform:'translateX(-200%)',
          duration:5,
          repeat:-1,
          ease:"none"
        })

        gsap.to('.strip img',{
          rotate:180
        })
      }
      else{
        gsap.to('.strip',{
          transform:'translateX(0)',
          duration:5,
          repeat:-1,
          ease:"none"
        })
        gsap.to('.strip img',{
          rotate:0
        })
      }
    })
  })
  return (
    <>
    <Nav/>
    <div className='container-h font-link page1'>
        <h1 className='head'>Gomti Jewels</h1>
        <h3>The Best jewellry Under One Roof.</h3>
    </div>
    <div className="page2">
      <div className="move">
        <div className="strip">
          <h1 className='stripText'>Where Beauty Meets Brilliance</h1>
          <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
        </div>
        <div className="strip">
          <h1 className='stripText'>Where Beauty Meets Brilliance</h1>
          <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
        </div>
        <div className="strip">
          <h1 className='stripText'>Where Beauty Meets Brilliance</h1>
          <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
        </div>
        <div className="strip">
          <h1 className='stripText'>Where Beauty Meets Brilliance</h1>
          <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
        </div>
        <div className="strip">
          <h1 className='stripText'>Where Beauty Meets Brilliance</h1>
          <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
        </div>
        </div>
        <div className="footer">
            <Footer></Footer>
        </div>
    </div>
    </>
  )
}

export default Home