/* IntroCard.jsx */

/* Import */
import styled from "styled-components";

const IntroCard = ({img, name, date}) => {

    return (
        <>
            <Card>
                <ImageWrap>
                    <img style={{width:'350px'}} src={img} alt="" />
                </ImageWrap>
                <TextWrap>
                    <div>{name}</div>
                    <div>{date}</div>
                    <div>빈공간</div>
                </TextWrap>

            </Card>
        </>
    )
}

export default IntroCard;

const Card = styled.div`
  max-width: 1600px;
  width: 90%;
  min-height: 600px;
  background-color: var(--purple);
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageWrap = styled.div`  
`;

const TextWrap = styled.div`
    font-size: 40px;
`;