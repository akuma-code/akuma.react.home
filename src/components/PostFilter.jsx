import React from 'react'
import AkuInput from './UI/input/AkuInput'
import AkuSelect from './UI/select/AkuSelect'

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <AkuInput
                placeholder='Фильтрация по названию'
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <AkuSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="сортировка по...."
                options={[
                    { value: 'title', name: 'названию' },
                    { value: 'body', name: 'описанию' },
                ]}

            />
        </div>
    )
}

export default PostFilter
