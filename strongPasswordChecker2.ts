const strongPasswordCheckerII = (password: string): Boolean => {

    const characterCountCheck = (password: string): Boolean => {
      return password.length >= 8;
    }
  
    const lowerAndUpperCaseCheck = (password: string): Boolean => {
      const upperCase = /[A-Z]/;
      const lowerCase = /[a-z]/;
      return upperCase.test(password) && lowerCase.test(password);
    }
  
    const digitCountCheck = (password: string): Boolean => {
      const digit = /[0-9]/;
      return digit.test(password);
    }
  
    const specialCharCheck = (password: string): Boolean => {
      const specialChars = new Set("!@#$%^&*()-+".split(""));
      let count = 0;
  
      for (let i = 0; i < password.length; i++) {
        if (specialChars.has(password[i])) count++;
      }
  
      return count > 0;
    }
  
    const consecutiveLetterCheck = (password: string): Boolean => {
      for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) return false;
      }
  
      return true;
    }
  
  
    return characterCountCheck(password) && lowerAndUpperCaseCheck(password) &&
      digitCountCheck(password) && specialCharCheck(password) &&
      specialCharCheck(password) && consecutiveLetterCheck(password);
  };