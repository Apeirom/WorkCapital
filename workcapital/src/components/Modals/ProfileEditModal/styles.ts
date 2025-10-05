import styled from "styled-components";

export const ACTIVE_COLOR = '#0046A1';
const PADDING = '20px';

export const SelectProfileSection = styled.div`
    background-color: #f0f2f5;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: ${PADDING};
    
    .ant-form-item-label > label {
        font-weight: 600;
        color: #333;
    }
`;

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px 30px;
    margin-bottom: ${PADDING};

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const MetadataGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding-top: ${PADDING};
    border-top: 1px solid #f0f0f0;
    margin-bottom: ${PADDING};

    .ant-typography-strong {
        font-size: 0.9rem;
        color: #777;
        margin-bottom: 5px;
        display: block;
    }
    
    .ant-rate {
        color: #FFC300;
    }
    
    .ant-switch-checked {
        background-color: ${ACTIVE_COLOR};
    }
    
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
