const data = [
    {
    Key: 0,
    selected:false,
    name: 'Aria',
    sex: 'girl'
    }, {
    Key: 1,
    selected:false,
    name: 'Logan',
    sex: 'boy'
    }, {
    Key: 2,
    selected:false,
    name: 'Quinn',
    sex: 'girl'
    }, {
    Key: 3,
    selected:false,
    name: 'Kai',
    sex: 'boy'
    }, {
    Key: 4,
    selected:false,
    name: 'Dashiell',
    sex: 'boy'
    }, {
    Key: 5,
    selected:false,
    name: 'John',
    sex: 'boy'
    }, {
    Key: 6,
    selected:false,
    name: 'Seraphina',
    sex: 'girl'
    }, {
    Key: 7,
    selected:false,
    name: 'Caroline',
    sex: 'girl'
    }, {
    Key: 8,
    selected:false,
    name: 'Tobias',
    sex: 'boy'
    }, {
    Key: 9,
    selected:false,
    name: 'Harper',
    sex: 'girl'
    }, {
    Key: 10,
    selected:false,
    name: 'Mabe',
    sex: 'girl'
    }, {
    Key: 11,
    selected:false,
    name: 'Iris',
    sex: 'girl'
    }, {
    Key: 12,
    selected:false,
    name: 'Beatrice',
    sex: 'girl'
    }, {
    Key: 13,
    selected:false,
    name: 'Knox',
    sex: 'boy'
    }, {
    Key: 14,
    selected:false,
    name: 'August',
    sex: 'boy'
    }, {
    Key: 15,
    selected:false,
    name: 'Poppy',
    sex: 'girl'
    }, {
    Key: 16,
    selected:false,
    name: 'Aurora',
    sex: 'girl'
    }, {
    Key: 17,
    selected:false,
    name: 'Wyatt',
    sex: 'boy'
    }, {
    Key: 18,
    selected:false,
    name: 'Ezra',
    sex: 'boy'
    }, {
    Key: 19,
    selected:false,
    name: 'Emily',
    sex: 'girl'
    }, {
    Key: 20,
    selected:false,
    name: 'Sebastian',
    sex: 'boy'
    }
   ]
  
export default () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            return resolve(data)
            
        }, 300);
    })
}