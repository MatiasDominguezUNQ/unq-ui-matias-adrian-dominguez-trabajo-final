import './Template.css'
import background from '../assets/Background.png';

const Template = ({children}) => {
  return (
    <div className='template-container' style={{ backgroundImage: `url(${background})` }}>
        <main className='template-main-content'>
          {children}
        </main>
    </div>
  )
}

export default Template;