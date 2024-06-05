import styled from "styled-components";

import backgroundImage from '../../assets/avatar.jpg';

const AboutMeContainer = styled.div`
    display: flex;
    
    .photo {
        width: 50%;
        height: 500px;
        background: url(${backgroundImage}) no-repeat center center/cover;
    }
    
    .bio {
        position: relative;
        margin-top: 40px;
        margin-bottom: 40px;
        width: 50%;
        background-color: #333;
        color: #fff;
        left: -40px;
        padding: 40px;
        font-size: 20px;
        
        h2 {
            position: relative;
            margin-bottom: 30px;
            
            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -10px;
                height: 2px;
                width: 100%;
                background: #666;
            }
        }
    }
`;

export { AboutMeContainer };