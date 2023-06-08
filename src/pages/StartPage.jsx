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

            <Container style={{ width: '70%', minWidth: "350px"}}>

                <Header title = "Расписание транспорта"/>
            <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-success)"}}>
                <CardContent compact  >
                    <Cell
                        content={<TextBoxBigTitle>Добро пожаловать <br/> в Smart app <br/>"Маршруты надземного транспорта"! </TextBoxBigTitle>}


                    />
                </CardContent>
            </Card>
                <Card backgroundColor={"var(--plasma-colors-accent)"} style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-accent)"}}>
                    <CardContent compact  >
                        <Cell
                            content={<TextBoxBigTitle>
                                Назовите маршрут, чтобы посмотреть остановки.
                        </TextBoxBigTitle>}


                        />
                    </CardContent>
                </Card>

            <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-accent)"}}>
                <CardContent compact  >
                    <Cell
                        content={<TextBoxBigTitle>

                            Скажи "разверни", чтобы увидеть обратный путь</TextBoxBigTitle>}


                    />
                </CardContent>
            </Card>


            </Container>
        </>
    );
};

export default StartPage;


