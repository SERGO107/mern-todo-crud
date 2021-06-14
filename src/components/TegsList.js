import { observer } from 'mobx-react'
import React from 'react'
import Store from '../store'
import { useContext } from 'react'
import { List } from 'semantic-ui-react'

const TegsList = () => {
    const OwnStore = useContext(Store)
    function filterTasks(e) {
        let result = e.target.innerText
        console.log(result)
        OwnStore.filteredTodo(result)
    }

    return (
        <div>
            <List horizontal onClick={filterTasks}>

                {Array.from(new Set(OwnStore.arrayTegs)).map(item => (
                    <List.Item className='text-success' key={item.index}>
                        {OwnStore.arrayTegs != null
                            ?
                            (item)
                            :
                            ('')}
                    </List.Item>
                ))}
            </List>
        </div>
    )
}
export default observer(TegsList)