
    function arrayToList(array) {
        let result = {};
        if (Array.isArray(array)) {
          let currListItem = result;
          for (let item of array) {
           
            let newListItem = {
                value: item,
                rest: null
            };
            console.log({}.rest);
            if (typeof currListItem.rest === 'undefined') {
                
              result = newListItem;
            } else {
                
                currListItem.rest = newListItem;
            }
            currListItem = newListItem;
          }
        }
        

        //return result;

      }




arrayToList([10,20,30]);