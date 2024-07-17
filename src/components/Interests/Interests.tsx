import { SectionTitle } from '../Common/Common.ts';

import * as S from './Interests.styles';
import { Interest } from '../../types/types.ts';

interface InterestsProps {
  content: Interest[];
}

const Interests = ({ content }: InterestsProps) => (
  <>
    <SectionTitle>Interests</SectionTitle>
    <S.InterestsContainer>
      {content?.map(({ title }, index) => <S.InterestItem key={index}>{title} </S.InterestItem>)}
    </S.InterestsContainer>
  </>
);

export default Interests;
