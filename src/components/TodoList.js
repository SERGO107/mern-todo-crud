import { observer } from 'mobx-react'
import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { List, Button } from 'semantic-ui-react'
import { nanoid } from 'nanoid'



export const TodoList = () => {
    const OwnStore = useContext(Store)
    const regexp = /#\w+/gm  //snring.match.regexp вернет массив совпадений (все слова идущие за # )

    return (
        <div className="mt-4">
            <List divided relaxed>
                {OwnStore.todos.map(task => (
                    <List.Item key={nanoid()}>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Description >
                                {task.text}
                                <Button.Group basic floated='right' >
                                    <Button >Done</Button>
                                    <Button>Edit</Button>
                                    <Button onClick={() => {
                                        OwnStore.removeTodo(task.id);
                                    }}>Delete </Button>
                                </Button.Group>
                            </List.Description>
                            {/* <List.Header as='a'>{task.match(regexp)}</List.Header> */}
                        </List.Content>
                    </List.Item>
                ))}
            </List>
            {/* <p onClick={TagClick}>{Array.from(new Set(OwnStore.TodoList.title.toString().match(regexp)))}</p> */}
        </div >
    )
}
export default observer(TodoList)