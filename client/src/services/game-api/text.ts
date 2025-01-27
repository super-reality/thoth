import { latitudeApiRootUrl } from '@/config'
import { getAuthHeader } from '../../contexts/AuthProvider'

export const completion = async body => {
  try {
    const response = await fetch(latitudeApiRootUrl + '/text/completions_v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(await getAuthHeader()),
      },
      body: JSON.stringify({ ...body, prompt: body.prompt.trimEnd() }),
    })
    const result = await response.json()
    return result.completions[0].text
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('fetch error', err)
  }
}
