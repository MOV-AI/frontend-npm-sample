import React from "react";
import { SceneViewer } from "@mov-ai/mov-fe-lib-scene";
import { withDefaults } from "@mov-ai/mov-fe-lib-react";

function App() {
  return <div><SceneViewer
        sceneName={{ Value: "a" }}
    /></div>
}

export default withDefaults({
  name: "Test",
  component: App
});
