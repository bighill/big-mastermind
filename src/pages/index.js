import React from "react"
import "../style/global.scss"

import { PegProvider } from "../context/peg-context"
import { AttemptProvider } from "../context/attempt-context"
import App from "../components/app"

export default () => (
  <PegProvider>
    <AttemptProvider>
      <App />
    </AttemptProvider>
  </PegProvider>
)
