import React, { useContext } from "react"

import { AttemptContext } from "../../context/attempt-context"
import ModalLayout from "./modal-layout"

export default props => {
  const AttemptState = useContext(AttemptContext)

  const handleBtnClick = ev => {
    AttemptState.setView("play")
  }

  return (
    <ModalLayout>
      <div className="content">
        <h1>Info</h1>
        <p>
          <em>TODO: add game play instructions</em>
        </p>
        <p>
          <em>TODO: add link to official rules</em>
        </p>
        <p>
          <em>TODO: add link to open source code</em>
        </p>
        <p>
          <em>
            TODO: this view deserves a better layout, maybe its own page route
          </em>
        </p>
        <div
          className="btn"
          onClick={handleBtnClick}
          onKeyUp={handleBtnClick}
          role="button"
          tabIndex="0"
        >
          Play
        </div>
      </div>
    </ModalLayout>
  )
}
