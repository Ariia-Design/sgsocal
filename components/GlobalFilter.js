import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

export default function GlobalFilter({ filter, setFilter }) {
  return (
    <MDBInput label='Search' type='text' value={filter || ''} onChange={e => setFilter(e.target.value)} />
  )
}
