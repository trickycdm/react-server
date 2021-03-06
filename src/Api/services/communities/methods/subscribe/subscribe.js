import { initApiConnector } from 'Api/index'
import { logError } from 'Utils/log'
import { SUBSCRIBE_ENDPOINT } from '../../endpoints'

export const subscribe = async (community, user) => {
  try {
    const apic = initApiConnector()
    const resp = await apic.post(SUBSCRIBE_ENDPOINT, { community, user })
    if (resp.status === 201) return resp.data
    return { error: resp.problem }
  } catch (err) {
    logError(err)
    return { error: err.message }
  }
}
