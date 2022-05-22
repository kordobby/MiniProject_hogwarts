/* House.jsx */

/* Import */
import { useState } from "react";
import styled from "styled-components";
import CharacterCard from '../Components/CharacterCard.jsx';

// Import Header Menu Components
import HeaderNavi from "../Components/HeaderNavi.jsx";

// URL은 뭔가 이렇게 관리가 하고싶었습니다
const URL = 'http://hp-api.herokuapp.com/api/characters/house/';

const House = () => {
    // 모든 해리포터 케릭터를 관리해줄 state
    let [characters, setCharacters] = useState([]);
    // url제일뒤에 붙혀서 하우스 를 판별해줄 변수
    let house = "";
   
    // url을 가져오는 함수
    const getCharacters = async()=>{
        // url에서 response 받아서 json data로 
        const response = await fetch(`${URL}${house}`)
        const data = await response.json();

        // 새 배열 만들어서
        let newArr =[];

        // 위에서 data 받은거 새 배열에 보관
        newArr = data.map((value)=>value);
        // 배열에 들어있는거 케릭터 state에 넣어줌
        setCharacters(characters = newArr)
    }

    // 전체적인 카드를 보여줄 변수
    const ShowCharacters = characters.map((value, index)=>(<CharacterCard characters={characters} key={index} num={index}/>))

    // 버튼 클릭 이벤트
    const ClickEventHandler = (e) => {
        // 하우스에 id값을 넣어줌
        house = e.target.id;
        // url에서 데이터 가져오는 이벤트 시작
        getCharacters();
    }
    
    return (
        <Wrap>
            {/* Header Menu : fixed Component */}
            <HeaderNavi></HeaderNavi>
            <ContentsWrap>
                <Header>해리포터 하우스 선택창 예시</Header>
                <HouseWrap>
                    {/* 하우스 이름은 url 뒤에 붙여야 하기 때문에 그냥 각 기숙사 이름으로 */}
                    <HouseButton onClick={ClickEventHandler} id={"gryffindor"}>그리핀도르</HouseButton>
                    <HouseButton onClick={ClickEventHandler} id={"Slytherin"}>슬리데린</HouseButton>
                    <HouseButton onClick={ClickEventHandler} id={"Ravenclaw"}>래번클로</HouseButton>
                    <HouseButton onClick={ClickEventHandler} id={"Hufflepuff"}>후플푸프</HouseButton>
                </HouseWrap>
                    <CharactersWrap>
                        {ShowCharacters}
                    </CharactersWrap>
            </ContentsWrap>
        </Wrap>
    )
}

export default House;

// styled components
const Wrap = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: 95vh;
  background-color: var(--white);
  margin: 10px auto;
`;

const ContentsWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.h1`
`;

const HouseWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HouseButton = styled.div`
    width: 100%;
    height: 80vh;
    background-color: tomato;
    border: 1px solid #000;
    &:hover{
        background-color: teal;
    }
`;

const CharactersWrap = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    grid-gap: 10px;
    padding: 20px;
`;

