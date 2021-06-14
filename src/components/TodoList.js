import { observer, } from 'mobx-react'

import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { List, Button, Input, Form } from 'semantic-ui-react'
import { nanoid } from 'nanoid'
import TegsList from './TegsList'

export const TodoList = () => {
    const OwnStore = useContext(Store)
    const regexp = /#\w+/gm  //string.match.regexp вернет массив совпадений (все слова идущие за # )

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
                                        fluid
                                        transparent
                                        onChange={(e) => {
                                            task.text = e.target.value
                                            localStorage.setItem('myStorage', JSON.stringify(OwnStore.todos))
                                        }}
                                        value={task.text}
                                    />
                                </Form>
                                <Button.Group basic floated='right' >

                                    <Button onClick={() => {
                                        OwnStore.removeTodo(task.id);
                                        localStorage.setItem('myStorage', JSON.stringify(OwnStore.todos))
                                    }}>Delete
                                    </Button>

                                </Button.Group>
                            </List.Description>
                            <List.Header className='text-info' key={nanoid()}
                                >
                                {task.text.match(regexp) != null
                                    ?
                                    (
                                        OwnStore.arrayTegs.push(...task.text.match(regexp)),
                                        task.text.match(regexp).join(' ')

                                    )
                                    :
                                    ('')}
                            </List.Header>
                        </List.Content>
                    </List.Item>
                ))}
            </List>

            <div >
                <TegsList />

            </div>
        </div >
    )
}
export default observer(TodoList)



