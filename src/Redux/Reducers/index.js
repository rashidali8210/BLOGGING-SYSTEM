const initial =  {
 
    title: '',
    blog: ''
}
 
const index=
    (state=initial,action) =>
{
    switch(action.type){
       
      
        case "SET_INPUT_TITLE": {
            const { title } = action;
        
            return {
                ...state,
                title,
                
            }
        }
        case "CREATE_BLOG": {
            const { blog} = action;
            return {
              ...state,
              blog,
            }
          }
          case "RESET_INPUT": {
            return initial;
          }
          default: return state;     
}}
export default index;
