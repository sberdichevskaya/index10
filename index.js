let obj1 = {
    a: '1',  
    b: '2'
  };
  
  let obj2 = {
    a: '1',  
    b: '2'
  };
  
  function comparisonObj (obj1, obj2)
  {
    let keyObj1 = Object.keys(obj1).length;
    let keyObj2 = Object.keys(obj2).length;
    if (keyObj1 !== keyObj2)
    {
      return false;
    }
  
    for (let i = 0; i < keyObj1; i ++)
    {
      let prop1 = Object.keys(obj1)[i];
      //let prop2 = Object.keys(obj2)[i];
      let provObj = false;
      if ((typeof(obj1[prop1]) === 'object') || typeof(obj2[prop1]) === 'object')
      {
        provObj = true;
      }
      //console.log(i);
      //console.log(provObj);
     if ((!provObj && (obj1[prop1] !== obj2[prop1]))
      || (provObj && !comparisonObj(obj1[prop1], obj2[prop1]))) {
        return false;
      }
    }
  
    return true;
  }
  
   console.log(comparisonObj (obj1, obj2));