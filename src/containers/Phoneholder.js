import React from 'react'

const Phoneholder = () => (
  <div
    style={{
      display: 'flex',
      flex: 2,
      flexDirection: 'row',
      height: '100%',
    }}
  >
    <div
      style={{
        height: 700,
        width: 350,
        borderRadius: 30,
        background: '#DFDFDF',
        padding: 5,
      }}
    >
      <div
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 30,
          backgroundColor: 'white',
        }}
      />
    </div>
  </div>
)

export default Phoneholder
