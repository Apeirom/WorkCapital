import styled from "styled-components";
import { Typography } from "antd";

export const ACTIVE_COLOR = '#0046A1';
const PADDING = '15px';

export const StatCardWrapper = styled.div`
    background: #fff;
    padding: ${PADDING};
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 140px;
`;

export const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 15px;
    border-radius: 50%;
`;

export const Content = styled.div`
    
    .ant-typography-title {
        font-size: 0.9rem !important;
        color: #777;
        font-weight: 500;
        margin-bottom: 4px;
    }
`;

export const ValueText = styled(Typography.Text)`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
`;

export const ChangeIndicator = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8rem;
`;
