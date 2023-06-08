type Note = {
    id: string;
    title: string;
    completed: boolean;
};

type State = {
    notes: Array<Note>;
};

type Action =

    | {
    type: "get_route";
    short_name: string;
}
    | {
    type: "rotate";
    short_name: string;
}
    | {
    type: "delete_note";
    id: string;
};

