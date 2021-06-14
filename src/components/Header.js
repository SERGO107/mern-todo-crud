import { observer } from 'mobx-react-lite'
import React from 'react'
import { Menu } from 'semantic-ui-react'

export const Head = () => {

    return (
        <div>
            <Menu stackable>
                <Menu.Item>
                    <i className="github large icon"  ></i>
                </Menu.Item>
            </Menu>
        </div>
    )
}
export default observer(Head)