import { SectionTitle } from '../Common/Common.ts';

import * as S from './Contact.styles';
import LocationCityTwoToneIcon from '@mui/icons-material/LocationCityTwoTone';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';

interface ContactProps {
    location: string;
    mail: string;
    phone: string;
}

const Contact = ({ mail, phone, location }: ContactProps) => (
    <>
        <SectionTitle>Contact</SectionTitle>
        <S.ContactContainer>
            <S.ContactColumn>
                <LocationCityTwoToneIcon />
                {location}
            </S.ContactColumn>
            <S.ContactColumn>
                <AlternateEmailTwoToneIcon />
                {mail}
            </S.ContactColumn>
            <S.ContactColumn>
                <LocalPhoneTwoToneIcon />
                {phone}
            </S.ContactColumn>
        </S.ContactContainer>

    </>
);

export default Contact;