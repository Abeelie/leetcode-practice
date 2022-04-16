const intersection = (nums1, nums2) => {
    let map = {}, set = new Set();
    nums1.forEach(num => map[num] = (map[num] || 0) + 1);
    nums2.forEach(num => {
      if(map[num] > 0){
        set.add(num);
        map[num]--;
      }
    });
    return [...set];
  };