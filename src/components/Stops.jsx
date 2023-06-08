import React from "react";
import {MarkedList, MarkedItem, IconDone, Card, Image} from "@salutejs/plasma-ui";
import {
    CardContent,
    Cell, CellDisclosure,
    CellIcon,
    CellListItem,
    TextBox,
    TextBoxBigTitle, TextBoxSubTitle,
    TextBoxTitle
} from "@sberdevices/plasma-ui";
import {IconArrowLeft, IconArrowRight, IconCartAlt, IconLocation, IconLocationFill} from "@salutejs/plasma-icons";
import { IconMinus } from '@salutejs/plasma-icons';



const Stops = ({stops, name}) => {

    return (
        <>
            {stops.length!=0 ?
            <Card style={{marginBottom: 165}}>
                <CardContent compact>
                    <Cell
                        content={<TextBoxBigTitle>Остановки</TextBoxBigTitle>}
                        contentRight={<span style={{marginTop: 5}}>маршрут: {name}</span>}
                    />
                    {/*{stops}*/}
                    {stops.map((stop, index) => (

                        <CellListItem
                            contentLeft={
                                <span style={{marginRight: "8px", marginBottom: "1px"}}>{index + 1}</span>
                            }
                            content={
                                <TextBox>
                                    <TextBoxTitle>{stop}</TextBoxTitle>
                                </TextBox>
                            }
                            // contentRight={<CellDisclosure />}
                        />
                    ))}
                </CardContent>
            </Card> :  <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-critical)"}}>
                    <CardContent compact  >
                        <Cell
                            content={<TextBoxBigTitle>Остановки не найдены</TextBoxBigTitle>}


                        />
                    </CardContent>
                </Card>}
        </>
    );
};
export default Stops;
