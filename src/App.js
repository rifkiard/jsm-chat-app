import { ChatEngine } from "react-chat-engine"

import LoginForm from "./components/LoginForm"
import ChatFeed from "./components/ChatFeed"

import "./App.css"

const App = () => {

    if (!localStorage.getItem("username")) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="92bec48b-54eb-4052-8106-2a9a4b6fc901"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
        />
    )
}

export default App