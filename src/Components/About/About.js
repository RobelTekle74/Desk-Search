import React from 'react'

const style ={
    textSize: 20,

}

const about = () => {
    return (
        <div className= "container" style={{marginTop: 0, paddingTop:0}}>
            <p style={style}> 
                This app keeps track of your employees and their location. This idea came to me as I was going around my work bulding writing down where each employee
                working in the bulding is located. That made me think it would be alot better to have every employee is resposible for updating this information.
                The reason we were updating this information was because the current app we have is handled by someone not even in the same location.
                Since this information is important for the sake of delivering packages to each employee, it is imparative that the employees them selves
                are resposible to update that.
            </p>
        </div>
    )
}
export default about;