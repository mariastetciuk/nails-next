
import {  useMap } from 'react-leaflet';

const LocateControl = () => {
  const map = useMap();

  const handleClick = () => {
    const currentLocation = { lat: 48.942141511985035, lng: 24.69562265972141 };;
    map.flyTo(currentLocation, 15); 
  };

  return (
      <button onClick={handleClick} className='absolute top-[90px] left-2 p-3 z-[1] text-white'>Nails</button>
  );
};

export default LocateControl;