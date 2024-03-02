import '../styles/frontpage.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

let tl = gsap.timeline()

tl.to('.animated-element', {
    x: 800
})
// Smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


function FrontPage() {
    return(
        <div className='frontPage'>      
      
            <div className="greetDiv">
                <p className='greeting'>
                Hello, I'm<br></br>Matilda Jansson
                </p>
            </div>

            <div className='listDiv'>
                <button>
                    01 {"\xa0"} Education
                </button>

                <button>
                    02 {"\xa0"} Experience
                </button>

                <button>
                    03 {"\xa0"} Projects & Skills
                </button>

                <button>
                    04 {"\xa0"} Other
                </button>

                <button>
                    05 {"\xa0"} Contact
                </button>
            </div>
        </div>
    );
}
export default FrontPage;
