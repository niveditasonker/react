
import React, {useState, useEffect} from 'react';

/*
const TreeRecursive = (fileData) => {
    console.log('====> TreeRecursive: ', fileData);
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <button onClick={() => setIsExpanded(prev => !prev)}>
                {fileData.children && (
                    <div style={{ paddingLeft: "6px", paddingRight: "6px", width: "20px" }} >
                        {isExpanded ? "-" : "+"}
                    </div>
                )}
                <span className="name" style={{ paddingLeft: fileData.children ? "" : "20px" }} >{fileData.name}</span>
            </button>

            <div style={{ borderLeft: "1px solid black", margin: "5px 5px" }}>
                {isExpanded && <div style={{ paddingLeft: `5px` }}>
                    {fileData.children ? fileData.children.map((item) => {
                        return <TreeRecursive fileData={item}/>
                    }): fileData.name}
                </div>}
            </div>
        </>
    )
}
*/


const Tree = ({ node }) => {
    // '▼' can be represented by '\u25BC'.
    // '▶' can be represented by '\u25B6'.
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    if (node.children) {
        return (
            <div>
                {/* <span onClick={handleToggle}>{isOpen ? '▼' : '▶'} {node.name}</span> */}
                <span onClick={handleToggle}>{isOpen ? '-' : '+'} {node.name}</span>
                {isOpen && (
                    <div style={{ marginLeft: '20px' }}>
                        {node.children.map((currNode) => {
                            return <Tree key={currNode.id} node={currNode}/>
                        })}
                    </div>
                )}
            </div>
        );
    }

    // return <div>▶ {node.name}</div>;
    return <div>* {node.name}</div>;
}

export default Tree;

// https://codesandbox.io/s/atlassian-fe-coding-interview-tivgc?file=/src/index.js
// https://devtools.tech/questions/s/how-to-build-a-file-explorer-atlassian-frontend-machine-coding-round-question-or-javascript-interview-question-or-react-js---qid---i2WQCZkIdpwGp2tG1LXJ