// src/components/Notification.tsx
import React from 'react';
import styled from 'styled-components';

interface NotificationProps {
  message: string;
  isVisible: boolean;
}

const NotificationWrapper = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff9800;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1100;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`;

const Notification: React.FC<NotificationProps> = ({ message, isVisible }) => {
  return (
    <NotificationWrapper isVisible={isVisible}>
      {message}
    </NotificationWrapper>
  );
};

export default Notification;