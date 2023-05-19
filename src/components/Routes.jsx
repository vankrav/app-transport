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
import { ReactComponent as IconBus } from '../img/IconBus.svg';

const Stops = (props) => {

    return (
        <>
        <Card style={{ marginBottom: 10 }}>
            <CardContent compact>
                <Cell
                    content={<TextBoxBigTitle>Эту остановку прозжают</TextBoxBigTitle>}

                />
                {props.routes.map(route => (

                    <CellListItem
                        contentLeft={
                            <CellIcon>
                                <IconCartAlt size="s" color="inherit" />
                            </CellIcon>
                        }
                        content={
                            <TextBox>
                                <TextBoxTitle>{route}</TextBoxTitle>
                            </TextBox>
                        }
                        contentRight={<CellDisclosure />}
                    />
                ))}
            </CardContent>
        </Card>
        </>
    );
};

export default Stops;
