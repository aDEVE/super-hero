export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Card } from '../..\\components\\card\\Card.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyCard = import('../..\\components\\card\\Card.vue' /* webpackChunkName: "components_card/Card" */).then(c => c.default || c)
