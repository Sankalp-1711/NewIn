// import React from 'react';
// import './Gallery.scss';

// const products = [
//   { id: 1, image: '.../assets/Card.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 2, image: '.../assets/Card-1.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 3, image: '.../assets/Card-2.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 4, image: '.../assets/Card-3.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 5, image: '.../assets/Card-4.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 6, image: '.../assets/Card-5.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 7, image: '.../assets/Card-6.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 8, image: '.../assets/Card-7.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 9, image: '.../assets/Card-8.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 10, image: '.../assets/Card-9.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 11, image: '.../assets/Card-10.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 12, image: '.../assets/Card-11.png', title: 'Green Western Dress', price: '$1000' },
// ];

// const Gallery = () => {
//   return (
//     <div className="gallery-container">
//       <div className="grid">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <div className="couture">COUTURE</div> {/* Couture label */}

//             <div className="details">
//               <h4>{product.title}</h4>
//               <p>{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         <span>&lt;</span> 1 2 <span>&gt;</span>
//       </div>
//     </div>
//   );
// };

// export default Gallery;



// import React, { useState } from 'react';
// import './Gallery.scss';

// const products = [
//   { id: 1, image: '.../assets/Card.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 2, image: '.../assets/Card-1.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 3, image: '.../assets/Card-2.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 4, image: '.../assets/Card-3.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 5, image: '.../assets/Card-4.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 6, image: '.../assets/Card-5.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 7, image: '.../assets/Card-6.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 8, image: '.../assets/Card-7.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 9, image: '.../assets/Card-8.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 10, image: '.../assets/Card-9.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 11, image: '.../assets/Card-10.png', title: 'Green Western Dress', price: '$1000' },
//   { id: 12, image: '.../assets/Card-11.png', title: 'Green Western Dress', price: '$1000' },
// ];

// const ITEMS_PER_PAGE = 8;

// const Gallery = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Pagination logic
//   const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   return (
//     <div className="gallery-container">
//       <div className="grid">
//         {selectedProducts.map((product) => (
//           <div className="card" key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <div className="couture">COUTURE</div>
//             <div className="details">
//               <h4>{product.title}</h4>
//               <p>{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         <span onClick={handlePrev}>&lt;</span>
//         {[...Array(totalPages)].map((_, index) => (
//           <span
//             key={index}
//             className={index + 1 === currentPage ? 'active' : ''}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </span>
//         ))}
//         <span onClick={handleNext}>&gt;</span>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React from 'react';
// import './Gallery.scss';

// const products = [
//   { id: 1, image: '.../assets/Card.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 2, image: '.../assets/Card-1.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 3, image: '.../assets/Card-2.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 4, image: '.../assets/Card-3.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 5, image: '.../assets/Card-4.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 6, image: '.../assets/Card-5.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 7, image: '.../assets/Card-6.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 8, image: '.../assets/Card-7.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 9, image: '.../assets/Card-8.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 10, image: '.../assets/Card-9.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 11, image: '.../assets/Card-10.png', title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 12, image: '.../assets/Card-11.png', title: 'Green Western Dress', price: '(USD) $1000' },
// ];

// const Gallery = () => {
//   return (
//     <div className="gallery-container">
//       <div className="grid">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <div className="couture">COUTURE</div>
//             <div className="details">
//               <h4>{product.title}</h4>
//               <p>{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {/* Add pagination logic here if needed in the future */}
//         <span>&lt;</span>
//         <span className="active">1</span>
//         <span>2</span>
//         <span>&gt;</span>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React from 'react';
// import './Gallery.scss';
// const products = [
//   { id: 1, image: ('./assets/Card.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 2, image: ('./assets/Card-1.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 3, image: ('./assets/Card-2.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 4, image: require('./assets/Card-3.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 5, image: require('./assets/Card-4.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 6, image: require('./assets/Card-5.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 7, image: require('./assets/Card-6.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 8, image: require('./assets/Card-7.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 9, image: require('./assets/Card-8.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 10, image: require('./assets/Card-9.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 11, image: require('./assets/Card-10.png'), title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 12, image: require('./assets/Card-11.png'), title: 'Green Western Dress', price: '(USD) $1000' },
// ];

// const Gallery = () => {
//   return (
//     <div className="gallery-container">
//       <div className="grid">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <div className="couture">COUTURE</div>
//             <div className="details">
//               <h4>{product.title}</h4>
//               <p>{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         <span>&lt;</span>
//         <span className="active">1</span>
//         <span>2</span>
//         <span>&gt;</span>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


// import React from 'react';
// import './Gallery.scss';
// // import { PiSquareSplitHorizontal, PiSquaresFourLight } from 'react-icons/pi';
// import { PiSquareSplitHorizontalThin } from "react-icons/pi";

// import { PiSquaresFour } from "react-icons/pi";




