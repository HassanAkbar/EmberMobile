export function initialize(application) {
  console.log('i am being invoked')
  application.inject('route', 'framework-seven', 'service:framework-seven')
  application.inject('controller', 'framework-seven', 'service:framework-seven')
  application.inject('component', 'framework-seven', 'service:framework-seven')
  application.inject('view', 'framework-seven', 'service:framework-seven')
}

export default {
  name: 'framework7-service',
  initialize: initialize
};


