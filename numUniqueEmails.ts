const numUniqueEmails = (emails: string[]): number => {
    const uniqueEmails = new Set();
  
    for(const email of emails){
      let filteredEmail: string = "";
      const domainIdx: number = email.indexOf("@");
      const domainName: string = email.substring(domainIdx);
      let localName: string = email.substring(0, domainIdx);
  
      if(localName.includes("+")){
        const plusIdx: number = localName.indexOf("+");
        localName = localName.substring(0, plusIdx);
      }
      
      if(localName.includes(".")){
        localName = localName.replace(/\./g, '');;
      }
  
      filteredEmail = localName + domainName;
      uniqueEmails.add(filteredEmail);
    }
  
    return uniqueEmails.size;
};