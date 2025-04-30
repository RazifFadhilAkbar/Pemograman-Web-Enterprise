
 type PropHello = {
    name : string
 }


export default function HelloWorld ({name}: PropHello) {


    return (
        <>
            <h1>Hai {name}!</h1>
            <h2>Belajar React Component</h2>
        </>
    );
}

