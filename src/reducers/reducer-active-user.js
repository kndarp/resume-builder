export default function(state=null,action){
    console.log('Action type is: ',action)
    switch(action.type){
        case 'USER_SELECTED': 
                return action.payload;
                
    }
    return state;
}