import React, { Suspense, useState } from 'react'

const Tilt = React.lazy(() => import('./tilt'))

function useToggle(init = false) {
  const [on, setOn] = useState(init)
  const toggle = () => setOn(!on)
  return [on, toggle]
}

function ToggledTilt() {
  const [showTilt, toggleTilt] = useToggle()
  return (
    <div>
      <label htmlFor="show-tilt-checkbox">
        Show Tilt{' '}
        <input
          checked={showTilt}
          id="show-tilt-checkbox"
          onChange={toggleTilt}
          type="checkbox"
        />
      </label>
      <div style={{ height: 114, width: 184 }}>
        {showTilt ? (
          <Suspense fallback={<div>loading...</div>}>
            <Tilt />
          </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default ToggledTilt
