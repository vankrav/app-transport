
import {CardContent, Cell, Container, TextBoxBigTitle} from "@sberdevices/plasma-ui";
import {Button, Card, Header} from "@salutejs/plasma-ui";
import Stops from "../components/Stops";
import Name from "../components/Name";




let stopNames = []


export const RoutePage = ({data, rotate, send}) => {

    // if(data["short_name"] != ""){
    console.log("data")
    //     let s = data["stops"];
    //     s = s.toString();
    //     console.log(s);
    //     s = JSON.parse(s);
    //    stopNames = s.map((item) => item.stop_name);
      console.log(data.stops0)
    // }
    if (typeof(data.stops0) != "undefined" && typeof(data.stops1) != "undefined") {
        send(data.short_name, "ок")
        const stops = data.reverse ? data.stops0.map(stop => stop.stop_name) : data.stops1.map(stop => stop.stop_name)
        return (

            <Container style={{ width: '70%', minWidth: "350px"}}>
                <Header title = "Расписание транспорта"/>
                    <Name rotate = {rotate} name = {data.long_name} />
                    <Stops name = {data.short_name} stops={stops}/>


            </Container>
        );
    }
    else {
        console.error('Ошибка при получении остановок');
        send(data.short_name, "ошибка")
        return (

            <Container style={{ width: '70%', minWidth: "350px"}}>
                <Header title = "Расписание транспорта"/>
                 <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-critical)"}}>
                    <CardContent compact  >
                        <Cell
                            content={<TextBoxBigTitle>Маршрут {data.short_name} не найден</TextBoxBigTitle>}


                        />
                    </CardContent>
                </Card>
            </Container>
        );
    }





}

export default RoutePage;
