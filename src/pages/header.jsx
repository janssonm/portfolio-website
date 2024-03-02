import '../styles/header.css';

function Header() {
    return(
        <div className='headerDiv'>
            <div className='line'></div>
            <div className='headerText1'>
                <p>Media Technology @ KTH {"\xa0"}{"\xa0"}{"\xa0"}{"\xa0"}{"\xa0"} Intern @ Skry</p>
            </div>
            <div className='headerText2'>
                <p>Stockholm</p>
                <p>Say hi</p>
            </div>
        
        </div>
    );
}
export default Header;