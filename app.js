function arrayToList(array) {
    let result = {};
    if (Array.isArray(array)) {
      let currListItem = result;
      for (let item of array) {
        console.log(currListItem);
        
        let newListItem = {
            value: item,
            rest: null
        };

        console.log(newListItem);

        if (typeof currListItem.rest === 'undefined') {
          result = newListItem;
        } 
        else {
            currListItem.rest = newListItem;
        }
        currListItem = newListItem;
        console.log(currListItem);
    }
    //console.log(result)
    }
  }

  arrayToList([10,20,30]);

