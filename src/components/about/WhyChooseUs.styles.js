import styled from "styled-components";

export const Container = styled.section`
    margin: 8rem;

    h1 {
        width: 100%;
        text-align: center;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
    margin-top: 3rem;
`;

export const Card = styled.div`
    padding: 2rem;
    color: #fcfcfc;
    font-size: 8rem;
    border: 1px solid #f07f27;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        font-size: 1.8rem;
        margin: 1rem;
    }

    p {
        font-size: 1.4rem;
    }
`;