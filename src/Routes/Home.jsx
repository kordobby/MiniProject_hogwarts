/* Home.jsx */
import styled from "styled-components";

// Import Header Menu Components
import HeaderNavi from "../Components/HeaderNavi.jsx";
import TestImg from '../img/background.png';

const Home = () => {
    return (
        <>
            {/* Header Menu : fixed Component */}
            <HeaderNavi></HeaderNavi>

            {/* background img => 동영상으로 바꿀 예정 */}
            <HomeMain>
            <img src={TestImg} alt = "배경"></img>
            </HomeMain>
        </>
    )
}

export default Home;

const HomeMain = styled.div`
  width : 100%;
  height: 100vh;
`;