// import CardImage1 from '../../assets/Card.png';
// import CardImage2 from '../../assets/Card-1.png';
// import CardImage3 from '../../assets/Card-2.png';
// import CardImage4 from '../../assets/Card-3.png';
// import CardImage5 from '../../assets/Card-4.png';
// import CardImage6 from '../../assets/Card-5.png';
// import CardImage7 from '../../assets/Card-6.png';
// import CardImage8 from '../../assets/Card-7.png';
// import CardImage9 from '../../assets/Card-8.png';
// import CardImage10 from '../../assets/Card-9.png';
// import CardImage11 from '../../assets/Card-10.png';
// import CardImage12 from '../../assets/Card-11.png';
// import Pagination from './Pagination';
// import filter from '../../assets/filter.png'

// const products = [
//   { id: 1, image: CardImage1, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 2, image: CardImage2, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 3, image: CardImage3, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 4, image: CardImage4, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 5, image: CardImage5, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 6, image: CardImage6, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 7, image: CardImage7, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 8, image: CardImage8, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 9, image: CardImage9, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 10, image: CardImage10, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 11, image: CardImage11, title: 'Green Western Dress', price: '(USD) $1000' },
//   { id: 12, image: CardImage12, title: 'Green Western Dress', price: '(USD) $1000' },
// ];

// // const Gallery = () => {
// //   return (
// //     <div className="gallery-container">
// //       <div className="grid">
// //         {products.map((product) => (
// //           <div className="card" key={product.id}>
// //             <img src={product.image} alt={product.title} />
// //             <div className="couture">COUTURE</div>
// //             <div className="details">
// //               <h4>{product.title}</h4>
// //               <p>{product.price}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <div className="pagination">
// //         <span>&lt;</span>
// //         <span className="active">1</span>
// //         <span>2</span>
// //         <span>&gt;</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Gallery;


// const Gallery = () => {
//     return (
//       <div className="gallery-container">
//          <div className='extra'>
//             <div className='filter-extra'>
//                 <img src={filter}/>
//                 <p>Show Filters</p>
//             </div>
//             <div>
//             <PiSquareSplitHorizontalThin style={{fontSize:"1.7rem"}} />
//             <PiSquaresFour style={{fontSize:"1.7rem"}} />

//             </div>
//          </div>
//         <div className="grid">
//           {products.map((product) => (
//             <div className="card" key={product.id}>
//               <img src={product.image} alt={product.title} />
//               <div className="couture">COUTURE</div>
//               <div className="details">
//                 <h4>{product.title}</h4>
//                 <p>{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       <Pagination />
//       </div>
//     );
//   };
  

//   export default Gallery;



import React, { useState, useEffect } from 'react';
import './Gallery.scss';
import { PiSquareSplitHorizontalThin, PiSquaresFour } from 'react-icons/pi';

import CardImage1 from '../../assets/Card.png';
import CardImage2 from '../../assets/Card-1.png';
import CardImage3 from '../../assets/Card-2.png';
import CardImage4 from '../../assets/Card-3.png';
import CardImage5 from '../../assets/Card-4.png';
import CardImage6 from '../../assets/Card-5.png';
import CardImage7 from '../../assets/Card-6.png';
import CardImage8 from '../../assets/Card-7.png';
import CardImage9 from '../../assets/Card-8.png';
import CardImage10 from '../../assets/Card-9.png';
import CardImage11 from '../../assets/Card-10.png';
import CardImage12 from '../../assets/Card-11.png';
import Pagination from './Pagination';
import filter from '../../assets/filter.png';

const products = [
  { id: 1, image: CardImage1, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 2, image: CardImage2, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 3, image: CardImage3, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 4, image: CardImage4, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 5, image: CardImage5, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 6, image: CardImage6, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 7, image: CardImage7, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 8, image: CardImage8, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 9, image: CardImage9, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 10, image: CardImage10, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 11, image: CardImage11, title: 'Green Western Dress', price: '(USD) $1000' },
  { id: 12, image: CardImage12, title: 'Green Western Dress', price: '(USD) $1000' },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(8); // Default is 8 for desktop

  // Handle dynamic photo count based on screen size
  useEffect(() => {
    const updatePhotosPerPage = () => {
      if (window.innerWidth <= 768) {
        setPhotosPerPage(4); // Mobile view
      } else {
        setPhotosPerPage(8); // Desktop view
      }
    };

    // Initial check and on window resize
    updatePhotosPerPage();
    window.addEventListener("resize", updatePhotosPerPage);

    return () => window.removeEventListener("resize", updatePhotosPerPage);
  }, []);

  // Pagination logic
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = products.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="gallery-container">
      <div className='extra'>
        <div className='filter-extra'>
          <img src={filter} alt="Filter" />
          <p>Show Filters</p>
        </div>
        <div>
          <PiSquareSplitHorizontalThin style={{ fontSize: "1.7rem" }} />
          <PiSquaresFour style={{ fontSize: "1.7rem" }} />
        </div>
      </div>
      <div className="grid">
        {currentPhotos.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="couture">COUTURE</div>
            <div className="details">
              <h4>{product.title}</h4>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Gallery;