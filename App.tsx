/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import ContentInfo from './source/screens/ContentInfos';
import {ModalContext} from "./source/components/ModalContext";

const App: React.FC = () => {
    return (
        <ModalContext>
            <ContentInfo/>
        </ModalContext>
    );
};

export default App;
