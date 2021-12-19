import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        classname='text-center mx-auto'
        width={150}
        src={spinner}
        alt='loading..'
      ></img>
    </div>
  );
}

export default Spinner;
