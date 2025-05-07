import Button from "./Button";
import { PropHello } from "./HelloWord.dto";


export default function HelloWorld ({name, gender, umur=30}: PropHello) {


    return (
        <>
            <h1>Hai {name}!</h1>
            <h2>My gender is {gender}</h2>
            <h3>I am {umur} years old </h3>
            <Button flag='Hello'/>
        </>
    );
}

