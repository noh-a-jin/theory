const Circle = (props)=> {

    const circieStyle ={width:props.size,
         height: props.size, borderRadius : "9999px", 
        backgroundColor : props.bg,};


    return <div style={circieStyle}></div>
};

export default Circle;