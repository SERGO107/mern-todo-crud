import { observer } from 'mobx-react'
import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { Input, Button } from 'semantic-ui-react'

const Inputs = () => {
    const OwnStore = useContext(Store)

    return (
        <div>
            <Input
                fluid icon='tasks'
                value={OwnStore.newTodo}
                onChange={(evt) => (OwnStore.newTodo = evt.target.value)}
                placeholder="New todo"
            />
            <Button primary onClick={() => OwnStore.addTodo()}>Add</Button>
        </div>
    )
}
export default observer(Inputs)