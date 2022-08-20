const React = require('react')
const Default = require('./layouts/default')

function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        {/* This is a JSX comment. */}
        {/* <p>I have [breads[0].name] breads!<p/>*/}
        <ul>
            {
                breads.map((breads, index) => {
                    return (<li key={index}>
                        <a href={`/bread/${index}`}>
                        {breads.name}
                        </a>
                        </li>)
            })
            } 
        </ul>
        <p>I have {breads[0].name} bread!</p>
      </Default>
    )
}


module.exports = Index
