import https from 'https'

export default function ({ $axios }, inject) {
  // Create a custom axios instance
  console.log('agent')
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })

  $axios.setToken('292616c2-d352-4f41-b005-0b538aea1152', 'Bearer')
}
