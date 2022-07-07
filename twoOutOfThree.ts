const twoOutOfThree = (nums1: number[], nums2: number[], nums3: number[]): number[] => {
    const nums: number[] = [...nums1, ...nums2, ...nums3];
    const nums1Set = new Set([...nums1]);
    const nums2Set = new Set([...nums2]);
    const nums3Set = new Set([...nums3]);
    const distinctArray = new Set([]);
    
    for(const num of nums){
      if(nums1Set.has(num) && nums2Set.has(num)){
        distinctArray.add(num);
      }else if(nums1Set.has(num) && nums3Set.has(num)){
        distinctArray.add(num);
      }else if(nums2Set.has(num) && nums3Set.has(num)){
        distinctArray.add(num);
      }
    }
  
    return [...distinctArray];
  };