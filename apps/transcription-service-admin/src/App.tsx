import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConversationList } from "./conversation/ConversationList";
import { ConversationCreate } from "./conversation/ConversationCreate";
import { ConversationEdit } from "./conversation/ConversationEdit";
import { ConversationShow } from "./conversation/ConversationShow";
import { TranscriptList } from "./transcript/TranscriptList";
import { TranscriptCreate } from "./transcript/TranscriptCreate";
import { TranscriptEdit } from "./transcript/TranscriptEdit";
import { TranscriptShow } from "./transcript/TranscriptShow";
import { PolishRequestList } from "./polishRequest/PolishRequestList";
import { PolishRequestCreate } from "./polishRequest/PolishRequestCreate";
import { PolishRequestEdit } from "./polishRequest/PolishRequestEdit";
import { PolishRequestShow } from "./polishRequest/PolishRequestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TranscriptionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Conversation"
          list={ConversationList}
          edit={ConversationEdit}
          create={ConversationCreate}
          show={ConversationShow}
        />
        <Resource
          name="Transcript"
          list={TranscriptList}
          edit={TranscriptEdit}
          create={TranscriptCreate}
          show={TranscriptShow}
        />
        <Resource
          name="PolishRequest"
          list={PolishRequestList}
          edit={PolishRequestEdit}
          create={PolishRequestCreate}
          show={PolishRequestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
