import { observer, } from 'mobx-react'

import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { List, Button, Input, Form } from 'semantic-ui-react'



export const TodoList = () => {

    const OwnStore = useContext(Store)
    const regexp = /#\w+/gm  //snring.match.regexp вернет массив совпадений (все слова идущие за # )

    return (
        <div className="mt-4">
            <List divided relaxed>
                {OwnStore.todos.map(task => (
                    <List.Item key={task.id}>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content key={task.id}>
                            <List.Description key={task.id}>
                                <Form key={task.id}>
                                    <Input key={task.id}

                                        transparent
                                        onChange={(e) => {
                                            task.text = e.target.value

                                        }}
                                        value={task.text}
                                    />
                                </Form>

                                <Button.Group basic floated='right' >

                                    <Button onClick={() => {
                                        OwnStore.removeTodo(task.id);
                                    }}>Delete </Button>
                                </Button.Group>
                            </List.Description>
                            <List.Header as='a'>{task.text.match(regexp)}</List.Header>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
            {/* <p onClick={TagClick}>{Array.from(new Set(OwnStore.TodoList.title.toString().match(regexp)))}</p> */}
        </div >
    )
}
export default observer(TodoList)


// runInAction(
//     () => {
//         task.text = e.target.value
//     }
// )