import React from 'react'

function Article() {
  const url = +document.URL.split('').slice(document.URL.slice('').lastIndexOf('/') + 1)
  console.log(url)

  return (
    <div>
      testing
    </div>
  )
}

export default Article
