import React,{createContext,ReactNode,useContext, useState} from 'react'


type CommonContextInterface ={
    chat?: boolean;
    cart?: boolean;
    userProfile?: boolean;
    notification?: boolean;
}


interface ContextStateInterface {
    children?: ReactNode
    activeMenu?: boolean ;
    isClicked?:CommonContextInterface;
    setIsClicked?: React.Dispatch<React.SetStateAction<CommonContextInterface>>;
    setActiveMenu?:  React.Dispatch<React.SetStateAction<boolean>>;
    handleClick?: (name:string)=>void;
    screenSize?: number | null; 
    setScreenSize?:  React.Dispatch<React.SetStateAction<number|null>>;

    
}

const initialState= {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}
const StateContext= createContext<ContextStateInterface & CommonContextInterface>(initialState)


export const ContextProvider: React.FC<ContextStateInterface> = ({children})=>{

const [activeMenu,setActiveMenu]= useState(true)
const [screenSize,setScreenSize]= useState<number|null>(null)
const [isClicked,setIsClicked]= useState<CommonContextInterface>(initialState)


const handleClick=(clicked:string)=>{
    setIsClicked({
        ...initialState, [clicked]: true,
    })

}


    return( 
        <StateContext.Provider value={{activeMenu,setActiveMenu, isClicked,setIsClicked, handleClick, screenSize,setScreenSize}}
           > 
        {children}
        </StateContext.Provider> 

    )
}
export const useStateContext=()=>useContext(StateContext)