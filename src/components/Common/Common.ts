import styled from "styled-components";

const SectionContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 1200px) {
        max-width: 1000px;
    }

    @media (max-width: 992px) {
        max-width: 750px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 10px;
    }

    @media (max-width: 576px) {
        padding: 0 5px;
    }
`;

const SectionTitle = styled.h3`
    text-align: center;
    color: #333;
    font-size: 30px;
    text-transform: uppercase;
    margin-top: 80px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        height: 2px;
        width: 100%;
        background: #666;
    }
`;

export { SectionContainer, SectionTitle };