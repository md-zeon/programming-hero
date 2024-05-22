import useInputState from "../../Hooks/useInputState";


const HookForm = () => {
    // const [name, handleNameChange]= useInputState('Rojoni');
    const emailState = useInputState('rojoni@gmail.com');
    const handleSubmit = e => {
        console.log('form data: ', emailState)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" id="" />
                <br />
                <input type="number" name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;