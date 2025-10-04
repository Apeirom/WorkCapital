import styled from "styled-components";

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 30px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;
    margin-top: 20px;
`;
