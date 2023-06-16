import React from "react";
import {MarkedList, MarkedItem, IconDone, Card, Image, Header} from "@salutejs/plasma-ui";
import {
    Button,
    CardContent,
    Cell, CellDisclosure,
    CellIcon,
    CellListItem, Container,
    TextBox,
    TextBoxBigTitle, TextBoxSubTitle,
    TextBoxTitle
} from "@sberdevices/plasma-ui";
import {IconArrowLeft, IconArrowRight, IconLocation, IconLocationFill} from "@salutejs/plasma-icons";
import { IconRefresh } from '@salutejs/plasma-icons';
import { BsArrowDownUp } from "react-icons/bs";

const StartPage = ({error}) => {
    return (
        <>

            <Container style={{ width: '70%', minWidth: "350px", outline: "none"}}>

                <Header title = "Расписание транспорта"/>
            <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-success)", outline: "none"}}>
                <CardContent compact  >
                    <Cell
                        content={<TextBoxBigTitle>Добро пожаловать  в приложение <br/> «Маршруты автобусов Москвы»! </TextBoxBigTitle>}


                    />
                </CardContent>
            </Card>
                <Card backgroundColor={"var(--plasma-colors-accent)"} style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-accent)", outline: "none"}}>
                    <CardContent compact  >
                        <Cell
                            content={<TextBoxBigTitle>
                                Для просмотра остановок необходимо назвать маршрут, например: <br/>«Покажи маршрут 33»

                        </TextBoxBigTitle>}


                        />
                    </CardContent>
                </Card>

            <Card style={{ marginBottom: 295, backgroundColor : "var(--plasma-colors-accent)", outline: "none"}}>
                <CardContent compact  >
                    <Cell
                        content={<TextBoxBigTitle>

                            Для получения обратного пути используется команда: <br/>«Развернуть»</TextBoxBigTitle>}


                    />
                </CardContent>
            </Card>


            </Container>
        </>
    );
};

export default StartPage;


