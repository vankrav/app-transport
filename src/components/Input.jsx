
import React from "react";
import {MarkedList, MarkedItem, IconDone, Card, Image, TextField} from "@salutejs/plasma-ui";
import {IconArrowLeft, IconArrowRight, IconLocation, IconLocationFill, IconSearch} from "@salutejs/plasma-icons";

const Input = () => {
    return (
        <TextField
            style={{ marginBottom: 15 }}
            placeholder="Поиск"
            size="l"
            contentRight={<IconSearch size="s" color="inherit" />}
            helperText="Введите маршрут или остановку"
        />

    );
};

export default Input;
