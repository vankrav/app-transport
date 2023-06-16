import {CardContent, Cell, Container, TextBoxBigTitle} from "@sberdevices/plasma-ui";
import {Button, Card, Header} from "@salutejs/plasma-ui";
import Stops from "../components/Stops";
import Name from "../components/Name";
import { IconChevronLeft } from '@salutejs/plasma-icons';
import "../App.css"
import {useEffect, useState} from "react";


let stopNames = []
 // инициируем переход на следующую страницу


// useEffect(() => {
//     window.history.replaceState({ page: 'previous' }, ''); // устанавливаем текущую страницу
//     window.onpopstate = ({ state }) => {
//         setPage(state.page); // выполняем переход на заданную страницу: next - по вызову handleNext или previous - по нажатию кнопки back
//     }
// }, []);

export const RoutePage = ({data, rotate, send, goBack}) => {



    if (data.reverse) {				//С.И.: добавляю код для перессылки данных
        var val = 'маршрут'
    } else {
        var val = 'реверс'
    }
    if (typeof(data.stops0) != "undefined" && typeof(data.stops1) != "undefined") {
        const stops = data.reverse ? data.stops0.map(stop => stop.stop_name) : data.stops1.map(stop => stop.stop_name)
        if (stops.length != 0) {
            send(val, "ок", data.short_name)
        } else {
            send(val, "ошибка", data.short_name)
        }
        return (

            <Container style={{ width: '70%', minWidth: "350px", outline: "none"}}>
                <div style={{ display: "inline"}}>

                <Header back={true} onBackClick={goBack} title = "Расписание транспорта"/>
            </div>
                <Name rotate = {rotate} name = {data.long_name} />
                <Stops name = {data.short_name} stops={stops}/>


            </Container>
        );
    }
    else {
        console.error('Ошибка при получении остановок');
        send(val, "ошибка", data.short_name)
        return (

            <Container style={{ width: '70%', minWidth: "350px", outline: "none"}}>

                <Header back={true} onBackClick={goBack} title = "Расписание транспорта"/>
                <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-critical)", outline: "none"}}>
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
