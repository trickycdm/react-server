import React, { useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Container from '@material-ui/core/Container'
import { CommunitiesGrid } from 'Components/CommunitiesGrid/CommunitiesGrid'
import { addAllCommunitiesToState } from 'Redux/communities'
import { getAllCommunities } from 'Api/services/communities/methods/get-all-communities/get-all-communities'
import { Banner } from 'Components/Banner/Banner'

const CommunitiesView = () => {
  const [loading, toggleLoading] = useState(true)
  const [error, toggleError] = useState(false)

  const dispatch = useDispatch()
  let { communities } = useSelector(state => (state), shallowEqual)
  if (communities === null) {
    getAllCommunities().then(communities => {
      if (communities.error) {
        toggleLoading(false)
        toggleError(communities.error)
      } else {
        toggleLoading(false)
        toggleError(false)
        dispatch(addAllCommunitiesToState(communities))
      }
    })
  }

  return (
    <Container maxWidth="md">
      {!communities && loading && 'Loading...'}
      {error && <Banner message={error} type='error' />}
      {communities && <CommunitiesGrid communities={communities} />}
    </Container>
  )
}

export { CommunitiesView }
