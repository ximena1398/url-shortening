import { Button } from '../Button/Button';
import './containerurl.css';

export const ContainerUrl = ({short,long}) => {

  // const [url, seturl] = useState(['http://localhost:3001/','http://localhost:3002/','http://localhost:3003/']);

  return (
    <div className='div-container'>
      {/* <AddUrl seturl={seturl}/> */}
      <div>
        <p className='text-url'>{short}</p>
      </div>
      <div className='div-button-url'>
        <p className='text-url-green'>{long}</p>
        <Button textButton='Copy' sizeFont="1.5vh" borderRadius='1vh' className='url-button' padding='1vh 4vh' />
      </div>
    </div>
  )
}
