import React from 'react'

const Table = () => {
  return (
    <div><table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Cage Type</th>
        <th scope="col">Location</th>
        <th scope="col">available</th>
        <th scope="col">Quantity</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <a href='/cage/id'><th scope="row">C01</th></a>
        <td>Đơn</td>
        <td>Khu B</td>
        <td>....</td>
        <td>8</td>
      </tr>
      
    </tbody>
  </table>
  </div>
  )
}

export default Table