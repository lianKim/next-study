import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const AppLayout = ({children}) => {
  return (
    <>
      <Link href={'/users/1'}><a>users</a></Link>
      {children}
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout