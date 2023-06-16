import React from "react";
import {MarkedList, MarkedItem, IconDone, Card, Image} from "@salutejs/plasma-ui";
import {
    Button,
    CardContent,
    Cell, CellDisclosure,
    CellIcon,
    CellListItem,
    TextBox,
    TextBoxBigTitle, TextBoxSubTitle,
    TextBoxTitle
} from "@sberdevices/plasma-ui";
import {IconArrowLeft, IconArrowRight, IconLocation, IconLocationFill} from "@salutejs/plasma-icons";
import { IconRefresh } from '@salutejs/plasma-icons';
import { BsArrowDownUp } from "react-icons/bs";
import "../App.css"
const Name = ({ name, rotate }) => {
    return (
        <>
        <Card style={{ marginBottom: 15, backgroundColor : "var(--plasma-colors-success)"}}>
            <CardContent compact  >
                <Cell
                    content={<TextBoxBigTitle>{name}</TextBoxBigTitle>}

                    // contentRight={<BsArrowDownUp  className="button-class" onClick={rotate} />}
                />
            </CardContent>
        </Card>

        </>
    );
};

export default Name;
