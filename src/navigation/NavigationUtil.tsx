import {
    createNavigationContainerRef,
    CommonActions,
    StackActions,
} from '@react-navigation/native'


export const navigationRef= createNavigationContainerRef();

export async function navigate(routeName:string,params?:object) 
{
    navigationRef.isReady();
    if(navigationRef.isReady())
    {
        navigationRef.dispatch(CommonActions.navigate(routeName,params))
    }
    
}
export async function Replace(routeName:string,params?:object) 
{
    navigationRef.isReady();
    if(navigationRef.isReady())
    {
        navigationRef.dispatch(StackActions.replace(routeName,params))
    }
    
}
export async function ResetAndNavigate(routeName:string,params?:object) 
{
    navigationRef.isReady();
    if(navigationRef.isReady())
    {
        navigationRef.dispatch(CommonActions.reset({
 
            index:0,
            routes:[{name:routeName}]
        }))
    }
    
}
export async function GoBack() {
    navigationRef.isReady();
    if(navigationRef.isReady())
    {
        navigationRef.dispatch(CommonActions.goBack())
    }  
}