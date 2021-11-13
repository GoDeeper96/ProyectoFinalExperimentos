import React from 'react'

export const Course = () => {
    return (
        <div>
            <tr>
              <td>1</td>
              {Array.from({ length: 3 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
              ))}
              </tr>
        </div>
    )
}
