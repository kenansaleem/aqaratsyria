import { Hero, SpecialProp } from '../../Sections'
const Home = () => {
  // const [loading, setLoading] = useState(true);  

  // useEffect(() => {  
  //   // محاكاة تحميل البيانات  
  //   const timer = setTimeout(() => {  
  //     setLoading(false);  
  //   }, 3000); //   (3 ثوانٍ هنا)  

  //   return () => clearTimeout(timer);  
  // }, []);  

  return (
    <div className='home'>
      <Hero/>
      <SpecialProp />
      </div>

  )
}

export default Home
