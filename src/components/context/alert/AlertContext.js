import { createContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const handleAlertMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ message, handleAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext;
