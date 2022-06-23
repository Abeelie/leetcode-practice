const largestWordCount = (messages: string[], senders: string[]): string => {
    const chatLog: {} = mapping(messages, senders);
    let senderLargestWordCount: number = 0;
    let name: string = "";
  
    for(const sender in chatLog){    
      if(chatLog[sender] > senderLargestWordCount){
        senderLargestWordCount = chatLog[sender];
        name = sender;
      }else if(chatLog[sender] === senderLargestWordCount  && sender > name){
        name = sender;
      }
    } 
  
    return name;
  };
  
  
  const mapping = (messages, senders): {} => {
    const map: {} = {};
    
    for(let i = 0; i < messages.length; i++){
      const messageLength: number = messages[i].split(" ").length;
      const sender: string = senders[i];
      
      map[sender] = map[sender] ? map[sender] + messageLength : messageLength;
    }
  
    return map;
  }