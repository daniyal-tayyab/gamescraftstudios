import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 24rem;
    height: 36rem;
    position: relative;

    &:hover .game-card-content {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 1020px) {
        width: 30rem;
        height: 36rem;
    }

    @media (max-width: 926px) {
        width: 37rem;
        height: 42rem;
    }

    @media (max-width: 650px) {
        width: 55rem;
        height: 55rem;
    }

    @media (max-width: 500px) {
        width: 90vw;
        height: 55rem;
    }
`;

export const ImageContainer = styled.div`
    background: url(${props => props.img});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
`;

export const ContentContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 13rem;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    opacity: 0;
    transform: translateY(10rem);
    transition: all 0.15s;

    h3 {
        font-size: 1.8rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 5px;

        @media (max-width: 650px) {
            font-size: 2.2rem;
        }
    }
    
    p {
        font-size: 1.2rem;
        margin: 0;

        @media (max-width: 650px) {
            font-size: 1.8rem;
        }
    }

    button {
        width: max-content;
        background: linear-gradient(to bottom right, #f7232c, #f07f27, #f7232c);
        border: none;
        font-size: 1rem;
        margin-top: 1rem;

        @media (max-width: 650px) {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 1024px) {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 650px) {
        height: 17rem;
    }
`;
