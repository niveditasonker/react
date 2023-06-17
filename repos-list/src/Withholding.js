import React from 'react';


const Withholding = (Component) => {
    function withholdingComponent({isLoading, ...props}){
        if (!isLoading) return <Component {...props}></Component>
        return <p>Fetching data might take soem time</p>
    }

}

export default Withholding;