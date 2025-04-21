import React from 'react';   
import { Card, Placeholder } from 'react-bootstrap';  
function LoadingCards() {  
  const cards = Array.from({ length: 5 });  

  return (  
    <div className="d-flex justify-content-around">  
      {cards.map((_, index) => (  
        <Card style={{ width: '18rem', margin: '10px' }} key={index}>  
          <Placeholder as={Card.Img} animation="glow" style={{ height: '200px' }} />  
          <Card.Body>  
            <Placeholder animation="glow">  
              <Placeholder xs={6} />  
            </Placeholder>  
            <Placeholder animation="glow">  
              <Placeholder xs={8} />  
            </Placeholder>  
          </Card.Body>  
        </Card>  
      ))}  
    </div>  
  );  
}  

export default LoadingCards;  
//to be continued.......

// import React, { useState, useEffect } from 'react';  
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import { Card, Placeholder } from 'react-bootstrap';  

// function LoadingCards() {  
//   const cards = Array.from({ length: 3 });  

//   return (  
//     <div className="d-flex justify-content-around">  
//       {cards.map((_, index) => (  
//         <Card style={{ width: '18rem', margin: '10px' }} key={index}>  
//           <Placeholder as={Card.Img} animation="glow" style={{ height: '200px' }} />  
//           <Card.Body>  
//             <Placeholder animation="glow">  
//               <Placeholder xs={6} />  
//             </Placeholder>  
//             <Placeholder animation="glow">  
//               <Placeholder xs={8} />  
//             </Placeholder>  
//           </Card.Body>  
//         </Card>  
//       ))}  
//     </div>  
//   );  
// }  
// export default LoadingCards;

// function App() {  
//   const [loading, setLoading] = useState(true);  
//   const [data, setData] = useState(null);  

//   useEffect(() => {  
//     // استدعاء API لتحميل البيانات  
//     const fetchData = async () => {  
//       try {  
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");  
//         const result = await response.json();  
//         setData(result);  
//       } catch (error) {  
//         console.error("Error fetching data:", error);  
//       } finally {  
//         setLoading(false); // قم بإيقاف حالة التحميل بعد تحميل البيانات  
//       }  
//     };  
    
//     fetchData();  
//   }, []);  

//   return (  
//     <div className="App">  
//       {loading ? (  
//         <div className="text-center">  
//           <h1>Loading...</h1>  
//           <LoadingCards />  
//         </div>  
//       ) : (  
//         <div>  
//           <h1>Products Loaded</h1>  
//           <ul>  
//             {data.slice(0, 5).map((post) => ( // عرض أول 5 منشورات كمثال  
//               <li key={post.id}>{post.title}</li>  
//             ))}  
//           </ul>  
//         </div>  
//       )}  
//     </div>  
//   );  
// }  

// export default App;  