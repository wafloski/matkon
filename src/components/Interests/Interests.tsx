import { SectionTitle } from '../Common/Common.ts';

import * as S from './Interests.styled';
import { Interest } from '../../types/types.ts';

interface InterestsProps {
    content: Interest[];
}

const Interests = ({ content }: InterestsProps) => (
    <>
        <SectionTitle>Interests</SectionTitle>
        <S.InterestsContainer>
            {content?.map((item) => <S.InterestItem key={item.id}>{item.Interest} </S.InterestItem>)}
        </S.InterestsContainer>
    </>
);

export default Interests;