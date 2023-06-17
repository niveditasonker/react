import React from 'react';

const List = (props) => {
    const { repos } = props;

    if(!repos) return null;

    if (!repos.length) {
        <p>No repos to display</p>
    }

    return (
    <ul>
        {repos.map((repo)=> {
            <li key={repo.id}>{repo.full_name}</li>
        })}
    </ul>)
}

export default List;