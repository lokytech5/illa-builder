import { FC, useContext } from "react"
import { MoreIcon } from "@illa-design/icon"
import { panelHeaderWrapperCss, panelHeaderIconWrapperCss } from "./style"
import { Trigger } from "@illa-design/trigger"
import ActionMenu from "./actionMenu"
import { HeaderProps } from "./interface"
import { ConfigPanelContext } from "./context"

const PanelHeader: FC<HeaderProps> = (props) => {
  const { handleUpdateDsl } = useContext(ConfigPanelContext)

  return (
    <div css={panelHeaderWrapperCss}>
      {/*  TODO: wait for editable component*/}
      <div>Editable Title</div>
      <div css={panelHeaderIconWrapperCss}>
        <Trigger
          position="br"
          trigger="click"
          content={<ActionMenu componentId="testId" componentType="testType" />}
          withoutPadding
          closeOnClick
          clickOutsideToClose
          showArrow={false}
          colorScheme="white"
        >
          <MoreIcon />
        </Trigger>
      </div>
    </div>
  )
}

export default PanelHeader
