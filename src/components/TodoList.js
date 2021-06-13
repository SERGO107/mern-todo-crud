import { observer, } from 'mobx-react'

import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { List, Button, Input, Form } from 'semantic-ui-react'
import { nanoid } from 'nanoid'



export const TodoList = () => {

    const OwnStore = useContext(Store)
    const regexp = /#\w+/gm  //snring.match.regexp вернет массив совпадений (все слова идущие за # )
    const arr = []

    console.log(arr)
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
                            <List.Header className='text-info' key={nanoid()}
                                onClick={(e) => { console.log(e.target.innerText) }}>
                                {task.text.match(regexp) != null
                                    ?
                                    (
                                        arr.push(...task.text.match(regexp)),
                                        task.text.match(regexp).join(' ')

                                    )
                                    :
                                    ('')}
                            </List.Header>
                        </List.Content>
                    </List.Item>
                ))}
            </List>

            <List horizontal onClick={(e) => { console.log(e.target.innerText) }}>

                {Array.from(new Set(arr)).map(item => (
                    <List.Item className='text-success' key={item.index}>
                        {arr != null
                            ?
                            (item)
                            :
                            ('')}
                    </List.Item>
                ))}
            </List>

        </div >
    )
}
export default observer(TodoList)



// Array.from(new Set(  ))