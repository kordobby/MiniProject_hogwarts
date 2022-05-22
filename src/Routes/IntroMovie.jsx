/* IntroMovie.jsx */

/* Import */
import styled from "styled-components";
import IntroCard from "../Components/IntroCard.jsx";

// Import Header Menu Components
import HeaderNavi from "../Components/HeaderNavi.jsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import "../Components/swiper.css"


const IntroMovie = () => {
    const numList = [0,1,2,3,4,5,6];
    const bookImgs = [
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg',
            'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780439064873/primary/renditions/700',
            'http://prodimage.images-bn.com/pimages/9780439136365_p0_v1_s1200x630.jpg',
            'https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_SL1000_.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/91TpLHDnuFL.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/61sXBXmAWML.jpg',
            'https://images-na.ssl-images-amazon.com/images/I/91-gMZT24AL.jpg',              
            ]
    const dayRelease = ['1997-06-26', '1998-07-02','1999-07-08','2000-07-08','2003-06-21','2005-07-16','2007-07-21']

    const bookName = ['Harry Potter and the Philosopher(Sorcerer)s Stone',
                      'Harry Potter and the Chamber of Secrets',
                    'Harry Potter and the Prisoner of Azkaban',
                    'Harry Potter and the Goblet of Fire',
                    'Harry Potter and the Order of the Phoenix',
                    'Harry Potter and the Half-Blood Prince',
                    'Harry Potter and the Deathly Hallows',
                    ]
            
    const Cards = numList.map((value, index)=>(<IntroCard key={index} img={bookImgs[index]} name={bookName[index]} date={dayRelease[index]}></IntroCard>))
    return (
        <Wrap>
          {/* Header Menu : fixed Component */}
          <HeaderNavi></HeaderNavi>
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Cards.map((value)=>(<SwiperSlide>{value}</SwiperSlide>))}

      </Swiper>
              
        </Wrap>
    )
}

export default IntroMovie;

// styled components
const Wrap = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: 95vh;
  background-color: var(--white);
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

