import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../store/Actions/userAction'

export const PartnerHome = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)

  useEffect(() => {
    dispatch(currentUser())
  }, [])

if(!user) return <div className='loader'></div>

  return (
    <div>PartnerHome</div>
  )
}
