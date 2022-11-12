
import '../App.css';
import data from '../public/api/cars.json'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect ,useState} from 'react';

function Cars() {
const navigate = useNavigate();
const [filtered,setFiltered] = useState('');
const [filteredCars,setFilteredCars] = useState([]);

function handleSearch(e){
  setFiltered(e.target.value);
}

useEffect(()=>{
const filterArr = data.filter((item)=>
item.bodyType.toUpperCase().includes(filtered.toUpperCase()))
setFilteredCars(filterArr);
console.log(filterArr)
},[filtered]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      
    <div className="App">
  
      <input 
      type={'search'}
      placeholder={' Search by BodyType'}
      onChange= {(e)=>handleSearch(e)}></input>
       
     <Slider {...settings}>
     {!filteredCars ? 
     (
      data.map(item=>{
     return(
      <ul key={item.id}> 
        <li>{item.bodyType}</li>
        <div className='model'>
        <li ><b>{item.modelName}</b></li>
      <li>{item.modelType}</li>
      </div>
      <li className='carimage'><img src = {require(`../public/images/${item.imageUrl}`)} alt={"err"} /></li>
      <div className='footer'>
      <span onClick={()=> navigate(`/Learn/${item.id}`)}>Learn &gt; </span>
      <span onClick={()=> navigate(`/Shop/${item.id}`)}>Shop &gt;</span>
      </div>
     </ul>
     )
      })
     ):(
      filteredCars.map(item=>{
     return(
      <ul key={item.id}> 
        <li>{item.bodyType}</li>
        <div className='model'>
        <li ><b>{item.modelName}</b></li>
      <li>{item.modelType}</li>
      </div>
      <li className='carimage'><img src = {require(`../public/images/${item.imageUrl}`)} alt={"err"} /></li>
      <div className='footer'>
      <span onClick={()=> navigate(`/Learn/${item.id}`)}>Learn &gt; </span>
      <span onClick={()=> navigate(`/Shop/${item.id}`)}>Shop &gt;</span>
      </div>
     </ul>
     )
      })
     )}
     </Slider>
    </div>
    </div>
    
  );
}

export default Cars;
