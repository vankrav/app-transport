
import {Container} from "@sberdevices/plasma-ui";
import {Button, Header} from "@salutejs/plasma-ui";
import Name from "../components/Name";
import Routes from "../components/Routes";


function StopPage(props) {

    return (
        <Container style={{ width: '70%', minWidth: "350px"}}>
            <Header title = "Расписание транспорта"/>
            <Name name ={props.name}/>
            <Routes routes={props.routes}/>
        </Container>
    );
}

export default StopPage;