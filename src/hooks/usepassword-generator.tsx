import { useState } from 'react';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const generatePassword = (checkboxData, length) => {
    // Generate password logic here
    const x = [...checkboxData];
    const newState = (checkboxData.state = true);
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
