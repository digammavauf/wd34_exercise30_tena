const SampleFunctionalComponent = (data) => {
    function showAlert1() {
        alert(data.name);
    }
    let showAlert2 = function() {
        alert(data.name);
    }
    function showAlert1P(text) {
        alert(text);
    }
    let showAlert2P = function(text) {
        alert(text);
    }
    return (
        <div>
            <div>
                <h1>
                    Sample Functional Component!
                    {data.name}
                </h1>
                {data.children}
            </div>
            <button onClick={showAlert1}>Alert1</button>
            <button onClick={showAlert2}>Alert2</button>
            <button onClick={()=>showAlert1P(data.name)}>Alert1P with Param</button>
            <button onClick={()=>showAlert2P(data.name)}>Alert2P with Param</button>
        </div>
     );
}
 
export default SampleFunctionalComponent