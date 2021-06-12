import { observer } from 'mobx-react-lite'
import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export const Head = () => {
    const OwnStore = useContext(Store)
    return (
        <div>
            <Menu stackable>
                <Menu.Item>
                    <i className="github large icon"  ></i>
                </Menu.Item>

                <Menu.Item
                    name='features'
                // active={activeItem === 'features'}
                // onClick={this.handleItemClick}
                >
                    Features
        </Menu.Item>

                <Menu.Item
                    name='testimonials'
                // active={activeItem === 'testimonials'}
                // onClick={this.handleItemClick}
                >
                    Testimonials
        </Menu.Item>

                <Menu.Item
                    name='sign-in'
                // active={activeItem === 'sign-in'}
                // onClick={this.handleItemClick}
                >
                    Sign-in
        </Menu.Item>
            </Menu>
        </div>
    )
}
export default observer(Head)