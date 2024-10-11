import react,{useState} from "react";
import {View, Text, Button, GestureResponderEvent} from "react-native";

function FunctionalComponent(props: { title: string; },onPress: ((event: GestureResponderEvent) => void) | undefined){
    function increase(){
        setCount(count+1);
    };
    function decrease(){
        setCount(count-1);
    };
    
    const [count, setCount] = useState(100);
    return(
        <View>
    <Text>Functional Component : {count}</Text> 
    <Button title= {props.title} onPress={onPress}></Button>

    </View>
    )
};

export default FunctionalComponent;