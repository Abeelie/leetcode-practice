const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const values: number[] = [];
      
    while(nums1.length && nums2.length){
      if(nums1[0] < nums2[0]){
        values.push(nums1.shift());
      }else{
        values.push(nums2.shift());
      }
    }
      
    const mergedArray: number[] = [...values, ...nums1, ...nums2];
    const medianIdx: number = Math.floor(mergedArray.length / 2);
    let medianNumber: number = 0;
      
    if(mergedArray.length % 2 === 0){
      const medianValue: number = (mergedArray[medianIdx-1] + mergedArray[medianIdx]) / 2; 
      medianNumber = medianValue;
    }else{
      medianNumber = mergedArray[medianIdx];
    }
    
    return medianNumber;  
};