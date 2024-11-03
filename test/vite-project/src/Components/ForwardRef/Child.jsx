
import React, { forwardRef } from 'react'

const Child = forwardRef((props,ref)=>( 
  <input type="text" ref={ref} name="" id="" placeholder='Focus getting input box' />
))
export default Child