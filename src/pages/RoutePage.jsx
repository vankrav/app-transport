
import {Container} from "@sberdevices/plasma-ui";
import {Button, Header} from "@salutejs/plasma-ui";
import Stops from "../components/Stops";
import Name from "../components/Name";



let stopNames = []


export const RoutePage = ({data}) => {

    if(data["short_name"] != ""){
        console.log("data")
        let s = data["stops"];
        s = s.toString();
        console.log(s);
        s = JSON.parse(s);
       stopNames = s.map((item) => item.stop_name);
       console.log(stopNames)
    }



    return (

        <Container style={{ width: '70%', minWidth: "350px"}}>
            <Header title = "Расписание транспорта"/>
            <Name name = {data.long_name} />
            {/*{console.log(route.stops)}*/}
            <Stops name = {data.short_name} stops={stopNames}/>
        </Container>
    );
}

export default RoutePage;
