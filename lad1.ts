  const numArr :number[] = [1,52,22,30,6]
  const web17305_sort = <q>(arr:q[],callback:(temp1:q , temp2:q )=> q)=>{
  
    for (var i = 0; i < arr.length-1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        
          if (callback && callback(arr[i],arr[j])>0) {
            console.log(callback(arr[i],arr[j]))
              var temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp
          }
      }
  }
  return arr
  }
 const result= web17305_sort(numArr,(a,b)=>{
    return b-a
  })
  console.log(result)
