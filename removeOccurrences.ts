const removeOccurrences = (s: string, part: string): string => {
    if(!s.includes(part)) {
      return s;
    }
    
    return removeOccurrences(s = s.replace(part, ""), part);
};