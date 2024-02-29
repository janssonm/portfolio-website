import './styles/frontpage.css';

function FrontPage() {
    return(
        <div className='frontPage'>      
            <div className='headerDiv'>
                <div className='line'></div>
                <div className='headerText1'>
                    <p>Media Technology @ KTH<br></br>Intern @ Skry</p>
                </div>
                <div className='headerText2'>
                    <p>Stockholm</p>
                    <p>Say hi</p>z
                </div>
        
            </div>
      
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
                    5 {"\xa0"} Contact
                </button>
            </div>
        </div>
    );
}
export default FrontPage;
