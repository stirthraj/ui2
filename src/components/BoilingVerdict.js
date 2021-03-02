export default function BoilingVerdict(props){
    if(props.celsius>=100)
    {
        return <h1>Celsius Above 100 or 100</h1>;
    }
    else{
        return <h1>Celsius Below 100</h1>;
    }
}
