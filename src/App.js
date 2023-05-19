
import React from 'react';
import './App.css';

import Stops from "./components/Stops";
import RoutePage from "./pages/RoutePage";
import StopPage from "./pages/StopPage";
import {
    createSmartappDebugger,
    createAssistant,
} from "@salutejs/client";
import SearchPage from "./pages/SearchPage";


const initializeAssistant = (getState/*: any*/) => {
    if (process.env.NODE_ENV === "development") {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN ?? "",
            initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
            getState,
        });
    }
    return createAssistant({ getState });
};

// // const stops = [
//     "Парк Культуры",
//     "Школа №12",
//     "Торговый Центр",
//
//     ];
// const routes = ["Автобус 90", "Трамвай 3"];

export class App extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        {console.log(props.data)}

        this.state = {
            notes: [],
        }

        this.assistant = initializeAssistant(() => this.getStateForAssistant() );
        this.assistant.on("data", (event/*: any*/) => {
            console.log(`assistant.on(data)`, event);
            const { action } = event
            this.dispatchAssistantAction(action);
        });
        this.assistant.on("start", (event) => {
            console.log(`assistant.on(start)`, event);
        });

    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    getStateForAssistant () {
        console.log('getStateForAssistant: this.state:', this.state)
        const state = {
            item_selector: {
                items: this.state.notes.map(
                    ({ id, title }, index) => ({
                        number: index + 1,
                        id,
                        title,
                    })
                ),
            },
        };
        console.log('getStateForAssistant: state:', state)
        return state;
    }

    dispatchAssistantAction (action) {
        console.log('dispatchAssistantAction', action);
        if (action) {
            switch (action.type) {
                case 'add_note':
                    return this.add_note(action);

                case 'done_note':
                    return this.done_note(action);

                case 'delete_note':
                    return this.delete_note(action);

                default:
                    throw new Error();
            }
        }
    }


    render() {
        console.log('render');

  return (
      <>
        <RoutePage/>

        <StopPage name = {"Театральная площадь"} routes={[1,2,3,4,5,6]}/>
        {/*<SearchPage/>*/}
      </>

    )
    }

}
export default App;